<!DOCTYPE HTML>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="application/x-www-form-urlencoded"/>
  <title>Sign Up for StarTunes</title>
</head>

<body>
  <h1>Sign Up for StarTunes!</h1>
  <h2>Please fill out the form below to create your account</h2>
  <?php
    // connect to localhost phpMyAdmin
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "music_db";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {die("Connection failed: " . $conn->connect_error);}
    // Conditional triggered when the user submits the html form at the bottom of the page.
    if(isset($_REQUEST["submit"])){
      // Process the input from the form
      $out_value = "";
      $s_username = $_REQUEST['username'];
      $s_p1 = $_REQUEST['p1'];
      $s_p2 = $_REQUEST['p2'];
      // Passwords must match
      if ($s_p1 != $s_p2){
        $out_value = "Passwords must match";
      } else{
        // Passwords must be at least length ten
        if (strlen($s_p1) < 10){
          $out_value = "Passwords must have at least ten characters";
        } else {
          // All form fields must be filled in
          if(!empty($s_username) && !empty($s_p1) && !empty($s_p2)){
            // Prepare parameterized query
            $sql_query = "SELECT * FROM users WHERE username = ?";
            $stmt = mysqli_prepare($conn,$sql_query) ;
            mysqli_stmt_bind_param($stmt, "s", $s_username);
            // Run the prepared statement.
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            $row = mysqli_fetch_assoc($result);
            $num = mysqli_num_rows($result);
            // Can't sign up using a username that is already taken
            if ($num > 0){
              $out_value = "Account with that username already exists, please enter a different username";
            } else {
              // Sign em up!
              $hashedPassword = password_hash($s_p1, PASSWORD_DEFAULT);
              $sql = "INSERT INTO users (username, password) VALUES (?,?)";
              $stmt = mysqli_prepare($conn,$sql) ;
              mysqli_stmt_bind_param($stmt,"ss",$s_username,$hashedPassword) ;
              $result = mysqli_stmt_execute($stmt);
              // See if the sign up worked. If so redirect to the ratings page
              if ($result == TRUE) {
                $out_value = "New record created successfully";
                session_start();
                $_SESSION['logged_in'] = true;
                $_SESSION['user'] = $s_username;
                header("location: ratingsPage.php");
                exit();
              } else {
                $out_value = "Error";
              }
            } 
          } else { $out_value = "Please fill all fields!";}
        }
      }
  }
    $conn->close();
  ?>
  <!-- Form for user to input desired username and password to sign up -->
  <form method="GET" action="">
  Username: <input type="text" name="username" placeholder="Enter Username" /><br>
  Password: <input type="text" name="p1" placeholder="Enter Password" /><br>
  Confirm Password: <input type="text" name="p2" placeholder="Enter Password Again" /><br>
  <input type="submit" name="submit" value="Submit"/>

  <p><?php 
    if(!empty($out_value)){
      echo $out_value;
    }
  ?></p>
  </form>
</body>
</html>