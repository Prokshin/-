const Create = async (title, description, text) => {
  console.log("[b");
  await fetch("/admin/project", {
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
    body: JSON.stringify({ title, description, text }) // тип данных в body должен соответвовать значению заголовка "Content-Type"
  });
  alert("Проект создан");
  window.location.replace("/admin/project");
};
console.log(document.getElementById("title  "));
document.getElementById("create-btn").addEventListener("click", e => {
  console.log("gggg");
  console.log(document.getElementById("title").value);
  console.log(document.getElementById("description").value);
  console.log(document.getElementById("text").value);

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const text = document.getElementById("text").value;
  Create(title, description, text);
});
