const data = {
    'E': {sound: 'media/sounds/drum1.mp3'},
    'R': {sound: 'media/sounds/drum2.mp3'},
    'T': {sound: 'media/sounds/beat1.mp3'},
    'D': {sound: 'media/sounds/beat2.mp3'},
    'F': {sound: 'media/sounds/beat3.mp3'},
    'G': {sound: 'media/sounds/lindrum.mp3'},
    'C': {sound: 'media/sounds/percu1.mp3'},
    'V': {sound: 'media/sounds/electro1.mp3'},
    'B': {sound: 'media/sounds/electro2.mp3'},
};
function playDrum(letter) {
    const audio = new Audio();
    audio.src = data[letter].sound;
    audio.play();
}