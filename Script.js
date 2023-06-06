var GetCommand = [''];
function addcommend(){
    var Table_=document.getElementById("message");
    var Textarea_=document.getElementById("command");
    var Name_=document.getElementById('name');
    let Time = new Date();
    if(Textarea_.value!=''){
    if(Name_.value=='')
    var txtnode1 = document.createTextNode('匿名人士:'+Textarea_.value);
    else
    var txtnode1 = document.createTextNode(Name_.value+':'+Textarea_.value);
    var txtnode2 = document.createTextNode(Time.toLocaleString());
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    td1.appendChild(txtnode1);
    td2.appendChild(txtnode2);
    tr.appendChild(td1);
    tr.appendChild(td2);
    Table_.appendChild(tr);
    GetCommand+=txtnode1.nodeValue+'∮'+txtnode2.nodeValue+'∮';
    // 因為一般人留言應該不會打到這個符號
    k=sessionStorage.setItem('commandarr',GetCommand);
    }
    else alert('請輸入留言!');
  }//添加留言
function getcommand(){
  // if(GetCommand.length==0)return false;
  GetCommand = sessionStorage.getItem('commandarr').split('∮');
    if(GetCommand.length>0){
      for(var i=0;i<GetCommand.length-1;i++){
      var Table_=document.getElementById("message");
      var txtnode1 = document.createTextNode(GetCommand[i]);
      var txtnode2 = document.createTextNode(GetCommand[++i])
      var tr = document.createElement('tr');
      var td1 = document.createElement('td');
      var td2 = document.createElement('td');
      td1.appendChild(txtnode1);
      td2.appendChild(txtnode2);
      tr.appendChild(td1);
      tr.appendChild(td2);
      Table_.appendChild(tr);
      }
    }
  }
  function MatchAnswer(){
    var score=0;
    var form = document.getElementById('question1');
    for(var i=0;i<form.test1.length;i++)
        {
            if(form.test1[i].checked)
            var answer1=form.test1[i].value;
        }
        for(var i=0;i<form.test2.length;i++)
        {
            if(form.test2[i].checked)
            var answer2=form.test2[i].value;
        }
        for(var i=0;i<form.test3.length;i++)
        {
            if(form.test3[i].checked)
            var answer3=form.test3[i].value;
        }
        for(var i=0;i<form.test4.length;i++)
        {
            if(form.test4[i].checked)
            var answer4=form.test4[i].value;
        }
        for(var i=0;i<form.test5.length;i++)
        {
            if(form.test5[i].checked)
            var answer5=form.test5[i].value;
        }
    /*console.log(answer1);
    console.log(answer2);
    console.log(answer3);
    console.log(answer4);
    console.log(answer5);*/
    if(answer1==2)score=score+20;
    if(answer2==5)score=score+20;
    if(answer3==3)score=score+20;
    if(answer4==4)score=score+20;
    if(answer5==1)score=score+20;
    var j=0;
    var timer=setInterval(function(){
      $('div#result h2').text('得分:'+Math.floor(Math.random()*100))
      j++;
      console.log(j);
      if(j==50){clearInterval(timer);
        $('div#result h2').text('得分:'+score);}
    },50)
    /*if(score==100)
    else if()*/
}
  //unbeforeunload(function(){
      //$()
  //})
