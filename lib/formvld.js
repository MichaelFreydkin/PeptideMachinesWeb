// JavaScript Document
$(document).ready(function() {
 
    $('#btnSubmit').click(function() { 
 
        $(".error").hide();
        var hasError = false;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
 
        var emailaddressVal = $("#from").val();
        if(emailaddressVal == '') {
            $("#from").after('<span class="label label-danger">Please enter your email address.</span>');
            hasError = true;
        }
 
        else if(!emailReg.test(emailaddressVal)) {
            $("#from").after('<span class="label label-danger">Enter a valid email address.</span>');
            hasError = true;
        }
 
        if(hasError == true) { return false; }
 
    });
});