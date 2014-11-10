# co-once

Wrap a generator that can be called only once, like `_.once`.

## Install

Install the [package](https://npmjs.org/package/co-once) with [npm](http://npmjs.org):

```sh
$ npm install co-once
```

## Usage

### `once(fn)`

```js
var once = require('co-once');
var wrapped = once(getUser);

var user = yield* getUser();
user = yield* getUser(); // result is cached, getUser is only called once
```

## License

MIT
