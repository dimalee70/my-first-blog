// Submit post on submit
$(document).ready(function(){
  console.log("hi");
  $('#post-form').submit(function(){
    var id = $('.comments_wall').attr('id')
    var str = $(this).serialize()
    $.ajax({
      type:'POST',
      data:str,
      success:function(html){          // post / comments / id
        $('.comments_wall').load('../comments/'+id)//post/10
        $('#id_author').val('')
        $('#id_text').val('')
        console.log($('#post-form').get(0));
        $('#post-form')[0].reset();
      }
    })
    return false;
  })
})
