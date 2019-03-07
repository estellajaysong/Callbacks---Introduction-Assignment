var array = ["Alice", "Bob", "Waldo", "Winston"]

array.forEach(function (name, index) {
  if (name === "Waldo") {
    console.log("Found Waldo at index " + index + "!")
  }
})