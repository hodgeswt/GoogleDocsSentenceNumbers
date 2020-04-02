function onOpen() {
  var ui = DocumentApp.getUi();
  ui.createMenu('Sentence Number')
      .addItem('Parentheses Form', 'parentheses')
      .addItem('Number Form', 'number')
      .addToUi();
}

function parentheses() {
  var body = DocumentApp.getActiveDocument().getBody();
  var paragraphs = body.getParagraphs();
  var i = 0;
  var sentenceNumber = 0;
  while (i < paragraphs.length) {
    var paragraph = paragraphs[i];
    var text = paragraph.editAsText().getText();
    var split = text.split(/(?<=\.)/);
    var a = sentenceNumber;
    var newParagraph = "";
    while (a < split.length + sentenceNumber) {
      var sentence = split[a - sentenceNumber];
      sentence = " (" + (a + 1).toString() + ") "+ sentence;
      newParagraph = newParagraph + sentence;
      a++;
    }
    sentenceNumber = a;
    paragraph.setText(newParagraph);
    i++;
  }
}

function number() {
  var body = DocumentApp.getActiveDocument().getBody();
  var paragraphs = body.getParagraphs();
  var i = 0;
  var sentenceNumber = 0;
  while (i < paragraphs.length) {
    var paragraph = paragraphs[i];
    var text = paragraph.editAsText().getText();
    var split = text.split(/(?<=\.)/);
    var a = sentenceNumber;
    var newParagraph = "";
    while (a < split.length + sentenceNumber) {
      var sentence = split[a - sentenceNumber];
      sentence = " " + (a + 1).toString() + " " + sentence;
      newParagraph = newParagraph + sentence;
      a++;
    }
    sentenceNumber = a;
    paragraph.setText(newParagraph);
    i++;
  }
}
