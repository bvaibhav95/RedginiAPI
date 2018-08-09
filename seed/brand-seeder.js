const Brand = require("../models/Brand");
const keys = require("../config/keys");
const mongoose = require("mongoose");

mongoose.connect(keys.mongodbMobile.dbURI);

var brands = [
  new Brand({
    id: "nsk-vmc",
    imageURL: keys.cloudinary.url + "/brands/vmcelebration.jpg",
    name: "VM Celebrations",
    contact: {
      owner: { name: "Rahul jade", phone: "9960056789" },
      poc1: { name: "Chetan jadhav", phone: "8928004567" },
      poc2: { name: "", phone: "" },
      poc3: { name: "", phone: "" }
    },
    email: "vmefoods@gmail.com",
    avgMinOrderBefore: "60 mins",
    address: {
      shops: ["VM Celebrations, model colony, college road, Nashik - 422013"],
      bakery: ["near carbon naka, MIDC, Satpur, Nashik"],
      resident: [""]
    },
    menuCard: [
      {
        name: "Fresh cream cakes",
        catId: "cak",
        catIdArray: ["blf", "chc", "frt", "tfl", "bts", "inf", "rdv"],
        catNamesArray: [
          "Blackforest",
          "Chocolate",
          "Fruit",
          "Truffle",
          "Butterscotch",
          "Indian flavor",
          "Red velvet"
        ],
        pdtArray: [
          {
            pdtId: "nsk-vmc-cak-cbgc",
            brandID: "nsk-vmc",
            name: "Belgium Chocolate",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "chc",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-cbod",
            brandID: "nsk-vmc",
            name: "Bombay Delight",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "chc",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-ccbo",
            brandID: "nsk-vmc",
            name: "Choco Bounty",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "chc",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-ccdl",
            brandID: "nsk-vmc",
            name: "Choco Delight",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "chc",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-ccfr",
            brandID: "nsk-vmc",
            name: "Choco Forest",
            wtAndCost: [
              { 0.5: 380 },
              { 1.0: 760 },
              { 2.0: 1520 },
              { 3.0: 2280 },
              { 4.0: 3040 },
              { 5.0: 3800 }
            ],
            category: "chc",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-ccft",
            brandID: "nsk-vmc",
            name: "Choco Fantasy",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "chc",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-ccho",
            brandID: "nsk-vmc",
            name: "Chocolate",
            wtAndCost: [
              { 0.5: 380 },
              { 1.0: 760 },
              { 2.0: 1520 },
              { 3.0: 2280 },
              { 4.0: 3040 },
              { 5.0: 3800 }
            ],
            category: "chc",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-ccho",
            brandID: "nsk-vmc",
            name: "Chocolate",
            wtAndCost: [{ 0.3: 270 }],
            category: "chc",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-cchp",
            brandID: "nsk-vmc",
            name: "Choco Chips",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "chc",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-ccsw",
            brandID: "nsk-vmc",
            name: "Cashew Chocolate",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "chc",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-cctf",
            brandID: "nsk-vmc",
            name: "Choco Truffle",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "tfl",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-ccvn",
            brandID: "nsk-vmc",
            name: "Choco Vanila",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "chc",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-ccwl",
            brandID: "nsk-vmc",
            name: "Choco Walnut",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "chc",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-cczb",
            brandID: "nsk-vmc",
            name: "Choco Zebra",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "chc",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-cdtc",
            brandID: "nsk-vmc",
            name: "Dutch Chocolate",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "chc",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-cntd",
            brandID: "nsk-vmc",
            name: "Nutties Delight ",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "chc",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-crgc",
            brandID: "nsk-vmc",
            name: "Regular Chocolate",
            wtAndCost: [
              { 0.5: 380 },
              { 1.0: 760 },
              { 2.0: 1520 },
              { 3.0: 2280 },
              { 4.0: 3040 },
              { 5.0: 3800 }
            ],
            category: "chc",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-crlc",
            brandID: "nsk-vmc",
            name: "Royal Chocolate",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "chc",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-crtf",
            brandID: "nsk-vmc",
            name: "Royal Truffle",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "tfl",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-cstf",
            brandID: "nsk-vmc",
            name: "Swiss Truffle",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "tfl",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-cwcc",
            brandID: "nsk-vmc",
            name: "White Choco Chips",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "chc",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-cwdc",
            brandID: "nsk-vmc",
            name: "Wonder Chocolate",
            wtAndCost: [
              { 0.5: 380 },
              { 1.0: 760 },
              { 2.0: 1520 },
              { 3.0: 2280 },
              { 4.0: 3040 },
              { 5.0: 3800 }
            ],
            category: "chc",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-fbct",
            brandID: "nsk-vmc",
            name: "Black Currant",
            wtAndCost: [
              { 0.5: 380 },
              { 1.0: 760 },
              { 2.0: 1520 },
              { 3.0: 2280 },
              { 4.0: 3040 },
              { 5.0: 3800 }
            ],
            category: "frt",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-fbfs",
            brandID: "nsk-vmc",
            name: "Black Forest",
            wtAndCost: [
              { 0.5: 350 },
              { 1.0: 700 },
              { 2.0: 1400 },
              { 3.0: 2100 },
              { 4.0: 2800 },
              { 5.0: 3500 }
            ],
            category: "blf",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-fbfs",
            brandID: "nsk-vmc",
            name: "Black Forest",
            wtAndCost: [{ 0.3: 250 }],
            category: "blf",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-fblb",
            brandID: "nsk-vmc",
            name: "Blueberry",
            wtAndCost: [
              { 0.5: 380 },
              { 1.0: 760 },
              { 2.0: 1520 },
              { 3.0: 2280 },
              { 4.0: 3040 },
              { 5.0: 3800 }
            ],
            category: "frt",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-fbts",
            brandID: "nsk-vmc",
            name: "Butterscotch",
            wtAndCost: [
              { 0.5: 380 },
              { 1.0: 760 },
              { 2.0: 1520 },
              { 3.0: 2280 },
              { 4.0: 3040 },
              { 5.0: 3800 }
            ],
            category: "bts",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-fchr",
            brandID: "nsk-vmc",
            name: "Cherry",
            wtAndCost: [
              { 0.5: 380 },
              { 1.0: 760 },
              { 2.0: 1520 },
              { 3.0: 2280 },
              { 4.0: 3040 },
              { 5.0: 3800 }
            ],
            category: "frt",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-fcrm",
            brandID: "nsk-vmc",
            name: "Caramel",
            wtAndCost: [
              { 0.5: 380 },
              { 1.0: 760 },
              { 2.0: 1520 },
              { 3.0: 2280 },
              { 4.0: 3040 },
              { 5.0: 3800 }
            ],
            category: "chc",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-fcst",
            brandID: "nsk-vmc",
            name: "Cassata",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "frt",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-fkjm",
            brandID: "nsk-vmc",
            name: "Kajumalai",
            wtAndCost: [
              { 0.5: 450 },
              { 1.0: 900 },
              { 2.0: 1800 },
              { 3.0: 2700 },
              { 4.0: 3600 },
              { 5.0: 4500 }
            ],
            category: "inf",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-fkwi",
            brandID: "nsk-vmc",
            name: "Kiwi",
            wtAndCost: [
              { 0.5: 380 },
              { 1.0: 760 },
              { 2.0: 1520 },
              { 3.0: 2280 },
              { 4.0: 3040 },
              { 5.0: 3800 }
            ],
            category: "frt",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-flic",
            brandID: "nsk-vmc",
            name: "Litchi",
            wtAndCost: [
              { 0.5: 380 },
              { 1.0: 760 },
              { 2.0: 1520 },
              { 3.0: 2280 },
              { 4.0: 3040 },
              { 5.0: 3800 }
            ],
            category: "frt",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-fmfr",
            brandID: "nsk-vmc",
            name: "Mixfruit",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "frt",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-fmgo",
            brandID: "nsk-vmc",
            name: "Mango",
            wtAndCost: [
              { 0.5: 380 },
              { 1.0: 760 },
              { 2.0: 1520 },
              { 3.0: 2280 },
              { 4.0: 3040 },
              { 5.0: 3800 }
            ],
            category: "frt",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-fpnp1",
            brandID: "nsk-vmc",
            name: "Pinapple",
            wtAndCost: [
              { 0.5: 350 },
              { 1.0: 700 },
              { 2.0: 1400 },
              { 3.0: 2100 },
              { 4.0: 2800 },
              { 5.0: 3500 }
            ],
            category: "frt",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-fpnp2",
            brandID: "nsk-vmc",
            name: "Pinapple",
            wtAndCost: [{ 0.3: 250 }],
            category: "frt",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-fpst",
            brandID: "nsk-vmc",
            name: "Pista",
            wtAndCost: [
              { 0.5: 450 },
              { 1.0: 900 },
              { 2.0: 1800 },
              { 3.0: 2700 },
              { 4.0: 3600 },
              { 5.0: 4500 }
            ],
            category: "inf",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-frdv",
            brandID: "nsk-vmc",
            name: "Redvelvet",
            wtAndCost: [
              { 0.5: 450 },
              { 1.0: 900 },
              { 2.0: 1800 },
              { 3.0: 2700 },
              { 4.0: 3600 },
              { 5.0: 4500 }
            ],
            category: "rdv",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-frsm",
            brandID: "nsk-vmc",
            name: "Rasmali",
            wtAndCost: [
              { 0.5: 450 },
              { 1.0: 900 },
              { 2.0: 1800 },
              { 3.0: 2700 },
              { 4.0: 3600 },
              { 5.0: 4500 }
            ],
            category: "inf",
            egged: false
          },
          {
            pdtId: "nsk-vmc-cak-fstb",
            brandID: "nsk-vmc",
            name: "Strawberry",
            wtAndCost: [
              { 0.5: 380 },
              { 1.0: 760 },
              { 2.0: 1520 },
              { 3.0: 2280 },
              { 4.0: 3040 },
              { 5.0: 3800 }
            ],
            category: "frt",
            egged: false
          }
        ]
      },
      {
        name: "Gifts",
        catId: "gif",
        catIdArray: ["bln", "cnd", "cps", "blw"],
        catNamesArray: ["Ballons", "Candles", "Caps", "Blowers"],
        pdtArray: [
          {
            pdtId: "nsk-vmc-gif-bln",
            brandID: "nsk-vmc",
            name: "Ballons",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "bln",
            egged: false
          },
          {
            pdtId: "nsk-vmc-gif-cnd",
            brandID: "nsk-vmc",
            name: "Bombay Delight",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "cnd",
            egged: false
          },
          {
            pdtId: "nsk-vmc-gif-cps",
            brandID: "nsk-vmc",
            name: "Choco Bounty",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "cps",
            egged: false
          },
          {
            pdtId: "nsk-vmc-gif-blw",
            brandID: "nsk-vmc",
            name: "Choco Delight",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "blw",
            egged: false
          },
          {
            pdtId: "nsk-vmc-gif-bln1",
            brandID: "nsk-vmc",
            name: "Ballons1",
            wtAndCost: [
              { 0.5: 380 },
              { 1.0: 760 },
              { 2.0: 1520 },
              { 3.0: 2280 },
              { 4.0: 3040 },
              { 5.0: 3800 }
            ],
            category: "bln",
            egged: false
          },
          {
            pdtId: "nsk-vmc-gif-bln2",
            brandID: "nsk-vmc",
            name: "Ballons2",
            wtAndCost: [
              { 0.5: 400 },
              { 1.0: 800 },
              { 2.0: 1600 },
              { 3.0: 2400 },
              { 4.0: 3200 },
              { 5.0: 4000 }
            ],
            category: "bln",
            egged: false
          }
        ]
      }
    ]
  }),
  new Brand({
    id: "nsk-tct",
    imageURL: keys.cloudinary.url + "/brands/toccata.jpg",
    name: "Toccata cake shop",
    contact: {
      owner: { name: "Athang kalamkar", phone: "9096229991" },
      poc1: { name: "poc1", phone: "9922551597" },
      poc2: { name: "", phone: "" },
      poc3: { name: "", phone: "" }
    },
    email: "toccata@rediffmail.com",
    avgMinOrderBefore: "60 mins",
    address: {
      shops: ["Toccata chocolates and cakes, mahatma nagar, Nashik - 422013"],
      bakery: [""],
      resident: [""]
    },
    menuCard: [
      {
        name: "Fresh cream cakes",
        catId: "cak",
        catIdArray: ["blf", "chc", "frt", "tfl", "bts", "vnl"]
      }
    ]
  }),
  new Brand({
    id: "nsk-hsg",
    name: "Sponge - The home bakers",
    imageURL: keys.cloudinary.url + "/brands/sponge.jpg",
    contact: {
      owner: { name: "Disha Khairnar", phone: "7798257722" },
      poc1: { name: "Disha Khairnar", phone: "7798257722" },
      poc2: { name: "", phone: "" },
      poc3: { name: "", phone: "" }
    },
    email: "homelysponge@gmail.com",
    avgMinOrderBefore: "1 day",
    address: {
      shops: ["Gangapur road, Nashik - 422013"],
      bakery: ["Gangapur road, Nashik - 422013"],
      resident: [
        "303, Gurudev appt., near shivsatya ground, gangapur road, Nashik - 422013"
      ]
    },
    menuCard: [
      {
        name: "Fresh cream cakes",
        catId: "cak",
        catIdArray: ["blf", "chc", "frt", "tfl", "bts", "vnl"]
      }
    ]
  })
];

var done = 0;
for (var i = 0; i < brands.length; i++) {
  brands[i].save(function(err, result) {
    done++;
    if (done === brands.length) {
      mongoDisconnect();
    }
  });
}

const mongoDisconnect = () => {
  mongoose.disconnect();
  console.log("disconnected");
};
