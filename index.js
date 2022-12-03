const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersWithOutSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const buttonEl = document.querySelector(".generate");
const pass1El = document.querySelector(".pass1");
const pass2El = document.querySelector(".pass2");
const inputCountEl = document.querySelector("#count");
const checkBoxEl = document.querySelector("#symbol");
buttonEl.addEventListener("click", function() {
   let randomPass1 = "";
   let randomPass2 = "";
   
   if(checkBoxEl.checked) {
         for(let i = 0; i < inputCountEl.value; i++) {
       randomPass1 += characters[Math.floor(Math.random() * characters.length)];
       randomPass2 += characters[Math.floor(Math.random() * characters.length)];
   }  
   
   pass1El.textContent = randomPass1;
   pass2El.textContent = randomPass2;
   } else {
        for(let i = 0; i < inputCountEl.value; i++) {
       randomPass1 += charactersWithOutSymbols[Math.floor(Math.random() * charactersWithOutSymbols.length)];
       randomPass2 += charactersWithOutSymbols[Math.floor(Math.random() * charactersWithOutSymbols.length)];
   } 
    pass1El.textContent = randomPass1;
   pass2El.textContent = randomPass2; 
   }
   
   
 
   
   
});



