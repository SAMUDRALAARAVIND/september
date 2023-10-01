let voices;
const select = document.getElementsByTagName("select")[0];

let timerId = setInterval(() => {
  voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    displayVoices();
    clearInterval(timerId);
  }
}, 20);

function displayVoices() {
  voices.forEach((voice, index) => {
    let formatString = `${voice.name} (${voice.lang})`;

    const option = document.createElement("option");
    option.innerText = formatString;
    option.value = index;

    select.appendChild(option);
  });
}

let textTobeRead = `Start speaking when the start button is clicked
Stop speaking when the stop button is clicked`;

function changeVoice() {
  let selectedValue = select.value;
  let utterance = new SpeechSynthesisUtterance();
  //   utterance.lang
  utterance.text = textTobeRead;
  utterance.pitch = 1;
  utterance.rate = 1;
  utterance.voice = voices[parseInt(selectedValue)];

  window.speechSynthesis.speak(utterance);
}

function stop() {
  speechSynthesis.pause();
}

function play() {
  speechSynthesis.resume();
}

/**
 * 1. window.speechSynthesis is a globally available object. it deals with audio.
 *  window.speechSynthesis.getVoices() => returns all the available voices.
 *
 * window.speechSynthesis.speak(utteranceObject);
 *
 *
 * SpeechSynthesisUtterance => globally available class/function.
 *
 * let utterance = new SpeechSynthesisUtterance();
 * utterance.text = "text to read";
 * utterance.voice = window.speechSynthesis.getVoices()[4]
 * utterance.pitch = 1
 * utterance.rate = 1
 *
 * window.speechSynthesis.speak(utterance) => it will start reading the text
 *
 * window.speechSynthesis.pause() // pausing the audio
 * window.speechSynthesis.resume() // playing again
 */
