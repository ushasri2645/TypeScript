var ShoppingItem = /** @class */ (function () {
    function ShoppingItem(itemName, itemDescription, isMarked, isDeleted) {
        if (itemDescription === void 0) { itemDescription = ""; }
        if (isMarked === void 0) { isMarked = false; }
        if (isDeleted === void 0) { isDeleted = false; }
        var _this = this;
        this.getItemId = function () {
            return _this.itemId;
        };
        this.setIsCompleted = function () {
            _this.isDeleted = !_this.isDeleted;
        };
        this.setIsMarked = function () {
            _this.isMarked = !_this.isMarked;
        };
        this.setItemName = function (itemName) {
            _this.itemName = itemName;
        };
        this.setItemDescription = function (itemDescription) {
            _this.itemDescription = itemDescription;
        };
        this.getItemName = function () {
            return _this.itemName;
        };
        this.getItemDescription = function () {
            return _this.itemDescription;
        };
        this.getIsDeleted = function () {
            return _this.isDeleted;
        };
        this.getIsMarked = function () {
            return _this.isMarked;
        };
        this.itemId = ShoppingItem.lastId++;
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.isDeleted = isDeleted;
        this.isMarked = isMarked;
    }
    ShoppingItem.lastId = 0;
    return ShoppingItem;
}());
var shoppingList = [];
var inputElement = document.getElementById('add-item-input');
var table_body = document.querySelector("#table-list tbody");
var checkbox = document.getElementById('hide_unhide_checkbox');
var label = document.getElementById('hide_unhide_label');
function markedProductStatus(product) {
    return product.getIsMarked() && !product.getIsDeleted();
}
function unMarkedProductionStatus(product) {
    return !product.getIsMarked() && !product.getIsDeleted();
}
function count() {
    var mc = shoppingList.filter(markedProductStatus).length;
    var umc = shoppingList.filter(unMarkedProductionStatus).length;
    var markedSection = document.getElementById('info-1');
    if (!markedSection) {
        return;
    }
    markedSection.innerHTML = "";
    var unmarkedSection = document.getElementById('info-2');
    if (!unmarkedSection) {
        return;
    }
    unmarkedSection.innerHTML = "";
    var mHead = document.createElement('h3');
    var mPara = document.createElement('p');
    mHead.textContent = "Marked Items Count";
    mPara.textContent = "".concat(mc);
    markedSection.appendChild(mHead);
    markedSection.appendChild(mPara);
    var unmHead = document.createElement('h3');
    var unmPara = document.createElement('p');
    unmHead.textContent = "UnMarked Items Count";
    unmPara.textContent = "".concat(umc);
    unmarkedSection.appendChild(unmHead);
    unmarkedSection.appendChild(unmPara);
}
function render(type) {
    if (type === void 0) { type = "show"; }
    if (!table_body) {
        return;
    }
    table_body.innerHTML = "";
    if (type === "hide") {
        shoppingList.forEach(function (item) {
            if (!item.getIsDeleted() && !item.getIsMarked()) {
                renderitem(item);
            }
        });
    }
    else {
        shoppingList.forEach(function (item) {
            if (!item.getIsDeleted()) {
                renderitem(item);
            }
        });
    }
}
function conditioanlrendering() {
    if (!checkbox) {
        return;
    }
    if (!checkbox.checked) {
        render();
    }
    else {
        render("hide");
    }
    count();
}
function renderitem(item) {
    console.log("renderitem");
    var row = document.createElement("tr");
    row.classList.add("row-element");
    var itemNameElement = document.createElement("td");
    itemNameElement.textContent = item.itemName;
    var deleteButtonEle = document.createElement("td");
    deleteButtonEle.classList.add("button_parent");
    var deleteButton = document.createElement("button");
    deleteButton.dataset.id = "".concat(item.itemId);
    deleteButton.classList.add("delete-btn");
    deleteButton.innerHTML = '<i class="fa fa-trash-o"></i>';
    deleteButtonEle.appendChild(deleteButton);
    row.appendChild(itemNameElement);
    row.appendChild(deleteButtonEle);
    if (item.getIsMarked()) {
        itemNameElement.classList.add("marked-class");
    }
    itemNameElement.addEventListener("click", function () {
        toggleCompletion(item, itemNameElement);
    });
    if (!table_body) {
        return;
    }
    table_body.appendChild(row);
}
function toggleCompletion(item, element) {
    item.setIsMarked();
    element.classList.toggle("marked-class");
    conditioanlrendering();
}
function AddItem(){
    if (!inputElement) {
        return;
    }
    if (inputElement.value === "") {
        alert("Please give proper input (non empty)");
        return;
    }
    var index = shoppingList.findIndex(function (item) { return item.itemName === inputElement.value; });
    if (index !== -1) {
        alert('Please enter other name, Item name already taken');
        return;
    }
    var newItem = new ShoppingItem(inputElement.value);
    shoppingList.unshift(newItem);
    inputElement.value = "";
    console.log(shoppingList);
    conditioanlrendering();
}
function handleDelete(event) {
    var target = event.target;
    if (!target) {
        return;
    }
    var id_1 = target.dataset.id;
    if (!id_1) {
        return;
    }
    var id = parseInt(id_1);
    var index = shoppingList.findIndex(function (item) { return item.itemId === id; });
    if (index !== -1) {
        shoppingList[index].isDeleted = true;
        conditioanlrendering();
    }
}
var tableListBody = document.querySelector("#table-list tbody");
if (tableListBody) {
    tableListBody.addEventListener("click", function (event) {
        var target = event.target;
        if (target.classList.contains("delete-btn")) {
            handleDelete(event);
        }
    });
}
if (inputElement) {
    inputElement.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            console.log("enter pressed");
            AddItem();
        }
    });
}
function hide() {
    if (!label) {
        return;
    }
    if (checkbox.checked) {
        label.textContent = "Unhide the Marked Items";
        render("hide");
    }
    else {
        label.textContent = "Hide the Marked Items";
        render();
    }
    count();
}
render();
count();
