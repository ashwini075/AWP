function validate() {
      
    if( document.myForm.fname.value == "" ) {
       alert( "Please provide your name!" );
       document.myForm.Name.focus() ;
       return false;
    }
    if( document.myForm.Email.value == "" ) {
       alert( "Please provide your Email!" );
       document.myForm.EMail.focus() ;
       return false;
    }
   
    if( document.myForm.nationality.value == "5" ) {
       alert( "Please provide your country!" );
       return false;
    }
    return( true );
 }