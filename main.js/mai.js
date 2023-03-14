

const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

// For Opening Popup

btns.forEach( (btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target) .classlist.add("active");
        overlay.classList.add("active");
    });
});

// For Closing popup "X" Sign

close_modals.forEach( (btn) => {
    btn.addEventListener("click", () => { const modal = btn.closed(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
 })
})

//After Opening popup, If you click outside the Popup, It will Close.

window.onclick = (event) => {
    if (event.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach( (modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
} 