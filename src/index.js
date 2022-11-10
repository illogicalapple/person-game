const $ = e => document.querySelector(e);
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

// dom things
addEventListener("load", () => {
  $("span.buttons button").addEventListener("click", () => game.text = `**abc**  
lorem ipsum dolor sit amet
*test*`);
});
