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
              defaultValue: 'apple'
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
