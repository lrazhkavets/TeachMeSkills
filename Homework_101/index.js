class MyArray {
    constructor() {
      this.array = [];
    }
  
    pushMy(...items) {
      this.array.push(...items);
    }
  
    spliceMy() {}
  
    mapMy(callback) {
        this.array.push(...items);;
        return callback;
    }
  
    filterMy() {}
  
    findMy() {}
  
    sortMy() {}
  
    includesMy() {}
  }
  
  const arr1 = new MyArray();
  
  arr1.pushMy(1, 2, 3, 3);

  console.log(arr1);
  
//   const ar2 = ar.map(function(item, index, array) {
//     return item;
//   });
  

