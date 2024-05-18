در CSS نیز می‌توان رفتار لینک‌ها را کنترل و سفارشی‌سازی کرد. برخی از امکانات CSS برای کنترل لینک‌ها عبارتند از:

1. **تغییر رنگ لینک**: با استفاده از ویژگی‌های `color` و `text-decoration` می‌توان رنگ و زیرخط لینک را تغییر داد.

```css
a {
  color: blue;
  text-decoration: none;
}

a:hover {
  color: red;
  text-decoration: underline;
}
```

2. **تغییر شکل نشانگر موس**: با استفاده از ویژگی `cursor` می‌توان شکل نشانگر موس را تغییر داد.

```css
a {
  cursor: pointer;
}
```

3. **تغییر ظاهر لینک در حالت‌های مختلف**: با استفاده از پسوندهای `:link`، `:visited`، `:hover` و `:active` می‌توان ظاهر لینک را در حالت‌های مختلف تغییر داد.

```css
a:link {
  color: blue;
}

a:visited {
  color: purple;
}

a:hover {
  color: red;
}

a:active {
  color: green;
}
```

4. **تغییر ظاهر لینک‌های درون‌متن**: با استفاده از ویژگی‌های مربوط به متن مانند `font-weight`، `font-style` و `text-decoration` می‌توان ظاهر لینک‌های درون‌متن را تغییر داد.

```css
p a {
  font-weight: bold;
  text-decoration: underline;
}
```

5. **تغییر ظاهر لینک‌های درون‌عناصر دیگر**: با استفاده از انتخاب‌گرهای CSS می‌توان ظاهر لینک‌های درون‌عناصر دیگر را تغییر داد.

```css
div a {
  color: green;
}

nav a {
  font-size: 1.2em;
}
```

در مجموع، CSS امکانات زیادی برای سفارشی‌سازی ظاهر و رفتار لینک‌ها فراهم می‌کند.
