
const user = 'lean-dev';

const apiUrl = `https://api.github.com/users/${user}/repos`;

/*
fetch(apiUrl)
 .then( (response) => {
    response.json().then(function (data) { console.log(data)});
 })
 .catch( (reason) => {
    console.log(reason);
 });
*/
async function demo() {
    const response = await fetch(apiUrl);
    return response.json();
}

function loadJson( uri ) {
    return fetch(uri)
        .then( response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(response.statusText);
            }
        }
        );
}

console.log('Loading');

async function loadData() {

    const repos = await loadJson(apiUrl);

    const first = repos[0];
    console.log(first.name);

    const repo = await loadJson(first.url);

    console.log('Repo Loaded');

    const commits = await loadJson(first.url + '/commits');

    console.log( "Commit count: ", commits.length);
    for (const c of commits) {
        console.log(c.commit.message);
    }

    return commits;
}

loadData()
    .then(console.log)
    .catch(console.log);
