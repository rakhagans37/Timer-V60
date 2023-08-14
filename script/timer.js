//Declare choosen recipe
const choosenRecipe = Number(sessionStorage.getItem("choosenRecipeId"));

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
    const finishTime = new Date(Date.now() + json.totalTime).getTime();
    console.log(json);

    function printTimer() {
        let time = new Date(
            finishTime - Date.now() + new Date().getTimezoneOffset() * 60000
        );
        time.setMilliseconds(0); //In order to make milis consistent
        const target = document.getElementById("timer");
        const audio = new Audio("../src/audio/beep.mp3");

        //Print time
        target.textContent = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

        //Reminder if timer have finished
        if (
            Math.round(time.getTime()) ===
            new Date(0).getTime() + new Date().getTimezoneOffset() * 60000
        ) {
            console.log("Finish");
            audio.play();
            setTimeout(() => audio.pause(), 2000);
        }
    }

    setInterval(printTimer, 1000);
}

print(choosenRecipe);
timerStart(choosenRecipe);
