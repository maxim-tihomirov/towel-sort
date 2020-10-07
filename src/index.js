
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return !matrix ? [] : matrix.map((el,index) => {
  	if (index % 2 != 0){
    	el.reverse();
    }
    return el;
  }).flat(Infinity);
}
