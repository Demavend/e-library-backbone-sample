let Book = Backbone.Model.extend({
    defaults: {
        title: 'Top secret (apparently).',
        author: 'Your name could be here.',
        category: 'Not like everyone else.',
        publisher: 'Did not pay for advertising.',
        date: 'It was a long time ago in a galaxy far far away...',
        description: 'If you read this we will have to kill you. Enjoy!',
        img: 'i/Cover.gif'
    }
});
let template = `<div class='panel-heading'><h1 class='text-center'><%=title%>` +
    `</h1></div><div class='panel-body'><div class='col-md-2'><img src='<%=img%>` +
    `'width='100%'  class='img-responsive'></img></div><div class='col-md-8'><h4 class='text-justify'><%=description%>` +
    `</h4></div><div class='col-md-2'><button class='btn btn-info openModal'` +
    `>Show<br>summary</button></div></div>`;

let BookCollection = Backbone.Collection.extend({
    model: Book
});
let Library = Backbone.Collection.extend({
    model: Book
});
let ContainerView = Backbone.View.extend({
    initialize: function() {},
    template: _.template(template),
    tagName: 'div',
    className: 'panel panel-success',
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
});
let BookshelfView = Backbone.View.extend({
    tagName: 'div',
    className: 'panel-group',
    initialize: function() {},
    render: function() {
        this.collection.forEach((book) => {
            let View = new ContainerView({
                model: book
            });
            this.$el.append(View.render().el);
        }, this);
        return this;
    }

});


let library = [];
for (let i = 0; i < 10; i++) {
    let book = new Book;
    library.push(book);
}
let bookshelf = new BookshelfView({
    collection: library
});
$('body').append(bookshelf.render().el);
