var array = [
    {id: 1, parent: 0},
    {id: 2, parent: 1},
    {id: 3, parent: 2},
    {id: 4, parent: 1},
    {id: 5, parent: 3},
    {id: 6, parent: 4}
]

function makeTree(input) {
  var root = null;
  var byId = {};
  var i;
  
  for (i = 0; i < input.length; i++) {
    if (input[i].parent == 0)
      root = input[i];
      
    byId[input[i].id] = input[i];
    input[i].children = [];
  }

  for (i = 0; i < input.length; i++) {
    if (byId[input[i].parent])
      byId[input[i].parent].children.push(input[i]);
  }

  return root;
}

console.log(makeTree(array));    
    

var data = [
    {id: 0, parent_id: null}, 
    {id: 1, parent_id: 0}, 
    {id: 2, parent_id: 1}, 
    {id: 3, parent_id: null}, 
    {id: 4, parent_id: 3},
    {id: 5, parent_id: 0},  
];

console.log(getTree(data));

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

// var data = {
//       "Рыбы": {
//         "Форель": {},
//         "Щука": {}
//       },

//       "Деревья": {
//         "Хвойные": {
//           "Лиственница": {},
//           "Ель": {}
//         },
//         "Цветковые": {
//           "Берёза": {},
//           "Тополь": {}
//         }

//       }
//     };


    function createTree(container, obj) {
      container.appendChild(createTreeDom(obj));
    }

    function createTreeDom(obj) {
      // если нет детей, то рекурсивный вызов ничего не возвращает
      // так что вложенный UL не будет создан
      if (isObjectEmpty(obj)) return;

      var ul = document.createElement('ul');

      for (var key in obj) {
        var li = document.createElement('li');
        li.innerHTML = key;

        var childrenUl = createTreeDom(obj[key]);
        if (childrenUl) li.appendChild(childrenUl);

        ul.appendChild(li);
      }

      return ul;
    }


    function isObjectEmpty(obj) {
      for (var key in obj) {
        return false;
      }
      return true;
    }

    var container = document.getElementById('container');
    createTree(container, makeTree(array));


 var tree = document.getElementsByTagName('ul')[0];

    var treeLis = tree.getElementsByTagName('li');

    /* wrap all textNodes into spans */
    for (var i = 0; i < treeLis.length; i++) {
      var li = treeLis[i];

      var span = document.createElement('span');
      li.insertBefore(span, li.firstChild);
      span.appendChild(span.nextSibling);
    }

    /* catch clicks on whole tree */
    tree.onclick = function(event) {
      var target = event.target;

      if (target.tagName != 'SPAN') {
        return;
      }

      /* now we know the SPAN is clicked */
      var childrenContainer = target.parentNode.getElementsByTagName('ul')[0];
      if (!childrenContainer) return; // no children

      childrenContainer.hidden = !childrenContainer.hidden;
    }
    
    
    
