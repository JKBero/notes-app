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
        result += `<li><div>${text}</div></li>`;
      }
      return result + "</ul>";
    }
  };

  exports.NoteListView = NoteListView;

})(this);
