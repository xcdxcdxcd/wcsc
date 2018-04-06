function signin(a,b){
  $.ajax({  
            url:"signin.php",  
            type:"post",  
            dataType:"json",  
            data:{  
                id:a,
                pwd:b
            },  
            success:function(response){  
               if (respones=='succ'){
                alert('登陆成功！');
                window.location='index.html';
              }else{
                alert('登陆失败！密码错误或用户名不存在');
              }
            },  
            error:function() {  
            }  
        });  
  
}

function gao(){
  if ($('#a').val()=='' || $('#b').val()==''){
    alert('用户名或密码不能为空!');
  }else{
    signin($('#a').val(),$('#b').val());
  }
  
}