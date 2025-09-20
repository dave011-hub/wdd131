


document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

// Wind Chill Calculation
function calculateWindChill(tempF, windSpeedMph) {
    if (tempF <= 50 && windSpeedMph > 3) {
        return (
            35.74 +
            0.6215 * tempF -
            35.75 * Math.pow(windSpeedMph, 0.16) +
            0.4275 * tempF * Math.pow(windSpeedMph, 0.16)
        ).toFixed(1); 
    } else {
        return "N/A";
    }
}

// Read values from DOM
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("Wind").textContent);

// Compute & Display Wind Chill
const chillValue = calculateWindChill(temp, wind);
document.getElementById("chill").textContent =
    chillValue !== "N/A" ? `${chillValue} °F` : "Not Applicable";
