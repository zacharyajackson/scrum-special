const userCardTemplate = document.querySelector("[data-user-template")
const UserCardContainer = document.querySelector("[data-user-cards-container]")
const SearchInput = document.querySelector("[data-search]")

let users = []

function greeting() {
    console.log('Hello-World');
}

SearchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisibile =
            user.name.toLowerCase().includes(value) ||
            user.email.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisibile)

    })
})

fetch("https://jsonplaceholder.typicode.com/users")

    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector("[data-header]")
            const body = card.querySelector("[data-body]")
            header.textContent = user.name
            body.textContent = user.email
            UserCardContainer.append(card)
            return { name: user.name, email: user.email, element: card }
        })

    })