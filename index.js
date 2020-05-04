const Users = require('./users');

document.querySelectorAll('[data-module="users"]').forEach(function(el) {
  const usersInstance = new Users(el);
});

document.querySelectorAll('[data-module="musicians"]').forEach(function(el) {
  const options = {
    listSel: '.musicians-list',
    inputSel: '.name',
    submitSel: '.add',
    defaultUsers: ['Josip', 'Neno']
  };
  const musiciansInstance = new Users(el, options);
});
