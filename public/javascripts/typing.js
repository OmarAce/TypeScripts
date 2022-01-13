
//Declared
const typingDiv = document.getElementById("typing");
const statsDiv = document.getElementById("stats");
const startGameBtn = document.getElementById("start-game");

const typescript = [
  "TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces. One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as you type the code.",
  "Typically an array contains zero to many objects of a single type. TypeScript has special analysis around arrays which contain multiple types, and where the order in which they are indexed is important. These are called tuples.\nconst failingResponse = ['Not Found', 404];"
];

const javascript = [
  "Simple button created in Javascript.\n <button type='button' onclick='document.getElementById('demo').innerHTML = Date()'>Click me to display Date and Time.</button>",
  "<p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>\n <button onclick=`document.getElementById('myImage').src='pic_bulbon.gif'`>Turn on the light</button>\n<img id='myImage' src='pic_bulboff.gif' style='width:100px'>\n<button onclick=`document.getElementById('myImage').src='pic_bulboff.gif'`>Turn off the light</button>"
];

const html = [
  "<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n</body>\n</html>",
  "<h2>HTML Links</h2>\n<p>HTML links are defined with the a tag:</p>\n<a href='https://www.w3schools.com'>This is a link</a>"
];

const css = [
  "The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon. Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.\np {\ncolor: red;\ntext-align: center;\n}",
  "The universal selector uses the asterisk (i.e *) symbol for denoting the selector as a universal selector. It can be used to select all elements and apply a specific style.\n* {\nproperty: value;\n}"
]

const english = [
  "She asked the question even though she didn't really want to hear the answer. It was a no-win situation since she already knew. If he told the truth, she'd get confirmation of her worst fears. If he lied, she'd know that he wasn't who she thought he was which would be almost as bad. Yet she asked the question anyway and waited for his answer. It was cloudy outside but not really raining. There was a light sprinkle at most and there certainly wasn't a need for an umbrella. This hadn't stopped Sarah from pulling her umbrella out and opening it. It had nothing to do with the weather or the potential rain later that day. Sarah used the umbrella to hide. Then came the night of the first falling star. It was seen early in the morning, rushing over Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him.",
  "They say you only come to peace with yourself when you know yourself better than those around you. Derick knew nothing about this. He thought he had found peace but this was an illusion as he was about to find out with an unexpected occurrence that he actually knew nothing about himself. Debbie put her hand into the hole, sliding her hand down as far as her arm could reach. She wiggled her fingers hoping to touch something, but all she felt was air. She shifted the weight of her body to try and reach an inch or two more down the hole. Her fingers still touched nothing but air. MaryLou wore the tiara with pride. There was something that made doing anything she didn't really want to do a bit easier when she wore it. She really didn't care what those staring through the window were thinking as she vacuumed her apartment.",
]

let source = [];

// Checks for language choice
$(".language").on("click", function() {
  let language = $(this).attr("data-id")
  console.log(language);
  $(".language").addClass("hidden");
  $("#language").addClass("hidden");
  $("#start-game").removeClass("hidden");  
  startGame(language);
})

const startGame = (language) => {
  typingDiv.innerHTML = "";
  statsDiv.innerHTML = "";

  if (language == "typescript") {
    source = typescript
  } else if (language == "javascript") {
    source = javascript
  } else if (language == "html") {
    source = html
  } else if (language == "css") {
    source = css
  } else if (language == "english") {
    source = english
  }

  const text = source[parseInt(Math.random() * source.length)];

  console.log(text)

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
      const numberOfCharacters = text.split("").length;
      const cps = parseInt(numberOfCharacters / seconds);
      const cpm = cps * 60.0;
      if (errors === 0) {
        score = parseInt(characters.length * (cpm + 20));
      } else if (errors >= 1) { 
        score = parseInt(characters.length * (cpm / errors));
      };
      document.getElementById("stats").innerText = `score = ${score} \n Number of Characters per Minute = ${cpm} \n errors = ${errors}`;
      document.removeEventListener("keydown", keydown);
      startGameBtn.classList.remove("hidden");
      return;
    }

    cursorCharacter.classList.add("cursor");
  };

  document.addEventListener("keydown", keydown);
};
