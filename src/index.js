const $ = e => document.querySelector(e);
const md = markdownit();
var game = {
  set text(newText) {
    this._text = newText;
    this._updateText();
  },
  get text() {
    return this._text;
  },
  _updateText: function() {
    $("pre.game").innerHTML = md.render(this._text);
  },
  _text = "[if you see this something has gone horribly wrong]"
};
$.all = e => document.querySelectorAll(e);

// dom things
addEventListener("load", () => {
  $.all("span.buttons button").forEach(e => e.addEventListener("click", () => game.text = `**abc**  
lorem ipsum dolor sit amet
*test*`));
});
