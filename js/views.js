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
        counter = 0;
        $('.panel-group').remove();
        addBooks();
        if ($('div.btn-group').length < 1) {
            let pagination = new App.Views.Pagination;
            $('div.pagination').append(pagination.render().el);
        };
    },
    cleanAll: () => {
        counter = 0;
        library.reset()
        $('.panel-group').remove();
        $('.btn-group').remove();
    }
});
App.Views.Container = Backbone.View.extend({
    initialize: function() {},
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
    className: 'modal-dialog',
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
        this.collection.forEach((book) => {
            let view = new App.Views.Container({
                model: book
            });
            this.$el.append(view.render().el);
        }, this);
        return this;
    },
    events: {
        'click .openModal': 'showModal'
    },
    showModal: (e) => {
        let num = e.target.getAttribute('data-id');
        let modal = new App.Views.Modal({
            model: library.models[num]
        });
        $('#modal').html(modal.render().el);
        $('#modal').modal();
    }
});
App.Views.Pagination = Backbone.View.extend({
    tagName: 'div',
    className: 'btn-group',
    template: _.template(App.Templates.Pagination),
    initialize: function() {},
    render: function() {
        this.$el.html(this.template());
        return this;
    },
    events: {
        'click': 'pagination'
    },
    pagination: function(e) {
        const button = document.querySelector('button.disabled');
        if (e.target.getAttribute('data-id') === 'more') {
            addBooks();
        } else if (e.target.getAttribute('data-id') === 'next') {
            $('.panel-group').remove();
            if (button) button.setAttribute('class', 'btn btn-default');
            addBooks();
        } else {
            if (counter === 20) {
                $('#prev').addClass('disabled');
            }
            $('.panel-group').remove();
            remBooks();
        }
    }
});
