window.onload = function () {


    var drawer = document.getElementById('drawer');
    // var menu = document.getElementsByClassName('nav_button');
    var menu = document.querySelector('.nav_button');


    menu.addEventListener('click', function (e) {
        alert("hello");
        // drawer.classList.toggle('open');
        // e.stopPropagation();
    });
};