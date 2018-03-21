function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); 
  return null;
}
dept=['全部课程','政治经济学部','法学部',
'文化构想学部','文学部','教育学部','商学部',
'社会科学部','基干理工学部','创造理工学部',
'先进理工学部','人间科学部','体育科学部','国际教养学部','其他课程'];
$(document).ready(function(){
  ids=[];
  $('#keys').bind('keypress',function(event){ 
    if(event.keyCode == 13){
      jump(0);
    }
  });
  var d=getUrlParam('dept');
  var key=getUrlParam('keyword');
  choose(d);
  if (d==14){
    $('#deptimg').attr('src','./0.png');
  }else{
    $('#deptimg').attr('src','./'+d+'.png');
  }
  $('#tit').text(dept[d]);
  $('#keys').val(key)
  for (var i=0;i<15;i++){
  $('#dropdown-menu').append('<li role="presentation"><a style="cursor:pointer" role="menuitem" onclick="choose('+i+')">'+dept[i]+'</a></li>');
  }
  sret=search(d, key);
  loadpage(d, key, 0);
});
function jump(d){
  self.location='search.html?dept='+d+'&keyword='+$('#keys').val();
}
function choose(d){
  $('#srch-btn').click(function(){
    jump(d);
  });
  $('#keys').bind('keypress',function(event){ 
    if(event.keyCode == 13){
      jump(d);
    }
  });
  $('#dropdown-btn').html(dept[d]+'<span class="caret"></span>');
}
function loadpage(d, key, page){
  if (sret.length==0){
    $('#noresult').show();
    return;
  }
  for (var i=page*10;i<page*10+10&&i<sret.length;i++){
    $('#list').append('<div class="row" onclick="self.location='+"'"+'detail.html?dept='+d+'&id='+ids[i]+"'"+'" style="cursor:pointer;background-color:#595959;border-radius:5px;margin:0px 0px 15px 0px;">'+
    '<div class="col-sm-12" >'+
      '<br><span class="ft3"style="border-bottom-color:white;border-bottom-style:dotted;border-width: 3px;">'+sret[i][1]+'</span><br><br>'+
      '<span class="ft4">&nbsp;&nbsp学部:&nbsp'+sret[i][0]+'</span>'+
      '<span class="ft4">&nbsp;&nbsp学期:&nbsp'+sret[i][3]+'</span>'+
      '<span class="ft4">&nbsp;&nbsp讲师:&nbsp'+sret[i][2]+'</span><br><br>'+
    '</div></div>');
  }
  setpagers(page);
}
function changepage(page){
  var d=getUrlParam('dept');
  var key=getUrlParam('keyword');
  $('#pager').empty();
  $('#noresult').hide();
  $('#list').empty();
  loadpage(d, key, page);
  $("html,body").animate({scrollTop:0}, 500);
}
function search(d, k){
  var ret=[];
  for (var i=0;i<data.length;i++){

    if (d==14){
      if (data[i][0]=='文学文构合并'||data[i][0]=='商学研究科'||data[i][0]=='创造理工研究科'){  
        continue;
      }
      var flag=1;
      for (var x=1;x<14;x++){
        if (data[i][0]==dept[x]){
          flag=0;
          break;
        }
      }
      if (flag==0){
        continue; 
      }
    }else{
      if (d==0){
        
      }
      else if (d==3||d==4){
        if (data[i][0]!=dept[d]&&data[i][0]!='文学文构合并'){
          continue;
        }
      }else if (d==6){
        if (data[i][0]!=dept[d]&&data[i][0]!='商学研究科'){
          continue;
        }
      }
      else if (d==9){
        if (data[i][0]!=dept[d]&&data[i][0]!='创造理工研究科'){
          continue;
        }
      }else{
        if (data[i][0]!=dept[d]){
          continue;
        }
      }
    }
    if (k==''){
      ret.push(data[i]);
      ids.push(i);
    }else{
      var c=data[i][1];
      var p=0;
      for (var j=0;j<c.length;j++){
        if (c[j].toLowerCase()==k[p].toLowerCase()) p++;
        if (p==k.length){
          ret.push(data[i]);
          ids.push(i);
          break;
        }
      }
    }
    
  }
  return ret;
}
function setpagers(n){
  var l= Math.ceil (sret.length/10.0);
  if (l==1){
    return;
  }
  else if (l<=5){
    if (n!=0) $('#pager').append('<li><a onclick="changepage('+(n-1)+')"style="cursor:pointer">'+'上一页'+'</a></li>');
    for (var i=0;i<l;i++){
      if (i==n){
        $('#pager').append('<li class="active"><a onclick="changepage('+(i)+')"style="cursor:pointer">'+i+'</a></li>');
      }else{
        $('#pager').append('<li><a onclick="changepage('+(i)+')"style="cursor:pointer">'+i+'</a></li>');
      }
    }
    if (n!=l-1) $('#pager').append('<li><a onclick="changepage('+(n+1)+')"style="cursor:pointer">'+'下一页'+'</a></li>');
  }else {
    if (n!=0) $('#pager').append('<li><a onclick="changepage('+(n-1)+')"style="cursor:pointer">'+'上一页'+'</a></li>');
    if (n<=2){
      for (var i=0;i<5;i++){
        if (i==n){
          $('#pager').append('<li class="active"><a onclick="changepage('+(i)+')"style="cursor:pointer">'+i+'</a></li>');
        }else{
          $('#pager').append('<li><a onclick="changepage('+(i)+')"style="cursor:pointer">'+i+'</a></li>');
        }
      }
      $('#pager').append('<li><a onclick="changepage('+(Math.min(l-1,n+5))+')"style="cursor:pointer">...</a></li>');
    }else if (n>=l-3){
      
      $('#pager').append('<li><a onclick="changepage('+(Math.max(0,n-5))+')"style="cursor:pointer">...</a></li>');
      for (var i=l-5;i<l;i++){
        if (i==n){
          $('#pager').append('<li class="active"><a onclick="changepage('+(i)+')"style="cursor:pointer">'+i+'</a></li>');
        }else{
          $('#pager').append('<li><a onclick="changepage('+(i)+')"style="cursor:pointer">'+i+'</a></li>');
        }
      }
    }else{
      $('#pager').append('<li><a onclick="changepage('+(Math.max(0,n-5))+')"style="cursor:pointer">...</a></li>');
      for (var i=n-2;i<n+3;i++){
        if (i==n){
          $('#pager').append('<li class="active"><a onclick="changepage('+(i)+')"style="cursor:pointer">'+i+'</a></li>');
        }else{
          $('#pager').append('<li><a onclick="changepage('+(i)+')"style="cursor:pointer">'+i+'</a></li>');
        }
      }
      $('#pager').append('<li><a onclick="changepage('+(Math.min(l-1,n+5))+')"style="cursor:pointer">...</a></li>');
    }
    if (n!=l-1) $('#pager').append('<li><a onclick="changepage('+(n+1)+')"style="cursor:pointer">'+'下一页'+'</a></li>'); 
  }
}