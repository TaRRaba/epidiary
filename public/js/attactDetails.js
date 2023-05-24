const attackInfoDiv = document.querySelector(".attackInfoDiv");

attackInfoDiv?.addEventListener("click", (event) => {
  if (event.target.dataset.back) {
    window.location = "/";
  }

  if (event.target.dataset.backDoc) {
    window.location = "/patientDetails";
  }
});
