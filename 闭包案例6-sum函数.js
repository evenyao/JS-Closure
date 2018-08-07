//定义一个sum函数，实现如下调用
console.log( sum(1)(2) )  //3
console.log( sume(5)(-1) )  //4

function sum(a){
  return function(b){
    return a + b
  }
}
