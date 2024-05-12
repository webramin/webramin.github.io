```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Your Website</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <div class="dropdown">
            <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="icon icon-sun"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#" id="themeToggleLight"><i class="icon icon-sun"></i> Light mode</a></li>
              <li><a class="dropdown-item" href="#" id="themeToggleDark"><i class="icon icon-moon"></i> Dark mode</a></li>
              <li><a class="dropdown-item" href="#" id="themeToggleAuto"><i class="icon icon-auto"></i> Auto mode</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

```text
<button class="btn btn-sm btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i class="icon icon-sun"></i>
</button> به
<i class="icon icon-sun" id="icon-mod-set"></i> باشد و هر موقع 
<li><a class="dropdown-item" href="#" id="themeToggleLight"><i class="icon icon-sun"></i> Light mode</a></li>
              <li><a class="dropdown-item" href="#" id="themeToggleDark"><i class="icon icon-moon"></i> Dark mode</a></li>
              <li><a class="dropdown-item" href="#" id="themeToggleAuto"><i class="icon icon-auto"></i> Auto mode</a></li>
       یکی از حالت ها ماند روی ان سویچ و به ان کلاس dropdown-item active  دهد و قابلیت ذخیره سازی موقت را داشته باشد هم برای حالت و هم برای 
 <i class="icon icon-sun" id="icon-mod-set"></i> و dropdown-item active ذخیره شود حالت ان ها و برای تغییر حالت data-bs-theme="dark | light" باشد و در body ایجاد شود و برای حالت themeToggleAuto از روی ساعت سیستم حالت را در body قرار بدهد مثلا اگرساعت 6 عصر بود تا 6 صبح اگر کاربر وارد شد حالت dark باشد وگر نه light
```
