const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Buongiorno Black");
    }

    else if(hr == 12) {
        speak("Buonanotte Black");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Buonpomeriggio Black");
    }

    else {
        speak("Good Evening Black");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Blacky");
    speak("Going online");
    wishMe();
}
)
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Black";
        speech.text = finalText;
    }

    else if(message.includes('è natale')) {
        const finalText = "Buon Natale Capo";
        speech.text = finalText;
    }

    else if(message.includes('come ti chiami')) {
        const finalText = "Io mi chiamo Blecky";
        speech.text = finalText;
    }

    else if(message.includes('apri google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Subito Capo, apro google";
        speech.text = finalText;
    }
    
    else if(message.includes('apri youtube')) {
        window.open("https://youtube.com", "_blank");
        const finalText = "Subito Capo, apro youtube";
        speech.text = finalText;
    }    
    
    else if(message.includes('apri la mia galleria delle skin')) {
        window.open("https://minecraft.novaskin.me/gallery/profile/111391491178844382231", "_blank");
        const finalText = "Subito Capo, apro novaskin";
        speech.text = finalText;
    }

    else if(message.includes('apri roblox')) {
        window.open("https://www.roblox.com/home", "_blank");
        const finalText = "Subito Capo, apro roblox";
        speech.text = finalText;
    }

    else if(message.includes('apri il mio drive')) {
        window.open("https://drive.google.com/drive/u/0/my-drive", "_blank");
        const finalText = "Subito Capo, apro drive";
        speech.text = finalText;
    }
    
    else if(message.includes('apri il server di minecraft')) {
        window.open("https://aternos.org/server/", "_blank");
        const finalText = "Subito Capo, apro aternos";
        speech.text = finalText;
    }

    else if(message.includes('apri twitch')) {
        window.open("https://www.twitch.tv/blackpanterxinf", "_blank");
        const finalText = "Subito Capo, apro twitch";
        speech.text = finalText;
    }
       
    else if(message.includes('vediamo i miei articoli nel carrello')) {
        window.open("https://www.amazon.it/ref=nav_logo", "_blank");
        const finalText = "Subito Capo, apro amazon";
        speech.text = finalText;
    }
           
    else if(message.includes('voglio vedere un film')) {
        window.open("https://streamingcommunity.click/marvel-studios-legends/", "_blank");
        const finalText = "Subito Capo, ecco i film, le consiglio la marvel";
        speech.text = finalText;
    }

    else if(message.includes('apri instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Subito Capo, apro instagram";
        speech.text = finalText;
    }
    
    else if(message.includes('apri spotify')) {
        window.open("https://open.spotify.com/collection/tracks", "_blank");
        const finalText = "Subito Capo, apro spotify";
        speech.text = finalText;
    }
   
    else if(message.includes('musica natalizia')) {
        window.open("https://open.spotify.com/playlist/4DOsjTjwW4ZVJiDKs075cI?si=674d869dca044db7", "_blank");
        const finalText = "Subito Capo, Buon Natale";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('apri wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "Subito Capo, apro wikipedia" + message;
        speech.text = finalText;
    }

    else if(message.includes('che ore sono')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('che giorno è')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('apri calcolatrice')) {
        window.open('Calculator:///')
        const finalText = "Apro la calcolatrice";
        speech.text = finalText;
    }
    
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}