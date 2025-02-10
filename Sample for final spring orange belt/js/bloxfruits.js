document.addEventListener("DOMContentLoaded", () => {
    const fruitSelector = document.getElementById("fruitSelector");
    const saveFruit = document.getElementById("saveFruit");
    const chosenFruit = document.getElementById("chosenFruit");
    const lastVisit = document.getElementById("lastVisit");

    // Load saved fruit
    const savedFruit = localStorage.getItem("favoriteFruit");
    if (savedFruit) {
        chosenFruit.textContent = `Your favorite fruit: ${savedFruit}`;
        fruitSelector.value = savedFruit;
    }

    // Save selected fruit
    saveFruit.addEventListener("click", () => {
        const selectedFruit = fruitSelector.value;
        localStorage.setItem("favoriteFruit", selectedFruit);
        chosenFruit.textContent = `Your favorite fruit: ${selectedFruit}`;
    });

    // Store last visit time in a cookie
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function getCookie(name) {
        const cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            const parts = cookies[i].split("=");
            if (parts[0] === name) return parts[1];
        }
        return null;
    }

    const lastVisitTime = getCookie("lastVisit");
    if (lastVisitTime) {
        lastVisit.textContent = `You last visited on: ${new Date(lastVisitTime).toLocaleString()}`;
    } else {
        lastVisit.textContent = "This is your first visit!";
    }

    // Update last visit time
    setCookie("lastVisit", new Date().toISOString(), 7);
});
