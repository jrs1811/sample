document.addEventListener("DOMContentLoaded", () => {
    const scareButton = document.getElementById("scareButton");
    const jumpscare = document.getElementById("jumpscare");
    const scream = document.getElementById("scream");

    // Check if jumpscare happened before
    if (localStorage.getItem("jumpscareShown") === "true") {
        scareButton.textContent = "Already Scared! Reload to Reset";
        scareButton.disabled = true;
    }

    scareButton.addEventListener("click", () => {
        jumpscare.classList.remove("hidden");

        // Ensure audio plays (fix for autoplay issues)
        scream.play().catch((error) => {
            console.error("Audio playback failed:", error);
        });

        // Disable button & store in localStorage
        scareButton.textContent = "Already Scared!";
        scareButton.disabled = true;
        localStorage.setItem("jumpscareShown", "true");
    });
});