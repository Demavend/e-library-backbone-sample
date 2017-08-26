App.Views.Search = Backbone.View.extend({
    tagName: 'form',
    id: 'navbar-collapse',
    className: 'navbar-form collapse navbar-collapse navbar-right',
    template: _.template(App.Templates.Search),
    render: function() {
        this.$el.html(this.template());
        return this;
    },
    events: {
        'click #btnSearch': 'showBooks',
        'click #clean': 'cleanAll'
    },
    showBooks: () => {
        for (let i = 0; i < 10; i++) {
            let book = new App.Models.Book({
                id: i
            });
            library.add(book);
        }
        let bookshelf = new App.Views.Bookshelf({
            collection: library
        });
        $('body').append(bookshelf.render().el);
    },
    cleanAll: () => {
        $('.panel-group').remove();
    }
});
App.Views.Container = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    template: _.template(App.Templates.Book),
    tagName: 'div',
    className: 'panel panel-success',
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
});
App.Views.Modal = Backbone.View.extend({
    tagName: 'div',
    id: 'modal',
    className: 'modal fade',
    template: _.template(App.Templates.Modal),
    initialize: function(summary) {

        this.render(summary);
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
App.Views.Bookshelf = Backbone.View.extend({
    tagName: 'div',
    className: 'panel-group',
    initialize: function() {},
    render: function() {
        this.collection.forEach((book, i) => {
            let view = new App.Views.Container({
                model: book
            });
            this.$el.append(view.render().el);
        }, this);
        return this;
    },
    events: {
        'click .openModal': 'showModal',
    },
    showModal: (e) => {
        let num = e.target.getAttribute('data-id');
        console.log(library.models[num]);
        let modal = new App.Views.Modal({
            model: library.models[num]
        });
        $('body').append(modal.render().el);
        $('#modal').modal();
    }
});
