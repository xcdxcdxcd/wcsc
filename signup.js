function signup(a,b,c,d,e,f,g){
    $.ajax({  
            url:"signup.php",  
            type:"post",  
            dataType:"json",  
            data:{  
                id:a,
                pwd:b,
                nm:c,
                it:d,
                ot:e,
                em:f,
                dp:g
            },  
            success:function(response){  
              if (response.responseText=='succ'){
                alert('注册成功！');
                window.location='index.html';
              }else{
                alert('注册失败！请重试！');
              }
            },  
            error:function(response) {  
            if (response.responseText=='succ'){
                alert('注册成功！');
                window.location='index.html';
              }else{
                alert('注册失败！请重试！');
              }
            }  
        }); 
  
}
function gao(){
  if ($('#a').val()=='' ||$('#b').val()=='' ||$('#c').val()=='' ||$('#d').val()=='' || $('#f').val()=='' ||$('#g').val()=='' ||$('#e').val()==''){
    alert('请填写全部信息!');
  }else{
    signup($('#a').val(),$('#b').val(),$('#c').val(),$('#d').val(),$('#e').val(),$('#f').val(),$('#g').val());
  }
  
}