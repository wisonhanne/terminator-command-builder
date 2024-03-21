const _ = require('lodash');
const escapeStringRegexp = require('escape-string-regexp');

class CommandBuilder {
  constructor() {
    this.parts = [];
  }

  /**
   * Add a string literal to the command.
   * @param {string} part The string part to add.
   * @returns {CommandBuilder} This CommandBuilder instance.
   */
  literal(part) {
    this.parts.push(part);
    return this;
  }

  /**
   * Add a regular expression to match part of the command.
   * @param {RegExp} regex The regular expression to match.
   * @returns {CommandBuilder} This CommandBuilder instance.
   */
  regex(regex) {
    this.parts.push(regex);
    return this;
  }

  /**
   * Add a function to transform input string.
   * @param {function} transformer The function to transform input.
   * @returns {CommandBuilder} This CommandBuilder instance.
   */
  transform(transformer) {
    this.parts.push(transformer);
    return this;
  }

  /**
   * Build the final command string.
   * @returns {string} The constructed command string.
   */
  build() {
    return this.parts.map(part => {
      if (typeof part === 'string') {
        return part;
      } else if (part instanceof RegExp) {
        return escapeStringRegexp(part.source);
      } else {
        return part('');
      }
    }).join('');
  }
}

module.exports = CommandBuilder;
