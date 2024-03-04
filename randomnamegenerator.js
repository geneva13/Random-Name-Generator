
/*
function click0matic() {
    alert('Hello');
}

window.onload = function() {
    const click = document.getElementById('click');

    click.addEventListener("click", (event) => {
        click0matic();
    });
}
*/
const names = ['John', 'Jane', 'Alice', 'Bob', 'Charlie', 'Emma', 'David', 'Ella'];

function generateRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}
