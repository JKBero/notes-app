(function(exports) {
  function NoteList() {
    this._list = [];
  }

  NoteList.prototype = {
    newNote: function(text) {
      var note = new Note(text);
      this._list.push(note);
    },

    view: function() {
      return this._list;
    }
  };

  exports.NoteList = NoteList;

})(this);
