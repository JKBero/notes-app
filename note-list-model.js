(function(exports) {
  function NoteList() {
    this._list = []
  }

  NoteList.prototype = {
    newNote: function(text) {
      var note = new Note(text);
      this._list.push(note);
    }
  }

  exports.NoteList = NoteList;

})(this);
