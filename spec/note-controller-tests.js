function testNoteController() {

  function NoteListDouble() {};

  NoteListDouble.prototype = {
    newNote: function(){}
  };

  var noteList = new NoteListDouble();
  var noteController = new NoteController(noteList);

  assert.eq(noteList, noteController._noteList);
};

testNoteController();


function testAppDiv() {

  function NoteDouble(text) {
    this._text = text;
  }

  NoteDouble.prototype = {
    read: function() {
      return this._text;
    }
  };

  function NoteListDouble() {
    this._list = []
  };

  NoteListDouble.prototype = {
    newNote: function(text){
      var note = new NoteDouble(text);
      this._list.push(note);
    },

    view: function() {
      return this._list;
    }
  };

  function Element() {};

  Element.prototype = { innerHTML: function(){"something";} };

  const noteList = new NoteListDouble();
  const noteController = new NoteController(noteList);
  const element = new Element();

  noteController.render(element);
  const content = element.innerHTML;
  var expected = "<ul><li><a href='#notes/undefined' id='undefined'>Favourite drink: sel</a></li><li><a href='#notes/undefined' id='undefined'>Favourite chocolate:</a></li></ul>";
  assert.eq(expected, content);
};

testAppDiv();
