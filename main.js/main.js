const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");
// For Opening Popup
btns.forEach( (btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target) .classList.add ( "active" );
        overlay.classList.add("active");
    });
});
// For Closing popup "X" Sign
close_modals.forEach( (btn) => {
    btn.addEventListener("click", () => { const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
 });
});
//After Opening popup, If you click outside the Popup, It will Close.
window.onclick = (event) => {
    if (event.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach( (modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    };
} ;


    // Search Functionality
function filter() {
    var filterValue, input, ProductList,ProductName,h4,i;
    input = document.getElementById("serach");
    filterValue = input.value.toUpperCase();
    ProductList = document.getElementById("product-list");
    ProductName = ProductList.getElementsByClassName ("col-4");
    for (i = 0 ; i < ProductName.length ; i++) {
        h4 = ProductName[i].getElementsByTagName("h4")[0];

        // In Search If Typed String Matches With The Element Name.

        if(h4.innerHTML.toUpperCase() .indexOf(filterValue) > -1){
            ProductName[i].style.display = "none";
        }
        else{
            ProductName[i].style.display = "none";
        }
    }
}

// Sort Product By Price 

function sortList() {
    var ProductList, ProductName, i, switching, b, c, shouldSwitch;
    ProductList = document.getElementById("product-list");
    ProductName = ProductList.getElementsByClassName("col-4");
    switching = true;//boolean true
    while (switching) {
        switching = false;
        //loop is running through each product
        for (i =0 ; i < (ProductName.length -1) ; i++) {
            shouldSwitch = false;
            b = ProductName[i].getElementsByTagName("span")[0].innerHTML;
            c = ProductName[i+1].getElementsByTagName("span")[0].
            innerHTML
            //condion to check price for each product item
            if (Number(b) > Number(c)) {
                shouldSwitch = true;
                break;
            }
        }
        //each product element will switch with next product element based on product price sorting
        if (shouldSwitch) {
            ProductName[i].parentNode.insertBefore(ProductName[i + 1],
                ProductName[i]);
                switching = true;
        }
    }
}