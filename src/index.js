module.exports = function reverse (n) {
  if (n < 0) {
    n = -n;
  }
  numberarray = Array.from(n.toString());
  numberarray.reverse();
 return(Number(numberarray.join('')));
}
