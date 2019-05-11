//Cuando de enter se insertara otro input
var contador = 2;  
window.addEventListener("keydown",function(event){
    if (event.key == "Enter" || event.keyCode == 13){
        let divhtml ="<div class='filatxt' id='p"+ contador +"'>"
                +"<div class='number'>"+ contador + "</div>"
                +"<input type='text' class='txtarea'>"
                +"</div>";
        contador++;
        document.getElementById('test').innerHTML+=divhtml;
        let z = contador -1;
        let x = "p" + z;
        document.getElementById(x).focus();
        
    }   
},false);