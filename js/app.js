const screen = document.querySelector('#screen')
const btns = document.querySelectorAll('.btn')


for (let item of btns) {
    item.addEventListener('click', (e) => {
        let btnText = e.target.innerText;
        if (btnText == 'x') {
            btnText = '*';
        }

        if (btnText == '÷') {
            btnText = '/'
        }

        screen.value += btnText;

    })
}


function sin() {
    screen.value = Math.sin(screen.value)
}
function cos() {
    screen.value = Math.cos(screen.value)
}
function tan() {// textbtn should be argument for that
    screen.value = Math.tan(screen.value)
}
function pow()  {
    screen.value = Math.pow(screen.value,2)
}
function sqrt() {
    screen.value = Math.sqrt(screen.value)
}
function log() {
    screen.value = Math.log(screen.value)
}
function pi() {
    screen.value = 3.14159265359
}
function e() {
    screen.value = 2.71828182846
}
function fact() {
    let i, num, f;

    f = 1;
    num = screen.value;

    for (i = 1; i <= num; i++) {
        f = f * 1
    }
    i = i - 1;

    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1)
}










// minut: 9 in the video :  https://youtu.be/LgryqYxSCNk?si=5Cuk7LUBHJBWEdQV