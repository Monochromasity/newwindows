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
            text: 'open website [WEB] in new window with width [WIDTH] height [HEIGHT]',
            arguments: {
              WEB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://penguinmod.com'
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
      let width = args.WIDTH;
      let height = args.HEIGHT;
      let strstart = "width=";
      let str = strstart.concat(width, ", height=", height);
      window.open(web, "", str);
    }
  }
  Scratch.extensions.register(new NewWindows());
})(Scratch);
