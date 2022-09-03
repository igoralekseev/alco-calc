self.addEventListener("periodicsync", (event) => {
  if (event.tag === "update-alco") {
    self.registration.showNotification("Wake Time !!!", {
      body: `Hi, Good Morning`,
    });
  }
});
