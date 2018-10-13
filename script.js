// write your JS code here

let count = 0; 
let number = 0;
let  n = num.toFixed(2);



    function plus(){
        
number++;
count += 5.99;
        
        document.querySelector(".book-amount").innerHTML = "$" + count;
        document.querySelector("input").value = number ;
    }

    function minus(){
        
number--;
count -= 5.99;
    if (number >= 0 || count >= 0.00){
        

        document.querySelector(".book-amount").innerHTML =  "$" + count;
        document.querySelector("input").value = number ;
      
    }  else{
            console.log(0);
    }

    }
// let books = [ 
//     {
//         bookImage = "images/book2.jpg",
//     }
// ];

// function addBooks(){
//     document.querySelector(".book-image").innerHTML = bookImage; 
// }



