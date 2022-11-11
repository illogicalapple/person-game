// go to ./map.js to edit the map

import map from "./map"

const $ = e => document.querySelector(e);
$.all = e => document.querySelectorAll(e);
const md = markdownit();
var game = {
  set text(newText) {
    this._text = newText;
    this._updateText();
  },
  get text() {
    return this._text;
  },
  at: "[[root]]",
  render: function(tree) {
    const listener = function listener(event) {
      this.render(tree.buttons[event.target.dataset.to]);
    }
    this.text = tree.text;
    if(tree.name) {
      this.at = tree.name
    }
    if(this._buttons.length > 0) {
      this._buttons.forEach(e => {
        e.removeEventListener("click", listener);
        e.remove();
      });
    }
    this._buttons = [];
    for(let name in tree.buttons) {
      let button = document.createElement("button");
      button.dataset.to = name;
      button.innerText = name;
      $("span.buttons").append(button);
      button.addEventListener("click", listener);
      this._buttons.push(button);
    }
  },
  _updateText: function() {
    $("pre.game").innerHTML = md.render(this._text);
  },
  _text: "[if you see this something has gone horribly wrong]",
  _buttons: []
};

// dom things
addEventListener("load", () => {
  game.render(map);
});
