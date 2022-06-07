var pass = prompt("Enter the Password:", "");
if (pass == null)  window.location = "index.html";
else if (pass.toLowerCase() == "cyberpass")  
      window.location = "wrong.html";
else  window.location = "https://antiddos.ml/";