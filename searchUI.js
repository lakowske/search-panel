/*
 * (C) 2015 Seth Lakowske
 */

var nodeSearch = require('./nodeSearch');

function insertSearchPanel(tagId) {
    var searchPanel = document.querySelector(tagId);

    if (!searchPanel) {
        console.log("couldn't find given tagId (" + tagId + ") in document");
        return;
    }

    var form = document.createElement('form');
    form.setAttribute('method', 'post');

    var searchBox = document.createElement('input');
    searchBox.setAttribute('id', 'search');
    searchBox.setAttribute('type', 'text');
    searchBox.setAttribute('name', 'search');
    searchBox.oninput = nodeSearch;

    form.appendChild(searchBox);

    var results = document.createElement('div');
    results.setAttribute('id', 'results');

    searchPanel.appendChild(form);
    searchPanel.appendChild(results);
}

module.exports = insertSearchPanel;
