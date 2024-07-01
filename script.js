let speech = new SpeechSynthesisUtterance();

// speaking functionality triggered by the button
document.querySelector("button").addEventListener("click", ()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})