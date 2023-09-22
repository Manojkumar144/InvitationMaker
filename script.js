const updateButton = document.getElementById('updateButton');
        updateButton.addEventListener('click', () => {
            window.location.href = 'invitation.html';
        });

function updateInvitation() {
    const brideName = document.getElementById("bride-name").value;
    const groomName = document.getElementById("groom-name").value;
    const eventDate = document.getElementById("event-date").value;
    const eventDay = document.getElementById("event-day").value;
    const eventTime = document.getElementById("event-time").value;
    const eventAddress = document.getElementById("event-address").value;

    localStorage.setItem("brideName", brideName);
    localStorage.setItem("groomName", groomName);
    localStorage.setItem("eventDate", eventDate);
    localStorage.setItem("eventDay", eventDay);
    localStorage.setItem("eventTime", eventTime);
    localStorage.setItem("eventAddress", eventAddress);
    window.location.href = "invitation.html";
}
function createInvitation()
{
    window.location.href = "hello.html";
}

