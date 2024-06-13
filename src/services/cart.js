async function addItem(userCart, item){
    userCart.push(item)
}

async function calculateTotal(userCart){
    console.log(`\nTotal Cart: `)
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(result)
}

async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name)

    const deleteIndex = index - 1

    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1)
    }
}

async function removeItem(userCart, item){
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    if (indexFound == -1){
        console.log("Item não encontrado")
        return
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity--;
        return
    }

    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1)
        return
    }
}

async function displayCart(userCart){
    console.log("\nShopee cart list: ")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal: ${item.subtotal()}`)
    })
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}