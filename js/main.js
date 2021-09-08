let products = document.querySelectorAll(".product__items_item")
let productWrapper = document.querySelector(".product__items")

let productAdd = document.querySelector(".add")
let inputs = document.querySelectorAll(".input")
inputs = Array.from(inputs)
let productName = inputs[0].value
let productDescription = inputs[1].value
let productImage = inputs[2].value
let productPrice = inputs[3].value

products = Array.from(products)
products.forEach((product) => {
  product.insertAdjacentHTML("afterbegin", "<span class='icon-delete'></span>")
})

let productsDelete = document.querySelectorAll(".icon-delete")

productsDelete.forEach((productDelete) => {
  productDelete.addEventListener("click", function () {
    productDelete.parentNode.parentNode.removeChild(productDelete.parentNode)
  })
})

// let iconsDelete = document.querySelectorAll(".icon-delete")

// iconsDelete.forEach((iconDelete) => {
//   iconDelete.addEventListener("click", deleteIcon)
// })

inputs.forEach((input) => {
  productAdd.addEventListener("click", function () {
    formRemoveError(input)
    if (input.value === "" && input.parentElement.classList.contains("valid")) {
      formAddError(input)
    }
  })
})
productAdd.addEventListener("click", function () {
  if (inputs[0].value != "" && inputs[2].value != "" && inputs[3].value != "") {
    productWrapper.insertAdjacentHTML(
      "afterbegin",
      `<div class="product__items_item">
      <span class="icon-delete"></span>
      <div class="product__item_img">
        <img
          class="product_image"
          src="${
            inputs[2].value //-----------------------TODO
          }} "
          
          alt=""
        />
      </div>
      <div class="product__item_body">
        <div class="product__item_name">
        <span class="product_name">${inputs[0].value}</span>
      </div>
      <div class="product__item_discription">
        <span class="product_txt txt">
          ${inputs[1].value}
        </span>
      </div>
      <div class="product__item_price">
        <span class="product_price">${inputs[3].value}</span>
      </div>
    </div>
      </div>
      `
    )
    let NewProductDelete = productWrapper.querySelector(".icon-delete")

    NewProductDelete.addEventListener("click", function () {
      NewProductDelete.parentNode.parentNode.removeChild(
        NewProductDelete.parentNode
      )
    })
  }
})

function formAddError(input) {
  input.classList.add("error")
}

function formRemoveError(input) {
  input.classList.remove("error")
}

let sortBtn = document.querySelector(".sort__body_main")
let sortArrow = document.querySelector(".sort_arrow")
let sortBody = document.querySelector(".sort__body_items")

sortBtn.addEventListener("click", function () {
  if (sortArrow.classList.contains("up")) {
    sortArrow.style.transform = "translateY(100%) rotate(0deg)"
    sortArrow.classList.remove("up")
    sortBody.style.display = "none"
  } else {
    sortArrow.style.transform = "translateY(100%) rotate(180deg)"
    sortArrow.classList.add("up")
    sortBody.style.display = "flex"
  }
})

let sortArray = document.querySelectorAll(".sort__body_item")
sortArray = Array.from(sortArray)
console.log(sortArray)

sortArray.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("1")
  })
})
// for (const sortItem of sortArray) {
//   sortItem.addEventListener("click", (e) => {
//     console.log(sortItem)
//     // у каждой карточки в атрибуте id задайте ID индификатор (_id) card.id = _id
//     // const id = e.target.id // получаем индификатор и отправляем на сервер
//     // console.log(id)
//   })
// }

function sort(i) {
  console.log(id)
  // if (sortDef[i] == 0) {
  //   sortArrow.style.transform = "translateY(100%) rotate(0deg)"
  //   sortArrow.classList.remove("up")
  //   sortBody.style.display = "none"
  // }
}
