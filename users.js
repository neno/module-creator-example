const createModule = require('./create-module');

const Users = createModule({
  // Default options
  options: function() {
    return {
      listSel: '.list',
      inputSel: '.input',
      submitSel: '.submit',
      defaultUsers: []
    }
  },
  constructor({el, state, options}) {
    // Private Methods
    const users = [].concat(options.defaultUsers)

    // cache DOM elements
    const usersList = el.querySelector(options.listSel);
    const input = el.querySelector(options.inputSel);
    const submit = el.querySelector(options.submitSel);

    function render() {
      users.forEach(function(user) {
        addUserToDOM(user);
      });
    }
    
    function addUserToDOM(user) {
      const node = document.createElement('li');
      const text = document.createTextNode(user);
      node.appendChild(text);
      usersList.appendChild(node);
    }
    
    function addUser() {
      const newUser = input.value.trim();
      if (newUser) {
        users.push(newUser);
        addUserToDOM(newUser);
        input.value = '';
      }
    }

    function bindEvents() {
      submit.addEventListener('click', addUser);
    }

    function unbindEvents() {
      submit.removeEventListener('click', addUser);
    }

    // Public Methods
    state.init = function() {
      bindEvents();
      render();
    }

    state.destroy = function() {
      // unbindEvents();
    }

    state.init();
    return state;
  }
});

module.exports = Users;
