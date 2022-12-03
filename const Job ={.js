const Job ={
     name:"Fontend Dev",
     Price:1000,
     status:"Vip Pro",
     creteDate: new Date(),
     run:function () {
          console.log("Hello Anh Em");      
     }
 }
//  laays ra key datw
 console.log(Job.creteDate.getHours());
for (const key in job){
     console.log(key);
}
console.log(Object.values(Job)) ;
// ! tra ve mot maang bao gom tat car cac key trong job
console.log(Object.keys(Job)) ;
// ! tả ve key
console.log(Object.entries(job));
//! tra ve cac cap key va value trong mang