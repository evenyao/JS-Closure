//在之前博客<浅谈数组方法>的sort案例中的例子
//即对数组进行排序
var users = [
  { name: 'John', age : 20, company: 'Baidu' },
  { name: 'Pete', age : 18, company: 'Alibaba' },
  { name: 'Ann', age : 19, company: 'Tecent' }
]

users.sort(byName)   //按照名字排序
users.sort(byAge)    //按照年龄排序
users.sort(byField('company'))  //定义按照任意输入的类型进行排序的方法

function byName(user1 ,user2){
  return user1['name'] > user2['name']
  // return user1.name > user2.name
}

function byAge(user1 ,user2){
  return user1['age'] > user2['age']
  // return user1.age > user2.age
}

function byField(field){
  return function(user1 ,user2){
    return user1[field] > user2[field]
  }
}
users.sort(byField('company'))
