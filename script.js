var output = document.getElementById('output')


function addProduct(){
    let newButton = document.createElement('button')
    newButton.classList.add('btn')
    newButton.classList.add('btn-outline-primary')
    newButton.classList.add('m-2')
    newButton.setAttribute('type','button')
    newButton.innerText = "Post your Product"
    output.appendChild(newButton)
}

document.getElementById('new_product').addEventListener('click',addProduct)