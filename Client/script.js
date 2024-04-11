let quoteContainer = document.getElementById("quote")
let quotebtn = document.querySelector('button')
let Quotes,randomNumber

setInterval(() => {
    randomNumber = Math.floor(Math.random() * 16)
}, 1);

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
    console.log("Got called")
}

let quoteTag = document.createElement('p'),
    authorTag = document.createElement('p')

quoteContainer.appendChild(quoteTag)
quoteContainer.appendChild(authorTag)

quotebtn.addEventListener("click",async () => {
    await caller()
    quoteTag.style.fontFamily = "Protest Riot"
    authorTag.style.fontFamily = "Dancing Script"
    authorTag.style.textDecoration = "Underline"
    authorTag.style.textAlign = 'center'
    quoteTag.style.textAlign = 'center'
    
    if(Array.isArray(Quotes)){
        quoteTag.innerText = Quotes[randomNumber].text
        authorTag.innerText = Quotes[randomNumber].author
    }
    else{
        quoteTag.innerText = "Quotes isn't received from the request.";
        authorTag.innerText = "Reload your page"
    }
})