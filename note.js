//console.log(`my ${a} and`)
let a ='said'
let age
age=12

 console.log(`my name is ${a},i am ${age < 18 ?'not':''} adult`)
console.log( a.padStart(10,'s'))
console.log(a.padEnd(20,"d"))
console.log(a.repeat(5))
var fun=function(a,b){
 return a + b
}
let add=(c,d)=> { //c+d
   // return g
    console.log('result'+(c+d))
}
console.log(add(40,50))
let sqr=x=>x*x
console.log(sqr(20))
let obj={
    name:'obj',
    print:function(){
       let set=this.name
        setTimeout(
           function(){
                console.log(  `hlw ${set}`)
            },
       1000 )
    }
}
console.log(obj.print())
let obj1={
    name:'obj',
    print:function(){
        setTimeout(
           ()=>{
                console.log(  `hlw ${this.name}`)
            },
       1000 )
    }
}
console.log(obj.print())
let arr=[12,44,76]
let y=arr[Symbol.iterator]()
console.log(y)
