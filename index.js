//Status
function updateStatus() {

    const now = new Date();
    const hours = now.getHours();
    if (hours >= 6 && hours < 12) {
        const status = `Status: thank you caffeine`;
        document.getElementById("status").textContent = status;
    }
    else if (hours >= 12 && hours < 18) {
        const status = `Status: locked in`;
        document.getElementById("status").textContent = status;
    }
    else if (hours >= 18 && hours < 22) {
        const status = `Status: absolutely`;
        document.getElementById("status").textContent = status;
    }
    else if (hours >= 22 || hours < 6) {
        const status = `Status: sleeping (Probably)`;
        document.getElementById("status").textContent = status;
    }
        
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const time = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = time;
}

updateStatus();
updateClock();
setInterval(updateStatus, 1000);
setInterval(updateClock, 1000);