var currentFile = window.location.pathname;
$('form[name="form-referrals"]').validate({
  submitHandler: function(form) {
    var data = $('form[name="form-referrals"]').serialize();
    $.ajax({
      url: 'http://integrations.blick.mx/more/contact/referrals/',
      method: 'POST',
      data: data
    }).done(function(data) {
      if (parseInt(data) === 1) {
        alertify.logPosition("bottom right");
        if (currentFile === '/' || currentFile === '/index.html'  || currentFile === '/portfolio.html' || currentFile === '/services.html' || currentFile === '/careers.html' || currentFile === '/team.html' || currentFile === '/referrals.html' || currentFile === '/quote.html' || currentFile === '/contact.html'){
          alertify.success("Thanks for contacting us!");
        }else if (currentFile === '/index-es.html' || currentFile === '/portfolio-es.html' || currentFile === '/services-es.html' || currentFile === '/careers-es.html' || currentFile === '/team-es.html' || currentFile === '/referrals-es.html' || currentFile === '/quote-es.html' || currentFile === '/contact-es.html'){
          alertify.success("¡Gracias por contactarnos!");
        }
        $('form[name="form-referrals"]')[0].reset();
      }
    });
  },
  invalidHandler: function(event, validator) {
    var errors = validator.numberOfInvalids();
    alertify.logPosition("bottom right");
    if (currentFile === '/' || currentFile === '/index.html'  || currentFile === '/portfolio.html' || currentFile === '/services.html' || currentFile === '/careers.html' || currentFile === '/team.html' || currentFile === '/referrals.html' || currentFile === '/quote.html' || currentFile === '/contact.html'){
      alertify.error("Verify your information, you have " + errors + " errors.");
    }else if (currentFile === '/index-es.html' || currentFile === '/portfolio-es.html' || currentFile === '/services-es.html' || currentFile === '/careers-es.html' || currentFile === '/team-es.html' || currentFile === '/referrals-es.html' || currentFile === '/quote-es.html' || currentFile === '/contact-es.html'){
      alertify.error("Verifica tu infomación, tienes " + errors + " errores.");
    }
  },
  rules:('add', {
    nameReferrals: {
      required: true,
      regex: /^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/
    },
    messageReferrals: {
      required: true
    },
    mailReferrals: {
      required: true,
      // Specify that email should be validated
      // by the built-in "email" rule
      email: true
    },
    phoneReferrals: {
      required: true
    }
  })
});