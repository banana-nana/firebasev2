firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
            var email_id = user.email;
          
          alert("Welcome Back " + email_id);

      
          var user = firebase.auth().currentUser;
      
          if(user != null){
            var user = firebase.auth().currentUser;
            var email_id = user.email;
            document.getElementById("user_para").innerHTML = "Login as : " + email_id;
            document.getElementById("user_email").innerHTML = "Email is : " + email_id;
      
          }
      
        } else {
          // No user is signed in.
      
          document.getElementById("user_div").style.display = "none";
          document.getElementById("login_div").style.display = "block";
          document.getElementById("MU").style.display = "none";
          document.getElementById("Profile").style.display = "none";


        }
      });
      

      


      function login(){
      
        var userEmail = document.getElementById("email_field").value;
        var userPass = document.getElementById("password_field").value;
      
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
      
          window.alert("Error : " + errorMessage);
      
          // ...
        });
      
      }
      
      function logout(){
        firebase.auth().signOut();
      }









      










console.log("Loading...");

function MangeUser() {
  document.getElementById("MU").style.display = "block";
  document.getElementById("user_div").style.display = "none";
}

function CloseMU() {
  document.getElementById("user_div").style.display = "block";
  document.getElementById("MU").style.display = "none";
}