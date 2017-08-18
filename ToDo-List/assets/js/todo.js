'use strict'

//toggling for done and undone items
$('li').on('click', 'li', function() {
  $(this).toggleClass('completed')
});

//using the span to help remove items
$('ul').on('click', 'span', function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//adding items to the list
$('input[type="text"').keypress(function(event){
  if(event.which === 13) {
    let $newToDo = $(this).val();
    $(this).val('');
    $('ul').append('<li><span>X</span> ' + $newToDo + '</li>')
  }
})
