const love= document.querySelector(".love")
const header= document.querySelector(".header")
const deux= document.querySelector(".deux")
const trois=document.querySelector(".trois")
const cou=document.querySelector(".cou")
const btn2=document.querySelector(".btn2")
const btn3=document.querySelector(".btn3")
const go1=document.querySelector("go1")


love.addEventListener("click",() => {
    header.style.display="none"
    deux.style.display="block"
    trois.style.display="none"
    

})
cou.addEventListener("click",() =>{
    deux.style.display="none"
    header.style.display="none"
    trois.style.display="block"
    
}
                        )

btn2.addEventListener("click",() =>{
    
    deux.style.display="block"
    header.style.display="none"
    trois.style.display="none"
}
                      )
btn3.addEventListener("click",() =>{
    deux.style.display="none"
    header.style.display="none"
    trois.style.display="block"
}
                      
                      )

btn.addEventListener("click",() =>{
    go1.style.display="block"
    
}
                      )


