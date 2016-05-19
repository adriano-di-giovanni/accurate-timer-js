# accurate-timer-js

An accurate javascript timer for the browser

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
