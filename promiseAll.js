var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'one');
}).catch(reason => {
  console.log(reason)
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'two');
}).catch(reason => {
  console.log(reason)
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'three');
}).catch(reason => {
  console.log(reason)
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'four');
}).catch(reason => {
  console.log(reason)
});
var p5 = new Promise((resolve, reject) => {
  reject('reject');
}).catch(reason => {
  console.log(reason)
});

Promise.all([p1, p2, p3, p4, p5]).then(values => {
  console.log(values);
}, reason => {
  console.log(reason)
});

//From console:
//"reject"

//You can also use .catch
Promise.all([p1, p2, p3, p4, p5]).then(values => {
  console.log(values,123);
}).catch(reason => {
  console.log(reason)
});

//From console:
//"reject"
