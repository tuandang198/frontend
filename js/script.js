$(function(){
    $('.product-list:eq(0)').show();
    $('.tab-list li').click(function() {
      $('.tab-list li').removeClass('active');
      $(this).addClass('active');
      var n = $('.tab-list li').index(this);
      $('.product-list').hide();
      $('.product-list:eq('+ n +')').fadeIn(300);
    });
  });
  $(document).ready(function(){
    $('.nav-icon').click(function (e) { 
      e.preventDefault();
      $('.navbar-option').addClass('active');
    });
    $('.navbar-option').click(function (e) { 
      e.preventDefault();
      $('.navbar-option').removeClass('active');
    });
  });