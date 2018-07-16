const Cake = require('../models/Cake');
const keys = require('../config/keys');
const mongoose = require('mongoose');

mongoose.connect(keys.mongodbMobile.dbURI);

var cakes = [
    new Cake({
        cakeID       : 'nsk-vmc-cak-cbgc',
        brandID      : 'nsk-vmc',
        name         : 'Belgium Chocolate',
        wtAndCost    : [{0.5:400}, {1.0:800}, {2.0:1600}, {3.0:2400}, {4.0:3200}, {5.0:4000}],
        category     : 'chc',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-cbod',
        brandID      : 'nsk-vmc',
        name         : 'Bombay Delight',
        wtAndCost    : [{0.5:400}, {1.0:800}, {2.0:1600}, {3.0:2400}, {4.0:3200}, {5.0:4000}],
        category     : 'chc',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-ccbo',
        brandID      : 'nsk-vmc',
        name         : 'Choco Bounty',
        wtAndCost    : [{0.5:400}, {1.0:800}, {2.0:1600}, {3.0:2400}, {4.0:3200}, {5.0:4000}],
        category     : 'chc',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-ccdl',
        brandID      : 'nsk-vmc',
        name         : 'Choco Delight',
        wtAndCost    : [{0.5:400}, {1.0:800}, {2.0:1600}, {3.0:2400}, {4.0:3200}, {5.0:4000}],
        category     : 'chc',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-ccfr',
        brandID      : 'nsk-vmc',
        name         : 'Choco Forest',
        wtAndCost    : [{0.5:380}, {1.0:760}, {2.0:1520}, {3.0:2280}, {4.0:3040}, {5.0:3800}],
        category     : 'chc',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-ccft',
        brandID      : 'nsk-vmc',
        name         : 'Choco Fantasy',
        wtAndCost    : [{0.5:400}, {1.0:800}, {2.0:1600}, {3.0:2400}, {4.0:3200}, {5.0:4000}],
        category     : 'chc',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-ccho',
        brandID      : 'nsk-vmc',
        name         : 'Chocolate',
        wtAndCost    : [{0.5:380}, {1.0:760}, {2.0:1520}, {3.0:2280}, {4.0:3040}, {5.0:3800}],
        category     : 'chc',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-ccho',
        brandID      : 'nsk-vmc',
        name         : 'Chocolate',
        wtAndCost    : [{0.3 : 270}],
        category     : 'chc',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-cchp',
        brandID      : 'nsk-vmc',
        name         : 'Choco Chips',
        wtAndCost    : [{0.5:400}, {1.0:800}, {2.0:1600}, {3.0:2400}, {4.0:3200}, {5.0:4000}],
        category     : 'chc',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-ccsw',
        brandID      : 'nsk-vmc',
        name         : 'Cashew Chocolate',
        wtAndCost    : [{0.5:400}, {1.0:800}, {2.0:1600}, {3.0:2400}, {4.0:3200}, {5.0:4000}],
        category     : 'chc',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-cctf',
        brandID      : 'nsk-vmc',
        name         : 'Choco Truffle',
        wtAndCost    : [{0.5:400}, {1.0:800}, {2.0:1600}, {3.0:2400}, {4.0:3200}, {5.0:4000}],
        category     : 'tfl',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-ccvn',
        brandID      : 'nsk-vmc',
        name         : 'Choco Vanila',
        wtAndCost    : [{0.5:400}, {1.0:800}, {2.0:1600}, {3.0:2400}, {4.0:3200}, {5.0:4000}],
        category     : 'chc',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-ccwl',
        brandID      : 'nsk-vmc',
        name         : 'Choco Walnut',
        wtAndCost    : [{0.5:400}, {1.0:800}, {2.0:1600}, {3.0:2400}, {4.0:3200}, {5.0:4000}],
        category     : 'chc',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-cczb',
        brandID      : 'nsk-vmc',
        name         : 'Choco Zebra',
        wtAndCost    : [{0.5:400}, {1.0:800}, {2.0:1600}, {3.0:2400}, {4.0:3200}, {5.0:4000}],
        category     : 'chc',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-cdtc',
        brandID      : 'nsk-vmc',
        name         : 'Dutch Chocolate',
        wtAndCost    : [{0.5:400}, {1.0:800}, {2.0:1600}, {3.0:2400}, {4.0:3200}, {5.0:4000}],
        category     : 'chc',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-cntd',
        brandID      : 'nsk-vmc',
        name         : 'Nutties Delight ',
        wtAndCost    : [{0.5:400}, {1.0:800}, {2.0:1600}, {3.0:2400}, {4.0:3200}, {5.0:4000}],
        category     : 'chc',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-crgc',
        brandID      : 'nsk-vmc',
        name         : 'Regular Chocolate',
        wtAndCost    : [{0.5:380}, {1.0:760}, {2.0:1520}, {3.0:2280}, {4.0:3040}, {5.0:3800}],
        category     : 'chc',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-crlc',
        brandID      : 'nsk-vmc',
        name         : 'Royal Chocolate',
        wtAndCost    : [{0.5:400}, {1.0:800}, {2.0:1600}, {3.0:2400}, {4.0:3200}, {5.0:4000}],
        category     : 'chc',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-crtf',
        brandID      : 'nsk-vmc',
        name         : 'Royal Truffle',
        wtAndCost    : [{0.5:400}, {1.0:800}, {2.0:1600}, {3.0:2400}, {4.0:3200}, {5.0:4000}],
        category     : 'tfl',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-cstf',
        brandID      : 'nsk-vmc',
        name         : 'Swiss Truffle',
        wtAndCost    : [{0.5:400}, {1.0:800}, {2.0:1600}, {3.0:2400}, {4.0:3200}, {5.0:4000}],
        category     : 'tfl',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-cwcc',
        brandID      : 'nsk-vmc',
        name         : 'White Choco Chips',
        wtAndCost    : [{0.5:400}, {1.0:800}, {2.0:1600}, {3.0:2400}, {4.0:3200}, {5.0:4000}],
        category     : 'chc',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-cwdc',
        brandID      : 'nsk-vmc',
        name         : 'Wonder Chocolate',
        wtAndCost    : [{0.5:380}, {1.0:760}, {2.0:1520}, {3.0:2280}, {4.0:3040}, {5.0:3800}],
        category     : 'chc',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-fbct',
        brandID      : 'nsk-vmc',
        name         : 'Black Currant',
        wtAndCost    : [{0.5:380}, {1.0:760}, {2.0:1520}, {3.0:2280}, {4.0:3040}, {5.0:3800}],
        category     : 'frt',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-fbfs',
        brandID      : 'nsk-vmc',
        name         : 'Black Forest',
        wtAndCost    : [{0.5:350}, {1.0:700}, {2.0:1400}, {3.0:2100}, {4.0:2800}, {5.0:3500}],
        category     : 'blf',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-fbfs',
        brandID      : 'nsk-vmc',
        name         : 'Black Forest',
        wtAndCost    : [{0.3 : 250}],
        category     : 'blf',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-fblb',
        brandID      : 'nsk-vmc',
        name         : 'Blueberry',
        wtAndCost    : [{0.5:380}, {1.0:760}, {2.0:1520}, {3.0:2280}, {4.0:3040}, {5.0:3800}],
        category     : 'frt',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-fbts',
        brandID      : 'nsk-vmc',
        name         : 'Butterscotch',
        wtAndCost    : [{0.5:380}, {1.0:760}, {2.0:1520}, {3.0:2280}, {4.0:3040}, {5.0:3800}],
        category     : 'bts',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-fchr',
        brandID      : 'nsk-vmc',
        name         : 'Cherry',
        wtAndCost    : [{0.5:380}, {1.0:760}, {2.0:1520}, {3.0:2280}, {4.0:3040}, {5.0:3800}],
        category     : 'frt',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-fcrm',
        brandID      : 'nsk-vmc',
        name         : 'Caramel',
        wtAndCost    : [{0.5:380}, {1.0:760}, {2.0:1520}, {3.0:2280}, {4.0:3040}, {5.0:3800}],
        category     : 'chc',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-fcst',
        brandID      : 'nsk-vmc',
        name         : 'Cassata',
        wtAndCost    : [{0.5:400}, {1.0:800}, {2.0:1600}, {3.0:2400}, {4.0:3200}, {5.0:4000}],
        category     : 'frt',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-fkjm',
        brandID      : 'nsk-vmc',
        name         : 'Kajumalai',
        wtAndCost    : [{0.5:450}, {1.0:900}, {2.0:1800}, {3.0:2700}, {4.0:3600}, {5.0:4500}],
        category     : 'inf',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-fkwi',
        brandID      : 'nsk-vmc',
        name         : 'Kiwi',
        wtAndCost    : [{0.5:380}, {1.0:760}, {2.0:1520}, {3.0:2280}, {4.0:3040}, {5.0:3800}],
        category     : 'frt',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-flic',
        brandID      : 'nsk-vmc',
        name         : 'Litchi',
        wtAndCost    : [{0.5:380}, {1.0:760}, {2.0:1520}, {3.0:2280}, {4.0:3040}, {5.0:3800}],
        category     : 'frt',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-fmfr',
        brandID      : 'nsk-vmc',
        name         : 'Mixfruit',
        wtAndCost    : [{0.5:400}, {1.0:800}, {2.0:1600}, {3.0:2400}, {4.0:3200}, {5.0:4000}],
        category     : 'frt',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-fmgo',
        brandID      : 'nsk-vmc',
        name         : 'Mango',
        wtAndCost    : [{0.5:380}, {1.0:760}, {2.0:1520}, {3.0:2280}, {4.0:3040}, {5.0:3800}],
        category     : 'frt',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-fpnp1',
        brandID      : 'nsk-vmc',
        name         : 'Pinapple',
        wtAndCost    : [{0.5:350}, {1.0:700}, {2.0:1400}, {3.0:2100}, {4.0:2800}, {5.0:3500}],
        category     : 'frt',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-fpnp2',
        brandID      : 'nsk-vmc',
        name         : 'Pinapple',
        wtAndCost    : [{0.3 : 250}],
        category     : 'frt',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-fpst',
        brandID      : 'nsk-vmc',
        name         : 'Pista',
        wtAndCost    : [{0.5:450}, {1.0:900}, {2.0:1800}, {3.0:2700}, {4.0:3600}, {5.0:4500}],
        category     : 'inf',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-frdv',
        brandID      : 'nsk-vmc',
        name         : 'Redvelvet',
        wtAndCost    : [{0.5:450}, {1.0:900}, {2.0:1800}, {3.0:2700}, {4.0:3600}, {5.0:4500}],
        category     : 'rdv',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-frsm',
        brandID      : 'nsk-vmc',
        name         : 'Rasmali',
        wtAndCost    : [{0.5:450}, {1.0:900}, {2.0:1800}, {3.0:2700}, {4.0:3600}, {5.0:4500}],
        category     : 'inf',
        egged        : false
    }),
    new Cake({
        cakeID       : 'nsk-vmc-cak-fstb',
        brandID      : 'nsk-vmc',
        name         : 'Strawberry',
        wtAndCost    : [{0.5:380}, {1.0:760}, {2.0:1520}, {3.0:2280}, {4.0:3040}, {5.0:3800}],
        category     : 'frt',
        egged        : false
    }),
];

var done = 0;
for (var i = 0; i < cakes.length; i++) {
    cakes[i].save(function(err, result) {
        done++;
        if (done === cakes.length) {
            mongoDisconnect();
        }
    });  
}

const mongoDisconnect = () => {
    mongoose.disconnect();
    console.log('disconnected');   
}
