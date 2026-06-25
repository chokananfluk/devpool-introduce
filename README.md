# 🐾 หน้าเว็บแนะนำตัว — DevPool 2569

หน้าเว็บแนะนำตัวหน้าเดียว เขียนด้วย **HTML + CSS + JavaScript ล้วน** (ไม่มี framework, ไม่มี build step)
เปิดไฟล์ `index.html` ก็ใช้ได้เลย

> สร้างสำหรับสมัครเข้าร่วม **เส้นทาง DevPool รุ่นที่ 5 ประจำปี 2569**

---

## ✨ Interaction ในหน้าเว็บ (มีมากกว่า 1 จุด)

| # | ลูกเล่น | อยู่ที่ไหน | ทำงานยังไง (สรุปสั้น) |
|---|---------|-----------|------------------------|
| 1 | **สลับธีม Light/Dark** 🌙☀️ | ปุ่มมุมขวาบน | สลับ `data-theme` ที่ `<html>` แล้ว CSS variables เปลี่ยนสีทั้งหน้า + จำค่าไว้ใน `localStorage` |
| 2 | **Typing effect** ⌨️ | ใต้ชื่อใน Hero | JS พิมพ์/ลบข้อความทีละตัวอักษรด้วย `setTimeout` วนไปเรื่อย ๆ |
| 3 | **Mouse glow** 🔦 | ทั้งหน้า | วงกลมเรืองแสงวิ่งตามเมาส์ด้วย `mousemove` + `transform` |
| 4 | **Resume Console (SQL จำลอง)** 💻 | section "Console" | พิมพ์คำสั่งคล้าย SQL เช่น `SELECT * FROM resume;` แล้วข้อมูลเด้งเป็นตาราง |
| 5 | **Skill bars เลื่อนตอน scroll** 📊 | section "สกิล" | ใช้ `IntersectionObserver` ตรวจว่าเลื่อนถึงแล้วค่อยให้แถบวิ่ง |
| 6 | **Timeline + รถวิ่ง** 🚗 | section "เส้นทาง" | คำนวณ % การ scroll แล้วขยับรถไปตามเส้น + การ์ดค่อย ๆ โผล่ |
| 7 | **น้องหมา Pukpik (Easter egg)** 🐶 | Footer | หมาโกลเด้นขนฟูสีทองวาดด้วย CSS นอนหลับอยู่ → เอาเมาส์ชี้แล้วตื่น (หูตั้ง+แลบลิ้น), คลิกแล้วเห่า "โฮ่ง" (มีเสียงจาก Web Audio API) |

---

## 📁 โครงสร้างไฟล์

```
devpool-intro/
├─ index.html     # โครงหน้าเว็บ (semantic HTML)
├─ style.css      # ธีม Light/Dark + สไตล์ทั้งหมด (ใช้ CSS variables)
├─ script.js      # ข้อมูล + ลูกเล่นทั้งหมด (มี DATA อยู่บนสุดให้แก้)
├─ assets/        # ใส่รูปโปรไฟล์ที่นี่ (ถ้ามี)
└─ README.md
```

สร้างด้วย ❤️ โดยใช้ HTML + CSS + JavaScript
