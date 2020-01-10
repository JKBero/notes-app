function testZeroNotesView() {
  var noteList = new NoteList();
  var listView = new NoteListView(noteList);
  assert.eq("<ul></ul>", listView.view());
}

testZeroNotesView();

function testOneNoteView() {
  var noteList = new NoteList();
  noteList.newNote("Favourite food: pesto");

  var listView = new NoteListView(noteList);
  var expected = "<ul><li><a href='#notes/0' id='0'>Favourite food: pest</a></li></ul>"
  assert.eq(expected, listView.view());
}

testOneNoteView();

function testSeveralNotesView() {
  var noteList = new NoteList();
  noteList.newNote("Favourite food: pesto");
  noteList.newNote("Favourite drink: seltzer");
  noteList.newNote("Favourite chocolate: maltesers");

  var listView = new NoteListView(noteList);
  var expected = "<ul><li><a href='#notes/0' id='0'>Favourite food: pest</a></li><li><a href='#notes/1' id='1'>Favourite drink: sel</a></li><li><a href='#notes/2' id='2'>Favourite chocolate:</a></li></ul>"
  assert.eq(expected, listView.view());
}

testSeveralNotesView();
