function getTicker(){
    return window.location.pathname.split("/")[2];
}

let previousTicker = getTicker();

function closeBuffett(){
    const modal = document.body.getElementsByClassName("v-modal")[0].remove()
    if (modal) {
        modal.remove();
      }
    Array.from(document.body.getElementsByClassName("el-dialog__wrapper gf")).forEach(function(element){
    element.remove()});
}

function removePaywall(){
    document.body.style.overflow = "visible";

    const elements = document.body.getElementsByClassName("paywall-shadow");
    Array.from(elements).forEach(function(element) {
        element.remove();
    });
}

function urlPolling(){
    const newTicker = getTicker();
    if (newTicker !== previousTicker){
        previousTicker = newTicker;
        main()
    } 
}

function main(){
    console.log("--- guru running ---");
    setTimeout(removePaywall, 2000);
    setTimeout(closeBuffett, 7000);
}

main()
setInterval(urlPolling, 1000);