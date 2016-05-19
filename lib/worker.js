var delay;
var startedAt;
var delayed;
var timeoutId = null;

function tick() {
    delayed += delay;
    var tickedAt = self.performance.now();
    var elapsed = tickedAt - startedAt;
    var drifted = elapsed - delayed;
    self.postMessage(null);
    timeoutId = self.setTimeout(tick, delay - drifted);
}

self.onmessage = function (event) {
    delay = event.data;

    if (delay > 0) {
        startedAt = self.performance.now();
        delayed = 0;
        timeoutId = self.setTimeout(tick, delay);
    } else {
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
    }
};
