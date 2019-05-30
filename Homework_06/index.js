function Student(first_name,last_name,age,grades) {
    this.first_name=first_name;
    this.last_name=last_name;
    this.age=age;
    this.grades=grades;
    
}

var students = [
    new Student ('Vasja','Grib',23,[5,5,5,4,5]),
    new Student ('Kolja','Bril',16,[4,3,3,4,4]),
    new Student ('Nina','Sas',21,[5,2,3,4,4]),
];

  function generateTableHead(table, data) {
    var thead = table.createTHead();
    var row = thead.insertRow();
    for (var key of data) {
        var th = document.createElement("th");
      var text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  function generateTable(table, data) {
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (var element of data) {
        var row = tbody.insertRow();
      for (key in element) {
        var cell = row.insertCell();
        var text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }

  function clearTable(tableId) {
    var tbody = document.querySelector('#' + tableId + 'tbody')
        if (tbody && tbody.nodeName === '#TBODY') {
            tbody.remove('tbody');
        }
}

var table = document.getElementById('myTable');
var data = Object.keys(students[0]);
  generateTableHead(table, data);
  
  function clickBut(event) {
    button = document.getElementById(event);
    clearTable('myTable');
    button.addEventListener('click', function() {
        generateTable(table, students);
    });
}
clickBut('myButton');

