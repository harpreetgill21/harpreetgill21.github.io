$('.home').click(
  function(){
    $(this).addClass('hide')
    $('.selectitempage').removeClass('hide')
  }
)

  $('.selectitempage .show-batsignal').click(
    function(){
      $('.selectitempage').addClass('hide')
      $('.batsignalpage').removeClass('hide')
    }
)

$('.selectitempage .show-batmobile').click(
  function(){
    $('.selectitempage').addClass('hide')
    $('.batmobilepage').removeClass('hide')
  }
)

$('.selectitempage .show-batpod').click(
  function(){
    $('.selectitempage').addClass('hide')
    $('.batpodpage').removeClass('hide')
  }
)

$('.selectitempage .show-batarang').click(
  function(){
    $('.selectitempage').addClass('hide')
    $('.batarangpage').removeClass('hide')
  }
)






$('.btn-close').click(
  function(){
    $(this).closest('.batsignalpage').addClass('hide')
    $(this).closest('.batmobilepage').addClass('hide')
    $(this).closest('.batpodpage').addClass('hide')
    $(this).closest('.batarangpage').addClass('hide')
    $('.selectitempage').removeClass('hide')
  }
)
