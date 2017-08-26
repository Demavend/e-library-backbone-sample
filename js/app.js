let search = new App.Views.Search;
let library = new App.Collections.Library;
let counter = 0;
let addBooks = () => {
    for (let i = 0; i < 10; i++) {
        let book = new App.Models.Book({
            dataId: counter
        });
        library.add(book);
        counter++;
        console.log(counter)
    }
    let bookshelf = new App.Views.Bookshelf({
        collection: library.slice(-10)
    });
    $('div.pagination').before(bookshelf.render().el);
};
let remBooks = () => {
    counter = counter - 20;
    for (let i = 0; i < 10; i++) {
        library.pop();
        counter++;
    }
    let bookshelf = new App.Views.Bookshelf({
        collection: library.slice(-10)
    });
    $('div.pagination').before(bookshelf.render().el);
};
$('div.container-fluid').append(search.render().el);
