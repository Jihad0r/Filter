let filterItems = [...items]

let content = document.querySelector(".content")
let list = document.querySelector("ul")
let find = document.querySelector(".form")
let search = document.querySelector(".searching")


function companies(){
    if (filterItems.length < 1) {
        content.innerHTML = `<h6>Sorry, no products matched your search</h6>`
        return;
    }
    content.innerHTML = filterItems.map(function (i) {
        return`<div data-comp ="${i.company}">
                    <img src="${i.image}" alt="${i.title}">
                    <p>${i.title}</p>
                    <span>${i.price}</span>
                </div>`
    }).join("")
}
companies()
find.addEventListener("keyup", function () {
    let found = search.value
    filterItems = items.filter((item) => {
        return item.title.toLowerCase().includes(found);
    })
    companies()
})
function buttons() {
    let button = [
        "all",
        ...new Set(items.map((item) => item.company)),
    ]
    list.innerHTML = button.map(function (company) {
        return `<li class="btn" data-comn =${company}>${company}</li>`
    }).join("")
}
buttons()
list.addEventListener("click", function (e) {
    let ck_company = e.target
    if (e.target.classList.contains("btn")) {
        if (ck_company.dataset.comn === "all") {
            filterItems =[...items]
        } else {
            filterItems = items.filter(function (i) {
            return i.company === ck_company.dataset.comn
            }) 
        }
        search.value = ""
        companies()
    }
})