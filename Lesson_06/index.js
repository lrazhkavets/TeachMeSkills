// // 1.создать ХТМЛ тег
// var p = document.createElement('p');
// console.log(p);

// // 2.наполнить данными
// p.innerText = 'Привет';
// console.log(p);

// // 3.поместить тег на страницу
// document.body.appendChild(p);

// var h1 = document.createElement('h1');
// h1.innerText = 'Заголовок';
// document.body.appendChild(h1);

// var article = document.createElement('article');
// article.innerText = 'Статья';
// document.body.appendChild(article);

// var blockquote = document.createElement('blockquote');
// blockquote.innerText = 'Цитата';
// document.body.appendChild(blockquote);

// var div = document.createElement('div');
// div.innerText = 'Контейнер';
// document.body.appendChild(div);

// var p1 = document.createElement('p1');
// p1.innerHTML = '<span>Певрый р</span>';
// document.body.appendChild(p1);

// var p2 = document.createElement('p2');
// p2.innerHTML = '<span>Второй р</span>';
// document.body.appendChild(p2);

// var p3 = document.createElement('p3');
// p3.innerHTML = '<span>Третий р</span>';
// document.body.appendChild(p3);

// var p4 = document.createElement('p4');
// p4.innerHTML = '<span>Четвертый р</span>';
// document.body.appendChild(p4);


// var td = document.createElement('td');
// td.innerText = 'Текст';
// var tr = document.createElement('tr');
// tr.appendChild(td);
// var tbody = document.createElement('tbody');
// tbody.appendChild(tr);
// table.appendChild(tbody);

// var table = document.createElement('table');
// table.appendChild(tr);
// document.body.appendChild(table);

function getElem(idTable) {
    var table = document.getElementById(idTable);
    if(!table) {
        return;
    }
    var td = document.createElement('td');
    td.innerText = 'Текст';
    var tr = document.createElement('tr');
    tr.appendChild(td);
    var tbody = document.createElement('tbody');
    tbody.appendChild(tr);

    table.appendChild(tbody);

}

function clearTable(tableId) {
    var table = document.getElementById(tableId);
    var tbody = document.querySelector('#' + tableId + 'tbody'
    if (tbody && tbody.nodeName === 'TBODY'))
}

function clickBut(event) {

    button = document.getElementById(event);
    clearTable('111');
    button.addEventListener('click', function() {
        getElem('111');
    });
}
clickBut('myButton');



