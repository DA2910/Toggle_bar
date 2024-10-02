const btn = document.querySelector(".btn")
const container = document.querySelector(".container")

btn.addEventListener("click", (e) => {
    e.preventDefault()

   if (btn.innerText == "Light"){
    container.style.backgroundColor= "black"
    btn.innerText = "Dark"
   }
   else if(btn.innerText == "Dark"){
    container.style.backgroundColor= "blue"
    btn.innerText = "blue"
   }
   else if(btn.innerText == "blue"){
    container.style.backgroundColor= "red"
    btn.innerText = "red"
   }
   else if(btn.innerText == "red"){
    container.style.backgroundColor= "red"
    btn.innerText = "yellow"
   }
   else if(btn.innerText == "yellow"){
    container.style.backgroundColor= "yellow"
    btn.innerText = "pink"
   }
   else if(btn.innerText == "pink"){
    container.style.backgroundColor= "pink"
    btn.innerText = "orange"
   }
   else if(btn.innerText == "orange"){
    container.style.backgroundColor= "orange"
    btn.innerText = "green"
   }
   else if(btn.innerText == "green"){
    container.style.backgroundColor= "green"
    btn.innerText = "Light"
   }
})

