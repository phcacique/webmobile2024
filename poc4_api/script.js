// API utilizada: https://bible-api.com

async function getVerse(book, chapter, verse, translation){
    let data = {}
    try {
        let url = `https://bible-api.com/${book}+${chapter}:${verse}?translation=${translation}`
        let response = await fetch(url )
        data = await response.json()
    } catch(error) {
        console.log(error)
    }
    return data
}

async function getRandomVerse(translation){
    let data = {}
    try {
        let url = `https://bible-api.com/?random=verse&translation=${translation}`
        let response = await fetch(url )
        data = await response.json()
    } catch(error) {
        console.log(error)
    }
    return data
}


async function start(){

    // let data = await getVerse('john', 3, 16, 'almeida')
    let data = await getRandomVerse("almeida")
    let verse = document.getElementById("verse")
    verse.innerHTML = `<p>${data.text}</p>
                        <footer><small>${data.reference}</small><footer>`


}

start()