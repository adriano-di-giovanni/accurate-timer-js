(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return (root.AccurateTimer = factory(root));
        });
    } else {
        root.AccurateTimer = factory(root);
    }
}(this, function (root) {
