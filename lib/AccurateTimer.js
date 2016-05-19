function AccurateTimer(callback, delay) {
    this._callback = callback;
    this._delay = delay;

    var worker = this._worker = new Worker(URL.createObjectURL(blob));
    worker.onmessage = onmessage.bind(this);
}

AccurateTimer.prototype.start = function AccurateTimer_start() {
    this.stop();
    this._worker.postMessage(this._delay);
};

AccurateTimer.prototype.stop = function AccurateTimer_stop() {
    this._worker.postMessage(0);
};

function onmessage() {
    this._callback();
}
