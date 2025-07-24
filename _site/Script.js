function readMore(id) {
  alert('Opening full article #' + id + ' (this can be upgraded later)');
}

function submitForm(event) {
  event.preventDefault();
  alert('Thank you for contacting us!');
  return false;
}