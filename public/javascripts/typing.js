
const paragraphs = [
  `This is a test prompt 1`,
  `This is a test prompt 2`,
  `This is a test prompt 3`,
  `This is a test prompt 4`,
  `This is a test prompt 5`,
];

const startGame = () => {
  const typingDiv = document.getElementById("typing");
  const statsDiv = document.getElementById("stats");
  const startGameBtn = document.getElementById("start-game");
  startGameBtn.remove();
  typingDiv.innerHTML = "";
  statsDiv.innerHTML = "";

  const text = paragraphs[parseInt(Math.random() * paragraphs.length)];

  const characters = text.split("").map((char) => {
    const span = document.createElement("span");
    span.innerText = char;
    typingDiv.appendChild(span);
    return span;
  });

  let cursorIndex = 0;
  let errors = 0;
  let cursorCharacter = characters[cursorIndex];
  cursorCharacter.classList.add("cursor");

  let startTime = null;

  const keydown = ({ key }) => {
    if (!startTime) {
      startTime = new Date();
    }

    console.log(key);
    const keyPressed = event.keyCode;

    // if correct
    if (key === cursorCharacter.innerText) {
      cursorCharacter.classList.remove("cursor");
      cursorCharacter.classList.add("done");
      cursorCharacter = characters[++cursorIndex];
    }
    // if wrong
    else if (key !== cursorCharacter.innerText && keyPressed >= 48) {
      cursorCharacter.classList.remove("cursor");
      cursorCharacter.classList.add("wrong");
      cursorCharacter = characters[++cursorIndex];
      ++errors;
    }

    // Backspace
    if (cursorIndex > 0 && keyPressed === 8) {
      cursorCharacter.classList.remove("cursor");
      cursorCharacter = characters[--cursorIndex];
      cursorCharacter.classList.add("cursor");
      cursorCharacter.classList.remove("done");
      console.log(cursorIndex)
      console.log(keyPressed);
      if (cursorCharacter.classList.contains("wrong")) {
        cursorCharacter.classList.remove("wrong");
        --errors;
      }
    }

    if (cursorIndex >= characters.length) {
      // game ended
      const endTime = new Date();
      const delta = endTime - startTime;
      const seconds = delta / 1000;
      const numberOfWords = text.split(" ").length;
      const wps = parseInt(numberOfWords / seconds);
      const wpm = wps * 60.0;
      if (errors === 0) {
        score = characters.length * (wpm + 20);
      } else if (errors >= 1) { 
        score = characters.length * (wpm / errors);
      };
      document.getElementById("stats").innerText = `score = ${score} \n wpm = ${wpm} \n errors = ${errors}`;
      document.removeEventListener("keydown", keydown);
      startGameBtn.classList.remove("hidden");
      return;
    }

    cursorCharacter.classList.add("cursor");
  };

  document.addEventListener("keydown", keydown);
};

