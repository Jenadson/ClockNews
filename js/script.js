
function starthournow() {
    const now = new Date();
    const dateToday = new Date();
    const hour = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0'); 
    document.getElementById("timer").textContent =`${hour}:${minutes}:${seconds}`;

    const dayWeekArray = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const dayWeek = dayWeekArray[dateToday.getDay()];
    const day = String(dateToday.getDate()).padStart(2,'0');
    const month = String(dateToday.getMonth()+1).padStart(2,'0');
    const year = dateToday.getFullYear();

    

    document.getElementById("date").textContent = `${day}/${month}/${year}`
    document.getElementById("dayweek").textContent = `${dayWeek}`

}




setInterval(starthournow, 1000);
starthournow();

