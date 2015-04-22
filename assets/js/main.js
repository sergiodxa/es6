(function () {

  $('button[data-src]').on('click', function (e) {
    e.preventDefault();

    var src = $(this).data('src');

    $.ajax({
      url: src,
      type: 'GET',
      dataType: 'text'
    })
    .done(function(data) {
      eval(data);
    })
    .fail(function(e) {
      console.log(e);
      console.log('hubo un error al cargar el código de ejemplo');
    });

  });

})();