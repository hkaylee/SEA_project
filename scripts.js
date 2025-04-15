// global variables 
let currentPage = 0;
let filteredGuitars = [];
for (let i = 0; i < guitars.length; i++) { // shallow copy of guitars array 
  filteredGuitars.push(guitars[i]);
}
let favorites = []; // array stores favorited guitars 

const guitarsPerPage = 2; // two guitars per page

function createCardHTML(guitar, index) {
  const isFav = favorites.includes(index); // check if favorited
  return `
    <li class="guitar-card">
      <div class="guitar-image">
        <img src="${guitar.image}" alt="${guitar.name}">
      </div>
      <div class="guitar-info">
        <h3>${guitar.name}</h3>
        <p><strong>Price:</strong> $${guitar.price}</p>
        <p><strong>Type:</strong> ${guitar.type}</p>
        <p><strong>Brand:</strong> ${guitar.brand}</p>
        <p><strong>New/Used:</strong> ${guitar.isNew}</p>
        <p>${guitar.description}</p>
        <p><button class="store-btn" onclick="window.open('${guitar.url}', '_blank')">Link to Store</button></p>
      </div>
      <i class="favorite-icon ${isFav ? "favorited" : ""}" onclick="favoriteStar(${index})">
        <i class="fas fa-star"></i>
      </i>
    </li>
  `;
}


function updatePages() {
  const leftPage = document.getElementById("left-page");
  const rightPage = document.getElementById("right-page");
  const startIndex = currentPage * guitarsPerPage;
  const endIndex = startIndex + guitarsPerPage;
  const pageItems = filteredGuitars.slice(startIndex, endIndex); // show guitar cards
  // clear everythign on right and left page 
  leftPage.innerHTML = "";
  rightPage.innerHTML = "";

  // create a card for each guitar and assign to column
  for (let i = 0; i< pageItems.length; i++) {
    const guitar = pageItems[i];
    const cardHTML = createCardHTML(guitar, startIndex + i);
  
    if (i === 0) {
      leftPage.innerHTML = cardHTML; 
    } else if (i === 1) {
      rightPage.innerHTML = cardHTML;
    }
  }
  
}

// Update the favorites popup list
function updateFavoritesPopUp() {
  const favList = document.getElementById("favoritesList");
  favList.innerHTML = "";
  
  favorites.forEach(favIdx => {
    const guitar = guitars[favIdx];
    const li = document.createElement("li");
    // pop up html 
    li.innerHTML = `
      <div class="fav-card">
        <div class="fav-image">
          <img src="${guitar.image}" alt="${guitar.name}">
        </div>
        <div class="fav-info">
          <h3>${guitar.name}</h3>
          <p><strong>Brand:</strong> ${guitar.brand}</p>
          <p><strong>Type:</strong> ${guitar.type}</p>
          <p><strong>Price:</strong> $${guitar.price}</p>
          <p><strong>New/Used:</strong> ${guitar.isNew}</p>
          <p>${guitar.description}</p>
          <p><button class="store-btn" onclick="window.open('${guitar.url}', '_blank')">Link to Store</button></p>
        </div>
        <button class="remove-btn" onclick="removeFavorite(${favIdx})">&times;</button>
      </div>
    `;
    favList.appendChild(li);
  });
}

// add to favorite or remove if already favorited
function favoriteStar(index) {
  const favIndex = favorites.indexOf(index);
  if (favIndex == -1) {
    favorites.push(index);
    updatePages();
    updateFavoritesPopUp();
  } else {
    favorites.splice(favIndex, 1); // remove from favorites 
    updatePages();
    updateFavoritesPopUp();
  }
}

// Remove a favorite inside popup, user clicks 'x'
function removeFavorite(index) {
  const favIndex = favorites.indexOf(index);
  if (favIndex != -1) {
    favorites.splice(favIndex, 1); // remove
    updatePages();
    updateFavoritesPopUp();
  }
}

// Search filtering
document.getElementById("searchInput").addEventListener("input", function() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toUpperCase(); // not case sensitive
  
  // reset filteredGuitars array
  filteredGuitars = [];
  
  // loop through guitars in the original array
  for (let i = 0; i < guitars.length; i++) {
    const guitar = guitars[i];
    const guitarName = guitar.name.toUpperCase();
    const guitarBrand = guitar.brand.toUpperCase();
    const guitarType = guitar.type.toUpperCase();
    const guitarDesc = guitar.description.toUpperCase();
    
    // Check if search term is found 
    if (guitarName.indexOf(filter) > -1 || 
        guitarBrand.indexOf(filter) > -1 || 
        guitarType.indexOf(filter) > -1 || 
        guitarDesc.indexOf(filter) > -1) {
      // add to guitars displayed 
      filteredGuitars.push(guitar);
    }
  }

  // Update the display
  currentPage = 0; 
  updatePages();
});

// animations below 

// page flip animation 
function animateFlip(direction, callback) {
  const flipPage = document.getElementById("pageFlipper");
  if (direction == "back") {
      flipPage.style.left = "0";
      flipPage.style.right = "";
      flipPage.style.transformOrigin = "right center";
      flipPage.classList.add("flip-reverse");
  } else {
      flipPage.style.left = "";
      flipPage.style.right = "0";
      flipPage.style.transformOrigin = "left center";
      flipPage.classList.add("flip");
  }
  setTimeout(() => {
    if (direction == "back") {
      flipPage.classList.remove("flip-reverse");
    } else {
      flipPage.classList.remove("flip");
    }
    callback();
  }, 500);
}

// animate flip when next or back button's are pressed
document.getElementById("nextBtn").addEventListener("click", () => {
  const maxPage = 5;
  if (currentPage < maxPage) {
    animateFlip("next", () => {
      currentPage++;
      updatePages();
    });
  }
});

document.getElementById("backBtn").addEventListener("click", () => {
  if (currentPage > 0) {
    animateFlip("back", () => {
      currentPage--;
      updatePages();
    });
  }
});

// Favorites pop up controls
const favoritesBtn = document.getElementById("favoritesBtn");
const FavoritesPopUp = document.getElementById("favoritesPopUp");
const closePopUp = document.getElementById("closePopUp");

favoritesBtn.addEventListener("click", () => {
  FavoritesPopUp.style.display = "flex";
});

closePopUp.addEventListener("click", () => {
  FavoritesPopUp.style.display = "none";
});

updatePages();
updateFavoritesPopUp();
