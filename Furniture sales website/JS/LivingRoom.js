document.addEventListener('DOMContentLoaded',  () => {
    var items = ["Living room set 1", "Living room set 2", "Living room set 3","Living room set 4","Living room set 5","Living room set 6"];

    var input = document.getElementById("searchinfo");
    var search = document.getElementById("searching");

    var displayImg = document.getElementById("displayImg");
    var searchBar = document.getElementById("searchBar");

    var textinfo = document.getElementById("textinfo");
    var imginfo = document.getElementById("imginfo");
    var sofaImg = document.getElementsByClassName("sofaImg");

    var btn = document.getElementById("backBtn");

    displayImg.style.display = "none";
    
    search.addEventListener('click', function(e){
        e.preventDefault();
        for(let i = 0; i < items.length;i++){
            if(input.value.toUpperCase().match(items[i].toUpperCase())){
                searchBar.style.display = "none";
                displayImg.style.display = "block";
                
                var srcInfo = sofaImg[i].children[0].getAttribute("src");
                imginfo.children[0].setAttribute("src",srcInfo);
                
                for(let j = 0; j < 2; j ++){
                    var text = sofaImg[i].children[1].children[j].textContent;
                    textinfo.children[j].textContent= text;
                } 
            }
            
        }
    })

    btn.addEventListener('click',function(e){
        searchBar.style.display =  "block";
        displayImg.style.display = "none";
    })
        
})