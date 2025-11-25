
//About

function About(){
    var Ani = document.getElementById("animi")
    var TAbi1 = document.getElementById("O1")
    var TAbi2 = document.getElementById("O2")
    var TAbi3 = document.getElementById("O3")
    var TAbi4 = document.getElementById("O4")
    var TAbi5 = document.getElementById("05")

    
    Ani.style.height = "100%"

    TAbi1.style.opacity = "0"
    TAbi1.style.transitionDelay = "0.5s"
    TAbi1.style.transition = "0.3s"

    TAbi2.style.opacity = "0"
    TAbi2.style.transitionDelay = "0s"
    TAbi2.style.transition = "0.3s"

    TAbi3.style.opacity = "0"
    TAbi3.style.transitionDelay = "0s"
    TAbi3.style.transition = "0.3s"
    
    TAbi4.style.opacity = "0";
    TAbi4.style.transitionDelay = "0s"
    TAbi4.style.transition = "0.3s"

    TAbi5.style.opacity = "0";
    TAbi5.style.transitionDelay = "0s"
    TAbi5.style.transition = "0.3s"
}


var Ani = document.getElementById("animi")
var TAbi1 = document.getElementById("O1")
var TAbi2 = document.getElementById("O2")
var TAbi3 = document.getElementById("O3")
var TAbi4 = document.getElementById("O4")
var TAbi5 = document.getElementById("05")

window.addEventListener('load', function(){
    Ani.style.height = "280px"
    TAbi1.style.opacity = "1"
    TAbi2.style.opacity = "1"
    TAbi3.style.opacity = "1"
    TAbi4.style.opacity = "1"
    TAbi5.style.opacity = "1"
})

//About

//Index

function Index(){
    var Tin1 = document.getElementById('I1')
    var Tin2 = document.getElementById('I2')
    var Tin3 = document.getElementById('I3')
    var Tin4 = document.getElementById('I4')
    var Tin5 = document.getElementById('I5')
    var Tin6 = document.getElementById('I6')
    var Tin7 = document.getElementById('I7')
    var Tin8 = document.getElementById('I8')


    window.addEventListener('click', function(){
        Tin1.style.opacity = "0"
        Tin2.style.opacity = "0"
        Tin3.style.opacity = "0"
        Tin4.style.opacity = "0"
        Tin5.style.opacity = "0"
        Tin6.style.opacity = "0"
        Tin7.style.opacity = "0"
        Tin8.style.opacity = "0"
    })
}

var Tin1 = document.getElementById('I1')
var Tin2 = document.getElementById('I2')
var Tin3 = document.getElementById('I3')
var Tin4 = document.getElementById('I4')
var Tin5 = document.getElementById('I5')
var Tin6 = document.getElementById('I6')
var Tin7 = document.getElementById('I7')
var Tin8 = document.getElementById('I8')

window.addEventListener('load', function(){
    Tin1.style.opacity = "1";
    Tin2.style.opacity = "1";
    Tin3.style.opacity = "1";
    Tin4.style.opacity = "1";
    Tin5.style.opacity = "1";
    Tin6.style.opacity = "1";
    Tin7.style.opacity = "1";
    Tin8.style.opacity = "1";
})

//Index

//Pictures//

function except(){
    localStorage.setItem('bgbg', '280px')

    var Ani = document.getElementById("animi")
    Ani.style.height = "280px"
}


var PicD1 = document.getElementById('main-pic');
var gal = document.getElementById('gal');

var www = localStorage.getItem('bgbg')
document.getElementById('animi-2').style.height = www

window.addEventListener('load', function(){
    PicD1.style.opacity = '1'
    gal.style.opacity = '1';
})



//Picture//