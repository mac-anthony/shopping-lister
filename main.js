
var form = document.getElementById('Add-form');
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')

//FORM EVENT
form.addEventListener('submit',addItem)

//removing item
itemList.addEventListener('click',removeItem)

//FILTERING ITEMS
filter.addEventListener('keyup', filterItem)

//ADD ITEM
function addItem(e){
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('form-input').value;

    //create new li element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create del button element
    var delButton = document.createElement('button');

    //add classes to the del button 
    delButton.className = 'li-btn';

    //append a text node 
    delButton.appendChild(document.createTextNode('x'))

    //append button to li
    li.appendChild(delButton);

    //append li to itemlist
    itemList.appendChild(li)
}


//RemoveItem
function removeItem(e){
    if(e.target.classList.contains('li-btn')){
        if(confirm('Are You Sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}


//Filter Item

function filterItem(e){
    // convert text to toLowerCase
    var text = e.target.value.toLowerCase();

    //get lis
    var items = itemList.getElementsByTagName('li');
    //convert lis to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) !== -1){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })
}