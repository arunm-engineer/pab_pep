let expandBtn = document.querySelector(".expand-btn");
let expandFlag = false;                                         // Flag to alternate full screen mode

expandBtn.addEventListener("click", (e) => {
    expandFlag = !expandFlag;
    if (expandFlag) {
        document.documentElement.requestFullscreen();
    }
    else {
        document.exitFullscreen();
    }
});

document.addEventListener("fullscreenchange", (e) => {
    let icon = document.querySelector(".expand-btn > i");
    if (document.fullscreenElement) {                           // Current state of screen
        icon.classList.remove("fa-expand");
        icon.classList.add("fa-compress");
    }
    else {
        icon.classList.remove("fa-compress");
        icon.classList.add("fa-expand");
    }
})
