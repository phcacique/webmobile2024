let data = [
    {
        "name": "Ana Cecília Lopes",
        "url": "img/ana.png",
        "age": 20
    },
    {
        "name": "Felipe Santos",
        "url": "img/felipe.png",
        "age": 28
    },
    {
        "name": "Larissa Silva Oliveira",
        "url": "img/larissa.png",
        "age": 18
    },
    {
        "name": "Matheus Oliveira",
        "url": "img/matheus.png",
        "age": 22
    },
    {
        "name": "Clara Silva",
        "url": "img/clara.png",
        "age": 23
    }
]

window.onload = function(){
    show(data, "people")

    show(data.sort(function(a, b){return a.age - b.age}), "people_sort")

    show(data.filter( person => person.age >= 20 ), "people_filter")

    let total = 0
    let averageAge = data.reduce( (total, person) => total + person.age,0 ) / data.length
    document.getElementById("averageAge").innerHTML = averageAge
    
}

function show( people, containerName ){
    let container = document.getElementById(containerName)
    let peopleMapped = people.map(  generateCard )
    for(var i=0; i<peopleMapped.length; i++){
        container.innerHTML += peopleMapped[i]
    }
}

function generateCard( person ) {
    return `<article>
                <img src='${person.url}' alt='${person.name}'/>
                <aside>
                    <p>${person.name}</p>
                    <small>${person.age} years old</small>
                </aside>
            </article>`
}