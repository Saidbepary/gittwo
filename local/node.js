let sum=(a,b)=>a+b
//sum(3,5)
console.log(sum(3,5))
let a=29, b=55
let obj={
    a,
    b,
    print(){
        console.log(this)
    }
}
//destructuring
let {n,m,print}=obj
console.log(a)
let person={
    name:'said',
  age:20,
  adress:{
    city:'cp'


  }
}
let {name,age,adress,adress:{city}}=person
console.log(name,age,city)
let arr=[28,48,55,66]
let [first,second ,last]=arr
console.log(first,second,last)
//array to object
let objarr=[
    ['a',28],
    ['b',4],
    ['c',55],
    ['d',66]
]
console.log(Object.fromEntries(objarr))
//object to array
console.log(Object.entries(person))
//symbol
let s1=Symbol()
let s2=Symbol('test')
console.log(s1==s2)
let toss={
    Head:Symbol('head'),
    tail:Symbol('tail')
}