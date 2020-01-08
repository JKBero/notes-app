(function(exports) {
  function NoteController(noteList) {
    noteList.newNote("Favourite drink: seltzer");
    noteList.newNote("Favourite chocolate: maltesers");
    this._noteList = noteList;
    this._listView = new NoteListView(this._noteList);
  };

  NoteController.prototype = {
    render: function(element = document.getElementById("app")) {
      element.innerHTML = this._listView.view();
      const noteList = this._noteList;

      // document.getElementById("text").addEventListener("submit", function(event) {
      //   event.preventDefault();
      //   console.log(event);
      //   createNewNote();
      // });
      //
      // function createNewNote() {
      //   element.innerHTML = "Tiger";
      // };

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
        element.innerHTML = noteView.render();
      };
    }
  };

  exports.NoteController = NoteController;
})(this);
