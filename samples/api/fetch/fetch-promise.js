
const user = 'lean-devs';

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
loadJson(apiUrl)
    .then( (repos) => {
        const first = repos[0];
        console.log(first.name);
        return loadJson(first.url);
    }).then( (repo) => {
        console.log('Repo Loaded');
        return loadJson(repo.url + '/commits');
    }).then( (commits) => {
        console.log( "Commit count: ", commits.length);
        for (const c of commits) {
            console.log(c.commit.message);
        }
    })
    .catch( (err) => { console.log(err) });

console.log('Loaded');

