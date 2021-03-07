document.addEventListener('DOMContentLoaded',  () => {

    var button = document.querySelector('#login');
    var userName = document.querySelector('#username');
    var passwd = document.querySelector('#password');

    button.addEventListener('click',function(e){
        e.preventDefault();
        if(userName.value == "admin" && passwd.value == "12345"){
            alert("Welcome to my website!");
            window.location.replace("../HTML/Welcome.html");
        }
        else{
            alert("Wrong information");
        }
    })
});