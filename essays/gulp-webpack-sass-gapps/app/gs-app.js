function doGet(request) {
  return HtmlService.createTemplateFromFile('html_index')
    .evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}