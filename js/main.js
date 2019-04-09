$(document).ready(function () {


    $(".box").css("margin-left", "0%");
    $(".box").css("opacity", "0");
    $(".box").css("height", "0");
    $(".box").css("width", "0");


    //toggle fullscreen 
    function toggleFullScreen() {
        if (!document.fullscreenElement && // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) { // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
            $('#fullscreen').html('<i class="material-icons">fullscreen_exit</i>');
            
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
            $('#fullscreen').html('<i class="material-icons">fullscreen</i>');
        }
    }

    $('#fullscreen').click(function () {
        toggleFullScreen();
    });


    //add fancybox to each img element 
    $('img').each(function () {



        $(this).wrap($('<a/>', {
            href: $(this).attr('src'),
            'data-fancybox': 'gallery',
            class: "fancybox",
            rel: "artikel"
        }));
    });



    //fancybox porperties 
    $('[data-fancybox="gallery"]').fancybox({
        arrows: false,
        toolbar: true,
        infobar: false,
        buttons: ["close"],
        animationEffect: "fade",
        animationDuration: 400
        
    });


    //Tilt library properties 
    $('.js-tilt').tilt({
        reset: false
    });

    //Get the box(rubrics information when mouse on link) on the right place 
    $(document).bind('mousemove', function (e) {
        $('.box').css({
            top: e.pageY - $(".box").height() / 2, // just minus by half the height
            left: e.pageX - $(".box").width() / 2 // just minus by half the width
        });
    });



    //Data for the box information when hovering over a title link (this is a json practice)
    var rubrics = [
        {
            titel: "Strategie en Concept",
            rubrics: {
                visie: "Visie",
                concept: "Conceptueel denken"
            }
        }, {
            titel: "User Experience en User Centered Design",
            rubrics: {
                story: "Storytelling",
                tests: "Usertests"
            }
        }, {
            titel: "Design en Development",
            rubrics: {
                programmeren: "Programmeren",
                audio: "Audiovisueel Ontwerp",
                data: "Hardware en/of Data"
            }
        }, {
            titel: "Onderzoek",
            rubrics: {
                onderzoek: "Onderzoekscyclus",
                houding: "Onderzoekende houding"
            }
        }
    ];




    //creating DOM elements that are added to the .box
    $('#one a').mouseenter(function () {
        console.log(this.id);



        if (this.id == 'efteling') {
            //console.log('id is efteling!');




            $(".box").append("<p>" + rubrics["0"].rubrics.concept) + "</p>";
            $(".box").append('<p style = "border-bottom: solid whitesmoke 1px; font-size:13px; padding-top: 0px;">' + "Brainstorming, visuele uitwerkingen voor D'n Blije Druktebelever" + "</p>");

            $(".box").append('<p>' + rubrics["1"].rubrics.tests) + "</p>";
            $(".box").append('<p style = "border-bottom: solid whitesmoke 1px; font-size:13px; padding-top: 0px;">' + "Concepttesting en User Experience testing voor de Heatmap" + "</p>");

            $(".box").append("<p>" + rubrics["1"].rubrics.story) + "</p>";
            $(".box").append('<p style = "border-bottom: solid whitesmoke 1px; font-size:13px; padding-top: 0px;">' + "Animeren om het concept aan de gebruiker te vertellen" + "</p>");

            $(".box").append("<p>" + rubrics["2"].rubrics.audio) + "</p>";
            $(".box").append('<p style = "border-bottom: solid whitesmoke 1px; font-size:13px; padding-top: 0px;">' + "Animatie en geluid komen samen in conceptanimaties" + "</p>");

            $(".box").append("<p>" + rubrics["3"].rubrics.onderzoek) + "</p>";
            $(".box").append('<p style = "border-bottom: solid whitesmoke 1px; font-size:13px; padding-top: 0px;">' + "Onderzoeksmethodes gebruiken voor nieuwe inzichten" + "</p>");

            $(".box").append("<p>" + rubrics["3"].rubrics.houding) + "</p>";
            $(".box").append('<p style = "font-size:13px; padding-top: 0px;">' + "Reflecteren en het presenteren van mijn werk" + "</p>");

        }
        if (this.id == 'brandguide') {
            //console.log('id is brandguide!');
            $(".box").append("<p>" + rubrics["0"].rubrics.concept) + "</p>";
            $(".box").append('<p style = "border-bottom: solid whitesmoke 1px; font-size:13px; padding-top: 0px;">' + "Vanuit een concept, missie en visie designen" + "</p>");

            $(".box").append("<p>" + rubrics["0"].rubrics.visie) + "</p>";
            $(".box").append('<p style = "border-bottom: solid whitesmoke 1px; font-size:13px; padding-top: 0px;">' + "Professionele visies bekeken en deze toegepast in de brandguide" + "</p>");

            $(".box").append("<p>" + rubrics["1"].rubrics.tests) + "</p>";
            $(".box").append('<p style = "border-bottom: solid whitesmoke 1px; font-size:13px; padding-top: 0px;">' + "Doelgroep onderzoek doen en de gebruiker leren kennen" + "</p>");

            $(".box").append("<p>" + rubrics["1"].rubrics.story) + "</p>";
            $(".box").append('<p style = "border-bottom: solid whitesmoke 1px; font-size:13px; padding-top: 0px;">' + "Nadenken over de story van een introductie film" + "</p>");

            $(".box").append("<p>" + rubrics["3"].rubrics.onderzoek) + "</p>";
            $(".box").append('<p style = "font-size:13px; padding-top: 0px;">' + "Onderzoeksmethodes gebruiken voor nieuwe inzichten" + "</p>");




        }
        if (this.id == 'aardgas') {

            $(".box").append("<p>" + rubrics["2"].rubrics.data) + "</p>";
            $(".box").append('<p style = "border-bottom: solid whitesmoke 1px; font-size:12px; padding-top: 0px;">' + "Data en cijfers interactief visualiseren" + "</p>");

            $(".box").append("<p>" + rubrics["2"].rubrics.programmeren) + "</p>";
            $(".box").append('<p style = "font-size:12px; padding-top: 0px;">' + "Datasets uitlezen en deze met programmeren gebruiken" + "</p>");



        }
        if (this.id == 'coderen') {


            $(".box").append("<p>" + rubrics["2"].rubrics.programmeren) + "</p>";
            $(".box").append('<p style = "font-size:12px; padding-top: 0px;">' + "HTML, CSS en Javascript, jQuery en andere libraries" + "</p>");



        }
        if (this.id == 'lockscreen') {

            $(".box").append('<p style = "font-size:15px; padding-top: 0px;">' + "Mini project voor de fun" + "</p>");
            $(".box").append('<p style = "font-size:20px; padding-top: 0px;">' + ": )" + "</p>");




        }





        if (!$('.box').is(':empty')) {
            $('.box').show();
            $(".box").css("height", "auto");
            $(".box").css("width", "auto");
            $(".box").css("margin-right", "23%");

            $(".box").animate({
                marginRight: "20%",
                opacity: "1",
                width: "auto"
            }, 70, "swing", function () {
                if ($('.box').is(':empty')) {
                    $('.box').finish();
                    // $('.box').hide();
                }

            });
        }

        // $(".box").fadeTo(100, 1);


    });


    $('#one a').mouseleave(function () {
        console.log(this.id);
        $(".box").animate({
            marginRight: "17%",
            opacity: "0"
        }, 50, function () {
            $(".box").empty();
            //$('.box').finish();
            $(".box").css("margin-left", "0");
            $(".box").css("height", "0");
            $(".box").css("width", "0");


        });

        /*  $(".box").fadeTo(100, 0,function(){
              $(".box").empty();
              
          });*/



    });







});
