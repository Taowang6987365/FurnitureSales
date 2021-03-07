document.addEventListener("DOMContentLoaded", function () {

    //pass LocalStorage Information
    var myNewObj = [];
    var showPrice = document.getElementById("showPrice");
    var price = document.getElementById("payment");
    var invoceTab = document.getElementById("invoiceTab");
    var totalPrice = document.getElementById("totalPrice");
    var total = 0;
    var totalQuantities = 0;
    for (let i = 0; i < localStorage.length; i++) {
        myNewObj.push(JSON.parse(localStorage.getItem(i)));
    }

    for (let i = 0; i < localStorage.length; i++) {
        var newtr = document.createElement("tr");
        for (let j = 0; j < 4; j++) {
            var newtd = document.createElement("td");
            newtr.appendChild(newtd);
        }
        newtr.children[0].innerHTML = myNewObj[i].itemName;
        newtr.children[1].innerHTML = parseFloat(myNewObj[i].itemPrice).toFixed(2);
        newtr.children[2].innerHTML = myNewObj[i].itemQuantity;
        newtr.children[3].innerHTML = parseFloat(myNewObj[i].totalPrice).toFixed(2);
        invoceTab.appendChild(newtr);
        total += myNewObj[i].totalPrice;
        totalQuantities += parseFloat(myNewObj[i].itemQuantity);
    }

    //total items price
    totalPrice.children[0].children[0].children[0].innerHTML = "furitures";
    totalPrice.children[0].children[0].children[1].innerHTML =  total.toFixed(2);
    totalPrice.children[0].children[0].children[2].innerHTML =  totalQuantities;
    for(let i = 0; i < 3; i++){
        var newp = document.createElement("p");
        price.appendChild(newp);
    }

    price.children[0].innerHTML = "Subtotal:" + total.toFixed(2);
    price.children[1].innerHTML = "TPS:" + (total*0.05).toFixed(2);
    price.children[2].innerHTML = "TVQ:" + (total*0.09975).toFixed(2);



    //Show total Price
    showPrice.value = total.toFixed(2);

    //validate input information
    var order = document.getElementById("order");
    var clear = document.getElementById("clear");
    var inputValue = document.getElementsByClassName("inputValue");
    var isValid = false;
    var inputs = document.querySelectorAll("input");
    var pattren = {

        CardNumber: /\d{15,16}/,
        CVC: /^\d{3}$/,
        CardName: /^[a-z0-9]{5,12}$/i,
        Expiration: /^([0-12]{2})\/([20-25]{2})/,
        Name: /^[a-z0-9]{5,12}$/i,
        Address: /^(\d{3,4})\s([a-z]*)$/,
        OtherAddress: /^(\d{3-4})\s([a-z]*)$/,
        City: /^[a-zA-Z]*$/,
        PostalCode: /^[a-zA-Z]\d[a-zA-Z]\d[a-zA-Z]\d$/,
        Province: /^[a-zA-Z]*$/,
        Country: /^[a-z]*$/
    }

    function validator(field, regex) {
        if (!regex.test(field.value)) {
            switch (field.name) {
                case "CardNumber":
                    alert("Please Enter Valid Card Number");
                    break;
                case "CVC":
                    alert("Please Enter Valid CVC");
                    break;
                case "CardName":
                    alert("Please Enter Valid card name");
                    break;
                case "Expiration":
                    alert("Please Enter Valid Expiration date");
                    break;
                case "Name":
                    alert("Please Enter Valid Name");
                    break;
                case "Address":
                    alert("Please Enter Valid Address");
                    break;
                case "OtherAddress":
                    alert("Please Enter Valid Address");
                    break;
                case "City":
                    alert("Please Enter Valid City");
                    break;
                case "PostalCode":
                    alert("Please Enter Valid Postal Code");
                    break;
                case "Province":
                    alert("Please Enter Valid Province");
                    break;
                case "Country":
                    alert("Please Enter Valid Country");
                    break;
                default:
                    alert();
                    break;
            }
        }
    }

    inputs.forEach(function (input) {
        input.addEventListener("blur", function (e) {
            validator(e.target, pattren[e.target.attributes.name.value]);
        })
    })

    //order items
    order.addEventListener("click", function () {
        for (let i = 0; i < inputValue.length; i++) {
            if (inputValue[i].value == null || inputValue[i].value == "") {
                alert("Not complete!")
                isValid = false;
                break;
            }
            else {
                isValid = true;
            }
        }
        if (isValid) {
            alert("Thanks for your purchasing!");
        }
    })

    //clear infomation
    clear.addEventListener("click", function (e) {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
        clear.value = "Clear";
        order.value = "Order";
        showPrice.value = total.toFixed(2);
    })
});