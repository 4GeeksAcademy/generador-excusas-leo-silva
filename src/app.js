import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const excuses = {
    who : ['The dog', 'My grandma', 'The mailman', 'My bird'],
    action : ['ate', 'peed', 'crushed', 'broke'],
    what : ['my homework', 'my phone', 'the car'],
    when : ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying']
};

function generarExcusa(){
    let completeSentence = ""

    for (let categoria in excuses) {
    
        let randomNumber = Math.floor(Math.random()* excuses[categoria].length) 
        let randomString = excuses[categoria][randomNumber]
        completeSentence += (completeSentence ? " ":"") + randomString
    }
    return completeSentence
}
window.onload = function(){
  document.querySelector(".excuse").innerHTML = `<p>${generarExcusa()}</p>`;
}
