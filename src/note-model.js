(function(exports) {
function Note(string) {
  this.text = string
}


Note.prototype.getNoteText = function() {
  return this.text
};

exports.Note = Note;
})(this)
