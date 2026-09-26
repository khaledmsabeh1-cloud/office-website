# موقع مكتب أجيال الاستشاري للهندسة والإعمار

موقع ثابت خفيف (HTML/CSS) بلا قاعدة بيانات، يُستضاف مجاناً على GitHub Pages.

## الملفات

| الملف | الوظيفة |
|---|---|
| `index.html` | الصفحة الرئيسية وكل النصوص |
| `assets/css/style.css` | التصميم والألوان |
| `assets/img/` | الشعار والأيقونات وصورة المشاركة |
| `thanks.html` | صفحة الشكر بعد إرسال النموذج |
| `robots.txt` و`sitemap.xml` | ملفات محركات البحث |

## النشر على GitHub Pages

1. في المستودع افتح **Settings → Pages**.
2. تحت **Source** اختر `Deploy from a branch`، ثم الفرع `claude/nice-shannon-qr5e2z` والمجلد `/ (root)`، واضغط **Save**.
3. تحت **Custom domain** اكتب `ajyal-consulting.com` واحفظ، ثم فعّل **Enforce HTTPS**.
4. الموقع يعمل على: `https://ajyal-consulting.com/`

> GitHub Pages يعمل مجاناً مع المستودعات العامة فقط، أما المستودع الخاص فيحتاج اشتراك GitHub Pro.

## تفعيل نموذج التواصل

النموذج يرسل الرسائل إلى `info@ajyal-consulting.com` عبر خدمة FormSubmit المجانية. عند أول إرسال تصل رسالة تفعيل إلى هذا البريد، واضغط رابط **Activate** مرة واحدة فقط.

## الظهور في Google

1. **Google Search Console**: أضف رابط الموقع، ثم وثّق الملكية، ثم أرسل `sitemap.xml`.
2. **Google Business Profile**: سجّل المكتب بعنوانه في حي الدرج لكي يظهر على الخريطة.

## الدومين

- الدومين `ajyal-consulting.com` مسجّل في Namecheap، والتجديد التلقائي مفعّل.
- إعدادات DNS في Namecheap (Advanced DNS):

| Type | Host | Value |
|---|---|---|
| A Record | @ | 185.199.108.153 |
| A Record | @ | 185.199.109.153 |
| A Record | @ | 185.199.110.153 |
| A Record | @ | 185.199.111.153 |
| CNAME Record | www | khaledmsabeh1-cloud.github.io. |

- الملف `CNAME` في المستودع يحدد الدومين لـ GitHub Pages، فلا تحذفه.
