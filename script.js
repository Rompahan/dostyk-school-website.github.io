let login = document.querySelector("#login");
let password = document.querySelector("#password");
let check = document.querySelector("#check");
let users = {};

function User(login, password) {
  this.login = login;
  this.password = password;
}

function createId(users) {
  return Object.keys(users).length;
}

chock.addEventListener("click", () => {
  const loginUser = login.value;
  const passwordUser = password.value;

  const user = new User(loginUser, passwordUser);

  const userId = "User" + createId(users);
  users[userId] = user;

  console.log(users);

  alert(`${loginUser}, Вы успешно прошли регистрацию!`);
});
