// Hebrew Letters Data
const letters = [
    { letter: "א", sound: "https://www.example.com/audio/alef.mp3" },
    { letter: "ב", sound: "https://www.example.com/audio/bet.mp3" },
    { letter: "ג", sound: "https://www.example.com/audio/gimel.mp3" },
    // Add more letters with correct global URLs
  ];
  
  // Words Data
  const words = [
    { hebrew: "אבא", english: "Father", image: "https://www.example.com/images/father.png", sound: "https://www.example.com/audio/abba.mp3" },
    { hebrew: "אמא", english: "Mother", image: "https://www.example.com/images/mother.png", sound: "https://www.example.com/audio/ima.mp3" },
    // Add more words with global URLs
  ];
  
  // Sentence Data
  const sentences = [
    { sentence: "אבא אוהב אמא", words: ["אבא", "אוהב", "אמא"], translation: "Father loves mother" },
    // Add more sentences
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    loadLetters();
    loadWords();
    loadSentences();
  });
  
  function loadLetters() {
    const lettersContainer = document.getElementById("letters");
    letters.forEach(({ letter, sound }) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<p>${letter}</p>
                        <button onclick="playSound('${sound}')">🔊</button>`;
      lettersContainer.appendChild(card);
    });
  }
  
  function loadWords() {
    const wordsContainer = document.getElementById("words-container");
    words.forEach(({ hebrew, english, image, sound }) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<img src="${image}" alt="${english}">
                        <p>${hebrew}</p>
                        <p>${english}</p>
                        <button onclick="playSound('${sound}')">🔊</button>`;
      wordsContainer.appendChild(card);
    });
  }
  
  function loadSentences() {
    const targetSentence = document.getElementById("target-sentence");
    const wordBank = document.getElementById("word-bank");
    const { sentence, words: sentenceWords } = sentences[0];
  
    targetSentence.textContent = sentence;
    sentenceWords.forEach((word) => {
      const wordElement = document.createElement("div");
      wordElement.textContent = word;
      wordElement.draggable = true;
      wordElement.className = "card";
      wordBank.appendChild(wordElement);
    });
  }
  
  function playSound(file) {
    const audio = new Audio(file);
    audio.play();
  }
  