// Name: Example
// ID: replitexamplejs
// Description: Example extension for GitHub's "TW/PM Extension Template" (template by Monochromasity). (<--- remove this bit, dont remove this bit --->) Made using the TW/PM Extension Template by Monochromasity on GitHub.
// By: You :)

(function (Scratch) {
  "use strict";

  class ExampleExtension {
    getInfo() {
      return {
        id: 'replitexamplejs',
        name: 'Example',
        blocks: [
          {
            opcode: 'example',
            blockType: Scratch.BlockType.REPORTER,
            text: 'join [ONE] [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple '
              },
              TWO: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'banana'
              }
            }
          }
        ]
      };
    }

    example(args) {
      let one = args.ONE
      let two = args.TWO
      let join = one.concat(two)
      return join;
    }
  }
  Scratch.extensions.register(new ExampleExtension());
})(Scratch);
