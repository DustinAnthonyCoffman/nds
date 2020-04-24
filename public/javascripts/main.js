$(document).ready(function(){
    var myform = $("form#myform");
    myform.submit(function(event){
        event.preventDefault();
    
      // Change to your service ID, or keep using the default service
      var service_id = "default_service";
      var template_id = "email";
    
      myform.find("button").text("Sending...");
      emailjs.sendForm(service_id,template_id,myform[0])
          .then(function(){ 
            alert("Sent!");
           myform.find("button").text("Send");
        }, function(err) {
           alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
           myform.find("button").text("Send");
        });
      return false;
    });

    AOS.init();
    $(".dropdown, .btn-group").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});  

