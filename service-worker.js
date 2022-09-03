self.addEventListener("periodicsync", (event) => {
  if (event.tag === "update-alco") {
    self.registration.showNotification("Alco Time !!!", {
      body: `Hi, You can continue drinknig`,
    });
  }
});
