"use client"
import React, { useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { t, type Lang } from '@/lib/i18n'
import Footer from '@/components/Footer'
import { getCaseStudy } from '@/lib/case-studies-data'

const serviceGroupsEN = [
  { key: 'fnb', label: 'F&B', desc: 'Restaurant and dessert brands built for online ordering, reservations, and guest experience.' },
  { key: 'sme', label: 'SME & Retail Business', desc: 'Small and growing retail brands — e-commerce, shopping malls, and uniform manufacturers — with websites built to sell.' },
  { key: 'government', label: 'Government & Public Sector', desc: 'Public agencies and institutes digitizing services for citizens, exporters, and field officers.' },
  { key: 'realestate', label: 'Real Estate & Construction', desc: 'Developers and home builders with branding, websites, and CRM from lead to contract.' },
  { key: 'industry', label: 'Industry & Manufacturing', desc: 'Industrial manufacturers and infrastructure providers presenting capabilities to enterprise and B2B buyers.' },
  { key: 'wellness', label: 'Wellness', desc: 'Fitness and wellness brands with class booking and membership experiences.' },
  { key: 'beauty', label: 'Beauty & Aesthetics', desc: 'Aesthetic surgery clinics and hospitals with refined brands, websites, and AI-assisted CRM.' },
  { key: 'travel', label: 'Travel & Tourism', desc: 'Tour and travel companies with brand identity, booking websites, and AI-driven CRM.' },
]
const serviceGroupsTH = [
  { key: 'fnb', label: 'ร้านอาหารและเครื่องดื่ม', desc: 'แบรนด์ร้านอาหารและของหวาน พร้อมระบบสั่งอาหารออนไลน์และจองโต๊ะ' },
  { key: 'sme', label: 'ธุรกิจ SME และค้าปลีก', desc: 'ธุรกิจค้าปลีกขนาดเล็กและขนาดกลาง ทั้งอีคอมเมิร์ซ ศูนย์การค้า และผู้ผลิตยูนิฟอร์ม พร้อมเว็บไซต์ที่ช่วยขายของได้จริง' },
  { key: 'government', label: 'หน่วยงานภาครัฐ', desc: 'หน่วยงานรัฐและสถาบันต่าง ๆ ที่ต้องการบริการดิจิทัลสำหรับประชาชน ผู้ส่งออก และเจ้าหน้าที่ภาคสนาม' },
  { key: 'realestate', label: 'อสังหาริมทรัพย์และก่อสร้าง', desc: 'ผู้พัฒนาโครงการและบริษัทรับสร้างบ้าน พร้อมแบรนด์ เว็บไซต์ และ CRM ติดตามลูกค้าตั้งแต่เริ่มสนใจจนถึงเซ็นสัญญา' },
  { key: 'industry', label: 'อุตสาหกรรมและการผลิต', desc: 'ผู้ผลิตในภาคอุตสาหกรรมและผู้ให้บริการโครงสร้างพื้นฐาน ที่ต้องแสดงความสามารถของบริษัทให้ลูกค้าองค์กรและ B2B' },
  { key: 'wellness', label: 'เวลเนส', desc: 'แบรนด์ฟิตเนสและเวลเนส พร้อมระบบจองคลาสและระบบสมาชิก' },
  { key: 'beauty', label: 'ความงามและศัลยกรรม', desc: 'คลินิกและโรงพยาบาลศัลยกรรมความงาม พร้อมแบรนด์ เว็บไซต์ และ CRM ที่มี AI ช่วย' },
  { key: 'travel', label: 'การท่องเที่ยวและทัวร์', desc: 'บริษัททัวร์และท่องเที่ยว พร้อมแบรนด์ เว็บไซต์จองทัวร์ และ AI CRM' },
]

const projectsEN = [
  { id:1, service:'mobile', tags:['FinTech','Mobile App'], year:'2024', title:'Digital Banking Super App', client:'Leading Bank', desc:'Redesigned mobile banking for 4 million users, from onboarding to daily transfers.', result:'+62% DAU' },
  { id:2, service:'web', tags:['E-Commerce','Web Platform'], year:'2024', title:'Omnichannel Retail Platform', client:'Retail Group', desc:'Unified commerce platform connecting 2,000+ branches into one order and inventory system.', result:'3× Conversion' },
  { id:3, service:'web', tags:['Healthcare','Web Platform'], year:'2023', title:'Patient Digital Ecosystem', client:'Hospital Group', desc:'End-to-end digital health system — from finding a doctor to booking and follow-up.', result:'-40% No-show' },
  { id:4, service:'ai', tags:['AI','Enterprise'], year:'2024', title:'AI Document Intelligence', client:'Insurance Company', desc:'AI document processing that reads and classifies claims automatically.', result:'-80% Processing' },
  { id:5, service:'web', tags:['FinTech','Web Platform'], year:'2023', title:'Payment Gateway Platform', client:'FinTech Startup', desc:'High-throughput payment infrastructure handling 500K transactions per day.', result:'99.97% Success' },
  { id:6, service:'mobile', tags:['E-Commerce','Mobile App'], year:'2023', title:'Grocery Delivery App', client:'Retail Chain', desc:'30-minute delivery app with real-time inventory sync across dark stores.', result:'4.8★ App Store' },
  { id:7, service:'enterprise', tags:['Enterprise','Web Platform'], year:'2022', title:'ERP & Workforce Management', client:'Factory (500 staff)', desc:'Full ERP covering finance, HR, and inventory for a mid-size manufacturer.', result:'-28% OpEx' },
  { id:8, service:'ai', tags:['AI','Mobile App'], year:'2024', title:'AI-powered EdTech Platform', client:'Online Academy', desc:'Personalized AI tutor adapting to each of 50K learners in real time.', result:'4× Completion' },
  { id:9, service:'enterprise', tags:['Enterprise','Web Platform'], year:'2023', title:'Logistics & Fleet Management', client:'Express Logistics', desc:'Last-mile routing and fleet system coordinating 3,000 drivers.', result:'97% On-time' },
  { id:10, service:'mobile', tags:['Healthcare','Mobile App'], year:'2024', title:'Telemedicine & Mental Health', client:'Health Platform', desc:'Video consultation app with mood tracking and care-plan reminders.', result:'92% Completion' },
  { id:11, service:'data', tags:['FinTech','Enterprise'], year:'2023', title:'InsurTech Claims Platform', client:'Insurance Group', desc:'Data pipeline and analytics dashboard powering automated claims decisions.', result:'73% Faster' },
  { id:12, service:'data', tags:['E-Commerce','AI'], year:'2024', title:'Personalization Engine', client:'Fashion Retailer', desc:'Behavioral data pipeline feeding a product-recommendation model.', result:'+45% AOV' },
  { id:13, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'Michelin-Starred Restaurant Website', client:'Savelberg Restaurant', desc:'New bilingual website with an AI concierge chatbot and content direction for a Michelin-starred French restaurant.', result:'New Website', slug:'savelberg' },
  { id:14, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'Ice Cream Brand Website', client:'OVO', desc:'New website for an ice cream and dessert brand, with online ordering and marketing content direction.', result:'New Website', slug:'ovo' },
  { id:15, service:'wellness', tags:['Fitness & Wellness','Web Platform'], year:'2025', title:'Fitness Studio Website', client:'BASE', desc:'New website for a fitness studio with online class booking and trainer profiles.', result:'New Website', slug:'base' },
  { id:16, service:'sme', tags:['Apparel & Uniforms','Web Platform'], year:'2025', title:'Medical Uniform Manufacturer Website', client:'Blue Bear', desc:'New website with a product catalog and B2B order-inquiry flow for hospital and clinic customers.', result:'New Website', slug:'blue-bear' },
  { id:17, service:'industry', tags:['Manufacturing','Web Platform'], year:'2025', title:'Precision Manufacturing Website', client:'Thai Metal Aluminium', desc:'New corporate website presenting manufacturing capabilities and quality standards to industrial customers.', result:'New Website', slug:'thai-metal-aluminium' },
  { id:18, service:'sme', tags:['E-Commerce','Web Platform'], year:'2025', title:'Bag Brand E-Commerce Website', client:'VERA', desc:'New e-commerce website for a self-manufactured bag brand, with cart and checkout for nationwide sales.', result:'New Website', slug:'vera' },
  { id:19, service:'government', tags:['Government','Web Platform'], year:'2025', title:'National Food Institute Website', client:'NFI – National Food Institute', desc:'New website organizing lab services and research for a public food-research institute.', result:'New Website', slug:'nfi' },
  { id:20, service:'sme', tags:['Retail','Mobile App'], year:'2025', title:'MBK Center Mobile App', client:'MBK Center', desc:'New mobile app letting shoppers find stores, promotions, and member perks in one place.', result:'New App', slug:'mbk' },
  { id:21, service:'government', tags:['Government','Mobile App'], year:'2025', title:'DITP Export Promotion Mobile App', client:'DITP', desc:'New version of an export-promotion app, built on an earlier version we developed, for Thai exporters.', result:'New App', slug:'ditp' },
  { id:22, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'Fine-Dining Restaurant Website', client:'Sra Bua by Kiin Kiin', desc:'New bilingual website with online reservations for a modern Thai fine-dining restaurant.', result:'New Website', slug:'sra-bua' },
  { id:23, service:'travel', tags:['Travel','Web Platform'], year:'2025', title:'Website, Branding & AI CRM', client:'World Surprise Travel', desc:'New brand identity, website, and AI CRM for a tour company managing travel packages and customers.', result:'New Website', slug:'world-surprise-travel' },
  { id:24, service:'realestate', tags:['Real Estate','Web Platform'], year:'2025', title:'Home Builder Website with CRM', client:'Awii House', desc:'New website and CRM for a home-building company, tracking customers from consultation to contract.', result:'New Website', slug:'awii-house' },
  { id:25, service:'realestate', tags:['Real Estate','Web Platform'], year:'2025', title:'Website, Brand CI & Real Estate CRM', client:'Canapaya Residences', desc:'New brand identity, website, and a dedicated CRM for a luxury riverside residential project.', result:'New Website', slug:'canapaya-residences' },
  { id:26, service:'industry', tags:['Enterprise','Web Platform'], year:'2025', title:'Website with AI CRM', client:'RFS', desc:'New website and AI CRM for a Singapore-based telecom infrastructure and smart-city solutions provider.', result:'New Website', slug:'rfs' },
  { id:27, service:'government', tags:['Government','Mobile App'], year:'2025', title:'Tax Inspection App', client:'Excise Department', desc:'New mobile app for field officers to verify excise tax payments, integrated with data from related agencies.', result:'New App', slug:'excise-department' },
  { id:28, service:'government', tags:['Government','Web Platform'], year:'2025', title:'Government Contractor Integrity & Transparency Website', client:'ITAGC', desc:'UX/UI design followed by a new website for a body assessing the integrity and transparency of government contractors.', result:'New Website', slug:'itagc' },
  { id:29, service:'government', tags:['Government','Mobile App'], year:'2025', title:'Mobile App, Rebuilt with AI', client:'Department of Water Resources', desc:'New AI capabilities built into an app we developed for the department four years earlier, for water resource management.', result:'New App', slug:'department-of-water-resources' },
  { id:30, service:'government', tags:['Government','Mobile App'], year:'2025', title:'AI-Powered Immigration Inspection App', client:'Royal Thai Police Immigration Bureau', desc:'New mobile app with an AI module for document and facial verification at entry and exit points.', result:'New App', slug:'immigration-bureau' },
  { id:31, service:'government', tags:['Government','Mobile App'], year:'2025', title:'Culture & Heritage Mobile App', client:'Ministry of Culture', desc:"New mobile app bringing the ministry's existing website content to a wider audience.", result:'New App', slug:'ministry-of-culture' },
  { id:32, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'Restaurant Discovery Website', client:'BBK Menu', desc:"UX/UI design followed by a new website for discovering Bangkok's best restaurants and must-try dishes.", result:'New Website', slug:'bbk-menu' },
  { id:33, service:'realestate', tags:['Real Estate','CRM'], year:'2025', title:"CRM & AI for a Real Estate Developer", client:"Sena Development", desc:"Custom CRM system and AI development for a real estate developer.", result:"CRM + AI", slug:'sena-development' },
  { id:34, service:'wellness', tags:['Wellness','Web Platform'], year:'2025', title:"Shopify E-commerce for a Wellness Brand", client:"PAÑPURI", desc:"UX/UI design followed by a Shopify e-commerce website for a Thai luxury wellness and skincare brand.", result:"New Website", slug:'panpuri' },
  { id:35, service:'travel', tags:['Hospitality','Web Platform'], year:'2025', title:"Hotel Website with Online Booking", client:"Shanghai Mansion Bangkok", desc:"Boutique hotel website with an online room booking system.", result:"New Website", slug:'shanghai-mansion-bangkok' },
  { id:36, service:'sme', tags:['Retail','Web Platform'], year:'2025', title:"E-commerce & AI for a Shopping Mall", client:"Jampha Shopping Mall", desc:"E-commerce website plus an AI system supporting operations and customers.", result:"Website + AI", slug:'jampha-shopping-mall' },
  { id:38, service:'industry', tags:["Logistics", "Web Platform"], year:'2025', title:"Corporate Website for a Marine Logistics Company", client:"Prima Marine", desc:"A corporate website presenting the fleet, services and credibility of a publicly listed marine logistics company.", result:"New Website", slug:'prima-marine' },
  { id:39, service:'fnb', tags:["F&B", "Web Platform"], year:'2025', title:"Website for a Renowned Thai Restaurant", client:"Baan Khanitha Thai Cuisine", desc:"UX/UI design and a website that carries the warmth and heritage of a well-known Thai fine-dining restaurant.", result:"New Website", slug:'baan-khanitha' },
  { id:40, service:'beauty', tags:["Beauty", "CRM"], year:'2025', title:"Website, UX/UI and AI-Assisted CRM for an Aesthetic Clinic", client:"DSK", desc:"Business consulting, website design and UX/UI, plus AI-assisted CRM for an aesthetic surgery business.", result:"Website + CRM", slug:'dsk' },
  { id:41, service:'realestate', tags:["Home Builder", "CRM"], year:'2025', title:"Website, UX/UI and AI-Assisted CRM for a Home Builder", client:"Admire", desc:"UX/UI design and a new website for a custom home builder, with AI-assisted CRM to manage leads.", result:"Website + CRM", slug:'admire' },
  { id:42, service:'beauty', tags:["Beauty", "Brand"], year:'2025', title:"Brand, Website and Graphics for an Aesthetic Hospital", client:"MEKO International Hospital", desc:"Website design and UX/UI, graphic design and brand CI for a renowned aesthetic surgery hospital.", result:"Brand + Website", slug:'meko-international-hospital' },
]

const projectsTH = [
  { id:1, service:'mobile', tags:['FinTech','Mobile App'], year:'2024', title:'Digital Banking Super App', client:'ธนาคารชั้นนำ', desc:'ออกแบบแอปธนาคารใหม่สำหรับผู้ใช้ 4 ล้านคน ตั้งแต่สมัครใช้งานครั้งแรกจนถึงโอนเงินทุกวัน', result:'+62% DAU' },
  { id:2, service:'web', tags:['E-Commerce','Web Platform'], year:'2024', title:'Omnichannel Retail Platform', client:'เครือค้าปลีก', desc:'แพลตฟอร์มขายหลายช่องทาง เชื่อม 2,000+ สาขาเข้าด้วยกันในระบบสั่งซื้อและสต๊อกเดียว', result:'3× Conversion' },
  { id:3, service:'web', tags:['Healthcare','Web Platform'], year:'2023', title:'Patient Digital Ecosystem', client:'กลุ่มโรงพยาบาล', desc:'ระบบสุขภาพดิจิทัลตั้งแต่ค้นหาแพทย์ จองนัด ไปจนถึงติดตามผล', result:'-40% No-show' },
  { id:4, service:'ai', tags:['AI','Enterprise'], year:'2024', title:'AI Document Intelligence', client:'บริษัทประกันภัย', desc:'AI อ่านและแยกประเภทเอกสารเคลมประกันให้อัตโนมัติ', result:'-80% Processing' },
  { id:5, service:'web', tags:['FinTech','Web Platform'], year:'2023', title:'Payment Gateway Platform', client:'FinTech Startup', desc:'ระบบชำระเงินที่รองรับ 500,000 รายการต่อวัน', result:'99.97% Success' },
  { id:6, service:'mobile', tags:['E-Commerce','Mobile App'], year:'2023', title:'Grocery Delivery App', client:'Retail Chain', desc:'แอปส่งของภายใน 30 นาที ซิงก์สต๊อกข้ามสาขาแบบเรียลไทม์', result:'4.8★ App Store' },
  { id:7, service:'enterprise', tags:['Enterprise','Web Platform'], year:'2022', title:'ERP & Workforce Management', client:'โรงงาน 500 คน', desc:'ระบบ ERP ที่รวมการเงิน HR และสต๊อกไว้ด้วยกัน สำหรับโรงงานขนาดกลาง', result:'-28% OpEx' },
  { id:8, service:'ai', tags:['AI','Mobile App'], year:'2024', title:'AI-powered EdTech Platform', client:'Online Academy', desc:'AI ติวเตอร์ที่ปรับเนื้อหาให้เหมาะกับผู้เรียนแต่ละคนแบบเรียลไทม์ จากผู้เรียน 50,000 คน', result:'4× Completion' },
  { id:9, service:'enterprise', tags:['Enterprise','Web Platform'], year:'2023', title:'Logistics & Fleet Management', client:'Express Logistics', desc:'ระบบวางเส้นทางและดูแลยานพาหนะสำหรับคนขับ 3,000 คน', result:'97% On-time' },
  { id:10, service:'mobile', tags:['Healthcare','Mobile App'], year:'2024', title:'Telemedicine & Mental Health', client:'Health Platform', desc:'แอปปรึกษาแพทย์ผ่านวิดีโอ มีบันทึกอารมณ์ และแจ้งเตือนตามแผนการดูแล', result:'92% Completion' },
  { id:11, service:'data', tags:['FinTech','Enterprise'], year:'2023', title:'InsurTech Claims Platform', client:'Insurance Group', desc:'ระบบจัดการข้อมูลและแดชบอร์ดวิเคราะห์ เพื่อช่วยตัดสินใจเคลมอัตโนมัติ', result:'73% Faster' },
  { id:12, service:'data', tags:['E-Commerce','AI'], year:'2024', title:'Personalization Engine', client:'Fashion Retailer', desc:'ระบบจัดการข้อมูลพฤติกรรมผู้ใช้ ส่งเข้าโมเดลแนะนำสินค้า', result:'+45% AOV' },
  { id:13, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'เว็บไซต์ร้านอาหารมิชลินสตาร์', client:'Savelberg Restaurant', desc:'เว็บไซต์สองภาษา มีแชทบอท AI และแนวทางทำคอนเทนต์ สำหรับร้านอาหารฝรั่งเศสระดับมิชลินสตาร์', result:'เว็บไซต์ใหม่', slug:'savelberg' },
  { id:14, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'เว็บไซต์แบรนด์ไอศกรีม', client:'OVO', desc:'เว็บไซต์ใหม่ของแบรนด์ไอศกรีมและของหวาน มีระบบสั่งซื้อออนไลน์ และแนวทางทำคอนเทนต์การตลาด', result:'เว็บไซต์ใหม่', slug:'ovo' },
  { id:15, service:'wellness', tags:['Fitness & Wellness','Web Platform'], year:'2025', title:'เว็บไซต์สตูดิโอฟิตเนส', client:'BASE', desc:'เว็บไซต์ใหม่ของสตูดิโอฟิตเนส มีระบบจองคลาสออนไลน์และข้อมูลเทรนเนอร์', result:'เว็บไซต์ใหม่', slug:'base' },
  { id:16, service:'sme', tags:['Apparel & Uniforms','Web Platform'], year:'2025', title:'เว็บไซต์ผู้ผลิตชุดยูนิฟอร์มทางการแพทย์', client:'Blue Bear', desc:'เว็บไซต์ใหม่ มีแคตตาล็อกสินค้าและช่องทางติดต่อสั่งซื้อสำหรับลูกค้าองค์กร เช่น โรงพยาบาลและคลินิก', result:'เว็บไซต์ใหม่', slug:'blue-bear' },
  { id:17, service:'industry', tags:['Manufacturing','Web Platform'], year:'2025', title:'เว็บไซต์โรงงานผลิตชิ้นส่วนอะลูมิเนียม', client:'Thai Metal Aluminium', desc:'เว็บไซต์องค์กรใหม่ แสดงความสามารถด้านการผลิตและมาตรฐานคุณภาพให้ลูกค้าอุตสาหกรรม', result:'เว็บไซต์ใหม่', slug:'thai-metal-aluminium' },
  { id:18, service:'sme', tags:['E-Commerce','Web Platform'], year:'2025', title:'เว็บไซต์อีคอมเมิร์ซแบรนด์กระเป๋า', client:'VERA', desc:'เว็บไซต์อีคอมเมิร์ซใหม่ของแบรนด์กระเป๋าที่ผลิตและขายออนไลน์ มีตะกร้าสินค้าและระบบชำระเงิน', result:'เว็บไซต์ใหม่', slug:'vera' },
  { id:19, service:'government', tags:['Government','Web Platform'], year:'2025', title:'เว็บไซต์สถาบันอาหาร', client:'NFI สถาบันอาหาร', desc:'เว็บไซต์ใหม่ที่จัดบริการห้องปฏิบัติการและงานวิจัยของสถาบันวิจัยอาหารภาครัฐให้เป็นระเบียบ', result:'เว็บไซต์ใหม่', slug:'nfi' },
  { id:20, service:'sme', tags:['Retail','Mobile App'], year:'2025', title:'แอปมือถือศูนย์การค้า MBK', client:'MBK Center', desc:'แอปมือถือใหม่ ให้ลูกค้าค้นหาร้านค้า โปรโมชัน และสิทธิพิเศษได้ในที่เดียว', result:'แอปใหม่', slug:'mbk' },
  { id:21, service:'government', tags:['Government','Mobile App'], year:'2025', title:'แอปมือถือส่งเสริมผู้ประกอบการส่งออก DITP', client:'DITP', desc:'แอปเวอร์ชันใหม่ ต่อยอดจากแอปที่เราเคยทำให้ เพื่อช่วยผู้ประกอบการส่งออกไทย', result:'แอปใหม่', slug:'ditp' },
  { id:22, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'เว็บไซต์ร้านอาหารไฟน์ไดนิ่ง', client:'Sra Bua by Kiin Kiin', desc:'เว็บไซต์สองภาษา มีระบบจองโต๊ะออนไลน์ สำหรับร้านอาหารไทยโมเดิร์นระดับไฟน์ไดนิ่ง', result:'เว็บไซต์ใหม่', slug:'sra-bua' },
  { id:23, service:'travel', tags:['Travel','Web Platform'], year:'2025', title:'เว็บไซต์ แบรนด์ และ AI CRM', client:'World Surprise Travel', desc:'ทำแบรนด์ใหม่ เว็บไซต์ และ AI CRM ให้บริษัททัวร์ ใช้จัดการแพ็กเกจทัวร์และลูกค้า', result:'เว็บไซต์ใหม่', slug:'world-surprise-travel' },
  { id:24, service:'realestate', tags:['Real Estate','Web Platform'], year:'2025', title:'เว็บไซต์และ CRM สำหรับบริษัทรับสร้างบ้าน', client:'Awii House', desc:'เว็บไซต์และ CRM ใหม่ของบริษัทรับสร้างบ้าน ติดตามลูกค้าตั้งแต่ปรึกษาจนถึงเซ็นสัญญา', result:'เว็บไซต์ใหม่', slug:'awii-house' },
  { id:25, service:'realestate', tags:['Real Estate','Web Platform'], year:'2025', title:'เว็บไซต์ แบรนด์ CI และ CRM อสังหาริมทรัพย์', client:'Canapaya Residences', desc:'ทำแบรนด์ เว็บไซต์ และ CRM เฉพาะทางให้โครงการที่พักอาศัยหรูริมแม่น้ำ', result:'เว็บไซต์ใหม่', slug:'canapaya-residences' },
  { id:26, service:'industry', tags:['Enterprise','Web Platform'], year:'2025', title:'เว็บไซต์และ AI CRM', client:'RFS', desc:'เว็บไซต์และ AI CRM ใหม่ของผู้ให้บริการโครงสร้างพื้นฐานโทรคมนาคมและสมาร์ทซิตี้จากสิงคโปร์', result:'เว็บไซต์ใหม่', slug:'rfs' },
  { id:27, service:'government', tags:['Government','Mobile App'], year:'2025', title:'แอปตรวจสอบภาษี', client:'กรมสรรพสามิต', desc:'แอปมือถือใหม่ให้เจ้าหน้าที่ใช้ตรวจสอบภาษีสรรพสามิต และเชื่อมข้อมูลกับหน่วยงานที่เกี่ยวข้อง', result:'แอปใหม่', slug:'excise-department' },
  { id:28, service:'government', tags:['Government','Web Platform'], year:'2025', title:'เว็บไซต์ตรวจสอบความโปร่งใสของผู้รับเหมาภาครัฐ', client:'ITAGC', desc:'ออกแบบ UX/UI แล้วพัฒนาเว็บไซต์ใหม่ ให้หน่วยงานใช้ประเมินความซื่อตรงและความโปร่งใสของผู้รับเหมาภาครัฐ', result:'เว็บไซต์ใหม่', slug:'itagc' },
  { id:29, service:'government', tags:['Government','Mobile App'], year:'2025', title:'แอปมือถือต่อยอดด้วย AI', client:'กรมทรัพยากรน้ำ', desc:'ต่อยอดแอปที่เราเคยทำให้เมื่อ 4 ปีก่อน โดยเพิ่ม AI สำหรับบริหารจัดการทรัพยากรน้ำ', result:'แอปใหม่', slug:'department-of-water-resources' },
  { id:30, service:'government', tags:['Government','Mobile App'], year:'2025', title:'แอปตรวจคนเข้าเมืองที่ใช้ AI', client:'สำนักงานตรวจคนเข้าเมือง', desc:'แอปมือถือใหม่ มี AI ช่วยตรวจเอกสารและใบหน้าที่จุดตรวจคนเข้าเมือง', result:'แอปใหม่', slug:'immigration-bureau' },
  { id:31, service:'government', tags:['Government','Mobile App'], year:'2025', title:'แอปงานด้านวัฒนธรรม', client:'กระทรวงวัฒนธรรม', desc:'แอปมือถือใหม่ นำเนื้อหาจากเว็บไซต์เดิมของกระทรวงไปถึงประชาชนได้มากขึ้น', result:'แอปใหม่', slug:'ministry-of-culture' },
  { id:32, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'เว็บไซต์แนะนำร้านอาหาร', client:'BBK Menu', desc:'ออกแบบ UX/UI แล้วพัฒนาเว็บไซต์ใหม่ สำหรับค้นหาร้านอาหารและเมนูเด็ดในกรุงเทพฯ', result:'เว็บไซต์ใหม่', slug:'bbk-menu' },
  { id:33, service:'realestate', tags:['Real Estate','CRM'], year:'2025', title:"ระบบ CRM และ AI สำหรับผู้พัฒนาอสังหาริมทรัพย์", client:"Sena Development", desc:"พัฒนาระบบ CRM ตามความต้องการ และระบบ AI สำหรับผู้พัฒนาอสังหาริมทรัพย์", result:"CRM + AI", slug:'sena-development' },
  { id:34, service:'wellness', tags:['Wellness','Web Platform'], year:'2025', title:"เว็บไซต์อีคอมเมิร์ซ Shopify สำหรับแบรนด์เวลเนส", client:"PAÑPURI", desc:"ออกแบบ UX/UI แล้วพัฒนาเว็บไซต์อีคอมเมิร์ซบน Shopify สำหรับแบรนด์เวลเนสและสกินแคร์ไทย", result:"เว็บไซต์ใหม่", slug:'panpuri' },
  { id:35, service:'travel', tags:['Hospitality','Web Platform'], year:'2025', title:"เว็บไซต์โรงแรมพร้อมระบบจองห้องพักออนไลน์", client:"Shanghai Mansion Bangkok", desc:"เว็บไซต์โรงแรมบูติก มีระบบจองห้องพักออนไลน์", result:"เว็บไซต์ใหม่", slug:'shanghai-mansion-bangkok' },
  { id:36, service:'sme', tags:['Retail','Web Platform'], year:'2025', title:"เว็บไซต์อีคอมเมิร์ซและระบบ AI สำหรับศูนย์การค้า", client:"Jampha Shopping Mall", desc:"เว็บไซต์อีคอมเมิร์ซ พร้อมระบบ AI ช่วยงานหลังบ้านและดูแลลูกค้า", result:"เว็บไซต์ + AI", slug:'jampha-shopping-mall' },
  { id:38, service:'industry', tags:["Logistics", "Web Platform"], year:'2025', title:"เว็บไซต์องค์กรสำหรับธุรกิจขนส่งทางทะเล", client:"Prima Marine", desc:"เว็บไซต์องค์กรที่แสดงกองเรือ บริการ และความน่าเชื่อถือของบริษัทมหาชนด้านขนส่งทางทะเล", result:"เว็บไซต์ใหม่", slug:'prima-marine' },
  { id:39, service:'fnb', tags:["F&B", "Web Platform"], year:'2025', title:"เว็บไซต์ร้านอาหารไทยชื่อดัง", client:"Baan Khanitha Thai Cuisine", desc:"ออกแบบ UX/UI และพัฒนาเว็บไซต์ที่สื่อถึงความอบอุ่นและเอกลักษณ์ของร้านอาหารไทยชั้นนำ", result:"เว็บไซต์ใหม่", slug:'baan-khanitha' },
  { id:40, service:'beauty', tags:["Beauty", "CRM"], year:'2025', title:"เว็บไซต์ UX/UI และ AI CRM สำหรับคลินิกศัลยกรรมความงาม", client:"DSK", desc:"ให้คำปรึกษาธุรกิจ ออกแบบเว็บไซต์และ UX/UI พร้อม CRM ที่มี AI ช่วย สำหรับธุรกิจศัลยกรรมความงาม", result:"เว็บไซต์ + CRM", slug:'dsk' },
  { id:41, service:'realestate', tags:["Home Builder", "CRM"], year:'2025', title:"เว็บไซต์ UX/UI และ AI CRM สำหรับธุรกิจรับสร้างบ้าน", client:"Admire", desc:"ออกแบบ UX/UI และพัฒนาเว็บไซต์ใหม่สำหรับธุรกิจรับสร้างบ้าน พร้อม CRM ที่มี AI ช่วยจัดการลูกค้าที่สนใจ", result:"เว็บไซต์ + CRM", slug:'admire' },
  { id:42, service:'beauty', tags:["Beauty", "Brand"], year:'2025', title:"แบรนด์ เว็บไซต์ และกราฟิกสำหรับโรงพยาบาลศัลยกรรมความงาม", client:"MEKO International Hospital", desc:"ออกแบบเว็บไซต์ UX/UI กราฟิก และ Brand CI สำหรับโรงพยาบาลศัลยกรรมความงามชื่อดัง", result:"แบรนด์ + เว็บไซต์", slug:'meko-international-hospital' },
]

const gradients = [
  'linear-gradient(135deg, var(--purple) 0%, var(--purple-light) 100%)',
  'linear-gradient(135deg, var(--purple-light) 0%, var(--lime) 100%)',
  'linear-gradient(135deg, var(--purple-dark) 0%, var(--purple) 100%)',
  'linear-gradient(135deg, var(--purple) 0%, var(--lime) 100%)',
]

export default function WorkPageClient({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any

  const projects = isEN ? projectsEN : projectsTH
  const serviceGroups = isEN ? serviceGroupsEN : serviceGroupsTH
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const scrollRow = (key: string, dir: 1 | -1) => {
    const el = rowRefs.current[key]
    if (el) el.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }

  return (
    <>
      <Navbar lang={lang} tr={tr} transparent />
      <main>
        <section className="relative overflow-hidden pt-[80px]" style={{ background: '#08070F' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.35]"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
          />
          <div
            className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.28) 0%, transparent 70%)', filter: 'blur(20px)' }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-20">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <p className="t-label mb-5">{isEN ? 'Our Work' : 'ผลงานของเรา'}</p>
                <h1 className="t-display text-[clamp(3rem,7vw,6.5rem)] leading-relaxed" style={{ color: '#fff' }}>
                  {isEN ? 'Products We Are' : 'ผลงานที่เรา'}<br />
                  <span style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {isEN ? 'Proud Of' : 'ภูมิใจนำเสนอ'}
                  </span>
                </h1>
              </div>
              <p className="text-sm max-w-sm" style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 400 }}>
                {isEN ? '120+ projects over 8 years, grouped below by the service that shipped them.' : '120+ โปรเจกต์ใน 8 ปี แยกกลุ่มด้านล่างตามบริการที่ใช้ทำแต่ละโปรเจกต์'}
              </p>
            </div>
          </div>
        </section>

        {/* Dark section — projects grouped by service category, horizontal scroll rows */}
        <section className="py-20 lg:py-28" style={{ background: '#08070F' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-16">
            {serviceGroups.map((sg) => {
              const items = projects.filter(p => p.service === sg.key && (p as any).slug)
              if (!items.length) return null
              return (
                <div key={sg.key}>
                  <div className="flex items-end justify-between mb-8">
                    <div className="max-w-xl">
                      <h2 className="t-display text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight mb-2" style={{ color:'#fff' }}>{sg.label}</h2>
                      <p className="text-sm mb-1.5" style={{ color:'rgba(255,255,255,0.6)', fontWeight:400, lineHeight:1.5 }}>
                        {(sg as any).desc}
                      </p>
                      <p className="text-sm" style={{ color:'var(--lime)', fontWeight:400 }}>
                        {isEN ? `${items.length} project${items.length > 1 ? 's' : ''} in this category` : `${items.length} โปรเจกต์ในหมวดนี้`}
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 shrink-0">
                      <button
                        aria-label={isEN ? 'Scroll left' : 'เลื่อนซ้าย'}
                        onClick={() => scrollRow(sg.key, -1)}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                        style={{ border:'1px solid rgba(255,255,255,0.15)' }}
                      >
                        <i className="ti ti-chevron-left" style={{ fontSize:16, color:'#fff' }} aria-hidden="true" />
                      </button>
                      <button
                        aria-label={isEN ? 'Scroll right' : 'เลื่อนขวา'}
                        onClick={() => scrollRow(sg.key, 1)}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                        style={{ border:'1px solid rgba(255,255,255,0.15)' }}
                      >
                        <i className="ti ti-chevron-right" style={{ fontSize:16, color:'#fff' }} aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div
                    ref={(el) => { rowRefs.current[sg.key] = el }}
                    className="no-scrollbar flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory"
                  >
                    {items.map((p, i) => {
                      const CardTag: any = (p as any).slug ? Link : 'div'
                      const cardProps = (p as any).slug ? { href: `/${lang}/work/${(p as any).slug}` } : {}
                      const cover = (p as any).slug ? getCaseStudy((p as any).slug)?.[lang]?.heroImage : undefined
                      return (
                      <CardTag
                        key={p.id}
                        {...cardProps}
                        className="group shrink-0 w-[300px] snap-start rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 cursor-pointer block"
                        style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)' }}
                      >
                        <div className="relative h-36 rounded-xl flex items-center justify-center mb-4 overflow-hidden" style={cover ? undefined : { background: gradients[i % gradients.length] }}>
                          {cover ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={cover} alt={p.title} loading="lazy" width={300} height={144} className="absolute inset-0 w-full h-full object-cover" />
                          ) : (
                            <i className="ti ti-photo" style={{ fontSize:22, color:'#fff', opacity:0.4 }} aria-hidden="true" />
                          )}
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs bg-white/20 backdrop-blur-sm text-white" style={{ fontWeight:400 }}>{p.year}</span>
                          <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-xs flex items-center gap-1" style={{ background:'rgba(8,7,15,0.6)', color:'var(--lime)', fontWeight:500 }}>
                            <i className="ti ti-trending-up" style={{ fontSize:12 }} aria-hidden="true" />{p.result}
                          </span>
                        </div>
                        <p className="text-xs mb-1.5" style={{ color:'var(--purple-light)', fontWeight:400 }}>{p.client}</p>
                        <h3 className="text-white leading-snug mb-2 group-hover:text-[var(--purple-light)] transition-colors" style={{ fontWeight:500, fontSize:'0.98rem' }}>{p.title}</h3>
                        <p style={{ color:'rgba(255,255,255,0.55)', fontWeight:400, fontSize:'0.8rem', lineHeight:1.5 }} className="mb-4 line-clamp-2">{p.desc}</p>
                        <span className="text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all" style={{ color:'var(--purple-light)', fontWeight:400 }}>
                          {isEN ? 'View project' : 'ดูรายละเอียด'} <i className="ti ti-arrow-up-right" style={{ fontSize:13 }} aria-hidden="true" />
                        </span>
                      </CardTag>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="relative overflow-hidden" style={{ background: '#050308' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '180px 180px, 260px 260px', backgroundPosition: '0 0, 90px 130px' }}
          />
          <div
            className="absolute left-0 right-0 bottom-0 pointer-events-none"
            style={{ height: 260, background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(123,110,246,0.35) 0%, rgba(83,195,215,0.08) 45%, transparent 75%)' }}
          />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-10 py-24 text-center">
            <p className="text-sm tracking-widest uppercase mb-6" style={{ color: '#fff', fontWeight: 500 }}>{isEN ? 'Ready to start?' : 'พร้อมเริ่มหรือยัง?'}</p>
            <h2 className="t-display text-[clamp(2rem,5vw,4.5rem)] mb-6 leading-tight" style={{ background: 'linear-gradient(135deg, var(--purple-light) 0%, #53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {isEN ? <>Let your project<br />be on this list</> : <>ให้โปรเจกต์ของคุณ<br />อยู่ในรายการนี้</>}
            </h2>
            <p className="mb-10 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>
              {isEN ? 'We are ready to build a product you are proud of. Start with a free conversation.' : 'เรายินดีช่วยทำงานที่คุณภูมิใจ เริ่มจากคุยกับเราฟรี'}
            </p>
            <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}>
              {isEN ? 'Start a Project' : 'เริ่มโปรเจกต์เลย'} <i className="ti ti-arrow-right" style={{ fontSize:15 }} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
