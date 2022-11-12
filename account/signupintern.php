<?php

// Connect to the database
include('connection.php');

if ((isset($_POST["signup"]))) {

    // build a function that validates data
    function validateFormData($formData)
    {
        $formData = trim(stripslashes(htmlspecialchars($formData)));
        return $formData;
    }

    // check to see if inputs are empty
    // create variables with form data
    // wrap the data with our function
    if (!$_POST["first_name"]) {
        $fnameError = "Please enter your First Name <br>";
    } else {
        $fname = validateFormData($_POST["first_name"]);
    }

    if (!$_POST["last_name"]) {
        $fnameError = "Please enter your Last Name <br>";
    } else {
        $lname = validateFormData($_POST["last_name"]);
    }

    if (!$_POST["email"]) {
        $emailError = "Please enter your email <br>";
    } else {
        $email = validateFormData($_POST["email"]);
    }

    if (!$_POST["pass_word"]) {
        $passwordError = "Please enter your password <br>";
    } else {
        $pass_word = validateFormData($_POST["pass_word"]);
        // $my_password = password_hash($pass_word, PASSWORD_DEFAULT);
    }

    if (!$_POST["flexRadioDefault"]) {
        $genderError = "Please enter your gender <br>";
    } else {
        $gender = validateFormData($_POST["flexRadioDefault"]);
        // $my_password = password_hash($pass_word, PASSWORD_DEFAULT);
    }

    if (!$_POST["dateOfBirth"]) {
        $dobError = "Please enter your dob <br>";
    } else {
        $dob = validateFormData($_POST["dateOfBirth"]);
        // $my_password = password_hash($pass_word, PASSWORD_DEFAULT);
    }

    if (!$_POST["university"]) {
        $uniError = "Please enter your University <br>";
    } else {
        $uni = validateFormData($_POST["university"]);
        // $my_password = password_hash($pass_word, PASSWORD_DEFAULT);
    }

    if (!$_POST["house"]) {
        $addrError = "Please enter your address <br>";
    } else {
        $addr = validateFormData($_POST["house"]);
        // $my_password = password_hash($pass_word, PASSWORD_DEFAULT);
    }

    if (!$_POST["country"]) {
        $countryError = "Please enter your country <br>";
    } else {
        $country = validateFormData($_POST["country"]);
        // $my_password = password_hash($pass_word, PASSWORD_DEFAULT);
    }

    if ( $fname && $lname && $email && $pass_word ) {
        
        $query = "INSERT INTO interns
                    (fname, lname, email, pass_word, uni, addr, country)
                    VALUES
                    ('$fname', '$lname', '$email', '$pass_word', '$uni', '$addr', '$country')";
    
        if (mysqli_query($conn, $query)) {
            echo "<div class='alert alert-success'>New record in database!</div>";
        } else {
            echo "Error: " . $query . "<br>" . mysqli_error($conn);
        }
        
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
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.1/font/bootstrap-icons.css">
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"> -->
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    <script src="//code.jquery.com/jquery-3.6.1.min.js"></script>
    <script> 
    $(function(){
      $("#navbar").load("navbar.html"); 
    });
    </script> 
</head>

<body>

    <div id="navbar"></div>
    
    <div class='container'>
        <!-- <div class="pb-2 mt-4 mb-2 border-bottom">
            <h1></h1>
            <p class="lead">Sign Up to Greatness. WebsiteName - Your One Way In to the Tech World</p>
        </div> -->

        <?php

        ?>

        <div class="w-75 border rounded-5 border-secondary shadow d-flex justify-content-center mx-auto mb-5" style="margin-top: 100px;">
            <form action="<?php
                            // echo $_SERVER['PHP_SELF'];
                            echo htmlspecialchars($_SERVER["PHP_SELF"]);
                            ?>" method="post">

                <h2 class="ms-5 mt-5">Sign Up your Account Here</h2>
                <hr>
                <p class="text-danger">* Required Fields</p>
                <br>
                <label for="firstname" class="mt-auto fw-bold d-inline-flex">First Name</label><small class="text-danger">*</small>
                <br>
                <input type="text" placeholder="First Name" name="first_name" id="firstname" class="form-control form-control-input">
                <br>

                <label for="lastname" class="mt-4 fw-bold d-inline-flex">Last Name</label><small class="text-danger">*</small>
                <br>
                <input type="text" placeholder="Last Name" name="last_name" id="lastname" class="form-control form-control-input">
                <br>

                <label for="email_id" class="mt-4 fw-bold">Email</label><small class="text-danger">*</small>
                <br>
                <input type="text" placeholder="Email" name="email" id="email_id" class="form-control form-control-input">
                <br>
                
                <label for="passkey" class="mt-4 fw-bold">Password</label><small class="text-danger">*</small>
                <br>
                <input type="password" placeholder="Password" name="pass_word" id="passkey" class="form-control form-control-input">
                <br>
                
                <label for="gender" class="fw-bold">Gender</label><small class="text-danger">*</small>
                <div class="form-check d-inline-flex ms-5">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label ms-2" for="flexRadioDefault1">
                        Male
                    </label>
                </div>
                <div class="form-check d-inline-flex ms-5">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                    <label class="form-check-label ms-2" for="flexRadioDefault2">
                        Female
                    </label>
                </div>
                <div class="form-check d-inline-flex ms-5">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                    <label class="form-check-label ms-2" for="flexRadioDefault3">
                        Other
                    </label>
                </div>
                <br>
                
                <label class="mt-4 fw-bold">Date Of Birth</label><small class="text-danger">*</small>
                <br>
                <!-- <label for="date" class="col-1 col-form-label">Date</label> -->
                <!-- <div class="col-5">
                    <div class="input-group date" id="datepicker">
                        <input type="text" class="form-control" id="date" />
                        <span class="input-group-append">
                            <span class="input-group-text bg-light d-block">
                                <i class="fa bs-calendar"><span class="bi-calendar"></span></i>
                            </span>
                        </span>
                    </div>
                </div> -->
                <input type="date" name="dateOfBirth" id="dob" class="form-control  form-control-input">
                <br>

                <label for="uni" class="mt-4 fw-bold">University</label><small class="text-danger">*</small>
                <br>
                <input type="text" placeholder="e.g: Adani University" name="university" id="uni" class="form-control form-control-input">
                <br>
                
                <label for="nation" class="mt-4 fw-bold">Country</label>
                <small class="text-danger">*</small>
                <br>
                <input type="text" placeholder="Country" name="country" id="nation" class="form-control form-control-input">
                
                <label for="gradDate" class="mt-4 fw-bold">Expected Graduation Date</label>
                <small class="text-danger">*</small>
                <br>
                <input type="text" placeholder="e.g: 2024" name="graduation" id="gradDate" class="form-control form-control-input">
                
                <label for="house" class="mt-4 fw-bold">Address Line - 1</label>
                <small class="text-danger">*</small>
                <br>
                <input type="text" placeholder="House No./Building Name" name="house" id="house" class="form-control form-control-input">

                <label for="street" class="mt-4 fw-bold">Address Line - 2</label>
                <br>
                <input type="text" placeholder="Street" name="street" id="street" class="form-control form-control-input">
                <label for="gradDate" class="mt-4 fw-bold">Address Line - 3</label>
                <br>
                <input type="text" placeholder="Landmark/Area" name="landmark" id="area" class="form-control form-control-input">

                <label for="city" class="mt-4 fw-bold">City</label>
                <small class="text-danger">*</small>
                <br>
                <input type="text" placeholder="City" name="city" id="city" class="form-control form-control-input">

                <label for="pincode" class="mt-4 fw-bold">Pincode</label>
                <small class="text-danger">*</small>
                <br>
                <input type="text" placeholder="e.g.: 382421" name="city" id="city" class="form-control form-control-input">

                <br>
                <button type="submit" name="signup" class="mt-4 btn btn-primary mb-4">Sign Up</button>
                <br>

                <p>Already have an account? <a href="login.php" class="text-primary">Login</a></p>
            </form>
        </div>
    </div>

    <!-- jQuery -->
    <!-- <script src="//code.jquery.com/jquery-3.6.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script> -->

</body>

</html>