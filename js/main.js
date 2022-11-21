// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let contenitore = document.getElementsByClassName("container");
console.log(contenitore);

let numRand = document.getElementById("numrand");



let button = document.getElementById("start");
button.addEventListener("click",


    function(){
        contenitore.innerHTML = '';
        console.clear();
    
        // creo un array di 5 numeri
        const myArr = genNumRandom(5, 1, 5);
        // in console vedo il mio Array creato con le funzioni
        console.log(myArr);

        for (let i = 0; i < myArr.length; i++){
           numRand.innerHTML = `${myArr}`; 
        }
        
        // Creo il timer
        let seconds = 30; 
        
        let clock = setInterval(function(){
            console.log(seconds);
            if(seconds === 0){
                clearInterval(clock);
            } else{
                seconds--;
            }
        }, 1000);
    }
)
    


// creo 5 numeri random 
function randomInteger(min, max){
    return (Math.floor(Math.random() * ((max + 1) - min) + min));
}

function genNumRandom (quanti, minNum, maxNum) {
    const newArr = [];
    
    while (newArr.length < quanti){
        let newNumber = randomInteger(minNum, maxNum);
        
        if(!newArr.includes(newNumber)){
            newArr.push(newNumber);
        }
    }
    return newArr;
}