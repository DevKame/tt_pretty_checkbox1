"use strict";

const wrappers = document.querySelectorAll(".cb-wrapper");

wrappers.forEach(w => {
    w.addEventListener("click", toggleActive);
});

function toggleActive(e) {
    if(e.detail === 0)
    {
        e.stopPropagation();
    }
    else {
        console.log(e.currentTarget);
        e.currentTarget.classList.toggle("active");
        // IF YOU ACTUALLY NEED A CHECKBOX FOR SOME LOGIC
        e.currentTarget.querySelector("input[type='checkbox']").click();
    }
}

const cbs = document.querySelectorAll("input[type='checkbox']");
cbs.forEach(cb => {
    cb.addEventListener("change",  e => {
        console.log(e.target.checked);
    });
});