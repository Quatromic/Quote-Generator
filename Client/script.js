let quoteContainer = document.getElementById("quote")
let quotebtn = document.querySelector('button')
let randomNumber = Math.floor(Math.random() * 16)
console.log(randomNumber)
let Quotes

const quoteFetcher = async () => {
    await fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(quotes => {
            Quotes = quotes
            console.log(Quotes)
        })
        .catch(error => console.log(error))
}

const caller = async () => {
    const quotes = await quoteFetcher()
}

quotebtn.addEventListener("click",async () => {
    await caller()
    console.log(Quotes)
    let quoteTag = document.createElement('p'),
        authorTag = document.createElement('p')

    quoteTag.style.fontFamily = "Protest Riot"
    authorTag.style.fontFamily = "Dancing Script"
    authorTag.style.textDecoration = "Underline"
    authorTag.style.textAlign = 'center'
    quoteTag.style.textAlign = 'center'
    
    quoteTag.innerText = Quotes[randomNumber].text
    authorTag.innerText = Quotes[randomNumber].author

    quoteContainer.appendChild(quoteTag)
    quoteContainer.appendChild(authorTag)
})