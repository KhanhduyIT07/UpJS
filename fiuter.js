// ! ========= Fiuter() ============
const fillter = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const fillterNew = fillter.filter(function (item, index, arr) {
     return item % 2 == 0
thong qua  mot dieu kien duyet tu trai sang phai
})
console.log(fillterNew);
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
     {
          nameJob: 'Driversssss',
          Price: 9
     },
     {
          nameJob: 'Driveryyyyyyy',
          Price: 9
     }

]
const newListJob = ListJob.filter(function (item) {
     // c1  // if (item.Price >= 8) {
     //      return item
     // }
     return item.Price >= 8 //c2


})
console.log(newListJob);