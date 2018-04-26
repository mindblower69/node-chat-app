var expect = require('expect');
var {generateMessage} = require('./message');


describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jo'
    var text = 'is gone'
    var message = generateMessage(from, text);
    //expect(message.from).toBe(from);
    //expect(message.text).toBe(text);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});//ES6
  });


});
