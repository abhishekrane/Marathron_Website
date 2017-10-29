
<!--code by Name:Abhishek RedID: 822056658 -->


$(document).ready(function() {
$(':submit').on('click',function() {
     var h = new Array(12);
    h[0] = $('input[id="firstName"]');       
    h[1] = $('input[id="middleName"]');
    h[2] = $('input[id="lastName"]');
    h[3] = $('input[name="address1"]');
    h[4] = $('input[id="city"]');            
    h[5] = $('input[id="state"]');
    h[6] = $('input[id="zip"]');
    h[7] = $('input[name="area_phone"]');
    h[8] = $('input[name="prefix_phone"]');
    h[9] = $('input[name="phone"]');
    h[10] = $('input[id="email"]');

     for(var i=0; i<11; i++) {
        var str1 = h[i].val()
       var str = $.trim(str1)
      h[i].val(str);
  }
     

     })


$('input[id="zip"]').keyup(function(e)
                                {
  if (/\D/g.test(this.value))
  {
    // Filter non-digits from input value.
    this.value = this.value.replace(/\D/g, '');
  }
});



$('input[name="phone"]').keyup(function(e)
                                {
  if (/\D/g.test(this.value))
  {
    // Filter non-digits from input value.
    this.value = this.value.replace(/\D/g, '');
  }
});

$('input[name="prefix_phone"]').keyup(function(e)
                                {
  if (/\D/g.test(this.value))
  {
    // Filter non-digits from input value.
    this.value = this.value.replace(/\D/g, '');
  }
});


$('input[name="area_phone"]').keyup(function(e)
                                {
  if (/\D/g.test(this.value))
  {
    // Filter non-digits from input value.
    this.value = this.value.replace(/\D/g, '');
  }
});


var handle = $('input[name="user_pic"]');
var size=0;

$('input[name="user_pic"]').on('change',function(e) {
    size = this.files[0].size;
    });
    
$('#fbutton').on('click', function() {
    if(size == 0) {alert("Please select a file"); return false; }
    if(size/1000 > 1000) {alert("File is too big, 1 MB max"); 
    $('input[name="user_pic"]').val("");
    return false;
     }
    alert("File is OK to upload");
  
    });



    $('#validate').on('click', function() {

 var day= $('input[name="day"]').val();
 var month= $('input[name="month"]').val();
 var year = $('input[name="year"]').val();


    var checkDate = new Date(year, month-1, day);    
    var checkDay = checkDate.getDate();
    var checkMonth = checkDate.getMonth()+1;
    var checkYear = checkDate.getFullYear();
    if(day == checkDay && month == checkMonth && year == checkYear)
       { alert("The date is OK");}
    else
        {alert("Invalid date ");  
   $('input[name="day"]').val("");
   $('input[name="month"]').val("");
   $('input[name="year"]').val("");
}
        }); 






});

