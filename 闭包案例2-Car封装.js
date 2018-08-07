var Car = (function(){
  var speed = 0
  function set(s){
    speed = s
  }
  function get(){
    return speed
  }
  function speedUp(){
    speed++
  }
  function speedDown(){
    speed--
  }
  function speedAdd(a){
    speed = speed+a
  }
  function speedSub(a){
    speed = speed-a
  }
  return {
    set: set,
    get: get,
    speedUp: speedUp,
    speedDown: speedDown,
    speedAdd: speedAdd,
    speedSub: speedSub
  }
})()


//调用
Car.set(30)
Car.get()   //30
Car.speedUp()
Car.get()   //31
Car.speedDown()
Car.get()   //30
Car.speedAdd(10)
Car.get()  //40
Car.speedSub(20)
Car.get()  //20
