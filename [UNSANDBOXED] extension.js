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
            text: 'open website [WEB] in new window with ID: [ID] width: [WIDTH] height: [HEIGHT] distance from left: [LEFT] distance from top: [TOP] fullscreen (Internet Explorer): [FULLSCREEN]',
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
              },
              LEFT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              TOP: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              FULLSCREEN: {
                type: Scratch.ArgumentType.STRING,
                menu: 'FULLSCREEN',
                defaultValue: 'no'
              },
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
        ],
        menus: {
          FULLSCREEN: {
            acceptReporters: true,
            items: ['yes', 'no']
          }
        }
      };
    }

    openwindow(args) {
      let web = args.WEB;
      let iduf = args.ID;
      let id = iduf.toLowerCase();
      let width = args.WIDTH;
      let height = args.HEIGHT;
      let strstart = "width=";
      let full = args.FULLSCREEN;
      let left = Math.abs(Number(args.LEFT));
      let top = Math.abs(Number(args.TOP));
      let str = strstart.concat(width, ", height=", height, "fullscreen=", full, "left=", left, "top=", top);
      let name = "windows" + id
      this[name] = window.open(web, '', str);
    }
    closewithid(args) {
      let iduf = args.ID;
      let id = iduf.toLowerCase();
      let name = "windows" + id
      this[name].close();
    }
  }
  Scratch.extensions.register(new NewWindows());
})(Scratch);
