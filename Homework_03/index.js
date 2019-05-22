var students = [
        {
        first_name:'Vasja',
        last_name:'Grib',
        age:34,
        grades:[5,5,5,4,5]},
        {first_name:'Kolja',
        last_name:'Bril',
        age:16,
        grades:[4,3,3,4,4]},
        {first_name:'Nina',
        last_name:'Sas',
        age:21,
        grades:[5,2,3,4,4]
      }
      ];
  
  function logStudents (studentsArr) {
    studentsArr.forEach( function (elem) {
     for (var key in elem) {
      console.log( elem[key] ); 
      } 
              
    });
  }
 
logStudents (students);

// функция вычисляет ср.ариф массива 
function getAvg (numbersArr) {
  var sum=0;
 for (i=0; i<numbersArr.length; i++) {
  sum = sum + numbersArr[i];
 }
 
 var Average = sum/numbersArr.length;
 return Average;
};

// 2.2

 function getGoodStudents (studentsArr) {
  var goodStudents = studentsArr.filter(function (st) {
    return (getAvg (st.grades)) > 4;
});
console.log( goodStudents);
return goodStudents;

};
getGoodStudents(students);

// 3

function getStudentsDescription (studentsArr) {
  var arrNew2=getGoodStudents(studentsArr)
  var arrNew3 = arrNew2.map(function(elem) {
      
       return elem.first_name + ' ' + elem.last_name + ', ' + elem.age + ' лет,' + (getAvg (elem.grades)) + ' средний бал';
      
  });
 console.log (arrNew3);
 return arrNew3;
};
getStudentsDescription (students);


// Задание4
// написать функцию function , которая принимаем массив студентов в качестве аргумента и возвращает новый массив студентов
//
// function getBadStudents (studentsArr) {
  // с помощью метода filter пробежаться по массиву studentsArr
  // в новый массив вернуть тех студентов, у которых каждая оценка больше 3
  // вернуть новый массив
  // подсказка: используйте функцию every внутри filter
// }




function getNotBadStudents (studentsArr) {
  return studentsArr.filter(function(studentsArr){
      return studentsArr.grades.every(function(i){
           return i>=3;
           });}
  )
    
};
console.log(getNotBadStudents(students));



// Задание5*
// написать функцию getGroupAverageGrade, которая принимаем массив студентов в качестве аргумента и возвращае число
//
// function getGroupAverageGrade (studentsArr) {
  // с помощью метода reduce пробежаться по массиву studentsArr
  // функция getGroupAverageGrade должна вернуть средннее арифметическое оценок по группе 
  // (здесь хотелось бы увидеть среднее арифметическое средних арифметических каждого студента)
// }



function getGroupAverageGrade (studentsArr) {
  

  return studentsArr.reduce(function (acc,elem) {
    
    return acc+elem;
  },0);
  
};
console.log(getGroupAverageGrade(students.grades));


// var arr = [1, 2, 3, 4, 5, 6];

// var result = arr.reduce(function(sum, elem) {
// 	return sum + elem;
// }, 0);

// document.write(result);

console.log(students[0].grades);