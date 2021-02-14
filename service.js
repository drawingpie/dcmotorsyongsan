$('#serviceform').submit(function(e) {

  var name = document.getElementById('name'),
      phone = document.getElementById('phone'),
      email = document.getElementById('email'),
      title = document.getElementById('title'),
      subject = document.getElementById('subject');

  if (!name.value | | !email.value | | !message.value) {
   alertify.error('please check your entries')
} else {
  $.ajax({
    url: "https://formspree.io/lje2003@naver.com",
    method: "POST",
    data: $(this).serialize(),
    dataType: "json"
});
  e.preventDefault()
  $(this).get(0).reset()alertify.success('Message sent')
}
});
