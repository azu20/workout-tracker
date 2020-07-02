init();

async function init() {
  console.log("i'm init function", location.search);
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      console.log("found this workout");
      location.search = "?id=" + workout._id;
    } else {
      console.log("no workout found");
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

