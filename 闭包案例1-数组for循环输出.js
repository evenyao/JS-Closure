//案例
var fnArr = []
for (var i = 0; i < 10 ;i++ ){
  fnArr[i] = function(){
    return i
  }
}
console.log(fnArr[3]())

//改造 1
var fnArr = []
for (var i = 0; i < 10 ;i++){
  fnArr[i] = (function(j){
    return function(){
      return j
    }
  })(i)
}
console.log(fnArr[3]())


//改造 2 使用立即函数声明表达式
var fnArr = []
for (var i = 0; i < 10 ;i++){
  (function(i){
    fnArr[i] = function(){
      return i
    }
  })(i)
}
console.log(fnArr[3]())


//改造 3  使用ES6 let代替var
var fnArr = []
for (let i = 0; i < 10 ;i++ ){
  fnArr[i] = function(){
    return i
  }
}
console.log(fnArr[3]())
