let speech = new SpeechSynthesisUtterance();

// changing the voices
let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    // display each voice in the dropdown
    voices.forEach((voice, i)=>(voiceSelect.options[i] = new Option(voice.name, i)));
}

// change event on the dropdown
voiceSelect.addEventListener("change", ()=>{
    speech.voice = voices[voiceSelect.value];
});

// speaking functionality triggered by the button
document.querySelector("button").addEventListener("click", ()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})