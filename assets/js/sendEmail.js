function sendMail(params) {
  let tempParams = {
      from_name:document.getElementById("fromName").value,
      from_email:document.getElementById("fromEmail").value,
      message:document.getElementById("msg").value,
  };

  emailjs.send('service_uthnj0b', 'template_xuy3o6m', tempParams)
  .then(function(res){
    console.log("success", res.status)
    alert("Message Sent Successfully!")
  })
}
