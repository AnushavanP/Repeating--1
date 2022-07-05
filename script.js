// Переменные и строгий режим 
"use strict"

let anush = "petrosyan";
console.log(anush)

const petr = "anush";
console.log(petr)

var LastName = "Petrosyan";


{
    var Ex = "che;"
}


let First =  "connect_POST";
console.log(First);


//Классификация типов данных 

//Null - это когда нет даже коробки 
//Undefined - это когда есть коробка, но она пуста, в ней нет ничего 

console.log( 4 / 0)
console.log(-4 / 0)


//Простое общение с пользователем
// (Прочтена документация) про typeof(), alert(), prompt(), confirm()



//Интерполяция в ES6

console.log("anush" + "avan");
console.log(`anush${"avan"}`);


//Операторы в JavaScript
let rez = "";

for (let i = 1; i < 7; i++) { //Тут увеличивается число 
    for (let j = 0; j < i; j++) { //Этот цикл формируется по новой постоянно.Отрыв увеличивается,
        rez += "*"                //соответсвенно, звездочек выводится больше!  
    }
    rez += "\n"
}


for (let i = 1; i < 5; i++) {
    for (let h = 0; h < i; h++) {

    }
}


const sign = [5, 10, "shopping", 20, "homework"];

for (let i = 0; i < sign.length; i++) {
    if (typeof(sign[i]) === "number") {
        sign[i] = sign[i] * 2
    } else if (typeof(sign[i]) === "string") {
        sign[i] = `${sign} - done`
    } 
}

console.log(sign);

const data = [5, 1, "shopping", 20, "homework"];

const ReversedArray = data.reverse();

console.log(ReversedArray); //reverse() - переворачивает весь массив



const mean = [1, 2, "anush", "petrosyan"];

for (let i = 0; i < mean.length; i++) {
    if (typeof(mean[i]) === "number") {
        mean[i] = mean[i] * 2
    } else if (typeof(mean[i]) === "string") {
        mean[i] = `${mean[i]} - done`
    }
}


console.log(mean);