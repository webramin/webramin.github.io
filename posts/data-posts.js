const datapost = [
  {
    id: 1,
    title: "کشف آینده هوش مصنوعی با آزمایشگاه های Perplexity",
    description: "آخرین پیشرفت‌های هوش مصنوعی و یادگیری ماشینی را در آزمایشگاه‌های Perplexity کشف کنید. از پردازش زبان طبیعی تا بینایی کامپیوتری، تیم ما مرزهای امکان‌پذیر را گسترش می‌دهد",
    image: "https://example.com/image1.jpg",
    link: "https://labs.perplexity.ai/",
    tags: "ai, text-ai, GPT-4, site"
  },
  {
    id: 2,
    title: "عنوان پست دوم",
    description: "توضیحات مربوط به پست دوم. این پست در مورد موضوع دیگری است.",
    image: "https://example.com/image2.jpg",
    link: "https://example.com/post2",
    tags: "jQuery, bootstrap"
  },
  {
    id: 3,
    title: "پست سوم در مورد موضوع جدید",
    description: "این پست در مورد موضوع جدیدی است که قبلا در پست‌های قبلی مطرح نشده است.",
    image: "https://example.com/image3.jpg",
    link: "https://example.com/post3",
    tags: "css, html, javascript"
  },
  {
    id: 4,
    title: "چهارمین پست وبلاگ",
    description: "این پست چهارمین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image4.jpg",
    link: "https://example.com/post4",
    tags: "react, angular, vue"
  },
  {
    id: 5,
    title: "پنجمین پست وبلاگ",
    description: "این پست پنجمین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image5.jpg",
    link: "https://example.com/post5",
    tags: "php, laravel, symfony"
  },
  {
    id: 6,
    title: "ششمین پست وبلاگ",
    description: "این پست ششمین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image6.jpg",
    link: "https://example.com/post6",
    tags: "python, django, flask"
  },
  {
    id: 7,
    title: "هفتمین پست وبلاگ",
    description: "این پست هفتمین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image7.jpg",
    link: "https://example.com/post7",
    tags: "java, spring, android"
  },
  {
    id: 8,
    title: "هشتمین پست وبلاگ",
    description: "این پست هشتمین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image8.jpg",
    link: "https://example.com/post8",
    tags: "ruby, rails, sinatra"
  },
  {
    id: 9,
    title: "نهمین پست وبلاگ",
    description: "این پست نهمین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image9.jpg",
    link: "https://example.com/post9",
    tags: "swift, ios, xcode"
  },
  {
    id: 10,
    title: "دهمین پست وبلاگ",
    description: "این پست دهمین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image10.jpg",
    link: "https://example.com/post10",
    tags: "kotlin, android, jetpack"
  },
  {
    id: 11,
    title: "یازدهمین پست وبلاگ",
    description: "این پست یازدهمین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image11.jpg",
    link: "https://example.com/post11",
    tags: "csharp, dotnet, asp.net"
  },
  {
    id: 12,
    title: "دوازدهمین پست وبلاگ",
    description: "این پست دوازدهمین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image12.jpg",
    link: "https://example.com/post12",
    tags: "go, gin, echo"
  },
  {
    id: 13,
    title: "سیزدهمین پست وبلاگ",
    description: "این پست سیزدهمین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image13.jpg",
    link: "https://example.com/post13",
    tags: "rust, actix-web, rocket"
  },
  {
    id: 14,
    title: "چهاردهمین پست وبلاگ",
    description: "این پست چهاردهمین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image14.jpg",
    link: "https://example.com/post14",
    tags: "elixir, phoenix, nerves"
  },
  {
    id: 15,
    title: "پانزدهمین پست وبلاگ",
    description: "این پست پانزدهمین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image15.jpg",
    link: "https://example.com/post15",
    tags: "scala, akka, play"
  },
  {
    id: 16,
    title: "شانزدهمین پست وبلاگ",
    description: "این پست شانزدهمین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image16.jpg",
    link: "https://example.com/post16",
    tags: "erlang, otp, cowboy"
  },
  {
    id: 17,
    title: "هفدهمین پست وبلاگ",
    description: "این پست هفدهمین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image17.jpg",
    link: "https://example.com/post17",
    tags: "haskell, yesod, servant"
  },
  {
    id: 18,
    title: "هجدهمین پست وبلاگ",
    description: "این پست هجدهمین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image18.jpg",
    link: "https://example.com/post18",
    tags: "clojure, ring, compojure"
  },
  {
    id: 19,
    title: "نوزدهمین پست وبلاگ",
    description: "این پست نوزدهمین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image19.jpg",
    link: "https://example.com/post19",
    tags: "elm, phoenix, purescript"
  },
  {
    id: 20,
    title: "بیستمین پست وبلاگ",
    description: "این پست بیستمین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image20.jpg",
    link: "https://example.com/post20",
    tags: "crystal, kemal, amber"
  },
  {
    id: 21,
    title: "بیست و یکمین پست وبلاگ",
    description: "این پست بیست و یکمین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image21.jpg",
    link: "https://example.com/post21",
    tags: "nim, jester, karax"
  },
  {
    id: 22,
    title: "بیست و دومین پست وبلاگ",
    description: "این پست بیست و دومین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image22.jpg",
    link: "https://example.com/post22",
    tags: "julia, flux, knet"
  },
  {
    id: 23,
    title: "بیست و سومین پست وبلاگ",
    description: "این پست بیست و سومین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image23.jpg",
    link: "https://example.com/post23",
    tags: "dart, flutter, angular-dart"
  },
  {
    id: 24,
    title: "بیست و چهارمین پست وبلاگ",
    description: "این پست بیست و چهارمین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image24.jpg",
    link: "https://example.com/post24",
    tags: "kotlin, ktor, exposed"
  },
  {
    id: 25,
    title: "بیست و پنجمین پست وبلاگ",
    description: "این پست بیست و پنجمین پست وبلاگ است و در مورد موضوع دیگری است.",
    image: "https://example.com/image25.jpg",
    link: "https://example.com/post25",
    tags: "groovy, grails, ratpack"
  }
];