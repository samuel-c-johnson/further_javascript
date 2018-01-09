(function(exports) {




    createHtmlString = function(noteList) {
      var text = []
      for (i = 0; i < noteList.notes.length; i ++) {
        text.push(noteList.notes[i].text)
      }
      return "<ul><li><div>" + text.join("</div></li><li><div>") + "</div></li></ul>"
    }

  exports.createHtmlString = createHtmlString;
  })(this)
