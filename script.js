document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("rsvpSubmitted")) {
        document.querySelector(".envelope").classList.add("locked");
    }
});

function toggleNote() {
    var envelope = document.querySelector(".envelope");
    var note = document.querySelector(".note");

    if (!envelope.classList.contains("locked")) {
        note.classList.toggle("show-note");
    }
}

function updateRSVP(status) {
    var name = prompt("Enter your name:");
    if (name) {
        sendEmail(name, status);

        document.querySelector(".note").classList.remove("show-note");
        document.querySelector(".envelope").classList.add("locked");
        alert("Your response has been sent! You cannot RSVP again.");

        localStorage.setItem("rsvpSubmitted", true);
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