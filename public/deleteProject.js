const del = async id => {
  try {
    await fetch(`project/${id}`, {
      method: "DELETE"
    });
    alert("Заявка удалена");
    window.location.reload();
  } catch {}
};
