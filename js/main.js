let products = document.querySelectorAll(".product__items_item")
let iconDelete = document.createElement("icon-delete")

products = Array.from(products)

products.forEach((product) => {
  product.insertAdjacentHTML("afterbegin", "<span class='icon-delete'></span>")
})
