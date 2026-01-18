/* Welcome Voice */
function playWelcome() {
  const text = "Shahryar Ethical Haking Test mein khush aamdeed";

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "ur-PK";
  speech.rate = 0.9;
  speech.pitch = 1.1;

  window.speechSynthesis.speak(speech);
}

/* IP Checker */
function checkIP() {
  fetch("https://api.ipify.org?format=json")
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerHTML = `
        <h3>Your Public IP</h3>
        <p><b>${data.ip}</b></p>
      `;
    })
    .catch(() => {
      document.getElementById("result").innerText =
        "IP load nahi ho saka. Internet check karein.";
    });
}
async function checkLink() {
  const url = document.getElementById("urlInput").value.trim();
  const result = document.getElementById("linkResult");

  if (url === "") {
    result.innerHTML = "<p>Link paste karein.</p>";
    return;
  }

  result.innerHTML = "⏳ Checking link...";

  const apiKey = "PASTE_YOUR_API_KEY_HERE";

  const response = await fetch(
    "https://www.virustotal.com/api/v3/urls",
    {
      method: "POST",
      headers: {
        "x-apikey": apiKey,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "url=" + encodeURIComponent(url)
    }
  );

  const data = await response.json();

  result.innerHTML = `
    <h3>Scan Submitted</h3>
    <p>VirusTotal ne link receive kar liya.</p>
    <p>Details dashboard se check karein.</p>
  `;
}
/* Link Spam Checker (Demo & Legal) */
function checkLink() {
  const url = document.getElementById("urlInput").value.trim();
  const result = document.getElementById("linkResult");

  if (url === "") {
    result.innerHTML = "⚠️ Pehle link paste karein.";
    return;
  }

  const spamWords = [
    "free",
    "login",
    "verify",
    "bonus",
    "secure",
    "update",
    "account"
  ];

  const lowerUrl = url.toLowerCase();
  const isSpam = spamWords.some(word => lowerUrl.includes(word));

  if (isSpam) {
    result.innerHTML = `
      ❌ <b>Suspicious / Spam Link</b><br>
      Is link mein risky keywords paye gaye.<br>
      <small>Advice: Open na karein</small>
    `;
  } else {
    result.innerHTML = `
      ✅ <b>Link Looks Safe</b><br>
      Koi obvious spam signal nahi mila.
    `;
  }
}
