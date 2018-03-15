function onSignIn(googleUser){
	var profile = googleUser.getBasicProfile();
	$("#data").css("visibility" , "visible");
	$(".g-signin2").css("display" , "none");
	$("#myImg").attr("src",profile.getImageUrl());
	$("#email").text(profile.getEmail());
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      $(".g-signin2").css("display" , "block");
      $("#data").css("visibility" , "hidden");
      $("#logout").css("visibility" , "visible");
       });
  }
