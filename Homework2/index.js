
// var arr=[5,10,3,4,5,8];
// var sum=0;
// for(var i=0; i<arr.length;i++) {
//     sum = sum + arr[i];
// }
// var avr = sum / arr.length;
// alert (avr);


// var arr=[10,23,45,43,56];
// for(var i=0; i<arr.length;i++) {
//     if (arr[i] % 2 == 0){
//         console.log (arr[i]);
//     }
// }


//Домашка:
// arr.length
// arr.push()
// arr.pop()
// arr.shift()
// arr.unshift()
// while()
// do...while()


// var arr=[10,23,45,43,56,3,52,4,34,9];
// var arrNew=[];
// for(var i=0; i<arr.length;i++) {
//         if (arr[i] > 10) {
//             arrNew.push(arr[i])
//         }
//     }
//     console.log (arrNew);



// var arr=[10,23,45,43,56,3,52,4,34,9];
// var arrNew=[];
// while( arr.length>0 ) {
//     arrNew.push( arr.pop() ); 
// }
// console.log (arrNew);


var arr=[10,23,'45',43,'56',3,52,'4',34,9];
var arr2=[];
var arr3=[];
for(var i=0; i<arr.length;i++) {
    if (typeof arr[i] == 'string') {
        arr[i]=Number(arr[i]);
    }
    if (arr[i] % 2 == 0){
        
        arr2.unshift(arr[i]);
              
    } else {
        arr3.unshift(arr[i]);
        // arr3.unshift(arr.shift( arr[i]) );
    }
}
console.log (arr2);
console.log (arr3);
console.log (arr);
