let prom = window.prompt('enter you name');
console.log(prom);
let username;
document.getElementById('mybutton').onclick = function(){

    username = document.getElementById("name").value;
    console.log(username);
    document.getElementById('fir').innerHTML = 'name recorded';
} 