document.getElementById('fetchData').addEventListener('click', fetchData);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('fetchJson').addEventListener('click', fetchJson);
document.getElementById('addPost').addEventListener('submit', addPost);

function fetchData(){
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('output').innerHTML = data;
    })
    .catch((err) => console.log(err))
}

function getUsers(){
    fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
        let output = "<h2>users</h2>";
        data.forEach((user) => {
            output += `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Age: ${user.age}</li>
                    <li>Email: ${user.email}</li>
                </ul>
            `;
        })
        document.getElementById("output").innerHTML = output
    })
}

function fetchJson() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
        let output = "<h2>Posts</h2>";
        data.forEach((user) => {
            output += `
                <ul>
                    <li>ID: ${user.userId}</li>
                    <li>Name: ${user.id}</li>
                    <li>Age: ${user.title}</li>
                    <li>Email: ${user.body}</li>
                </ul>
            `;
        })
        document.getElementById("output").innerHTML = output
    })
}

function addPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').value
    let body = document.getElementById('body').value

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'content-type': 'application/json'
        },
        body: JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}