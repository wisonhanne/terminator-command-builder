
# Terminator Command Builder

The Terminator Command Builder is a JavaScript library that provides utilities for constructing command strings in a structured manner. It allows you to easily build complex command strings by chaining methods to add string literals, regular expressions, or transformation functions.

## Installation

You can install the terminator-command-builder library via npm:

```bash
npm install terminator-command-builder
```

## Usage

Here's how you can use the library to construct command strings:

```javascript
const CommandBuilder = require('terminator-command-builder');

const command = new CommandBuilder()
  .literal('echo ')
  .transform(input => input.toUpperCase())
  .literal(' ')
  .regex(/hello/)
  .build();

console.log(command); // Output: echo HELLO hello
```

## API

### `CommandBuilder()`

Creates a new instance of the CommandBuilder.

### `literal(part: string): CommandBuilder`

Adds a string literal to the command.

- `part`: The string part to add.

### `regex(regex: RegExp): CommandBuilder`

Adds a regular expression to match part of the command.

- `regex`: The regular expression to match.

### `transform(transformer: function): CommandBuilder`

Adds a function to transform input string.

- `transformer`: The function to transform input.

### `build(): string`

Builds the final command string.

Returns:
- `string`: The constructed command string.

## Example

```javascript
const command = new CommandBuilder()
  .literal('echo ')
  .transform(input => input.toUpperCase())
  .literal(' ')
  .regex(/hello/)
  .build();

console.log(command); // Output: echo HELLO hello
```

## License

This library is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
