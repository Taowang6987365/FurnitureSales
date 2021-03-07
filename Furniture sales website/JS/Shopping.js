document.addEventListener('DOMContentLoaded', () => {

    localStorage.clear();
    var addCart = document.getElementById("addCart");
    var checkedBox = document.querySelectorAll(".checking");
    var shopping = document.getElementById("shopping");
    console.log(checkedBox);
    var count = 0;

    //maxmun 4 items
    checkedBox.forEach(function(input){
		input.addEventListener("click", function(e){
            if(e.target.checked == true){
                count++;
            }
            else{
                count--;
            }
            if(count > 4){
                e.target.checked = false;
                count = 4;
                alert("You can only choose 4 Items");
            }
            console.log(count);
		})
	})

    //add selected items to local storage
    addCart.addEventListener("click", function (e) {
        //in case change items, reset all
        localStorage.clear();
        var total = 0;
        var itemIndex = 0;
        var items = [];
        e.preventDefault();

        for (let i = 0; i < checkedBox.length; i++) {
            if (checkedBox[i].checked) {
                var itemName = checkedBox[i].parentElement.parentElement.children[0].innerHTML;
                var itemPrice = checkedBox[i].parentElement.children[1].innerHTML;
                var itemQuantity = checkedBox[i].parentElement.parentElement.children[3].children[1].value;
                var itemInfo = {
                    'itemName': itemName,
                    'itemPrice': itemPrice,
                    'itemQuantity': itemQuantity,
                    'totalPrice': (itemPrice * itemQuantity)
                }
                total += itemInfo.totalPrice;
                items.push(itemInfo);
                localStorage.setItem(itemIndex,JSON.stringify(items[itemIndex]));
                itemIndex++;
            }
        }
        console.log(total);
        //show price
        shopping.value = total.toFixed(2);
    })


});