
  
 async function getData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
     
      console.log(data);
       getId(data, fibonacci);
      
     
    } catch (error) {
      console.error(error);
    }
    
  }
  
 
 let userFib = getData('https://jsonplaceholder.typicode.com/todos');
 
//  document.body.innerHTML = userFib;
  
  let n = 15; 
  let fibonacci = [1, 2]; 
for (let i = 2; i < n; i ++) {
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
 console.log(fibonacci);
 
 
 

 function getId(arr, fibonacci) {
  let clonedArray = JSON.parse(JSON.stringify(arr));
   for (let i = 0; i < fibonacci.length; i++) {
     if (fibonacci[i]!=null) {
      for ( j=0; j < clonedArray.length; j++)
       if (fibonacci[i]==clonedArray[j].id){
        showUser(clonedArray[j]);
        console.log(fibonacci[i]);}
       }  
     
     
  }
 
 }

 function showUser(arr) {
  let divId = document.getElementById('userId');
  let ul = document.createElement('ul');
  divId.appendChild(ul);
  for (let i in arr) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML=arr[i];

  }
 }

