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























// -----------------create and list items----------------------------------

function addlist() {



    let minvalue = document.getElementById("minutes").value;
    let hrsvalue = document.getElementById("hours").value;
    let modevalue = document.getElementById("mode").value;
    let name = document.getElementById("tododecp").value
    if (name == "") {
        alert("eneter despctiton ");
    } else {


        let timelap = hrsvalue + ":" + minvalue + ":" + modevalue;
        // document.getElementById("times").innerText = start + "/" + min + "/" + hours;
        let lap = [];

        lap.push(timelap + '&nbsp &nbsp &nbsp &nbsp &nbsp' + name);

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

            //.......................list style creation

            li.style.listStyle = "none";
            li.style.width = "400px";
            li.style.height = "40px";
            li.style.display = "flex";

            li.style.backgroundColor = "grey";
            li.style.borderRadius = "10px";
            li.style.justifyContent = " space-between";
            li.style.alignItems = "center";
            li.style.marginTop = "10px";




            //-------buttton creation
            let button = document.createElement("DIV");



            button.style.backgroundImage = "url(./images/c23.png)";
            button.style.backgroundSize = "cover";
            button.style.backgroundPosition = "center";
            button.style.backgroundRepeat = "no-repeat"

            button.style.width = "40px";
            button.style.height = "40px";

            button.style.justifySelf = "flex-end";
            button.className = "close";


            //button and list item  add in list
            li.innerHTML += lap[i]
            li.appendChild(button);

            var close = document.getElementsByClassName("close");



            //--------to close curent list item 
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function() {
                    var div = this.parentElement;
                    div.style.display = "none";

                }







            }

        }
    }
}