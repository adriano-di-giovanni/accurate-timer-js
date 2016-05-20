# accurate-timer-js

An accurate javascript timer for the browser.

It uses a web worker and `performance.now`.

http://caniuse.com/#search=performance.now

http://caniuse.com/#search=web%20worker

## Installation

```
npm install accurate-timer-js --save
```

```
bower install accurate-timer-js --save
```

## Usage

```javascript
var delay = 1000; // milliseconds
var timer = new AccurateTimer(function tick() {
    console.log('tick');
    this.stop();
}, delay);

timer.start();
```

## Changelog

### 0.1.0 (2016-05-19)

First release

### 0.1.1 (2016-05-20)

Minor changes
