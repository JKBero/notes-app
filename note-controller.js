window.onload = function() {
  const noteList = new NoteList();
  const noteController = new NoteController(noteList);
  noteController.render();
};

(function(exports) {
  function NoteController(noteList) {
    noteList.newNote("Favourite drink: seltzer");
    noteList.newNote("Favourite chocolate: maltesers");
    this._noteList = noteList;
    this._listView = new NoteListView(this._noteList);
  };

  NoteController.prototype = {
    render: function() {
      const appDiv = document.getElementById("app");
      appDiv.innerHTML = this._listView.view();
      const noteList = this._noteList;

      window.addEventListener("hashchange", showNoteForCurrentPage);

      function showNoteForCurrentPage() {
        showNote(getNoteFromUrl(window.location));
      };

      function getNoteFromUrl(location) {
        return location.hash.split("#notes/")[1];
      };

      function showNote(id) {
        const note = noteList.view()[id];
        const noteView = new SingleNoteView(note);
        appDiv.innerHTML = noteView.render();
      };
    }
  };

  exports.NoteController = NoteController;
})(this);
