(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return (root.AccurateTimer = factory(root));
        });
    } else {
        root.AccurateTimer = factory(root);
    }
}(this, function (root) {

var blob = new Blob([ "function tick(){delayed+=delay;var e=self.performance.now(),t=e-startedAt,d=t-delayed;self.postMessage(null),timeoutId=self.setTimeout(tick,delay-d)}var delay,startedAt,delayed,timeoutId=null;self.onmessage=function(e){delay=e.data,delay>0?(startedAt=self.performance.now(),delayed=0,timeoutId=self.setTimeout(tick,delay)):timeoutId&&(clearTimeout(timeoutId),timeoutId=null)};" ], { type: "application/javascript" });

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

    return AccurateTimer;
}));