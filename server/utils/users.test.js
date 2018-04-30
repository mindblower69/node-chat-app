const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    },
    {
      id: '2',
      name: 'Jane',
      room: 'React Course'
    },
    {
      id: '3',
      name: 'Gian',
      room: 'Node Course'
    }];

  });
  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'JC',
      room: 'Room A'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userID = '1';
    var user = users.removeUser(userID);

    expect(user.id).toBe(userID);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userID = '4';
    var user = users.removeUser(userID);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);

  });

  it('should find a user', () => {
    var userID = '1'
    var user = users.getUser(userID);
    expect(user.id).toBe(userID);
    expect(user).toInclude({id: '1', name: 'Mike', room:'Node Course'});
  });

  it('should not find a user', () => {
    var userID = '4'
    var user = users.getUser(userID);

    expect(user).toNotExist;
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Gian']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jane']);
  });

});
