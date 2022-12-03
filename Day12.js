
// const date = new Date()
// lấy ngày tháng năm và giờ
// new Date().getDay();
// new Date().getHours();
// new Date().getMinutes();
// new Date().getMonth()

// console.log(date);
// const Job = {
//      name: "Fontend Dev",
//      Price: 1000,
//      status: "Vip Pro",
//      creteDate: new Date(),
//      run: function () {
//           console.log("Hello Anh Em");
//      }
// }
const arr = [1, 2, 3, 4];
// hàm join co gan bien arr thanh 1 chuoi  
// khong truyen gi vao ( ) thi mat dinh la dau , neu truyền thì theo cái truyền ('-')
console.log(arr.join('-'));
// pop() lay phan tu cuoi trong mang
console.log(arr.pop());
// shift() lay phan thu thu nhat trong mang
console.log(arr.shift());
// push() them pahm thu vao cuoi mang
console.log(arr.push(5));
console.log(arr);
// Unshif them pahm thu vao dau mang
console.log(arr.unshift(9));
console.log(arr);
// concat() thêm phần tử vào mãng nối hai mang lại
const arr2 = [6, 7, 8, 9];
console.log(arr.concat(arr));