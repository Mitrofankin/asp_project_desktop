const time = 10000;
const step = 1;

function outNum(num,elem){
    let l = document.querySelector('#' + elem);
    n = 0;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if (n >= num) {
            clearInterval(interval);
        } 
        l.innerHTML = n;
    },
        t);
}
outNum(7, 'out-1');
// outNum(7000, 'out-2');
outNum(350, 'out-3');