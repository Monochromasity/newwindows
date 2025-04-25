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
            opcode: 'openwindow',
            blockType: Scratch.BlockType.COMMAND,
            text: 'open website [WEB] in new window with ID [ID] width [WIDTH] and height [HEIGHT]',
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
          },
          {
            opcode: 'closewithid',
            blockType: Scratch.BlockType.COMMAND,
            text: 'close window with id [ID]',
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'myWindow'
              }
            }
          }
        ]
      };
    }

    openwebsite(args) {
      let web = args.WEB;
      let id = args.ID;
      let width = args.WIDTH;
      let height = args.HEIGHT;
      let strstart = "width=";
      let str = strstart.concat(width, ", height=", height);
      eval("newwindows-" + id + " = window.open(web, '', str);");
    }
    closewithid(args) {
      let id = args.ID;
      eval("newwindows-" + id + ".close();");
    }
  }
  Scratch.extensions.register(new NewWindows());
})(Scratch);
