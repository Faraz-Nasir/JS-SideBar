let sidebar=document.querySelector(".sidebar-toggle")

let closebtn=document.querySelector(".close-btn")
document.querySelector(".sidebar").style.display="none"
closebtn.addEventListener("click",function(event){
    document.querySelector(".sidebar").style.display="none"
    sidebar.style.display="block"
})
sidebar.addEventListener("click",function(event){

    sidebar.style.display="none"
        document.querySelector(".sidebar").style.display="block"
})