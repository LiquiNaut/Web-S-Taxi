//disable right click
document.oncontextmenu = function () {
    return false;
}

const countEl = document.getElementById('count');

updateVisitCounter();
//used CountApi with {"namespace":"s-taxi.sk","key":"views","value":0}
//info about my key: https://api.countapi.xyz/info/s-taxi.sk/views
function updateVisitCounter() {
    fetch('https://api.countapi.xyz/update/s-taxi.sk/views/?amount=1')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        })
}