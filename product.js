const price = document.getElementById('price_id')
const product = document.getElementById('product_id')
const list_of_products = document.getElementById('list_of_products')
const total_price = document.getElementById('total_price')

document.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/039b50a188954c47abf888d3d84caebd/productitem')
        .then((response) => {
            console.log(response)
            for (let i = 0; i < response.data.length; i++)
                show_product(response.data[i])
        })
        .catch((err) => {
            console.log(err)
        })
})


function show_product(e) {
    const price_value = e.price
    const id = `${e._id}`

    const li = document.createElement('li')
    li.textContent = `${e.price} - ${e.product} `

    const deletebtn = document.createElement('button')
    deletebtn.appendChild(document.createTextNode('Delete Product'))

    li.appendChild(deletebtn)
    list_of_products.appendChild(li)

    total_price.innerText = Number(total_price.innerText) + Number(e.price)

    deletebtn.onclick = () => {
        list_of_products.removeChild(li)
        total_price.innerText = Number(total_price.innerText) - Number(price_value)
        axios.delete(`https://crudcrud.com/api/039b50a188954c47abf888d3d84caebd/productitem/${id}`)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })


    }
}


function add_product(e) {

    e.preventDefault()
    const obj = {
        price: price.value,
        product: product.value
    }

    axios.post('https://crudcrud.com/api/039b50a188954c47abf888d3d84caebd/productitem', obj)
        .then((response) => {
            console.log(response)
            show_product(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    // price.value=''
    // //product.value=''
}
