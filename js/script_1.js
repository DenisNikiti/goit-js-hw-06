const categoriesEl = document.querySelectorAll(".item")

console.log(`Number of categories:`, categoriesEl.length)

console.log(categoriesEl[0].children[0].textContent)
for (const categorie of categoriesEl) {
    console.log(`Category:`, categorie.children[0].textContent)
    console.log(`Elements:`, categorie.children[1].children.length)
}