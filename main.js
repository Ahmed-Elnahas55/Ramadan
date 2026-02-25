
// ------------------- العداد التنازلي -------------------
const ramadanDate = new Date('2026-02-19T00:00:00+02:00'); // توقيت مصر - يمكن تعديله حسب الرؤية الرسمية

function updateCountdown() {
    const now = new Date();
    let diff = ramadanDate - now;

    if (diff < 0) {
        document.getElementById('countdown').innerHTML = '<h2>رمضان مبارك! 🌙</h2>';
        return;
    }

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent    = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent   = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();
// -------------------daily Tips  -------------------
const tips = [
  "اشرب ماء كثير في السحور لتجنب الجفاف.",
  "اقرأ جزء من القرآن يوميًا.",
  "تجنب الإسراف في الطعام عند الإفطار.",
  "أكثر من الصدقة والدعاء.",
  "حافظ على صلاة التراويح والقيام.",
  "ابتسم في وجه أخيك فهي صدقة.",
  "احرص على السحور ولو بجرعة ماء.",
  "استغل أوقات الإجابة: قبل الفطار، بعد الفجر، وآخر الليل",
  "قبل الأكل قل بسم الله وابتعد عن السرعة.",
  "شارك وجبتك مع جارك أو صديق.",
  "استمع للقرآن أثناء إعداد الطعام.",
  "خذ نفس عميق قبل الإفطار، هيساعد معدتك.",
  "صلّي على قد ما تقدر في المسجد أو في البيت بخشوع مش بالكثرة.",
  "حاول تنام مبكرًا عشان تقوم الليل بسهولة.",
  "سجل إنجازاتك في رمضان، حتى لو بسيطة.",
  "شارك نكتة رمضانية مع أصحابك.",
  "لو أكلت زيادة، امشي شوية لتخفيف الثقل.",
  "استغل وقت الانتظار قبل الإفطار بالذكر.",
  "خلي طبقك متوازن، نصفه خضار وفواكه.",
  "حافظ على ترتيب سفرتك قبل وبعد الإفطار.",
  "اقرأ حديث قصير يوميًا.",
  "ابتعد عن الشاشات وقت السحور لتستمتع بالنوم.",
  "استخدم طبق صغير عشان تتحكم في الكمية.",
  "ادعي لوالديك كل يوم.",
  "لو اتأخرت عن الفطار، ابتسم وما تزعلش.",
  "ساعد شخص محتاج ولو بكلمة طيبة.",
  "لا تنسى غسل اليدين قبل وبعد الأكل.",
  "اشرب شاي أعشاب بعد الإفطار لراحة المعدة.",
  "استمتع باللحظة مع أهلك عند الإفطار.",
  "كل يوم حاول تعمل عمل خير جديد."
];
function getDailyTip() {
    const tip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById('daily-tip').textContent = tip;
}
// -------------------  احاديث -------------------
const hadiths = [
    {
        text: "من صام رمضان إيمانًا واحتسابًا غفر له ما تقدم من ذنبه.",
        source: "متفق عليه (البخاري ومسلم)"
    },
    {
        text: "إذا جاء رمضان فتحت أبواب الجنة، وغلقت أبواب النار، وصفدت الشياطين.",
        source: "رواه مسلم"
    },
    {
        text: "من قام رمضان إيمانًا واحتسابًا غفر له ما تقدم من ذنبه.",
        source: "متفق عليه"
    },
    {
        text: "الصوم جنة، فلا يرفث ولا يجهل، وإن امرؤ قاتله أو شاتمه فليقل: إني صائم.",
        source: "متفق عليه"
    },
    {
        text: "كل عمل ابن آدم له إلا الصوم، فإنه لي وأنا أجزي به، ولخلوف فم الصائم أطيب عند الله من ريح المسك.",
        source: "رواه البخاري ومسلم"
    },
    {
        text: "من صام رمضان ثم أتبعه ستًا من شوال كان كصيام الدهر.",
        source: "رواه مسلم"
    },
    {
        text: "رُب صائم ليس له من صيامه إلا الجوع، ورب قائم ليس له من قيامه إلا السهر.",
        source: "رواه أحمد والحاكم وصححه الألباني"
    },
    {
        text: "الصلوات الخمس، والجمعة إلى الجمعة، ورمضان إلى رمضان مكفرات ما بينهن إذا اجتنب الكبائر.",
        source: "رواه مسلم"
    },
    {
        text: "إذا كان أول ليلة من شهر رمضان صفدت الشياطين ومردة الجن، وغلقت أبواب النار، وفتحت أبواب الجنة.",
        source: "رواه الترمذي وصححه الألباني"
    },
    {
        text: "لله عتقاء من النار في كل ليلة من رمضان، وذلك كل ليلة.",
        source: "رواه الترمذي"
    }
];
function getRandomHadith() {
    const randomIndex = Math.floor(Math.random() * hadiths.length);
    const hadith = hadiths[randomIndex];
    
    document.getElementById('daily-hadith').innerHTML = 
        `"${hadith.text}"<br><br><small style="color: var(--accent);">${hadith.source}</small>`;
}
window.addEventListener('load', () => {
    getRandomHadith(); 
});
//  open model
function openAdhkarModal() {
    document.getElementById("adhkarModal").style.display = "block";
}

// closce model
function closeAdhkarModal() {
    document.getElementById("adhkarModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("adhkarModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function to12HourFormat(time24) {
    if (!time24 || time24 === '--:--') return time24;
    let [hours, minutes] = time24.split(':').map(Number);
    const period = hours >= 12 ? 'م' : 'ص';
    hours = hours % 12 || 12;
    return `${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
}
//////////// Pray Time //////////
async function fetchPrayerTimes() {
    try {
        // API بديل مستقر جدًا (Aladhan مع method 4 أو 5 لمصر)
        const res = await fetch(
            'https://api.aladhan.com/v1/timingsByCity?city=Tanta&country=Egypt&method=5&school=0'
        );
        
        const data = await res.json();

        if (data.code === 200) {
            const t = data.data.timings;
            const dateReadable = data.data.date.readable;

            document.getElementById('prayer-date').textContent = `اليوم: ${dateReadable}`;

            document.getElementById('fajr').textContent    = to12HourFormat(t.Fajr);
            document.getElementById('sunrise').textContent = to12HourFormat(t.Sunrise);
            document.getElementById('dhuhr').textContent   = to12HourFormat(t.Dhuhr);
            document.getElementById('asr').textContent     = to12HourFormat(t.Asr);
            document.getElementById('maghrib').textContent = to12HourFormat(t.Maghrib);
            document.getElementById('isha').textContent    = to12HourFormat(t.Isha);

            calculateNextPrayer(t);
        } else {
            throw new Error("مشكلة في الـ API");
        }
    } catch (error) {
        console.error("خطأ في جلب المواقيت:", error);

        // Fallback ثابت لليوم الحالي (تقريبي - طنطا)
        // غيّر القيم دي كل يوم أو استخدم تقويم جاهز لو الـ API مش شغال
        document.getElementById('prayer-date').textContent = 'غير متاح حاليًا (تقريبي - طنطا)';
        document.getElementById('fajr').textContent    = '05:10 ص';
        document.getElementById('sunrise').textContent = '06:40 ص';
        document.getElementById('dhuhr').textContent   = '12:05 م';
        document.getElementById('asr').textContent     = '03:10 م';
        document.getElementById('maghrib').textContent = '05:35 م';
        document.getElementById('isha').textContent    = '07:00 م';

        document.getElementById('next-prayer').textContent = 'تحقق من تطبيق أذان أو موقع موثوق';
    }
}
// حساب الصلاة القادمة (نفس السابق مع تعديل بسيط)
function calculateNextPrayer(timings) {
    const now = new Date();
    const prayers = [
        { name: 'الفجر',   time: timings.Fajr    || '05:17' },
        { name: 'الظهر',   time: timings.Dhuhr   || '12:10' },
        { name: 'العصر',   time: timings.Asr     || '15:12' },
        { name: 'المغرب',  time: timings.Maghrib || '17:33' },
        { name: 'العشاء',  time: timings.Isha    || '18:53' }
    ];
    let next = null;
    let minDiff = Infinity;
    prayers.forEach(p => {
        let [h, m] = p.time.split(':').map(Number);
        let prayerTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);
        if (prayerTime < now) prayerTime.setDate(prayerTime.getDate() + 1);

        const diff = prayerTime - now;
        if (diff > 0 && diff < minDiff) {
            minDiff = diff;
            next = p;
        }
    });

    if (next) {
        const hours = Math.floor(minDiff / 3600000);
        const minutes = Math.floor((minDiff % 3600000) / 60000);
        document.getElementById('next-prayer').textContent = 
            `الصلاة القادمة: ${next.name} بعد ${hours} س و ${minutes} د`;
    } else {
        document.getElementById('next-prayer').textContent = 'كل الصلوات انتهت اليوم إن شاء الله';
    }
}
window.addEventListener('load', fetchPrayerTimes);
setInterval(fetchPrayerTimes, 60000);
// ------------------- Function activation during -------------------
window.addEventListener('load', () => {
    fetchPrayerTimes();
    getDailyTip();          
});
setInterval(fetchPrayerTimes, 60000); 

// ------------------- Simple Ramadan calendar-------------------
function generateCalendar() {
    const cal = document.getElementById('ramadan-calendar');
    if (!cal) return;

    cal.innerHTML = '';

    const ramadanStart = new Date('2026-02-19T00:00:00+02:00');

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let daysSinceStart = Math.floor((today - ramadanStart) / (1000 * 60 * 60 * 24));

    if (daysSinceStart < 0) {
        daysSinceStart = 0;
    }

    const totalDays = 29;

    if (daysSinceStart >= totalDays) {
        cal.innerHTML = '<p style="text-align:center; color:var(--accent); font-size:1.3rem; padding:2rem;">رمضان انتهى لهذا العام 🌙<br>تقبل الله منا ومنكم صالح الأعمال</p>';
        return;
    }

    for (let i = 0; i < totalDays; i++) {
        const dayNum = i + 1; 
        const tipIndex = i % tips.length;
        const fullTip = tips[tipIndex];

        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day';
        if (dayNum === daysSinceStart + 1) {
            dayDiv.classList.add('today');
            dayDiv.innerHTML += '<span class="today-label">اليوم</span>';
        }
        if (dayNum <= daysSinceStart) {
            dayDiv.classList.add('past');
        }
        dayDiv.innerHTML += `
            <div class="day-header">
                <strong>اليوم ${dayNum}</strong>
            </div>
            <div class="day-tip">
                ${fullTip}
            </div>
        `;
        cal.appendChild(dayDiv);
    }
}
window.addEventListener('load', generateCalendar);
// ==================== Scroll Reveal =========================
function revealSections() {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;
    const revealPoint = windowHeight * 0.80;  

    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < revealPoint) {
            section.classList.add('visible');
            if (index === 0) section.classList.add('delay-1');
            if (index === 1) section.classList.add('delay-2');
        }
    });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);
revealSections();           
// ====================== Dark / Light Mode Toggle=======================
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

function updateIcon() {
    if (themeToggle) {
        if (html.getAttribute('data-theme') === 'light') {
            themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }
}
updateIcon();

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        let currentTheme = html.getAttribute('data-theme');
        let newTheme = currentTheme === 'light' ? 'dark' : 'light';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon();
    });
}
// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});