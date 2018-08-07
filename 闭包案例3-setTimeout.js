for(var i = 0; i < 5 ;i++){
  setTimeout(function(){
    console.log('delayer: ' + i )
  },0)
}
//输出5个5

//如何修改才能让其输出0,1,2,3,4
//方式1
for(var i = 0; i < 5 ;i++){
    setTimeout((function(j){
      return function(){
      console.log('delayer: ' + j )
    }
  }(i)),0)
}


//方式2 使用立即函数声明表达式
for(var i = 0; i < 5 ;i++){
  (function(j){
    setTimeout(function(){
      console.log('delayer: ' + j )
    },0)
  })(i)
}


//方式3 使用ES6 的let
for(let i = 0; i < 5 ;i++){
  setTimeout(function(){
    console.log('delayer: ' + i )
  },0)
}


//倒数计时器
for(var i = 0; i < 5 ;i++){
  (function(j){
    setTimeout(function(){
      console.log('delayer: ' + j )
    },5000 - 1000*j)
  })(i)
}
