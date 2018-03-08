
const user = 'lean-devs';

const apiUrl = `https://api.github.com/users/${user}/repos`;

function loadJson( uri ) {
    return new Promise( (resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', () => {
            console.log(xhr.readyState);
            if (xhr.readyState === 4) {
                if( xhr.status === 200 ) {
                    var data = JSON.parse(xhr.responseText);
                    resolve(data);
                } else {
                    reject({ code: xhr.status, msg: xhr.statusText });
                }
            }
        });
        xhr.open('GET', uri, true);
        xhr.send(null);
    });

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
