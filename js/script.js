
function starthournow() {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0'); 
    document.getElementById("timer").textContent =`${hour}:${minutes}:${seconds}`;
}

setInterval(starthournow, 1000);
starthournow();
