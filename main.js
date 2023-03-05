
function removePaywall(){

    document.body.style.overflow = "visible";

    var elements = document.body.getElementsByClassName("paywall-shadow");
    if (elements){
        for (var i = 0; i < elements.length; i++) {
            elements[i].remove();
        }
    }
}

setTimeout(removePaywall, 3000);