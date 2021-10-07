const express = require('express');
const router = express.Router();



const Hotels = require('../data/hiltonDerbyHotels');


let vaccineRequiredHotelCodes = [
  'CTAC-',
  'SEAFW',
  'LION-',
  'LKEGI',
  'SEAAC',
  'SEAAH',
  'SEAAR',
  'SEABA',
  'SEABE',
  'SEABL',
  'SEACS',
  'SEACU',
  'SEADT',
  'SEAHM',
  'SEAHW',
  'SEAIA',
  'SEAIQ',
  'SEAIS',
  'SEAKT',
  'SEANG',
  'SEANP',
  'SEAPS',
  'SEARE',
  'SEARH',
  'SEARN',
  'SEASH',
  'SEASP',
  'SEAST',
  'SEATK',
  'SEATS',
  'SEATU',
  'SEAUK',
  'SEAWO',
  'SEASO',
  'EWRSH',
  'ROMES',
  'LCHWP',
  'AREAR',
  'DORPR',
  'EWRSI',
  'ISPMV',
  'ISPIC',
  'JFKQA',
  'MSYCC',
  'MSYDT',
  'MSYFE',
  'MSYFQ',
  'MSYFR',
  'MSYGD',
  'MSYGI',
  'MSYHW',
  'MSYLA',
  'MSYOR',
  'MSYPY',
  'JBKCA',
  'MSYRH',
  'MSYRV',
  'MSYTC',
  'MSYUP',
  'NYCAP',
  'NYCBO',
  'NYCBP',
  'NYCBS',
  'NYCCH',
  'NYCCI',
  'NYCCN',
  'NYCCL',
  'NYCCP',
  'NYCCS',
  'NYCCU',
  'NYCDL',
  'NYCDS',
  'NYCDT',
  'NYCEM',
  'NYCET',
  'NYCFC',
  'NYCFD',
  'NYCFF',
  'NYCGV',
  'NYCHS',
  'NYCJF',
  'NYCKP',
  'NYCLA',
  'NYCMA',
  'NYCME',
  'NYCMI',
  'NYCML',
  'NYCMM',
  'NYCMN',
  'NYCMT',
  'NYCMW',
  'NYCNH',
  'NYCRC',
  'NYCRW',
  'NYCSI',
  'NYCSO',
  'NYCSP',
  'NYCSS',
  'NYCSW',
  'NYCTB',
  'NYCTF',
  'NYCTH',
  'NYCTR',
  'NYCUN',
  'NYCUP',
  'NYCWA',
  'NYCWE',
  'NYCWF',
  'SFOCC',
  'SFOFD',
  'SFOFH',
  'SFOSF',
  'SJWZS',
  'NRRIT',
  'PNCHI',
  'PSEPO',
  'SJUHH',
  'SJACC',
  'SJAJC',
  'SJNHI',
  'SJUCO',
  'SJUDT',
  'SJUES',
  'SJUSA',
  'SJUSJ',
  'AGSCU',
  'YQBQC',
  'YQBSR',
  'YQBWH',
  'YMQDT',
  'YMQHX',
  'YMQMJ',
  'YMQMM',
  'YMQSK',
  'YOWAR',
  'YOWOV',
  'YQBDA',
  'YQBHI',
  'YQBBP',
  'YQBMT',
  'YULAN',
  'YULCV',
  'YULDH',
  'YULDN',
  'YULDV',
  'YULES',
  'YULHL',
  'YULHW',
  'YULLV',
  'YULMD',
  'YULMO',
  'YULMQ',
  'YULON',
  'YULVA',
  'LIHWB',
  'NYCCU',
  'MSYNH',
  'YVRWG',
  'TIAGI',
  'SACHS',
  'LASRU',
  'DADDV',
  'PBCHX',
  'HKTHI',
  'HKTHI',
]

let parsedMatchedResults = [];
let hotelWithIdbutNoMatch = [];
let hotelWithoutId = [];
hotelFinder = (hotelId) => {
  Hotels.map(hotel => {
    if (hotel.hotelId) {
      if (hotelId == hotel.hotelId) {
        console.log(`WE GOT A MATCH FOR  :: ${hotelId}}`);
        console.log(`THE MATCH ::: ${hotel}`)
        parsedMatchedResults.push(hotel.hotelName);
      } else {
    console.log('no')
      }
    } else {
      hotelWithIdbutNoMatch.push(hotelId)
    }

  });

}


vaccineRequiredHotelCodes.forEach(id => {
  hotelFinder(id);
});




/* GET home page. */
router.get('/', (req, res, next) => {

  res.status(200).json({
    totalCoung: parsedMatchedResults.length,
    vaccineRequiredHotels: parsedMatchedResults,
    hotelWithIdbutNoMatch : hotelWithIdbutNoMatch,
    hotelWithoutId: hotelWithoutId
  })

});

module.exports = router;
