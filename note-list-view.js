(function(exports) {
  function NoteListView(noteList) {
    this._noteList = noteList;
  };

  NoteListView.prototype = {
    view: function() {
      var list = this._noteList.view();
      var result = "<ul>";
      for (var i = 0; i < list.length; i++) {
        var text = list[i].read().slice(0, 20);
        var id = list[i].id
        result += `<li><a href='#notes/${id}' id='${id}'>${text}</a></li>`;
      }
      return result + "</ul>";
    }
  };

  exports.NoteListView = NoteListView;

})(this);
