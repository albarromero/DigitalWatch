const showWatch = ()=>{
    let date = new Date();
    let hour = hourFormat(date.getHours());
    let min = hourFormat(date.getMinutes());
    let sec = hourFormat(date.getSeconds());
    document.getElementById("hour").innerHTML = `${hour}:${min}:${sec}`;
    const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    const days = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"];
    let weekDay = days[date.getDay()];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let textDate = `${weekDay}, ${day} de ${month}`;
    document.getElementById("date").innerHTML = textDate;
    document.getElementById("container").classList.toggle("animation")
}

const hourFormat = (hour)=>{
    if(hour<10) 
        hour = "0" + hour;
    return hour;
}

const changeForm = ()=>{

    let borderRadius = document.getElementById("container").style.borderRadius;
    if(borderRadius!="300px") {
        document.getElementById("container").style.borderRadius="300px";
    } else {
        document.getElementById("container").style.borderRadius="10px";
    }
    
}
setInterval(showWatch, 1000)