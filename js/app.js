const STEP = 10;
let search = new App.Views.Search;
let library = new App.Collections.Library;
let counter = 0;
let page = 0;
$('div.container-fluid').append(search.render().el);
