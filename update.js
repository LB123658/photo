var updated = "yes";

if (window.location.href == ("https://lb123658.github.io/photo/")) {
    console.log("Online version");
} else {
  prompt();
}

function prompt() {
  if (updated == "no") {
    notify("You are using the downloaded version and an update is available. Download it <br><a href='https://lb123658.github.io/photo/start' target='_blank'>here</a>.");
  } else {
    console.log("Up to date");
  }
}
