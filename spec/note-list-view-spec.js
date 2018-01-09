(function(exports) {
  function testCreateHtmlString(noteList) {

    var noteList = new NoteList();
    var note = new Note('Pesto rules');
    var note2 = new Note('Only with pasta');

    noteList.addNote(note)
    noteList.addNote(note2)
    console.log(createHtmlString(noteList))
    console.log(noteList)
    assert.isTrue(createHtmlString(noteList) === "<ul><li><div>Pesto rules</div></li><li><div>Only with pasta</div></li></ul>")

    }

  testCreateHtmlString();
})(this);
