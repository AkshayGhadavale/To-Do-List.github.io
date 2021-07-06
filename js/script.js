function timeget() {
    let datetoday = new Date();
    let hour = datetoday.getHours();
    let ampm = hour >= 12 ? 'PM' : 'AM';
    let min = datetoday.getMinutes();
    let minvalue = document.getElementById("minutes");
    let hrsvalue = document.getElementById("hours");
    let modevalue = document.getElementById("mode");
    modevalue.value = ampm;
    minvalue.value = min;
    hrsvalue.value = hour % 12;
}

function ampmset() {
    let datetoday = new Date();
    let hour = datetoday.getHours();
    let ampm = hour >= 12 ? 'PM' : 'AM';
    let modevalue = document.getElementById("mode");
    modevalue.value = ampm;
}
timeget();

function addlist() {

    let minvalue = document.getElementById("minutes").value;
    let hrsvalue = document.getElementById("hours").value;
    let modevalue = document.getElementById("mode").value;

    let timelap = hrsvalue + ":" + minvalue + ":" + modevalue;
    // document.getElementById("times").innerText = start + "/" + min + "/" + hours;
    let lap = [];

    lap.push(timelap);

    ul = document.createElement("ul");

    document.getElementById("lap").appendChild(ul);

    for (i = 0; i < lap.length; i++) {
        let li = document.createElement("li");
        // btn = document.createElement('button');
        ul.appendChild(li);
        ul.style.display = "flex";

        // ul.style.flexdirection="column-reverse";
        //  ul.style.flexgrow="1";
        // flex-direction: column-reverse;
        // 


        li.style.listStyle = "none";
        li.style.width = "400px";
        li.style.height = "40px";
        li.style.display = "flex";
        li.style.backgroundColor = "grey";
        li.style.borderRadius = "10px";
        li.style.justifyContent = " space-between";
        li.style.alignItems = "center";
        li.style.marginTop = "10px";
        let button = document.createElement("Button");


        button.style.backgroundColor = "red";

        button.style.width = "50px";
        button.style.height = "30px";
        button.style.borderRadius = "10px";
        button.style.justifySelf = "flex-end";
        button.id = "cancelbtn" + "lap[i]";






        li.innerHTML += lap[i]
        li.appendChild(button);







    }

    document.getElementById('cancelbtn').addEventListener('click', function() {
        alert("als");
        lap.slice(1, 1)
    });



}