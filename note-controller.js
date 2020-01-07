window.onload = function() {
  const noteList = new NoteList();
  const noteController = new NoteController(noteList);
  noteController.render();
};

(function(exports) {
  function NoteController(noteList) {
    this._noteList = noteList;
    this._list = this._noteList.newNote("Favourite drink: seltzer");
    this._listView = new NoteListView(this._noteList);
  };

  NoteController.prototype = {
    render: function() {
      const appDiv = document.getElementById("app");
      appDiv.innerHTML = this._listView.view();
    }
  };

  exports.NoteController = NoteController;
})(this);
