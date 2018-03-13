function onSignIn(googleUser)
{
	var profile = googleUser.getBasicProfile();
	document.getElementsByClassName("g-signin2").style.display = 'none';
	document.getElementsByClassName("data").style.display = 'block';
	document.console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
}
 function signOut() 
 {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
 }