/**********
TITLE: Pulling Through
AUTHOR: Harmanjot Singh (HS)
PURPOSE: Pulling Through Lab
ORIGINALLY CREATED ON: 10 April 2019
LAST MODIFIED ON: 14 April 2019
LAST MODIFIED BY: Harmanjot Singh (HS)
MODIFICATION HISTORY:
11 April 2019: User can get a freelancer or client account summary outputted at the end of the form (HS)
14 April 2019: Implemented autocomplete feature for country name on both forms (HS)
**********/

$(document).ready(function () {

    // tab 1 and tab 2
    $(function () {
        $("#tabs").tabs();
    });

    // spinner
    var spinner = $("#spinner").spinner();

    // date picker for tab 1
    $(function () {
        $("#datepicker").datepicker();
    });

    // date picker for tab 2
    $(function () {
        $("#datepicker2").datepicker();
    });

    // run the function when user clicks the submit button
    $('#btnSubmit').click(createQuote);
    $('#btnSubmit2').click(createQuote2);

    function createQuote() {
	   // assign variable for all different types of elements on form
       var firstNameOne = new String($('#fname').val());
       var lastNameOne = new String($('#lname').val());
       var usernameOne = new String($('#username').val());
       var passwordOne = new String($('#password').val());
       var addressOne = new String($('#address').val());
       var countryOne = new String($('#country').val());
       var emailOne = new String($('#email').val());
       var phoneOne = new String($('#phone').val());
       var service = new String($('#service-offer').val());
       var skillsOffer = new String($('#descriptionSkills').val());
       var experienceLevel = new String($("input[name='radioName']:checked").parent('label').text());
       var jobTitle = new String($('#descriptionJobTitle').val());
       var experienceTime = new String($('#spinner').val());
       var jobOverview = new String($('#descriptionJobOverview').val());
       var datePickerOne = new String($('#datepicker').val());
	   
	   // construct string "sentence fragments" with the variables
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
       outputTextOne.innerHTML = strEverythingOne + "<br>";
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

       return false;
	   
    } // end create Quote()
    
    function createQuote2() {
        // assign variable for all different types of elements on form
        var firstNameTwo = new String($('#fnameTwo').val());
        var lastNameTwo = new String($('#lnameTwo').val());
        var usernameTwo = new String($('#usernameTwo').val());
        var passwordTwo = new String($('#passwordTwo').val());
        var addressTwo = new String($('#addressTwo').val());
        var countryTwo = new String($('#countryTwo').val());
        var emailTwo = new String($('#emailTwo').val());
        var phoneTwo = new String($('#phoneTwo').val());
        var descriptionProject = new String($('#descriptionProject').val());
        var aboutProject = new String($('#descriptionPMore').val());
        var strSkills = new String($("input[name='skills']:checked").parent('label').text());
		var strOtherSkill = $("#other").val();
        var pay = new String($("input[name='pay']:checked").parent('label').text());
        var datePickerTwo = new String($('#datepicker2').val());

        // construct string "sentence fragments" with the variables
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
       outputTextOne.innerHTML = strEverythingOne + "<br>";
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

       return false;
    } // end createQuote2

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