//如下代码输出为多少
function makeCounter(){
  var count = 0

  return function(){
    return count++
  }
}

var counter = makeCounter()  //生成作用域 有一个活动对象count
var counter2 = makeCounter()  //生成作用域 也有一个活动对象count 和之前的是两个不同的作用域 相互独立

console.log(counter())  //0
console.log(counter())  //1

console.log(counter2())
console.log(counter2())
//所以counter2输出也是0 1 和之前的counter无关
