$(document).ready(function() {
  // تابع برای گرفتن اطلاعات سیستم و شبکه
  function getSystemInfo() {
    var systemInfo = {
      platform: navigator.platform,
      userAgent: navigator.userAgent,
      screenWidth: screen.width,
      screenHeight: screen.height,
      colorDepth: screen.colorDepth,
      pixelDepth: screen.pixelDepth,
      hardwareConcurrency: navigator.hardwareConcurrency,
      language: navigator.language,
      onLine: navigator.onLine,
      browserInfo: getBrowserInfo(),
      deviceType: getDeviceType(),
      osInfo: getOSInfo(),
      deviceModel: getDeviceModel()
    };
    return systemInfo;
  }

  // تابع برای تشخیص نوع دستگاه
  function getDeviceType() {
    var userAgent = navigator.userAgent;
    var deviceType = 'Unknown';

    if (/mobile/i.test(userAgent)) {
      if (/tablet/i.test(userAgent) || /ipad/i.test(userAgent)) {
        deviceType = 'Tablet';
      } else {
        deviceType = 'Mobile';
      }
    } else {
      if (/windows/i.test(userAgent) || /linux/i.test(userAgent) || /unix/i.test(userAgent)) {
        deviceType = 'Desktop';
      } else if (/mac/i.test(userAgent)) {
        deviceType = 'Laptop';
      }
    }

    return deviceType;
  }

  // تابع برای گرفتن نوع مرورگر
  function getBrowserInfo() {
    var ua = navigator.userAgent, tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    return M.join(' ');
  }

  // تابع برای گرفتن نوع سیستم عامل
  function getOSInfo() {
    var OSName = "Unknown OS";
    if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
    if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";
    if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
    if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
    return OSName;
  }

  // گرفتن تاریخ و زمان به صورت شمسی
  var persianDate = new Date().toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  var persianTime = new Date().toLocaleTimeString('fa-IR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  // گرفتن آی پی کاربر
  $.getJSON("https://api.ipify.org?format=json", function(data) {
    var ip = data.ip;

    // گرفتن اطلاعات سیستم و شبکه
    var systemInfo = getSystemInfo();

    // ارسال اطلاعات به آدرس مورد نظر
    $.ajax({
      url: "https://formspree.io/f/mnqleknz",
      type: "POST",
      data: {
        date: persianDate,
        time: persianTime,
        ip: ip,
        systemInfo: JSON.stringify(systemInfo)
      },
      success: function(response) {
        console.log("اطلاعات با موفقیت ارسال شد.");
      },
      error: function(xhr, status, error) {
        console.error("خطا در ارسال اطلاعات: " + error);
      }
    });
  });
});
