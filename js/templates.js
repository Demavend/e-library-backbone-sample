window.App = {
    Models: {},
    Views: {},
    Collections: {},
    Templates: {}
};
App.Templates.Book = `<div class='panel-heading'><h1 class='text-center'><%=title%>` +
    `</h1></div><div class='panel-body'><div class='col-md-2'><img src='<%=img%>` +
    `'width='100%'  class='img-responsive'></img></div><div class='col-md-8'><h4 class='text-justify'><%=description%>` +
    `</h4></div><div class='col-md-2'><button class='btn btn-info openModal' data-id=<%=id%>` +
    `>Show<br>summary</button></div></div>`;
App.Templates.Search = `<input id='bookName' class='search-query' type='text' placeholder='Search'>
  <a id='btnSearch' class='btn btn-info'>Search</a>
  <a id='clean' class='btn btn-danger'>Clean</a>`;
App.Templates.Modal = `<div class='modal-dialog'><div class='modal-content'>
  <div class='modal-header'><h4 class='text-center text-primary'><%=title%></h4>
  <button class='close' data-dismiss='modal'>x</button>
  </div><div class='modal-body'>
  <div id='bodyModal' class='coll'>
  Author:  <%=author%>;<br>
  Title:  <%=title%>;<br>
  Category:  <%=category%>;<br>
  Publisher:  <%=publisher%>;<br>
  Date:  <%=date%>;
  </div></div><div class='modal-footer'>
  <button class='btn btn-danger' data-dismiss='modal'>Закрыть</button></div>
  </div></div>`;
  App.Templates.Head = `<h1 class='text-center'><%=title%></h1>`;
  App.Templates.Img = `<img src='<%=img%>' width='100%'  class='img-responsive'></img>`;
  App.Templates.Description = `<h4 class='text-justify'><%=description%></h4>`;
  App.Templates.Button = `<button class='btn btn-info openModal'>Show<br>summary</button>`;
