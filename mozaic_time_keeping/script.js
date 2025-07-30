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
        of85.innerHTML = (minutes / 0.85).toFixed(2);
        total30.innerHTML = `(${this.value * 30})`;
        reportTime.innerHTML = 450 - minutes - transport.value;
        reportMath.innerHTML = `(450 - ${minutes} - ${transport.value})`;
    });

    count45.addEventListener("input", function() {
        const minutes = this.value * 45 + count30.value * 30;
        totalMin.innerHTML = `${minutes} minutes`;
        of85.innerHTML = (minutes / 0.85).toFixed(2);
        total45.innerHTML = `(${this.value * 45})`;
        reportTime.innerHTML = 450 - minutes - transport.value;
        reportMath.innerHTML = `(450 - ${minutes} - ${transport.value})`;
    });

    transport.addEventListener("input", function() {
        const minutes = count30.value * 30 + count45.value * 45;
        reportTime.innerHTML = 450 - minutes - this.value;
        reportMath.innerHTML = `(450 - ${minutes} - ${this.value})`;
    });
}