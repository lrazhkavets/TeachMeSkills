// var gender = "male";
// if (gender=="male") {
//     console.log ("Man");
// } else if (gender=="female") {
//     console.log ("Woman");
// } else {
//     console.log("It is");
// }

 
// var gender = "female";
// switch(gender) {
//     case "male":
//     console.log ("Man");
//     break;
//     case "female":
//     console.log ("Woman");
//     break;
//     default:
//     console.log("It is");
// }


// var gender = "Оно";
// switch(gender) {
//     case "male":
//     case "Мужчина":
//     console.log ("Man");
//     break;
//     case "female":
//     case "Женщина":
//     console.log ("Woman");
//     break;
//     default:
//     console.log("It is");
// }

// var arr=[5,10,3,4,5,8];
// var sum=0;
// for(var i=0; i<arr.length;i++) {
//     sum = sum + arr[i];
// }
// var avr = sum / arr.length;
// alert (avr);


// var arr=[10,23,45,43,56];
// for(var i=0; i<arr.length;i++) {
//     if (arr[i] % 2 == 0){
//         console.log (arr[i]);
//     }
// }


// debugger
// f8


// перебирающие методы

// .filter
// var arr=['1',12];
// var arrNew = arr.filter(function(a) {
//     return a>10;
// })
// console.log (arrNew);


// .map
// var arrNew2=arr.map(function(s) {
//     var intRes = null;
//     if (typeof s=='string') {
//         intRes=Number(s);
//     } else {
//         intRes=s;
//     }
//     return intRes;
// })
// console.log (arrNew2);

// var students = [
//     {f_name:'Vasja',
//     l_name:'Grib',
//     age:34},
//     {f_name:'Kolja',
//     l_name:'Bril',
//     age:16},
//     {f_name:'Kolja',
//     l_name:'Sas',
//     age:21}
// ];
// var arrNew2=students.map(function(st) {
//     return st.f_name + ' ' + st.l_name + '. ' + st.age + ' лет';
// })
// console.log (arrNew2);


// .reduse
// .some
// .every


// .forEach
// var students = [
//     {f_name:'Vasja',
//     l_name:'Grib',
//     age:34},
//     {f_name:'Kolja',
//     l_name:'Bril',
//     age:16},
//     {f_name:'Kolja',
//     l_name:'Sas',
//     age:21}
// ];
//  students.forEach(function (st) {
//     delete st.l_name;

// })
// console.log(students);

// Объект:

// var param = 'age';
// var student = {
//     f_name:'Gena'
//     age:43,
// }

// 2 способа вытянуть данные:
// student.age;
// student['age'];


// var students = [
//     {f_name:'Vasja',
//     l_name:'Grib',
//     age:34},
//     {f_name:'Kolja',
//     l_name:'Bril',
//     age:16},
//     {f_name:'Kolja',
//     l_name:'Sas',
//     age:21}
// ];
// var studentsNew = students.filter(function (st) {
//     return st.age < 21;
// })
// console.log (studentsNew);

// Функции
function f(a,b) {
    if (b<0) {
        return a+b;
    }
    else {
        return a-b;
    }
};
console.log (f(2,0));