

//! ===============   FodEach   =================
// được sử dụng khi muốn làm gì đó vơi phan tu cua mang 
//  ham ForEach khong co gia tri atra ve
// const number = [1, 2, 3, 4, 5];
// let sum = 0;
// function tinhTong(item, index, arr) //  toi da 3 tham so
// {
//      console.log(item);//phan tu
//      console.log(index);  // do dai
//      console.log(arr); // mang cu
//      sum += item;
// }
// // tinh tong 
// number.forEach(tinhTong)
// console.log(sum);
// ! Demo
// number.forEach((item, index) => {
//      sum += item;
// });
// console.log(sum);
//!  Texxt
const num = [10, 20, 30, 40, 50];
num.forEach(function (i, e, a) {
     console.log(a[e] + 100);
});
Demo
const users = [
     { id: 1, name: 'duy', age: 23 },
     { id: 2, name: 'duy', age: 21 },
     { id: 3, name: 'duy', age: 22 },
     { id: 4, name: 'duy', age: 23 },
]
let text = '';
users.forEach(function (item) {
     text += `<li> ${item.id} ${item.name} ${item.age}</li>`
})
document.getElementById('ListUser').innerHTML = text


//!================ MAP ================ 
// tạo ra một ar mới  
tttrar ve mot mang mới khong lien quan toi man cu
const MapNumbers = [1, 2, 3, 4, 5];
const MapNew = MapNumbers.map(function (item, index, arr) {
     return item * 2
     // pahir co return 
})
console.log(MapNew);
// ! ví dụ 1 
const MapNumbers = [2, 3, 4, 5, 6, 7];
=> MapNew = [true, false, true, false, true, false]
const MapNew = MapNumbers.map(function (item, index, arr) {
     if (item % 2 === 0) {
          return true;
     } else {
          return false;
     }
})
console.log(MapNew);
// ! Ví Dụ 2

const ListJob = [
     {
          nameJob: 'Teacher',
          Price: 2
     },
     {
          nameJob: 'Doctor',
          Price: 7
     },
     {
          nameJob: 'Driver',
          Price: 8
     },

]
// const newListJob = ListJob.map(function (item) {
//      if (item.Price <= 4) {
//           item['status'] = "ở lại"
//           // thêm keys
//      } else {
//           item['status'] = "Lên lớp"
//      }
//      return item
// })
// console.log(newListJob);
// Cach 2
// const newListJob = ListJob.map(function (item) {
//      return {
//           name: item.nameJob,
//           Price: item.Price,
//           status: item.Price <= 4 ? "Ở lại lớp" : "Lên Lớp"
//      }
// })
// console.log(newListJob);
// ! vidu 3
const a = [1, 2, 3];
const b = ['a', 'b', 'c'];
// Tạo mãng c = [
//     id: 1 value: 'a'
//     id: 2 value: 'b'
//     id: 3 value: 'c'
//]
//! c1
// const c = a.map(function (item, index) {
//      console.log(item);
//      return {
//           id: item,
//           value: b[index]
//      }
// })
// console.log(c);
//! c2
const c = b.map(function (item, index) {
     console.log(item);
     return {
          id: a[index],
          value: item
     }
})
console.log(c);