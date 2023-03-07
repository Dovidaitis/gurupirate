function getTicker(){
 return window.location.pathname.split("/")[2];
}

let previousTicker = getTicker;

function closeBuffett(){
    document.body.getElementsByClassName("v-modal")[0].remove()
    Array.from(document.body.getElementsByClassName("el-dialog__wrapper gf")).forEach(function(element){
    element.remove()});
}

function removePaywall(){

    document.body.style.overflow = "visible";

    var elements = document.body.getElementsByClassName("paywall-shadow");
    if (elements){
        for (var i = 0; i < elements.length; i++) {
            elements[i].remove();
        }
    }
}

function urlPolling(){
    newTicker = getTicker();
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