(function(exports) {
  function NoteListView(noteList) {
    this._noteList = noteList;
  };

  NoteListView.prototype = {
    view: function() {
      var list = this._noteList.view();
      var result = "<ul>";
      for (var i = 0; i < list.length; i++) {
        result += `<li><div>${list[i].read()}</div></li>`;
      }
      return result + "</ul>";
    }
  };

  exports.NoteListView = NoteListView;

})(this);
