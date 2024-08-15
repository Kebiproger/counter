const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const reset = document.getElementById('reset');

let num = 0;

increase.onclick = function(){
    num++
    document.getElementById('text').textContent = num
}
decrease.onclick = function(){
    num--
    document.getElementById('text').textContent = num
}
reset.onclick = function(){
    num = 0
    document.getElementById('text').textContent = num
}
