function storage(e) {
    e.preventDefault();
    var amount = e.target.expense.value
    var description = e.target.description.value
    var category = e.target.category.value
    const obj = {
        amount,
        description,
        category
    }
    localStorage.setItem(obj.description, JSON.stringify(obj))
    show(obj)
}

function show(item) {
    var items = document.getElementById('buttonid')
    var li = document.createElement('li')
    li.textContent = `${item.amount} - ${item.description} - ${item.category} `

    var deletebtn = document.createElement('button')
    var editbtn = document.createElement('button')

    deletebtn.className = 'btn btn-outline-danger delete'
    editbtn.className = 'btn btn-outline-warning edit'

    deletebtn.appendChild(document.createTextNode('Delete Expense'));
    editbtn.appendChild(document.createTextNode('Edit Expense'));

    li.appendChild(deletebtn)
    li.appendChild(editbtn)

    deletebtn.onclick = () => {
        if (confirm('Are you Sure?')) {
            localStorage.removeItem(item.description)
            items.removeChild(li)
        }
    }
    editbtn.onclick=() =>
    {
        localStorage.removeItem(item.description)
        items.removeChild(li)
        document.getElementById('expenseamount').value=item.amount
        document.getElementById('expensedescription').value=item.description
        document.getElementById('expensecategory').value=item.category
    }
    items.appendChild(li)
}