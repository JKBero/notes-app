function testSingleNoteView() {
  function NoteDouble() {};

  NoteDouble.prototype = {
    read: function() {
      return "Test";
    }
  };

  var note = new NoteDouble();
  var singleNote = new SingleNoteView(note);

  assert.eq("<div>Test</div>", singleNote.render());
};

testSingleNoteView();
