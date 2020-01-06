function testCreateNote(content) {
  var noteList = new NoteList();
  noteList.newNote(content);
  actual = noteList._list[0].read()
  assert.toInclude(content, actual);
}

testCreateNote("Hello World!");
