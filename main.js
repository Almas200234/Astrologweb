// Local backup predictions for each zodiac
const localPredictions = {
  aries: [
    "Brave, energetic, pioneering.",
    "Today your courage will open new doors.",
    "A challenge will bring out your true strength."
  ],
  taurus: [
    "Reliable, patient, practical.",
    "Your steady approach will lead to success.",
    "A calm decision today will benefit you tomorrow."
  ],
  gemini: [
    "Adaptable, curious, communicative.",
    "Your curiosity will guide you to something exciting.",
    "A good conversation may bring unexpected insight."
  ],
  cancer: [
    "Emotional, nurturing, protective.",
    "Your caring nature will strengthen a relationship.",
    "A peaceful moment will give you new insight."
  ],
  leo: [
    "Confident, generous, charismatic.",
    "Your charm will open doors today.",
    "Someone will admire your leadership."
  ],
  virgo: [
    "Analytical, kind, hardworking.",
    "Your attention to detail will pay off.",
    "A small act of kindness will have a big impact."
  ],
  libra: [
    "Diplomatic, fair-minded, social.",
    "Balance will be your strength today.",
    "Your ability to see both sides will help solve a problem."
  ],
  scorpio: [
    "Passionate, purposeful, resourceful.",
    "Your determination will inspire others.",
    "A secret may be revealed that changes your path."
  ],
  sagittarius: [
    "Optimistic, adventurous, honest.",
    "Your adventurous spirit will bring new opportunities.",
    "A spontaneous decision could lead to joy."
  ],
  capricorn: [
    "Disciplined, responsible, ambitious.",
    "Your hard work will be noticed today.",
    "A steady plan will bring you closer to your goal."
  ],
  aquarius: [
    "Original, independent, humanitarian.",
    "Your unique ideas will impress others.",
    "Helping someone today will bring you unexpected joy."
  ],
  pisces: [
    "Compassionate, artistic, intuitive.",
    "Your creativity will shine today.",
    "Trust your intuition — it will guide you well."
  ]
};

async function getHoroscope(zodiac) {
  const apiUrl = `https://ohmanda.com/api/horoscope/${zodiac}/`; // Direct API call

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("API error");

    const data = await response.json();
    if (data && data.horoscope) {
      document.getElementById("prediction").innerText = data.horoscope;
    } else {
      throw new Error("No data");
    }
  } catch (error) {
    console.warn("API failed, using local prediction:", error.message);
    // Pick a random local prediction
    const fallbackList = localPredictions[zodiac.toLowerCase()] || ["Today is full of possibilities."];
    const randomPrediction = fallbackList[Math.floor(Math.random() * fallbackList.length)];
    document.getElementById("prediction").innerText = randomPrediction;
  }
}

// Example usage: getHoroscope("cancer");
