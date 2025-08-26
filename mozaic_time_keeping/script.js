window.onload = () => {
    const count30 = document.getElementById("session-30");
    const count45 = document.getElementById("session-45");
    const total30 = document.getElementById("total-30");
    const total45 = document.getElementById("total-45");
    const totalMin = document.getElementById("total-min");
    const resetButton = document.getElementById("reset");

    count30.addEventListener("input", function() {
        const minutes = this.value * 30 + count45.value * 45 +
            ((Number(count30.value) + Number(count45.value)) * 5);
        totalMin.innerHTML = `${minutes} minutes`;
        total30.innerHTML = `(${this.value * 30})`;
        totalMin.innerHTML +=
            `<br />(${count30.value * 30} + ${count45.value * 45} +
            (${Number(count30.value) + Number(count45.value)} * 5))`
    });

    count45.addEventListener("input", function() {
        const minutes = this.value * 45 + count30.value * 30 +
            ((Number(count30.value) + Number(count45.value)) * 5);
        totalMin.innerHTML = `${minutes} minutes`;
        total45.innerHTML = `(${this.value * 45})`;
        totalMin.innerHTML +=
            `<br />(${count30.value * 30} + ${count45.value * 45} +
            (${Number(count30.value) + Number(count45.value)} * 5))`
    });

    resetButton.addEventListener("click", function() {
        count30.value = "";
        total30.innerHTML = "";
        count45.value = "";
        total45.innerHTML = "";
        totalMin.innerHTML = "";
        count30.focus();
    });
    
}