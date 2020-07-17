var btns = [
    document.getElementById('b1'),
    document.getElementById('b2'),
    document.getElementById('b3')
]
var btnStat = [false,false,false]

btns[0].onclick = function () {
    let img = document.getElementById('i1')
    if (btnStat[0]==false) {
        img.style.visibility = 'visible'
        btns[0].innerHTML = 'Zamknij'
    }
    else{
        img.style.visibility = 'hidden'
        btns[0].innerHTML = 'E-mail'
    }
    console.log(btnStat)
    btnStat[0]=!btnStat[0]
}
btns[1].onclick = function () {
    let img = document.getElementById('i2')
    if (btnStat[1]==false) {
        img.style.visibility = 'visible'
        btns[1].innerHTML = 'Zamknij'
    }
    else{
        img.style.visibility = 'hidden'
        btns[1].innerHTML = 'Phone'
    }
    console.log(btnStat)
    btnStat[1]=!btnStat[1]
}
btns[2].onclick = function () {
    let img = document.getElementById('i3')
    if (btnStat[2]==false) {
        img.style.visibility = 'visible'
        btns[2].innerHTML = 'Zamknij'
    }
    else{
        img.style.visibility = 'hidden'
        btns[2].innerHTML = 'Address'
    }
    console.log(btnStat)
    btnStat[2]=!btnStat[2]
}