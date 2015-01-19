Browserifiable DOM search panel component.

```javascript
var searchUI = require('./searchUI');

/*
 * Be sure to put the bundle at the end of the body tag, otherwise
 * the searchPanel div may not exist yet and we'll fail here.
 */
searchUI('#searchPanel');
```
