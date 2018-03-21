function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");   
      var r = window.location.search.substr(1).match(reg);   
      if (r != null) return decodeURI(r[2]); return null;   
}
dept=['全部课程','政治经济学部','法学部',
'文化构想学部','文学部','教育学部','商学部',
'社会科学部','基干理工学部','创造理工学部',
'先进理工学部','人间科学部','体育科学部','国际教养学部','其他课程'];
title=['担任先生','履修时间','','','','','',
'考试（占比，感想建议等)','出席（占比，感想建议等）',
'作业数量(1-5)','作业难易度(1-5)','作业难易度选择原因，补充和建议',
'A以上难易度','','','','','内容难易度(1-5)','内容难易度（选择原因）',
'实用度（生活，升学，求职实用度等）','讲义','教科书','老师个人魅力（颜值，风格，态度等）',
'老师英语能力（EDESSA）','建议，感想'];

$(document).ready(function(){
  var d=getUrlParam('dept');
  if (d==14){
    $('#deptimg').attr('src','./0.png');
  }else{
    $('#deptimg').attr('src','./'+d+'.png');
  }

  var id=getUrlParam('id');
    $('#tit').text(data[id][1]);
  for (var i=0;i<25;i++){
    var dd=i+2;
    if (i>=2&&i<=6||i>=13&&i<=16){
      
    }else if (i==20){
      if (data[id][dd]!=''){
        var res;
        if (data[id][dd]=='1') res='有';
        else if (data[id][dd]=='2') res='无';
        
        $('#list').append('<div class="row" style="background-color:#595959">'+
    '<div class="col-sm-12" >'+
      '<br><span class="ft3"style="border-bottom-color:white;border-bottom-style:dotted;border-width: 3px;">'+title[i]+'</span><br><br>'+
      '<span class="ft4">&nbsp;&nbsp&nbsp'+res+'</span>'+

    '</div></div>');
        
      }
    }else if (i==21){
      if (data[id][dd]!=''){
           var res;
        if (data[id][dd]=='1') res='有教科书，有必要买';
        else if (data[id][dd]=='2') res='有教科书，无必要买';
         else res='无教科书';
        $('#list').append('<div class="row" style="background-color:#595959">'+
    '<div class="col-sm-12" >'+
      '<br><span class="ft3"style="border-bottom-color:white;border-bottom-style:dotted;border-width: 3px;">'+title[i]+'</span><br><br>'+
      '<span class="ft4">&nbsp;&nbsp&nbsp'+res+'</span>'+

    '</div></div>');
      }
      
    }else{
      if (data[id][dd]!=''){
        $('#list').append('<div class="row" style="background-color:#595959">'+
    '<div class="col-sm-12" >'+
      '<br><span class="ft3"style="border-bottom-color:white;border-bottom-style:dotted;border-width: 3px;">'+title[i]+'</span><br><br>'+
      '<span class="ft4">&nbsp;&nbsp&nbsp'+data[id][dd]+'</span>'+

    '</div></div>');
        
      }
      
    }
    
  }
});
