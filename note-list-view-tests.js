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
  expected = "<ul><li><div>Favourite food: pesto</div></li></ul>"
  assert.eq(expected, listView.view());
}

testOneNoteView();

function testSeveralNotesView() {
  var noteList = new NoteList();
  noteList.newNote("Favourite food: pesto");
  noteList.newNote("Favourite drink: seltzer");
  noteList.newNote("Favourite chocolate: maltesers");

  var listView = new NoteListView(noteList);
  expected = "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li><li><div>Favourite chocolate: maltesers</div></li></ul>"
  assert.eq(expected, listView.view());
}

testSeveralNotesView();
