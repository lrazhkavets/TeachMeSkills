class MyArray {
    constructor() {
      this.array = [];
    }
  
    pushMy(...items) {
      this.array.push(...items);
    }
  
    spliceMy() {}
  
    mapMy(callback) {
        let a = this.array.push(...items);
        return callback(a);
    }
  
    filterMy() {}
  
    findMy() {}
  
    sortMy() {}
  
    includesMy() {}
  }
  
  const arr1 = new MyArray();
  
  arr1.pushMy(1, 2, 3, 3);

  console.log(arr1);

  // const arr2 = new MyArray();
  
  function fun(b) {
return b*2;
  }
  arr1.mapMy(fun(2));
  console.log(arr1);
  
//   const ar2 = ar.map(function(item, index, array) {
//     return item;
//   });
  

