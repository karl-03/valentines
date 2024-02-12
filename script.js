$(document).ready(function () {
  var envelope = $('#envelope');

  envelope.click(function () {
    if (!envelope.hasClass('open')) {
      openEnvelope();
    } else {
      closeEnvelope();
    }
  });

  function openEnvelope() {
    envelope.addClass('open').removeClass('close');
  }

  function closeEnvelope() {
    envelope.addClass('close').removeClass('open');
  }
});
