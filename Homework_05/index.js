function Student(first_name,last_name,age,grades) {
    this.first_name=first_name;
    this.last_name=last_name;
    this.age=age;
    this.grades=grades;
    
}

let students = [
    new Student ('Vasja','Grib',23,[5,5,5,4,5]),
    new Student ('Kolja','Bril',16,[4,3,3,4,4]),
    new Student ('Nina','Sas',21,[5,2,3,4,4]),
];


  function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  let table = document.querySelector("table");
  let data = Object.keys(students[0]);
  generateTableHead(table, data);
  generateTable(table, students);

 