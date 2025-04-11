let voices = [];

0
function populateVoices() {
  voices = speechSynthesis.getVoices();
}

speechSynthesis.onvoiceschanged = populateVoices;


document.getElementById("speakBtn").addEventListener("click", function () {
  const text = document.getElementById("text").value.trim();
  const selectedLanguage = document.getElementById("languageSelect").value;

  if (!text) {
    alert("Iltimos, matn kiriting!");
    return;
  }


  const msg = new SpeechSynthesisUtterance();
  msg.text = text;  
  msg.lang = selectedLanguage; 

  // Ovozlarni olish
  let selectedVoice = null;


  for (let i = 0; i < voices.length; i++) {
    if (voices[i].lang === selectedLanguage) {
      selectedVoice = voices[i];
      break;
    }
  }

 
  if (selectedVoice) {
    msg.voice = selectedVoice;
  }


  speechSynthesis.speak(msg);
});
