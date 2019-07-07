makeRequest('employees', createTree);

function makeRequest(fileName, callback) {

    var url = getUrl(fileName);

    var data = loadDataFromStorage(fileName);

    if (data) {
        callback(data);

        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {

        var data = (JSON.parse(this.response));

        callback(data);

        saveDataToStorage(data, fileName);

    }


    xhr.onerror = function () {

        console.log('error');

    }

    xhr.send();

}

function saveDataToStorage(data, itemName) {
    var stringifiedData = JSON.stringify(data);
    localStorage.setItem(itemName, stringifiedData);
}


function getUrl(fileName) {
    return ('/' + fileName + '.json')
}





function loadDataFromStorage(s) {
    var stringifiedData = JSON.stringify(s);
    localStorage.setItem('s', stringifiedData);
    console.log(stringifiedData);
}



function getTree(arr) {
    // 1. make a copy
    var clonedArray = JSON.parse(JSON.stringify(arr));


    // 2. step-by-step checking if array element has parent
    for (var i = 0; i < clonedArray.length; i++) {

        // 3. if has we're trying to assign this element as child
        if (clonedArray[i].parent_id !== null) {

            // 4. trying to find it's parent
            for (var j = 0; j < clonedArray.length; j++) {

                // 5. if parent exists in array we work with it
                if (clonedArray[j].id === clonedArray[i].parent_id) {

                    // 6. first we check if father has children array
                    if (!clonedArray[j].children) {
                        clonedArray[j].children = [];
                    }

                    // 7. and then push it as child
                    clonedArray[j].children.push(clonedArray[i]);
                }
            }
        }
    }
    // 8. we filter only root values
    return clonedArray.filter(function (val) {
        return val.parent_id === null;
    });
}

function createTree(res) {
    var treeRoot = document.createElement('ul');
    var treeArr = getTree(res);
    addEl(treeRoot, treeArr);
    container.appendChild(treeRoot);
    function addEl(parent, children) {
        for (var i = 0; i < children.length; i++) {
            var li = document.createElement('li');
            li.setAttribute('id', children[i].id);

            var span = document.createElement('SPAN');
            var span2 = document.createElement('SPAN');
            span.className = 'itemName';
            span2.className = 'item';
            span.innerText = children[i].name;
            li.appendChild(span2);
            li.appendChild(span);

            parent.appendChild(li);

            if (children[i].children) {
                var ul = document.createElement('ul');
                // ul.setAttribute('style', 'display: none');
                addEl(ul, children[i].children);
                li.appendChild(ul);
                // addEl(li, children[i].children);
            }
        }
    }
}


var listEmployees = ['00', '01', '02', '03'];
var dataListEmployees = [];

listEmployees.forEach(function (elem) {
    makeRequest(elem, foo);
});




var tree = container.getElementsByTagName('ul')[0];
var treeLis = container.getElementsByTagName('li');
var treeUls = document.getElementsByTagName('ul');
container.onclick = function (event) {
        var target = event.target;

        if (target.className == 'item') {
            var childrenContainer = target.parentNode.getElementsByTagName('ul')[0];
            if (!childrenContainer) return; // no children
            childrenContainer.hidden = !childrenContainer.hidden;
        }
        if (target.className == 'itemName') {
            var parentId = target.parentNode.id;
            for (var b = 0; b < dataListEmployees.length; b++) {
                for (var d = 0; d < dataListEmployees[b].length; d++) {
                    // dataListEmployees[b][d].id

                    if (dataListEmployees[b][d].id == parentId) {
                        // var idR = dataListEmployees[b][d].id;

                        console.log(dataListEmployees[b][d].first_name);
                        console.log(dataListEmployees[b][d].last_name);
                        console.log(dataListEmployees[b][d].age);
                        console.log(dataListEmployees[b][d].phone);

                        var table = document.getElementById('table-persons');
                        var data = (dataListEmployees[b][d]);
                        var tbody = document.createElement('tbody');
                        table.appendChild(tbody);
                        var tr = document.createElement('tr');
                        tbody.appendChild(tr);
                        for (var ib in data) {
                                var td = document.createElement('td');
                                tr.appendChild(td);
                                td.innerHTML = (data[ib]);
                    }

                    }
                }
            }
        }
};



        function clearTable(tableId) {
            var table = document.getElementById('table-persons');
            table.removeAttributeNS();
        }

        var clearAll = document.getElementById('clearAll');
        // var table = document.querySelector('#table-persons table');
        clearAll.onclick = clearTable;
        // addEventListener('click', clearTable('table-persons') );

    


        function foo(elem) {
            dataListEmployees.push(elem);
        }

        console.log(dataListEmployees);



        window.onclick = e => {
            console.log(e.target);
            console.log(e.target.tagName);
            console.log(e.target.parentNode);

        };