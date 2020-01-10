(function(exports) {
  function NoteController(noteList) {
    this._noteList = noteList;
    this._listView = new NoteListView(this._noteList);
  };

  NoteController.prototype = {
    render: function(element = document.getElementById("app")) {
      var self = this;
      element.innerHTML = self._listView.view();

      window.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Note added!");
        var text = event.target[0]['value'];
        self._noteList.newNote(text);
        self._listView = new NoteListView(self._noteList);
        element.innerHTML = self._listView.view();
      });

      window.addEventListener("hashchange", showNote);

      function showNote() {
        var id = window.location.hash.split("#notes/")[1];
        var note = self._noteList.view()[id];
        var noteView = new SingleNoteView(note);
        element.innerHTML = noteView.render();
        document.getElementById("text").style.display='none';
      };
    }
  };

  exports.NoteController = NoteController;
})(this);
