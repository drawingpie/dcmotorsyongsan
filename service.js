$('#contact-form').submit(funtion(e) {
  var name = document.getElementById('inputName'),
  var email= document.getElementById('inputEmail'),
  var message= document.getElementById('inputMessage');

  if (!name.value | | !email.value | | !message.value) {
   alertify.error('please check your entries')
} else {
  $.ajax({
    url: "https://formspree.io/you@email.com",
    method: "POST",
    data: $(this).serialize(),
dataType: "json"
});
  e.preventDefault()
  $(this).get(0).reset()alertify.success('Message sent')
}
})
