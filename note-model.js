(function(exports) {
  function Note(content) {
    this._content = content
  };

  Note.prototype = {
    read: function() {
    return this._content;
    }
  };

  exports.Note = Note;

})(this);
