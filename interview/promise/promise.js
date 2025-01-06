// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('I have succeeded');
//     }, 5000);
//     });

// myPromise.then((value) => {
//     console.log(value);
//     })


//     //second exercise
// const firstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('First Promise');
//     }, 1000);
//     });

// const secondPromise = firstPromise.then((message)=>{

//     console.log(message);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Second Promise');
//         }, 1000);
//     });
    
// });

// const thirdPromise = secondPromise.then((message)=>{
//     console.log(message);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Third Promise');
//         }, 1000);
//     });
// }).then((message)=>{
//     console.log(message);
// })

// //third exercise
// const errorPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('I have failed');
//     }, 1000);
//     });

// errorPromise.then((value) => {
//     console.log(value);
//     }
// ).catch((error) => {
//     console.log(error);
//     }
// )

//fourth exercise - promise.all
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 1');
//     }, 1000);
//     });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 2');
//     }, 2000);
//     });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 3');
//     }, 3000);
//     });

// Promise.all([promise1, promise2, promise3]).then((messages) => {
//     console.log('All the promises are resolved');
//     messages.forEach((message,index) => {
//         console.log('Promise ' + (index + 1) + ': ' + message);
//     });
    
    

// }).catch((error) => {
//     console.log(error);
//     });

//Promise race
// const fastPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 1');
//     }, 1000);
//     });

// const mediumPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 2');
//     }, 2000);
//     });

// const slowPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 3');
//     }, 3000);
//     });

// Promise.race([fastPromise, mediumPromise, slowPromise]).then((message) => {
//     console.log('The fastest promise is ' + message);
//     }).catch((error) => {
//     console.log(error);
//     });

// Promise.any
const promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise A');
    }, 1000);
    });

const promiseB = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise B');
    }, 2000);
    });

const promiseC = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise C');
    }, 3000);
    });

Promise.any([promiseA, promiseB, promiseC]).then((message) => {
    console.log('The first promise to resolve is ' + message);
    }).catch((error) => {
    console.log(error);
    });