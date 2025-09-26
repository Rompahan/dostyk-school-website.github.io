document.getElementById("check").onclick = function () {
  let login = document.getElementById("login").value;
  let password = document.getElementById("password").value;

  if (login == "ryuma" && password == "rompahan") {
    alert("Welcome!");
    window.location.href =
      "file:///C:/Users/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C/Downloads/Telegram%20Desktop/dostyk%20school/Site%20which%20drop%20the%20brain/glavnyi.html";
  } else if (login == "ali agai" && password == "ryuma") {
    alert("Welcome!");
    window.location.href =
      "file:///D:/Users/%D0%A0%D0%B0%D0%BC%D0%B0%D0%B7%D0%B0%D0%BD/Desktop/Site%20which%20drop%20the%20brain/htmls/glavnyi.html";
  } else alert("Incorrect login or password!");
};
