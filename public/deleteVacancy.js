const del = async id => {
  try {
    await fetch(`vac/${id}`, {
      method: "DELETE"
    });
    alert("Заявка удалена");
  } catch {}
};

document.querySelector("#del").addEventListener("click", e => {
  id = document.querySelector("#del").getAttribute("key");
  console.log(id);
  del(id);
  alert("Заявка удалена");
});
