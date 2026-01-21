$(function () {


      $('.company-history__item').each(function( index ) {
let height = $('.company-history__title').height() +  $('.headsblocks').height()
        if ($(window).width()<600){
          $( this ).css('top', 20*index + height)
        } else {
height = height + 20;
          if (index%2 == 0){
            $( this ).css('top', 15*index + height)
          } else {
            $( this ).css('top', 15*(index-1)+height)
          }
        }
      });



  var vids = $("video");
  $.each(vids, function () {
    this.controls = false;
  });

  $(".js-product-slider video, .js-application-slider video").on(
    "click",
    function (event) {
      //event.preventDefault();
    }
  );
  if ($(".js-product-slider").length) {
    var swiper = new Swiper(".js-product-slider", {
      preloadImages: false,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 2,
        loadOnTransitionStart: true,
      },
      loop: true,
      speed: 500,
      pagination: {
        el: ".js-product-slider-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}"><span>0${index + 1}</span></span>`;
        },
      },
      autoplay: {
        delay: 4900,
        disableOnInteraction: false,
      },

      on: {
        init: function () {
          var firstSlide = this.slides[0]; // Получаем первый слайд

          var title = firstSlide.querySelector(".product-slider__name");
          var desc = firstSlide.querySelector(".product-slider__desc");
          var nomenclature = firstSlide.querySelector(
            ".product-slider__nomenclature"
          );

          title.style.opacity = "1";
          title.style.transform = "translate3d(0, 0, 0)";
          title.style.transition = "all 0.5s linear";

          desc.style.opacity = "1";
          desc.style.transform = "translate3d(0, 0, 0)";
          desc.style.transition = "all 0.5s linear";

          nomenclature.style.opacity = "1";
          nomenclature.style.transform = "translate3d(0, 0, 0)";
          nomenclature.style.transition = "all 0.5s linear";

          var self = this;
          self.slides.forEach(function (slide, index) {
            var video = slide.querySelector("video");
            var posterImg = slide.querySelector(".js-poster-img");
            if (video) {
              video.addEventListener("loadeddata", function () {
                video.classList.add("loadeddata");
                video.play();
                var controls =
                  video.getElementsByClassName("video-controls")[0];
                controls.style.display = "none";
              });
              if (slide === self.slides[self.activeIndex]) {
                if (video && video.classList.contains("loadeddata")) {
                  posterImg.style.display = "none";
                  video.style.display = "block";
                  video.play();
                } else {
                  video.play();
                  video.style.display = "none";
                  posterImg.style.display = "block";
                }
              } else {
                video.pause();
              }
            }
          });
        },
        slideChangeTransitionStart: function () {
          console.log("slideChangeTransitionStart");
          var self = this;

          self.slides.forEach(function (slide, index) {
            var title = slide.querySelector(".product-slider__name");
            var desc = slide.querySelector(".product-slider__desc");
            var nomenclature = slide.querySelector(
              ".product-slider__nomenclature"
            );
            if (title) {
              if (slide === self.slides[self.activeIndex]) {
                setTimeout(function () {
                  title.style.opacity = "1";
                  title.style.transform = "translate3d(0, 0, 0)";
                  title.style.transition = "all 0.5s linear";

                  desc.style.opacity = "1";
                  desc.style.transform = "translate3d(0, 0, 0)";
                  desc.style.transition = "all 0.5s linear";

                  nomenclature.style.opacity = "1";
                  nomenclature.style.transform = "translate3d(0, 0, 0)";
                  nomenclature.style.transition = "all 0.5s linear";
                }, 300); // измените задержку по своему усмотрению
              } else {
                title.style.opacity = "0";
                title.style.transform = "translate3d(0, -40px, 0)";
                title.style.transition = "all 0.5s linear";

                desc.style.opacity = "0";
                desc.style.transform = "translate3d(0, -40px, 0)";
                desc.style.transition = "all 0.5s linear";

                nomenclature.style.opacity = "0";
                nomenclature.style.transform = "translate3d(0, -40px, 0)";
                nomenclature.style.transition = "all 0.5s linear";
              }
            }

            var video = slide.querySelector("video");
            var posterImg = slide.querySelector(".js-poster-img");

            if (video) {
              video.addEventListener("loadeddata", function () {
                video.addClass("loadeddata");
              });
              if (slide === self.slides[self.activeIndex]) {
                if (video && video.classList.contains("loadeddata")) {
                  posterImg.style.display = "none";
                  video.style.display = "block";
                  video.play();
                } else {
                  video.style.display = "none";
                  posterImg.style.display = "block";
                }
              } else {
                video.pause();
              }
            }
          });
        },
      },
    });
  }

  if ($(".js-application-slider").length) {
    var swiper = new Swiper(".js-application-slider", {
      preloadImages: false,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 2,
        loadOnTransitionStart: true,
      },
      speed: 500,
      loop: true,
      pagination: {
        el: ".js-application-slider-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}"><span>0${index + 1}</span></span>`;
        },
      },
     autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      on: {
        init: function () {
          var firstSlide = this.slides[0]; // Получаем первый слайд
          var firstVideo = firstSlide.querySelector("video"); // Находим видео на первом слайде
          if (firstVideo) {
            firstVideo.play(); // Запускаем видео
          }
          var title = firstSlide.querySelector(".application-slider__name");
          var desc = firstSlide.querySelector(".application-slider__text");
          var btn = firstSlide.querySelector(".application-slider__link");

          title.style.opacity = "1";
          title.style.transform = "translate3d(0, 0, 0)";
          title.style.transition = "all 0.5s linear";

          desc.style.opacity = "1";
          desc.style.transform = "translate3d(0, 0, 0)";
          desc.style.transition = "all 0.5s linear";

          btn.style.opacity = "1";
          btn.style.transform = "translate3d(0, 0, 0)";
          btn.style.transition = "all 0.5s linear";
        },
        slideChangeTransitionStart: function () {
          console.log("slideChangeTransitionStart");
          var self = this;

          self.slides.forEach(function (slide, index) {
            var title = slide.querySelector(".application-slider__name");
            var desc = slide.querySelector(".application-slider__text");
            var btn = slide.querySelector(".application-slider__link");
            if (title) {
              if (slide === self.slides[self.activeIndex]) {
                setTimeout(function () {
                  title.style.opacity = "1";
                  title.style.transform = "translate3d(0, 0, 0)";
                  title.style.transition = "all 0.5s linear";

                  desc.style.opacity = "1";
                  desc.style.transform = "translate3d(0, 0, 0)";
                  desc.style.transition = "all 0.5s linear";

                  btn.style.opacity = "1";
                  btn.style.transform = "translate3d(0, 0, 0)";
                  btn.style.transition = "all 0.5s linear";
                }, 300); // измените задержку по своему усмотрению
              } else {
                title.style.opacity = "0";
                title.style.transform = "translate3d(0, -40px, 0)";
                title.style.transition = "all 0.5s linear";

                desc.style.opacity = "0";
                desc.style.transform = "translate3d(0, -40px, 0)";
                desc.style.transition = "all 0.5s linear";

                btn.style.opacity = "0";
                btn.style.transform = "translate3d(0, -40px, 0)";
                btn.style.transition = "all 0.5s linear";
              }
            }

            var video = slide.querySelector("video");
            if (video) {
              if (slide === self.slides[self.activeIndex]) {
                video.play();
              } else {
                video.pause();
              }
            }
          });
        },
      },
    });
  }

  $(".totop").bind("click", function (e) {
    e.preventDefault();
    $("body,html").animate({ scrollTop: 0 }, 400);
  });

  $(".totop").hide();
  $(".selection-button").hide();

  $(window).scroll(function () {
    var bo = $(window).scrollTop();

    if (bo > $(window).height()) {
      $(".totop").show();
      $(".selection-button").show();
    } else {
      $(".totop").hide();
      $(".selection-button").hide();
    }

    var topDist = $(".btnscompares").position();
    console.log(topDist);
    if (topDist === undefined) var topd = 0;
    else var topd = topDist.top;
    if (topd == 0) topd = 130;
    // if (!$('.overpage').hasClass('product')){
    // topd = 120;//$(".bx-breadcrumb").position();
    // }
    if (bo > topd) {
      $(".overpopmenu").addClass("fixed");
    } else {
      $(".overpopmenu").removeClass("fixed");
    }
  });

  $("form.jsformix").on("submit", function (e) {
    e.preventDefault();
    var insubm = $(this).find(".jsblockord");

    if (insubm.hasClass("avaitme")) {
      alert("Форма отправляется");
      return false;
    }

    //insubm.text("РЎРѕР·РґР°РµС‚СЃСЏ");
    insubm.addClass("avaitme");

    var $formfaq = $(this),
      formfaqID = $formfaq.attr("id");

    // var formData = new FormData(this);
    var formData = new FormData($formfaq[0]);

    $.ajax($formfaq.attr("action"), {
      type: "post",
      dataType: "json",
      // context: this,
      // data: $formfaq.serialize(),
      // data: formData,
      enctype: "multipart/form-data",
      data: new FormData(this),
      processData: false,
      contentType: false,
    }).done(function (data) {
      if (data.result) {
        //insubm.text("РЎРѕР·РґР°РЅ");
        insubm.removeClass("avaitme");
        // alert(123);
        $(".jsformix input[name='fio']").val("");
        $(".jsformix input[name='phone']").val("");
        $(".jsformix input[name='dolsn']").val("");
        $(".jsformix input[name='email']").val("");
        $(".jsformix input[name='carrier_file_33']").val("");
        $(".jsformix .carrier-file-upload").html(
          "Загрузите все необходимые файлы (*.doc, *.docx, *.pdf, *.txt, *.rtf)<br>Максимальный размер загружаемого файла 15Мб"
        );

        $(".jsformix textarea[name='totext']").val("");

        if (data.rezume) {
          $(".bgpop").show();
          $("#goodforms2 .formtitle").text("Резюме успешно отправлено");
        }

        $("#goodforms2").addClass("active");
        $("#goodforms").removeClass("active");
      } else {
        //insubm.text("РџРѕРґС‚РІРµСЂР¶РґР°СЋ");
        insubm.removeClass("avaitme");

        if (data.errors) {
          alert(data.errors);
        }
      }
    });
  });

  $(document).on("change", ".jschaimgs", function (e) {
    var values = new Array();
    $.each($(".jschaimgs:checked"), function () {
      values.push($(this).attr("data-value"));
    });
    // console.log('qwe'+values);
    // alert(values);
    var mydata = values; //$(this).val();
    if (mydata == 2226203566) {
      ///Заполнение
      $(".jsimgdo").attr(
        "src",
        "/local/media/img/cabel/Общая_3_Наполнитель.png"
      );
    } else if (mydata == 4088798008) {
      ///Изоляция
      $(".jsimgdo").attr("src", "/local/media/img/cabel/Общая_2_Изоляция.png");
    } else if (mydata == 1842515611) {
      ///Оболочка
      $(".jsimgdo").attr(
        "src",
        "/local/media/img/cabel/Матовый_3_Оболочка.png"
      );
    } else if (mydata == "2226203566,4088798008") {
      ///Заполнение+Изоляция
      $(".jsimgdo").attr("src", "/local/media/img/cabel/cu-zi.jpg");
    } else if (mydata == "2226203566,1842515611") {
      ///Заполнение+Оболочка
      $(".jsimgdo").attr("src", "/local/media/img/cabel/cu-zo.jpg");
    } else if (mydata == "4088798008,1842515611") {
      ///Изоляция+Оболочка
      $(".jsimgdo").attr("src", "/local/media/img/cabel/cu-io.jpg");
    } else {
      $(".jsimgdo").attr("src", "/local/media/img/cabel/Матовый_4_Общая.png");
    }
  });

  $(document).ready(function (e) {
    var values = new Array();
    $.each($(".jschaimgs:checked"), function () {
      values.push($(this).attr("data-value"));
    });
    // console.log('qwe'+values);
    // alert(values);
    var mydata = values; //$(this).val();
    if (mydata == 2226203566) {
      ///Заполнение
      $(".jsimgdo").attr(
        "src",
        "/local/media/img/cabel/Общая_3_Наполнитель.png"
      );
    } else if (mydata == 4088798008) {
      ///Изоляция
      $(".jsimgdo").attr("src", "/local/media/img/cabel/Общая_2_Изоляция.png");
    } else if (mydata == 1842515611) {
      ///Оболочка
      $(".jsimgdo").attr(
        "src",
        "/local/media/img/cabel/Матовый_3_Оболочка.png"
      );
    } else if (mydata == "2226203566,4088798008") {
      ///Заполнение+Изоляция
      $(".jsimgdo").attr("src", "/local/media/img/cabel/cu-zi.jpg");
    } else if (mydata == "2226203566,1842515611") {
      ///Заполнение+Оболочка
      $(".jsimgdo").attr("src", "/local/media/img/cabel/cu-zo.jpg");
    } else if (mydata == "4088798008,1842515611") {
      ///Изоляция+Оболочка
      $(".jsimgdo").attr("src", "/local/media/img/cabel/cu-io.jpg");
    } else {
      $(".jsimgdo").attr("src", "/local/media/img/cabel/Матовый_4_Общая.png");
    }
  });

  $(document).on("click", ".showingsel", function (e) {
    e.preventDefault();
    $(this).parents(".overselectin").toggleClass("active");
  });

  $(document).on("click", ".showingsel_hide a", function (e) {
    var mytexts = $(this).text();
    $(this).parents(".overselectin").removeClass("active");
    $(this).parents(".overselectin").find(".showingsel_title").text(mytexts);
  });

  $(document).on("click", ".cariitmone", function (e) {
    $(this).toggleClass("open");
    $(this)
      .children(".cariitmone_wrapper")
      .children(".cariitmone_2")
      .slideToggle(300);
  });

  $(document).on("click", ".vxbeclose", function (e) {
    $("#goodforms").removeClass("active");
    $(".bgpop").hide();
  });

  $(document).on("click", ".vxbeclose2", function (e) {
    $("#goodforms2").removeClass("active");
    $(".bgpop").hide();
  });

  $(document).on("click", ".jsbezaya", function (e) {
    e.preventDefault();
    $("#goodforms").addClass("active");
    $(".bgpop").show();
  });

  $(document).on("click", ".navibl", function (e) {
    $("body").toggleClass("fixed");
    $(".overpopmenu").toggleClass("active");
    $(".overpopmenu .menuheads").slideToggle(300);
  });

  $(document).on("click", ".jscompare", function (e) {
    e.preventDefault();
    var isfavor = $(this).data("id");

    if ($(this).hasClass("delayclear")) {
      $(this).parents(".compare_onix_item").hide();
      $(".lespec[data-id='" + isfavor + "']").hide();
    }

    if ($(this).hasClass("active")) {
      var act = "del";

      $(this).removeClass("active");
      ///$(this).text("В сравнение");
    } else {
      var act = "add";
      $(this).addClass("active");

      //$(this).text("Добавлен");
    }
    $.post(
      "/local/api/getcompare.php",
      { isfavor: isfavor, act: act },
      function (data) {
        $(".incombtm3").text(data);
      }
    );
  });

  $(document).on(
    "click",
    ".prodsectionsin_text, .firstradiolist_text, .lisltcompr_text",
    function (e) {
      $(this)
        .closest(".prodsectionsin, .firstradiolist, .lisltcompr")
        .toggleClass("opened");
      $(this)
        .siblings(
          ".prodsectionsin_wrapper, .firstradiolist_wrapper, .lisltcompr_wrapper"
        )
        .slideToggle(300);
    }
  );
  $(".firstradiolist").on("click", "span.radio_list_checkbox", function (e) {
    $(this).closest(".firstradiolist").removeClass("opened");
    console.log($(this).children(".radio_list-text").text());
    $(this)
      .closest(".firstradiolist")
      .children(".firstradiolist_text")
      .text($(this).children(".radio_list-text").text());
    // $(this).closest('.firstradiolist_wrapper').slideUp(300);
  });

  $(document).on("click", ".jssectssotr", function (e) {
    e.preventDefault();
    var id = $(this).data("id");
    $(".jssectssotr").removeClass("active");
    $(this).addClass("active");

    $(".bodypeoples").removeClass("active");

    $(".bodypeoples[data-id='" + id + "']").addClass("active");
  });

  $(".mainsects1 .slifelekron").on("init", function (slick) {
    $(
      `.mainsects1 .slifelekron .slick-slide[data-slick-index="0"] .hretiks_l_title`
    ).addClass("fadeInUp");
    setTimeout(function () {
      $(
        `.mainsects1 .slifelekron [data-slick-index="0"] .hretiks_l_text`
      ).addClass("fadeInUp");
    }, 150);
    setTimeout(function () {
      $(
        `.mainsects1 .slifelekron [data-slick-index="0"] .hretiks_r_title`
      ).addClass("fadeInUp");
    }, 300);
    setTimeout(function () {
      $(
        `.mainsects1 .slifelekron [data-slick-index="0"] .nomenclatsblock`
      ).addClass("fadeInUp");
    }, 450);
    setTimeout(function () {
      $(
        `.mainsects1 .slifelekron [data-slick-index="0"] a.sliferlink`
      ).addClass("fadeInUp");
    }, 600);
  });
  $(".mainsects1 .slifelekron").on(
    "beforeChange",
    function (event, slick, curr, next) {
      $(`.mainsects1 .slifelekron .hretiks_l_text.fadeInUp`).removeClass(
        "fadeInUp"
      );
      setTimeout(function () {
        $(`.mainsects1 .slifelekron .hretiks_l_title.fadeInUp`).removeClass(
          "fadeInUp"
        );
      }, 150);
      setTimeout(function () {
        $(`.mainsects1 .slifelekron a.sliferlink.fadeInUp`).removeClass(
          "fadeInUp"
        );
      }, 300);
      setTimeout(function () {
        $(`.mainsects1 .slifelekron .nomenclatsblock.fadeInUp`).removeClass(
          "fadeInUp"
        );
      }, 450);
      setTimeout(function () {
        $(`.mainsects1 .slifelekron .hretiks_r_title.fadeInUp`).removeClass(
          "fadeInUp"
        );
      }, 600);
      setTimeout(function () {
        $(
          `.mainsects1 .slifelekron .slick-slide[data-slick-index="${next}"] .hretiks_l_title`
        ).addClass("fadeInUp");
        setTimeout(function () {
          $(
            `.mainsects1 .slifelekron [data-slick-index="${next}"] .hretiks_l_text`
          ).addClass("fadeInUp");
        }, 150);
        setTimeout(function () {
          $(
            `.mainsects1 .slifelekron [data-slick-index="${next}"] .hretiks_r_title`
          ).addClass("fadeInUp");
        }, 300);
        setTimeout(function () {
          $(
            `.mainsects1 .slifelekron [data-slick-index="${next}"] .nomenclatsblock`
          ).addClass("fadeInUp");
        }, 450);
        setTimeout(function () {
          $(
            `.mainsects1 .slifelekron [data-slick-index="${next}"] a.sliferlink`
          ).addClass("fadeInUp");
        }, 600);
      }, 900);
    }
  );

  $(".slifelekron").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      var currentSlideElement = $(
        ".slick-slide[data-slick-index=" + currentSlide + "]"
      );
      var currentVideo = currentSlideElement.find("video")[0];
      if (currentVideo.length) {
        if (!currentVideo.paused) {
          currentVideo.pause();
        }

        currentVideo.removeAttribute("autoplay");
      }
    }
  );

  $(".slifelekron").slick({
    dots: true,
    appendDots: $(".jsmynavs2"),
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
  });

  $(".mainsects2 .sliferones").on("init", function (slick) {
    $(
      `.mainsects2 .sliferones .slick-slide[data-slick-index="0"] .slifer-title`
    ).addClass("fadeInUp");
    setTimeout(function () {
      $(`.mainsects2 .sliferones [data-slick-index="0"] .slifer-text`).addClass(
        "fadeInUp"
      );
    }, 150);
    setTimeout(function () {
      $(`.mainsects2 .sliferones [data-slick-index="0"] a.sliferlink`).addClass(
        "fadeInUp"
      );
    }, 300);
  });
  $(".mainsects2 .sliferones").on(
    "beforeChange",
    function (event, slick, curr, next) {
      $(`.mainsects2 .sliferones a.sliferlink.fadeInUp`).removeClass(
        "fadeInUp"
      );
      setTimeout(function () {
        $(`.mainsects2 .sliferones .slifer-text.fadeInUp`).removeClass(
          "fadeInUp"
        );
      }, 100);
      setTimeout(function () {
        $(`.mainsects2 .sliferones .slifer-title.fadeInUp`).removeClass(
          "fadeInUp"
        );
      }, 200);
      setTimeout(function () {
        $(
          `.mainsects2 .sliferones .slick-slide[data-slick-index="${next}"] .slifer-title`
        ).addClass("fadeInUp");
        setTimeout(function () {
          $(
            `.mainsects2 .sliferones [data-slick-index="${next}"] .slifer-text`
          ).addClass("fadeInUp");
        }, 150);
        setTimeout(function () {
          $(
            `.mainsects2 .sliferones [data-slick-index="${next}"] a.sliferlink`
          ).addClass("fadeInUp");
        }, 300);
      }, 900);
    }
  );
  $(".sliferones").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      var currentSlideElement = $(
        ".slick-slide[data-slick-index=" + currentSlide + "]"
      );
      var currentVideo = currentSlideElement.find("video")[0];
      if (currentVideo.length) {
        if (!currentVideo.paused) {
          currentVideo.pause();
        }

        currentVideo.removeAttribute("autoplay");
      }
    }
  );
  $(".sliferones").slick({
    dots: true,
    appendDots: $(".jsmynavs"),
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".slidebyinners").slick({
    dots: false,
    //   autoplay: true,
    autoplaySpeed: 3000,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: $(".sliderbies"),
    prevArrow: '<div class="sliderbies_l"><span></span></div>',
    nextArrow: '<div class="sliderbies_r"><span></span></div>',
  });

  $(".samples_list").slick({
    centerMode: true,
    centerPadding: "20px",
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendArrows: $(".samples_list_been"),
    prevArrow: '<div class="sliderbies_l"><span></span></div>',
    nextArrow: '<div class="sliderbies_r"><span></span></div>',
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $(".sliderstip_list").slick({
    centerMode: true,
    centerPadding: "15%",
    initialSlide: 1,
    slidesToShow: 3,
    appendArrows: $(".sliderbies2"),
    prevArrow: '<div class="sliderbies_l"><span></span></div>',
    nextArrow: '<div class="sliderbies_r"><span></span></div>',
    responsive: [
      {
        breakpoint: 574,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "0",
          slidesToShow: 1,
        },
      },
    ],
  });

  if (window.innerWidth <= 50 && $(".compare_btn_wrapper").length > 0) {
    mobileComparison(
      $("#first_compare").attr("data-current"),
      $("#second_compare").attr("data-current")
    );
  }
  $(window).on("resize", function () {
    if (window.innerWidth <= 50 && $(".compare_btn_wrapper").length > 0) {
      mobileComparison(
        $("#first_compare").attr("data-current"),
        $("#second_compare").attr("data-current")
      );
    } else {
      $(".goods_compares_list .linetitle_good").css("order", "initial").show();
    }
  });
  $(".compare_btn_wrapper").on("click", "span.plus, span.minus", function () {
    let current = parseInt(
      $(this).closest(".compare_btn_wrapper").attr("data-current")
    );
    let max = parseInt(
      $(this).closest(".compare_btn_wrapper").attr("data-max")
    );
    if ($(this).hasClass("minus") && current > 1) {
      if (
        $(this)
          .closest(".compare_btn_wrapper")
          .siblings(".compare_btn_wrapper")
          .attr("data-current") ==
        current - 1
      ) {
        if (current - 2 > 0) {
          current = current - 2;
        }
      } else {
        current--;
      }
    } else if ($(this).hasClass("plus") && current < max) {
      if (
        $(this)
          .closest(".compare_btn_wrapper")
          .siblings(".compare_btn_wrapper")
          .attr("data-current") ==
        current + 1
      ) {
        if (current + 2 <= max) {
          current = current + 2;
        }
      } else {
        current++;
      }
    }
    $(this).closest(".compare_btn_wrapper").attr("data-current", current);
    $(this).siblings(".number_info").children(".current_compare").text(current);
    mobileComparison(
      $("#first_compare").attr("data-current"),
      $("#second_compare").attr("data-current")
    );
  });
  // $( window ).on( "scroll", function() {
  //   fadeScroll();
  // });
  // fadeScroll();
  

});

$(document).ready(function(){
  $('.phone_mask').mask('+7(000) 000-0000'); //specifying 
  
$('.email_mask').on('blur', function () {
  let email = $(this).val();
  
  if (email.length > 0
    && /.+\@.+\..+/.test(email)) {
    // Проверка успешна - email в правильном формате
  } else {
    // Email не соответствует формату, очищаем поле
    $('.email_mask').val('');
  }
});
  /*$('.email_mask').inputmask({

  });*/
});


// var windowHeight = window.innerHeight;

// function fadeScroll() {
//   let top = $(window).scrollTop();
//   $('.fading-screen, .fading-screen-last').removeClass('current').removeClass('scrolled');
//   if (top <= windowHeight) {
//     $('.fading-screen[data-screen="1"]').addClass('current');
//   }
//   if (top > windowHeight && top <= windowHeight * 2) {
//     $('.fading-screen[data-screen="2"]').addClass('current');
//   } else if (top > windowHeight * 2 && top < windowHeight * 2.8){
//     $('.fading-screen-last').addClass('current');
//   } else {
//     $('.fading-screen-last').addClass('scrolled');
//   }
// }

function mobileComparison(first_good, second_good) {
  first_good++;
  second_good++;
  $(".goods_compares_list .linetitle_good").css("order", "0").hide();
  $(".goods_compares_list .linetitle_good:nth-of-type(" + first_good + ")")
    .css("order", "1")
    .show();
  $(".goods_compares_list .linetitle_good:nth-of-type(" + second_good + ")")
    .css("order", "2")
    .show();
}

var loadFile = function (event, names, outputs, fsdata) {
  var output = document.getElementById(outputs);

  var filename = event.target.files[0].name;

  $(".custom-file-upload").text(filename);

  //  output.src = URL.createObjectURL(event.target.files[0]);
  //  output.onload = function() {
  //    URL.revokeObjectURL(output.src) // free memory
  //  }
};

var loadCarrierFile = function (event, names, outputs, fsdata) {
  var output = document.getElementById(outputs);

  var filename = event.target.files[0].name;

  $(".carrier-file-upload").text(filename);

  //  output.src = URL.createObjectURL(event.target.files[0]);
  //  output.onload = function() {
  //    URL.revokeObjectURL(output.src) // free memory
  //  }
};
 

$(document).ready(function(){
var PagenationContainer = $('body');
    PagenationContainer.on('click','.more_goods', function (evt) {
		evt.preventDefault();
        var ajaxurl = PagenationContainer.find('div.bx-pagination ul li.bx-pag-next a').attr('href');
        var thatTxt = $(this).html();
        var that = this;
        $(this).html('...');
        if(ajaxurl!==undefined){
            $.ajax({
                type: "POST",
                url: ajaxurl,
                data: {'ajax_get_page': 'y'},
                dataType: "html",
                success: function (data) {
                    var AppendLi = $(data).find('.cariitmin .cariitmone');
                    var Pagination = $(data).find('.bx-pagination ul').html();
                    PagenationContainer.find('.cariitmin').append(AppendLi);
                    PagenationContainer.find('.bx-pagination ul').html(Pagination);
					var ajaxnewurl = PagenationContainer.find('div.bx-pagination ul li.bx-pag-next a').attr('href');
					if (ajaxnewurl!==undefined){
					} else {
						$('.more_goods').css('display', 'none');
					}
                    //history.pushState('', '', ajaxurl);
                    $(that).html(thatTxt);
                }
            });
        }
        return false;
    });
	
	$('body').on('click','.select_sections', function (event) {
		$('main .container').addClass('opacity');
		$(this).toggleClass('active');
		
		var selectedSections = $('.select_sections.active');
		
		var dataToSend = [];
		selectedSections.each(function() {
			dataToSend.push($(this).data('section'));
		});
		
		$.ajax({
			url: '/product/compare/',
			method: 'POST',
			data: {
				sections: dataToSend
			},
			success: function(response) {
				$('main').html($(response).find('main').html());
			},
			error: function(xhr, status, error) {
				// Обработка ошибки
			}
		});
	});



});