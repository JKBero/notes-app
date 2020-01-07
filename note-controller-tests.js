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


// function testAppDiv() {
//
//   function NoteDouble(text) {
//     this._text = text;
//   }
//
//   NoteDouble.prototype = {
//     read: function() {
//       return this._text;
//     }
//   };
//
//   function NoteListDouble() {
//     this._list = []
//   };
//
//   NoteListDouble.prototype = {
//     newNote: function(text){
//       var note = new NoteDouble(text);
//       this._list.push(note);
//     },
//
//     view: function() {
//       return this._list;
//     }
//   };
//
//   window.onload = function() {
//     var noteList = new NoteList();
//     var noteController = new NoteController(noteList);
//     noteController.render();
//   };
//
//   const noteList = new NoteListDouble();
//   const noteController = new NoteController(noteList);
//   noteController.render();
//
//   const appDiv = document.getElementById("app");
//   const content = appDiv.innerHTML;
//   var expected = "<ul><li><div>Favourite drink: seltzer</div></li></ul>";
//   assert.eq(expected, content);
// };
//
// testAppDiv();
