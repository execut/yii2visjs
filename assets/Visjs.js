$.widget('philippfrenzel.Visjs', {
    visjs: null,
    _create: function () {
        var t = this;
        if (typeof t.options.isRenderAfterLoad !== 'undefined' && t.options.isRenderAfterLoad) {
            t.render();
        }
    },
    render: function () {
        var t = this;
        if (t.visjs === null) {
            t.element.show();
            t.visjs = new vis[t.options['visualization']](t.element[0], t.options['items'], t.options['visjsOptions']);
        }

        t.visjs.stabilize();
    },
});