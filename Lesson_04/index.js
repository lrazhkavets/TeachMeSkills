// классы названия ф-ций с большой буквы

function Student(f,n,a,c,g) {
    var _course=c;
    
    this.f_name=f;
    this.l_name=n;
    this.age=a;
    // this.course=c;

    this.grades=g;
    this.getStudentCourse=function() {
        return _course;
    };

    this.upStudentCourse=function() {
         _course += 1;
    };

    this.getAvgGrades = function() {
        var sum = 0;
        for (var i=0; i<this.grades.length; i++) {
            sum +=this.grades[i]
        }
        return sum/this.grades.length;
    }
}
// var st1 прибавляется, если new Student-функция 
var a = [
    new Student ('A','B',23,1),
    new Student ('G','D',2,12)
];

a.filter(function() {
 return st.getAvgGrades()>=4;
});
console.log