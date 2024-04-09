function fuckSafeway() {
    setTimeout(function() {
        const elems = document.querySelectorAll(".coupon-grid-offer button");
        try {
            elems[Math.round(Math.random()*(elems.length))].click();
        } catch (e) {}
        fuckSafeway();
    }, 1000 + Math.round(1000 * Math.random()));
}
try {
    fuckSafeway();
}
catch (e) {
    setTimeout(fuckSafeway(), 1000);
}