/*function suma(x,y){
    return x + y ;
}

function mostrar(){
    var num1= parseInt(document.getElementById("txtn1").value);
    var num2= parseInt(document.getElementById("txtn2").value);

    var result=suma(num1,num2);
    document.getElementById("txttotal").value=result ;
}

*/

function mostrar(){
    var num1= parseInt(document.getElementById("txtn1").value);
    var num2= parseInt(document.getElementById("txtn2").value);

    function suma(x,y){
        return x + y ;
    }
    var result=suma(num1,num2);

    document.getElementById("txttotal").value=result ;
}

