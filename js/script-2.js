$(document).ready(function() {
  // AOS را مقداردهی اولیه می‌کند
  AOS.init();

  // زمان را فرمت می‌کند
  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return hours + ':' + minutes + ':' + seconds;
  }

  // زمان را هنگام بارگذاری صفحه نمایش می‌دهد
  $('#Time').text(formatTime(new Date()));

  // رنگ پس‌زمینه عناصر با کلاس .palet را تنظیم می‌کند
  $('.palet').each(function() {
    var colorCode = $(this).text();
    $(this).parent().css("background-color", colorCode);
  });

  // رنگ تم را به‌روز می‌کند
  function updateThemeColor() {
    var themeMode = $('html').attr('data-bs-theme');
    var metaThemeColor = $('meta[name="theme-color"]');

    if (themeMode === 'dark') {
      metaThemeColor.attr('content', '#000000'); // رنگ تم تاریک را تنظیم می‌کند
    } else {
      metaThemeColor.attr('content', '#ffffff'); // رنگ تم روشن را تنظیم می‌کند
    }
  }

  // updateThemeColor را هنگام بارگذاری صفحه و تغییر تم اجرا می‌کند
  updateThemeColor();
  $(document.documentElement).on('data-bs-theme-change', updateThemeColor);

  // افکت تار شدن را به نوار ناوبری هنگام اسکرول اضافه می‌کند
  $(window).on('DOMContentLoaded', function() {
    var navblur = function() {
      const navbarCollapsible = $('body').find('#mainNav');
      if (navbarCollapsible.length) {
        if ($(window).scrollTop() === 0) {
          navbarCollapsible.removeClass('nav-blur');
        } else {
          navbarCollapsible.addClass('nav-blur');
        }
      }
    };
    navblur();
    $(document).on('scroll', navblur);

    // ScrollSpy را مقداردهی اولیه می‌کند
    const mainNav = $('body').find('#mainNav');
    if (mainNav.length) {
      new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        rootMargin: '0px 0px -40%',
      });
    }
  });

  // کلاس active را به عناصر با کلاس .add-scroll هنگام اسکرول اضافه می‌کند
  $(window).on('scroll', function() {
    $('.add-scroll').each(function() {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + 900) {
        $(this).addClass('active');
      }
    });
  });

  // دکمه "بازگشت به بالا" را هنگام اسکرول نمایش/مخفی می‌کند
  $(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 100) {
      $('#btnTop').addClass('active');
    } else {
      $('#btnTop').removeClass('active');
    }
  });

  // هنگام کلیک بر روی دکمه "بازگشت به بالا"، به بالای صفحه می‌رود
  $('#btnTop').on('click', function(e) {
    $('html,body').animate({
      scrollTop: 0
    }, 60);
  });

  // عنوان صفحه را به‌روز می‌کند
  var addText = "WEBRAMIN | ";
  var pageTitle = $('title').text();
  var newTitle = addText + pageTitle;
  $('title').text(newTitle);

  // تاریخ شمسی را نمایش می‌دهد
  function showdate() {
    // ... (کد موجود)
  }
  $('#persianDate').text(showdate());

  // تاریخ میلادی را نمایش می‌دهد
  function showGregorianDate() {
    // ... (کد موجود)
  }
  $('#gregorianDate').text(showGregorianDate());

  // ساعت را به‌روز می‌کند
  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    const timeString = hours + ':' + minutes + ':' + seconds;
    $('#clock').text(timeString);
    setTimeout(updateClock, 1000);
  }
  updateClock();

  // پیش‌بارگذار را نمایش/مخفی می‌کند
  $(window).on('load', function() {
    $(".Preloader").addClass("hidden");
  });
  $(window).on('beforeunload', function() {
    $(".Preloader").removeClass("hidden");
  });

  // پست‌های جدید را از JSON نمایش می‌دهد
  function displayPostsFromJSON() {
    const $navPostUl = $("#naw-post-ul");

    let postHtml = "";
    $.each(datapost.slice(0, 5), function(index, post) {
      postHtml += `
        <li class="nav-item mb-2">
          <a href="${post.link}" class="nav-link p-0 text-body-secondary">${post.title}</a>
        </li>
      `;
    });

    $navPostUl.html(`
      <ul class="nav flex-column text-end pe-2" id="naw-post-ul">
        ${postHtml}
      </ul>
    `);
  }

  // به صفحه قبلی بازمی‌گردد
  function goBack() {
    window.history.back();
  }
});
