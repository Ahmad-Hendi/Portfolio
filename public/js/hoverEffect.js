
$(document).ready(function() {
      TweenMax.set(".project-preview", { width: 0 });

      var tl = new TimelineLite();

      $(document)
        .on("mouseover", ".navigation-item", function(evt) {
          tl = new TimelineLite();
          tl.to($(".project-preview"), 1, {
            width: "700px",
            ease: Expo.easeInOut
          });
        })
        .on("mouseout", ".navigation-item", function(evt) {
          tl = new TimelineLite();
          tl.to($(".project-preview"), 0.2, {
            width: 0,
            ease: Expo.easeInOut
          });
        });
    });


    $(".navigation-link-1").hover(function() {
        $(".project-preview").css({ "background-image": "url(https://ahmad-hendi.github.io/Portfolio/images/weatherapp.jpg)" });
      });

      $(".navigation-link-2").hover(function() {
        $(".project-preview").css({ "background-image": "url(../../../images/landingpage.jpg) " });
      });

      $(".navigation-link-3").hover(function() {
        $(".project-preview").css({ "background-image": "url(../../../images/impossible.jpg)" });
      });

      $(".navigation-link-4").hover(function() {
        $(".project-preview").css({ "background-image": "url(../../../images/Nextflix.jpg)" });
      });

      $(".navigation-link-5").hover(function() {
        $(".project-preview").css({ "background-image": "url(../../../images/ProductLandingPage.jpg)" });
      });

      $(".navigation-link-6").hover(function() {
        $(".project-preview").css({ "background-image": "url(../../../images/HousePricePrediction.jpg)" });
      });

      $(".navigation-link-7").hover(function() {
        $(".project-preview").css({ "background-image": "url(../../../images/ecommerce.jpg)" });
      // });

      // $(".navigation-link-8").hover(function() {
      //   $(".project-preview").css({ "background-image": "url(../../images/bootstrap)" });
      });

   

  
  