function testCreateNote(content) {
  var noteList = new NoteList();
  noteList.newNote(content);
  assert.toInclude(content, noteList.view()[0].read());

  var expected = (noteList.view().length - 1);
  var actual = noteList.view()[0].id;
  assert.eq(expected, actual);
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
