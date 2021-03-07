document.addEventListener('DOMContentLoaded',  () => {
    var displayText = document.getElementsByClassName("infomation");
    console.log(displayText);
    var img = document.getElementById("outBox");


    for(let i = 0; i < displayText.length; i++){
        //hidden information text
        displayText[i].style.display = "none";

        //remove link of the anchor tag
        displayText[i].parentElement.children[0].className = "link";
        var link = document.getElementsByClassName("link");
        link[i].removeAttribute("href");
        
    }


    img.addEventListener('click',function(e){
        var image = e.target;
        //get class infomation
        var text = image.parentElement.parentElement.children[1];
        //get anchor tag
        var newLink = image.parentElement;
        //get class bedimg
        var largeImg = image.parentElement.parentElement;
        
        //Display information text
        text.style.display = "block";

        //click small img then open a new tab for big img
        largeImg.addEventListener('click',function(e){
            hrefinfos = newLink.children[0].getAttribute("src");
            console.log(hrefinfos);
            newLink.setAttribute("href", hrefinfos);
        })
    
    })

});