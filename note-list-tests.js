function testCreateNote(content) {
  var noteList = new NoteList();
  noteList.newNote(content);
  actual = noteList.view()[0].read();
  assert.toInclude(content, actual);
}

testCreateNote("Hello World!");

function testViewList(content, content2) {
  var noteList = new NoteList();
  noteList.newNote(content);
  noteList.newNote(content2);
  assert.eq(2, noteList.view().length);
  assert.eq(content, noteList.view()[0].read());
  assert.eq(content2, noteList.view()[1].read());
}

testViewList("Hello World!", "2nd test");
