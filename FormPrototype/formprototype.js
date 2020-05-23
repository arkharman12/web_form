/**********
TITLE: Form Prototype
AUTHOR: Harmanjot Singh (HS)
PURPOSE: Form Prototype Lab
ORIGINALLY CREATED ON: 6 April 2019
LAST MODIFIED ON: 6 April 2019
LAST MODIFIED BY: Harmanjot Singh (HS)
MODIFICATION HISTORY: Original Build
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

    // sumbit button for form 1 
    var btnSubmit = document.getElementById("btnSubmit");
    $("#btnSubmit").click(formOutput);

    // sumbit button for form 2 
    var btnSubmit2 = document.getElementById("btnSubmit2");
    $("#btnSubmit2").click(formOutput2);

    // output for form 1
    function formOutput() {
        $("div#output").html("Freelancer account summary will print here.");
        return false;
    } 

    // output for form 2
    function formOutput2() {
        $("div#output2").html("Client account summary will print here.");
        return false;
    } 


    $(".accordion").accordion();

    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];

    $("#autocomplete").autocomplete({
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