/* ============================================================
   script.js — ข้อมูล + ลูกเล่นทั้งหมดของหน้าเว็บ

   อ่านโค้ดเป็นส่วน ๆ ได้ตามนี้:
     1) DATA        — ข้อมูลทั้งหมดของคุณ (แก้ที่เดียวพอ)
     2) RENDER      — เอา DATA ไปวาดลงหน้าเว็บ
     3) THEME       — ปุ่มสลับธีมสว่าง/มืด
     4) MOUSE GLOW  — แสงนวลตามเมาส์
     5) TYPING      — ข้อความพิมพ์ดีดเอง
     6) SKILL BARS  — แถบสกิลวิ่งตอน scroll ถึง
     7) TIMELINE    — รถวิ่งตาม scroll + การ์ดค่อย ๆ โผล่
     8) SQL CONSOLE — กล่องพิมพ์คำสั่งดูข้อมูล
     9) DOG (Pukpik) — น้องหมาโกลเด้น easter egg
   ============================================================ */

/* ============================================================
   1) DATA  ── 👇👇 แก้ข้อมูลของคุณตรงนี้ที่เดียว 👇👇
   เปลี่ยนแล้วทุกส่วน (รวมถึง SQL Console) จะอัปเดตตามอัตโนมัติ
   ============================================================ */
const DATA = {
  nickName: "ฟลุ๊ค",
  nickEN: "Fluk",
  nameTH: "โชคอนันต์ แก้วกัลยา",
  nameEN: "Chokanan Kaewkanlaya",
  position: "วิศวกร ระดับ 5",
  org: "การไฟฟ้าส่วนภูมิภาค (PEA) — สำนักงานใหญ่",
  dept: "ผธร. กบท. ฝพธ. · สายงาน ธต.",
  // รูปโปรไฟล์ (ถ้ามี): ใส่ path เช่น "assets/profile.jpg" — ถ้าเว้นว่างจะใช้ตัวอักษรย่อแทน
  photo: "assets/profile_pic.jpg",

  // ข้อความพิมพ์ดีด (สลับวนไปเรื่อย ๆ)
  roles: [
    "วิศวกรไฟฟ้า @ PEA ⚡",
    "ผู้ดูแลสถานีชาร์จ PEA VOLTA 🔌",
    "กำลังหัดเป็น Software Developer 💻",
    "เป้าหมาย: PEA VOLTA ติดแพลตฟอร์มที่คนใช้รถไฟฟ้าต้องมีติดเครื่อง และเป็นแอปที่ใช้ง่ายสะดวกที่สุดในวงการ 🚀",
  ],

  bioTH: "ผมฟลุ๊คครับ วิศวกรไฟฟ้าผู้ดูแลการให้บริการสถานีชาร์จ PEA VOLTA ของการไฟฟ้าส่วนภูมิภาค (กฟภ.) " +
         "ฝากเนื้อฝากตัวด้วยนะครับ ผมตั้งใจเรียนรู้และพัฒนาทักษะของตัวเอง เพื่อนำไปต่อยอดธุรกิจสถานีชาร์จของเรา " +
         "ให้ปังสุด ๆ และก้าวขึ้นเป็น TOP 3 ของประเทศให้ได้!",
  bioEN: "Hi, I'm Fluk — an electrical engineer looking after PEA VOLTA EV charging stations at the " +
         "Provincial Electricity Authority (PEA). I'm here to keep learning and leveling up my dev skills to " +
         "grow our charging business and push PEA VOLTA into the country's TOP 3!",

  hobbies: [
    "🎸 เล่นกีตาร์", "🎬 ดูหนัง/อนิเมะ", "✈️ ท่องเที่ยว", "🏋️ ฟิตเนส", "🏸 แบดมินตัน",
  ],

  // สกิล: level = เปอร์เซ็นต์ (0–100) ใช้กับแถบ progress
  skills: [
    { name: "Python", level: 60 },
    { name: "SQL", level: 60 },
    { name: "C / C++", level: 40 },
    { name: "JavaScript", level: 40 },
    { name: "HTML / CSS", level: 40 },
    { name: "Git / GitHub", level: 40 },
    { name: "Linux / Ubuntu", level: 40 },
  ],

  // ไทม์ไลน์ประสบการณ์ 
  timeline: [
    { year: "2563", titleTH: "จุดเริ่มต้น — เริ่มศึกษา Software Development", desc: "ทำโปรเจกต์ปี 4 เป็นเว็บแดชบอร์ดดึงค่าจากเครื่องชาร์จมาแสดงบน localhost เพื่อ monitor การจัดการพลังงานของสถานีอัดประจุจำลองด้วยฟังก์ชัน smart charging" },
    { year: "2564", titleTH: "เริ่มศึกษา Python และ Embedded Systems", desc: "ทำโปรเจกต์เล็ก ๆ อ่านค่ากระแสและแรงดันไฟฟ้าจากการอัดประจุแบตเตอรี่ เพื่อนำไปประเมินค่าสุขภาพแบตเตอรี่ (SOH)" },
    { year: "2565", titleTH: "เริ่มทำงาน PEA ดูแลโปรเจกต์ PEA VOLTA", desc: "ดูแลและร่วมพัฒนาการบริการสถานีชาร์จ PEA VOLTA ร่วมกับ สจล." },
    { year: "2567", titleTH: "เข้าร่วมคณะทำงานด้านข้อมูล (Data Analytics Team) ประจำสายงาน ธต.", desc: "เข้าร่วมทีมเพื่อนำข้อมูลทางธุรกิจของสายงาน ธต. มาวิเคราะห์เพื่อสนับสนุนการดำเนินธุรกิจ" },
    { year: "2569", titleTH: "สมัคร DevPool รุ่นที่ 5", desc: "ต่อยอดทักษะจาก DevPool มาพัฒนาธุรกิจ PEA VOLTA และธุรกิจอื่น ๆ ของ กฟภ. 🚀" },
  ],

  whyTH: "ผมอยากเรียนรู้และพัฒนาทักษะด้าน Software Development เพื่อนำมาต่อยอดในการทำงาน " +
         "โดยเฉพาะธุรกิจ PEA VOLTA ให้สามารถให้บริการได้อย่างทันโลก ทันสมัย และตอบโจทย์ผู้ใช้งานมากที่สุดครับ",

  // ลิงก์ติดต่อ
  contacts: [
    { label: "GitHub",   icon: "🐙", url: "https://github.com/chokananfluk" },
    { label: "Email",    icon: "✉️", url: "mailto:chokananfluk@gmail.com" },
    { label: "Facebook", icon: "📘", url: "https://www.facebook.com/chokanan.kawkanlaya/" },
    { label: "Line",     icon: "💬", url: "https://line.me/R/ti/p/~flukppchok" },
    { label: "โทร",       icon: "📞", url: "tel:0634985595" },
  ],
};

// ============================================================

const $ = (sel) => document.querySelector(sel);   // ฟังก์ชันย่อ ๆ ช่วยเลือก element

function renderProfile() {
  $("#brandName").textContent = DATA.nickName;
  $("#heroNick").textContent = DATA.nickName;
  $("#heroFullName").innerHTML =
    `${DATA.nameTH} · ${DATA.nameEN}<br><span class="muted">${DATA.position} · ${DATA.org}</span>`;
  $("#bioTH").textContent = DATA.bioTH;
  $("#bioEN").textContent = DATA.bioEN;
  $("#whyText").textContent = DATA.whyTH;

  // รูปโปรไฟล์
  const avatar = $("#avatar");
  if (DATA.photo) {
    avatar.style.backgroundImage = `url('${DATA.photo}')`;
    avatar.textContent = "";
  } else {
    avatar.textContent = DATA.nickName.charAt(0).toUpperCase();
  }

  // งานอดิเรก
  $("#hobbies").innerHTML = DATA.hobbies.map((h) => `<li>${h}</li>`).join("");

  // สกิล
  $("#skillList").innerHTML = DATA.skills.map((s) => `
    <div class="skill-row">
      <div class="skill-head"><span>${s.name}</span><span class="pct">${s.level}%</span></div>
      <div class="skill-track"><div class="skill-fill" data-level="${s.level}"></div></div>
    </div>`).join("");

  // ไทม์ไลน์
  $("#timelineItems").innerHTML = DATA.timeline.map((t) => `
    <div class="timeline-item">
      <div class="timeline-year">${t.year}</div>
      <h3>${t.titleTH}</h3>
      <p>${t.desc}</p>
    </div>`).join("");

  // ลิงก์ติดต่อ
  $("#contactLinks").innerHTML = DATA.contacts.map((c) =>
    `<a href="${c.url}" target="_blank" rel="noopener">${c.icon} ${c.label}</a>`).join("");
}

/* ============================================================
   3) THEME — สลับธีมสว่าง/มืด และจำค่าไว้ใน localStorage
   ============================================================ */
function initTheme() {
  const root = document.documentElement;          // <html>
  const btn = $("#themeToggle");
  // อ่านค่าที่เคยเลือกไว้ ถ้าไม่มีก็ใช้ค่าตามระบบของเครื่อง
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const startTheme = saved || (prefersDark ? "dark" : "light");
  applyTheme(startTheme);

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);          // จำไว้สำหรับครั้งหน้า
  });

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    btn.textContent = theme === "dark" ? "☀️" : "🌙";
  }
}

/* ============================================================
   4) MOUSE GLOW — แสงนวลวิ่งตามเมาส์
   ============================================================ */
function initMouseGlow() {
  const glow = $("#mouseGlow");
  window.addEventListener("mousemove", (e) => {
    // ใช้ transform เพราะลื่นกว่าการขยับ top/left
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
}

/* ============================================================
   5) TYPING — พิมพ์ข้อความทีละตัว แล้วลบ แล้วขึ้นข้อความถัดไป
   ============================================================ */
function initTyping() {
  const el = $("#typed");
  const words = DATA.roles;
  let wordIndex = 0;     // คำที่กำลังพิมพ์อยู่
  let charIndex = 0;     // ตัวอักษรที่พิมพ์ถึง
  let deleting = false;  // กำลังพิมพ์ หรือ กำลังลบ

  function tick() {
    const word = words[wordIndex];
    // ถ้ากำลังลบ ตัดทีละตัว / ถ้ากำลังพิมพ์ เพิ่มทีละตัว
    charIndex += deleting ? -1 : 1;
    el.textContent = word.slice(0, charIndex);

    let delay = deleting ? 45 : 90;               // ลบเร็วกว่าพิมพ์
    if (!deleting && charIndex === word.length) {
      delay = 1400;                               // พิมพ์ครบแล้วหยุดอ่านแป๊บ
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length; // วนไปคำถัดไป
      delay = 300;
    }
    setTimeout(tick, delay);
  }
  tick();
}

/* ============================================================
   6) SKILL BARS — ให้แถบวิ่งเมื่อ scroll มาถึง (IntersectionObserver)
   ============================================================ */
function initSkillBars() {
  const fills = document.querySelectorAll(".skill-fill");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        fill.style.width = fill.dataset.level + "%";   // ตั้งความกว้างจริง → CSS transition ทำให้วิ่ง
        observer.unobserve(fill);                       // ทำครั้งเดียวพอ
      }
    });
  }, { threshold: 0.4 });
  fills.forEach((f) => observer.observe(f));
}

/* ============================================================
   7) TIMELINE — รถ 🚗 เลื่อนตาม scroll + การ์ดค่อย ๆ โผล่
   ============================================================ */
function initTimeline() {
  const section = $("#journey");
  const car = $("#timelineCar");
  const line = $(".timeline-line");
  const items = document.querySelectorAll(".timeline-item");

  // (ก) การ์ดค่อย ๆ โผล่เมื่อเลื่อนถึง
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("show"); });
  }, { threshold: 0.25 });
  items.forEach((it) => io.observe(it));

  // (ข) ขยับรถตามความคืบหน้าของการ scroll ผ่านส่วนไทม์ไลน์
  function moveCar() {
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    // progress = 0 เมื่อส่วนนี้เพิ่งเข้าจอ, = 1 เมื่อกำลังจะออกจากจอ
    const progress = (vh * 0.5 - rect.top) / rect.height;
    const clamped = Math.max(0, Math.min(1, progress));
    car.style.top = clamped * line.offsetHeight + "px";
  }
  // ใช้ requestAnimationFrame กันเรียกถี่เกินไปตอน scroll
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => { moveCar(); ticking = false; });
      ticking = true;
    }
  });
  window.addEventListener("resize", moveCar);
  moveCar();
}

/* ============================================================
   8) SQL CONSOLE — เครื่อง SQL จิ๋ว ๆ ที่อ่านข้อมูลจาก DATA
   รองรับ: help, clear, SELECT <cols> FROM <table> [WHERE field = 'value']
   ตาราง: resume, skills, hobbies, timeline
   ============================================================ */
function initConsole() {
  const out = $("#termOutput");
  const input = $("#termInput");

  // จัดข้อมูลให้เป็น "ตาราง" (array ของ object) ให้เหมือนฐานข้อมูลจริง
  const TABLES = {
    resume: [{
      name: DATA.nickEN,
      fullname: DATA.nameTH,
      position: DATA.position,
      org: DATA.org,
      dept: DATA.dept,
      email: (DATA.contacts.find((c) => c.label === "Email") || {}).url?.replace("mailto:", "") || "-",
      github: (DATA.contacts.find((c) => c.label === "GitHub") || {}).url || "-",
    }],
    skills: DATA.skills.map((s) => ({ skill: s.name, level: s.level + "%" })),
    hobbies: DATA.hobbies.map((h, i) => ({ id: i + 1, hobby: h })),
    timeline: DATA.timeline.map((t) => ({ year: t.year, title: t.titleTH })),
  };

  // เขียนข้อความลงหน้าจอ console
  function print(html, cls = "") {
    const div = document.createElement("div");
    div.className = "line " + cls;
    div.innerHTML = html;
    out.appendChild(div);
    out.scrollTop = out.scrollHeight;   // เลื่อนลงล่างสุดเสมอ
  }

  // วาดผลลัพธ์เป็นตาราง HTML
  function printTable(rows) {
    if (!rows.length) return print("(ไม่พบข้อมูล / 0 rows)", "err");
    const cols = Object.keys(rows[0]);
    const head = cols.map((c) => `<th>${c}</th>`).join("");
    const body = rows.map((r) =>
      `<tr>${cols.map((c) => `<td>${r[c]}</td>`).join("")}</tr>`).join("");
    print(`<table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`);
    print(`${rows.length} row(s) returned.`, "ok");
  }

  // สมองหลัก: รับคำสั่งดิบ → ทำงาน
  function run(raw) {
    const cmd = raw.trim();
    if (!cmd) return;
    print(`resume&gt; ${escapeHtml(cmd)}`, "echo");

    const lower = cmd.toLowerCase().replace(/;$/, "");

    if (lower === "help") return printHelp();
    if (lower === "clear") { out.innerHTML = ""; return; }
    if (lower === "whoami") return print(`${DATA.nameEN} (${DATA.nickName}) — ${DATA.roles[0]}`, "accent");
    // คำสั่งลับ 🥚
    if (lower === "sudo hire me" || lower === "hire me")
      return print("✅ Permission granted. กำลังพาคุณเข้า DevPool... 🚀 (ขอบคุณที่ลองเล่นนะครับ!)", "ok");

    // จับรูปแบบ SELECT ... FROM ... [WHERE ...]
    const m = lower.match(/^select\s+(.+?)\s+from\s+(\w+)(?:\s+where\s+(.+))?$/);
    if (!m) return print("❓ ไม่เข้าใจคำสั่งนี้ — พิมพ์ <span class='accent'>help</span> เพื่อดูตัวอย่าง", "err");

    const [, colsRaw, table, whereRaw] = m;
    if (!TABLES[table]) return print(`❌ ไม่มีตาราง '${table}' — ลอง: resume, skills, hobbies, timeline`, "err");

    let rows = TABLES[table];

    // กรองด้วย WHERE field = 'value' (รองรับแบบง่าย ๆ หนึ่งเงื่อนไข)
    if (whereRaw) {
      const w = whereRaw.match(/(\w+)\s*=\s*'?([^']*)'?/);
      if (!w) return print("❌ เขียน WHERE ไม่ถูก — เช่น WHERE name = 'Fluk'", "err");
      const [, field, value] = w;
      rows = rows.filter((r) =>
        String(r[field] ?? "").toLowerCase() === value.toLowerCase());
    }

    // เลือกเฉพาะคอลัมน์ที่ขอ (ถ้าไม่ใช่ *)
    if (colsRaw.trim() !== "*") {
      const want = colsRaw.split(",").map((c) => c.trim());
      rows = rows.map((r) => {
        const o = {};
        want.forEach((c) => { o[c] = r[c] ?? "NULL"; });
        return o;
      });
    }
    printTable(rows);
  }

  function printHelp() {
    print("คำสั่งที่ใช้ได้:", "accent");
    print(
      "  SELECT * FROM resume;\n" +
      "  SELECT * FROM resume WHERE name = 'Fluk';\n" +
      "  SELECT skill, level FROM skills;\n" +
      "  SELECT * FROM hobbies;\n" +
      "  SELECT * FROM timeline;\n" +
      "  whoami\n" +
      "  clear   (ล้างหน้าจอ)\n" +
      "  help    (เมนูนี้)"
    );
    print("ตารางที่มี: resume, skills, hobbies, timeline", "ok");
  }

  // กด Enter เพื่อรันคำสั่ง
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { run(input.value); input.value = ""; }
  });

  // ข้อความต้อนรับตอนเปิดหน้า
  print(`👋 ยินดีต้อนรับสู่ resume console ของ ${DATA.nickName}!`, "accent");
  print("พิมพ์ <span class='accent'>help</span> แล้วกด Enter เพื่อเริ่ม", "");
}

// กัน HTML แปลก ๆ จาก input ของผู้ใช้ (กัน XScript)
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* ============================================================
   9) DOG (Pukpik) — น้องหมาโกลเด้น นอนหลับ ตื่นเมื่อ hover, เห่าโฮ่งเมื่อคลิก
   ============================================================ */
function initDog() {
  const dog = $("#dog");
  const speech = $("#dogSpeech");

  // hover = ตื่น (หูตั้ง + แลบลิ้น + กระดิกหาง)
  dog.addEventListener("mouseenter", () => dog.classList.add("awake"));
  dog.addEventListener("mouseleave", () => dog.classList.remove("awake"));
  // โฟกัสด้วยคีย์บอร์ดก็ตื่นได้ (เข้าถึงง่ายขึ้น)
  dog.addEventListener("focus", () => dog.classList.add("awake"));
  dog.addEventListener("blur", () => dog.classList.remove("awake"));

  // คลิก = เห่า (สุ่มข้อความ + เสียงสังเคราะห์สั้น ๆ)
  const barks = ["โฮ่ง! 🐾", "บ๊อก บ๊อก! 🐶", "โฮ่งงง~ 🦴", "หางกระดิกแล้ว ✨", "เล่นกันมั้ย! 🎾"];
  dog.addEventListener("click", () => {
    speech.textContent = barks[Math.floor(Math.random() * barks.length)];
    dog.classList.remove("awake");        // รีเซ็ตเพื่อเล่นแอนิเมชัน hop ใหม่
    void dog.offsetWidth;                 // trick บังคับ reflow ให้ animation เล่นซ้ำได้
    dog.classList.add("awake");
    playBark();
  });

  // เสียงเห่าสั้น ๆ ด้วย Web Audio API (ไม่ต้องโหลดไฟล์เสียง) — เห่า 2 ที "โฮ่ง โฮ่ง"
  function playBark() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      [0, 0.22].forEach((offset) => {
        const start = ctx.currentTime + offset;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(320, start);
        osc.frequency.exponentialRampToValueAtTime(150, start + 0.12); // เสียงตกลง = เห่า
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.22, start + 0.02);    // ดังเร็ว
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.14);  // แล้วเงียบ
        osc.connect(gain).connect(ctx.destination);
        osc.start(start);
        osc.stop(start + 0.16);
      });
    } catch (e) { /* บางเบราว์เซอร์บล็อกเสียง ก็ปล่อยผ่านไป */ }
  }
}

/* ============================================================
   เริ่มทำงานทุกอย่างเมื่อหน้าโหลดเสร็จ
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderProfile();   // ต้องวาดข้อมูลก่อน เพราะข้ออื่น ๆ ใช้ element ที่เพิ่งสร้าง
  initTheme();
  initMouseGlow();
  initTyping();
  initSkillBars();
  initTimeline();
  initConsole();
  initDog();
});
