window.App = {
    Models: {},
    Views: {},
    Collections: {},
    Templates: {}
};
App.Templates.Book = `<div class='panel-heading'><h1 class='text-center'><%=title%>` +
    `</h1></div><div class='panel-body'><div class='col-md-2'><img src='<%=img%>` +
    `'width='100%'  class='img-responsive'></img></div><div class='col-md-8'><h4 class='text-justify'><%=description%>` +
    `</h4></div><div class='col-md-2'><button class='btn btn-info openModal'` +
    `>Show<br>summary</button></div></div>`;
App.Templates.Search = `<input id="bookName" class="search-query" type="text" placeholder="Search">
<a id="btnSearch" class="btn btn-info">Search</a>
<a id="clean" class="btn btn-danger">Clean</a>`;
App.Models.Search = Backbone.Model.extend({});
App.Models.Book = Backbone.Model.extend({
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
App.Collections.Library = Backbone.Collection.extend({
    model: App.Models.Book
});
App.Views.Search = Backbone.View.extend({
    tagName: 'form',
    id:'navbar-collapse',
    className: 'navbar-form collapse navbar-collapse navbar-right',
    template: _.template(App.Templates.Search),
    render: function() {        
        this.$el.html(this.template());
        return this;
    },
});
App.Views.Container = Backbone.View.extend({
    initialize: function() {},
    template: _.template(App.Templates.Book),
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
App.Views.Bookshelf = Backbone.View.extend({
    tagName: 'div',
    className: 'panel-group',
    initialize: function() {},
    render: function() {
        this.collection.forEach((book) => {
            let view = new App.Views.Container({
                model: book
            });
            this.$el.append(view.render().el);
        }, this);
        return this;
    }
});
let search = new App.Views.Search;
$('div.container-fluid').append(search.render().el);


let library = [];
for (let i = 0; i < 10; i++) {
    let book = new App.Models.Book;
    library.push(book);
}
let bookshelf = new App.Views.Bookshelf({
    collection: library
});
//$('body').append(bookshelf.render().el);
