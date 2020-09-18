
// const foo = 'bar';
import item from './item.js';

let items = [];
let hideCheckedItems = false;
  
function findById(ID)
{
    let findId=ID.find(store.items);

    return(findId);
}

function addItem(itemName)
{
    try{
        item.validateName(itemName);
        create(itemName);
        this.items.push(itemName);

    }
    catch{}
}

function findAndToggleChecked(id)
{
    this.findById(id.checked);
}

function findAndUpdateName(id,newName)
{
    //should it be newName or id?
    try{
        item.validateName(newName);
        findById(id);
    }

    catch(error){
        console.log(`Cannot update name: ${error.message}`);

    }
}

function findAndDelete (id)
{
    findById(id).remove;
}


  export default {
    items,
    hideCheckedItems,
    
  };

//   console.log(item);
// console.log(foo);