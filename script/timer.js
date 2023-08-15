//Declare choosen recipe
const choosenRecipe = Number(sessionStorage.getItem("choosenRecipeId"));
let interval;

//Function
function print(choosenRecipeId) {
    //Declare variable to used
    const json = JSON.parse(localStorage.getItem("timerCollection")).list[
        choosenRecipeId
    ];
    const time = new Date(
        json.totalTime + new Date().getTimezoneOffset() * 60000
    );
    const targetTitle = document.getElementById("title");
    const targetTotalTime = document.getElementById("totalTime");
    const targetTimer = document.getElementById("timer");

    //Print variable into screen
    targetTitle.textContent = targetTitle.textContent = json.name;
    targetTotalTime.textContent = `Total time : ${time.getHours()}h ${time.getMinutes()}m ${time.getSeconds()}s`;
    targetTimer.textContent = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
}

function timerStart(choosenRecipeId) {
    const json = JSON.parse(localStorage.getItem("timerCollection")).list[
        choosenRecipeId
    ];
    let i = 0;
    let finishTime = new Date(Date.now() + json.node[i].nodeTime).getTime();

    function printTimer() {
        //Declare
        let time = new Date(
            finishTime - Date.now() + new Date().getTimezoneOffset() * 60000
        );
        time.setMilliseconds(0); //In order to make miliseconds consistent
        const target = document.getElementById("timer");
        const audio = new Audio("../src/audio/beep.mp3");

        //Print time
        target.textContent = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

        //Reminder if timer have finished
        if (
            time.getTime() ===
            new Date(0).getTime() + new Date().getTimezoneOffset() * 60000
        ) {
            if (i !== json.node.length - 1) {
                //Update finish time into next node
                i += 1;
                finishTime = new Date(
                    Date.now() + json.node[i].nodeTime
                ).getTime();

                //Play reminder sound for 2 seconds
                audio.play();
                setTimeout(() => audio.pause(), 2000);
            } else {
                reset(choosenRecipeId);
            }
        }
    }

    interval = setInterval(printTimer, 1000);
}

function reset(choosenRecipeId) {
    clearInterval(interval);
    print(choosenRecipeId);
}

function quit() {
    window.location = "index.html";
}

print(choosenRecipe);
document
    .getElementById("play")
    .setAttribute("onclick", `timerStart(${choosenRecipe})`);
document
    .getElementById("reset")
    .setAttribute("onclick", `reset(${choosenRecipe})`);

interval;
