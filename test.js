const GSF = require('./dist/GSF-node.js');
const myAddress = 'localhost';
const myPort = 9191;

// GSF Server
const server = GSF.server({
  address: myAddress,
  port: myPort
});

// test all services
console.log('testing all services')
server
  .services()
  .then(
    services=>{
      services.forEach(service =>{
        service.tasks().then(tasks =>{
          console.log(tasks.length);
        })
      });
    },
    err=>{ 
      console.log('error');
      console.log(err);
      process.exit();
    })
  .catch(err =>{
    console.log('error');
    console.log(err);
    process.exit();
  });;


// console.log('')
// console.log('testing service with individual tasks')
// // Create a service object.
// const service = server.service('ENVI');

// //request tasks twice
// service.tasks().then(tasks=>{
//   console.log('first request returned');
//   console.log(tasks.length);
//   service.tasks().then(tasks2=>{
//       console.log('second request returned');
//       console.log(tasks2.length);
//       process.exit();
//     }, err=>{
//       console.log('rejected2');
//       console.log(err);
//       process.exit();
//     }).catch(err=>{
//       console.log('error2');
//       console.log(err);
//       process.exit();
//     });
//   },err =>{
//     console.log('rejected');
//     console.log(err);
//     process.exit();
// }).catch(err =>{
//   console.log('error');
//   console.log(err);
//   process.exit();
// });


