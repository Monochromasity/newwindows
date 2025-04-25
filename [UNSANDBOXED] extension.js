// Name: New Windows
// ID: monowindows
// Description: Lets you open websites in new windows.
// By: Monochromasity

(function (Scratch) {
  "use strict";

  class NewWindows {
    getInfo() {
      return {
        id: 'monowindows',
        name: 'New Windows',
        blocks: [
          {
            opcode: 'openwebsite',
            blockType: Scratch.BlockType.COMMAND,
            text: 'open website [WEB] in new window with ID [ID], width [WIDTH], and height [HEIGHT]',
            arguments: {
              WEB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://penguinmod.com'
              },
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'myWindow'
              },
              WIDTH: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '400'
              },
              HEIGHT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '400'
              }
            }
          }
        ]
      };
    }

    openwebsite(args) {
      let web = args.WEB;
      id = args.ID;
      let width = args.WIDTH;
      let height = args.HEIGHT;
      let strstart = "width=";
      let str = strstart.concat(width, ", height=", height);
      this[id] = window.open(web, "", str);
    }
  }
  Scratch.extensions.register(new NewWindows());
})(Scratch);
