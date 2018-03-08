
const user = 'lean-dev';

const apiUrl = `https://api.github.com/users/${user}/repos`;

function loadJson( uri, cb ) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText);
            cb(data);
        }
    });
    xhr.open('GET', uri, true);
    xhr.send(null);
}

console.log('Loading');
loadJson(apiUrl, (repos) => {
    const first = repos[0];
    console.log(first.name);
    loadJson(first.url, (repo) => {
        console.log('Repo Loaded');
        loadJson(first.url + '/commits', (commits) => {
            console.log( "Commit count: ", commits.length);
            for (const c of commits) {
                console.log(c.commit.message);
            }

        });
    });
});
console.log('Loaded');
