const picture = [
    "images/image1.jpg" ,
    "images/image2.jpg" ,
    "images/image3.jpg" ,
    "images/image4.jpg" ,
    "images/image5.jpg"
]
const text = [
    "ぼっち.ざ.ろっく",
    "2",
    "3",
    "4",
    "5"
]

function change(id){
    return function(){
        document.querySelector(".main-image").src = picture[id]
        word.innerText = text[id];
    }
}

const small = document.querySelector(".small-image")
const word = document.querySelector(".text")


 for(let i=0 ; i < picture.length ; i++){
    let img = document.createElement("img")
    img.src = picture[i]
    img.className = "small-img"
    img.onclick = change(i)
    small.appendChild(img)
 }