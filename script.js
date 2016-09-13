// When a mouse click occurs with the submit button, the "function (e)..." stops the 'submit' button from trying to 'submit a form'
$('.new-item-form--submit').on('click', function (e){
  e.preventDefault();

  // Turns the input field in a variable, and gives the value of the field
  var item = $('.new-item-form--name').val();

  // Adds the created items --> ${item} - to the section 'item-list', newest input on top
  $('.item-list').prepend(`<article class="items">${item}</article>`);


// After an item is submitted, this clears the input
  $('.new-item-form--name').val("");
})

// Disables submit button if there's no text in the input
