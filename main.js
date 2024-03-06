// document.title = 'Aiman' // tukar title memalui main.js

// console.log(document.title) // updated title

// console.log(document.body)// troubleshoot melalui conseole

// const body = document.body // panggil body tnpa taip full document.body

// body.append("Hai gais") //ganti tajuk atas, append utk body, utk combine ssuatu


// If you just want the text, use textContent.
// If you want the HTML structure, use innerHTML.
// If you want what's visibly shown, use innerText.


// const h1 = document.createElement('h1') //<h1></h1>
// h1.textContent = 'H1 huhu' // <h1>H1 huhu</h1>

// const nama = document.createElement('o')
// nama.innerHTML = '<marquee>Aiman ni boss<marquee>' 

// const namaDia = document.createElement('p')
// namaDia.innerText = 'Asep ni boss' 

// body.append(h1) //untuk display d web 
// body.append(nama)
// body.append(namaDia)

document.title = 'Aiman'
const body = document.body
const btn1 = document.getElementById('btn1')
// const btn2 = document.getElementById('btn2')
const btn2 = document.querySelector('.btn2') //wajib ada . atau # hdpan nama

const defaultText = "Klik 1"
btn1.textContent = defaultText

btn1.style.border = 'none'
btn1.style.padding ='8px'
btn1.style.fontSize = '24px'
btn1.style.background = 'tomato'

btn2.style.border = 'none'
btn2.style.padding ='8px'
btn2.style.fontSize = '24px'
btn2.style.background = 'tomato'

// console.log(btn2)

function tukarButton(){

    // console.log('uhui')
    // alert('aman')

    btn1.style.background = 'aqua'
    const newText = document.createElement ('p')
    newText.textContent = "uhui gess"
    body.append(newText)
}

function ubahTeks(){

    btn1.textContent = 'huhuhu hahaha'
}

function ubahTeks2(){

    btn1.textContent = defaultText
}
