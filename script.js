let stars = document.querySelectorAll(".fa")
let miniContainerOne = document.querySelector(".contone")
let miniContainerTwo = document.querySelector(".conttwo")


for (let star of stars){
    star.addEventListener("click",()=>{
        star.setAttribute("class","fa fa-star checked")
    })
}

// for(container of miniContainerOne){
//     container.addEventListener("click",()=>{
//         container.setAttribute("class", "bottomscreencarouselmini contone outofscreen")
//     })
// }

miniContainerOne.addEventListener("click",()=>{
    miniContainerOne.setAttribute("class","bottomscreencarouselmini contone outofscreen")
})