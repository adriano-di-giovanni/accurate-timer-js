describe('AccurateTimer', function () {
    var timer;
    it('should tick', function (done) {
        timer = new AccurateTimer(function () {
            this.stop();
            done();
        }, 1000);

        timer.start();
    });
});
