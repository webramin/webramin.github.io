$(document).ready(function() {
    // تابع سایه ناوبری هنگام اسکرول
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

    // تابع اضافه کردن کلاس هنگام ورود
    $(window).scroll(function () { 
        $('.add-scroll').each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + 900) {
                $(this).addClass('active')
            }
        });
    });

    // تابع دکمه اسکرول به بالا
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

    // تابع اضافه کردن نام سایت در اول کار
    var addText = "WEBRAMIN | ";
    var pegeTitle = $('title').text();
    var newTitle = addText + pegeTitle;
    $('title').text(newTitle);

    // تابع نمایش تاریخ شمسی
    function showdate() {
        // کد تابع showdate()
    }
    document.getElementById('persianDate').innerText = showdate();

    // تابع نمایش تاریخ میلادی
    function showGregorianDate() {
        // کد تابع showGregorianDate()
    }
    document.getElementById('gregorianDate').innerText = showGregorianDate();

    // تابع به روز رسانی ساعت
    function updateClock() {
        // کد تابع updateClock()
    }
    updateClock();

    // تابع فرمت کردن زمان
    function formatTime(date) {
        // کد تابع formatTime()
    }

    // تابع ارسال زمان ورود
    function sendEntryTime(entryTime) {
        // کد تابع sendEntryTime()
    }

    // اجرای تابع ارسال زمان ورود هنگام بارگذاری صفحه
    window.onload = function() {
        const entryTime = new Date();
        const formattedTime = formatTime(entryTime);
        document.getElementById('entryTime').value = formattedTime;
        document.getElementById('Time').innerText = formattedTime;
        sendEntryTime(formattedTime);
    }

    // تابع تغییر رنگ پالت
    $(".palet").each(function(){
        var colorCode = $(this).text();
        $(this).parent().css("background-color", colorCode);
    });

    // تابع به روز رسانی رنگ تم
    function updateThemeColor() {
      var themeMode = $('html').attr('data-bs-theme');
      var metaThemeColor = $('meta[name="theme-color"]');

      if (themeMode === 'dark') {
        metaThemeColor.attr('content', '#000000'); // تنظیم رنگ تم تاریک
      } else {
        metaThemeColor.attr('content', '#ffffff'); // تنظیم رنگ تم روشن
      }
    }

    // اجرای تابع به روز رسانی رنگ تم هنگام تغییر تم و بارگذاری صفحه
    $(document.documentElement).on('data-bs-theme-change', updateThemeColor);
    $(window).on('load', updateThemeColor);
});
