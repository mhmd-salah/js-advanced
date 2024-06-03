// let containere = document.querySelector(".container")

// let animates = document.querySelector(".anim")
// let span = document.querySelector("span")
// setTimeout(ef,2500)

// function ef ()
// {
//     container.innerHTML = "hello  mohamed slah"
//     animates.classList.remove("anim")
// }

// document.body.addEventListener( "contextmenu", ( e ) =>
// {
//     // console.log( window.innerWidth )
//     // console.log(e.offsetHeight)
//     console.log(e.pageX)
// })

let container = document.querySelector( ".container" );
let button = document.querySelector( ".container button" );

button.addEventListener( "click", (e) =>
{
    e.target.parentElement.parentElement.remove()
} );
