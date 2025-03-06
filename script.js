function openEnvelope() {
    document.querySelector(".envelope").classList.add("open");

    setTimeout(() => {
        document.querySelector(".invitation").classList.add("show");
    }, 800);
}

function updateRSVP(status) {
    var name = prompt("Enter your name:");
    if (name) {
        sendEmail(name, status);
        alert("Your response has been sent! Thank you.");
    }
}

function sendEmail(name, status) {
    var email = "sivelelenkamane29@gmail.com"; // Replace with your email
    var form = document.createElement("form");
    form.action = "https://formsubmit.co/" + email;
    form.method = "POST";

    var inputName = document.createElement("input");
    inputName.type = "hidden";
    inputName.name = "name";
    inputName.value = name;
    form.appendChild(inputName);

    var inputStatus = document.createElement("input");
    inputStatus.type = "hidden";
    inputStatus.name = "status";
    inputStatus.value = status === 'accepted' ? "Accepted" : "Rejected";
    form.appendChild(inputStatus);

    var inputSubmit = document.createElement("input");
    inputSubmit.type = "submit";
    form.appendChild(inputSubmit);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
}
