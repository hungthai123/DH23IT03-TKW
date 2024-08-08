window.onload = function() {
    let main=document.getElementById("main");
    let images= document.querySelectorAll('.thumb img');
    for (let im of images) 
        im.onclick = function() {
            main.src=this.src;
        }
    let products = document.querySelectorAll(".product > div");
    let button = document.querySelectorAll(".buttons > button");
    for (let b of button)
        b.onclick = function() {
            let prefix = this.getAttribute("ref");
            main.setAttribute('src', `../images/galaxys8/${prefix}1.jpg`);
            for (let i=0;i<images.length;i++)
                images[i].src= `../images/galaxys8/${prefix}${i+1}.jpg`;
            for (let pro of products)
                pro.style.background = `linear-gradient(${prefix.slice(0,-1)},lightblue)`;
        }


    let search = document.querySelector("input[type=search]");
    search.onchange = function(){
        let txt = this.value;

        for (let prod of products){
            prod.style.border="";
            prod.children[0].style.transform="";
        }

        let prods = document.querySelectorAll(".products h2");
        for (let p of prods)
            if(p.innerText.includes(txt)===true){
                p.parentElement.style.border = "2px solid red";
                p.parentElement.style.borderRadius = "10px";
            }
        let prodos = document.querySelectorAll(".product h2");
        for (let p of prodos)
            if (p.innerText.includes(txt) === true) {
                p.parentElement.style.border = "2px solid red";
                p.previousElementSibling.style.transform = "translateY(8px)";
            }
    }
}