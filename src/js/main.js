(function () {
  // execute example button
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

  // show github fork ribbon
  var content = document.querySelector('link[rel="import"]').import.querySelector('.github-fork-ribbon-wrapper');
  $(content).appendTo('body');

  // google analytics code
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-48432002-8', 'auto');
  ga('send', 'pageview');

})();