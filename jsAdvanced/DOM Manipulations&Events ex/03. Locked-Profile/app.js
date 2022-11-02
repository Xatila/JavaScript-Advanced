function lockedProfile() {
  let userLock1 = document.getElementsByName("user1Locked")[0];
  let userUnlock1 = document.getElementsByName("user1Locked")[1];
  let userLock2 = document.getElementsByName("user2Locked")[0];
  let userUnlock2 = document.getElementsByName("user2Locked")[1];
  let userLock3 = document.getElementsByName("user3Locked")[0];
  let userUnlock3 = document.getElementsByName("user3Locked")[1];
  const button1 = document.getElementsByTagName("button")[0];
  const button2 = document.getElementsByTagName("button")[1];
  const button3 = document.getElementsByTagName("button")[2];
  let hiddenInfo1 = document.getElementById("user1HiddenFields");
  let hiddenInfo2 = document.getElementById("user2HiddenFields");
  let hiddenInfo3 = document.getElementById("user3HiddenFields");

  button1.addEventListener("click", () => {
    if (userUnlock1.checked) {
      if (button1.textContent == "Show more") {
        hiddenInfo1.style.display = "block";
        button1.textContent = "Hide it";
      } else {
        hiddenInfo1.style.display = "none";
        button1.textContent = "Show more";
      }
    }
  });
  button2.addEventListener("click", () => {
    if (userUnlock2.checked) {
      if (button2.textContent == "Show more") {
        hiddenInfo2.style.display = "block";
        button2.textContent = "Hide it";
      } else {
        hiddenInfo2.style.display = "none";
        button2.textContent = "Show more";
      }
    }
  });
  button3.addEventListener("click", () => {
    if (userUnlock3.checked) {
      if (button3.textContent == "Show more") {
        hiddenInfo3.style.display = "block";
        button3.textContent = "Hide it";
      } else {
        hiddenInfo3.style.display = "none";
        button3.textContent = "Show more";
      }
    }
  });
}
