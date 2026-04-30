let count = 0;

function increaseFollowers() {
  count = count + 1;

  document.getElementById("count").innerText = count;

  // Optional condition
  if (count === 10) {
    alert("You reached 10 followers!");
  }
}