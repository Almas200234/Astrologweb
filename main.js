document.addEventListener("DOMContentLoaded", () => {
    const signs = document.querySelectorAll(".zodiac-sign");
    const result = document.getElementById("horoscope-result");

    signs.forEach(sign => {
        sign.addEventListener("click", async () => {
            const zodiac = sign.dataset.sign;
            result.innerHTML = `<p>Loading...</p>`;

            try {
                // Using AllOrigins to bypass CORS
                const apiUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://ohmanda.com/api/horoscope/${zodiac}/`)}`;
                const res = await fetch(apiUrl);
                const data = await res.json();
                const horoscopeData = JSON.parse(data.contents);

                result.innerHTML = `
                    <h3>${zodiac.charAt(0).toUpperCase() + zodiac.slice(1)}</h3>
                    <p>${horoscopeData.horoscope}</p>
                `;
            } catch (error) {
                result.innerHTML = `<p>Failed to fetch prediction. Please try again later.</p>`;
            }
        });
    });
});
