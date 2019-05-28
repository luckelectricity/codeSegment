// 模拟forEach
Array.prototype.forEach = function(callback) {
  let len = this.length;
  for (let i = 0; i < len; i++) {
    callback(this[i], i, this);
  }
};
let arr = {};
[1, 2, 3].forEach((item, index, context) => {
  arr[index] = item;
  console.log(index, context, arr);
});
// 0 [ 1, 2, 3 ] { '0': 1 }
// 1 [ 1, 2, 3 ] { '0': 1, '1': 2 }
// 2 [ 1, 2, 3 ] { '0': 1, '1': 2, '2': 3 }
