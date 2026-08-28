// //window.onload=function(){
//   const hh2 = document.querySelector("h2");
//   hh2.style.color='blue';



    
// //document.createElement("")
// console.log("hellow from jp");
 

//var lab ={ Name:"asusi6" , gpu : "nvidia 1650" , cpu:"cori5 10th"  } ;
//alert(lab.Name );




const bt1=document.getElementById('b1');
 bt1.onclick = function () {
var x =Number(document.getElementById('input1').value) ; 
var y = parseInt(document.getElementById('input2').value) ;      
//window.alert('sum done'); 
var r =  (x + y) ;
document.getElementById("varival 1").innerHTML = r;
var z = x - y ;
document.getElementById('varival 2').innerHTML = z;
var z = x / y ;
document.getElementById('varival 3').innerHTML = z;
var z = x * y ;
document.getElementById('varival 4').innerHTML = z;


};