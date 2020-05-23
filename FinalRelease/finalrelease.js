/**********
TITLE: Final Release
AUTHOR: Harmanjot Singh (HS)
PURPOSE: Final Release Lab
ORIGINALLY CREATED ON: 25 April 2019
LAST MODIFIED ON: 25 April 2019
LAST MODIFIED BY: Harmanjot Singh (HS)
MODIFICATION HISTORY:
25 April 2019: First name, last name and country etc input fields can only accept letters (HS)
25 April 2019: Added the custom letters only method (HS)
**********/

$(document).ready(function () {

    // tab 1 and tab 2
    $(function () {
        $("#tabs").tabs();
    });

    // spinner
    var spinner = $("#spinner").spinner();

    // date picker for tab 1
    $("#datepicker").datepicker({
        inline: true,
        minDate: 0
    });

    // date picker for tab 2
    $("#datepicker2").datepicker({
        inline: true,
        minDate: 0
    });

    // custom method to make sure text fields only accepts letters
    $.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
    });

    // for form 1
    $.validator.setDefaults({
        submitHandler: function() {
            // assign variable for all different types of elements on form
            var firstNameOne = new String($('#fname').val());           // first name
            var lastNameOne = new String($('#lname').val());            // last name
            var usernameOne = new String($('#username').val());         // username
            var passwordOne = new String($('#password').val());         // password
            var addressOne = new String($('#address').val());           // address
            var countryOne = new String($('#country').val());           // country
            var emailOne = new String($('#email').val());               // email
            var phoneOne = new String($('#phone').val());               // phone
            var service = new String($('#service-offer').val());        // service offer
            var skillsOffer = new String($('#descriptionSkills').val());            // description of skills
            var experienceLevel = new String($("input[name='radioName']:checked").parent('label').text());          // experience level
            var jobTitle = new String($('#descriptionJobTitle').val());         // job title
            var experienceTime = new String($('#spinner').val());               // experience time
            var jobOverview = new String($('#descriptionJobOverview').val());               // job overview
            var datePickerOne = new String($('#datepicker').val());         // date picker number one
	   
            // construct string sentence fragments with the variables
            var formOneTextOne = new String("First Name: <b>" + firstNameOne + "</b>");
            var formOneTextTwo = new String("Last Name: <b>" + lastNameOne + "</b>");
            var formOneTextThree = new String("Username: <b>" + usernameOne + "</b>");
            var formOneTextFour = new String("Password: <b>" + passwordOne + "</b>");
            var formOneTextFive = new String("Address: <b>" + addressOne + "</b>");
            var formOneTextSix = new String("Country: <b>" + countryOne + "</b>");
            var formOneTextFour = new String("Password: <b>" + passwordOne + "</b>");
            var formOneTextSeven = new String("Email: <b>" + emailOne + "</b>");
            var formOneTextEight = new String("Phone: <b>" + phoneOne + "</b>");
            var formOneTextNine = new String("Service: <b>" + service + "</b>");
            var formOneTextTen = new String("Skills you offer: <b>" + skillsOffer + "</b>");
            var formOneTextEleven = new String("Experience Level: <b>" + experienceLevel + "</b>");
            var formOneTextTwelve = new String("Professional Title: <b>" + jobTitle);
            var formOneTextThirteen = new String("Years of Experience: <b>" + experienceTime + "</b>");
            var formOneTextFourteen = new String("Job Overview: <b>" + jobOverview);
            var formOneTextFifteen = new String("Available for Work: <b>" + datePickerOne + "</b>");
            
            // string containing all sentence fragments
            var strEverythingOne = new String(formOneTextOne);
            var strEverythingTwo = new String(formOneTextTwo);
            var strEverythingThree = new String(formOneTextThree);
            var strEverythingFour = new String(formOneTextFour);
            var strEverythingFive = new String(formOneTextFive);
            var strEverythingSix = new String(formOneTextSix);
            var strEverythingSeven = new String(formOneTextSeven);
            var strEverythingEight = new String(formOneTextEight);
            var strEverythingNine = new String(formOneTextNine);
            var strEverythingTen = new String(formOneTextTen);
            var strEverythingEleven = new String(formOneTextEleven);
            var strEverythingTwelve = new String(formOneTextTwelve);
            var strEverythingThirteen = new String(formOneTextThirteen);
            var strEverythingFourteen = new String(formOneTextFourteen);
            var strEverythingFifteen = new String(formOneTextFifteen);
	   
            // get "output" from the content area
            var outputTextOne = document.getElementById("output");
            
            // replace "output" string containing everything
            outputTextOne.innerHTML = "<b>Your Account Summary:</b> <br><br>";
            outputTextOne.innerHTML += strEverythingOne + "<br>";
            outputTextOne.innerHTML += strEverythingTwo + "<br>";
            outputTextOne.innerHTML += strEverythingThree + "<br>";
            outputTextOne.innerHTML += strEverythingFour + "<br>";
            outputTextOne.innerHTML += strEverythingFive + "<br>";
            outputTextOne.innerHTML += strEverythingSix + "<br>";
            outputTextOne.innerHTML += strEverythingSeven + "<br>";
            outputTextOne.innerHTML += strEverythingEight + "<br>";
            outputTextOne.innerHTML += strEverythingNine + "<br>";
            outputTextOne.innerHTML += strEverythingTen + "<br>";
            outputTextOne.innerHTML += strEverythingEleven + "<br>";
            outputTextOne.innerHTML += strEverythingTwelve + "<br>";
            outputTextOne.innerHTML += strEverythingThirteen + "<br>";
            outputTextOne.innerHTML += strEverythingFourteen + "<br>";
            outputTextOne.innerHTML += strEverythingFifteen;                        
            
            alert("Passed validation & submitted.");
            return false;
        } // end submitHandler for form 1 
    }); // end validator.setDefaults for form 1 

    // validate the first form
    $("#freelancerform").validate({
		// rule to not ignore hidden fields
		ignore: [],
		// validation rules
		rules: {
			fname: {							//<input name="fname">
                required: true,
                lettersonly: true
			},
			lname: {							//<input name="lname">
                required: true,
                lettersonly: true
            },
            username: {                         //<input name="username">
                required: true,
                minlength: 5
            },		
			password: {							//<input name="password">
				required: true,
				minlength: 5
            },
            address: {							//<input name="address">
				required: true
            },
            country: {                          //<input name="country">
                required: true,
                lettersonly: true
            },
            email: {							//<input name="email">
				required: true,
				email: true
			},
			phone: {							//<input name="phone">
				required: true,
				digits: true,
				maxlength: 10,
				minlength: 10
            },
            descriptionSkills: {                //<input name="descriptionSkills">
                required: true
            },
            descriptionJobTitle: {              //<input name="descriptionJobTitle">
                required: true,
                lettersonly: true
            },
            descriptionJobOverview: {           //<input name="descriptionJobOverview">
                required: true
            },
            datepicker: {                       //<input name="datepicker">
                required: true
            }
		}, // end rules
		messages: {                             // These messages are displayed when user input doesn't match the rules
			fname: {							//<input name="fname">
                required: "Please enter your first name",
                lettersonly: "Please enter letters only"
			},
			lname: {							//<input name="lname">
                required: "Please enter your last name",
                lettersonly: "Please enter letters only"
            },
            username: {							//<input name="lname">
                required: "Please enter a username",
                minlength: $.validator.format("Must have at least {0} characters")
			},
			password: {							//<input name="password">
				required: "Please provide a password",
				minlength: $.validator.format("Must have at least {0} characters")
            },
            address: {							//<input name="address">
				required: "Please enter your address"
            },
            country: {							//<input name="address">
                required: "Please enter your country",
                lettersonly: "Please enter letters only"
            },
            email: {							//<input name="email">
				required: "Please enter an email address",
				email: "Please enter a valid email address"
			},
			phone: {							//<input name="phone">
				required: "Please enter a phone number",
				digits: "Please enter digits only",
				maxlength: "Please use only 10 digits",
				minlength: "Please use a 10 digit phone number"
            },
            descriptionSkills: {                //<input name="descriptionSkills">
                required: "<br> <b>Please describe your skills</b>"
            },
            descriptionJobTitle: {              //<input name="descriptionJobTitle">
                required: "<br> <b>Please enter a professional title</b>",
                lettersonly: "<b>Please enter letters only</b>"
            },
            descriptionJobOverview: {           //<input name="descriptionJobOverview">
                required: "<br> <b>Please write a professional overview<b>"
            },
            datepicker: {                       //<input name="datepicker">
                required: "<b>Please pick a date<b>"
            }
		}  // end messages
	});
    
    // for form 2
    $.validator.setDefaults({
        submitHandler: function() {
            // assign variable for all different types of elements on form
            var firstNameTwo = new String($('#fnameTwo').val());            // first name
            var lastNameTwo = new String($('#lnameTwo').val());             // last name
            var usernameTwo = new String($('#usernameTwo').val());          // username
            var passwordTwo = new String($('#passwordTwo').val());          // password
            var addressTwo = new String($('#addressTwo').val());            // address
            var countryTwo = new String($('#countryTwo').val());            // country
            var emailTwo = new String($('#emailTwo').val());            // email
            var phoneTwo = new String($('#phoneTwo').val());            // phone
            var descriptionProject = new String($('#descriptionProject').val());            //description of the project
            var aboutProject = new String($('#descriptionPMore').val());            // about project
            var strSkills = new String($("input[name='skills']:checked").parent('label').text());       // skills
            var strOtherSkill = $("#other").val();          // other skills
            var pay = new String($("input[name='pay']:checked").parent('label').text());            // pay
            var datePickerTwo = new String($('#datepicker2').val());            // date picker number two

            // construct string sentence fragments with the variables
            var formTwoTextOne = new String("First Name: <b>" + firstNameTwo + "</b>");
            var formTwoTextTwo = new String("Last Name: <b>" + lastNameTwo + "</b>");
            var formTwoTextThree = new String("Username: <b>" + usernameTwo + "</b>");
            var formTwoTextFour = new String("Password: <b>" + passwordTwo + "</b>");
            var formTwoTextFive = new String("Address: <b>" + addressTwo + "</b>");
            var formTwoTextSix = new String("Country: <b>" + countryTwo + "</b>");
            var formTwoTextFour = new String("Password: <b>" + passwordTwo + "</b>");
            var formTwoTextSeven = new String("Email: <b>" + emailTwo + "</b>");
            var formTwoTextEight = new String("Phone: <b>" + phoneTwo + "</b>");
            var formTwoTextNine = new String("Name of your project: <b>" + descriptionProject + "</b>");
            var formTwoTextTen = new String("About your project: <b>" + aboutProject + "</b>");
            var formTwoTextEleven = new String("Skill(s) required: <b>" + strSkills + "</b>");
            var formTwoTextTwelve = new String("Other skill(s): <b>" + strOtherSkill);
            var formTwoTextThirteen = new String("You are willing to: <b>" + pay + "</b>");
            var formTwoTextFourteen = new String("Due date for your project: <b>" + datePickerTwo);
	   
            // string containing all sentence fragments
            var strEverythingOne = new String(formTwoTextOne);
            var strEverythingTwo = new String(formTwoTextTwo);
            var strEverythingThree = new String(formTwoTextThree);
            var strEverythingFour = new String(formTwoTextFour);
            var strEverythingFive = new String(formTwoTextFive);
            var strEverythingSix = new String(formTwoTextSix);
            var strEverythingSeven = new String(formTwoTextSeven);
            var strEverythingEight = new String(formTwoTextEight);
            var strEverythingNine = new String(formTwoTextNine);
            var strEverythingTen = new String(formTwoTextTen);
            var strEverythingEleven = new String(formTwoTextEleven);
            var strEverythingTwelve = new String(formTwoTextTwelve);
            var strEverythingThirteen = new String(formTwoTextThirteen);
            var strEverythingFourteen = new String(formTwoTextFourteen);
	   
            // get "output2" from the content area
            var outputTextOne = document.getElementById("output2");
            
            // replace "output2" string containing everything
            outputTextOne.innerHTML = "<b>Your Account Summary:</b> <br><br>";
            outputTextOne.innerHTML += strEverythingOne + "<br>";
            outputTextOne.innerHTML += strEverythingTwo + "<br>";
            outputTextOne.innerHTML += strEverythingThree + "<br>";
            outputTextOne.innerHTML += strEverythingFour + "<br>";
            outputTextOne.innerHTML += strEverythingFive + "<br>";
            outputTextOne.innerHTML += strEverythingSix + "<br>";
            outputTextOne.innerHTML += strEverythingSeven + "<br>";
            outputTextOne.innerHTML += strEverythingEight + "<br>";
            outputTextOne.innerHTML += strEverythingNine + "<br>";
            outputTextOne.innerHTML += strEverythingTen + "<br>";
            outputTextOne.innerHTML += strEverythingEleven + "<br>";
            outputTextOne.innerHTML += strEverythingTwelve + "<br>";
            outputTextOne.innerHTML += strEverythingThirteen + "<br>";
            outputTextOne.innerHTML += strEverythingFourteen;

            alert("Passed validation & submitted.");
            return false;
        } // end submitHandler for form 2
    }); // end validator.setDefaults for form 2

    // validate the second form with .each function because I have two forms on one page and jQuery validation doesn't work on multiple forms
    $('#clientform').each(function(){
        $(this).validate({
            // rule to not ignore hidden fields
            ignore: [],
            // validation rules
            rules: {
                fnameTwo: {							//<input name="fnameTwo">
                    required: true,
                    lettersonly: true
                },
                lnameTwo: {							//<input name="lnameTwo">
                    required: true,
                    lettersonly: true
                },
                usernameTwo: {                      //<input name="usernameTwo">
                    required: true,
                    minlength: 6
                },		
			    passwordTwo: {						//<input name="passwordTwo">
				    required: true,
				    minlength: 5
                },
                addressTwo: {						//<input name="addressTwo">
				    required: true
                },
                countryTwo: {                       //<input name="countryTwo">
                    required: true,
                    lettersonly: true
                },
                emailTwo: {							//<input name="emailTwo">
				    required: true,
				    email: true
			    },
			    phoneTwo: {							//<input name="phoneTwo">
				    required: true,
				    digits: true,
				    maxlength: 10,
				    minlength: 10
                },
                descriptionProject: {				//<input name="descriptionProject">
                    required: true,
                    lettersonly: true
                },
                descriptionPMore: {					//<input name="descriptionPMore">
				    required: true
                },
                datepicker2: {                       //<input name="datepicker2">
                    required: true
                }
		    }, // end rules
		    messages: {                             // These messages are displayed when user input doesn't match the rules
			    fnameTwo: {							//<input name="fnameTwo">
                    required: "Please enter your first name",
                    lettersonly: "Please enter letters only"
                },
                lnameTwo: {							//<input name="fnameTwo">
                    required: "Please enter your last name",
                    lettersonly: "Please enter letters only"
                },
                usernameTwo: {						//<input name="lnameTwo">
                    required: "Please enter a username",
                    minlength: $.validator.format("Must have at least {0} characters")
			    },
			    passwordTwo: {						//<input name="passwordTwo">
				    required: "Please provide a password",
				    minlength: $.validator.format("Must have at least {0} characters")
                },
                addressTwo: {						//<input name="addressTwo">
				    required: "Please enter your address"
                },
                countryTwo: {						//<input name="country">
                    required: "Please enter your country",
                    lettersonly: "Please enter letters only"
                },
                emailTwo: {							//<input name="emailTwo">
				    required: "Please enter an email address",
				    email: "Please enter a valid email address"
			    },
			    phoneTwo: {							//<input name="phoneTwo">
				    required: "Please enter a phone number",
				    digits: "Please enter digits only",
				    maxlength: "Please use only 10 digits",
				    minlength: "Please use a 10 digit phone number"
                },
                descriptionProject: {				//<input name="descriptionProject">
                    required: "<b>Please enter a name for your project</b>",
                    lettersonly: "<b>Please enter letters only</b>"
                },
                descriptionPMore: {					//<input name="descriptionPMore">
				    required: "<b>Please write a description for your project<b>"
                },
                datepicker2: {                       //<input name="datepicker2">
                    required: "<b>Please pick a date<b>"
                }
            } // end messages
            }); // $(this).validate
        });

    // load the "accordion" widget
    $(".accordion").accordion();

    var availableTags = [
        "Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon", "Canada", "Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom", "United States", "Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"
    ];

    // country search for tab 1 
    $("#country").autocomplete({
        source: availableTags
    });

    // country search for tab 2
    $("#countryTwo").autocomplete({
        source: availableTags
    });

    // code below this point wasn't really useful for me. I just left it there just in case
    $("#button").button();
    $("#button-icon").button({
        icon: "ui-icon-gear",
        showLabel: false
    });
    
    $("#radioset").buttonset();

    $("#controlgroup").controlgroup();

    $("#tabs").tabs();

    $("#dialog").dialog({
        autoOpen: false,
        width: 400,
        buttons: [
            {
                text: "Ok",
                click: function () {
                    $(this).dialog("close");
                }
            },
            {
                text: "Cancel",
                click: function () {
                    $(this).dialog("close");
                }
            }
        ]
    });

    // Link to open the dialog
    $("#dialog-link").click(function (event) {
        $("#dialog").dialog("open");
        event.preventDefault();
    });

    $("#datepicker").datepicker({
        inline: true
    });

    $("#slider").slider({
        range: true,
        values: [17, 67]
    });

    $("#progressbar").progressbar({
        value: 20
    });

    $("#spinner").spinner();

    $("#menu").menu();

    $("#tooltip").tooltip();

    $("#selectmenu").selectmenu();

    // Hover states on the static widgets
    $("#dialog-link, #icons li").hover(
        function () {
            $(this).addClass("ui-state-hover");
        },
        function () {
            $(this).removeClass("ui-state-hover");
        }
    );

}); // end of $(document).ready()

