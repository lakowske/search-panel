/*
 * (C) 2015 Seth Lakowske
 */

var http = require('http');

function search() {
    var node = document.querySelector('#search');

    http.get({ path : '/search' }, function(res) {
        var div = document.getElementById('results');
        div.innerHTML += 'GET /beep<br>';

        res.on('data', function (buf) {
            div.innerHTML += buf;
        });

        res.on('end', function () {
            div.innerHTML += '<br>__END__';
        });

    })
}

module.exports = search
