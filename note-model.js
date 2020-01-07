(function(exports) {
  function Note(text) {
    this._text = text;
  };

  Note.prototype = {
    read: function() {
      return this._text;
    }
  };

  exports.Note = Note;

})(this);
