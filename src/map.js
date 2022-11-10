// ignore ignore ignore ignore

class Scene {
  constructor(name, text, buttons) {
    this.name = name;
    this.text = text;
    this.buttons = buttons;
  }
}

const s = (...args) => new Scene(...args);

// hello, you are **contributing**. 
// scene (s) function:
// first argument: name (leave as null if the scene isn't referenced, there is a nevermind button in every scene)
// second argument: text (self-explanatory, but use <br>s for line breaks, *not* "  \n")
// third argument: children (object: {"investigate rock": s(...), ...}, leave as null if there are no children)
// discord illogicalapple#7016 if i have to add any features (text input, etc., pictures WILL BE ADDED LATER)

// story/lore/whatever:
// the world you are in is called derptopia
// 
// 
// 
// 
// 
// 
// 
// (add more lore ^^)

const map = s("[[root]]", "**person game**<br>Hello, and welcome to the official worst game in the world!<br>What would you like to do?", {
  "materialize": s("forest", "You materialize in a **forest**.<br>There are trees everywhere; how did they get there?<br>What do you do?", {
    "look around": s(null, "You look around.<br>You see:<br>**a tree with a vine in it<br>a tree<br>a hole<br>a bunch of rocks**<br><br>Would you like to investigate?", {
      "the tree with a vine in it": s(null, "lorem ipsum", null), // add things later (todo)
      "a tree": s(null, "lorem ipsum", null),
      "a hole": s(null, "lorem ipsum", null),
      "a bunch of rocks": s(null, "lorem ipsum", null)
    })
  })
});

export default map;
