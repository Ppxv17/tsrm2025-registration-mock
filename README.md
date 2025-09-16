# TSRM2025 Registration System (Mock Version)

โปรเจกต์นี้เป็น **Mock Version** ของระบบลงทะเบียนงานประชุม TSRM2025  
สร้างด้วย **WordPress + Google Apps Script + Google Sheets**  

## ฟีเจอร์
- ลงทะเบียนผ่านฟอร์ม WordPress  
- ส่งอีเมลตอบกลับอัตโนมัติ (Google Apps Script + Gmail API)  
- สร้าง QR Code สำหรับ Check-in  
- Dashboard แบบ Real-time ด้วย Google Sheets + Looker Studio  

## Workflow
1. ผู้ใช้กรอกแบบฟอร์มลงทะเบียน  
2. ระบบเก็บข้อมูลไปที่ Google Sheets  
3. Google Apps Script ทำงาน → ส่งอีเมล + QR Code  
4. วันงานสแกน QR Code → อัปเดตสถานะ Check-in  
5. Dashboard แสดงผลแบบเรียลไทม์  

> **หมายเหตุ:** Repo นี้เป็นตัวอย่าง Mock ไม่มีข้อมูลผู้เข้าร่วมจริง
