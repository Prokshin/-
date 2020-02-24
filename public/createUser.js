const Create = async (name, family, position, description, email, password) => {
  console.log("[b");
  await fetch("/admin/user", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify({
      name,
      family,
      position,
      description,
      email,
      password
    }) // тип данных в body должен соответвовать значению заголовка "Content-Type"
  });
  alert("Участник добавлен");
  window.location.replace("/admin");
};

document.querySelector(".form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const family = document.getElementById("family").value;
  const position = document.getElementById("position").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  Create(name, family, position, description, email, password);
});
