
function click0matic() {
    alert('Hello');
}

window.onload = function() {
    const click = document.getElementById('click');

    click.addEventListener("click", (event) => {
        click0matic();
    });
}

