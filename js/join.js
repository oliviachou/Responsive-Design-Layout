var main = function() {
  $('form').submit(function() {
      
    var firstName = $('#first-name').val();
    if(firstName === "") {
      $(".first-name-error").text( "Please enter your first name.");}
    
    
    var lastName = $('#first-name').val();
    if(lastName === ""){
      $('.last-name-error').text("Please enter your last name.");}
        
    var email=$('#email').val();
    if(email ===""){
         $('.email-error').text("Please enter your email.");}
    else if(email ==="oliviachoudiva@gmail.com"){
         $('.email-error').text("This email is already taken. Try another email address.");}
    
    var password = $('#password').val();
    if(password ===""){
        $('.password-error').text("Please enter your password.");}
    else if(password.length < 9){
        $('.password-error').text("Short passwords are easy to guess. Try one with at least 8 characters.");}     
        
    return false;
  });
}

$(document).ready(main);