$(window).on('scroll', function() {
  var winScroll = $(this).scrollTop();

  $('.star').css({
    'transform': 'translate(-' + winScroll / 2 + '%)'
  });
  $('.moon').css({
    'transform': 'translateY(-' + winScroll / 6.5 + '%)'
  });
    $('.headline').css({
    'transform': 'translate(+' + winScroll / 8 + '%)'
  });
});