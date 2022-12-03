// Bài 1: 
// cho 1 mảng sau:
// const users = [
// { id: 1, name: 'A', gender: 'Nam' },
// { id: 2, name: 'B', gender: 'Nam' },
// { id: 3, name: 'C', gender: 'nu' },
// { id: 4, name: 'D', gender: 'nu' },
// { id: 5, name: 'E', gender: 'Nam' }
// ]
// => mong muốn 1 mảng mới
// const usersNew = [
//     { status: "A1", gender: 'Nam' },
//     { status: "B2", gender: 'Nam' },
//     { status: "E2", gender: 'Nam' },
// ]
// gợi ý: sử dụng filter và Map

// const newUser = users.filter(function (item) {
//      return item.gender === "Nam"
// })
// console.log(newUser);
// const NewMap = newUser.map(function (item) {
//      return {
//           status: item.name + item.id,
//           gender: item.gender,
//           // thêm key
//           Authus: item.gender === "Nam" ? "Đoc Thân" : "Đã Kết Hôn"
//      }
// })
// console.log(NewMap);
// bài 2: cho mảng sau: 
const listHS = [
     {
          name: "A",
          diem: 4
     },
     {
          name: "B",
          diem: 6
     },
     {
          name: "C",
          diem: 8
     }, {
          name: "D",
          diem: 8
     }]

// => mong muốn 1 mảng mới có danh sách học sinh điểm cao nhất

// gợi ý: sử dụng filter và Map
let Max = 0;
listHS.map(function (item) {
     if (item.diem > Max) {
          Max = item.diem
     }
})
console.log(Max);
const BestHs = listHS.filter(function (item) {
     return item.diem === Max
})
console.log(BestHs);