let stars = document.querySelectorAll(".fa")

for (let star of stars){
    star.addEventListener("click",()=>{
        star.setAttribute("class","fa fa-star checked")
    })
}

