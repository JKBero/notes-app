// Mock of Note

function NoteDouble(text) {
  this._text = text;
};

NoteDouble.prototype = {
  read: function() {
    return this._text;
  }
};

// Mock of NoteList
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

const noteList = new NoteListDouble();

// Mock of element
function ElementDouble() {};

ElementDouble.prototype = { innerHTML: function(){"something";} };

const element = new ElementDouble();
const noteController = new NoteController(noteList);

// Test 1
function testNoteController() {
  assert.eq(noteList, noteController._noteList);
};

testNoteController();

// Test 2
function testLinkList() {
  noteController.render(element);
  const content = element.innerHTML;
  var expected = "<ul></ul>";
  assert.eq(expected, content);
};

testLinkList();

// Test 3
// Need to test for submit button click
