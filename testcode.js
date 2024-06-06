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

// let container = document.querySelector(".container");
// let button = document.querySelector( ".container button" );

// button.addEventListener( "click", (e) =>
// {
//     e.target.parentElement.parentElement.remove()
// } );

// let rect = container.getBoundingClientRect();
// console.log(rect)

let box = document.querySelector(".box")
let rect = box.getBoundingClientRect()
console.log(rect.x)
console.log(rect.y)
console.log(rect.width)
console.log(rect.left)
console.log(rect.bottom)
console.log(box.outerHTML)
console.log(box.checkVisibility())
console.log(window.innerHeight )
console.log(window.innerHeight / 5 * 4)
box.style.top = `${(window.innerHeight / 5) * 4}`;
console.log(box.getClientRects())