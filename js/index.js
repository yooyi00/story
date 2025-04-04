$(function () {
  /*header*/
  $("header").on("mouseenter", function () {
    $("header").addClass("on");
  });

  $("header").on("mouseleave", function () {
    $("header").removeClass("on");
  });

  $("header .menu_bar").on("click", function () {
    $(".modal").css({ display: "flex" });
    $(".modal ul").animate({ "margin-top": "0", opacity: "1" });
  });

  $(".modal").on("click", function () {
    $(this).css({ display: "none" });
  });

  /*visual*/
  $("#visual .more").on("mouseenter", function () {
    $("#visual .more_bg").show();
    $("#visual .more_bg").addClass("on");
  });
  $("#visual .more").on("mouseleave", function () {
    $("#visual .more_bg").removeClass("on");
  });

  /*con01*/
  $("#con01 .goal li").on("mouseenter", function () {
    $("#con01 .goal li").removeClass("change");
    $(this).addClass("change");
  });
  $("#con01 .goal li").on("mouseleave", function () {
    $("#con01 .goal li").removeClass("change");
  });

  /*con02*/
  $("#con02 .more").on("mouseenter", function () {
    $("#con02 .more_bg").show();
    $("#con02 .more_bg").addClass("on");
  });
  $("#con02 .more").on("mouseleave", function () {
    $("#con02 .more_bg").removeClass("on");
  });

  /*con05*/
  $("#con05 .more").on("mouseenter", function () {
    $("#con05 .more_bg").show();
    $("#con05 .more_bg").addClass("on");
  });
  $("#con05 .more").on("mouseleave", function () {
    $("#con05 .more_bg").removeClass("on");
  });

  /*con06*/
  $("#con06 .more").on("mouseenter", function () {
    $("#con06 .more_bg").show();
    $("#con06 .more_bg").addClass("on");
  });
  $("#con06 .more").on("mouseleave", function () {
    $("#con06 .more_bg").removeClass("on");
  });

  /*con07*/
  let q = 0;
  start();
  function start() {
    stop = setInterval(function () {
      if (q == 4) {
        q = 0;
      } else {
        q++;
      }

      $(".slide ul")
        .stop()
        .animate({ "margin-left": "-1000px" }, 2000, function () {
          $(".slide ul li:first-child").appendTo(".slide ul");
          $(".slide ul").css({ "margin-left": "0px" });
        });

      $(".boxs > li").css({ display: "none" });
      $(".boxs > li").eq(q).css({
        display: "flex",
        "justity-content": "space-between",
      });
      $(".boxs > li").css({ opacisy: "0", "margin-top": "100px" });
      $(".boxs > li").eq(q).animate({ opacity: "1", "margin-top": "0px" });
    }, 5000);
  }

  $(".next").on("click", function () {
    clearInterval(stop);
    if (q == 4) {
      q = 0;
    } else {
      q++;
    }

    $(".slide ul")
      .stop()
      .animate({ "margin-left": "-1000px" }, 500, function () {
        $(".slide ul li:first-child").appendTo(".slide ul");
        $(".slide ul").css({ "margin-left": "0px" });
      });

    $(".boxs > li").css({ display: "none" });
    $(".boxs > li").eq(q).css({
      display: "flex",
      "justity-content": "space-between",
    });
    $(".boxs > li").css({ opacisy: "0", "margin-top": "100px" });
    $(".boxs > li").eq(q).animate({ opacity: "1", "margin-top": "0px" });

    start();
  });

  $(".prev").on("click", function () {
    clearInterval(stop);
    if (q == 0) {
      q = 4;
    } else {
      q--;
    }

    $(".slide ul li:last-child").prependTo(".slide ul");
    $(".slide ul").css({ "margin-left": "-1000px" });
    $(".slide ul").animate({ "margin-left": "0px" }, 500);

    $(".boxs > li").css({ display: "none" });
    $(".boxs > li").eq(q).css({
      display: "flex",
      "justity-content": "space-between",
    });
    $(".boxs > li").css({ opacisy: "0", "margin-top": "100px" });
    $(".boxs > li").eq(q).animate({ opacity: "1", "margin-top": "0px" });

    start();
  });

  /*con08*/
  $("#con08 .more").on("mouseenter", function () {
    $("#con08 .more_bg").show();
    $("#con08 .more_bg").addClass("on");
  });
  $("#con08 .more").on("mouseleave", function () {
    $("#con08 .more_bg").removeClass("on");
  });

  /*footer*/
  $(".left_con h5 a").on("mouseenter", function () {
    $(".left_con h5 a").css({ color: "#fff" });
    $(this).css({ color: "#f26529" });
  });
  $(".left_con h5 a").on("mouseleave", function () {
    $(".left_con h5 a").css({ color: "#fff" });
  });

  /*fixed*/
  $(".fixed").on("click", function () {
    $("html,body").animate({ scrollTop: "0" }, 400);
    return false;
  });

  let active = false;
  /*scroll*/
  let header = $("header").offset().top;
  let visual = $("#visual").offset().top;
  let con01 = $("#con01").offset().top;
  let con02 = $("#con02").offset().top;
  let con03 = $("#con03").offset().top;
  let con04 = $("#con04").offset().top;
  let con05 = $("#con05").offset().top;
  let con06 = $("#con06").offset().top;
  let con07 = $("#con07").offset().top;
  let con08 = $("#con08").offset().top;
  console.log(
    header,
    visual,
    con01,
    con02,
    con03,
    con04,
    con05,
    con06,
    con07,
    con08
  );

  $(window).on("scroll", function () {
    let sc = $(this).scrollTop();
    //console.log(sc);

    if (sc <= 0) {
      $("header").removeClass("scroll");
    } else if (sc >= visual) {
      $("header").addClass("scroll");
      $(".visual_txt").addClass("up");
    }

    if (sc >= visual && sc < con01) {
      $("#con01 .con01_inner").animate(
        { opacity: "1", "margin-top": "0px" },
        1000
      );
      $("#con01 .con01_bg").css({ transform: "scale(1)" });
    }

    if (sc >= con01 && sc < con02) {
      $("#con02 .partnership").animate(
        { opacity: "1", "margin-top": "0" },
        1000
      );
    }

    if (sc >= con02 && sc < con03) {
      $("#con03 .con03_bg").css({ transform: "scale(1)" });
      $("#con03 li").addClass("up");
    }

    if (sc >= con03 && sc < con04) {
      $("#con04 .performance").animate(
        { opacity: "1", "margin-top": "0" },
        1000
      );
    }

    if (sc >= con03 && sc < con04) {
      if (!active) {
        active = true;

        let i = 2800;
        end = setInterval(function () {
          i++;
          $(".down").text(i);
          if (i == 3000) {
            clearInterval(end);
          }
        });

        let j = 0;
        end2 = setInterval(function () {
          j++;
          $(".member").text(j);
          if (j == 150) {
            clearInterval(end2);
          }
        });

        let r = 0;
        end3 = setInterval(function () {
          r++;
          $(".city").text(r);
          if (r == 176) {
            clearInterval(end3);
          }
        });
      }
    }

    if (sc >= con04 && sc < con05) {
      $(".aboutstorytaco").animate({ opacity: "1", "margin-top": "0" }, 1000);
      $(".con05_bg").css({ transform: "scale(1)" });
    }

    if (sc >= con05 && sc < con06) {
      $(".special").animate({ opacity: "1", "margin-top": "0" }, function () {
        $(".person").animate({ opacity: "1", "margin-top": "0" }, 1000);
      });
    }

    if (sc >= con06 && sc < con07) {
      $(".slide").animate({ opacity: "1", "margin-top": "0" }, 1000);
      $(".content_box").animate({ opacity: "1", "margin-top": "0" }, 1000);
    }

    if (sc >= con07 && sc < con08) {
      $(".con08_bg").css({ transform: "scale(1)" });
    }
  });
});
