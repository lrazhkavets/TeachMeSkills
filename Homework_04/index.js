function Student(first_name,last_name,age,grades) {
    this.first_name=first_name;
    this.last_name=last_name;
    this.age=age;
    this.grades=grades;
    this.getAvgGrades = function() {
        var sum = 0;
        for (var i=0; i<this.grades.length; i++) {
            sum +=this.grades[i]
        }
        return sum/this.grades.length;
    }
}

/* Задание 0
создать массив объектов студентов (минимум 3)
каждого студента есть 4 поля -- first_name, last_name, age, grades. Grades -- массив из 5 чисел-оценок по 5-бальной шкале оценок
*/
var students = [
    new Student ('Vasja','Grib',23,[5,5,5,4,5]),
    new Student ('Kolja','Bril',16,[4,3,3,4,4]),
    new Student ('Nina','Sas',21,[5,2,3,4,4]),
];


// Перепишете часть домашки с использованием классов и объектов. 
// Своих студентов сделайте объектами класса. И внутри класса напишите метод getAvgGrade
var avgStudents = students.map(function(st) {
    return st.getAvgGrades();
   });
console.log(avgStudents);

console.log(this.first_name);


// function tableCreate(arr) {
//      var body = document.getElementsByTagName('body')[0];
//      var tbl = document.createElement('table');   
//      tbl.setAttribute('border', '1');
//      var tbdy = document.createElement('tbody');
     
//     for (var i = 0; i < arr.length; i++) {
//         var tr = document.createElement('tr');
//         for (var j = 0; j < arr.length; j++) {            
//             var td = document.createElement('td');                
//             var t = document.createElement(arr[j]);   
//             td.appendChild(t);             
//             tr.appendChild(td)            
//         }
//         tbdy.appendChild(tr);
//     }
    
//     tbl.appendChild(tbdy);
//     body.appendChild(tbl)
// }

// tableCreate(students);


// var table = document.getElementById('table');
// var rows = table.rows;

// for (var i = 1; i < students.length; i += 2) {
// 	rows[i].style.background = '#ddd';
// };

function generateTableHead(table) {
    let thead = table.createTHead();
  }
  let table = document.querySelector("table");
generateTableHead(table);