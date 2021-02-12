"use strict" 
let total = 0;
let number ="";
let calc = "+";

function input(value) {
  if(number === '0'){
   document.querySelector('input').value = 0;
    number='';
  };
  if(number === '00') {
    document.querySelector('input').value = 0;
    number ="";
  };
  number += value;
  document.querySelector('input').value = number;
}

function erase() {
  total = 0;
  calc ="+";
  number ="";
  document.querySelector('input').value = total;
}
 
function Culculate(value) {
    let formula = total + calc + number;
    total = eval(formula);
    number ="";
    document.querySelector('input').value = total;
  if(value == "=") {
    total = 0;
    calc ="+";
  }else{
    calc = value;
  }
}
function devide(value) {
   number = (number / 100);
   document.querySelector('input').value = number;
   calc = "+"
   
}









