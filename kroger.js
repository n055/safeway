function fuckKroger() {
    setTimeout(function() {
        const elems = document.querySelectorAll(".CouponActionButton.palette-accent");
        try {
            elems[Math.round(Math.random()*(elems.length))].click();
        } catch (e) {}
        fuckKroger();
    }, 1000 + Math.round(1000 * Math.random()));
}
try {
    fuckKroger();
}
catch (e) {
    setTimeout(fuckKroger(), 1000);
}
