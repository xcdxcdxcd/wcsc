dept=['全部课程','政治经济学部','法学部',
'文化构想学部','文学部','教育学部','商学部',
'社会科学部','基干理工学部','创造理工学部',
'先进理工学部','人间科学部','体育科学部','国际教养学部','其他'];
$(document).ready(function(){
  for (var i=0;i<15;i++){
  $('#dropdown-menu').append('<li role="presentation"><a style="cursor:pointer" role="menuitem" onclick="choose('+i+')">'+dept[i]+'</a></li>');
  }
});
function jump(d){
  self.location='search.html?dept='+d+'&keyword='+$('#keys').val();
}
function choose(d){
  $('#srch-btn').click(function(){
    jump(d);
  });
  $('#dropdown-btn').html(dept[d]+'<span class="caret"></span>');
}