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
  week = new Array("یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه");
  months = new Array("فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند");
  a = new Date();
  d = a.getDay();
  day = a.getDate();
  month = a.getMonth()+1;
  year = a.getYear()-100;
  year = (year == 0)?2000: year;
  (year < 1000)? (year += 2000): true;
  year -= ((month < 3) || ((month == 3) && (day < 21)))? 622: 621;
  switch (month) {
    case 1: (day < 21)? (month = 10, day += 10): (month = 11, day -= 20); break;
    case 2: (day < 20)? (month = 11, day += 11): (month = 12, day -= 19); break;
    case 3: (day < 21)? (month = 12, day += 9): (month = 1, day -= 20); break;
    case 4: (day < 21)? (month = 1, day += 11): (month = 2, day -= 20); break;
    case 5:
    case 6: (day < 22)? (month -= 3, day += 10): (month -= 2, day -= 21); break;
    case 7:
    case 8:
    case 9: (day < 23)? (month -= 3, day += 9): (month -= 2, day -= 22); break;
    case 10: (day < 23)? (month = 7, day += 8): (month = 8, day -= 22); break;
    case 11:
    case 12: (day < 22)? (month -= 3, day += 9): (month -= 2, day -= 21); break;
    default: break;
  }
  return week[d]+" "+day+" "+months[month-1]+" "+ year;
}
  $('#persianDate').text(showdate());

  // تاریخ میلادی را نمایش می‌دهد
 function showGregorianDate() {
  const weekDays = ["یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
    "شنبه"];
  const months = ["ژانویه",
    "فوریه",
    "مارس",
    "آوریل",
    "مه",
    "ژوئن",
    "ژوئیه",
    "آگوست",
    "سپتامبر",
    "اکتبر",
    "نوامبر",
    "دسامبر"];
  const today = new Date();
  const dayOfWeek = weekDays[today.getDay()];
  const day = today.getDate();
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  return `${dayOfWeek} ${day} ${month} ${year}`;
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
//پنج پست‌های جدید را از JSON نمایش می‌دهد
  function displayPostsFromJSON() {
  const $navPostUl = $("#naw-post-ul");

  let postHtml = "";
  $.each(datapost, function(index, post) {
    postHtml += `
      <li class="nav-item mb-2">
        <a href="${post.link}" class="nav-link p-0 text-body-secondary" target="_blank">${post.title}</a>
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
