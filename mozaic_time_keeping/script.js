window.onload = () => {
    const count30 = document.getElementById("session-30");
    const count45 = document.getElementById("session-45");
    const transport = document.getElementById("transportation");
    const total30 = document.getElementById("total-30");
    const total45 = document.getElementById("total-45");
    const totalMin = document.getElementById("totalMin");
    const of85 = document.getElementById("of85");
    const reportTime = document.getElementById("report-time");
    const reportMath = document.getElementById("report-math");

    count30.addEventListener("input", function() {
        const minutes = this.value * 30 + count45.value * 45;
        totalMin.innerHTML = `${minutes} minutes`;
        of85.innerHTML = Math.ceil(minutes / 0.85);
        total30.innerHTML = `(${this.value * 30})`;
        const reportHM = 450 - Math.ceil(minutes / 0.85) - transport.value;
        reportTime.innerHTML = reportHM;
        reportMath.innerHTML = `(450 - ${Math.ceil(minutes / 0.85)} - ${transport.value})`;
        const reportHours = Math.floor(reportHM / 60);
        const reportMinutes = reportHM - (reportHours * 60);
        document.getElementById("report-time-hours").innerHTML = `${reportHours} hours, ${reportMinutes} minutes`;
    });

    count45.addEventListener("input", function() {
        const minutes = this.value * 45 + count30.value * 30;
        totalMin.innerHTML = `${minutes} minutes`;
        of85.innerHTML = Math.ceil(minutes / 0.85);
        total45.innerHTML = `(${this.value * 45})`;
        const reportHM = 450 - Math.ceil(minutes / 0.85) - transport.value;
        reportTime.innerHTML = reportHM;
        reportMath.innerHTML = `(450 - ${Math.ceil(minutes / 0.85)} - ${transport.value})`;
        const reportHours = Math.floor(reportHM / 60);
        const reportMinutes = reportHM - (reportHours * 60);
        document.getElementById("report-time-hours").innerHTML = `${reportHours} hours, ${reportMinutes} minutes`;
    });

    transport.addEventListener("input", function() {
        const minutes = count30.value * 30 + count45.value * 45;
        const of85 = Math.ceil(minutes / 0.85);
        const reportHM = 450 - Math.ceil(minutes / 0.85) - transport.value;
        reportTime.innerHTML = reportHM;
        reportMath.innerHTML = `(450 - ${of85} - ${this.value})`;
        const reportHours = Math.floor(reportHM / 60);
        const reportMinutes = reportHM - (reportHours * 60);
        document.getElementById("report-time-hours").innerHTML = `${reportHours} hours, ${reportMinutes} minutes`;
    });
}