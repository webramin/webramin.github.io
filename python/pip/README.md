
# 📚 مستند کامل راهنمای pip (مدیر بسته پایتون)

**آخرین بروزرسانی:** ۱۴۰۵
**سازگار با:** pip 23.x و بالاتر، پایتون 3.8+

---

## فهرست مطالب
1. [مقدمه](#مقدمه)
2. [نصب pip](#نصب-pip)
3. [دستورات پایه](#دستورات-پایه)
4. [مدیریت بسته‌ها](#مدیریت-بستهها)
5. [کار با فایل requirements](#کار-با-فایل-requirements)
6. [مدیریت محیط مجازی](#مدیریت-محیط-مجازی)
7. [گزینه‌های پیشرفته](#گزینههای-پیشرفته)
8. [عیب‌یابی و راه‌حل‌های رایج](#عیبیابی-و-راهحلهای-رایج)
   - [خطای pip not recognized در ویندوز (راه‌حل دائمی)](#خطای-pip-not-recognized-در-ویندوز-راهحل-دائمی)
   - [سایر خطاها](#سایر-خطاها)
9. [بهترین روش‌ها](#بهترین-روشها)
10. [مرجع کامل دستورات و گزینه‌ها](#مرجع-کامل-دستورات-و-گزینهها)
11. [نکات امنیتی](#نکات-امنیتی)
12. [لینک‌های مفید](#لینکهای-مفید)

---

## مقدمه

**pip** مخفف "Pip Installs Packages" است. این ابزار خط فرمان، مدیر بسته رسمی پایتون می‌باشد که برای نصب، بروزرسانی، حذف و مدیریت کتابخانه‌ها و وابستگی‌ها از مخزن PyPI (Python Package Index) استفاده می‌شود.

### ویژگی‌های اصلی
- ✅ نصب و حذف آسان کتابخانه‌ها
- ✅ مدیریت وابستگی‌ها به صورت خودکار
- ✅ نصب نسخه خاص یا محدوده نسخه
- ✅ کار با فایل `requirements.txt`
- ✅ پشتیبانی از محیط‌های مجازی
- ✅ قابلیت نصب از روی Git، URL، فایل محلی
- ✅ مدیریت حافظه کش (cache)

---

## نصب pip

### در ویندوز
هنگام نصب پایتون از [python.org](https://python.org) حتماً گزینه **"Add Python to PATH"** را تیک بزنید. اگر فراموش کردید:

```powershell
# روش ۱: نصب با دستور
python -m ensurepip --upgrade

# روش ۲: ارتقاء pip به آخرین نسخه
python -m pip install --upgrade pip
```

### در لینوکس (اوبونتو/دبیان)
```bash
sudo apt update
sudo apt install python3-pip
python3 -m pip install --upgrade pip
```

### در macOS
```bash
brew install python3
python3 -m pip install --upgrade pip
```

### بررسی نصب موفق
```bash
pip --version
# خروجی نمونه: pip 23.3.1 from /usr/lib/python3/dist-packages/pip (python 3.11)
```

---

## دستورات پایه

| دستور | توضیح | مثال |
|-------|-------|------|
| `install` | نصب بسته | `pip install flask` |
| `uninstall` | حذف بسته | `pip uninstall flask` |
| `list` | لیست بسته‌های نصب شده | `pip list` |
| `show` | نمایش اطلاعات یک بسته | `pip show flask` |
| `search` | جستجو در PyPI | `pip search "web framework"` |
| `freeze` | خروجی لیست بسته‌ها به فرمت requirements | `pip freeze > requirements.txt` |
| `check` | بررسی سازگاری وابستگی‌ها | `pip check` |
| `cache` | مدیریت کش | `pip cache purge` |
| `help` | راهنمای دستور | `pip help install` |

---

## مدیریت بسته‌ها

### نصب کتابخانه

```bash
# آخرین نسخه
pip install requests

# نسخه خاص
pip install requests==2.31.0

# محدوده نسخه (>=1.0, <2.0)
pip install "requests>=2.0,<3.0"

# چند بسته همزمان
pip install flask django numpy

# نصب از روی فایل محلی (whl یا tar.gz)
pip install package.whl
pip install ./local-package

# نصب از مخزن Git
pip install git+https://github.com/user/repo.git

# نصب در حالت توسعه (editable)
pip install -e ./my-package
```

### حذف کتابخانه

```bash
# حذف یک بسته
pip uninstall requests

# حذف چند بسته
pip uninstall flask django -y

# حذف بدون درخواست تأیید
pip uninstall -y numpy
```

### بروزرسانی کتابخانه

```bash
# بروزرسانی یک بسته
pip install --upgrade flask

# بروزرسانی همه بسته‌ها (نیاز به اسکریپت کمکی)
pip list --outdated | awk '{print $1}' | xargs -n1 pip install -U
```

### نمایش اطلاعات دقیق

```bash
pip show cryptography
# نمایش نام، نسخه، مکان، وابستگی‌ها، نیازمندی‌ها

pip show -f flask   # همراه با فایل‌های نصب شده
```

---

## کار با فایل requirements

فایل `requirements.txt` یک فایل متنی است که لیست بسته‌های مورد نیاز پروژه را مشخص می‌کند.

### ایجاد فایل requirements

```bash
# ذخیره همه بسته‌های محیط فعلی
pip freeze > requirements.txt

# ذخیره فقط بسته‌های اصلی (بدون وابستگی‌های داخلی)
pip list --format=freeze | grep -v "pkg-resources" > requirements.txt
```

### نصب از روی فایل requirements

```bash
# نصب معمولی
pip install -r requirements.txt

# نصب بدون استفاده از کش
pip install --no-cache-dir -r requirements.txt

# نصب با بروزرسانی بسته‌های موجود
pip install --upgrade -r requirements.txt
```

### مثال محتوای فایل requirements.txt

```txt
# فایل نمونه requirements.txt
flask==2.3.3
cryptography>=41.0.0,<42.0.0
requests>=2.31.0
django~=4.2.0      # معادل >=4.2.0, ==4.2.*
numpy>=1.24.0,<2.0.0
pandas
-e git+https://github.com/user/repo.git#egg=myrepo
```

### جدا کردن وابستگی‌های توسعه و تولید

```bash
# فایل requirements-prod.txt (فقط نیازمندی‌های اصلی)
pip freeze | grep -v "pytest\|sphinx\|black" > requirements-prod.txt

# فایل requirements-dev.txt
echo "-r requirements-prod.txt" > requirements-dev.txt
echo "pytest==7.4.0" >> requirements-dev.txt
echo "black==23.10.0" >> requirements-dev.txt
```

---

## مدیریت محیط مجازی

استفاده از محیط مجازی یک **بهترین روش** برای ایزوله کردن وابستگی‌های هر پروژه است.

### ایجاد و فعال‌سازی

```bash
# ایجاد محیط مجازی با نام .venv (یا هر نام دیگر)
python -m venv .venv

# فعال‌سازی در ویندوز
.venv\Scripts\activate

# فعال‌سازی در لینوکس/macOS
source .venv/bin/activate
```

### کار در محیط مجازی

```bash
# بعد از فعال‌سازی، نشانگر (.venv) در ترمینال ظاهر می‌شود
(.venv) $ pip install flask   # نصب در همین محیط
(.venv) $ pip freeze > requirements.txt

# خروج از محیط
deactivate
```

### حذف محیط مجازی
```bash
# فقط پوشه را حذف کنید
rm -rf .venv   # لینوکس/macOS
rmdir /s .venv # ویندوز (CMD)
Remove-Item -Recurse -Force .venv  # PowerShell
```

---

## گزینه‌های پیشرفته

### گزینه‌های نصب

| گزینه | توضیح |
|-------|-------|
| `--user` | نصب برای کاربر فعلی (بدون دسترسی admin) |
| `--no-deps` | نصب بدون وابستگی‌ها |
| `--no-cache-dir` | نصب بدون استفاده از کش (برای رفع خطاهای کش) |
| `--upgrade` یا `-U` | بروزرسانی بسته به آخرین نسخه |
| `--force-reinstall` | نصب مجدد حتی اگر قبلاً نصب شده باشد |
| `--quiet` یا `-q` | کاهش خروجی (فقط خطاها) |
| `--verbose` یا `-v` | نمایش جزئیات کامل |
| `--proxy` | نصب از طریق پروکسی |

### مثال‌های ترکیبی

```bash
# نصب برای کاربر، بدون کش، با بروزرسانی
pip install --user --no-cache-dir --upgrade flask

# نصب بدون وابستگی‌ها و سپس نصب جداگانه وابستگی‌ها
pip install --no-deps mypackage
pip install -r requirements.txt

# نصب با پروکسی
pip install --proxy http://user:pass@proxy.example.com:8080 flask
```

### مدیریت کش (Cache)

```bash
# مشاهده اطلاعات کش
pip cache info

# لیست بسته‌های موجود در کش
pip cache list

# حذف یک بسته خاص از کش
pip cache remove flask

# پاک کردن کل کش
pip cache purge
```

### ساخت فایل wheel

```bash
# ساخت wheel از پروژه جاری
pip wheel . -w ./dist

# ساخت wheel از یک بسته
pip wheel flask -w ./wheels
```

### محاسبه هش فایل

```bash
pip hash package.whl
# خروجی: --hash=sha256:abc123...
```

---

## عیب‌یابی و راه‌حل‌های رایج

### خطای "pip not recognized" در ویندوز (راه‌حل دائمی)

اگر در PowerShell یا CMD با خطای زیر مواجه شدید:

```
pip: The term 'pip' is not recognized as a name of a cmdlet, function...
```

**علت:** مسیر پوشه `Scripts` پایتون به متغیر محیطی `PATH` اضافه نشده است.

**راه‌حل سریع (موقتی):**
```bash
python -m pip install package_name
```

**راه‌حل دائمی (تنظیم PATH با PowerShell به عنوان Administrator):**

1. **PowerShell را به عنوان Administrator اجرا کنید** (کلیک راست → Run as administrator)
2. دستور زیر را با **مسیر صحیح پایتون خود** اجرا کنید:

```powershell
[Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Users\HP\AppData\Local\Python\pythoncore-3.14-64\Scripts", [EnvironmentVariableTarget]::User)
```

> **نکته:** مسیر بالا را با مسیر واقعی پایتون خود جایگزین کنید. برای پیدا کردن مسیر پایتون:
> ```powershell
> (Get-Command python).Source
> ```
> سپس به جای `python.exe` به پوشه `Scripts` بروید.

3. **PowerShell را بسته و دوباره باز کنید**.
4. بررسی کنید: `pip --version`

از این پس می‌توانید مستقیماً از `pip install ...` استفاده کنید.

---

### سایر خطاها

#### خطای Permission denied

```bash
# راه‌حل 1: نصب برای کاربر
pip install --user package

# راه‌حل 2: استفاده از sudo (لینوکس/macOS)
sudo pip install package

# راه‌حل 3: استفاده از محیط مجازی (توصیه شده)
python -m venv .venv
source .venv/bin/activate
pip install package
```

#### خطای Cache entry deserialization failed

```bash
# پاک کردن کش
pip cache purge

# یا نصب بدون کش
pip install --no-cache-dir package
```

#### خطای SSL Certificate

```bash
# گزینه 1: ارتقاء certifi
pip install --upgrade certifi

# گزینه 2: نصب با اعتماد به هاست (فقط در محیط امن)
pip install --trusted-host pypi.org --trusted-host files.pythonhosted.org package
```

#### خطای نسخه پایتون ناسازگار

```bash
# بررسی نسخه پایتون
python --version

# نصب نسخه قدیمی‌تر کتابخانه
pip install "django<3.0"

# یا ارتقاء پایتون
```

#### خطای "Could not find a version that satisfies the requirement"

```bash
# بررسی کنید که نام بسته درست باشد
pip search package_name

# یا از مخزن آینه استفاده کنید
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple package_name
```

#### ابزارهای دیباگ

```bash
# نمایش اطلاعات کامل محیط
pip debug

# بررسی سازگاری وابستگی‌ها
pip check

# نمایش اطلاعات مفصل هنگام نصب
pip install package --verbose
```

---

## بهترین روش‌ها

1. **همیشه از محیط مجازی استفاده کنید**  
   `python -m venv .venv`

2. **نسخه دقیق کتابخانه‌ها را در requirements مشخص کنید**  
   `flask==2.3.3` نه `flask`

3. **فایل requirements را به‌روز نگه دارید**  
   بعد از هر `pip install`، دستور `pip freeze > requirements.txt` را اجرا کنید.

4. **از دو فایل requirements استفاده کنید**  
   - `requirements-prod.txt` برای وابستگی‌های اصلی  
   - `requirements-dev.txt` برای ابزارهای توسعه (pytest, black, ...)

5. **به‌طور منظم کش pip را پاک کنید**  
   `pip cache purge`

6. **قبل از نصب، امنیت بسته را بررسی کنید**  
   ```bash
   pip install safety
   safety check
   ```

7. **از نصب سراسری بسته‌ها خودداری کنید** مگر در موارد ضروری.

8. **برای پروژه‌های تیمی، از `pip-tools` یا `poetry` استفاده کنید** برای مدیریت دقیق وابستگی‌ها.

---

## مرجع کامل دستورات و گزینه‌ها

### جدول دستورات اصلی

| دستور | توضیح | معادل کوتاه |
|-------|-------|-------------|
| `install` | نصب بسته | - |
| `uninstall` | حذف بسته | - |
| `list` | لیست بسته‌ها | - |
| `show` | نمایش جزئیات بسته | - |
| `search` | جستجو در PyPI | - |
| `freeze` | خروجی به فرمت requirements | - |
| `check` | بررسی سازگاری | - |
| `config` | مدیریت تنظیمات | - |
| `cache` | مدیریت کش | - |
| `download` | دانلود بسته بدون نصب | - |
| `wheel` | ساخت فایل wheel | - |
| `hash` | محاسبه هش | - |
| `debug` | اطلاعات دیباگ | - |
| `help` | راهنما | `-h` |

### گزینه‌های پرکاربرد (Options)

| گزینه کامل | کوتاه | توضیح |
|------------|-------|-------|
| `--requirement` | `-r` | نصب از روی فایل requirements |
| `--upgrade` | `-U` | بروزرسانی بسته |
| `--user` | - | نصب برای کاربر فعلی |
| `--no-cache-dir` | - | عدم استفاده از کش |
| `--no-deps` | - | نصب بدون وابستگی‌ها |
| `--force-reinstall` | - | نصب مجدد اجباری |
| `--quiet` | `-q` | کاهش خروجی |
| `--verbose` | `-v` | افزایش خروجی |
| `--yes` | `-y` | پاسخ خودکار "بله" به تأییدیه‌ها |
| `--proxy` | - | استفاده از پروکسی |
| `--index-url` | `-i` | آدرس مخزن بسته (PyPI mirror) |
| `--extra-index-url` | - | اضافه کردن مخزن اضافی |
| `--target` | `-t` | دایرکتوری هدف برای نصب |
| `--platform` | - | نصب برای پلتفرم خاص |
| `--python-version` | - | نسخه پایتون هدف |

### مثال‌های ترکیبی پیشرفته

```bash
# نصب از مخزن آینه با پروکسی و بدون کش
pip install -i https://pypi.douban.com/simple --proxy http://proxy:8080 --no-cache-dir flask

# نصب برای کاربر، بروزرسانی، و نادیده گرفتن وابستگی‌ها
pip install --user -U --no-deps mypackage

# دانلود بسته و وابستگی‌های آن در پوشه مشخص
pip download -d ./offline_packages -r requirements.txt

# ساخت wheel از همه وابستگی‌ها
pip wheel -r requirements.txt -w ./wheelhouse
```

---

## نکات امنیتی

### 1. تأیید هش بسته‌ها
```bash
# تولید فایل requirements با هش
pip freeze --require-hashes > requirements.txt

# نصب با بررسی هش
pip install --require-hashes -r requirements.txt
```

### 2. بررسی آسیب‌پذیری‌های شناخته شده
```bash
pip install safety pip-audit
safety check
pip-audit
```

### 3. استفاده از مخازن امن
فایل `pip.conf` (یا `%APPDATA%\pip\pip.ini` در ویندوز):
```ini
[global]
index-url = https://pypi.org/simple
trusted-host = pypi.org
```

### 4. عدم نصب بسته‌های ناشناس
- همیشه از مخازن رسمی استفاده کنید.
- قبل از نصب، پروژه را در GitHub بررسی کنید.

### 5. محدود کردن دسترسی در CI/CD
در محیط‌های خودکار، از `--user` استفاده نکنید. از محیط مجازی استفاده کنید.

---

## لینک‌های مفید

- 📖 [مستند رسمی pip](https://pip.pypa.io/)
- 📦 [PyPI (Python Package Index)](https://pypi.org/)
- 🐍 [وبسایت پایتون](https://python.org)
- 🧪 [مخزن نمونه‌های pip](https://github.com/pypa/sampleproject)
- 📚 [راهنمای محیط مجازی](https://docs.python.org/3/library/venv.html)
- 🔒 [ابزار safety (امنیت)](https://github.com/pyupio/safety)

---

## جمع‌بندی

**نکات کلیدی که باید همیشه به خاطر داشته باشید:**

> 1. ✅ **از محیط مجازی استفاده کنید** (`python -m venv .venv`)  
> 2. ✅ **نسخه کتابخانه‌ها را دقیقاً مشخص کنید** (مثلاً `flask==2.3.3`)  
> 3. ✅ **فایل requirements را به‌روز نگه دارید** (`pip freeze > requirements.txt`)  
> 4. ✅ **برای رفع خطاهای کش، کش را پاک کنید** (`pip cache purge`)  
> 5. ✅ **در ویندوز، PATH را یکبار تنظیم کنید** (دستور `[Environment]::SetEnvironmentVariable(...)`)  
> 6. ✅ **امنیت بسته‌ها را با `safety` بررسی کنید**

**دستورات ضروری که باید در ذهن داشته باشید:**
```bash
pip install package
pip uninstall package
pip list
pip freeze > requirements.txt
pip install -r requirements.txt
pip show package
pip cache purge
pip check
```

---

**تهیه شده توسط:** [webramin](https://github.com/webramin/)
**تاریخ انتشار:** ۱۴۰۳  
**نسخه:** 2.0

---

**پایان مستند راهنمای pip** 🚀
