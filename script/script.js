// Class & Function
class timer {
    constructor(name, desc, node) {
        this.name = name;
        this.desc = desc;
        this.node = [];
    }

    addNode(newNode) {
        this.node.push(newNode);
    }
}

class timerNode {
    constructor(type, desc, hours, minutes, seconds) {
        this.type = type;
        this.desc = desc;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
}

function printTimeNode(arrayNode) {
    document.getElementById("newTimerNode").innerHTML = "";
    for (let i = 0; i < arrayNode.length; i++) {
        //Deklarasi variabel untuk menampung nilai yang akan di print
        const target = document.getElementById("newTimerNode");
        const divTarget = document.createElement("div");
        const divTargetChild = document.createElement("div");
        const divChildLeft = document.createElement("div");
        const divChildRight = document.createElement("div");
        const headingType = document.createElement("h2");
        const headingTime = document.createElement("h2");
        const pDesc = document.createElement("p");
        const buttonDelete = document.createElement("button");
        const imageDelete = document.createElement("img");

        //Memberi class pada element
        divTarget.className = "card";
        divTargetChild.className = "card-details";
        divChildLeft.className = "card-details-left";
        divChildRight.className = "card-details-right";
        headingType.className = "h2";
        headingTime.className = "h2";
        pDesc.className = "p";
        imageDelete.className = "w-10";

        //Memasukkan nilai yang akan di print
        imageDelete.src = "../src/img/delete.png";
        headingType.textContent = `${arrayNode[i].type}`;
        headingTime.textContent = `${arrayNode[i].hours}:${arrayNode[i].minutes}:${arrayNode[i].seconds}`;
        pDesc.textContent = `${arrayNode[i].desc}`;

        //Proses print ke halaman
        buttonDelete.appendChild(imageDelete);
        divChildLeft.appendChild(headingType);
        divChildLeft.appendChild(pDesc);
        divChildRight.appendChild(headingTime);
        divChildRight.appendChild(buttonDelete);
        divTargetChild.appendChild(divChildLeft);
        divTargetChild.appendChild(divChildRight);
        divTarget.appendChild(divTargetChild);
        target.appendChild(divTarget);
    }
}

//When Submit
let timeNode = [];
document
    .getElementById("timerDetails")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const type = document.getElementById("type");
        const desc = document.getElementById("desc");
        const hour = document.getElementById("hours");
        const minute = document.getElementById("minutes");
        const seconds = document.getElementById("seconds");

        timeNode.push(
            new timerNode(
                type.value,
                desc.value,
                hour.value,
                minute.value,
                seconds.value
            )
        );

        desc.value = "";
        hour.value = "";
        minute.value = "";
        seconds.value = "";

        printTimeNode(timeNode);
    });

//Print
