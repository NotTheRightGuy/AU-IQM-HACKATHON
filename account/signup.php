<?php

// Connect to the database
// include('connection.php');

if ((isset($_POST["add"]))) {

    if ($_GET['client']) {

        // Client Database Connection
        // Enter new Entry

    } else if ($_GET['intern']) {

        // Intern Database Connection
        // Enter new Entry

    }

    mysqli_close($conn);
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <!-- CSS only -->
    <link rel="stylesheet" href="bootstrap-5.2.2-dist/css/bootstrap.min.css">
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"> -->
</head>

<body>
    <div class='container-fluid'>
        <div class="pb-2 mt-4 mb-2 border-bottom">
            <h1>Sign Up your Account Here</h1>
            <p class="lead">Sign Up to Greatness. WebsiteName - Your One Way In to the Tech World</p>
        </div>

        <?php

        ?>

        <div class="">
            <form action="<?php
                            // echo $_SERVER['PHP_SELF'];
                            echo htmlspecialchars($_SERVER["PHP_SELF"]);
                            ?>" method="post">

                <h3 class="ms-5">Enter All the Details Correctly</h3>
                <hr>
                <p class="text-danger">* Required Fields</p>
                <br>
                <label for="firstname" class="mt-auto">First Name</label><small class="text-danger">*</small>
                <br>
                <input type="text" placeholder="First Name" name="first_name" id="firstname">
                <br>

                <label for="lastname" class="mt-4">Last Name</label><small class="text-danger">*</small>
                <br>
                <input type="text" placeholder="Last Name" name="last_name" id="lastname">
                <br>

                <label for="email_id" class="mt-4">Email</label><small class="text-danger">*</small>
                <br>
                <input type="text" placeholder="Email" name="email" id="email_id">
                <br>

                <label for="passkey" class="mt-4">Password</label><small class="text-danger">*</small>
                <br>
                <input type="password" placeholder="Password" name="pass_word" id="passkey">

                <br>
                <input type="submit" value="Sign Up" name="signup" class="mt-4">
                <br>
            </form>
        </div>
    </div>

    <!-- jQuery -->
    <!-- <script src="//code.jquery.com/jquery-3.6.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script> -->

</body>

</html>