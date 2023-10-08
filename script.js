const buttons = document.querySelectorAll(".button");
const main = document.querySelector(".main");

buttons.forEach(function (button){
    console.log(button)

    button.addEventListener('click', function (e){
        console.log(e)
        console.log(e.target)
        if (e.target.id === 'red'){
            main.style.color =  "yellow";
        main.style.backgroundColor =  e.target.id;
        }
        if (e.target.id === 'black'){

        main.style.backgroundColor =  e.target.id;
        main.style.color =  "white";
        }
        if (e.target.id === 'yellow'){
            main.style.color =  "black";
        main.style.backgroundColor =  e.target.id;
        }
        if (e.target.id === 'green'){
            main.style.color =  "orange ";
        main.style.backgroundColor =  e.target.id;
        }
    })
})