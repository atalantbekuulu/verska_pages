/**const person = {
    name: 'Azamat',
    age: 23,
    job: 'fullstack'
}

const op = new Proxy (person, {
    get (target, prop){
        //console.log(`Getting...${prop}`)
        if(!(prop in target)){
            return prop
            .split('_')
            .map( p => target[p])
            .join(' ')
        }
        return target[prop]
    },
    set(target,prop, value){
        if (prop in target){
            target[prop] = value
        }else {
            throw new Error(`No ${prop} in target`)
        }
    }
})

const log = text => `logintext = ${text}`
const fp = new Proxy (log, {
    apply(target,thisArg, args) {
        console.log('Gatting...')
        
        return target.apply(thisArg,args).toUpperCase()
    }
})


class Animal {
    constructor(options){
        this.name = options.name
        this.age = options.age
    }
    voice(){
        console.log('I am Animal')
    }
}

const animal = new Animal({
    name:'animal',
    age:'5'
} 
)

class Cat extends Animal {} //наследование
    voice


const tiger = new Cat ({
    name: 'Tiger',
    age: 4
})
const p = new Promise(function(resolve,reject){
    setTimeout(()=> {
        console.log ('prerarind Data...')
        const backenddata ={
            server:'aws',
            port:2000,
            status:'working',
        }
        resolve()
    }, 2000)
}).then(()=> {
    console.log('Promise')
})

 промисы
const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(()=> resolve(), ms)
    })
}
sleep(3000).then(()=> console.log('after 3 second'))


function* generation(){
    yield 'h'
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'
}
const str = generation()

function* generation (num = 10){
     for ( let i = 0; i<num; i++){
        yield i;
    } 
}
const num2 = generation(7)

const iterator = {
    gen(num = 10) {
    let i = 0
    return {
        next(){
            if (i < num){
                return {
                    value: ++i,
                    done: false 
                }
            }else {
                    return{
                        value: undefined,
                        done: true,
                    }
                }
            }
        }
    }
    }

/*
for ( let i= 0; i < people.length; i++){
    console.log(people[i])
}
for ( let person of people){
    console.log(person)
}

people.forEach(person => console.log(person))

const newPerson = people.map(person =>{
    return person.name;
})
console.log(newPerson)

const edults = people.filter(person => person.age >= 18)
console.log(edults)

const tineidger = people.filter(person => person.age <= 18)
console.log(tineidger)


let sum = 0
for (let i= 0; i < people.length; i++){
    sum += people[i].budget
}
console.log(sum)

const aza = people.find(person=> person.name === 'aza')
console.log(aza)


function create(){
    const fx = ['javaScripts', 'Vue.js']
    return{
        print:function(){
            console.log(fx.join(' '))
        },
        add:function(message){
            fx.push(message)
        }
    }
}
const m = create()

const array = [1,2,3,4,5,6,7,8,99,6,3]

for ( let i= 0; i<=array.length; i++){
    setTimeout(() => {
        console.log(array[i])
    }, 2000);
}



const array = [1,2,3,4,5]
Array.prototype.MyltBy = function(n){
    return this.map(function(i){
        return i*n
    })
}
console.log(array.MyltBy(2))

const arrow = (...all) =>{
    let result = 0
    for ( let num of all){
        result+=num
    }
    return result
}
const res = (arrow(1,2,3,5))
console.log(res)



const massive = ['bmw','reno','pejo','audi']

massive.push('2')//добавление в конец массива
massive.unshift('1')//добавление в начало массива
massive.shift() ///удаление первого элемента из массива и возвращает удаленное значение отдельно
massive.pop() ///удаление последнего элемента из массива
console.log(massive)
const text = 'мы любим javascript'
const massive2 = text.split(' ')//метод split передает элементы переменной в массив

console.log(massive2)
const r = massive2.join(' ') // join делает из массива строку 
console.log(r)

const car = massive.indexOf('bmw')// находит индекс элемента
console.log(massive[car])

const upperCaseText = massive.map(car2 => {
  return car2.toUpperCase()  
})

console.log(upperCaseText)
*/
//const fib = [1,2,3,4,5,6,7,8,9,10]

//const pow2 = fib.map(num => num**2)
//console.log(pow2)

//const powFilter = fib.filter(num => num <= 7)
//console.log(powFilter)
/*

const person = {
    name: 'Azamat',
    age: '24',
    info(){
        console.log(`info: ${this.name}`)
        console.log(`info: ${this.age}`)
    }
}
const person2 = {
    name:'Taku',
    age:50,
}

person.info.bind(person2)

const logger = {
    keyAndValue(){
        Object.keys(this).forEach( key =>{
            console.log(`${key} ${this[key]}`)
        })
            
    }
}
const valueAndKeyRes = logger.keyAndValue.bind(person2)
valueAndKeyRes()

setTimeout(()=> {
    console.log('AFter timeout')
},2500)

const delay = (wait = 1000) =>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve()
        },wait)
    })
    return promise
}
/*
const delay2= () => new Promise((resolve) => resolve([
    1,2,3,4,5,6,7,8,9
]))

delay(2500)
.then(()=>{
    console.log('after 2 seconds')
}).catch((err)=>{
    console.error('dddddddddd',err)
}).finally(()=> console.log('finally finish'))
/*

async function assyncDelay(){
    await delay(3000)
    const way = await delay2()
    console.log('data',way)
}

assyncDelay()



const hedding = document.querySelector('#Hello') // получение доступа к элементу в DOM дереве по классу и другой вариант по id 

const StyleAdd = (node) =>{
    node.style.color='white'
    node.style.textAlign ='center'
    node.style.background='black'
}

setTimeout(()=>{
    StyleAdd(hedding)
},2500)


hedding.onclick =() =>{
    if (hedding.style.background ==='red'){
    hedding.style.background='black'
} else if(hedding.style.background==='black'){
    hedding.style.background ='red'
}}


/*
const person = {
    name:'Maxim',
    age:24,
    greet(){
        console.log('Greet')
    }
}

Object.prototype.sayHello =function(){  // добавление функции в глобальный прототип
console.log('Hello world')
}


console.log('request Data...')

const p = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Preperind Data... Please wait')
        const backenDdata ={
            server:'server',
            port:2101,
            status: 'working'
        }
        resolve(backenDdata)
    },2000)
})
p.then((data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            data.modified = true
            resolve(data)
            },2000)

    })
    .then(clientData =>{ 
        console.log('data complete',clientData)
    })
})

console.log('request Data...')

const sleep = ms =>{
    return new Promise(resolve =>{         //использование Промиса
        setTimeout(()=>resolve(),ms)
    })
}

const sleep = (ms)=> new Promise ((resolve,reject)=>setTimeout(()=>resolve(),ms))
sleep(2000).then(()=>console.log('After 2 seconds'))
sleep(4000).then(()=>console.log('After 4 seconds'))
sleep(5000).finally(()=> console.log('finish'))


const p = ms => new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(),ms)
})


const ob = Object.create({           // coздание объекта. Первый параметр объекта создание прототипные функции. 
    calculateAge(){
        return new Date().getFullYear()-this.birtYear
    }
},{
    name:{
        value: 'Vladlen',
        writable: true, //протерти дескриптор. нужен для разрешения изменениея значения 
        enumerable:true, // изначальное значение false. нужен для видимости в цикле
        configurable:true // дает разрешение на удаления поля
    },
    birtYear:{
        value:1997,
    },
    age:{
        get(){                                              //get какое то значение возвращет значение
            return new Date().getFullYear()-this.birtYear 
        }
        ,
        set(value){                                     //set берёт значение и оперирует им
            document.body.style.background = 'black'
            console.log('set',value)
        }
    }
})


class Animal {              // создание класса. Классы создаются с большой буквы
    static type = "ANIMAL"
    constructor(options){       // передача свойств осуществляется с метода constructor
        this.name= options.name
        this.hasTail= options.hasTail
        this.age= options.age
    }
    voice(){
        console.log('I`m animal')
    }
}/*
const animal = new Animal({     //создание объекта класса Animal  
    name:'tiger',
    age:5,
    hasTail:true
})/*

class Cat extends Animal{       //extends используется для наследования из одного класса в другой класс при создании класса
    constructor(options){
        super(options)        //метод super используется при добавлении значения в класс который создан при помощи наследования
        this.color=options.color
    }
    voice(){
        super.voice()       // для вызова метода из родительского класса
        console.log('logarifme')
    }
    get ageInfo(){              // использовение getter в классе
        return this.age *5
    }
    set ageInfo(newAge){    // использовение setter в классе
        this.age = newAge

    }
}


const cat = new Cat({
    name:'tiger',
    age:5,
    hasTail:true,
    color:'black'
})


class Component{
    constructor(selector){
        this.el=document.querySelector(selector)
    }
    hide(){
        this.el.style.display = 'none'
    }
    show(){
        this.el.style.display = 'block'
    }
    
}
class Box extends Component{
    constructor(options){
        super(options.selector)
        this.el.style.width = this.el.style.height = options.size +'px'
        this.el.style.background = options.color
        
    }
}
const box = new Box({
    selector:'#box1',
    size:100,
    color:'red'
})

const boxOnclick = document.querySelector('#box1')

boxOnclick.onclick =() =>{
    if (boxOnclick.style.background ==='red'){
    boxOnclick.style.background='black'
} else if(boxOnclick.style.background==='black'){
    boxOnclick.style.background ='red'
}}


const delay = (ms) => {
    return new Promise((resolve)=> setTimeout(()=> resolve() ,ms))
}
const url ='https://jsonplaceholder.typicode.com/todos'

function fetchTodos(){
    console.log('Facth todos start')
    return delay(2000)
    .then(()=>{
        return fetch(url)
      
    })
    .then(response =>{
        return response.json()
    })  
}

fetchTodos()
    .then(data => {
        console.log('Data',data)
})
    .catch((e)=>console.error(e))*/

/*
async function todos(){
   await delay(2000)
   const response = await fetch(url)
   const data = await response.json()
   
}


function* strGEnerstor(){   // создание генератора. используется *
    yield 'h'                   // yield возращает значение
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'
}

const str = strGEnerstor()


const iterator={            //создание своего итератора
    gen(n=10){
        let i = 0
        return{
            next(){
                if( i<n) {
                    return{ value:++i, done:false}
                }else
                return{value:undefined, done:true}
            }
        }
    }
}

for( let k of 'hello'){
   console.log(k) 
}
*/

const people = [
    { name: 'aza',age:12, budget:11000},
    { name: 'azea',age:65, budget:12000},
    { name: 'azqa',age:25, budget:13000},
    { name: 'azawq',age:15, budget:114000},
    { name: 'azawr',age:23, budget:15000},
    { name: 'azasrs',age:1, budget:16000},
    { name: 'azass',age:23, budget:17000},
]
/*
for( let i = 0; i<p.length; i++){
    console.log (p[i])
}
people.forEach((person, index, people)=>console.log(person))  // forEach пробегается по элементам массива принимает в себя параметры функцию. функция принимает в себя 3 параметра 
                                                                // 1 параметр это каждый объект 'person' ,2 некоторый индекс массива index, 3 сам массив people 

const newPeople = people.map((person)=>person.age)   //map служить для преобразования текущего массива в новый массив  
console.log (newPeople)                                                               


const peopleFil = people.filter(person=> person.age>=18)   //// фильтр по возрасту. Filter возвращает новый массив
console.log (peopleFil)  


const amount = people.reduce((total,person)=> total + person.budget,0)  // reduce пробегается по элементам массива total суммирует каждое значение. '0' это начальное значение total/
console.log (amount)

const a = people.find((person)=> person.name = 'azawq')  //метод find находит определенное значение у массивов
console.log (a.name)

const q = people.findIndex((person)=> person.name = 'azawq')  //метод find находит определенное значение у массивов
console.log (q)


// задача №1 вывести все элементы меньше 5
const a =[1,1,2,3,4,5,8,13,21,34,55,89]

const newA = a.filter((b)=>b=5)
console.log(newA)


// задача №2 вывести все похожие элементы
const a =[0,1,1,2,7,3,4,5,8,13,21,34,55,89]
 
const b =[1,1,2,3,4,5,8,13,21,34,55,89]


const c = a.filter((arr)=> b.includes(arr))
console.log(c)


//задача №3 отсортировать по возрастанию
 
const a ={
    1:2,
    4:2,
    7:2,
    2:2,
    0:2,
}

function ascFunc(a,b){
    return a-b
}
function descFunc(a,b){
    return b- a
}
const f3 = (obj,type = 'asc') =>{
    let val = Object.values(obj);
    if (type ==='asc')return val.sort(ascFunc)
    if (type ==='desc')return val.sort(descFunc)
}
console.log(f3(a,'asc'));
console.log(f3(a,'desc'));

///4 напишите программу для слияния нескольких объектов
const b ={
    1:2,
    4:2,
    12:2,
    55:2,
    3:2,
}
const a2 = Object.assign({},a,b)
console.log(a2)


// 5наишите код который переводит целое число в строку


const c = 4
const e = c.toString()



// является строка Палидромным


const r = 'abba1'

const funcP = str => str === r.split('').reverse().join('')

console.log(funcP(r))*/

/*
const arr = (ms) => new Promise((resolve)=>{
    const data = {
        name:'aza',
        port:2020
    }
    setTimeout(()=>resolve(data),ms)
    
})

const arr2 = (ms) => new Promise((resolve)=>{
    const data1 = {
        name:'Taku',
        port:2021
    }
    setTimeout(()=>resolve(data1),ms)
})



async function funcAsync(){
    await arr(2000)
    .then(data=>console.log('data',data))
    await arr2(4000)
    console.log('data resolve2',data1)

}

funcAsync()

*/

const requestUrl = 'https://jsonplaceholder.typicode.com/users'
/*
function sendRequest(method,url){               /// функция для GET запроса
   return new Promise((resolve,reject)=>{
    const xhr = new XMLHttpRequest()  ///объект xhr
    xhr.open(method,url) // 1 параметр строка метод запроса, 2 параметр путь  //open открывает новое соединение      /// методы GET-предназначен для получения каких либо данных      //
    xhr.responseType = 'json'
    xhr.onload = () => {                             //onload переводит данные в concole
            if(xhr.status>=400){            //проверка на статус кода ошибки
                reject(xhr.response)
            }else{
                resolve(xhr.response)  
            }                                        // перевод из строки в объект    console.log(JSON.parse(xhr.response)) 
    }            
                                                 //   POST-создания PUT- для полного обновления элемента, PUTCH дял частичного обновления элемента
    xhr.onerror= (()=>reject(xhr.response))       //обработка ошибки
    xhr.send()                                          
    
   })
}
sendRequest('GET',requestUrl)
.then((data)=>console.log('data request',data))
.catch(err=>console.error(err))





function sendRequest(method,url,body = null){               /// функция для POST запроса
   return new Promise((resolve,reject)=>{
    const xhr = new XMLHttpRequest()  ///объект xhr
    xhr.open(method,url) // первый параметр строка запроса, 2 параметр путь  //open открывает новое соединение      /// методы GET-предназначен для получения каких либо данных      //
    xhr.responseType = 'json'
    xhr.setRequestHeader('Content-Type','application/json')     //делает получаемые данные в js
    xhr.onload = () => {                             //onload переводит данные в concole
            if(xhr.status>=400){            //проверка на статус кода ошибки
                reject(xhr.response)
            }else{
                resolve(xhr.response)  
            }                                        // перевод из строки в объект    console.log(JSON.parse(xhr.response)) 
    }            
                                                 //   POST-создания PUT- для полного обновления элемента, PUTCH дял частичного обновления элемента
    xhr.onerror= (()=>reject(xhr.response))       //обработка ошибки
    xhr.send(JSON.stringify(body))                                          
    
   })
}

let body = {
    name:'Azamat',
    age:24
}
sendRequest('POST',requestUrl,body)
.then((data)=>console.log('data request',data))
.catch(err=>console.error(err))



function sendRequest(method,url){               /// функция для GET запроса c помощью fetch
    return fetch(url).then(response =>{
        return response.json()
    })
 }
 sendRequest('GET',requestUrl)
 .then((data)=>console.log('data request',data))
 .catch(err=>console.error(err))


 function sendRequest(method,url,body){               /// функция для POST запроса c помощью fetch
    const headers ={
        'Content-Type':'appilication/json'
    }
    return fetch(url,{
        method:method,
        body:JSON.stringify(body),
        headers:headers

    }).then(response =>{
        if(response.ok){
        return response.json()
    }
    return response.json().then(err => {
        const e = new Error('Что-то пошло не так')
        e.data =err
        throw e
    })
    })
 }
 let body = {
    name:'Azamat',
    age:24
}
 sendRequest('POST',requestUrl,body)
 .then((data)=>console.log('data request',data))
 .catch(err=>console.error(err))
 */

/*
function requestUrl1 (metod,url,body = 0){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest()
xhr.open(metod,url)
xhr.responseType = 'json'
xhr.setRequestHeader('Content-Type','application/json')
xhr.onload =() =>{
    if (xhr.ok){
        reject(xhr.response)
    }else{
        resolve(xhr.response)
    }
}
xhr.onerror = (()=>{
    reject(xhr.response)
})
xhr.send(JSON.stringify(body))
    })

}
/*
requestUrl1('GET',requestUrl)
.then((data)=>console.log(data))
.catch((err)=>console.error(err))

const body= {
    name:'aza',
    age:24
}
requestUrl1('POST',requestUrl,body)
.then((data)=>console.log(data))
.catch((err)=>console.error(err))


*/


function requestUrl1 (metod,url,body = 0){
    const headers={
        'Content-Type':'application/json'
    }
    return fetch(url,{
        method:metod,
        body:JSON.stringify(body),
        headers:headers
    }).then(response=>{
        return response.json()
    })
}

/* requestUrl1('GET',requestUrl)
.then((data)=>console.log(data))
.catch((err)=>console.error(err))

 */

const body= {
    name:'aza',
    age:24
}
requestUrl1('POST',requestUrl,body)
.then((data)=>console.log(data))
.catch((err)=>console.error(err))
