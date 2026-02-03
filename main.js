// ------------------- العداد التنازلي -------------------
const ramadanDate = new Date('2026-02-18T00:00:00+02:00'); // توقيت مصر - يمكن تعديله حسب الرؤية الرسمية

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

// ------------------- نصائح يومية -------------------
const tips = [
  "اشرب ماء كثير في السحور لتجنب الجفاف.",
  "اقرأ جزء من القرآن يوميًا.",
  "تجنب الإسراف في الطعام عند الإفطار.",
  "أكثر من الصدقة والدعاء.",
  "حافظ على صلاة التراويح والقيام.",
  "ابتسم في وجه أخيك فهي صدقة.",
  "احرص على السحور ولو بجرعة ماء.",
  "لو نسيت الدعاء، ابتسم للسماء وكررها.",
  "قبل الأكل قل بسم الله وابتعد عن السرعة.",
  "شارك وجبتك مع جارك أو صديق.",
  "استمع للقرآن أثناء إعداد الطعام.",
  "خذ نفس عميق قبل الإفطار، هيساعد معدتك.",
  "حاول تنام مبكرًا عشان تقوم الليل بسهولة.",
  "لو جعت قبل الوقت، اشرب ماء بدل الأكل.",
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
  "اشرب شاي أعشاب بعد الإفطار لراحة المعدة.",
  "لا تنسى غسل اليدين قبل وبعد الأكل.",
  "استمتع باللحظة مع أهلك عند الإفطار.",
  "كل يوم حاول تعمل عمل خير جديد."
];
function getDailyTip() {
    const tip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById('daily-tip').textContent = tip;
}
// ------------------- أذكار بسيطة -------------------
function playAdhkar() {
    alert("اللهم بلغنا رمضان وأعنا على صيامه وقيامه يا رب العالمين.");
}
// ------------------- تحويل الوقت إلى نظام 12 ساعة -------------------
function to12HourFormat(time24) {
    if (!time24 || time24 === '--:--') return time24;

    let [hours, minutes] = time24.split(':').map(Number);
    const period = hours >= 12 ? 'م' : 'ص';

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    return `${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
}
// ------------------- جلب مواقيت الصلاة - طنطا -------------------
async function fetchPrayerTimes() {
    try {
        const res = await fetch('http://api.aladhan.com/v1/timingsByCity?city=Tanta&country=Egypt&method=5');
        const data = await res.json();

        if (data.code === 200) {
            const t = data.data.timings;
            document.getElementById('prayer-date').textContent = `اليوم: ${data.data.date.readable}`;

            document.getElementById('fajr').textContent    = to12HourFormat(t.Fajr);
            document.getElementById('sunrise').textContent = to12HourFormat(t.Sunrise);
            document.getElementById('dhuhr').textContent   = to12HourFormat(t.Dhuhr);
            document.getElementById('asr').textContent     = to12HourFormat(t.Asr);
            document.getElementById('maghrib').textContent = to12HourFormat(t.Maghrib);
            document.getElementById('isha').textContent    = to12HourFormat(t.Isha);

            calculateNextPrayer(t);
        } else {
            throw new Error("API response not 200");
        }
    } catch (error) {
        console.error("خطأ في جلب مواقيت الصلاة:", error);

        document.getElementById('prayer-date').textContent = 'غير متاح حاليًا (تقريبي - طنطا)';

        // fallback تقريبي بنظام 12 ساعة
        document.getElementById('fajr').textContent    = '5:10 ص';
        document.getElementById('sunrise').textContent = '6:35 ص';
        document.getElementById('dhuhr').textContent   = '12:00 م';
        document.getElementById('asr').textContent     = '3:15 م';
        document.getElementById('maghrib').textContent = '5:35 م';
        document.getElementById('isha').textContent    = '7:05 م';

        document.getElementById('next-prayer').textContent = 'تحقق من تقويم محلي موثوق';
    }
}
// ------------------- حساب الصلاة القادمة -------------------
function calculateNextPrayer(timings) {
    const now = new Date();
    const prayers = [
        { name: 'الفجر',   time: timings.Fajr    || '05:10' },
        { name: 'الظهر',   time: timings.Dhuhr   || '12:00' },
        { name: 'العصر',   time: timings.Asr     || '15:15' },
        { name: 'المغرب',  time: timings.Maghrib || '17:35' },
        { name: 'العشاء',  time: timings.Isha    || '19:05' }
    ];

    let next = null;
    let minDiff = Infinity;

    prayers.forEach(p => {
        let [h, m] = p.time.split(':').map(Number);
        let prayerTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);

        if (prayerTime < now) {
            prayerTime.setDate(prayerTime.getDate() + 1);
        }

        const diff = prayerTime - now;
        if (diff > 0 && diff < minDiff) {
            minDiff = diff;
            next = p;
        }
    });

    if (next) {
        const hours   = Math.floor(minDiff / (1000 * 60 * 60));
        const minutes = Math.floor((minDiff % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('next-prayer').textContent =
            `الصلاة القادمة: ${next.name} بعد ${hours} س و ${minutes} د`;
    } else {
        document.getElementById('next-prayer').textContent = 'كل الصلوات انتهت اليوم إن شاء الله';
    }
}
// ------------------- تشغيل الدوال عند التحميل -------------------
window.addEventListener('load', () => {
    fetchPrayerTimes();
    getDailyTip();           // نصيحة افتراضية عند التحميل
});
setInterval(fetchPrayerTimes, 60000); // تحديث كل دقيقة

// ------------------- تقويم رمضان بسيط -------------------
function generateCalendar() {
    const cal = document.getElementById('ramadan-calendar');
    if (!cal) return;

    for (let d = 1; d <= 30; d++) {
        const day = document.createElement('div');
        day.className = 'calendar-day';
        day.innerHTML = `يوم ${d}<br><small>${tips[(d-1) % tips.length].slice(0,30)}...</small>`;
        cal.appendChild(day);
    }
}
generateCalendar();