<div dir="rtl">

# ClassAI (EN 6) 📘🤖

تطبيق تعليمي تفاعلي **يعمل بالكامل بدون إنترنت** لمنهج اللغة الإنجليزية
**English Course — Pupil's Book 6** (وزارة التربية والتعليم — الجمهورية اليمنية).

مبني مباشرةً على محتوى الكتاب: **٦ وحدات · ٤٥ درساً · شرح عربي مفصّل لكل درس · ٢٠١ كلمة (نطق صوتي + IPA) · ٤٤ بطاقة قواعد · ٣٠٠ جملة مترجمة**، بالإضافة إلى قارئَي العلوم والآداب.

---

## ✨ المميزات

| الميزة | الوصف |
|---|---|
| 💡 **شرح عربي مفصّل لكل درس** | لكل درس من الـ٤٥ شرحٌ وافٍ بالعربي يبسّط الفكرة والقواعد — **مخزّن داخل التطبيق، يعمل أوفلاين** |
| 🌐 **ترجمة لكل جملة وكلمة** | زر «ترجمة» بجانب كل جملة في النصوص والحوارات، وكل مثال مفردات، وكل مثال قاعدة — أو «ترجمة الكل» بضغطة. كلها مخزّنة بلا إنترنت |
| 🤖 **المعلّم الذكي (أوفلاين)** | مساعد يفهم أوامرك بالعربي والإنجليزي (اشرح / معنى كلمة / ترجم / أمثلة / اختبرني) ويجاوب **من منهجك مباشرة دون إنترنت ودون مفتاح**. وكترقية اختيارية: أضف مفتاح Anthropic API لتفعيل «AI كامل أونلاين» |
| 📝 **اختبارات بأربعة أنواع** | لكل درس اختبار تفاعلي: **وصل الكلمات** بمعانيها · **أكمل الفراغ** · **رتّب الجملة** · **اختيار من متعدد** — تصحيح فوري ونتيجة بنسبة مئوية |
| 🔊 **النطق الصوتي** | استماع لأي كلمة أو سطر أو نص كامل بنطق إنجليزي (Text-to-Speech) |
| 🃏 **البطاقات التعليمية** | بطاقات قابلة للقلب لكل كلمة (الكلمة ← المعنى + مثال + ترجمته) |
| 🧠 **المراجعة الذكية** | نظام التكرار المتباعد (Leitner) يذكّرك بالكلمات في الوقت المناسب ويعيد جدولة الصعبة |
| 🏆 **التحفيز** | نقاط XP، مستويات، سلسلة أيام متتابعة (Streak)، و١٢ وساماً |
| 📊 **لوحة التقدّم** | الدروس المكتملة، الكلمات المحفوظة، أفضل نتائج الاختبارات، والأوسمة |
| 🌙 **وضع ليلي + RTL** | واجهة عربية كاملة بهوية أنيقة، تعمل أوفلاين، مع وضع داكن |

> **ملاحظة مهمة:** المعلّم الذكي والشرح والترجمة والاختبارات **كلها تعمل بدون إنترنت ودون أي مفتاح**. الإنترنت اختياري فقط لمن يريد ترقية «AI كامل» للأسئلة الحرّة.

---

## 🚀 بناء التطبيق إلى APK عبر GitHub (بدون برامج على جهازك)

> هذه الطريقة تبني الـ APK **في السحابة** عبر GitHub Actions. لا تحتاج Android Studio ولا أي إعداد على جهازك.

### الخطوة ١ — أنشئ مستودعاً جديداً
1. ادخل [github.com](https://github.com) وأنشئ حساباً (إن لم يكن لديك).
2. اضغط **New repository** ← اكتب اسماً (مثل `classai-en6`) ← **Create repository**.

### الخطوة ٢ — ارفع ملفات المشروع
ارفع **كل** محتويات هذا المجلد كما هي (مع المجلدات `www/`، `resources/`، و`.github/`).
- إمّا عبر زر **Add file ← Upload files** على الموقع (اسحب كل الملفات ثم Commit).
- أو عبر الأوامر:
```bash
git init
git add .
git commit -m "ClassAI EN6"
git branch -M main
git remote add origin https://github.com/USERNAME/classai-en6.git
git push -u origin main
```

### الخطوة ٣ — انتظر البناء التلقائي
- بمجرد الرفع، يبدأ البناء تلقائياً. افتح تبويب **Actions** في المستودع.
- انتظر حتى تظهر علامة ✅ خضراء (تستغرق عادة **٣–٧ دقائق**).

### الخطوة ٤ — حمّل الـ APK
- اضغط على آخر تشغيل ناجح في **Actions**.
- في الأسفل ضمن **Artifacts**، حمّل **`ClassAI-EN6-apk`** (ملف مضغوط بداخله `ClassAI-EN6.apk`).

> 💡 **بديل أسهل للتحميل:** ادفع وسماً (tag) باسم يبدأ بـ `v`، فيتم إنشاء **Release** فيه ملف الـ APK جاهزاً للتحميل المباشر:
> ```bash
> git tag v1.0 && git push origin v1.0
> ```
> ثم تجده في تبويب **Releases**.

### الخطوة ٥ — ثبّت على هاتف أندرويد
1. انقل ملف `ClassAI-EN6.apk` إلى هاتفك.
2. افتحه، ووافق على **تثبيت من مصادر غير معروفة** عند الطلب.
3. افتح التطبيق وابدأ التعلّم 🎉

---

## 🤖 تفعيل المعلّم الذكي

المعلّم الذكي يستخدم **Anthropic Claude API**. لتشغيله داخل نسخة الـ APK:
1. احصل على مفتاح من [console.anthropic.com](https://console.anthropic.com/settings/keys).
2. في التطبيق: **حسابي ← الإعدادات ← مفتاح Anthropic API** ← الصق المفتاح ← **حفظ**.

> بقية مميزات التطبيق (الدروس، البطاقات، المراجعة، الاختبارات، النطق) تعمل **بدون إنترنت** ولا تحتاج أي مفتاح.

---

## ✏️ التخصيص

- **اسم/أيقونة التطبيق:** عدّل `appName` في `capacitor.config.json`، واستبدل `resources/icon.png` (مقاس 1024×1024) ثم أعد الرفع.
- **معرّف الحزمة:** غيّر `appId` (مثل `com.yourname.en6`).
- **المحتوى الدراسي:** كل الدروس والمفردات والقواعد موجودة في `www/data.js` — يمكنك التعديل أو الإضافة بسهولة.
- **التصميم:** الألوان والخطوط في `www/index.html` (قسم `:root`).

---

## 📁 هيكل المشروع
```
ClassAI-EN6/
├── www/
│   ├── index.html        ← الواجهة والتصميم (HTML/CSS)
│   ├── app.js            ← منطق التطبيق (التنقّل، البطاقات، المراجعة، الاختبارات، المعلّم)
│   └── data.js           ← محتوى الكتاب (الوحدات، المفردات، القواعد، النصوص)
├── resources/
│   ├── icon.png          ← أيقونة التطبيق (1024×1024)
│   └── splash.png        ← شاشة البداية
├── .github/workflows/
│   └── build-apk.yml     ← خط البناء التلقائي
├── capacitor.config.json
└── package.json
```

</div>

---

## 🇬🇧 English summary

**ClassAI (EN 6)** is an offline-first, bilingual (Arabic UI) study companion for the Yemeni *English Course — Pupil's Book 6*. It contains all 6 units (45 lessons, 225 words with IPA + audio, 46 grammar cards, 24 reading texts) plus Science & Arts readers, with flashcards, spaced-repetition review, auto-generated quizzes, an AI tutor (Claude), gamification and progress tracking.

### Build the APK via GitHub (no local tools)
1. Create a new GitHub repository and upload **all** files in this folder (keep `www/`, `resources/`, `.github/`).
2. The **Actions** tab runs the build automatically (~3–7 min).
3. Download the **`ClassAI-EN6-apk`** artifact, or push a `v*` tag to get a Release with the APK attached.
4. Install the APK on Android (allow "install from unknown sources").

### AI tutor
Add an Anthropic API key in **Profile → Settings** to enable the AI tutor. Everything else works fully offline.

### Local build (optional)
```bash
npm install
npx cap add android
npx capacitor-assets generate --android
npx cap sync android
cd android && ./gradlew assembleDebug
# APK → android/app/build/outputs/apk/debug/app-debug.apk
```

*Content © Ministry of Education, Republic of Yemen. App scaffolding built with Capacitor.*
