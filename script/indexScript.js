function printTimeNode() {
    const json = JSON.parse(localStorage.getItem("timerCollection"));
    for (let i = 0; i < json.list.length; i++) {
        //Deklarasi variabel untuk menampung nilai yang akan di print
        const target = document.getElementById("timerCollection");
        const divTarget = document.createElement("div");
        const divTargetChild = document.createElement("div");
        const divChildLeft = document.createElement("div");
        const divChildRight = document.createElement("div");
        const headingType = document.createElement("h2");
        const pName = document.createElement("p");
        const aGoto = document.createElement("button");
        const imageGoTo = document.createElement("img");
        const date = new Date(
            json.list[i].totalTime + new Date().getTimezoneOffset() * 60000
        );

        //Memberi class pada element
        divTarget.className = "card";
        divTargetChild.className = "card-details-index";
        divChildLeft.className = "card-details-left";
        divChildRight.className = "card-details-right";
        headingType.className = "h2";
        pName.className = "p";
        imageGoTo.className = "w-6";

        //Memasukkan nilai yang akan di print

        imageGoTo.src = "/src/img/right arrow.png";
        headingType.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        pName.textContent = `${json.list[i].name}`;

        //Proses print ke halaman
        aGoto.appendChild(imageGoTo);
        divChildLeft.appendChild(headingType);
        divChildLeft.appendChild(pName);
        divChildRight.appendChild(aGoto);
        divTargetChild.appendChild(divChildLeft);
        divTargetChild.appendChild(divChildRight);
        divTarget.appendChild(divTargetChild);
        target.appendChild(divTarget);
    }
}
printTimeNode();
