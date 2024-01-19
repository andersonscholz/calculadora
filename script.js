function insert(num){
    var numero = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero + num;
}
function clean(){
    document.getElementById('visor').innerHTML = "";
}