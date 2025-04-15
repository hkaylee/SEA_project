// guitar database - constant array 

const guitars = [
    {
      name: "Yamaha FS800 Folk Acoustic Guitar Sand Burst",
      brand: "Yamaha",
      type: "Folk Acoustic",
      price: 229.99,
      image: "images/yamaha_fs800.png",
      description: "Yamaha's FS800 folk acoustic guitar is a versatile instrument prized for its outstanding quality and value. Featuring a solid Sitka spruce top and nato back and sides, the FS800 produces a balanced tone with crisp highs, focused mids and robust lows. Yamaha developed an innovative scalloped bracing design that maintains the top board's durability while maximizing resonance. The result is an acoustic with impressive volume and sustain for its compact size.",
      url: "https://www.guitarcenter.com/Yamaha/FS800-Folk-Acoustic-Guitar-Sand-Burst-1500000007801.gc",
      isNew: "New",
      favorited: false
    },
    {
      name: "Fender FA-135CE Concert Acoustic-Electric Guitar Black",
      brand: "Fender",
      type: "Acoustic Electric",
      price: 199.99,
      image: "images/fender_fa135ce.png",
      description: "The Fender FA-135CE acoustic-electric guitar is the perfect choice for players seeking a versatile and affordable instrument that's ready for both stage and studio. With its comfortable concert body, built-in Fishman electronics, and classic Fender styling, the FA-135CE delivers exceptional value and performance for beginners and experienced players alike. Experience the rich, resonant tone of a laminated spruce top combined with the warm, balanced sound of basswood back and sides. Whether you're strumming chords at home, performing live or recording your next track, the FA-135CE empowers you to explore your musicality with confidence.",
      url: "https://www.guitarcenter.com/Fender/FA-135CE-Concert-Acoustic-Electric-Guitar-Black-1500000254301.gc",
      isNew: "New",
      favorited: false
    },
    {
      name: "Epiphone Dove Studio Limited-Edition Acoustic-Electric Guitar Alpine White",
      brand: "Epiphone",
      type: "Acoustic Electric",
      price: 399.99,
      image: "images/epiphone_dove.png",
      description: "This Epiphone Dove Studio Limited-Edition acoustic-electric guitar comes in a cool Alpine White finish recreating the '60s classic, and features a solid spruce top and iconic pickguard art, plus the Fishman Sonitone pickup system and Grover machine heads.",
      url: "https://www.guitarcenter.com/Epiphone/Limited-Edition-Dove-PRO-Acoustic-Electric-Guitar-Alpine-White-1500000222960.gc",
      isNew: "New",
      favorited: false
    },
    {
      name: "Ibanez GA35FMTCE Flamed Maple Top Classical Acoustic-Electric Guitar Emerald Burst",
      brand: "Ibanez",
      type: "Classical Acoustic Electric",
      price: 339.99,
      image: "images/ibanez_ga35fmtce.png",
      description: "The Ibanez GA35FMTCE flamed maple top classical acoustic-electric guitar combines stunning aesthetics, smooth playability and reliable electronics to deliver a high-quality nylon-string experience. Featuring a thinline cutaway classical body design, this guitar is lightweight and easy to handle, making it perfect for longer practice sessions or performance settings. The flamed maple top provides a bright and focused tone, while the sapele back and sides add warmth and depth to its sound profile. With a narrower 46 mm nut width, this instrument is particularly accessible for players transitioning from steel-string guitars. Equipped with the Ibanez AEQ210T preamp and undersaddle pickup, the GA35FMTCE ensures clear, natural amplification and tonal control, making it a versatile companion for any nylon-string player.",
      url: "https://www.guitarcenter.com/Ibanez/GA35FMTCE-Flamed-Maple-Top-Classical-Acoustic-Electric-Guitar-Emerald-Burst-1500000445800.gc",
      isNew: "New",
      favorited: false
    },
    {
      name: "Fender Standard Stratocaster Maple Fingerboard Electric Guitar Olympic White",
      brand: "Fender",
      type: "Electric",
      price: 599.99,
      image: "images/fender_strat.png",
      description: "The Fender Standard Stratocaster electric guitar is designed to inspire players on their musical journeys. Combining approachable playability with the bright, articulate tone that made Fender an icon of rock & roll, this Stratocaster delivers the best of Fender’s heritage. Powered by Fender Standard ceramic single-coil pickups and featuring an inviting Modern C-shaped maple neck, this guitar is a true classic.",
      url: "https://www.guitarcenter.com/Fender/Standard-Stratocaster-Maple-Fingerboard-Electric-Guitar-Olympic-White-1500000447237.gc",
      isNew: "New",
      favorited: false
    },
    {
      name: "Gibson SG Standard '61 Electric Guitar Vintage Cherry",
      brand: "Gibson",
      type: "Electric",
      price: 1999.00,
      image: "images/gibson_vintage.png",
      description: "The aptly named Gibson SG Standard '61, with its infamous 'devil horns,' debuted in the early '60s as the first double-cut electric guitar from the renowned purveyors of the Les Paul. Then headed by Ted McCarty, Gibson responded to the growing popularity of double-cut instruments by introducing the Solid Guitar (SG). A truly versatile classic, the reissued SG Standard '61 embodies the looks and features associated with the guitar that temporarily halted LP production, including a SlimTaper neck, rosewood fingerboard and solid mahogany body. Gibson Burstbucker '61 pickups lace the SG with vintage voicing, power and top-end clarity. The Gibson SG Standard ’61 honors a legacy of profound innovation—a future-proof double cut recalling the guitar’s everlasting prime.",
      url: "https://www.guitarcenter.com/Gibson/SG-Standard-61-Electric-Guitar-Vintage-Cherry-1500000274179.gc", 
      isNew: "New",
      favorited: false
    },
    {
        name: "Fender FA-15 Steel 3/4 Scale Acoustic Guitar Natural",
        brand: "Fender",
        type: "Acoustic",
        price: 179.99,
        image: "images/fender_fa15.png",
        description: "The 3/4-size steel-string FA-15 Acoustic Guitar from Fender is a visually stunning instrument at a budget-friendly price. Featuring quality laminate construction with a modern Fender 3+3 headstock, the FA-15 not only sounds great, but is also easy to pick up even for beginning guitarists. With a nato neck for a lively tone, the Fender FA-15 comes with a gig bag for portable protection.",
        url: "https://www.guitarcenter.com/Fender/FA-15-Steel-3-4-Scale-Acoustic-Guitar-Natural-1500000347291.gc", 
        isNew: "New",
        favorited: false
    },
    {
        name: "Rogue RA-090 Dreadnought Acoustic Guitar Black",
        brand: "Rogue",
        type: "Acoustic",
        price: 79.99,
        image: "images/rogue_ra090.png",
        description: "This ultraaffordable dreadnought acoustic guitar features a whitewood body, which brings out lots of midrange punch. The nato neck adds sustain without losing any strength in tone. The painted maple bridge and fingerboard add clarity to each note, and a striking look to the front of the guitar. The RA-090's C-shape neck, 1-2/3 ' nut width and 16' radius help with intricate fretboard movements when running up and down the 20 frets. The RA-090 also features nickel hardware and covered tuners. This Rogue acoustic guitar will certainly get the job done, and it comes at a price that anybody can afford.",
        url: "https://www.guitarcenter.com/Rogue/RA-090-Dreadnought-Acoustic-Guitar-Black-1274115039751.gc?pfm=krecs+1274115039751+65786+GCWPDPSI+EPIMA)", 
        isNew: "New",
        favorited: false
    },
    {
        name: "Used Mitchell MD200 Black Solid Body Electric Guitar",
        brand: "Mitchell",
        type: "Electric",
        price: 109.99,
        image: "images/mitchell_md200.png",
        description: "Used Mitchell MD200 Black Solid Body Electric Guitar in Good condition—perfect for beginners or anyone seeking a versatile, affordable instrument. Featuring a sleek black finish and double-cutaway design, the MD200 is equipped with a carved maple top and a lightweight poplar body. It includes dual high-output humbucking pickups for a powerful, modern tone, paired with a 3-way toggle switch for tonal flexibility. The bolt-on maple neck with a rosewood fingerboard offers smooth playability across 24 medium jumbo frets. A string-through-body design enhances sustain, while black nickel hardware completes the bold, modern look. This guitar is used but fully functional, with only minor cosmetic wear—ideal for players wanting quality and style without the premium price tag.",
        url: "https://www.guitarcenter.com/product-detail-page?skuId=site5120999514", 
        isNew: "Used",
        favorited: false
      },
      {
        name: "Used Taylor GS MINI-E ROSEWOOD Natural Acoustic Electric Guitar",
        brand: "Taylor",
        type: "Acoustic Electric",
        price: 539.99,
        image: "images/taylor_gsmini.png",
        description: "Experience the perfect blend of portability, performance, and tone with this used TAYLOR GS MINI-E ROSEWOOD Natural Acoustic Electric Guitar in great condition. Featuring a solid Sitka spruce top paired with layered rosewood back and sides, it delivers a rich, balanced sound with impressive projection for its compact size. The built-in ES-B pickup system with onboard tuner ensures plug-and-play convenience for stage or studio. Its short 23.5-inch scale length and compact Grand Symphony-inspired body shape make it incredibly comfortable and travel-friendly, without sacrificing tonal quality. This pre-owned instrument has been well cared for, with minimal signs of wear and full playability intact—perfect for both seasoned musicians and beginners seeking a premium acoustic-electric guitar.",
        url: "https://www.guitarcenter.com/product-detail-page?skuId=site5120994727", 
        isNew: "Used",
        favorited: false
      },
      {
        name: "Used Jackson JS34Q Dinky Trans Purple Solid Body Electric Guitar",
        brand: "Jackson",
        type: "Electric",
        price: 199.99,
        image: "images/jackson_js34q.png",
        description: "Looking for a high-performance guitar at an unbeatable value? This used Jackson JS34Q Dinky in a striking Transparent Purple finish delivers powerful tone and sleek style. Featuring a lightweight poplar body with a stunning quilt maple top, a bolt-on maple neck with graphite reinforcement, and a compound-radius rosewood fingerboard with 24 jumbo frets, it's built for fast, comfortable playability. Dual high-output Jackson humbuckers provide aggressive tones ideal for rock and metal, and the double-locking tremolo system lets you dive bomb with confidence. This guitar is in Good condition with minor cosmetic wear, fully functional electronics, and ready to rock.",
        url: "https://www.guitarcenter.com/product-detail-page?skuId=site5121000959", 
        isNew: "Used",
        favorited: false
      },
      {
        name: "Jackson American Series Soloist SL3 Electric Guitar Riviera Blue",
        brand: "Jackson",
        type: "Electric",
        price: 1799.00,
        image: "images/jackson_sl3.png",
        description: "This American Series Soloist SL3 electric guitar is a high-performance axe designed to push the boundaries of speed, sound and innovation. At its core is an alder body paired with a 3-piece maple neck for enhanced sustain and rock-solid stability, reinforced by graphite rods. The 12 inch–16 inch compound radius rolled ebony fingerboard with 24 jumbo frets is engineered for fluid fretting and shredding at breakneck speeds.",
        url: "https://www.guitarcenter.com/Jackson/American-Series-Soloist-SL3-Electric-Guitar-Riviera-Blue-1500000375463.gc", 
        isNew: "New",
        favorited: false
      }
  ];
  