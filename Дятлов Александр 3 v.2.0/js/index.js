// Вывод сообщения в окне браузера
// alert("Привет Мир")
/*
console.log("Привет");

let x = 5;
let y = 4;
//let x = 3; // ошибка, нельзя повторять переменные
x = 3;
console.log(x);

let name = prompt("Введите имя:");
console.log("Привет, " + name)
alert("Привет, " + name)

//console.log(x ** y) степень
//console.log(x % y) остаток от деления

if (x>0) {
    console.log();
}

while (x>0) {

}

function fun1(x, y) {
    console.log(x+y);
}

// bootstrap - фреймворк
// sass - препроцессор
// jquery - библиотек для прог-ия на javascript
*/

// $ ("Селектор").команда(параметры);


function filter1() {
    console.log("Вы нажали на 1 кнопку");
    $(".card").show();
}
function filter2() {
    console.log("Вы нажали на 2 кнопку");
    $(".card").hide();
    $(".city").show();
}
function filter3() {
    console.log("Вы нажали на 3 кнопку");
    $(".card").hide();
    $(".sport").show();
}
function filter4() {
    console.log("Вы нажали на 4 кнопку");
    $(".card").hide();
    $(".electro").show();
}

function q1() {
    console.log("Вы нажали на faq 1");
    $(".q2").toggle('hidden');
}

function q3() {
    console.log("Вы нажали на faq 2");
    $(".q4").toggle('hidden');
}

function q5() {
    console.log("Вы нажали на faq 3");
    $(".q6").toggle('hidden');
}

$ (".filter1").click(filter1);  // Обработчик события
$ (".filter2").click(filter2);
$ (".filter3").click(filter3);
$ (".filter4").click(filter4);
/*
$ (".filter1").on("mouseenter", filter1)
$ (".filter1").click(function (){
    alert("Вы нажали на кнопку")
})
*/

$ (".q1").click(q1);
$ (".q3").click(q3);
$ (".q5").click(q5);




