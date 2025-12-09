import { Weapon, CheatCode, GameBug } from './types';

export const WEAPONS: Weapon[] = [
  {
    id: 'ak47',
    name: 'CV-47 (AK-47)',
    price: '$2500',
    team: 'T',
    damage: 95,
    recoil: 80,
    fireRate: 65,
    description: 'محبوب‌ترین اسلحه تروریست‌ها. هدشات با یک تیر (حتی با کلاه). ریکویل بالا اما قابل کنترل با تپ‌فایر.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/AK-47_type_II_Part_DM-ST-89-01131.jpg'
  },
  {
    id: 'm4a1',
    name: 'Maverick M4A1 Carbine',
    price: '$3100',
    team: 'CT',
    damage: 85,
    recoil: 60,
    fireRate: 70,
    description: 'اسلحه اصلی ضدتروریست‌ها. دارای صداخفه‌کن (Silencer). دقت بالا و لگد کمتر نسبت به AK-47.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/df/M4A1_ACOG_cal_5.56.jpg'
  },
  {
    id: 'awp',
    name: 'Magnum Sniper Rifle (AWP)',
    price: '$4750',
    team: 'BOTH',
    damage: 100,
    recoil: 90,
    fireRate: 20,
    description: 'مرگبارترین اسلحه بازی. اصابت به هر نقطه از بدن (جز پا) منجر به مرگ می‌شود. بسیار سنگین.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/L96A1_MOD_45163155.jpg'
  },
  {
    id: 'deagle',
    name: 'Night Hawk .50C (Deagle)',
    price: '$650',
    team: 'BOTH',
    damage: 90,
    recoil: 85,
    fireRate: 40,
    description: 'قدرتمندترین کلت بازی. قابلیت نفوذ در دیوار. مناسب برای اکو راندها.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Desert_Eagle_.50_AE_Match_Target.JPG'
  },
  {
    id: 'famas',
    name: 'Clarion 5.56 (Famas)',
    price: '$2250',
    team: 'CT',
    damage: 65,
    recoil: 50,
    fireRate: 75,
    description: 'ارزانترین رایفل CT. دارای حالت شلیک سه تیر (Burst Fire) که دقت بالایی در راه دور دارد.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Famas_F1_bipied_001.jpg'
  },
  {
    id: 'galil',
    name: 'IDF Defender (Galil)',
    price: '$2000',
    team: 'T',
    damage: 60,
    recoil: 55,
    fireRate: 70,
    description: 'رایفل ارزان تروریست‌ها. خشاب ۳۵ تیری. دقت کمتر اما فایر ریت بالا.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Galil_SAR_noBG.png'
  }
];

export const CHEATS: CheatCode[] = [
  {
    id: 'sv_cheats',
    command: 'sv_cheats 1',
    description: 'کد مادر. برای فعال‌سازی سایر رمزها ابتدا باید این کد را در کنسول بزنید.',
    type: 'CHEAT'
  },
  {
    id: 'impulse101',
    command: 'impulse 101',
    description: 'پول کامل ($16000).',
    type: 'CHEAT'
  },
  {
    id: 'noclip',
    command: 'noclip',
    description: 'پرواز و عبور از دیوارها (روح).',
    type: 'CHEAT'
  },
  {
    id: 'god',
    command: 'god',
    description: 'حالت نسوز (God Mode). هیچ دمیجی دریافت نمی‌کنید.',
    type: 'CHEAT'
  },
  {
    id: 'sv_gravity',
    command: 'sv_gravity 100',
    description: 'تغییر جاذبه زمین. عدد ۸۰۰ نرمال است. اعداد کمتر باعث پرش‌های بلند می‌شود.',
    type: 'CONFIG'
  },
  {
    id: 'cl_showfps',
    command: 'cl_showfps 1',
    description: 'نمایش FPS (فریم بر ثانیه) در گوشه تصویر.',
    type: 'CONFIG'
  },
  {
    id: 'mp_c4timer',
    command: 'mp_c4timer 45',
    description: 'تنظیم زمان انفجار بمب (بر حسب ثانیه).',
    type: 'CONFIG'
  },
   {
    id: 'bot_kill',
    command: 'bot_kill',
    description: 'کشتن تمام بات‌های موجود در سرور.',
    type: 'CONFIG'
  }
];

export const BUGS: GameBug[] = [
  {
    id: 'bunnyhop',
    title: 'بانی هاپ (Bunny Hop)',
    description: 'تکنیکی برای افزایش سرعت حرکت با پریدن‌های متوالی و چرخش ماوس. اگرچه یک مهارت است، اما در واقع از فیزیک موتور بازی سوءاستفاده می‌کند.',
    difficulty: 'Hard'
  },
  {
    id: 'flashbug',
    title: 'باگ فلش (Flashbang Bug)',
    description: 'در برخی کنج‌ها، اگر فلش را دقیقا زیر پای خود یا لای بافت‌های خاصی بیندازید، دشمن کور می‌شود اما خودتان کور نمی‌شوید.',
    difficulty: 'Medium',
    map: 'de_dust2, de_nuke'
  },
  {
    id: 'silentrun',
    title: 'دویدن بی‌صدا (Russian Walk)',
    description: 'با زدن سریع دکمه Crouch (نشستن) هنگام دویدن، صدای پا قطع می‌شود اما سرعت شما خیلی کم نمی‌شود.',
    difficulty: 'Medium'
  },
  {
    id: 'skywalk',
    title: 'راه رفتن در آسمان (Sky Walking)',
    description: 'در مپ‌های قدیمی با استفاده از بوست دو نفره روی لبه‌های خاصی از مپ، می‌توانستید وارد تکسچر آسمان شوید و کل مپ را ببینید.',
    difficulty: 'Hard',
    map: 'de_aztec'
  }
];
