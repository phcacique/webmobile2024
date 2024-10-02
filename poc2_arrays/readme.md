# Métodos de manipulação de arrays

Esta prova de conceito pretende apresentar quatro métodos de manipulação de arrays em javascript:

1. Map
2. Sort
3. Filter
4. Reduce

Para código apresentado neste repositório, será utilizado um array de objetos personalizados que reprentam dados de pessoas fictícias, como mostra o trecho de código a seguir:

```javascript
let data = [
    {
        "name": "Ana Cecília Lopes",
        "url": "img/ana.png",
        "age": 20
    }
    ...
]
```

Para cada pessoa, temos os dados de nome, url da imagem de avatar e idade.

## Map

O método ```map``` tem a função de mapear os elementos de um array de acordo com uma função específica. Internamente, ele percorre o array e realiza a conversão de cada elemento para o novo formato especificado.

Para este exemplo, o mapeamento deve pegar os dados das pessoas e converter em um elemento de HTML que representa um card específico. Para isso foi criada uma função que recebe os dados de uma única pessoa (um elemento do array) e retorna uma string que contém a o HTML esperado para a representação.

```javascript
function generateCard( person ) {
    return `<article>
                <img src='${person.url}' alt='${person.name}'/>
                <aside>
                    <p>${person.name}</p>
                    <small>${person.age} years old</small>
                </aside>
            </article>`
}
```

Com esta função é possível gerar o um novo array mapeado. Para facilitar o trabalho, criou-se uma função que recebe um array de pessoas e o nome do container a ser modificado no arquivo ```index.html```. Esta função realiza o mapeamento e em seguida um loop para percorrer o novo array e preencher o container

```javascript
function show( people, containerName ){
    let container = document.getElementById(containerName)
    let peopleMapped = people.map(  generateCard )
    for(var i=0; i<peopleMapped.length; i++){
        container.innerHTML += peopleMapped[i]
    }
}
```

Para mostrar os dados originais, basta chamar a função ```show```passando os dados solicitados:

```javascript
show(data, "people")
```
O resultado visual desta operação é apresentado a seguir:

![Map](map.png)

