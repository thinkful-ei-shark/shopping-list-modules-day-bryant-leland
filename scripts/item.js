// const foo = 'bar';
function validateName(name) {
    if (!name) //if name does not exist
    {
        throw new TypeError("Name must not be blank");
    }
}

function create(name){

    let item = {id: cuid(), name: name, checked: false};

    return(item);

}



export default {
    validateName,
    create
};