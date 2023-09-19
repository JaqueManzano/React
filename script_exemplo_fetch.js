
fetch('https://localhost:7249/v1/categories')
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
    })

async function fetchCategories(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

const categorias = await fetchCategories('https://localhost:7249/v1/categories');
console.log(categorias);