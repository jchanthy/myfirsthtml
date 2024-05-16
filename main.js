function typeWriter(elementId, text, delay) {
  // Get the element by its ID
  const element = document.getElementById(elementId);

  // Initialize the index to 0
  let index = 0;

  // Function to type the next character
  function type() {
    // If the index is less than the length of the text
    if (index < text.length) {
      // Set the text to the current character
      element.textContent += text.charAt(index);

      // Increment the index
      index++;

      // Delay the next character
      setTimeout(type, delay);
    } else {
        setTimeout(deleteText, 2000);
    }
  }
  function deleteText() {
    if (index > 0) {
      element.textContent = text.substring(0, index - 1);
      index--;
      setTimeout(deleteText, delay);
    } else {
      setTimeout(type, 2000);
    }
  }

  // Start typing
  type();
}
typeWriter("hello", 'Hello World!', 100);
