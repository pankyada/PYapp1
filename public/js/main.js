//$.getJSON('json/actor.json', function(data) {
//  console.log(data);
//});



$.ajax({
  url:'json/actor.json',
  dataType:'json',
  type:'get',
  cache:false,
  success: function(data) {
    $(data.users).each(function(index,value){
      console.log(value.userName);
    });
  }
});
