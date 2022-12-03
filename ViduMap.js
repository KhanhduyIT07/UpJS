// ! ví dụ 1 
const MapNumbers = [2, 3, 4, 5, 6, 7];
// => MapNew =[true,false,true,false,true,false]
const MapNew = MapNumbers.map(function (item, index, arr) {
     if (item % 2 === 0) {
          return true;
     } else {
          return false;
     }
})
console.log(MapNew);