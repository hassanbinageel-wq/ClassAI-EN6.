/* ============================================================
   ClassAI (EN 6) — Course content  v2 (full offline)
   English Course — Pupil's Book 6, Ministry of Education, Yemen
   Every sentence, vocab example and grammar example has an
   Arabic translation, plus a detailed Arabic explanation per lesson.
   ============================================================ */

const COURSE = {
  meta: {
    title: "English Course — Pupil's Book 6",
    grade: "الصف السادس / المستوى المتقدم",
    publisher: "وزارة التربية والتعليم — الجمهورية اليمنية"
  },
  units: [],
  readers: {
    science: {
      title: "Science reader", titleAr: "قارئ العلوم", color: "#fde047",
      vocab: [
        { en:"acid", ar:"حمض", ipa:"/ˈæsɪd/", ex:"An acid has a sour taste.", exAr:"الحمض له طعم حامض." },
        { en:"alkali", ar:"قِلوي", ipa:"/ˈælkəlaɪ/", ex:"Bases that dissolve in water are alkalis.", exAr:"القواعد التي تذوب في الماء تُسمّى قلويات." },
        { en:"litmus", ar:"عبّاد الشمس", ipa:"/ˈlɪtməs/", ex:"Litmus paper tests acidity.", exAr:"ورق عبّاد الشمس يختبر الحموضة." },
        { en:"matter", ar:"مادة", ipa:"/ˈmætə/", ex:"Matter comes in three states.", exAr:"تأتي المادة في ثلاث حالات." },
        { en:"solid", ar:"صُلب", ipa:"/ˈsɒlɪd/", ex:"A solid has a fixed shape.", exAr:"الجسم الصلب له شكل ثابت." },
        { en:"liquid", ar:"سائل", ipa:"/ˈlɪkwɪd/", ex:"A liquid has no fixed shape.", exAr:"السائل ليس له شكل ثابت." },
        { en:"gas", ar:"غاز", ipa:"/ɡæs/", ex:"Gas spreads quickly.", exAr:"ينتشر الغاز بسرعة." },
        { en:"reflection", ar:"انعكاس", ipa:"/rɪˈflekʃn/", ex:"We see most things by reflection.", exAr:"نرى معظم الأشياء بالانعكاس." },
        { en:"refraction", ar:"انكسار", ipa:"/rɪˈfrækʃn/", ex:"Light bends — this is refraction.", exAr:"ينحني الضوء — وهذا هو الانكسار." },
        { en:"frequency", ar:"تردّد", ipa:"/ˈfriːkwənsi/", ex:"Frequency is measured in hertz.", exAr:"يُقاس التردّد بالهرتز." },
        { en:"radiation", ar:"إشعاع", ipa:"/ˌreɪdiˈeɪʃn/", ex:"Radioactivity sends out radiation.", exAr:"يُطلق النشاط الإشعاعي إشعاعاً." },
        { en:"eclipse", ar:"كسوف / خسوف", ipa:"/ɪˈklɪps/", ex:"The Moon can cause a solar eclipse.", exAr:"يمكن أن يسبّب القمر كسوفاً للشمس." },
        { en:"satellite", ar:"قمر / تابع", ipa:"/ˈsætəlaɪt/", ex:"The Moon is the Earth's only natural satellite.", exAr:"القمر هو القمر الطبيعي الوحيد للأرض." },
        { en:"vaccine", ar:"لقاح", ipa:"/ˈvæksiːn/", ex:"Jenner made the first vaccine.", exAr:"صنع جينر أول لقاح." }
      ]
    },
    arts: {
      title: "Arts reader", titleAr: "قارئ الآداب", color: "#86efac",
      vocab: [
        { en:"proverb", ar:"مثَل", ipa:"/ˈprɒvɜːb/", ex:"A proverb expresses a truth.", exAr:"المثل يعبّر عن حقيقة." },
        { en:"idiom", ar:"تعبير اصطلاحي", ipa:"/ˈɪdiəm/", ex:"An idiom's meaning is not literal.", exAr:"معنى التعبير الاصطلاحي ليس حرفياً." },
        { en:"plot", ar:"حبكة", ipa:"/plɒt/", ex:"The story of a play is the plot.", exAr:"قصة المسرحية تُسمّى الحبكة." },
        { en:"character", ar:"شخصية", ipa:"/ˈkærəktə/", ex:"The people in a play are the characters.", exAr:"الأشخاص في المسرحية هم الشخصيات." },
        { en:"tragedy", ar:"مأساة", ipa:"/ˈtrædʒədi/", ex:"Hamlet is a tragedy.", exAr:"هاملت مأساة." },
        { en:"revenge", ar:"انتقام", ipa:"/rɪˈvendʒ/", ex:"Hamlet is about revenge.", exAr:"تدور هاملت حول الانتقام." },
        { en:"critic", ar:"ناقد", ipa:"/ˈkrɪtɪk/", ex:"A critic makes judgements about the arts.", exAr:"الناقد يصدر أحكاماً عن الفنون." },
        { en:"review", ar:"مراجعة نقدية", ipa:"/rɪˈvjuː/", ex:"Critics write reviews.", exAr:"يكتب النقّاد مراجعات." },
        { en:"calligraphy", ar:"فن الخط", ipa:"/kəˈlɪɡrəfi/", ex:"Calligraphy means beautiful writing.", exAr:"فن الخط يعني الكتابة الجميلة." },
        { en:"donor", ar:"متبرّع", ipa:"/ˈdəʊnə/", ex:"Olivia was a kidney donor.", exAr:"كانت أوليفيا متبرّعة بكلية." }
      ]
    }
  }
};

/* ====================== UNIT 1 ====================== */
COURSE.units.push({
  id:"u1", no:1, color:"#38bdf8", title:"Describing things", titleAr:"وصف الأشياء",
  lessons:[
    {
      code:"1.1", title:"Shapes, coverings and materials", titleAr:"الأشكال والأغطية والمواد", type:"vocab",
      intro:"Words to describe the shape of objects, what covers animals, and what things are made of.",
      introAr:"كلمات لوصف شكل الأشياء، وما يغطّي أجسام الحيوانات، والمواد التي تُصنع منها الأشياء.",
      explain:"يُعلّمك هذا الدرس ثلاث مجموعات من الصفات الوصفية. الأولى: الأشكال مثل round (مستدير) و square (مربّع). الثانية: أغطية الحيوانات مثل fur (فرو) و feathers (ريش) و scales (حراشف). الثالثة: المواد التي تُصنع منها الأشياء، وتأتي عادةً بعد made of (مصنوع من) مثل made of glass (مصنوع من زجاج). القاعدة الأساسية: نضع الصفة قبل الاسم مثل a round ball، أو بعد فعل الكون to be مثل the ball is round. تدرّب بصياغة جمل مثل: A window is made of glass و A dog has fur. خطأ شائع: لا نقول made from glass للأشياء الصلبة، بل made of glass.",
      vocab:[
        { en:"rectangular", ar:"مستطيل", ipa:"/rekˈtæŋɡjələ/", ex:"A door is rectangular.", exAr:"الباب مستطيل الشكل." },
        { en:"round", ar:"مستدير", ipa:"/raʊnd/", ex:"An orange is round.", exAr:"البرتقالة مستديرة." },
        { en:"curved", ar:"منحنٍ", ipa:"/kɜːvd/", ex:"A banana has a curved shape.", exAr:"الموزة لها شكل منحنٍ." },
        { en:"square", ar:"مربّع", ipa:"/skweə/", ex:"The box is square.", exAr:"الصندوق مربّع." },
        { en:"triangular", ar:"مثلّث", ipa:"/traɪˈæŋɡjələ/", ex:"The road sign is triangular.", exAr:"إشارة الطريق مثلّثة." },
        { en:"straight", ar:"مستقيم", ipa:"/streɪt/", ex:"A ruler has a straight edge.", exAr:"المسطرة لها حافة مستقيمة." },
        { en:"hair", ar:"شعر", ipa:"/heə/", ex:"A dog has hair.", exAr:"الكلب له شعر." },
        { en:"feathers", ar:"ريش", ipa:"/ˈfeðəz/", ex:"Birds have feathers.", exAr:"الطيور لها ريش." },
        { en:"skin", ar:"جلد", ipa:"/skɪn/", ex:"A frog has smooth skin.", exAr:"الضفدع له جلد أملس." },
        { en:"fur", ar:"فرو", ipa:"/fɜː/", ex:"A cat has soft fur.", exAr:"القطة لها فرو ناعم." },
        { en:"scales", ar:"حراشف", ipa:"/skeɪlz/", ex:"Fish have scales.", exAr:"الأسماك لها حراشف." },
        { en:"wool", ar:"صوف", ipa:"/wʊl/", ex:"A sheep is covered in wool.", exAr:"الخروف مغطّى بالصوف." },
        { en:"wood", ar:"خشب", ipa:"/wʊd/", ex:"The table is made of wood.", exAr:"الطاولة مصنوعة من الخشب." },
        { en:"glass", ar:"زجاج", ipa:"/ɡlɑːs/", ex:"A window is made of glass.", exAr:"النافذة مصنوعة من الزجاج." },
        { en:"paper", ar:"ورق", ipa:"/ˈpeɪpə/", ex:"A book is made of paper.", exAr:"الكتاب مصنوع من الورق." },
        { en:"plastic", ar:"بلاستيك", ipa:"/ˈplæstɪk/", ex:"The bowl is made of plastic.", exAr:"الوعاء مصنوع من البلاستيك." },
        { en:"metal", ar:"معدن", ipa:"/ˈmetl/", ex:"A fork is made of metal.", exAr:"الشوكة مصنوعة من المعدن." },
        { en:"cloth", ar:"قُماش", ipa:"/klɒθ/", ex:"Her dress is made of cloth.", exAr:"فستانها مصنوع من القماش." }
      ]
    },
    {
      code:"1.3", title:"Lost", titleAr:"ضائع", type:"conversation",
      intro:"A passenger has lost his luggage at the airport, and a girl has lost her twin sister.",
      introAr:"مسافر فقد حقائبه في المطار، وفتاة فقدت أختها التوأم.",
      explain:"حوار في المطار يتدرّب على وصف الأشياء والأشخاص باستخدام الحجم واللون والشكل، وعلى المقارنة بـ bigger than (أكبر من) و the same (نفس). لاحظ كيف يهدّئ الموظف المسافر الغاضب بعبارة Calm down (اهدأ) و Don't worry (لا تقلق). الفائدة العملية: تعلّم كيف تطلب المساعدة وتصف ما فقدته بدقّة. عبارات مفيدة: Can you describe it? و What shape is it? و Are they the same size?",
      lines:[
        { sp:"Passenger", en:"Excuse me! Excuse me, miss!", ar:"المعذرة! المعذرة يا آنسة!" },
        { sp:"Clerk", en:"Can I help you, sir?", ar:"هل أساعدك يا سيدي؟" },
        { sp:"Passenger", en:"Yes. I've just got off the plane from Paris, but my luggage hasn't arrived yet.", ar:"نعم. نزلت للتو من الطائرة القادمة من باريس، لكن أمتعتي لم تصل بعد." },
        { sp:"Clerk", en:"Can you describe your luggage, sir?", ar:"هل يمكنك وصف أمتعتك يا سيدي؟" },
        { sp:"Passenger", en:"What am I going to do? No clothes! Nothing!", ar:"ماذا سأفعل؟ لا ملابس! لا شيء!" },
        { sp:"Clerk", en:"Calm down, sir. There's no point in getting upset. Now, can you describe your luggage?", ar:"اهدأ يا سيدي. لا فائدة من الانزعاج. الآن، هل يمكنك وصف أمتعتك؟" },
        { sp:"Passenger", en:"Two suitcases.", ar:"حقيبتا سفر." },
        { sp:"Clerk", en:"Are they the same size?", ar:"هل هما بنفس الحجم؟" },
        { sp:"Passenger", en:"No. One is bigger than the other.", ar:"لا. واحدة أكبر من الأخرى." },
        { sp:"Clerk", en:"Are they the same colour?", ar:"هل هما بنفس اللون؟" },
        { sp:"Passenger", en:"Well, they're both green, but the smaller one is a very light green.", ar:"حسناً، كلتاهما خضراء، لكن الأصغر خضراء فاتحة جداً." },
        { sp:"Clerk", en:"Ok. What shape are they?", ar:"حسناً. ما شكلهما؟" },
        { sp:"Passenger", en:"The larger one is rectangular. The smaller one is more square-looking.", ar:"الأكبر مستطيلة. والأصغر أقرب إلى الشكل المربّع." },
        { sp:"Clerk", en:"Now, don't worry, sir. Give me your luggage tags and we will soon find them.", ar:"الآن لا تقلق يا سيدي. أعطني بطاقات أمتعتك وسنجدها قريباً." }
      ],
      vocab:[
        { en:"luggage", ar:"أمتعة / حقائب", ipa:"/ˈlʌɡɪdʒ/", ex:"My luggage hasn't arrived yet.", exAr:"أمتعتي لم تصل بعد." },
        { en:"suitcase", ar:"حقيبة سفر", ipa:"/ˈsuːtkeɪs/", ex:"I have two suitcases.", exAr:"لديّ حقيبتا سفر." },
        { en:"describe", ar:"يصِف", ipa:"/dɪˈskraɪb/", ex:"Can you describe your bag?", exAr:"هل يمكنك وصف حقيبتك؟" },
        { en:"upset", ar:"منزعج", ipa:"/ʌpˈset/", ex:"There's no point in getting upset.", exAr:"لا فائدة من الانزعاج." },
        { en:"calm down", ar:"اهدأ", ipa:"/kɑːm daʊn/", ex:"Calm down, sir.", exAr:"اهدأ يا سيدي." }
      ]
    },
    {
      code:"1.4", title:"An unusual animal — Rama the cama", titleAr:"حيوان غير عادي — راما الكاما", type:"reading",
      intro:"A magazine article about a new crossbred animal called a cama.",
      introAr:"مقال في مجلة عن حيوان هجين جديد يُسمّى كاما.",
      explain:"نص قراءة يشرح فكرة التهجين بين حيوانات من نفس الفصيلة. راما حيوان ناتج من تزاوج جمل ذكر مع أنثى اللاما. يستخدم النص كثيراً أدوات المقارنة والتباين: bigger than (أكبر من)، not as big as (ليس بحجم)، like (مثل) و unlike (على عكس)، whereas (في حين). ركّز على كيف يصف الكاتب الشبه والاختلاف بين الكاما ووالديه. هذا يربط الدرس مباشرة بقواعد المقارنة في Language review 1.",
      lines:[
        { en:"Animals are divided into families.", ar:"تنقسم الحيوانات إلى فصائل." },
        { en:"The house-cat is of the same family as its much bigger cousins, the lions of Africa and the tigers of India.", ar:"القط المنزلي من نفس فصيلة أبناء عمومته الأكبر حجماً بكثير: أسود أفريقيا ونمور الهند." },
        { en:"If animals are part of the same family, it is sometimes possible to crossbreed them to make a new animal.", ar:"إذا كانت الحيوانات من نفس الفصيلة، فمن الممكن أحياناً تهجينها لإنتاج حيوان جديد." },
        { en:"This was done several years ago when a lion was crossbred with a tiger, giving us a liger.", ar:"حدث هذا قبل سنوات حين هُجّن أسد مع نمر، فأنتج لنا الليجر." },
        { en:"Now, it has been done again. The new animal is called a cama, and has been given the name Rama.", ar:"والآن تكرّر الأمر. الحيوان الجديد يُسمّى كاما، وأُطلق عليه اسم راما." },
        { en:"Rama the cama was born in Dubai in January 1998.", ar:"وُلدت راما الكاما في دبي في يناير 1998." },
        { en:"It is a cross between a male camel and a female llama.", ar:"إنها تهجين بين جمل ذكر وأنثى لاما." },
        { en:"Although they are from the same family of animals, they are very different.", ar:"رغم أنهما من نفس فصيلة الحيوانات، إلا أنهما مختلفان جداً." },
        { en:"Camels live mainly in hot countries like Arabia, whereas llamas live in mountainous parts of South America where it gets very cold.", ar:"تعيش الجمال غالباً في البلدان الحارة مثل الجزيرة العربية، في حين تعيش اللاما في المناطق الجبلية بأمريكا الجنوبية حيث يشتدّ البرد." },
        { en:"Because of the intense cold, llamas have coats of long, heavy wool.", ar:"بسبب البرد الشديد، تمتلك اللاما معاطف من صوف طويل وثقيل." },
        { en:"So what does Rama look like? Unlike its father, it has no hump on its back.", ar:"فكيف تبدو راما؟ على عكس والدها، ليس لها سنام على ظهرها." },
        { en:"Like its father, it has the short ears and the long tail of the camel.", ar:"ومثل والدها، لها أذنان قصيرتان وذيل طويل كالجمل." },
        { en:"It is bigger than a llama but not as big as a camel.", ar:"إنها أكبر من اللاما لكنها ليست بحجم الجمل." },
        { en:"However, the wool coat of the llama, which is very valuable, is unlike the hair coat of the camel, which has little value.", ar:"غير أن معطف صوف اللاما، وهو ثمين جداً، يختلف عن معطف شعر الجمل قليل القيمة." }
      ],
      vocab:[
        { en:"crossbreed", ar:"يُهجِّن", ipa:"/ˈkrɒsbriːd/", ex:"You can crossbreed a camel and a llama.", exAr:"يمكنك تهجين جمل مع لاما." },
        { en:"hump", ar:"سنام", ipa:"/hʌmp/", ex:"A camel has a hump.", exAr:"الجمل له سنام." },
        { en:"valuable", ar:"ثمين / قيّم", ipa:"/ˈvæljʊbl/", ex:"The wool is very valuable.", exAr:"الصوف ثمين جداً." },
        { en:"intense", ar:"شديد", ipa:"/ɪnˈtens/", ex:"The cold is intense at that height.", exAr:"البرد شديد على ذلك الارتفاع." },
        { en:"mountainous", ar:"جبلي", ipa:"/ˈmaʊntɪnəs/", ex:"Llamas live in mountainous areas.", exAr:"تعيش اللاما في مناطق جبلية." }
      ]
    },
    {
      code:"1.5", title:"Language review 1 — Comparison & Contrast", titleAr:"مراجعة لغوية 1 — المقارنة والتباين", type:"grammar",
      intro:"How to compare and contrast things.",
      introAr:"كيف نقارن بين الأشياء ونُظهر التباين.",
      explain:"هذه أهم قواعد الوحدة. للمقارنة نستخدم: صيغة المقارنة (older than = أكبر سناً من) وصيغة التفضيل (the oldest = الأكبر). ولتساوي شيئين نستخدم as ... as مثل as tall as أي بنفس الطول، وللنفي not as ... as. كلمة same تعني نفس ويأتي بعدها اسم مثل the same height. وللمقارنة نستخدم like بمعنى مثل و unlike بمعنى على عكس. أما للتباين فنستخدم although و however بمعنى لكن، و whereas بمعنى في حين وتُستخدم فقط مع الأشياء المتضادة. تذكّر: although في بداية الجملة، و however بعد نقطة أو فاصلة منقوطة.",
      grammar:[
        { point:"Comparative & superlative", ar:"صيغة المقارنة والتفضيل", note:"أكثر طريقة شائعة للمقارنة بين الأشياء.",
          ex:[ {en:"Hassan is older than me.", ar:"حسن أكبر سناً منّي."}, {en:"Yousif is the oldest boy in the class.", ar:"يوسف أكبر ولد سناً في الصف."} ] },
        { point:"as ... as", ar:"التساوي بـ as...as", note:"المثبت = تساوٍ. والمنفي (as + not) = عدم تساوٍ.",
          ex:[ {en:"My sister is as tall as me.", ar:"أختي بنفس طولي."}, {en:"My car is not as fast as yours.", ar:"سيارتي ليست بسرعة سيارتك."} ] },
        { point:"same", ar:"نفس (same)", note:"تدل على التساوي، ويأتي بعدها اسم لا صفة.",
          ex:[ {en:"My sister is the same height as me.", ar:"أختي بنفس طولي."}, {en:"These two colours aren't the same.", ar:"هذان اللونان ليسا متماثلين."} ] },
        { point:"like / unlike", ar:"مثل / على عكس", note:"تُستخدمان للمقارنة، وتُفصلان بفاصلة.",
          ex:[ {en:"Like my father, I am interested in sports.", ar:"مثل والدي، أنا مهتم بالرياضة."}, {en:"Unlike my father, I am not interested in football.", ar:"على عكس والدي، أنا غير مهتم بكرة القدم."} ] },
        { point:"however / although", ar:"غير أنّ / على الرغم", note:"بمعنى لكن، وتُظهران علاقة غير متوقعة بين أمرين.",
          ex:[ {en:"Although he worked hard, he didn't pass his exam.", ar:"رغم أنه اجتهد، لم ينجح في امتحانه."}, {en:"He worked hard. However, he didn't pass his exam.", ar:"اجتهد كثيراً. غير أنه لم ينجح في امتحانه."} ] },
        { point:"whereas", ar:"في حين أنّ", note:"بمعنى لكن، وتُستخدم فقط لوصف المتضادات.",
          ex:[ {en:"Whereas Ahmed worked hard, his brother didn't.", ar:"في حين اجتهد أحمد، لم يجتهد أخوه."} ] }
      ]
    },
    {
      code:"1.6", title:"The countryside", titleAr:"الريف", type:"vocab",
      intro:"Words to describe the weather and things you can see in the countryside.",
      introAr:"كلمات لوصف الطقس والأشياء التي تراها في الريف.",
      explain:"مجموعتان من المفردات: كلمات الطقس مثل rainy (ممطر) و misty (ضبابي) و windy (عاصف)، ومعالم الريف مثل valley (وادٍ) و stream (جدول) و hill (تل) و coastline (خط ساحلي). لاحظ أن صفات الطقس تُصاغ غالباً بإضافة -y إلى الاسم: rain يصبح rainy، و wind يصبح windy، و sun يصبح sunny، و mist يصبح misty. ستحتاج هذه الكلمات لوصف المشاهد في درسي القراءة التاليين.",
      vocab:[
        { en:"rainy", ar:"ممطر", ipa:"/ˈreɪni/", ex:"It was rainy weather.", exAr:"كان الطقس ممطراً." },
        { en:"misty", ar:"ضبابي", ipa:"/ˈmɪsti/", ex:"It was a misty day.", exAr:"كان يوماً ضبابياً." },
        { en:"sunny", ar:"مشمس", ipa:"/ˈsʌni/", ex:"It was a sunny afternoon.", exAr:"كانت ظهيرة مشمسة." },
        { en:"windy", ar:"عاصف", ipa:"/ˈwɪndi/", ex:"It was a windy evening.", exAr:"كان مساءً عاصفاً." },
        { en:"stream", ar:"جدول / غدير", ipa:"/striːm/", ex:"The stream was cold and clear.", exAr:"كان الجدول بارداً وصافياً." },
        { en:"mountain", ar:"جبل", ipa:"/ˈmaʊntɪn/", ex:"There is snow on the mountain.", exAr:"يوجد ثلج على الجبل." },
        { en:"farmland", ar:"أرض زراعية", ipa:"/ˈfɑːmlænd/", ex:"Between the sea and the road was farmland.", exAr:"بين البحر والطريق كانت هناك أرض زراعية." },
        { en:"river", ar:"نهر", ipa:"/ˈrɪvə/", ex:"The river got narrower and narrower.", exAr:"صار النهر أضيق فأضيق." },
        { en:"coastline", ar:"خط الساحل", ipa:"/ˈkəʊstlaɪn/", ex:"We drove along the coastline.", exAr:"قُدنا السيارة على طول خط الساحل." },
        { en:"valley", ar:"وادٍ", ipa:"/ˈvæli/", ex:"Soon I was in a deep valley.", exAr:"سرعان ما صرت في وادٍ عميق." },
        { en:"desert", ar:"صحراء", ipa:"/ˈdezət/", ex:"The whole country would turn to desert.", exAr:"ستتحوّل البلاد كلها إلى صحراء." },
        { en:"hill", ar:"تلّة", ipa:"/hɪl/", ex:"Hills rose on both sides of the road.", exAr:"ارتفعت التلال على جانبي الطريق." }
      ]
    },
    {
      code:"1.8", title:"A drive in the countryside", titleAr:"رحلة بالسيارة في الريف", type:"reading",
      intro:"A description of a drive through the countryside, organized from near to far.",
      introAr:"وصف لرحلة بالسيارة عبر الريف، منظّمة من القريب إلى البعيد.",
      explain:"نص وصفي يعلّمك كيف تنظّم الوصف مكانياً: من القريب إلى البعيد، ومن الأسفل إلى الأعلى. لاحظ عبارات تحديد المكان: to my left (إلى يساري)، between (بين)، to the right of (إلى يمين)، in the distance (في البعيد). ولاحظ أسلوب التوكيد بتكرار صيغة المقارنة: steeper and steeper (أكثر انحداراً فأكثر)، higher and higher (أعلى فأعلى). هذا الأسلوب يجعل الوصف حيّاً ويُدرَّس في Language review 2.",
      lines:[
        { en:"Last year, I spent my holiday in Wales, where the scenery is wonderful.", ar:"العام الماضي قضيت عطلتي في ويلز، حيث المناظر الطبيعية رائعة." },
        { en:"One bright, sunny day I decided to go for a drive.", ar:"في يوم مشرق ومشمس قرّرت أن أخرج في جولة بالسيارة." },
        { en:"I drove out of town along the coast road. The sea was to my left about two kilometres away.", ar:"قدت خارج البلدة على طريق الساحل. كان البحر إلى يساري على بُعد كيلومترين تقريباً." },
        { en:"Between the sea and the road was farmland.", ar:"بين البحر والطريق كانت هناك أرض زراعية." },
        { en:"In one field there were a lot of cows with their heads down, grazing.", ar:"في أحد الحقول كان هناك الكثير من الأبقار وقد أحنت رؤوسها ترعى." },
        { en:"In another field, closer to me, a farmer on a tractor was ploughing.", ar:"وفي حقل آخر أقرب إليّ، كان مزارع على جرّار يحرث الأرض." },
        { en:"To the right of the road were some high, rocky hills.", ar:"إلى يمين الطريق كانت هناك تلال صخرية مرتفعة." },
        { en:"I turned off the main coast road and soon I was in a deep valley.", ar:"انحرفت عن طريق الساحل الرئيسي وسرعان ما صرت في وادٍ عميق." },
        { en:"At first, the road climbed gently, but as I drove higher, it got steeper and steeper.", ar:"في البداية صعد الطريق بلطف، لكن كلما ارتفعت صار أكثر انحداراً فأكثر." },
        { en:"Further up I could see a river to the left.", ar:"وأعلى من ذلك استطعت أن أرى نهراً إلى اليسار." },
        { en:"I drove higher and higher and the river got narrower and narrower, until it was just a stream.", ar:"قدت أعلى فأعلى وصار النهر أضيق فأضيق، حتى صار مجرّد جدول." },
        { en:"Near the top of the hill, the road ended.", ar:"قرب قمة التل، انتهى الطريق." },
        { en:"I climbed to the peak to look at the view of the valley below.", ar:"تسلّقت إلى القمة لأنظر إلى منظر الوادي في الأسفل." },
        { en:"Away in the distance I could just make out the sea.", ar:"بعيداً في الأفق استطعت بالكاد تمييز البحر." }
      ],
      vocab:[
        { en:"scenery", ar:"مناظر طبيعية", ipa:"/ˈsiːnəri/", ex:"The scenery is wonderful.", exAr:"المناظر الطبيعية رائعة." },
        { en:"grazing", ar:"ترعى", ipa:"/ˈɡreɪzɪŋ/", ex:"The cows were grazing.", exAr:"كانت الأبقار ترعى." },
        { en:"plough", ar:"يحرث / محراث", ipa:"/plaʊ/", ex:"A farmer was ploughing.", exAr:"كان مزارع يحرث الأرض." },
        { en:"steep", ar:"شديد الانحدار", ipa:"/stiːp/", ex:"The road got steeper and steeper.", exAr:"صار الطريق أكثر انحداراً فأكثر." },
        { en:"peak", ar:"قمة", ipa:"/piːk/", ex:"I climbed to the peak.", exAr:"تسلّقت إلى القمة." }
      ]
    },
    {
      code:"1.10", title:"Language review 2 — Description", titleAr:"مراجعة لغوية 2 — الوصف", type:"grammar",
      intro:"Painting a picture in the reader's mind: adjective order, emphasis, focus and joining sentences.",
      introAr:"رسم صورة في ذهن القارئ: ترتيب الصفات، التوكيد، تغيير البؤرة، وربط الجمل.",
      explain:"عند استخدام أكثر من صفة، اتّبع هذا الترتيب: الرأي ثم الحجم ثم العمر ثم الشكل ثم اللون ثم الجنسية ثم المادة. مثال: a beautiful, old, Yemeni building. ولتقوية الوصف نكرّر الكلمات: faster and faster. ويمكن تغيير بؤرة الجملة بنقل العبارة إلى البداية مع قلب الفاعل والفعل (مع فعل to be فقط): On top of the hill were lots of goats. ولربط جملتين نستخدم صيغة ‎-ing: ran out of school, laughing.",
      grammar:[
        { point:"Adjective order", ar:"ترتيب الصفات", note:"الرأي ← الحجم ← العمر ← الشكل ← اللون ← الجنسية ← المادة.",
          ex:[ {en:"A beautiful, old, Yemeni building", ar:"مبنى يمني قديم جميل"}, {en:"a heavy, round, black stone", ar:"حجر أسود مستدير ثقيل"} ] },
        { point:"Emphasis", ar:"التوكيد", note:"نكرّر الكلمات لجعل الوصف أقوى.",
          ex:[ {en:"He drove faster and faster.", ar:"قاد أسرع فأسرع."}, {en:"Up, up and up went the balloon.", ar:"صعد المنطاد عالياً وعالياً وعالياً."} ] },
        { point:"Information focus", ar:"بؤرة المعلومة", note:"ننقل العبارة للبداية، فيتبادل الفاعل والفعل موضعيهما (مع to be فقط).",
          ex:[ {en:"There were lots of goats on top of the hill.", ar:"كان هناك الكثير من الماعز على قمة التل."}, {en:"On top of the hill were lots of goats.", ar:"على قمة التل كان هناك الكثير من الماعز."} ] },
        { point:"Joining with -ing", ar:"الربط بـ -ing", note:"نربط جملتين باستخدام صيغة الـ -ing.",
          ex:[ {en:"The children ran out of school. They were laughing.", ar:"خرج الأطفال من المدرسة. كانوا يضحكون."}, {en:"The children ran out of school, laughing.", ar:"خرج الأطفال من المدرسة ضاحكين."} ] }
      ]
    },
    {
      code:"1.11", title:"A view from a window", titleAr:"منظر من النافذة", type:"reading",
      intro:"Jane describes the view from her window, moving from far to near.",
      introAr:"تصف جين المنظر من نافذتها، متنقّلة من البعيد إلى القريب.",
      explain:"نص وصفي معاكس لاتجاه الدرس 1.8: هنا يتحرّك الوصف من البعيد إلى القريب. تابع عبارات المكان: far away on the horizon (بعيداً في الأفق)، a little bit nearer (أقرب قليلاً)، in a nearby field (في حقل قريب)، just below (تماماً تحت). هذه العبارات هي مفتاح تنظيم أي فقرة وصفية، وستحتاجها في كتابتك.",
      lines:[
        { en:"It was six o'clock in the morning. Jane opened the curtains of her bedroom window and looked out.", ar:"كانت الساعة السادسة صباحاً. فتحت جين ستائر نافذة غرفتها ونظرت إلى الخارج." },
        { en:"Far away on the horizon was a wall of white mist.", ar:"بعيداً في الأفق كان هناك جدار من الضباب الأبيض." },
        { en:"Jane knew that it would disappear as the day got hotter.", ar:"كانت جين تعلم أنه سيتلاشى كلما اشتدّ حرّ النهار." },
        { en:"A little bit nearer was the wood that Jane loved.", ar:"أقرب قليلاً كانت الغابة التي تحبّها جين." },
        { en:"She often walked home through that wood after school.", ar:"كثيراً ما كانت تمشي إلى البيت عبر تلك الغابة بعد المدرسة." },
        { en:"As she stood at the window she could hear the birds in the trees, even from a distance.", ar:"وهي واقفة عند النافذة كانت تسمع الطيور في الأشجار، حتى من بعيد." },
        { en:"Jane looked to her left. In a nearby field there were more than twenty cows.", ar:"نظرت جين إلى يسارها. في حقل قريب كان هناك أكثر من عشرين بقرة." },
        { en:"They were all still lying down, chewing the cud.", ar:"كانت كلها لا تزال راقدة تجترّ." },
        { en:"In the field next to the cows were two horses, a mare and her two-week-old foal.", ar:"في الحقل المجاور للأبقار كان هناك حصانان: فرس ومُهرها ذو الأسبوعين." },
        { en:"Just below Jane's window a number of chickens were cackling noisily.", ar:"تماماً تحت نافذة جين كان عدد من الدجاجات تقوقئ بصخب." },
        { en:"Suddenly Jane was hungry. It was time to get dressed and have breakfast.", ar:"فجأة جاعت جين. حان وقت ارتداء الملابس وتناول الفطور." }
      ],
      vocab:[
        { en:"horizon", ar:"الأفق", ipa:"/həˈraɪzn/", ex:"Far away on the horizon was a mist.", exAr:"بعيداً في الأفق كان هناك ضباب." },
        { en:"mist", ar:"ضباب", ipa:"/mɪst/", ex:"A wall of white mist.", exAr:"جدار من الضباب الأبيض." },
        { en:"mare", ar:"فرس (أنثى)", ipa:"/meə/", ex:"A mare and her foal.", exAr:"فرس ومُهرها." },
        { en:"foal", ar:"مُهر", ipa:"/fəʊl/", ex:"Her two-week-old foal.", exAr:"مُهرها ذو الأسبوعين." },
        { en:"beak", ar:"منقار", ipa:"/biːk/", ex:"Chickens peck with their beaks.", exAr:"تنقر الدجاجات بمناقيرها." }
      ]
    }
  ]
});

/* ====================== UNIT 2 ====================== */
COURSE.units.push({
  id:"u2", no:2, color:"#f472b6", title:"Reporting events", titleAr:"نقل الأحداث",
  lessons:[
    {
      code:"2.1", title:"Newspaper headlines", titleAr:"عناوين الصحف", type:"grammar",
      intro:"Headlines say in a few words what a report is about. They drop 'to be' and articles, and use simple present tense.",
      introAr:"العناوين تلخّص الخبر بكلمات قليلة. تحذف to be وأدوات التعريف، وتستخدم المضارع البسيط.",
      explain:"الدرس يعلّمك أمرين: أولاً كيف تُصاغ عناوين الصحف الإنجليزية: تُحذف to be (مثل is/are) وأدوات التعريف (a/an/the)، ويُستخدم المضارع البسيط حتى لأحداث الماضي. مثلاً 220 Dead in Air Crash بدل 220 are dead. ثانياً سبع طرق لاكتشاف معنى كلمة جديدة دون قاموس: المرادفات، الأضداد، التعريف، الأمثلة، السبب والنتيجة، الغرض، وتكوين الكلمات (البادئات واللواحق). هذه أدوات مهمة جداً للقراءة. لاحظ كيف أن hopeless = hope + less أي بدون أمل.",
      grammar:[
        { point:"Synonyms", ar:"المرادفات", note:"كلمات لها نفس المعنى تساعدك على فهم الكلمة الجديدة.",
          ex:[ {en:"The English lesson starts at 8:45; the History lesson commences at 9:45.", ar:"درس الإنجليزي يبدأ في 8:45؛ درس التاريخ يبدأ (commences) في 9:45."} ] },
        { point:"Antonyms", ar:"الأضداد", note:"كلمات ذات معنى معاكس.",
          ex:[ {en:"Sue is always well dressed; Barry, however, always looks scruffy.", ar:"سو دائماً أنيقة الملبس؛ أما باري، فيبدو دائماً غير مرتّب (scruffy)."} ] },
        { point:"Definition / explanation", ar:"تعريف أو شرح", note:"الجملة نفسها تشرح الكلمة.",
          ex:[ {en:"Mona is a diligent, that is to say, a very hard-working pupil.", ar:"منى مجتهدة (diligent)، أي تلميذة كثيرة العمل."} ] },
        { point:"Cause & effect", ar:"السبب والنتيجة", note:"اعرف السبب أو النتيجة تكتشف المعنى.",
          ex:[ {en:"Ali has many accidents because he always drives recklessly.", ar:"يتعرض علي لحوادث كثيرة لأنه يقود بتهوّر (recklessly)."} ] },
        { point:"Word formation", ar:"تكوين الكلمات", note:"كلمتان معروفتان تكوّنان كلمة جديدة، أو نضيف بادئة أو لاحقة.",
          ex:[ {en:"pain + killer = painkiller", ar:"ألم + قاتل = مسكّن"}, {en:"hope + less = hopeless", ar:"أمل + بدون = ميؤوس منه"}, {en:"un + well = unwell", ar:"غير + بصحة = متوعّك"} ] }
      ],
      vocab:[
        { en:"headline", ar:"عنوان رئيسي", ipa:"/ˈhedlaɪn/", ex:"Look at the headlines below.", exAr:"انظر إلى العناوين أدناه." },
        { en:"survivor", ar:"ناجٍ", ipa:"/səˈvaɪvə/", ex:"220 dead in air crash: no survivors.", exAr:"220 قتيلاً في حادث طائرة: لا ناجين." },
        { en:"scare", ar:"ذُعر / هلع", ipa:"/skeə/", ex:"Health scare: people frightened of new disease.", exAr:"ذعر صحي: الناس خائفون من مرض جديد." }
      ]
    },
    {
      code:"2.4", title:"Don and Debbie: dreamers", titleAr:"دون وديبي: حالمون", type:"conversation",
      intro:"Two friends tell each other about their dreams.",
      introAr:"صديقان يحكيان أحلامهما.",
      explain:"حواران عن الأحلام، الأول عن كابوس والثاني عن حلم جميل. الفائدة اللغوية: كيف يُظهر المستمع اهتمامه (Really! What about?) وكيف يطلب التوضيح (Just a minute. Slow down). ولاحظ استخدام الماضي المستمر لتهيئة المشهد (I was driving the tractor) ثم الماضي البسيط لما حدث (I heard somebody shouting). هذه قاعدة مهمة ستراها في Language review 3.",
      lines:[
        { sp:"Don", en:"I had a dream last night. Well, a nightmare, actually.", ar:"حلمت حلماً الليلة الماضية. في الحقيقة، كان كابوساً." },
        { sp:"Jim", en:"Really! What about?", ar:"حقاً! عن ماذا؟" },
        { sp:"Don", en:"It was awful. I was terrified. There were men with horrible faces and...", ar:"كان فظيعاً. كنت مرعوباً. كان هناك رجال بوجوه مخيفة و..." },
        { sp:"Jim", en:"Just a minute. Calm down. Begin at the beginning. Now... Where were you?", ar:"لحظة. اهدأ. ابدأ من البداية. الآن... أين كنت؟" },
        { sp:"Don", en:"I dreamt that we were working in the fields and...", ar:"حلمت أننا كنا نعمل في الحقول و..." },
        { sp:"Jim", en:"Who was? Who were you with?", ar:"من كان معك؟" },
        { sp:"Don", en:"My brother. My elder brother. We were planting seed for next year.", ar:"أخي. أخي الأكبر. كنّا نزرع البذور للعام القادم." },
        { sp:"Don", en:"And I was driving the tractor. And it was brilliant weather. Then suddenly...", ar:"وكنت أقود الجرّار. وكان الطقس رائعاً. ثم فجأة..." },
        { sp:"Jim", en:"Slow down. Slow down. What happened?", ar:"على مهلك. على مهلك. ماذا حدث؟" },
        { sp:"Don", en:"I heard somebody shouting. Then I saw two men running towards us.", ar:"سمعت شخصاً يصرخ. ثم رأيت رجلين يجريان نحونا." },
        { sp:"Jim", en:"Who were they?", ar:"من كانا؟" },
        { sp:"Don", en:"I don't know. But they were really scary. One was holding a gun.", ar:"لا أدري. لكنهما كانا مخيفَين حقاً. أحدهما يحمل مسدساً." },
        { sp:"Don", en:"My brother and I wanted to run but we couldn't move. It was terrible.", ar:"أردت أنا وأخي الجري لكن لم نستطع الحركة. كان أمراً فظيعاً." },
        { sp:"Jim", en:"So how did you escape?", ar:"إذاً كيف نجوت؟" },
        { sp:"Don", en:"I woke up.", ar:"استيقظت." }
      ],
      vocab:[
        { en:"nightmare", ar:"كابوس", ipa:"/ˈnaɪtmeə/", ex:"It was a nightmare.", exAr:"كان كابوساً." },
        { en:"terrified", ar:"مرعوب", ipa:"/ˈterɪfaɪd/", ex:"I was terrified.", exAr:"كنت مرعوباً." },
        { en:"scary", ar:"مخيف", ipa:"/ˈskeəri/", ex:"They were really scary.", exAr:"كانوا مخيفين حقاً." },
        { en:"escape", ar:"ينجو / يهرب", ipa:"/ɪˈskeɪp/", ex:"How did you escape?", exAr:"كيف نجوت؟" }
      ]
    },
    {
      code:"2.5", title:"Language review 3 — Passive & narration", titleAr:"مراجعة لغوية 3 — المبني للمجهول والسرد", type:"grammar",
      intro:"Setting the scene for a story and reporting events.",
      introAr:"تهيئة المشهد للقصة ونقل الأحداث.",
      explain:"خمس قواعد مهمة لرواية الأحداث: 1) المبني للمجهول حين يكون الفعل أهم من فاعله، خاصة في الأخبار: A man was arrested. 2) الماضي المستمر (was/were + -ing) لتهيئة مشهد القصة، والماضي البسيط للحدث المفاجئ. 3) أفعال الحواس (hear, see, feel) + مفعول + فعل بـ -ing، مثل I heard somebody shouting. 4) to be + to + مصدر للحديث عن خطط مستقبلية وتُستخدم كثيراً في الصحف: The President is to meet the ambassador. 5) علامات الكلام في الأخبار وكيفية كتابتها.",
      grammar:[
        { point:"The Passive", ar:"المبني للمجهول", note:"اجعل الشيء المنفعَل أهم من الفاعل.",
          ex:[ {en:"The doctors let Ed Shaw out of hospital.", ar:"سمح الأطباء لإد شو بمغادرة المستشفى."}, {en:"Ed Shaw was let out of hospital.", ar:"سُمح لإد شو بمغادرة المستشفى."} ] },
        { point:"Past continuous", ar:"الماضي المستمر", note:"يُستخدم لتهيئة مشهد القصة.",
          ex:[ {en:"We were working in the fields (when something happened).", ar:"كنّا نعمل في الحقول (عندما حدث شيء ما)."} ] },
        { point:"Sense verbs + object + verb", ar:"أفعال الحواس + مفعول + فعل", note:"hear, see, feel — لمتابعة تهيئة المشهد.",
          ex:[ {en:"I heard somebody. He was shouting.", ar:"سمعت شخصاً. كان يصرخ."}, {en:"I heard somebody shouting.", ar:"سمعت شخصاً يصرخ."} ] },
        { point:"to be + to + infinitive", ar:"to be + to + مصدر", note:"للحديث عن خطط أو توقعات مستقبلية (شائع في الصحف).",
          ex:[ {en:"The President is to meet the ambassador tomorrow.", ar:"سيلتقي الرئيس بالسفير غداً."}, {en:"The thick fog is to clear this afternoon.", ar:"سينقشع الضباب الكثيف بعد ظهر اليوم."} ] }
      ]
    },
    {
      code:"2.6", title:"Natural disasters", titleAr:"الكوارث الطبيعية", type:"vocab",
      intro:"Definitions of natural disasters.",
      introAr:"تعريفات للكوارث الطبيعية.",
      explain:"تعريفات لأنواع الكوارث الطبيعية. لاحظ بنية التعريف الإنجليزي: A drought is a water shortage. وكلٌّ من هذه الكلمات (forest fire, flood, hurricane...) يفيدك في كتابة تقرير إخباري. ركّز على الفروق: flood فيضان عام، أما flash flood فهو سيل سريع مفاجئ. و epidemic وباء، و famine مجاعة، و volcano بركان وحين يثور نقول volcanic eruption.",
      vocab:[
        { en:"forest fire", ar:"حريق غابة", ipa:"/ˈfɒrɪst ˈfaɪə/", ex:"A forest fire spreads quickly.", exAr:"تنتشر حرائق الغابات بسرعة." },
        { en:"drought", ar:"جفاف", ipa:"/draʊt/", ex:"A drought is a water shortage after no rain.", exAr:"الجفاف هو نقص في المياه بعد انقطاع المطر." },
        { en:"flood", ar:"فيضان", ipa:"/flʌd/", ex:"Deep water over dry land is a flood.", exAr:"المياه العميقة فوق أرض جافة هي فيضان." },
        { en:"flash flood", ar:"سيل جارف", ipa:"/flæʃ flʌd/", ex:"A flash flood happens very quickly.", exAr:"السيل الجارف يحدث بسرعة شديدة." },
        { en:"epidemic", ar:"وباء", ipa:"/ˌepɪˈdemɪk/", ex:"An epidemic spreads quickly.", exAr:"ينتشر الوباء بسرعة." },
        { en:"volcano", ar:"بركان", ipa:"/vɒlˈkeɪnəʊ/", ex:"A volcano is a mountain with a hole in the top.", exAr:"البركان جبل في قمّته فوهة." },
        { en:"volcanic eruption", ar:"ثوران بركاني", ipa:"/vɒlˈkænɪk ɪˈrʌpʃn/", ex:"Molten rock bursts out in an eruption.", exAr:"الصخور المنصهرة تنفجر خلال الثوران." },
        { en:"famine", ar:"مجاعة", ipa:"/ˈfæmɪn/", ex:"A famine is a shortage of food.", exAr:"المجاعة هي نقص في الطعام." },
        { en:"hurricane", ar:"إعصار", ipa:"/ˈhʌrɪkən/", ex:"A hurricane is a powerful storm.", exAr:"الإعصار عاصفة قوية." },
        { en:"earthquake", ar:"زلزال", ipa:"/ˈɜːθkweɪk/", ex:"During an earthquake the ground shakes.", exAr:"خلال الزلزال تهتزّ الأرض." },
        { en:"fault line", ar:"خط صدع", ipa:"/fɔːlt laɪn/", ex:"Two plates meet at a fault line.", exAr:"تلتقي صفيحتان عند خط الصدع." }
      ]
    },
    {
      code:"2.7", title:"A newspaper report — Hurricane hits Central America", titleAr:"تقرير صحفي — إعصار يضرب أمريكا الوسطى", type:"reading",
      intro:"A report about the worst hurricane in living memory.",
      introAr:"تقرير عن أسوأ إعصار في الذاكرة الحديثة.",
      explain:"نموذج لتقرير صحفي. لاحظ كيف يبدأ بفقرة افتتاحية تلخّص الحدث (caused terrible damage and loss of life)، ثم يقدّم التفاصيل بأرقام دقيقة (Winds of over 240 kph، 10,000 are feared dead). يستخدم النص المبني للمجهول كثيراً لأنه يُركّز على الفعل والنتيجة: were destroyed، were blown، were swept away. وهذه هي طريقة الصحف في كل العالم.",
      lines:[
        { en:"The worst hurricane in living memory has caused terrible damage and loss of life throughout Central America.", ar:"أسوأ إعصار في الذاكرة الحديثة سبّب أضراراً مروّعة وخسائر في الأرواح في أنحاء أمريكا الوسطى." },
        { en:"In the large towns, nearly three-quarters of all buildings have been destroyed.", ar:"في المدن الكبرى، دُمّر ما يقارب ثلاثة أرباع المباني." },
        { en:"In the countryside, whole villages have disappeared.", ar:"في الريف، اختفت قرى بأكملها." },
        { en:"Hundreds of thousands are homeless and 10,000 are feared dead.", ar:"مئات الآلاف بلا مأوى ويُخشى أن يكون 10,000 قد لقوا حتفهم." },
        { en:"The storm hit the area late on Tuesday evening, destroying everything in its path.", ar:"ضربت العاصفة المنطقة في وقت متأخر من مساء الثلاثاء، مدمّرة كل شيء في طريقها." },
        { en:"Winds of over 240 kph demolished all the wooden houses.", ar:"رياح تجاوزت سرعتها 240 كم/ساعة هدّمت كل البيوت الخشبية." },
        { en:"Cars and lorries were blown onto their sides.", ar:"اقتُلعت السيارات والشاحنات وانقلبت على جانبها." },
        { en:"In the mountain areas, heavy rain caused flash floods and landslides.", ar:"في المناطق الجبلية، تسبّبت الأمطار الغزيرة في سيول جارفة وانهيارات أرضية." },
        { en:"Rescue teams started work as soon as they could.", ar:"بدأت فرق الإنقاذ عملها في أسرع وقت ممكن." },
        { en:"The hurricane is now moving towards the south coast of the USA, but is getting weaker.", ar:"يتجه الإعصار الآن نحو الساحل الجنوبي للولايات المتحدة، لكنه يضعف." }
      ],
      vocab:[
        { en:"damage", ar:"ضرر / تلف", ipa:"/ˈdæmɪdʒ/", ex:"The hurricane caused terrible damage.", exAr:"تسبّب الإعصار في أضرار مروّعة." },
        { en:"destroy", ar:"يدمّر", ipa:"/dɪˈstrɔɪ/", ex:"Buildings have been destroyed.", exAr:"دُمّرت المباني." },
        { en:"homeless", ar:"بلا مأوى", ipa:"/ˈhəʊmləs/", ex:"Thousands are homeless.", exAr:"الآلاف بلا مأوى." },
        { en:"rescue", ar:"إنقاذ", ipa:"/ˈreskjuː/", ex:"Rescue teams started work.", exAr:"بدأت فرق الإنقاذ عملها." },
        { en:"supplies", ar:"إمدادات", ipa:"/səˈplaɪz/", ex:"All supplies were swept away.", exAr:"جُرفت كل الإمدادات." }
      ]
    },
    {
      code:"2.10", title:"Language review 4 — Tenses & clauses", titleAr:"مراجعة لغوية 4 — الأزمنة والجُمل الموصولة", type:"grammar",
      intro:"Present perfect, past simple, relative clauses and adverbs.",
      introAr:"المضارع التام، الماضي البسيط، الجمل الموصولة والظروف.",
      explain:"أربع قواعد للسرد الصحفي: 1) المضارع التام (has caused) لوصف الوضع الحالي الناتج عن حدث ماضٍ. 2) الماضي البسيط (hit) لحدث في وقت محدد. 3) الجمل الموصولة بحرف جر: إن كانت المعلومة ضرورية يأتي حرف الجر في النهاية (The house I used to live in)، وإن كانت إضافية يأتي في البداية وتُحاط بفاصلتين (Sana'a Secondary School, to which I went...). 4) الظروف وعبارات الظرف تجيب على How / Where / When.",
      grammar:[
        { point:"Present perfect", ar:"المضارع التام", note:"لوصف الوضع الحالي.",
          ex:[ {en:"The worst hurricane has caused terrible damage.", ar:"أسوأ إعصار سبّب أضراراً مروّعة."} ] },
        { point:"Past simple", ar:"الماضي البسيط", note:"حدث في وقت معروف. نستخدم ظروفاً لتحديد الوقت.",
          ex:[ {en:"The storm hit the area late on Tuesday evening.", ar:"ضربت العاصفة المنطقة في وقت متأخر مساء الثلاثاء."} ] },
        { point:"Prepositions in relative clauses", ar:"حروف الجر في الجمل الموصولة", note:"معلومة ضرورية: حرف الجر في النهاية. معلومة إضافية: حرف الجر في البداية بين فاصلتين.",
          ex:[ {en:"The house I used to live in is very old.", ar:"البيت الذي كنت أسكن فيه قديم جداً."}, {en:"Sana'a School, to which I went when I was younger, is one of the biggest.", ar:"مدرسة صنعاء، التي ذهبت إليها عندما كنت أصغر، من أكبر المدارس."} ] },
        { point:"Adverbs & adverbial phrases", ar:"الظروف والعبارات الظرفية", note:"تخبرنا كيف، أين، ومتى.",
          ex:[ {en:"People stood around silently.", ar:"وقف الناس بصمت."}, {en:"In the countryside whole villages have disappeared.", ar:"في الريف اختفت قرى بأكملها."}, {en:"The storm hit the area late on Tuesday evening.", ar:"ضربت العاصفة المنطقة في وقت متأخر مساء الثلاثاء."} ] }
      ]
    },
    {
      code:"2.11", title:"Armenia — 7 December 1988", titleAr:"أرمينيا — 7 ديسمبر 1988", type:"reading",
      intro:"Newsflashes and information about the Armenian earthquake.",
      introAr:"أخبار عاجلة ومعلومات عن زلزال أرمينيا.",
      explain:"نص عبارة عن سلسلة أخبار عاجلة (newsflashes) موزّعة على الساعات. لاحظ كيف يبدأ كل خبر بالوقت ثم الخبر القصير المركّز، بأسلوب صحفي ضاغط. تعرّف أيضاً على مقياس ريختر (Richter scale) الذي يقيس قوة الزلازل من 5.5 (أضرار طفيفة) إلى أكثر من 8.0 (دمار شبه شامل).",
      lines:[
        { en:"13.00 Flash. Earthquake in Armenia. Hit town of Spivak at 11.41 local time, 6.9 on the Richter scale.", ar:"13:00 خبر عاجل. زلزال في أرمينيا. ضرب بلدة سبيفاك في 11:41 بالتوقيت المحلي، بقوة 6.9 على مقياس ريختر." },
        { en:"First reports say that damage is serious.", ar:"التقارير الأولى تشير إلى أن الأضرار جسيمة." },
        { en:"14.00 Armenia: Considerable loss of life reported.", ar:"14:00 أرمينيا: تقارير عن خسائر فادحة في الأرواح." },
        { en:"The flats were very badly built, said an eye-witness. They fell down like packs of cards.", ar:"قال شاهد عيان: كانت الشقق رديئة البناء جداً. سقطت كأنها أوراق لعب." },
        { en:"The rescue workers have no equipment and are working with their bare hands.", ar:"رجال الإنقاذ ليس لديهم معدّات ويعملون بأيديهم العارية." },
        { en:"15.00 Armenia: Spivak completely flattened. Most of population — 20,000 — killed.", ar:"15:00 أرمينيا: سُوّيت سبيفاك بالأرض تماماً. قُتل معظم السكان — 20,000 شخص." },
        { en:"In Leninakan, thousands of people are homeless. One in five buildings destroyed.", ar:"في لينيناكان، آلاف الناس بلا مأوى. مبنى من كل خمسة دُمّر." },
        { en:"We urgently need tents and blankets, a spokesman said.", ar:"قال متحدث: نحتاج بشكل عاجل إلى خيام وبطانيات." },
        { en:"16.00 Earthquake Epidemic Risk: Rescue workers say there is a danger of cholera and typhoid.", ar:"16:00 خطر وباء بعد الزلزال: يقول رجال الإنقاذ إن هناك خطر إصابة بالكوليرا والتيفوئيد." },
        { en:"There is no clean drinking water, said a nurse. Disease can spread very quickly.", ar:"قالت ممرضة: لا يوجد ماء شرب نظيف. يمكن أن يتفشّى المرض بسرعة كبيرة." },
        { en:"23.00 President to return: Officials number of dead: 55,000.", ar:"23:00 الرئيس سيعود: الأرقام الرسمية للقتلى: 55,000." }
      ],
      vocab:[
        { en:"considerable", ar:"كبير / جسيم", ipa:"/kənˈsɪdərəbl/", ex:"Considerable loss of life was reported.", exAr:"وردت تقارير عن خسائر فادحة في الأرواح." },
        { en:"eye-witness", ar:"شاهد عيان", ipa:"/ˈaɪ wɪtnəs/", ex:"An eye-witness described it.", exAr:"وصف شاهد عيان الحادث." },
        { en:"blanket", ar:"بطانية", ipa:"/ˈblæŋkɪt/", ex:"We need tents and blankets.", exAr:"نحتاج إلى خيام وبطانيات." },
        { en:"urgently", ar:"بشكل عاجل", ipa:"/ˈɜːdʒəntli/", ex:"We urgently need water.", exAr:"نحتاج إلى ماء بشكل عاجل." }
      ]
    }
  ]
});

/* ====================== UNIT 3 ====================== */
COURSE.units.push({
  id:"u3", no:3, color:"#fbbf24", title:"Looking for a job", titleAr:"البحث عن عمل",
  lessons:[
    {
      code:"3.1", title:"Getting work experience", titleAr:"اكتساب خبرة العمل", type:"vocab",
      intro:"Work-experience notices and the words used in them.",
      introAr:"إعلانات خبرة العمل والكلمات المستخدمة فيها.",
      explain:"المفردات الأساسية لعالم الوظائف. كل كلمة هنا تظهر في إعلانات الوظائف الحقيقية: vacancy (وظيفة شاغرة)، applicant (المتقدّم)، qualifications (المؤهلات)، salary (الراتب)، required (مطلوب)، desirable (مرغوب). الفرق بين required و desirable مهم جداً: required = شرط لازم، desirable = ميزة إضافية. تذكّر أيضاً عبارة take up a permanent position أي يشغل وظيفة دائمة.",
      vocab:[
        { en:"career", ar:"مهنة / مسار وظيفي", ipa:"/kəˈrɪə/", ex:"There are long-term career opportunities.", exAr:"توجد فرص وظيفية طويلة الأمد." },
        { en:"applicant", ar:"متقدّم للوظيفة", ipa:"/ˈæplɪkənt/", ex:"Opportunities for the successful applicant.", exAr:"فرص للمتقدّم الناجح." },
        { en:"vacancy", ar:"وظيفة شاغرة", ipa:"/ˈveɪkənsi/", ex:"There are many vacancies at the TV station.", exAr:"توجد وظائف شاغرة كثيرة في محطة التلفزيون." },
        { en:"position", ar:"منصب / وظيفة", ipa:"/pəˈzɪʃn/", ex:"You take up a permanent position.", exAr:"تشغل وظيفة دائمة." },
        { en:"salary", ar:"راتب", ipa:"/ˈsæləri/", ex:"You will receive an excellent salary.", exAr:"ستتقاضى راتباً ممتازاً." },
        { en:"qualifications", ar:"مؤهلات", ipa:"/ˌkwɒlɪfɪˈkeɪʃnz/", ex:"Get the qualifications needed to be a nurse.", exAr:"احصل على المؤهلات اللازمة لتكون ممرضاً." },
        { en:"required", ar:"مطلوب", ipa:"/rɪˈkwaɪəd/", ex:"A driving licence is required.", exAr:"رخصة القيادة مطلوبة." },
        { en:"advantage", ar:"ميزة", ipa:"/ədˈvɑːntɪdʒ/", ex:"A knowledge of plants would be an advantage.", exAr:"معرفة النباتات ستكون ميزة." }
      ]
    },
    {
      code:"3.3", title:"Thinking about the future", titleAr:"التفكير في المستقبل", type:"reading",
      intro:"Six people in their last year at school: what they are good at, their interests and personalities.",
      introAr:"ستة أشخاص في عامهم الأخير بالمدرسة: مهاراتهم واهتماماتهم وطباعهم.",
      explain:"نص يقدّم ست شخصيات، كلٌّ منهم يفكّر في وظيفة المستقبل. الفائدة اللغوية: كيف نصف الشخص باستخدام صفات الشخصية مثل efficient (كفؤ)، adventurous (مغامر)، hard-working (مجتهد)، helpful (مفيد)، popular (محبوب)، وكيف نُعبّر عن الاهتمام بـ interested in + اسم، أو enjoys + فعل-ing، أو would like to + فعل.",
      lines:[
        { en:"Patrick's ambition after leaving school is to become a doctor.", ar:"طموح باتريك بعد ترك المدرسة أن يصير طبيباً." },
        { en:"However, he is not very good at Chemistry or Biology. His best subject is Mathematics.", ar:"غير أنه ليس بارعاً في الكيمياء أو الأحياء. أفضل مواده الرياضيات." },
        { en:"He is adventurous and goes underwater swimming.", ar:"إنه مغامر ويمارس السباحة تحت الماء." },
        { en:"Diana is very efficient and likes organizing things.", ar:"ديانا كفؤة جداً وتحبّ تنظيم الأشياء." },
        { en:"Her best subject is English, but she enjoys Mathematics more.", ar:"أفضل مادة لها الإنجليزية، لكنها تستمتع بالرياضيات أكثر." },
        { en:"She is the secretary of the local sailing club and would like to go into Government Administration.", ar:"هي سكرتيرة نادي الإبحار المحلي وتودّ العمل في الإدارة الحكومية." },
        { en:"Andrew is not very good at any subjects although he will probably pass his exams.", ar:"أندرو ليس بارعاً في أي مواد رغم أنه سينجح غالباً في امتحاناته." },
        { en:"He has a driving licence and every weekend he drives into the country.", ar:"لديه رخصة قيادة وكل عطلة أسبوع يقود إلى الريف." },
        { en:"He is very interested in nature. He is hard-working and gets on well with people.", ar:"إنه مهتم جداً بالطبيعة. وهو مجتهد ويتعامل جيداً مع الناس." },
        { en:"Justin has two hobbies: driving his four-wheel-drive in the country, and cooking.", ar:"لجاستن هوايتان: قيادة سيارته رباعية الدفع في الريف، والطهي." },
        { en:"Both his parents are teachers, but he would like to go into business.", ar:"والداه معلّمان، لكنه يودّ دخول عالم الأعمال." },
        { en:"Clare has been collecting folk-music CDs for three years.", ar:"كلير تجمع أقراص الموسيقى الشعبية منذ ثلاث سنوات." },
        { en:"She would like to work in radio or television.", ar:"تودّ العمل في الإذاعة أو التلفزيون." },
        { en:"Fareeda is a very helpful young woman and is popular with others in her class.", ar:"فريدة شابة مفيدة جداً ومحبوبة من زملائها في الصف." },
        { en:"She wants to help other people, perhaps as a social worker.", ar:"تريد مساعدة الآخرين، ربما كأخصائية اجتماعية." }
      ],
      vocab:[
        { en:"ambition", ar:"طموح", ipa:"/æmˈbɪʃn/", ex:"His ambition is to be a doctor.", exAr:"طموحه أن يكون طبيباً." },
        { en:"efficient", ar:"كفؤ / فعّال", ipa:"/ɪˈfɪʃnt/", ex:"Diana is very efficient.", exAr:"ديانا كفؤة جداً." },
        { en:"adventurous", ar:"مغامِر", ipa:"/ədˈventʃərəs/", ex:"Patrick is adventurous.", exAr:"باتريك مغامر." },
        { en:"popular", ar:"محبوب", ipa:"/ˈpɒpjələ/", ex:"Fareeda is popular.", exAr:"فريدة محبوبة." }
      ]
    },
    {
      code:"3.4", title:"Getting careers advice", titleAr:"الحصول على نصيحة مهنية", type:"conversation",
      intro:"A school-leaver talks to a Career Advisor.",
      introAr:"خرّيج يتحدث مع مستشار مهني.",
      explain:"حوار عملي بين خرّيج ومستشار مهني. الفائدة اللغوية: تعلّم عبارات طلب النصيحة (Can you advise me?)، تقديمها (If I were you, I would...)، قبولها (That's a good idea)، ورفضها بأدب (That's not a very good idea / I'm hopeless at it). لاحظ بنية الجملة الشرطية: If I were you, I would... وهي صيغة شائعة جداً لتقديم النصيحة.",
      lines:[
        { sp:"Career Advisor", en:"Now, how can I help you?", ar:"الآن، كيف أساعدك؟" },
        { sp:"School-leaver", en:"Well, it's just that... I don't know... I need your advice.", ar:"حسناً، الأمر أنني... لا أدري... أحتاج إلى نصيحتك." },
        { sp:"School-leaver", en:"I've no idea what I want to do after I leave school.", ar:"ليس لديّ فكرة عمّا أريد فعله بعد ترك المدرسة." },
        { sp:"Career Advisor", en:"What do your parents do?", ar:"ماذا يعمل والداك؟" },
        { sp:"School-leaver", en:"My father's an engineer and my mother's a Maths teacher.", ar:"والدي مهندس، ووالدتي مدرّسة رياضيات." },
        { sp:"Career Advisor", en:"Then why not train to be a Maths teacher?", ar:"إذاً لِمَ لا تتدرّب لتكون مدرّس رياضيات؟" },
        { sp:"School-leaver", en:"I'm no good at Maths. I'm hopeless at it.", ar:"لست بارعاً في الرياضيات. أنا فاشل فيها." },
        { sp:"Career Advisor", en:"What are you good at?", ar:"بمَ أنت بارع؟" },
        { sp:"School-leaver", en:"Um... History... and Geography... and... that's it.", ar:"أمم... التاريخ... والجغرافيا... وهذا كل شيء." },
        { sp:"Career Advisor", en:"What work experience have you had?", ar:"ما خبرات العمل التي اكتسبتها؟" },
        { sp:"School-leaver", en:"Well, recently I've been working at the hospital.", ar:"حسناً، مؤخراً أعمل في المستشفى." },
        { sp:"Career Advisor", en:"And do you enjoy it?", ar:"وهل تستمتع به؟" },
        { sp:"School-leaver", en:"Yes, very much.", ar:"نعم، كثيراً جداً." },
        { sp:"Career Advisor", en:"If I were you, I would...", ar:"لو كنت مكانك، لكنت..." }
      ],
      vocab:[
        { en:"advice", ar:"نصيحة", ipa:"/ədˈvaɪs/", ex:"I need your advice.", exAr:"أحتاج إلى نصيحتك." },
        { en:"hopeless", ar:"ميؤوس منه / فاشل", ipa:"/ˈhəʊpləs/", ex:"I'm hopeless at Maths.", exAr:"أنا فاشل في الرياضيات." },
        { en:"school-leaver", ar:"خرّيج مدرسة", ipa:"/ˈskuːl liːvə/", ex:"Advisors help school-leavers.", exAr:"يساعد المستشارون خرّيجي المدارس." }
      ]
    },
    {
      code:"3.5", title:"Language review 5 — Present perfect continuous", titleAr:"مراجعة لغوية 5 — المضارع التام المستمر", type:"grammar",
      intro:"Talking about ongoing actions and verb patterns.",
      introAr:"الحديث عن الأفعال المستمرة وأنماط الأفعال.",
      explain:"الفرق بين المضارع التام البسيط والمضارع التام المستمر: البسيط (I have done) يركّز على إتمام الفعل، أما المستمر (I have been doing) فيركّز على المدة. مثال واضح: I have lived here for six years (ربما لن أستمر) مقابل I have been living here since 1994 (سأستمر غالباً). ملاحظة مهمة: بعض الأفعال لا تُستخدم في المستمر مثل be, have (own), know, like, love. وبعض الأفعال (begin, start, like, love, prefer, hate) تأتي بعدها إما to + مصدر أو -ing.",
      grammar:[
        { point:"Present perfect continuous", ar:"المضارع التام المستمر", note:"للحديث عن أثر فعل حدث على فترة من الزمن، أو لفعل بدأ في الماضي ومستمر حتى الآن.",
          ex:[ {en:"He has been playing football. That's why his clothes are dirty.", ar:"كان يلعب كرة القدم. ولهذا ملابسه متّسخة."}, {en:"Mona has been studying English for six years.", ar:"تدرس منى الإنجليزية منذ ست سنوات."} ] },
        { point:"Simple vs continuous", ar:"البسيط مقابل المستمر", note:"البسيط = إتمام الفعل. المستمر = المدة.",
          ex:[ {en:"I have done my homework.", ar:"أنهيت واجبي."}, {en:"I have been doing my homework for hours.", ar:"كنت أعمل على واجبي لساعات."}, {en:"I have lived here for six years.", ar:"عشت هنا منذ ست سنوات."}, {en:"I have been living here since 1994.", ar:"أعيش هنا منذ عام 1994."} ] },
        { point:"Verb + infinitive or -ing", ar:"فعل + مصدر أو -ing", note:"begin, continue, start, like, love, prefer, hate. بعد would نستخدم to + مصدر.",
          ex:[ {en:"It began to rain.", ar:"بدأ المطر."}, {en:"It began raining.", ar:"بدأت تمطر."}, {en:"I like to sail.", ar:"أحب الإبحار."}, {en:"I like sailing.", ar:"أحب الإبحار."} ] }
      ]
    },
    {
      code:"3.6", title:"Jobs and qualities", titleAr:"الوظائف والصفات", type:"vocab",
      intro:"Names of jobs and the qualities people need for them.",
      introAr:"أسماء الوظائف والصفات التي يحتاجها الناس لها.",
      explain:"الدرس يربط بين اسم الوظيفة والصفات اللازمة لها. لاحظ: الأسماء المركّبة للوظائف (taxi-driver, shopkeeper, life-guard) لا تأخذ s في الجزء الأول رغم أنه قد يبدو منطقياً. والصفات تأتي بصورتين: صفة (polite) واسم مجرد (politeness). مفهوم مهم: be patient (كن صبوراً) و shows patience (يُبدي صبراً). تعلّم أيضاً المهارات الأساسية: people skills, communication skills, keyboard skills, telephone manner.",
      vocab:[
        { en:"tourist guide", ar:"مرشد سياحي", ipa:"/ˈtʊərɪst ɡaɪd/", ex:"A tourist guide shows visitors around.", exAr:"المرشد السياحي يصطحب الزوار." },
        { en:"firefighter", ar:"رجل إطفاء", ipa:"/ˈfaɪəfaɪtə/", ex:"A firefighter puts out fires.", exAr:"رجل الإطفاء يطفئ الحرائق." },
        { en:"computer programmer", ar:"مبرمج حاسوب", ipa:"/kəmˈpjuːtə ˈprəʊɡræmə/", ex:"A computer programmer writes code.", exAr:"مبرمج الحاسوب يكتب البرامج." },
        { en:"film director", ar:"مخرج أفلام", ipa:"/fɪlm dəˈrektə/", ex:"A film director makes films.", exAr:"مخرج الأفلام يصنع الأفلام." },
        { en:"newsreader", ar:"مذيع أخبار", ipa:"/ˈnjuːzriːdə/", ex:"A newsreader reads the news.", exAr:"مذيع الأخبار يقرأ الأخبار." },
        { en:"polite", ar:"مؤدّب", ipa:"/pəˈlaɪt/", ex:"You must be polite.", exAr:"يجب أن تكون مؤدّباً." },
        { en:"diligent", ar:"مجتهد", ipa:"/ˈdɪlɪdʒənt/", ex:"She is diligent.", exAr:"إنها مجتهدة." },
        { en:"patient", ar:"صبور", ipa:"/ˈpeɪʃnt/", ex:"A teacher must be patient.", exAr:"يجب أن يكون المعلّم صبوراً." },
        { en:"confident", ar:"واثق", ipa:"/ˈkɒnfɪdənt/", ex:"Be confident.", exAr:"كن واثقاً." },
        { en:"conscientious", ar:"دقيق / حريص", ipa:"/ˌkɒnʃiˈenʃəs/", ex:"She is conscientious.", exAr:"إنها دقيقة في عملها." }
      ]
    },
    {
      code:"3.8", title:"Applying for a job", titleAr:"التقدّم لوظيفة", type:"reading",
      intro:"A job advertisement and two letters of application.",
      introAr:"إعلان وظيفة وخطابا تقديم.",
      explain:"دراسة عملية لإعلان وظيفة فعلي وكيفية الكتابة الصحيحة لخطاب التقديم. لاحظ في الإعلان: الفئة العمرية (Age range)، الراتب الابتدائي (Starting salary)، والمواصفات (confident, well-educated, communication skills). في الخطابين، قارن كيف يُسوّق كل مرشّح لنفسه: المعلومات الأساسية، الخبرة، المهارات، الراتب الحالي. وأخيراً عبارة الإغلاق المعتادة: I look forward to hearing from you.",
      lines:[
        { en:"ADULT EDUCATION DEVELOPMENT WORKER", ar:"عامل تطوير تعليم الكبار" },
        { en:"The Ministry of Education is looking for a confident and well-educated individual.", ar:"تبحث وزارة التعليم عن شخص واثق ومتعلّم تعليماً جيداً." },
        { en:"The post involves teaching adults with learning difficulties in their own homes.", ar:"تتضمّن الوظيفة تعليم البالغين ذوي صعوبات التعلّم في منازلهم." },
        { en:"A driving licence is desirable.", ar:"رخصة القيادة مرغوبة." },
        { en:"The successful applicants will have good communication skills.", ar:"سيتمتع المتقدّمون الناجحون بمهارات تواصل جيدة." },
        { en:"Age range: 21–25. Starting salary: £18,000–£19,500 per annum.", ar:"الفئة العمرية: 21–25. الراتب الابتدائي: 18,000–19,500 جنيه سنوياً." },
        { en:"I am writing to apply for the job of teacher.", ar:"أكتب لأتقدّم بطلب وظيفة معلّم." },
        { en:"I am 24 years old and am a qualified Primary School teacher.", ar:"عمري 24 عاماً وأنا معلّم ابتدائي مؤهّل." },
        { en:"I have taught since I was 21 and have worked in different parts of the country.", ar:"أُدرّس منذ كان عمري 21 عاماً وعملت في أنحاء مختلفة من البلاد." },
        { en:"For the past six months I have been doing evening classes for adults with learning difficulties.", ar:"خلال الأشهر الستة الماضية أعطي دروساً مسائية للبالغين ذوي صعوبات التعلّم." },
        { en:"I have been using computers in this work.", ar:"أستخدم الحاسوب في هذا العمل." },
        { en:"I look forward to hearing from you in the near future.", ar:"أتطلّع لسماع ردّكم في المستقبل القريب." }
      ],
      vocab:[
        { en:"apply for", ar:"يتقدّم لـ", ipa:"/əˈplaɪ fɔː/", ex:"I am applying for the job.", exAr:"أتقدّم بطلب للوظيفة." },
        { en:"qualified", ar:"مؤهّل", ipa:"/ˈkwɒlɪfaɪd/", ex:"I am a qualified teacher.", exAr:"أنا معلّم مؤهّل." },
        { en:"desirable", ar:"مرغوب فيه", ipa:"/dɪˈzaɪərəbl/", ex:"A driving licence is desirable.", exAr:"رخصة القيادة مرغوبة." },
        { en:"computer literate", ar:"مُلمّ بالحاسوب", ipa:"/kəmˈpjuːtə ˈlɪtərət/", ex:"You must be computer literate.", exAr:"يجب أن تكون مُلمّاً بالحاسوب." }
      ]
    },
    {
      code:"3.10", title:"Language review 6 — Prepositions & linking", titleAr:"مراجعة لغوية 6 — حروف الجر والربط", type:"grammar",
      intro:"Words + prepositions, addition and consequence.",
      introAr:"الكلمات + حروف الجر، الإضافة والنتيجة.",
      explain:"ثلاث قواعد مهمة لكتابة خطاب رسمي: 1) الكلمات التي تأتي مع حرف جر معيّن: interested IN (مهتم بـ)، grateful FOR (ممتن لـ)، look forward TO (يتطلّع إلى)، apply FOR (يتقدّم لـ)، experience OF (خبرة في). 2) كلمات الإضافة: as well as, also, furthermore, in addition. 3) كلمات النتيجة: because, so, therefore, thus, as a result, consequently. هذه الكلمات تجعل كتابتك تبدو احترافية.",
      grammar:[
        { point:"Words + prepositions", ar:"كلمات + حروف جر", note:"تأتي بعدها اسم أو -ing.",
          ex:[ {en:"I would like to apply for the job.", ar:"أودّ التقدّم لهذه الوظيفة."}, {en:"I have experience of working with children.", ar:"لديّ خبرة في العمل مع الأطفال."} ] },
        { point:"Addition", ar:"الإضافة", note:"كلمات إعطاء معلومات إضافية.",
          ex:[ {en:"He wore a hat as well as woollen gloves.", ar:"ارتدى قبعة بالإضافة إلى قفازين صوفيين."}, {en:"She is polite. Furthermore, she is conscientious.", ar:"إنها مؤدّبة. فضلاً عن ذلك، إنها دقيقة."} ] },
        { point:"Consequence", ar:"النتيجة", note:"فكرة نتيجة لأخرى.",
          ex:[ {en:"He worked hard. As a result, he passed.", ar:"اجتهد كثيراً. ونتيجة لذلك، نجح."} ] }
      ]
    },
    {
      code:"3.11", title:"A business letter", titleAr:"خطاب رسمي", type:"reading",
      intro:"The layout of a good formal letter applying for a job.",
      introAr:"تخطيط خطاب رسمي جيّد للتقدّم لوظيفة.",
      explain:"أهم درس عملي في الوحدة: كيف تكتب خطاباً رسمياً صحيحاً. ترتيب أجزاء الخطاب: 1) عنوان المرسل أعلى اليمين، 2) اسم وعنوان المستقبِل، 3) التاريخ، 4) التحية (Dear Sir/Dear Mr Jones)، 5) المحتوى، 6) عبارة الإغلاق (Yours faithfully/Yours sincerely)، 7) التوقيع، 8) الاسم مطبوعاً. القاعدة الذهبية: لو بدأت بـ Dear Sir اختم بـ Yours faithfully، ولو بدأت بـ Dear Mr Jones اختم بـ Yours sincerely.",
      lines:[
        { en:"Parts of a formal letter in order:", ar:"أجزاء الخطاب الرسمي بالترتيب:" },
        { en:"1. The sender's address (top right).", ar:"1. عنوان المرسل (أعلى اليمين)." },
        { en:"2. The name and address of the receiver.", ar:"2. اسم وعنوان المستقبِل." },
        { en:"3. The date.", ar:"3. التاريخ." },
        { en:"4. The greeting, e.g. Dear Sir or Dear Mr Jones.", ar:"4. التحية، مثل: Dear Sir أو Dear Mr Jones." },
        { en:"5. A reference to the advertisement.", ar:"5. إشارة إلى الإعلان." },
        { en:"6. Information about the sender — sell yourself!", ar:"6. معلومات عن المرسل — قدّم نفسك بقوة!" },
        { en:"7. Asking for an interview.", ar:"7. طلب مقابلة." },
        { en:"8. The close, e.g. Yours faithfully.", ar:"8. الخاتمة، مثل: Yours faithfully." },
        { en:"9. The sender's signature.", ar:"9. توقيع المرسل." },
        { en:"10. The sender's name typed or printed.", ar:"10. اسم المرسل مطبوعاً." },
        { en:"Remember: if you start with Dear Sir, close with Yours faithfully.", ar:"تذكّر: إن بدأت بـ Dear Sir، اختم بـ Yours faithfully." },
        { en:"If you start with Dear Mr Jones, close with Yours sincerely.", ar:"وإن بدأت بـ Dear Mr Jones، اختم بـ Yours sincerely." }
      ],
      vocab:[
        { en:"sender", ar:"المُرسِل", ipa:"/ˈsendə/", ex:"The sender's address goes at the top.", exAr:"يُكتب عنوان المرسل في الأعلى." },
        { en:"receiver", ar:"المُستلِم", ipa:"/rɪˈsiːvə/", ex:"Write the receiver's address.", exAr:"اكتب عنوان المستلم." },
        { en:"greeting", ar:"تحية", ipa:"/ˈɡriːtɪŋ/", ex:"'Dear Sir' is a greeting.", exAr:"Dear Sir تحية." },
        { en:"signature", ar:"توقيع", ipa:"/ˈsɪɡnətʃə/", ex:"Add your signature at the end.", exAr:"أضف توقيعك في النهاية." }
      ]
    }
  ]
});

/* ====================== UNIT 4 ====================== */
COURSE.units.push({
  id:"u4", no:4, color:"#34d399", title:"Tables, flow charts and diagrams", titleAr:"الجداول والمخططات والرسوم",
  lessons:[
    {
      code:"4.1", title:"Food", titleAr:"الطعام", type:"vocab",
      intro:"Words connected with food grown in Yemen and how we prepare and cook it.",
      introAr:"كلمات تتعلق بالأطعمة التي تُزرع في اليمن وكيف نُعِدّها ونطهوها.",
      explain:"مجموعتان من المفردات: ثمار اليمن (dates, figs, mangoes, papayas, sorghum, grapes) وأفعال التحضير والطبخ (boil يغلي، squeeze يعصر، peel يقشّر، crush يسحق، grate يبشر، chop يقطّع، grill يشوي، grind يطحن). هذه الأفعال تساعدك على فهم وصفات الطعام. تطبيق عملي: Squeeze a lemon → get lemon juice (اعصر الليمون لتحصل على عصير).",
      vocab:[
        { en:"dates", ar:"تمر / بلح", ipa:"/deɪts/", ex:"Dates grow in Yemen.", exAr:"التمر يُزرع في اليمن." },
        { en:"figs", ar:"تين", ipa:"/fɪɡz/", ex:"Figs grow on trees.", exAr:"التين ينمو على الأشجار." },
        { en:"mangoes", ar:"مانجو", ipa:"/ˈmæŋɡəʊz/", ex:"Mangoes are sweet.", exAr:"المانجو حلوة." },
        { en:"papayas", ar:"بابايا", ipa:"/pəˈpaɪəz/", ex:"Papayas grow in warm areas.", exAr:"البابايا تنمو في المناطق الدافئة." },
        { en:"sorghum", ar:"ذُرة رفيعة", ipa:"/ˈsɔːɡəm/", ex:"Sorghum is a grain crop.", exAr:"الذرة الرفيعة محصول حبوب." },
        { en:"apricots", ar:"مشمش", ipa:"/ˈeɪprɪkɒts/", ex:"Apricots grow in the highlands.", exAr:"المشمش ينمو في المرتفعات." },
        { en:"grapes", ar:"عنب", ipa:"/ɡreɪps/", ex:"Yemen has many types of grape.", exAr:"اليمن فيها أنواع كثيرة من العنب." },
        { en:"boil", ar:"يغلي", ipa:"/bɔɪl/", ex:"Boil the water in a pan.", exAr:"اغلِ الماء في وعاء." },
        { en:"squeeze", ar:"يعصر", ipa:"/skwiːz/", ex:"Squeeze a lemon for juice.", exAr:"اعصر الليمون للحصول على العصير." },
        { en:"peel", ar:"يقشّر", ipa:"/piːl/", ex:"Peel the potatoes.", exAr:"قشّر البطاطس." },
        { en:"crush", ar:"يسحق", ipa:"/krʌʃ/", ex:"Crush the garlic.", exAr:"اسحق الثوم." },
        { en:"grate", ar:"يبشُر", ipa:"/ɡreɪt/", ex:"Grate the cheese.", exAr:"ابشُر الجبن." },
        { en:"chop", ar:"يقطّع", ipa:"/tʃɒp/", ex:"Chop the onions.", exAr:"قطّع البصل." },
        { en:"grill", ar:"يشوي", ipa:"/ɡrɪl/", ex:"Grill the fish.", exAr:"اشوِ السمك." },
        { en:"grind", ar:"يطحن", ipa:"/ɡraɪnd/", ex:"Grind the sorghum into flour.", exAr:"اطحن الذرة لتصبح طحيناً." }
      ]
    },
    {
      code:"4.3", title:"Learning to cook — fish curry", titleAr:"تعلّم الطبخ — كاري السمك", type:"conversation",
      intro:"James learns from his mother how to make a fish curry.",
      introAr:"يتعلّم جيمس من والدته كيف يُعِدّ كاري السمك.",
      explain:"حوار طبخ عملي يستخدم كلمات التسلسل: First (أولاً)، Then (ثم)، Next (بعد ذلك)، After that (بعدها)، Finally (أخيراً). لاحظ أفعال الطبخ في الجمل: peeled and chopped tomatoes (طماطم مقشّرة ومقطّعة)، crushed cloves of garlic (فصوص ثوم مسحوقة). الأمر المهم: تستخدم الأم you cook بدل الأمر المباشر cook لتعليم الطريقة بأسلوب توضيحي. وهذه الصياغة شائعة في الوصفات.",
      lines:[
        { sp:"James", en:"What are you doing, mum?", ar:"ماذا تفعلين يا أمي؟" },
        { sp:"Mother", en:"I'm making a fish curry.", ar:"أُعدّ كاري السمك." },
        { sp:"James", en:"That sounds good. And these are the ingredients?", ar:"يبدو لذيذاً. وهذه هي المكوّنات؟" },
        { sp:"Mother", en:"Yes, I always prepare them before I start cooking.", ar:"نعم، أُعدّها دائماً قبل أن أبدأ الطبخ." },
        { sp:"Mother", en:"Two peeled and chopped tomatoes, two chopped onions, and three crushed cloves of garlic.", ar:"حبتا طماطم مقشّرتان ومقطّعتان، وحبتا بصل مقطّعتان، وثلاثة فصوص ثوم مسحوقة." },
        { sp:"James", en:"What's that round, brown thing?", ar:"ما هذا الشيء المستدير البنّي؟" },
        { sp:"Mother", en:"It's a loomi — a small, dried lime.", ar:"إنه لومي — ليمون مجفّف صغير." },
        { sp:"Mother", en:"Two teaspoons of baharat — that's a mixture of spices.", ar:"ملعقتان صغيرتان من البهارات — وهي خلطة توابل." },
        { sp:"Mother", en:"Half a teaspoon of turmeric, half a teaspoon of chilli powder and a quarter of a teaspoon of ground ginger.", ar:"نصف ملعقة كركم، ونصف ملعقة شطّة، وربع ملعقة زنجبيل مطحون." },
        { sp:"James", en:"So how do you actually cook the curry, then?", ar:"إذاً كيف تطبخين الكاري فعلياً؟" },
        { sp:"Mother", en:"First you fry the onions and garlic.", ar:"أولاً تقلين البصل والثوم." },
        { sp:"Mother", en:"Then you add the spices and fry for a further two minutes.", ar:"ثم تضيفين البهارات وتقلين لدقيقتين إضافيتين." },
        { sp:"Mother", en:"Next you add the tomatoes, loomi, lemon juice, salt and pepper.", ar:"بعد ذلك تضيفين الطماطم واللومي وعصير الليمون والملح والفلفل." },
        { sp:"Mother", en:"After that, you cover the mixture with water and simmer for fifteen minutes.", ar:"بعدها تغطّين الخليط بالماء وتُغلين على نار هادئة لمدة خمس عشرة دقيقة." },
        { sp:"Mother", en:"While the mixture is boiling gently, you fry the pieces of fish until they are golden brown.", ar:"بينما يغلي الخليط بهدوء، تقلين قطع السمك حتى تصبح ذهبية بنية." },
        { sp:"Mother", en:"Then you put the fish into the sauce and simmer for a further fifteen minutes.", ar:"ثم تضعين السمك في الصلصة وتُغلين لخمس عشرة دقيقة إضافية." }
      ],
      vocab:[
        { en:"ingredients", ar:"مكوّنات", ipa:"/ɪnˈɡriːdiənts/", ex:"Prepare the ingredients first.", exAr:"حضّر المكوّنات أولاً." },
        { en:"spices", ar:"بهارات / توابل", ipa:"/ˈspaɪsɪz/", ex:"Add the spices.", exAr:"أضف البهارات." },
        { en:"turmeric", ar:"كركم", ipa:"/ˈtɜːmərɪk/", ex:"Half a teaspoon of turmeric.", exAr:"نصف ملعقة كركم." },
        { en:"ginger", ar:"زنجبيل", ipa:"/ˈdʒɪndʒə/", ex:"A quarter teaspoon of ground ginger.", exAr:"ربع ملعقة زنجبيل مطحون." },
        { en:"simmer", ar:"يُغلي على نار هادئة", ipa:"/ˈsɪmə/", ex:"Simmer for fifteen minutes.", exAr:"اغلِ على نار هادئة لخمس عشرة دقيقة." }
      ]
    },
    {
      code:"4.4", title:"Agriculture in Yemen", titleAr:"الزراعة في اليمن", type:"reading",
      intro:"The climate of Northern Yemen divided into five zones.",
      introAr:"مناخ شمال اليمن مقسّم إلى خمس مناطق.",
      explain:"نص علمي جغرافي ينقل المعلومات من فقرة إلى جدول. شمال اليمن يقسم إلى خمس مناطق مناخية: تهامة (ساحلية حارة)، السفوح الغربية (شبه استوائية)، المرتفعات الوسطى (معتدلة وفيها البن!)، السفوح الشرقية، ثم الصحراء. لاحظ الأرقام الدقيقة للارتفاعات: 0-300m, 300-2200m, 2200-3700m. تعرّف أيضاً على المصطلحات: tropical (استوائي)، subtropical (شبه استوائي)، moderate (معتدل).",
      lines:[
        { en:"The climate in the Northern part of Yemen can be divided into five areas or zones.", ar:"يمكن تقسيم مناخ شمال اليمن إلى خمس مناطق أو أحزمة." },
        { en:"In the Tihamah on the Red Sea (sea level to 300m) the climate is tropical.", ar:"في تهامة على البحر الأحمر (من مستوى سطح البحر إلى 300 متر) المناخ استوائي." },
        { en:"The air is hot and humid in the summer and pleasantly warm in the winter.", ar:"الجو حار ورطب في الصيف، ودافئ مريح في الشتاء." },
        { en:"Dates and cotton grow well here, as do vegetables and grains.", ar:"التمر والقطن ينموان جيداً هنا، وكذلك الخضروات والحبوب." },
        { en:"Further up the Western mountain slopes (300–2,200m), the climate becomes subtropical.", ar:"وأعلى على السفوح الغربية الجبلية (300–2,200م)، يصبح المناخ شبه استوائي." },
        { en:"Fruit typical of this area are mangoes, papayas and bananas.", ar:"الفواكه النموذجية لهذه المنطقة هي المانجو والبابايا والموز." },
        { en:"It is here that Yemen's most famous crop, coffee, is grown.", ar:"وهنا يُزرع أشهر محاصيل اليمن: البن." },
        { en:"The Central Highlands (2,200–3,700m) also have a moderate climate.", ar:"للمرتفعات الوسطى (2,200–3,700م) مناخ معتدل أيضاً." },
        { en:"All kinds of grain crops, such as sorghum, are grown on the mountain terraces.", ar:"تُزرع كل أنواع محاصيل الحبوب، كالذرة الرفيعة، على المدرّجات الجبلية." },
        { en:"Yemen has more than twenty different types of grape.", ar:"يوجد في اليمن أكثر من عشرين نوعاً مختلفاً من العنب." },
        { en:"On the Eastern mountain slopes the climate again becomes subtropical.", ar:"على السفوح الشرقية يعود المناخ شبه استوائي." },
        { en:"Further east in the yellow sands of the desert, very little grows.", ar:"وشرقاً في الرمال الصفراء للصحراء، لا ينمو إلا القليل." }
      ],
      vocab:[
        { en:"climate", ar:"مناخ", ipa:"/ˈklaɪmət/", ex:"The climate is tropical.", exAr:"المناخ استوائي." },
        { en:"humid", ar:"رطب", ipa:"/ˈhjuːmɪd/", ex:"The air is hot and humid.", exAr:"الجو حار ورطب." },
        { en:"moderate", ar:"معتدل", ipa:"/ˈmɒdərət/", ex:"A moderate climate.", exAr:"مناخ معتدل." },
        { en:"crop", ar:"محصول", ipa:"/krɒp/", ex:"Coffee is Yemen's famous crop.", exAr:"البن محصول اليمن الشهير." },
        { en:"terrace", ar:"مدرّجات زراعية", ipa:"/ˈterəs/", ex:"Grain is grown on terraces.", exAr:"تُزرع الحبوب على المدرّجات." }
      ]
    },
    {
      code:"4.6", title:"Language review 7 — Processes", titleAr:"مراجعة لغوية 7 — العمليات", type:"grammar",
      intro:"Sequence words, passive and 'while' for simultaneous actions.",
      introAr:"كلمات التسلسل، المبني للمجهول، و while للأفعال المتزامنة.",
      explain:"ثلاث قواعد لشرح العمليات. 1) كلمات التسلسل تجعل وصف الخطوات منظماً: First, Then, Next, After that, Finally. 2) المبني للمجهول يُستخدم حين يكون الفعل أهم من الفاعل (لأن الجميع يفعلون نفس الشيء): Coffee is grown in Yemen بدل People grow coffee. 3) while + المضارع المستمر للحديث عن فعلين يحدثان معاً: While the mixture is boiling, you fry the fish.",
      grammar:[
        { point:"Sequence words", ar:"كلمات التسلسل", note:"تقدّم كل مرحلة من مراحل العملية.",
          ex:[ {en:"First you fry the onions.", ar:"أولاً تقلي البصل."}, {en:"Then you add the spices.", ar:"ثم تضيف البهارات."}, {en:"Finally you simmer for fifteen minutes.", ar:"أخيراً تُغلي على نار هادئة لخمس عشرة دقيقة."} ] },
        { point:"Passive (processes)", ar:"المبني للمجهول في العمليات", note:"اجعل المفعول أهم من الفاعل، ويُحذف الفاعل غالباً.",
          ex:[ {en:"People grow coffee in Yemen.", ar:"يزرع الناس البن في اليمن."}, {en:"Coffee is grown in Yemen.", ar:"يُزرع البن في اليمن."} ] },
        { point:"while + present continuous", ar:"while + المضارع المستمر", note:"فعلان يحدثان في نفس الوقت.",
          ex:[ {en:"While the mixture is boiling gently, you fry the pieces of fish.", ar:"بينما يغلي الخليط بهدوء، تقلي قطع السمك."} ] }
      ]
    },
    {
      code:"4.7", title:"Words and more words", titleAr:"كلمات والمزيد من الكلمات", type:"reading",
      intro:"Where do new English words come from?",
      introAr:"من أين تأتي الكلمات الإنجليزية الجديدة؟",
      explain:"نص ممتع يشرح أربع طرق لتوليد كلمات إنجليزية جديدة: 1) الاقتراض من لغات أخرى (sugar, cotton, coffee من العربية؛ kayak من الإسكيمو). 2) إضافة بادئة (re-, un-, mis-) أو لاحقة (-able, -less) لكلمة موجودة. 3) دمج كلمتين (blue + berry = blueberry). 4) تغيير استخدام الكلمة (milk اسم يصير فعلاً). فائدة عظيمة: لما تواجه كلمة جديدة، حاول فكّ تكوينها.",
      lines:[
        { en:"One way of creating new words is to borrow them from other languages.", ar:"إحدى طرق توليد الكلمات الجديدة هي اقتراضها من لغات أخرى." },
        { en:"English has been taking words from Latin, Greek and French for hundreds of years.", ar:"تأخذ الإنجليزية كلمات من اللاتينية واليونانية والفرنسية منذ مئات السنين." },
        { en:"Trade with the Arab world has given English words like sugar, cotton and coffee.", ar:"التجارة مع العالم العربي أعطت الإنجليزية كلمات مثل sugar و cotton و coffee." },
        { en:"Another way of forming new words is to add a prefix or suffix.", ar:"طريقة أخرى لتكوين كلمات جديدة هي إضافة بادئة أو لاحقة." },
        { en:"A prefix goes in front of the stem: re- (remake), un- (unhappy), mis- (misunderstand).", ar:"البادئة تأتي قبل الجذر: re- (يعيد عمل)، un- (غير سعيد)، mis- (يفهم خطأ)." },
        { en:"A suffix is added to the end: -able (comfortable), -less (careless).", ar:"اللاحقة تُضاف في النهاية: -able (مريح)، -less (مهمل)." },
        { en:"A prefix usually changes the meaning. A suffix usually changes the part of speech.", ar:"البادئة عادةً تغيّر المعنى. اللاحقة عادةً تغيّر نوع الكلمة." },
        { en:"A third way is to join two different words: blue + berry = blueberry.", ar:"الطريقة الثالثة هي دمج كلمتين: blue + berry = blueberry." },
        { en:"A fourth method is to change the way a word is used.", ar:"الطريقة الرابعة هي تغيير استخدام الكلمة." },
        { en:"A noun can be used as a verb: we can milk a cow.", ar:"يمكن استخدام الاسم كفعل: نقول milk a cow أي نحلب البقرة." }
      ],
      vocab:[
        { en:"borrow", ar:"يقترض / يستعير", ipa:"/ˈbɒrəʊ/", ex:"English borrows words from other languages.", exAr:"تقترض الإنجليزية كلمات من لغات أخرى." },
        { en:"prefix", ar:"بادئة", ipa:"/ˈpriːfɪks/", ex:"'un-' is a prefix.", exAr:"un- بادئة." },
        { en:"suffix", ar:"لاحقة", ipa:"/ˈsʌfɪks/", ex:"'-less' is a suffix.", exAr:"less- لاحقة." },
        { en:"compound", ar:"كلمة مركّبة", ipa:"/ˈkɒmpaʊnd/", ex:"'newspaper' is a compound.", exAr:"newspaper كلمة مركّبة." }
      ]
    },
    {
      code:"4.8", title:"Investigating the world around us", titleAr:"استكشاف العالم من حولنا", type:"reading",
      intro:"Aisha's experiment on water pressure.",
      introAr:"تجربة عائشة عن ضغط الماء.",
      explain:"نموذج تقرير تجربة علمية بالأقسام القياسية. ستحتاج هذه البنية لكتابة أي تقرير علمي مدرسي: Title (العنوان)، Question (السؤال)، Research (المعلومات السابقة)، Hypothesis (الفرضية)، Materials (المواد)، Procedure (الإجراء بترقيم)، Data (البيانات الملاحظة)، Conclusion (الاستنتاج). فكرة التجربة: كلما زاد عمق الماء زاد الضغط، وهذا يفسّر لِمَ يكون السدّ أسمك في القاع.",
      lines:[
        { en:"Name: Aisha Yousif. Date: 11.12.1999.", ar:"الاسم: عائشة يوسف. التاريخ: 11.12.1999." },
        { en:"TITLE: An investigation into water pressure.", ar:"العنوان: بحث في ضغط الماء." },
        { en:"QUESTION: Why is a dam thicker at the bottom than at the top?", ar:"السؤال: لماذا يكون السدّ أسمك في الأسفل منه في الأعلى؟" },
        { en:"RESEARCH: When you dive under water, the further you go down, the more your ears hurt.", ar:"بحث: حين تغوص تحت الماء، كلما نزلت أعمق، اشتدّ ألم أذنيك." },
        { en:"HYPOTHESIS: The deeper the water, the greater the pressure.", ar:"الفرضية: كلما زاد عمق الماء، زاد الضغط." },
        { en:"MATERIALS: One 2-litre plastic bottle, a tray, a nail, water and scissors.", ar:"المواد: زجاجة بلاستيكية سعة لترين، صينية، مسمار، ماء، ومقصّ." },
        { en:"1. Cut the top off the plastic bottle.", ar:"1. اقطع الجزء العلوي من الزجاجة البلاستيكية." },
        { en:"2. Use a nail to make four holes in the bottle at different levels.", ar:"2. استخدم مسماراً لعمل أربعة ثقوب في الزجاجة على مستويات مختلفة." },
        { en:"3. Put the bottle in the tray.", ar:"3. ضع الزجاجة في الصينية." },
        { en:"4. Cover the holes with your fingers, then have a friend fill the bottle with water.", ar:"4. غطّ الثقوب بأصابعك، ثم اطلب من صديق ملء الزجاجة بالماء." },
        { en:"5. When the bottle is full, take your fingers away and study the flow of water.", ar:"5. عندما تمتلئ الزجاجة، ارفع أصابعك وادرس تدفّق الماء." },
        { en:"DATA: Four jets of water came out. The jet at the top was the shortest and the jet at the bottom was the longest.", ar:"البيانات: خرجت أربعة نفّاثات من الماء. النفّاث العلوي كان الأقصر والسفلي كان الأطول." },
        { en:"CONCLUSION: The greater the pressure, the longer the jet. The data confirms the hypothesis.", ar:"الاستنتاج: كلما زاد الضغط، طال النفّاث. تؤكّد البيانات الفرضية." }
      ],
      vocab:[
        { en:"pressure", ar:"ضغط", ipa:"/ˈpreʃə/", ex:"Water pressure increases with depth.", exAr:"يزداد ضغط الماء مع العمق." },
        { en:"hypothesis", ar:"فرضية", ipa:"/haɪˈpɒθəsɪs/", ex:"The data confirms the hypothesis.", exAr:"تؤكّد البيانات الفرضية." },
        { en:"depth", ar:"عُمق", ipa:"/depθ/", ex:"The longest jet is at the greatest depth.", exAr:"أطول نفّاث عند أكبر عمق." },
        { en:"confirm", ar:"يؤكّد", ipa:"/kənˈfɜːm/", ex:"The data confirms the hypothesis.", exAr:"تؤكّد البيانات الفرضية." }
      ]
    },
    {
      code:"4.10", title:"Language review 8 — have/get & comparatives", titleAr:"مراجعة لغوية 8 — have/get والمقارنات", type:"grammar",
      intro:"have/get + infinitive, get for change of state, two comparatives and parts of speech.",
      introAr:"have/get + مصدر، get لتغيّر الحالة، المقارنتان المزدوجتان وأقسام الكلام.",
      explain:"أربع قواعد مهمة. 1) have/get + مصدر = يجعل شخصاً يفعل شيئاً، مثل Have the boy put away his bag. مع have يأتي المصدر بدون to. 2) get = become، فيقال He got wet بدل He became wet. 3) المقارنتان المزدوجتان (the + مقارن، the + مقارن) لربط فعلين، مثل The deeper the water, the greater the pressure. 4) أقسام الكلام: من المهم تمييز نوع الكلمة (اسم، فعل، صفة، ظرف، حرف جر) لتخمين معناها.",
      grammar:[
        { point:"have / get + infinitive", ar:"have / get + مصدر", note:"يحلّان محل ask/tell/order. مع have يأتي المصدر بدون to.",
          ex:[ {en:"Have the boy put away his bag.", ar:"اجعل الولد يرفع حقيبته."}, {en:"Get the boy to put away his bag.", ar:"اجعل الولد يرفع حقيبته."} ] },
        { point:"get = become", ar:"get بمعنى يصبح", note:"تحلّ get محل become الأكثر رسمية.",
          ex:[ {en:"He got wet when he went out in the boat.", ar:"ابتلّ عندما خرج في القارب."} ] },
        { point:"Two comparatives", ar:"المقارنتان معاً", note:"مقارن في كل نصف من الجملة يُبيّن أن فعلاً يسبّب الآخر.",
          ex:[ {en:"The deeper the water, the greater the pressure.", ar:"كلما زاد عمق الماء، زاد الضغط."}, {en:"The further you go down, the more your ears hurt.", ar:"كلما نزلت أعمق، اشتدّ ألم أذنيك."} ] }
      ]
    },
    {
      code:"4.11", title:"Frozen peas", titleAr:"البازلاء المجمّدة", type:"reading",
      intro:"How peas are frozen — a process from field to supermarket.",
      introAr:"كيف تُجمَّد البازلاء — عملية من الحقل إلى السوبر ماركت.",
      explain:"نص يصف عملية صناعية كاملة، مفيد جداً لتقوية مهارة الكتابة الإجرائية. لاحظ كثرة المبني للمجهول (are processed, are cleaned, are washed, are passed) لأن الفاعل غير مهم. وكلمات التسلسل: Next, After that, Finally. مصطلح علمي مهم: blanching (السلق السريع). معلومة ذكية: البازلاء المجمّدة أطزج من الطازجة في السوق! لأنها تُعالج خلال ساعتين من القطف.",
      lines:[
        { en:"Frozen peas are fresher than the peas you buy in a shop.", ar:"البازلاء المجمّدة أطزج من البازلاء التي تشتريها من المتجر." },
        { en:"This is because frozen peas are processed within two or three hours of being picked.", ar:"السبب أن البازلاء المجمّدة تُعالج خلال ساعتين أو ثلاث من قطفها." },
        { en:"For top quality, peas must be processed as quickly as possible.", ar:"للجودة العالية، يجب معالجة البازلاء بأسرع وقت ممكن." },
        { en:"On arrival at the factory, the softer peas are chosen for freezing.", ar:"عند الوصول إلى المصنع، تُختار البازلاء الأكثر طراوة للتجميد." },
        { en:"The peas are quickly cleaned by fans and then thoroughly washed.", ar:"تُنظَّف البازلاء بسرعة بواسطة مراوح ثم تُغسل بدقّة." },
        { en:"Next the peas are passed through boiling water for one minute — a process known as blanching.", ar:"بعد ذلك تمرّ البازلاء عبر ماء مغلٍ لمدة دقيقة — عملية تُعرف بالسلق السريع." },
        { en:"After that they are cooled to less than 20°C and passed through salt water or brine.", ar:"بعدها تُبرّد إلى أقل من 20°م وتمرّ عبر ماء مالح." },
        { en:"They are then washed again in clean water.", ar:"ثم تُغسل مرة أخرى بالماء النظيف." },
        { en:"Finally they are quick-frozen. The whole process takes about half an hour.", ar:"أخيراً تُجمَّد بسرعة. تستغرق العملية كلها نصف ساعة تقريباً." },
        { en:"The frozen peas are packed into big bags and put into cold storage at -18°C.", ar:"تُعبّأ البازلاء المجمّدة في أكياس كبيرة وتُحفظ في تخزين بارد بدرجة -18°م." },
        { en:"They are then re-packed and sent in refrigerated trucks to shops.", ar:"ثم يُعاد تعبئتها وتُرسل في شاحنات مبرّدة إلى المتاجر." }
      ],
      vocab:[
        { en:"process", ar:"يعالج / عملية", ipa:"/ˈprəʊses/", ex:"Peas are processed quickly.", exAr:"تُعالج البازلاء بسرعة." },
        { en:"blanching", ar:"سلق سريع", ipa:"/ˈblɑːntʃɪŋ/", ex:"Blanching uses boiling water.", exAr:"السلق السريع يستخدم ماءً مغلياً." },
        { en:"brine", ar:"ماء مالح", ipa:"/braɪn/", ex:"Peas pass through brine.", exAr:"تمرّ البازلاء عبر ماء مالح." },
        { en:"refrigerated", ar:"مبرّد / ثلاجة", ipa:"/rɪˈfrɪdʒəreɪtɪd/", ex:"Sent in refrigerated trucks.", exAr:"تُرسل في شاحنات مبرّدة." }
      ]
    }
  ]
});

/* ====================== UNIT 5 ====================== */
COURSE.units.push({
  id:"u5", no:5, color:"#fb923c", title:"Working things out", titleAr:"استنتاج الأمور",
  lessons:[
    {
      code:"5.1", title:"Word sets", titleAr:"مجموعات الكلمات", type:"vocab",
      intro:"A group of connected words is a word set.",
      introAr:"مجموعة الكلمات المترابطة تُسمّى word set.",
      explain:"فكرة قوية لتعلّم المفردات: تعلّم الكلمات في مجموعات مترابطة بدل تعلّمها فرادى. هنا المجموعة عن السفر بحراً: السفينة وأجزاؤها (mast صارية، sail شراع، deck سطح، cabin مقصورة، bow مقدّمة، stern مؤخّرة)، والأنشطة (rowing تجديف، fishing صيد)، والكائنات المرتبطة (sailor بحّار، tanker ناقلة). تعلّم الكلمات بهذه الطريقة يثبّتها في ذاكرتك أسرع لأن دماغك يربطها معاً.",
      vocab:[
        { en:"mast", ar:"صارية", ipa:"/mɑːst/", ex:"The fishing boat has one mast.", exAr:"قارب الصيد له صارية واحدة." },
        { en:"sail", ar:"شراع", ipa:"/seɪl/", ex:"They are pulling up the sail.", exAr:"يرفعون الشراع." },
        { en:"deck", ar:"سطح السفينة", ipa:"/dek/", ex:"There are some fish on the deck.", exAr:"هناك بعض السمك على سطح السفينة." },
        { en:"cabin", ar:"مقصورة", ipa:"/ˈkæbɪn/", ex:"There is one sailor in the cabin.", exAr:"يوجد بحّار واحد في المقصورة." },
        { en:"horizon", ar:"أفق", ipa:"/həˈraɪzn/", ex:"There is a tanker on the horizon.", exAr:"هناك ناقلة في الأفق." },
        { en:"oar", ar:"مجداف", ipa:"/ɔː/", ex:"One man has lost an oar.", exAr:"رجل واحد فقد مجدافاً." },
        { en:"telescope", ar:"منظار / تلسكوب", ipa:"/ˈtelɪskəʊp/", ex:"He looked through the telescope.", exAr:"نظر عبر التلسكوب." },
        { en:"tanker", ar:"ناقلة (نفط)", ipa:"/ˈtæŋkə/", ex:"A large tanker on the horizon.", exAr:"ناقلة كبيرة في الأفق." },
        { en:"stern", ar:"مؤخّرة السفينة", ipa:"/stɜːn/", ex:"He is standing in the stern.", exAr:"يقف في مؤخّرة السفينة." },
        { en:"bow", ar:"مقدّمة السفينة", ipa:"/baʊ/", ex:"Wood was cut from the bow.", exAr:"قُطع الخشب من مقدّمة السفينة." },
        { en:"net", ar:"شبكة", ipa:"/net/", ex:"The fishermen use a net.", exAr:"يستخدم الصيادون شبكة." }
      ]
    },
    {
      code:"5.2", title:"Possibilities", titleAr:"الاحتمالات", type:"grammar",
      intro:"Children try to work out what an object is, using modal verbs.",
      introAr:"يحاول الأطفال معرفة ماهية شيء، مستخدمين أفعال الاحتمال الناقصة.",
      explain:"كيف نُعبّر عن الاحتمال والتأكّد. للاحتمال (لست متأكداً): might/may/could be (قد يكون). للتأكّد (لديك دليل): must be (لا بد أنه). للنفي القاطع: can't be (لا يمكن أن يكون). مثال: There is a number here. It must be a coin (يوجد رقم. لا بد أنها عملة). و could be an earring (قد يكون قُرطاً). والشرطية: If there was no rain, the country would turn to desert (لو لم يكن هناك مطر، لتحوّلت البلاد إلى صحراء).",
      grammar:[
        { point:"might / may / could", ar:"قد / ربما (احتمال)", note:"يدلّ على أن شيئاً ممكن لكن غير مؤكد.",
          ex:[ {en:"It might be a coin.", ar:"قد تكون عملة."}, {en:"Or it may be a piece of jewellery.", ar:"أو قد تكون قطعة مجوهرات."}, {en:"It could be an earring.", ar:"قد يكون قُرطاً."} ] },
        { point:"must (certainty)", ar:"لا بد (تأكّد)", note:"تأكّد بناءً على دليل.",
          ex:[ {en:"There is a number here. It must be a coin.", ar:"يوجد رقم هنا. لا بد أنها عملة."} ] },
        { point:"Conditional: would", ar:"الشرط: would", note:"للحديث عن نتائج مواقف افتراضية.",
          ex:[ {en:"If there was no more rain in Yemen, the whole country would turn to desert.", ar:"لو لم يعد هناك مطر في اليمن، لتحوّلت البلاد كلها إلى صحراء."} ] }
      ]
    },
    {
      code:"5.4", title:"Puzzles and riddles", titleAr:"الألغاز والأحاجي", type:"reading",
      intro:"Understanding a reading test can be like solving a puzzle.",
      introAr:"فهم نصوص القراءة قد يشبه حلّ اللغز.",
      explain:"درس يُعلّمك مهارة الاستنتاج (inference). أحياناً الكاتب لا يصرّح بكل شيء، بل يترك لك دلائل. مثلاً: People kick me all the time → ما الشيء الذي يُركَل كثيراً ويُسبّب فرحاً عند دخوله الشبكة؟ الجواب: كرة قدم. ركّز على الكلمات المفتاحية في كل لغز: net شبكة، kick يركل، Mathematics homework واجب رياضيات. هذه المهارة ضرورية لفهم القراءة في الامتحانات.",
      lines:[
        { en:"Understanding some reading tests is like solving a puzzle.", ar:"فهم بعض اختبارات القراءة يشبه حلّ لغز." },
        { en:"Things are not always stated directly. The reader has to infer what the writer is talking about.", ar:"لا تُذكر الأشياء دائماً مباشرة. على القارئ أن يستنتج ما يتحدث عنه الكاتب." },
        { en:"What objects might say something like this?", ar:"أي الأشياء قد تقول شيئاً كهذا؟" },
        { en:"1. People kick me all the time but it doesn't worry me. It makes them happy, especially when they put me in the net.", ar:"1. يركلني الناس طوال الوقت لكن هذا لا يُقلقني. بل يجعلهم سعداء، خاصة حين يضعونني في الشبكة." },
        { en:"2. People keep me in a safe place and use me when they want to buy things. I have a different name in most countries.", ar:"2. يحتفظ بي الناس في مكان آمن ويستخدمونني حين يريدون شراء الأشياء. لديّ اسم مختلف في معظم البلدان." },
        { en:"3. Without me you have to do your Mathematics homework in your head or on paper.", ar:"3. بدوني عليك أن تحلّ واجبك في الرياضيات في ذهنك أو على الورق." },
        { en:"4. North, south, east or west — I'll show you where they are.", ar:"4. شمال، جنوب، شرق أو غرب — أنا أُريك أين هي." },
        { en:"5. Hold me, jump off a mountain and fly like a bird.", ar:"5. أمسكني، اقفز من جبل، وحلّق مثل طائر." }
      ],
      vocab:[
        { en:"puzzle", ar:"لغز", ipa:"/ˈpʌzl/", ex:"Solving a puzzle.", exAr:"حلّ لغز." },
        { en:"riddle", ar:"أحجية", ipa:"/ˈrɪdl/", ex:"Read the riddle.", exAr:"اقرأ الأحجية." },
        { en:"infer", ar:"يستنتج", ipa:"/ɪnˈfɜː/", ex:"The reader has to infer the meaning.", exAr:"على القارئ أن يستنتج المعنى." }
      ]
    },
    {
      code:"5.5", title:"Language review 9 — Modal verbs (1)", titleAr:"مراجعة لغوية 9 — الأفعال الناقصة (1)", type:"grammar",
      intro:"Modal verbs for possibility, certainty and ability.",
      introAr:"الأفعال الناقصة للاحتمال والتأكّد والقدرة.",
      explain:"مراجعة الأفعال الناقصة بثلاثة استخدامات: 1) درجات الاحتمال: may/might/could للحالات غير المؤكدة، must للتأكّد المثبت، can't للنفي القاطع. 2) mustn't للتحريم (تخبر أحداً أنه ممنوع من فعل شيء): You must not look at your books during an exam. 3) القدرة: can/cannot للحاضر، could للماضي وبعد wish وفي الجمل الشرطية. بدائل: be able to. ولاحظ أفعال الحواس + مفعول + -ing لتأكيد الاستمرار، أو + مصدر لتأكيد الإتمام.",
      grammar:[
        { point:"Degrees of possibility", ar:"درجات الاحتمال", note:"غير متأكد: may/might/could. متأكد: must (مثبت) أو can't (منفي).",
          ex:[ {en:"It may be a toothbrush.", ar:"قد تكون فرشاة أسنان."}, {en:"It must be a toothbrush.", ar:"لا بد أنها فرشاة أسنان."}, {en:"It can't be a toothbrush.", ar:"لا يمكن أن تكون فرشاة أسنان."} ] },
        { point:"must not (mustn't)", ar:"must not (ممنوع)", note:"تستخدم لإخبار شخص بأنه غير مسموح له بفعل شيء.",
          ex:[ {en:"You must not look at your books during an exam.", ar:"يُمنع عليك النظر في كتبك خلال الامتحان."} ] },
        { point:"Ability: can / could", ar:"القدرة: can / could", note:"can/cannot للحاضر. could للماضي، وبعد wish، وفي الشرطية. بديل: be able to.",
          ex:[ {en:"I can swim.", ar:"أستطيع السباحة."}, {en:"I could swim when I was six.", ar:"كنت أستطيع السباحة وأنا في السادسة."}, {en:"I wish I could swim.", ar:"أتمنى لو كنت أستطيع السباحة."}, {en:"I am able to swim.", ar:"أنا قادر على السباحة."} ] }
      ]
    },
    {
      code:"5.6", title:"The mystery of the Mary Celeste", titleAr:"لغز سفينة ماري سيليست", type:"reading",
      intro:"The most famous unexplained mystery of the sea.",
      introAr:"أشهر لغز بحري غير مُفسَّر.",
      explain:"قصة حقيقية شهيرة من تاريخ البحار. سفينة وُجدت في عرض الأطلسي عام 1872 خالية تماماً من البشر، رغم أن الطعام كان لا يزال طازجاً وأمتعة الجميع في أماكنها. لاحظ في النص استخدام الزمن الماضي البسيط لسرد الأحداث، والماضي المستمر لتهيئة المشاهد. والأهم: عبارات وصف المشاعر — his blood ran cold (تجمّد دمه) للتعبير عن الخوف. سيستخدم الدرس التالي هذا اللغز لتعليم الأفعال الناقصة الماضية.",
      lines:[
        { en:"On the morning of December 5th, 1872, Captain Morehouse and his crew were sailing across the Atlantic Ocean.", ar:"في صباح الخامس من ديسمبر 1872، كان الكابتن مورهاوس وطاقمه يبحرون عبر المحيط الأطلسي." },
        { en:"There was a good wind and visibility was excellent.", ar:"كانت الرياح ملائمة والرؤية ممتازة." },
        { en:"At about 9 o'clock one of the sailors sighted another ship on the horizon.", ar:"حوالي الساعة التاسعة لمح أحد البحارة سفينة أخرى في الأفق." },
        { en:"Captain Morehouse put his telescope to his eye and looked at the other ship.", ar:"وضع الكابتن مورهاوس التلسكوب على عينه ونظر إلى السفينة الأخرى." },
        { en:"There was something strange about the way she was moving.", ar:"كان هناك شيء غريب في طريقة حركتها." },
        { en:"Now he could just make out the name of the ship: Mary Celeste.", ar:"الآن استطاع بالكاد تمييز اسم السفينة: ماري سيليست." },
        { en:"But then his blood ran cold. There was nobody on the deck, nobody climbing the masts and nobody at the wheel.", ar:"عندئذٍ تجمّد دمه. لم يكن أحد على السطح، ولا أحد يتسلّق الصواري، ولا أحد عند المقود." },
        { en:"The Mary Celeste was steering herself.", ar:"كانت ماري سيليست تقود نفسها." },
        { en:"When the two ships were about 100 metres apart, Captain Morehouse and two of his crew rowed across to the Mary Celeste.", ar:"عندما صار بين السفينتين حوالي 100 متر، جدّف الكابتن مورهاوس واثنان من طاقمه إلى ماري سيليست." },
        { en:"They went below deck and looked in every cabin. They found nobody.", ar:"نزلوا تحت السطح وفتّشوا كل مقصورة. لم يجدوا أحداً." },
        { en:"The ship was completely deserted.", ar:"كانت السفينة مهجورة تماماً." },
        { en:"In the crew's cabins, everything had been put away tidily.", ar:"في مقصورات الطاقم، كان كل شيء مرتّباً." },
        { en:"In the kitchen, pans half-full of food were hanging over a dead fire.", ar:"في المطبخ، كانت قدور نصف ممتلئة بالطعام معلّقة فوق نار خامدة." },
        { en:"None of the people from the Mary Celeste was ever seen again.", ar:"لم يُرَ أيٌّ من أهل ماري سيليست بعد ذلك أبداً." },
        { en:"The strange story has never been explained.", ar:"لم تُفسَّر القصة الغريبة قط." }
      ],
      vocab:[
        { en:"deserted", ar:"مهجور", ipa:"/dɪˈzɜːtɪd/", ex:"The ship was completely deserted.", exAr:"كانت السفينة مهجورة تماماً." },
        { en:"visibility", ar:"مدى الرؤية", ipa:"/ˌvɪzəˈbɪləti/", ex:"Visibility was excellent.", exAr:"كانت الرؤية ممتازة." },
        { en:"sight", ar:"يلمح / يرى", ipa:"/saɪt/", ex:"A sailor sighted another ship.", exAr:"لمح بحّار سفينة أخرى." },
        { en:"drift", ar:"ينجرف", ipa:"/drɪft/", ex:"The ship was drifting on the sea.", exAr:"كانت السفينة تنجرف في البحر." }
      ]
    },
    {
      code:"5.7", title:"What could have happened?", titleAr:"ماذا يمكن أن يكون قد حدث؟", type:"reading",
      intro:"Many people have tried to explain the Mary Celeste mystery.",
      introAr:"حاول الناس تفسير لغز ماري سيليست.",
      explain:"خمسة تفسيرات افتراضية لما حدث في ماري سيليست، كلها تستخدم نفس البنية النحوية: modal + have + past participle. هذه البنية تُعبّر عن استنتاج بشأن أحداث الماضي. تطبيق ممتاز للقاعدة قبل دراستها رسمياً في 5.9. اقرأ كل تفسير وتمعّن: A monster may have come up = ربما خرج وحش، Pirates may have attacked = ربما هاجمها قراصنة. لاحظ أن كلها افتراضات لا يمكن إثباتها.",
      lines:[
        { en:"Since the Mary Celeste was found, many people have tried to explain the mystery.", ar:"منذ أن عُثر على ماري سيليست، حاول الناس تفسير اللغز." },
        { en:"1. A huge monster may have come up out of the sea and dragged all the people into the water.", ar:"1. ربما خرج وحش ضخم من البحر وجرّ كل الناس إلى الماء." },
        { en:"2. An island might have appeared suddenly out of the ocean.", ar:"2. ربما ظهرت جزيرة فجأة من المحيط." },
        { en:"Everybody got off the ship to walk on the new land.", ar:"نزل الجميع من السفينة للسير على الأرض الجديدة." },
        { en:"But then the island must have sunk back into the sea and everybody must have drowned.", ar:"لكن لا بد أن الجزيرة غرقت ثانية في البحر، ولا بد أن الجميع غرقوا." },
        { en:"3. A hurricane could have blown everybody off the ship.", ar:"3. ربما قذف إعصار الجميع من على السفينة." },
        { en:"4. The passengers and crew might have caught a terrible disease and decided to drown themselves.", ar:"4. ربما أصيب الركاب والطاقم بمرض فظيع وقرّروا إغراق أنفسهم." },
        { en:"5. Pirates may have attacked the ship and taken all the crew and passengers.", ar:"5. ربما هاجم قراصنة السفينة وأخذوا كل الطاقم والركاب." },
        { en:"Then the pirates could have sold them as slaves.", ar:"ثم باعهم القراصنة عبيداً." }
      ],
      vocab:[
        { en:"monster", ar:"وحش", ipa:"/ˈmɒnstə/", ex:"A monster may have appeared.", exAr:"ربما ظهر وحش." },
        { en:"drown", ar:"يغرق", ipa:"/draʊn/", ex:"Everybody must have drowned.", exAr:"لا بد أن الجميع غرقوا." },
        { en:"pirate", ar:"قرصان", ipa:"/ˈpaɪrət/", ex:"Pirates may have attacked the ship.", exAr:"ربما هاجم قراصنة السفينة." },
        { en:"slave", ar:"عبد", ipa:"/sleɪv/", ex:"They were sold as slaves.", exAr:"بِيعوا كعبيد." }
      ]
    },
    {
      code:"5.9", title:"Language review 10 — Modal verbs (2)", titleAr:"مراجعة لغوية 10 — الأفعال الناقصة (2)", type:"grammar",
      intro:"Talking about how something happened in the past, plus reflexive pronouns.",
      introAr:"الحديث عن كيفية حدوث شيء في الماضي، إلى جانب الضمائر الانعكاسية.",
      explain:"ثلاث قواعد. 1) للحديث عن الماضي بالاحتمال: may/might/could have + اسم مفعول للتفسير المحتمل، و must have + اسم مفعول للقرار، و cannot/could not have لرفض التفسير، و because لإعطاء سبب. 2) بنية شائعة جداً: فعل + مفعول + (to + مصدر) مع أفعال مثل want, ask, tell, order, would like. 3) الضمائر الانعكاسية (myself, yourself, himself...) تُستخدم حين يكون الفاعل والمفعول نفس الشخص: I cut myself (جرحت نفسي).",
      grammar:[
        { point:"modal + have + past participle", ar:"ناقص + have + اسم مفعول", note:"تفسير ممكن: may/might/could. قرار: must. رفض: cannot/could not.",
          ex:[ {en:"The sailors may have mutinied.", ar:"ربما تمرّد البحارة."}, {en:"The sailors must have mutinied.", ar:"لا بد أن البحارة تمرّدوا."}, {en:"The sailors cannot have mutinied.", ar:"لا يمكن أن يكون البحارة قد تمرّدوا."} ] },
        { point:"verb + object + infinitive (to)", ar:"فعل + مفعول + مصدر (to)", note:"بنية شائعة جداً مع want, ask, tell, order, would like.",
          ex:[ {en:"He ordered his crew to put up signal flags.", ar:"أمر طاقمه برفع أعلام الإشارة."}, {en:"The teacher wants us to work harder.", ar:"يريدنا المعلّم أن نجتهد أكثر."}, {en:"My mother asked me to help her.", ar:"طلبت مني أمي مساعدتها."} ] },
        { point:"Reflexive pronouns", ar:"الضمائر الانعكاسية", note:"عندما يكون الفاعل والمفعول نفس الشخص. myself, yourself, himself, herself, itself, ourselves, yourselves, themselves.",
          ex:[ {en:"The passengers decided to drown themselves.", ar:"قرّر الركاب إغراق أنفسهم."} ] }
      ]
    },
    {
      code:"5.11", title:"Tracks in the sand", titleAr:"آثار في الرمال", type:"reading",
      intro:"Hamad Faisal and Tim Brook work for the National Oil Company.",
      introAr:"حمد فيصل وتيم بروك يعملان في شركة النفط الوطنية.",
      explain:"بداية قصة لغز جديد تتدرّب فيه على استنتاج ما حدث (تطبيق على modal + have + p.p.). سيارة وحيدة في الصحراء مع آثار حولها، فيها بنزين كافٍ، وفيها ماء، لكن أقرب طريق على بعد 25 كم. ما الذي حدث؟ على القارئ التفكير: maybe they got lost (ربما تاهوا)، they could have run out of fuel (ربما نفد وقودهم)، they must have left to find help (لا بد أنهم خرجوا للبحث عن مساعدة).",
      lines:[
        { en:"Hamad Faisal and Tim Brook work for the National Oil Company.", ar:"حمد فيصل وتيم بروك يعملان في شركة النفط الوطنية." },
        { en:"They often fly across the desert to the oil-fields.", ar:"كثيراً ما يطيران عبر الصحراء إلى حقول النفط." },
        { en:"One afternoon, from the helicopter, they saw a car standing alone in the desert with tracks in the sand around it.", ar:"بعد ظهر أحد الأيام، رأيا من المروحية سيارة واقفة وحدها في الصحراء وحولها آثار في الرمال." },
        { en:"Look! Over there!", ar:"انظر! هناك!" },
        { en:"They still had plenty of petrol.", ar:"كان لا يزال لديها وقود كثير." },
        { en:"There was no problem with water.", ar:"لم تكن هناك مشكلة في الماء." },
        { en:"But the nearest road was 25 kilometres away.", ar:"لكن أقرب طريق كان على بعد 25 كيلومتراً." },
        { en:"Stupid people, one of them thought. What could have happened?", ar:"فكّر أحدهما: أناس أغبياء. ماذا يمكن أن يكون قد حدث؟" }
      ],
      vocab:[
        { en:"track", ar:"أثر / مسار", ipa:"/træk/", ex:"Tracks in the sand around the car.", exAr:"آثار في الرمال حول السيارة." },
        { en:"helicopter", ar:"مروحية", ipa:"/ˈhelɪkɒptə/", ex:"They flew in a helicopter.", exAr:"طاروا في مروحية." },
        { en:"petrol", ar:"بنزين / وقود", ipa:"/ˈpetrəl/", ex:"They still had plenty of petrol.", exAr:"كان لا يزال لديهم بنزين كثير." },
        { en:"desert", ar:"صحراء", ipa:"/ˈdezət/", ex:"A car alone in the desert.", exAr:"سيارة وحيدة في الصحراء." }
      ]
    }
  ]
});

/* ====================== UNIT 6 ====================== */
COURSE.units.push({
  id:"u6", no:6, color:"#a78bfa", title:"Looking back", titleAr:"نظرة إلى الماضي",
  lessons:[
    {
      code:"6.1", title:"Emergencies in the news", titleAr:"حالات الطوارئ في الأخبار", type:"vocab",
      intro:"Newspaper articles about emergencies.",
      introAr:"مقالات صحفية عن حالات الطوارئ.",
      explain:"مفردات الطوارئ التي تظهر دائماً في الأخبار: حوادث الطرق (hit-and-run الصدم والهرب)، الحرائق (burns حروق)، الإصابات (injured مصاب)، خدمات الإنقاذ (ambulance إسعاف، rescue إنقاذ). عبارة مهمة: hit-and-run driver = سائق صدم وهرب من موقع الحادث، وهي جريمة في كل الدول. لاحظ أيضاً عبارة badly injured (مصاب بشدّة) في مقابل slightly injured (مصاب بإصابة طفيفة).",
      vocab:[
        { en:"emergency", ar:"حالة طوارئ", ipa:"/ɪˈmɜːdʒənsi/", ex:"Emergencies in the news.", exAr:"حالات طوارئ في الأخبار." },
        { en:"injured", ar:"مصاب", ipa:"/ˈɪndʒəd/", ex:"Alia was badly injured.", exAr:"أُصيبت عالية بإصابة بالغة." },
        { en:"ambulance", ar:"سيارة إسعاف", ipa:"/ˈæmbjələns/", ex:"He called an ambulance.", exAr:"استدعى سيارة إسعاف." },
        { en:"rescue", ar:"إنقاذ", ipa:"/ˈreskjuː/", ex:"A family saved in a rescue.", exAr:"عائلة أُنقذت في عملية إنقاذ." },
        { en:"hit-and-run", ar:"الصدم والهرب", ipa:"/hɪt ən rʌn/", ex:"A hit-and-run driver injured a student.", exAr:"أصاب سائق صدم وهرب طالباً." },
        { en:"burns", ar:"حروق", ipa:"/bɜːnz/", ex:"She was treated for burns on her arms.", exAr:"عُولجت من حروق في ذراعيها." }
      ]
    },
    {
      code:"6.3", title:"Accident at Jebel Kebir", titleAr:"حادثة في جبل كبير", type:"reading",
      intro:"Anwar helps his father check the beehives when a rock fall disturbs the bees.",
      introAr:"أنور يساعد والده في فحص خلايا النحل عندما يثير انهيار صخري النحل.",
      explain:"قصة حادثة مزعجة في الريف اليمني. أنور يساعد والده قاسم في خلايا النحل تحت جبل كبير. ينهار صخر، فيتعثّر أنور، فيغطّيه النحل بلسعاته. الأهم لغوياً: الأفعال الحركية المتتابعة (rolling, bouncing, ploughing, ran, jumped) لإيصال السرعة والذعر. وأسلوب القصة في تنويع الجمل: قصيرة عند التوتر (Run, Anwar!) وطويلة وصفية في الأجزاء الهادئة.",
      lines:[
        { en:"In the school holidays Anwar always helped his father Kassim with the farm.", ar:"في العطلات المدرسية كان أنور يساعد والده قاسم دائماً في المزرعة." },
        { en:"One morning, they were checking the line of beehives below the high rocks of Jebel Kebir.", ar:"في صباح أحد الأيام كانا يتفقّدان صفّ خلايا النحل تحت صخور جبل كبير العالية." },
        { en:"They had nearly finished when they heard a loud crash above them.", ar:"كانا قد كادا ينتهيان حين سمعا صوت تحطّم عالٍ فوقهما." },
        { en:"A large rock was starting to roll. 'Look out!' shouted Kassim.", ar:"صخرة كبيرة بدأت في التدحرج. صرخ قاسم: انتبه!" },
        { en:"Other rocks were starting to move too.", ar:"بدأت صخور أخرى أيضاً في التحرّك." },
        { en:"The heavy rocks were rolling and bouncing down from the mountain, and the ground shook.", ar:"الصخور الثقيلة تتدحرج وترتدّ هابطة من الجبل، واهتزّت الأرض." },
        { en:"Frightened by the noise, hundreds and thousands of bees rose from the hives.", ar:"وخوفاً من الضجيج، تصاعدت مئات وآلاف النحلات من الخلايا." },
        { en:"But Anwar tripped and fell to the shaking ground.", ar:"لكن أنور تعثّر وسقط على الأرض المهتزّة." },
        { en:"His hat and the thin material covering his face fell off.", ar:"سقطت قبّعته والقماش الرقيق الذي يغطّي وجهه." },
        { en:"The angry bees were there first. Hundreds of them were covering Anwar's hands, face and neck.", ar:"كان النحل الغاضب أوّل الواصلين. مئات منه تغطّي يدي أنور ووجهه ورقبته." },
        { en:"Kassim rushed to his son, hitting out at the bees.", ar:"اندفع قاسم نحو ابنه، يضرب النحل." },
        { en:"He half pulled and half carried Anwar to safety.", ar:"جرّ أنور وحمله معاً إلى مكان آمن." },
        { en:"Ten minutes later, the pick-up screamed to a stop outside the clinic.", ar:"بعد عشر دقائق، توقّفت الشاحنة بصرير أمام العيادة." },
        { en:"District Nurse Salwa Mafouz checked his pulse.", ar:"تفقّدت ممرضة المنطقة سلوى مفوّز نبضه." },
        { en:"We must get him to hospital in Hajjah, she said.", ar:"قالت: علينا أن ننقله إلى مستشفى حجّة." }
      ],
      vocab:[
        { en:"beehive", ar:"خلية نحل", ipa:"/ˈbiːhaɪv/", ex:"They were checking the beehives.", exAr:"كانوا يتفقّدون خلايا النحل." },
        { en:"sting", ar:"لسعة", ipa:"/stɪŋ/", ex:"The bee stings hurt a lot.", exAr:"لسعات النحل آلمته كثيراً." },
        { en:"groan", ar:"يئنّ", ipa:"/ɡrəʊn/", ex:"Anwar groaned in pain.", exAr:"أنّ أنور من الألم." },
        { en:"pulse", ar:"نبض", ipa:"/pʌls/", ex:"The nurse checked his pulse.", exAr:"تفقّدت الممرضة نبضه." }
      ]
    },
    {
      code:"6.6", title:"How a hospital works", titleAr:"كيف يعمل المستشفى", type:"reading",
      intro:"A two-track system in a casualty unit.",
      introAr:"نظام بمسارين في قسم الطوارئ.",
      explain:"الدرس يصف عملية متكرّرة تحدث دائماً بنفس الطريقة، فيُكتب بالمضارع البسيط (we put, the receptionist registers, the nurse examines). هذه قاعدة مهمة: الإجراءات والروتين بالمضارع البسيط. نظام الطوارئ بمسارين: المسار السريع للحالات الحرجة، والمسار البطيء للحالات الأقل خطورة. ولاحظ ترميز الأولوية بالألوان: أحمر للحالات الخطيرة وأزرق للأقل خطورة.",
      lines:[
        { en:"We have a two-track system in our casualty unit.", ar:"لدينا نظام بمسارين في قسم الطوارئ." },
        { en:"We put people with really bad injuries in the fast track.", ar:"نضع المصابين بإصابات شديدة في المسار السريع." },
        { en:"They're patients who come in by ambulance from a bad car crash, for example.", ar:"هؤلاء مرضى يأتون بسيارة الإسعاف من حادث سير مثلاً." },
        { en:"They're the highest priorities, of course, and they get immediate treatment.", ar:"هم بالطبع أعلى الأولويات ويحصلون على علاج فوري." },
        { en:"But most people aren't so badly injured.", ar:"لكن معظم الناس ليسوا بهذه الإصابة الشديدة." },
        { en:"We put patients like these through a longer process.", ar:"نُدخل هؤلاء المرضى في عملية أطول." },
        { en:"The receptionist registers the personal details of the slow-track patients.", ar:"يُسجّل موظف الاستقبال البيانات الشخصية لمرضى المسار البطيء." },
        { en:"From there, patients go and wait to see the reception nurse.", ar:"من هناك يذهب المرضى وينتظرون لرؤية ممرضة الاستقبال." },
        { en:"She quickly examines each patient and gives them a priority.", ar:"تفحص كل مريض بسرعة وتمنحه أولوية." },
        { en:"Red for bad injuries and also for young children and old people.", ar:"أحمر للإصابات الشديدة وكذلك للأطفال الصغار وكبار السن." },
        { en:"Blue for people with less serious injuries.", ar:"أزرق للأشخاص ذوي الإصابات الأقل خطورة." },
        { en:"She adds her notes to the registration form and sends it through to the team of doctors.", ar:"تضيف ملاحظاتها إلى استمارة التسجيل وترسلها إلى فريق الأطباء." },
        { en:"The doctors call patients into the examination rooms and examine them carefully.", ar:"يستدعي الأطباء المرضى إلى غرف الفحص ويفحصونهم بدقّة." }
      ],
      vocab:[
        { en:"casualty", ar:"قسم الطوارئ", ipa:"/ˈkæʒuəlti/", ex:"Patient treatment in Casualty.", exAr:"علاج المرضى في قسم الطوارئ." },
        { en:"priority", ar:"أولوية", ipa:"/praɪˈɒrəti/", ex:"They are the highest priorities.", exAr:"هم أعلى الأولويات." },
        { en:"register", ar:"يسجّل", ipa:"/ˈredʒɪstə/", ex:"The receptionist registers the details.", exAr:"يسجّل موظف الاستقبال البيانات." },
        { en:"examine", ar:"يفحص", ipa:"/ɪɡˈzæmɪn/", ex:"The nurse examines each patient.", exAr:"تفحص الممرضة كل مريض." }
      ]
    },
    {
      code:"6.7", title:"Working in public service", titleAr:"العمل في الخدمة العامة", type:"vocab",
      intro:"Three people who work in public service describe their jobs.",
      introAr:"ثلاثة أشخاص يعملون في الخدمة العامة يصفون وظائفهم.",
      explain:"مفردات الوظائف في الخدمة العامة: customs officer (ضابط جمارك في الميناء أو المطار)، district nurse (ممرضة منطقة، تزور القرى)، social worker (أخصائي اجتماعي)، heart surgeon (جرّاح قلب)، paramedic (مسعف)، planning officer (ضابط تخطيط مدن)، radiographer (أخصائي أشعة). الفائدة: تعلّم وصف الوظيفة بـ I've been doing it for X years (أمارس هذه الوظيفة منذ X سنوات)، وتعبير حبّ العمل: I love helping to make life better.",
      vocab:[
        { en:"customs officer", ar:"ضابط جمارك", ipa:"/ˈkʌstəmz ˈɒfɪsə/", ex:"A customs officer works at the port.", exAr:"يعمل ضابط الجمارك في الميناء." },
        { en:"district nurse", ar:"ممرضة منطقة", ipa:"/ˈdɪstrɪkt nɜːs/", ex:"A district nurse visits villages.", exAr:"تزور ممرضة المنطقة القرى." },
        { en:"social worker", ar:"أخصائي اجتماعي", ipa:"/ˈsəʊʃl ˈwɜːkə/", ex:"A social worker helps people.", exAr:"يساعد الأخصائي الاجتماعي الناس." },
        { en:"heart surgeon", ar:"جرّاح قلب", ipa:"/hɑːt ˈsɜːdʒən/", ex:"A heart surgeon performs operations.", exAr:"يُجري جرّاح القلب عمليات." },
        { en:"planning officer", ar:"ضابط تخطيط", ipa:"/ˈplænɪŋ ˈɒfɪsə/", ex:"A planning officer rebuilds the city.", exAr:"يعيد ضابط التخطيط بناء المدينة." },
        { en:"radiographer", ar:"أخصائي أشعة", ipa:"/ˌreɪdiˈɒɡrəfə/", ex:"A radiographer takes X-rays.", exAr:"يأخذ أخصائي الأشعة صور الأشعة السينية." }
      ]
    },
    {
      code:"6.8", title:"A long life in medicine", titleAr:"حياة طويلة في الطب", type:"reading",
      intro:"Dr Suleiman Badawi looks back on his life and the changes in health care.",
      introAr:"يستعرض الدكتور سليمان بدوي حياته والتغيّرات في الرعاية الصحية.",
      explain:"نص استعادي قوي عاطفياً. الدكتور سليمان يتذكّر اللحظة التي قرّر فيها أن يصبح طبيباً، حين كاد يخسر أخته الصغيرة بسبب الحصبة لعدم وجود طبيب قريب. الفائدة لغوياً: استخدام الماضي البسيط للسرد (decided, died, asked) والماضي التام (had died) للحدث الأسبق. واللغة العاطفية: I felt very angry (شعرت بغضب شديد)، Disease and death were common (كان المرض والموت شائعَين). وفي النهاية: استخدام المضارع التام لربط الماضي بالحاضر (We have stopped the terrible diseases).",
      lines:[
        { en:"I remember the day in 1960 when I decided to become a doctor.", ar:"أتذكّر اليوم في 1960 حين قرّرت أن أكون طبيباً." },
        { en:"I was 16, and two months earlier a friend of mine, Sadiq, had died of tuberculosis.", ar:"كان عمري 16 سنة، وقبل ذلك بشهرين توفّي صديقي صادق بمرض السلّ." },
        { en:"Now it seemed my younger sister, Fareeda, was going to die too.", ar:"الآن بدا أن أختي الصغرى فريدة ستموت أيضاً." },
        { en:"She had measles, and her temperature was very high.", ar:"كانت مصابة بالحصبة، وحرارتها مرتفعة جداً." },
        { en:"We knew measles was easy to cure — with proper medical care.", ar:"كنّا نعلم أن الحصبة سهلة العلاج — مع الرعاية الطبية المناسبة." },
        { en:"But the nearest doctor was 200 kilometres away.", ar:"لكن أقرب طبيب كان على بعد 200 كيلومتر." },
        { en:"I felt very angry. Why should good people like Sadiq and Fareeda die? I asked myself.", ar:"شعرت بغضب شديد. لماذا يموت أناس طيبون مثل صادق وفريدة؟ سألت نفسي." },
        { en:"Disease and death were common in our little country town.", ar:"كان المرض والموت شائعَين في بلدتنا الريفية الصغيرة." },
        { en:"Thanks be to Allah, Fareeda's temperature began to go down the next day.", ar:"الحمد لله، بدأت حرارة فريدة بالانخفاض في اليوم التالي." },
        { en:"However, I was still angry. This can't go on, I thought.", ar:"غير أنني كنت لا أزال غاضباً. لا يمكن أن يستمرّ هذا، فكّرت." },
        { en:"There should be medical help for everyone, not just for a few people in the cities.", ar:"يجب أن تتوفّر المساعدة الطبية للجميع، لا لقلّة في المدن فقط." },
        { en:"That was the day my future was decided.", ar:"كان ذلك اليوم الذي تقرّر فيه مستقبلي." },
        { en:"Now we have more doctors for every 1,000 patients than almost anywhere in the world.", ar:"الآن لدينا أطباء لكل 1,000 مريض بمعدّل يفوق معظم دول العالم." },
        { en:"Through hard work, we have at last stopped the terrible diseases of yesterday — malaria, tuberculosis and trachoma.", ar:"بفضل العمل الشاقّ، أوقفنا أخيراً أمراض الأمس الفظيعة — الملاريا والسلّ والرمد الحبيبي." }
      ],
      vocab:[
        { en:"tuberculosis", ar:"السُّل", ipa:"/tjuːˌbɜːkjəˈləʊsɪs/", ex:"Sadiq died of tuberculosis.", exAr:"مات صادق بالسلّ." },
        { en:"measles", ar:"الحصبة", ipa:"/ˈmiːzlz/", ex:"She had measles.", exAr:"كانت مصابة بالحصبة." },
        { en:"cure", ar:"يعالج / علاج", ipa:"/kjʊə/", ex:"Measles is easy to cure.", exAr:"الحصبة سهلة العلاج." },
        { en:"facilities", ar:"مرافق / تجهيزات", ipa:"/fəˈsɪlətiz/", ex:"There were no medical facilities.", exAr:"لم تكن هناك مرافق طبية." }
      ]
    },
    {
      code:"6.11", title:"Tourism and the future — Discovering Yemen", titleAr:"السياحة والمستقبل — اكتشاف اليمن", type:"reading",
      intro:"A travel writer meets Faysal who runs a small travel company.",
      introAr:"كاتب رحلات يلتقي فيصل صاحب شركة سياحة صغيرة.",
      explain:"نص جميل عن الشباب والطموح والسياحة في اليمن. كاتب رحلات يقابل فيصل، شاب يمني يدير شركة سياحة صغيرة وينمو نشاطه بسرعة. لاحظ مزيج الأزمنة: الماضي البسيط للسرد، والمضارع التام (has started, has been growing) لربط الماضي بالحاضر، والمستقبل (he will have, he hopes to own) للطموحات. عبارات التعبير عن المستقبل في الكتابة الذاتية: My ambition is to..., I hope to..., I would like to..., I believe that... — احفظها لتستخدمها في موضوع التعبير.",
      lines:[
        { en:"We left Sana'a early and travelled up into the magnificent mountains to the north-west of the capital.", ar:"غادرنا صنعاء باكراً وصعدنا إلى الجبال العظيمة شمال غرب العاصمة." },
        { en:"During the long trip, I became friends with Faysal Hatem Al Qadhi, the driver of the four-wheel-drive.", ar:"خلال الرحلة الطويلة، أصبحت صديقاً لفيصل حاتم القاضي، سائق السيارة رباعية الدفع." },
        { en:"I found out that he was the owner of the little travel company that was taking us on this trip.", ar:"اكتشفت أنه صاحب شركة السياحة الصغيرة التي تأخذنا في هذه الرحلة." },
        { en:"As we talked, I started seeing him as the face of the future of Yemen.", ar:"وبينما كنّا نتحدّث، بدأت أراه وجه مستقبل اليمن." },
        { en:"A typical Yemeni, Faysal is friendly, polite and kind, and full of energy and ambition for the future.", ar:"يمني نموذجي، فيصل ودود ومؤدّب وطيّب، وممتلئ بالطاقة والطموح للمستقبل." },
        { en:"Having always been interested in tourism, he started his company fifteen months ago with just one old four-wheel-drive.", ar:"لأنه مهتمّ بالسياحة دائماً، أسّس شركته قبل خمسة عشر شهراً بسيارة رباعية الدفع قديمة واحدة فقط." },
        { en:"Now he has two new vehicles and the company is growing fast.", ar:"الآن لديه سيارتان جديدتان والشركة تنمو بسرعة." },
        { en:"His ambition is to have eight or ten 4WDs two years from now and to take visitors all over Yemen.", ar:"طموحه أن يمتلك ثماني أو عشر سيارات رباعية الدفع خلال سنتين، وأن يصطحب الزوار في أنحاء اليمن." },
        { en:"Looking a few years into the future, Faysal hopes he will have a wife and children.", ar:"بالنظر إلى المستقبل القريب، يأمل فيصل أن تكون له زوجة وأطفال." },
        { en:"He doesn't want to be very rich, but he does hope to own a house.", ar:"لا يريد أن يكون ثرياً جداً، لكنه يأمل امتلاك بيت." },
        { en:"Does he think tourism will change Yemen? Yes, but he believes most of the changes will be good ones.", ar:"هل يعتقد أن السياحة ستغيّر اليمن؟ نعم، لكنه يؤمن بأن معظم التغييرات ستكون جيدة." },
        { en:"For example, there will be better roads and hotels, and people will have more money.", ar:"مثلاً، ستكون هناك طرق وفنادق أفضل، وسيكون لدى الناس مال أكثر." },
        { en:"He is certain that the traditional way of life is strong enough to prevent that.", ar:"إنه متيقّن أن نمط الحياة التقليدي قويّ بما يكفي لمنع ذلك." }
      ],
      vocab:[
        { en:"tourism", ar:"السياحة", ipa:"/ˈtʊərɪzm/", ex:"He is interested in tourism.", exAr:"إنه مهتم بالسياحة." },
        { en:"ambition", ar:"طموح", ipa:"/æmˈbɪʃn/", ex:"He is full of ambition.", exAr:"إنه مفعم بالطموح." },
        { en:"vehicle", ar:"مركبة", ipa:"/ˈviːəkl/", ex:"He has two new vehicles.", exAr:"لديه مركبتان جديدتان." },
        { en:"traditional", ar:"تقليدي", ipa:"/trəˈdɪʃənl/", ex:"The traditional way of life is strong.", exAr:"نمط الحياة التقليدي قويّ." }
      ]
    }
  ]
});
