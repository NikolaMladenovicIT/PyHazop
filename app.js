
var $select = $('cases');
$.getJSON('data.json', function(data){
 $select.html('');

for(var i=0;i<data['cases'].lenght;i++) {
$select.append('<option id="'+data['cases'][i]['id']+'">'+data['cases'][i]['Description']+'</option>');
}
});