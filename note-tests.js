function testReadNote(content) {
  var note = new Note(content);
  assert.eq(content, note.read());
}

testReadNote("Hello World!");
