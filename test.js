function onSignIn(googleUser)
{
	var profile = googleUser.getBasicProfile();
	$("#data").css('dispaly' , "block");
	$(".g-signin2").css("display" , "none");
	$("#myImg").attr("src",profile.getImageUrl());
	$("#email").text(profile.getEmail());
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      document.getElementById("logout").innerHTML = "User Successfully loggedOut";
      $(".g-signin2").css("display" , "none");
      $("#data").css("display" , "none");
    });
  }
