const love= document.querySelector(".love")
const header= document.querySelector(".header")
const deux= document.querySelector(".deux")
const trois=document.querySelector(".trois")
const cou=document.querySelector(".cou")
const btn2=document.querySelector(".btn2")
const btn3=document.querySelector(".btn3")
const go1=document.querySelector(".go1")
const go2=document.querySelector(".go2")
const go3=document.querySelector(".go3")
const look=document.querySelector(".look")
const lock=document.querySelector(".lock")

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
// btn3.addEventListener("click",() =>{
    // header.style.display="block"
    // deux.style.display="block"
    // trois.style.display="block"
// }
                      
                    //   )

btn3.addEventListener("click",() =>{
    deux.style.display="none";
    header.style.display="none";
    trois.style.display="block";
    }
)
                      go2.addEventListener("click",() =>{
    
                        deux.style.display="block"
                        header.style.display="none"
                        trois.style.display="none"
                    }
                                          )
                                          
                                          go3.addEventListener("click",() =>{
                                            deux.style.display="none";
                                            header.style.display="none";
                                            trois.style.display="block";
                                            }
                                        )                   

                                        love.addEventListener("click",() =>{
                                            deux.style.display="block";
                                            header.style.display="none";
                                            trois.style.display="none";
                                            }
                                        )                   
                                        look.addEventListener("click",() =>{
                                            deux.style.display="block";
                                            header.style.display="none";
                                            trois.style.display="none";
                                            }
                                        )
                                        Lock.addEventListener("click",() =>{
                                            deux.style.display="block";
                                            header.style.display="none";
                                            trois.style.display="none";
                                            }
                                        )                                   