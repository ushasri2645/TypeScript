class ShoppingItem {
    static lastId: number =0;
    itemName : string;
    itemDescription : string;
    isMarked : boolean;
    isDeleted : boolean;
    itemId: number;

    constructor(itemName:string, itemDescription:string = "", isMarked:boolean = false, isDeleted:boolean = false){
        this.itemId = ShoppingItem.lastId++;
        this.itemName = itemName;
        this.itemDescription = itemDescription ;
        this.isDeleted = isDeleted;
        this.isMarked = isMarked;
    }

    getItemId = () =>{
        return this.itemId;
    }
    setIsCompleted = () => {
        this.isDeleted = !this.isDeleted;
    } 

    setIsMarked = () => {
        this.isMarked = !this.isMarked;
    }

    setItemName = (itemName : string) => {
        this.itemName = itemName;
    }

    setItemDescription = (itemDescription : string) => {
        this.itemDescription = itemDescription;
    }

    getItemName = () => {
        return this.itemName;
    }

    getItemDescription= () =>{
        return this.itemDescription;
    }

    getIsDeleted = () => {
        return this.isDeleted;
    }

    getIsMarked = () => {
        return this.isMarked;
    }
}

var shoppingList : ShoppingItem[] = [];
const inputElement  = document.getElementById('add-item-input') as HTMLInputElement;
const table_body=document.querySelector("#table-list tbody");
var checkbox = document.getElementById('hide_unhide_checkbox')  as HTMLInputElement; 
var label = document.getElementById('hide_unhide_label');


function markedProductStatus(product : ShoppingItem) : boolean{
    return product.getIsMarked() && !product.getIsDeleted(); 
}

function unMarkedProductionStatus(product : ShoppingItem) : boolean{
    return !product.getIsMarked() && !product.getIsDeleted();
} 

function count() : void{
    const mc = shoppingList.filter(markedProductStatus).length;
    const umc = shoppingList.filter(unMarkedProductionStatus).length;

    const markedSection = document.getElementById('info-1');
    if(!markedSection){return;}
    markedSection.innerHTML="";
    const unmarkedSection = document.getElementById('info-2');
    if(!unmarkedSection){return;}
    unmarkedSection.innerHTML="";
    
    const mHead = document.createElement('h3');
    const mPara = document.createElement('p');
    mHead.textContent = "Marked Items Count";
    mPara.textContent = `${mc}`;

    markedSection.appendChild(mHead);
    markedSection.appendChild(mPara);
    
    const unmHead = document.createElement('h3');
    const unmPara = document.createElement('p');
    unmHead.textContent = "UnMarked Items Count";
    unmPara.textContent = `${umc}`;

    unmarkedSection.appendChild(unmHead);
    unmarkedSection.appendChild(unmPara);
    
}

function render(type: string = "show") : void{
    if(!table_body){
        return;
    }
    table_body.innerHTML = "";
    if(type==="hide"){
        shoppingList.forEach(item=>{
            if(!item.getIsDeleted() && !item.getIsMarked()){
                renderitem(item);
            }
        })
    }
    else{
        shoppingList.forEach(item=>{
            if(!item.getIsDeleted()){
                renderitem(item);
            }
        })
    }
}

function conditioanlrendering(){
    if(!checkbox){
        return;
    }
    if(!checkbox.checked){
        render();
    }
    else{
        render("hide");
    }
    count();
}


function renderitem(item: ShoppingItem) : void{
    console.log("renderitem")
    const row=document.createElement("tr");
    row.classList.add("row-element");
    
    const itemNameElement=document.createElement("td")
    itemNameElement.textContent = item.itemName;

    const deleteButtonEle = document.createElement("td");
    deleteButtonEle.classList.add("button_parent");
    const deleteButton = document.createElement("button");
    deleteButton.dataset.id = `${item.itemId}`;
    deleteButton.classList.add("delete-btn");
    deleteButton.innerHTML = '<i class="fa fa-trash-o"></i>';
    
    deleteButtonEle.appendChild(deleteButton);
    row.appendChild(itemNameElement);
    row.appendChild(deleteButtonEle)

    if(item.getIsMarked()) {
        itemNameElement.classList.add("marked-class");
    }

    itemNameElement.addEventListener("click", function() {
        toggleCompletion(item, itemNameElement);
    });
    if(!table_body){
        return;
    }
    table_body.appendChild(row);
}


function toggleCompletion(item : ShoppingItem, element : HTMLTableCellElement) {
    item.setIsMarked();
    element.classList.toggle("marked-class");
    conditioanlrendering(); 
}


function AddItem(): void{
    if(!inputElement){return;}
    if(inputElement.value === ""){
        alert("Please give proper input (non empty)");
        return;
    }
    const index = shoppingList.findIndex(item => item.itemName===inputElement.value);
    if(index===-1){
        alert('Please enter other name, Item name already taken');
        return;
    }
    const newItem = new ShoppingItem(inputElement.value);
    shoppingList.unshift(newItem);
    inputElement.value=""
    console.log(shoppingList)
    conditioanlrendering();
}

function handleDelete(event : Event) : void {
    const target = event.target as HTMLElement;
    if(!target){
        return;
    }
    const id_1 =target.dataset.id;
    if(!id_1){
        return;
    }
    const id : number = parseInt(id_1);
    const index = shoppingList.findIndex(item => item.itemId === id);
    if (index !== -1) {
        shoppingList[index].isDeleted=true;
        conditioanlrendering();
    }
 }

const tableListBody = document.querySelector("#table-list tbody");
if(tableListBody){
    tableListBody.addEventListener("click", function(event : Event) {
        const target = event.target as HTMLElement;
        if(target.classList.contains("delete-btn")) {
          handleDelete(event);
        }
     });
}


if(inputElement){
    inputElement.addEventListener('keydown',(event:KeyboardEvent) => {
        if(event.key==='Enter'){
            console.log("enter pressed")
            AddItem();
        }
    });
}

function hide() : void {
    if(!label){
        return;
    }
    if (checkbox.checked) {
        label.textContent = "Unhide the Marked Items";
        render("hide");
    } else {
        label.textContent = "Hide the Marked Items";
        render();
    }
    count();
}
 

render();
count();