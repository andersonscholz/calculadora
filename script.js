function insert(num){
    var numero = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero + num;
}
function clean(){
    document.getElementById('visor').innerHTML = "";
}
function back(){
    var resultado = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = resultado.substring(0,resultado.length -1);
} 