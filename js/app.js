window.addEventListener('DOMContentLoaded', event => {
    var navblur = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('nav-blur')
        } else {
            navbarCollapsible.classList.add('nav-blur')
        }
    };
    navblur();
    document.addEventListener('scroll', navblur);
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };
});

// اضافه کردن کلاس هنگام ورود
$(window).scroll(function () { 
    $('.add-scroll').each(function(){
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (pos < winTop + 900) {
            $(this).addClass('active')
        }
    });
});

// دکمه اسکرول به بالا
$(window).on('scroll', function() {
   var scrollTop = $(this).scrollTop();

   if (scrollTop > 100) {
    $('#btnTop').addClass('active');
   } else {
    $('#btnTop').removeClass('active');
   }
});

$('#btnTop').click(function (e) { 
    $('html,body').animate({
        scrollTop: 0
    },60);
    $('#btnTop').animate({

    })
});

// اضافه کرودن نام سایت در اول کار
var addText = "WEBRAMIN | ";
var pegeTitle = $('title').text();
var newTitle = addText + pegeTitle;
$('title').text(newTitle);
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
        document.getElementById('persianDate').innerText = showdate();
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
    document.getElementById('gregorianDate').innerText = showGregorianDate();
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        minutes = minutes < 10 ? '0' + minutes: minutes;
        seconds = seconds < 10 ? '0' + seconds: seconds;
        const timeString = hours + ':' + minutes + ':' + seconds;
        document.getElementById('clock').innerText = timeString;
        setTimeout(updateClock, 1000);
    }
    updateClock();
    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        minutes = minutes < 10 ? '0' + minutes: minutes;
        seconds = seconds < 10 ? '0' + seconds: seconds;
        return hours + ':' + minutes + ':' + seconds;
    }
    function sendEntryTime(entryTime) {
        // اینجا کد برای ارسال زمان به سرور یا API قرار می‌گیرد
        fetch('https://formspree.io/f/mrgrllzz', {
            method: 'POST', body: JSON.stringify({entryTim}), headers: {'Content-Type': 'application/json'}
    });
console.log('زمان ورود ارسال شد: ' + entryTime);
}
window.onload = function() {
const entryTime = new Date();
const formattedTime = formatTime(entryTime);
document.getElementById('entryTime').value = formattedTime;
document.getElementById('Time').innerText = formattedTime;
sendEntryTime(formattedTime);
}

$(".palet").each(function(){
var colorCode = $(this).text();
$(this).parent().css("background-color", colorCode);
});
$(document).ready(function() {
  function updateThemeColor() {
    var themeMode = $('html').attr('data-bs-theme');
    var metaThemeColor = $('meta[name="theme-color"]');

    if (themeMode === 'dark') {
      metaThemeColor.attr('content', '#000000'); // تنظیم رنگ تم تاریک
    } else {
      metaThemeColor.attr('content', '#ffffff'); // تنظیم رنگ تم روشن
    }
  }

  // اجرای تابع هنگام بارگذاری صفحه
  updateThemeColor();

  // اجرای تابع هنگام تغییر تم
  $(document.documentElement).on('data-bs-theme-change', updateThemeColor);
});
