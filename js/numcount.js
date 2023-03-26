const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerHTML = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;

        if (c < target) {
            counter.innerText = c + 5;
            setTimeout(updateCounter, 1);
        } else{
            counter.innerText = target;
        }
    };
    updateCounter()
})

const counters1 = document.querySelectorAll(".counter1");

counters1.forEach((counter1) => {
    counter1.innerHTML = "0";

    const updateCounter = () => {
        const target = +counter1.getAttribute("data-target");
        const c = +counter1.innerText;

        if (c < target) {
            counter1.innerText = c + 1;
            setTimeout(updateCounter, 1);
        } else{
            counter1.innerText = target;
        }
    };
    updateCounter()
})