// 金额过滤器
function amountFilter(input, num) {
  var n = Number(input);
  if (n == '0' || n == '0.0' || n !== n) return '0';
  return n.toFixed(num === undefined ? 2 : num);
}
amountFilter(NaN) // '0'
