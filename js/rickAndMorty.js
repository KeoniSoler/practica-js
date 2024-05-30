let url = "https://rickandmortyapi.com/api/character";

fetch(url)
    .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        console.log(data);
        const characterList = document.querySelector('.characterList');
        let characters = '';

        for (let i = 0; i < data.results.length; i++) {
            const character = data.results[i];

            characters += `
            <article>
                <img src="${character.image}" alt="${character.name}">
                <p>Name: ${character.name}</p>
                <p>Status: ${character.status}</p>
            </article>
        `;
        }
        characterList.innerHTML = characters;

      })
      .catch(function(error) {
        console.log("Error: " + error);  
});
