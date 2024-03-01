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
let arr=[12,44,76,33,55]
let y=arr[Symbol.iterator]()
console.log(y)
// let list={
//     start:23,
//     end:30,
// [Symbol.iterator]:function(){
//     let currentvalue=this.start
//     let self=this.end
//     return{
//         next(){
//             return {
//                 done:currentvalue>self,
//                 value :currentvalue>self? undefined:currentvalue++
//             }
//         }
       
//     }

// }

// }
// let got=list[Symbol.iterator]()

// console.log(got.next())
// console.log(got.next())
// console.log(got.next())
// console.log(got.next())
// console.log(got.next())
// console.log(got.next())
// console.log(got.next())

let result=y.next()
while(!result.done){
    if(result.value==44){
        console.log(" ")

    // result=y.next()
    }else{
        console.log(result.value)  
       //result=y.next()
      }
    // console.log(result.value)
     result=y.next()
}
// for(let v of list){
//     console.log(v)
// }
//
function iter(arr1){
    let num=0;
    return{
        next(){
            
            if(num < arr1.length){
             return  {value:arr1[num++],
                done:false}
            }else{return{
              done:true}
             }
            }
        
   }
}
let newnum=iter(arr)
console.log(newnum.next())
console.log(newnum.next())
console.log(newnum.next())
console.log(newnum.next())
console.log(newnum.next())
// let raw={
//     a:'abir',
//     b:'arif'
//     hobby:['cricket','footbal']
//     [Symbol.iterator]:function(){
//         let i=0;
//         let hob=this.hobby;
//         return {
//             next1(){
//                 let value=hob[i];
//                 i++;

//                 return{
// done:i> hob.length? true:false,
// value:value
//                 }
//             }
//         }
//     }

// }
// let e=raw[Symbol.iterator]()
// console.log(e)
// for(let hobby of raw){
//     console.log(hobby)
// }
// let list={
//     start:23,
//     end:30,
// [Symbol.iterator]:function(){
    
    
//     next:()=>{
            
//                 done=this.start>this.end,
//                 value = this.start>this.end? undefined:start++
        
        
//     }

// }
// }


// let got=list[Symbol.iterator]()
// console.log(next(got.Symbol))
function sum(...rest){
    return rest.reduce((a,b)=>a+b)
}
console.log(sum(1,2,3,4,5))
let g={
    a:22,
    b:44,
    c:21
}
g[3]=6
let g1={
    ...g
}
console.log(g1)
let number=[1,23,4]
number.push(5)
let r=[...number]
console.log(r)
function myfun(...pera){
    console.log(pera)
}
console.log(myfun(3,5,7))