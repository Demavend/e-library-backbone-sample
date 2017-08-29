(function() {
    App.Router = Backbone.Router.extend({
        routes: {
            '': 'index',
            'page/:id': 'page'
        },
        index: function() {},
        page: function(id) {
            if (page < id) {
                for (let i = 0; i < STEP; i++) {
                    let book = new App.Models.Book({
                        dataId: counter
                    });
                    library.add(book);
                    counter++;
                }
                let bookshelf = new App.Views.Bookshelf({
                    collection: library.slice(-STEP)
                });
                $('div.pagination').before(bookshelf.render().el);
                page = Number(id);
            } else {
                counter = counter - STEP * 2;
                for (let i = 0; i < STEP; i++) {
                    library.pop();
                    counter++;
                }
                let bookshelf = new App.Views.Bookshelf({
                    collection: library.slice(-STEP)
                });
                $('div.pagination').before(bookshelf.render().el);
                page = Number(id);
            }
        },
    });
    new App.Router();
    Backbone.history.start();
}());
