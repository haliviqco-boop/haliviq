'use client'
import { useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { t, type Lang } from '@/lib/i18n'
import Footer from '@/components/Footer'
import { getCaseStudy } from '@/lib/case-studies-data'

const featureCardsEN = [
  { icon: 'ti-code', title: 'Scalability', desc: 'Built and designed to scale cleanly as new features get added over time.' },
  { icon: 'ti-search', title: 'Find a Doctor', desc: 'Search and filter doctors across every specialty and clinic location.' },
  { icon: 'ti-users-group', title: 'Connect with Patients', desc: 'Multiple pathways for patients to reach the hospital — app, forms, call center.' },
  { icon: 'ti-affiliate', title: 'Seamless Integration', desc: 'Integrates cleanly with the existing website to preserve brand identity.' },
  { icon: 'ti-calendar-check', title: 'Easy Bookings', desc: 'Book appointments based on the criteria patients actually care about.' },
  { icon: 'ti-language', title: 'Language Support', desc: 'Built-in support for the languages an international patient base needs.' },
]
const featureCardsTH = [
  { icon: 'ti-code', title: 'Scalability', desc: 'ออกแบบให้เพิ่มฟีเจอร์ใหม่ได้ในอนาคต' },
  { icon: 'ti-search', title: 'Find a Doctor', desc: 'ค้นหาและกรองแพทย์ได้ทุกสาขาและความเชี่ยวชาญ' },
  { icon: 'ti-users-group', title: 'Connect with Patients', desc: 'ผู้ป่วยติดต่อโรงพยาบาลได้หลายช่องทาง ทั้งแอป ฟอร์ม และ Call Center' },
  { icon: 'ti-affiliate', title: 'Seamless Integration', desc: 'เชื่อมกับเว็บไซต์เดิมได้ลื่นไหล และคงเอกลักษณ์แบรนด์ไว้ครบ' },
  { icon: 'ti-calendar-check', title: 'Easy Bookings', desc: 'จองนัดตามเงื่อนไขที่ผู้ป่วยต้องการจริง ๆ' },
  { icon: 'ti-language', title: 'Language Support', desc: 'รองรับหลายภาษา สำหรับผู้ป่วยต่างชาติ' },
]

const featuredEN = {
  badge: 'Healthcare & Life Sciences', client: 'Sukhumvit Health Network',
  title: 'Patient Digital Ecosystem Mobile App',
  desc: 'Building a comprehensive healthcare mobile app, enabling patients to find doctors, book appointments, and access medical services across multiple languages.',
}
const featuredTH = {
  badge: 'Healthcare & Life Sciences', client: 'เครือโรงพยาบาลสุขุมวิท',
  title: 'แอปมือถือระบบสุขภาพดิจิทัล',
  desc: 'แอปมือถือด้านสุขภาพ ให้ผู้ป่วยค้นหาแพทย์ จองนัด และใช้บริการทางการแพทย์ได้หลายภาษา',
}

const groupsEN = [
  { label: 'FinTech', ids: [1, 5, 11] },
  { label: 'E-Commerce', ids: [2, 6, 12, 18, 34] },
  { label: 'Healthcare', ids: [3, 10] },
  { label: 'AI', ids: [4, 8] },
  { label: 'Enterprise', ids: [7, 9] },
  { label: 'F&B', ids: [13, 14, 22, 32, 39] },
  { label: 'Fitness & Wellness', ids: [15] },
  { label: 'Apparel & Uniforms', ids: [16] },
  { label: 'Manufacturing', ids: [17] },
  { label: 'Government & Public Sector', ids: [19, 21, 27, 28, 29, 30, 31] },
  { label: 'Retail & Shopping Mall', ids: [20, 36] },
  { label: 'Travel & Tourism', ids: [23] },
  { label: 'Construction & Real Estate', ids: [24, 41] },
  { label: 'Real Estate', ids: [25, 33] },
  { label: 'Telecommunications', ids: [26] },
  { label: 'Hospitality & Travel', ids: [35] },
  { label: 'Logistics & Marine', ids: [38] },
  { label: 'Beauty & Aesthetics', ids: [40, 42] },
]

const casesEN = [
  { id:1, tags:['FinTech'], client:'Leading Bank', title:'Digital Banking Super App', desc:'Redesigned mobile banking for 4 million users.', result:'+62% DAU' },
  { id:2, tags:['E-Commerce'], client:'Retail Group', title:'Omnichannel Retail Platform', desc:'Unified commerce connecting 2,000+ branches.', result:'3× Conversion' },
  { id:3, tags:['Healthcare'], client:'Hospital Group', title:'Patient Digital Ecosystem', desc:'End-to-end digital health system.', result:'-40% No-show' },
  { id:4, tags:['AI'], client:'Insurance Company', title:'AI Document Intelligence', desc:'AI document processing, reduced manual work by 80%.', result:'-80% Processing' },
  { id:5, tags:['FinTech'], client:'FinTech Startup', title:'Payment Gateway Platform', desc:'Handles 500K transactions per day.', result:'99.97% Success' },
  { id:6, tags:['E-Commerce'], client:'Retail Chain', title:'Grocery Delivery App', desc:'30-minute delivery with real-time inventory.', result:'4.8★ App Store' },
  { id:7, tags:['Enterprise'], client:'Factory (500 staff)', title:'ERP & Workforce Management', desc:'Full ERP covering Finance, HR, Inventory.', result:'-28% OpEx' },
  { id:8, tags:['AI'], client:'Online Academy', title:'AI-powered EdTech Platform', desc:'Personalised AI tutor for 50K learners.', result:'4× Completion' },
  { id:9, tags:['Enterprise'], client:'Express Logistics', title:'Logistics & Fleet Management', desc:'Last-mile system for 3,000 drivers.', result:'97% On-time' },
  { id:10, tags:['Healthcare'], client:'Health Platform', title:'Telemedicine & Mental Health', desc:'Video consultation + mood tracking.', result:'92% Completion' },
  { id:11, tags:['FinTech'], client:'Insurance Group', title:'InsurTech Claims Platform', desc:'AI claims processing, 73% time reduction.', result:'73% Faster' },
  { id:12, tags:['E-Commerce'], client:'Fashion Retailer', title:'Personalization Engine', desc:'AI product recommendation increased AOV by 45%.', result:'+45% AOV' },
  { id:13, tags:['F&B'], client:'Savelberg Restaurant', title:'Michelin-Starred Restaurant Website', desc:'New bilingual website and content direction for a Michelin-starred French restaurant.', result:'New Website', slug:'savelberg' },
  { id:14, tags:['F&B'], client:'OVO', title:'Ice Cream Brand Website', desc:'New website for an ice cream and dessert brand, with online ordering and marketing content direction.', result:'New Website', slug:'ovo' },
  { id:15, tags:['Fitness & Wellness'], client:'BASE', title:'Fitness Studio Website', desc:'New website for a fitness studio with online class booking and trainer profiles.', result:'New Website', slug:'base' },
  { id:16, tags:['Apparel & Uniforms'], client:'Blue Bear', title:'Medical Uniform Manufacturer Website', desc:'New website with a product catalog and B2B order-inquiry flow for hospital and clinic customers.', result:'New Website', slug:'blue-bear' },
  { id:17, tags:['Manufacturing'], client:'Thai Metal Aluminium', title:'Precision Manufacturing Website', desc:'New corporate website presenting manufacturing capabilities and quality standards to industrial customers.', result:'New Website', slug:'thai-metal-aluminium' },
  { id:18, tags:['E-Commerce'], client:'VERA', title:'Bag Brand E-Commerce Website', desc:'New e-commerce website for a self-manufactured bag brand, with cart and checkout for nationwide sales.', result:'New Website', slug:'vera' },
  { id:19, tags:['Government & Public Sector'], client:'NFI – National Food Institute', title:'National Food Institute Website', desc:'New website organizing lab services and research for a public food-research institute.', result:'New Website', slug:'nfi' },
  { id:20, tags:['Retail & Shopping Mall'], client:'MBK Center', title:'MBK Center Mobile App', desc:'New mobile app letting shoppers find stores, promotions, and member perks in one place.', result:'New App', slug:'mbk' },
  { id:21, tags:['Government & Public Sector'], client:'DITP', title:'DITP Export Promotion Mobile App', desc:'New version of an export-promotion app, built on an earlier version we developed, for Thai exporters.', result:'New App', slug:'ditp' },
  { id:22, tags:['F&B'], client:'Sra Bua by Kiin Kiin', title:'Fine-Dining Restaurant Website', desc:'New bilingual website with online reservations for a modern Thai fine-dining restaurant.', result:'New Website', slug:'sra-bua' },
  { id:23, tags:['Travel & Tourism'], client:'World Surprise Travel', title:'Website, Branding & AI CRM', desc:'New brand identity, website, and AI CRM for a tour company managing travel packages and customers.', result:'New Website', slug:'world-surprise-travel' },
  { id:24, tags:['Construction & Real Estate'], client:'Awii House', title:'Home Builder Website with CRM', desc:'New website and CRM for a home-building company, tracking customers from consultation to contract.', result:'New Website', slug:'awii-house' },
  { id:25, tags:['Real Estate'], client:'Canapaya Residences', title:'Website, Brand CI & Real Estate CRM', desc:'New brand identity, website, and a dedicated CRM for a luxury riverside residential project.', result:'New Website', slug:'canapaya-residences' },
  { id:26, tags:['Telecommunications'], client:'RFS', title:'Website with AI CRM', desc:'New website and AI CRM for a Singapore-based telecom infrastructure and smart-city solutions provider.', result:'New Website', slug:'rfs' },
  { id:27, tags:['Government & Public Sector'], client:'Excise Department', title:'Tax Inspection App', desc:'New mobile app for field officers to verify excise tax payments, integrated with data from related agencies.', result:'New App', slug:'excise-department' },
  { id:28, tags:['Government & Public Sector'], client:'ITAGC', title:'Government Contractor Integrity & Transparency Website', desc:'UX/UI design followed by a new website for a body assessing the integrity and transparency of government contractors.', result:'New Website', slug:'itagc' },
  { id:29, tags:['Government & Public Sector'], client:'Department of Water Resources', title:'Mobile App, Rebuilt with AI', desc:'New AI capabilities built into an app we developed for the department four years earlier, for water resource management.', result:'New App', slug:'department-of-water-resources' },
  { id:30, tags:['Government & Public Sector'], client:'Royal Thai Police Immigration Bureau', title:'AI-Powered Immigration Inspection App', desc:'New mobile app with an AI module for document and facial verification at entry and exit points.', result:'New App', slug:'immigration-bureau' },
  { id:31, tags:['Government & Public Sector'], client:'Ministry of Culture', title:"Culture & Heritage Mobile App", desc:"New mobile app bringing the ministry's existing website content to a wider audience.", result:'New App', slug:'ministry-of-culture' },
  { id:32, tags:['F&B'], client:'BBK Menu', title:'Restaurant Discovery Website', desc:"UX/UI design followed by a new website for discovering Bangkok's best restaurants and must-try dishes.", result:'New Website', slug:'bbk-menu' },
  { id:33, tags:['Real Estate'], client:"Sena Development", title:"CRM & AI System for a Real-Estate Developer", desc:"New CRM and AI system for a real-estate developer to manage customers and sales data.", result:"New System", slug:"sena-development" },
  { id:34, tags:['E-Commerce'], client:"PAÑPURI", title:"Wellness & Skincare E-Commerce on Shopify", desc:"UX/UI design followed by a new Shopify e-commerce website for a Thai wellness and skincare brand.", result:"New Website", slug:"panpuri" },
  { id:35, tags:['Hospitality & Travel'], client:"Shanghai Mansion Bangkok", title:"Boutique Hotel Website with Online Booking", desc:"New hotel website with an online room-booking system for a boutique hotel.", result:"New Website", slug:"shanghai-mansion-bangkok" },
  { id:36, tags:['Retail & Shopping Mall'], client:"Jampha Shopping Mall", title:"E-Commerce Website with AI for Operations", desc:"New e-commerce website and AI system supporting operations and customers for a community shopping mall.", result:"New Website", slug:"jampha-shopping-mall" },
  { id:38, tags:['Logistics & Marine'], client:"Prima Marine", title:"Corporate Website for a Marine Logistics Company", desc:"A corporate website presenting the fleet, services and credibility of a publicly listed marine logistics company.", result:"New Website", slug:"prima-marine" },
  { id:39, tags:['F&B'], client:"Baan Khanitha Thai Cuisine", title:"Website for a Renowned Thai Restaurant", desc:"UX/UI design and a website that carries the warmth and heritage of a well-known Thai fine-dining restaurant.", result:"New Website", slug:"baan-khanitha" },
  { id:40, tags:['Beauty & Aesthetics'], client:"DSK", title:"Website, UX/UI and AI-Assisted CRM for an Aesthetic Clinic", desc:"Business consulting, website design and UX/UI, plus AI-assisted CRM for an aesthetic surgery business.", result:"Website + CRM", slug:"dsk" },
  { id:41, tags:['Construction & Real Estate'], client:"Admire", title:"Website, UX/UI and AI-Assisted CRM for a Home Builder", desc:"UX/UI design and a new website for a custom home builder, with AI-assisted CRM to manage leads.", result:"Website + CRM", slug:"admire" },
  { id:42, tags:['Beauty & Aesthetics'], client:"MEKO International Hospital", title:"Brand, Website and Graphics for an Aesthetic Hospital", desc:"Website design and UX/UI, graphic design and brand CI for a renowned aesthetic surgery hospital.", result:"Brand + Website", slug:"meko-international-hospital" },
]

const groupsTH = groupsEN
const casesTH = [
  { id:1, tags:['FinTech'], client:'ธนาคารชั้นนำ', title:'Digital Banking Super App', desc:'ออกแบบแอปธนาคารใหม่สำหรับผู้ใช้ 4 ล้านคน', result:'+62% DAU' },
  { id:2, tags:['E-Commerce'], client:'เครือค้าปลีก', title:'Omnichannel Retail Platform', desc:'ระบบขายหลายช่องทาง เชื่อม 2,000+ สาขา', result:'3× Conversion' },
  { id:3, tags:['Healthcare'], client:'กลุ่มโรงพยาบาล', title:'Patient Digital Ecosystem', desc:'ระบบสุขภาพดิจิทัลตั้งแต่ค้นหาแพทย์ถึงติดตามผล', result:'-40% No-show' },
  { id:4, tags:['AI'], client:'บริษัทประกันภัย', title:'AI Document Intelligence', desc:'AI อ่านเอกสารอัตโนมัติ ลดงานคนทำเองลง 80%', result:'-80% Processing' },
  { id:5, tags:['FinTech'], client:'FinTech Startup', title:'Payment Gateway Platform', desc:'รองรับ 500,000 รายการต่อวัน', result:'99.97% Success' },
  { id:6, tags:['E-Commerce'], client:'Retail Chain', title:'Grocery Delivery App', desc:'ส่งของใน 30 นาที สต๊อกอัปเดตเรียลไทม์', result:'4.8★ App Store' },
  { id:7, tags:['Enterprise'], client:'โรงงาน 500 คน', title:'ERP & Workforce Management', desc:'ERP รวมการเงิน HR และสต๊อก', result:'-28% OpEx' },
  { id:8, tags:['AI'], client:'Online Academy', title:'AI-powered EdTech Platform', desc:'AI ติวเตอร์เฉพาะบุคคล สำหรับผู้เรียน 50,000 คน', result:'4× Completion' },
  { id:9, tags:['Enterprise'], client:'Express Logistics', title:'Logistics & Fleet Management', desc:'ขนส่งช่วงสุดท้ายสำหรับคนขับ 3,000 คน', result:'97% On-time' },
  { id:10, tags:['Healthcare'], client:'Health Platform', title:'Telemedicine & Mental Health', desc:'Video Consultation + Mood Tracking', result:'92% Completion' },
  { id:11, tags:['FinTech'], client:'Insurance Group', title:'InsurTech Claims Platform', desc:'AI ช่วยประมวลผลเคลม ลดเวลา 73%', result:'73% Faster' },
  { id:12, tags:['E-Commerce'], client:'Fashion Retailer', title:'Personalization Engine', desc:'AI แนะนำสินค้า เพิ่มยอดต่อออเดอร์ 45%', result:'+45% AOV' },
  { id:13, tags:['F&B'], client:'Savelberg Restaurant', title:'เว็บไซต์ร้านอาหารมิชลินสตาร์', desc:'เว็บไซต์สองภาษาและแนวทางทำคอนเทนต์ สำหรับร้านอาหารฝรั่งเศสระดับมิชลินสตาร์', result:'เว็บไซต์ใหม่', slug:'savelberg' },
  { id:14, tags:['F&B'], client:'OVO', title:'เว็บไซต์แบรนด์ไอศกรีม', desc:'เว็บไซต์ใหม่ของแบรนด์ไอศกรีมและของหวาน มีระบบสั่งซื้อออนไลน์ และแนวทางทำคอนเทนต์การตลาด', result:'เว็บไซต์ใหม่', slug:'ovo' },
  { id:15, tags:['Fitness & Wellness'], client:'BASE', title:'เว็บไซต์สตูดิโอฟิตเนส', desc:'เว็บไซต์ใหม่ของสตูดิโอฟิตเนส มีระบบจองคลาสออนไลน์และข้อมูลเทรนเนอร์', result:'เว็บไซต์ใหม่', slug:'base' },
  { id:16, tags:['Apparel & Uniforms'], client:'Blue Bear', title:'เว็บไซต์ผู้ผลิตชุดยูนิฟอร์มทางการแพทย์', desc:'เว็บไซต์ใหม่ มีแคตตาล็อกสินค้าและช่องทางติดต่อสั่งซื้อสำหรับลูกค้าองค์กร เช่น โรงพยาบาลและคลินิก', result:'เว็บไซต์ใหม่', slug:'blue-bear' },
  { id:17, tags:['Manufacturing'], client:'Thai Metal Aluminium', title:'เว็บไซต์โรงงานผลิตชิ้นส่วนอะลูมิเนียม', desc:'เว็บไซต์องค์กรใหม่ แสดงความสามารถด้านการผลิตและมาตรฐานคุณภาพให้ลูกค้าอุตสาหกรรม', result:'เว็บไซต์ใหม่', slug:'thai-metal-aluminium' },
  { id:18, tags:['E-Commerce'], client:'VERA', title:'เว็บไซต์อีคอมเมิร์ซแบรนด์กระเป๋า', desc:'เว็บไซต์อีคอมเมิร์ซใหม่ของแบรนด์กระเป๋าที่ผลิตและขายออนไลน์ มีตะกร้าสินค้าและระบบชำระเงิน', result:'เว็บไซต์ใหม่', slug:'vera' },
  { id:19, tags:['Government & Public Sector'], client:'NFI สถาบันอาหาร', title:'เว็บไซต์สถาบันอาหาร', desc:'เว็บไซต์ใหม่ที่จัดบริการห้องปฏิบัติการและงานวิจัยของสถาบันวิจัยอาหารภาครัฐให้เป็นระเบียบ', result:'เว็บไซต์ใหม่', slug:'nfi' },
  { id:20, tags:['Retail & Shopping Mall'], client:'MBK Center', title:'แอปมือถือศูนย์การค้า MBK', desc:'แอปมือถือใหม่ ให้ลูกค้าค้นหาร้านค้า โปรโมชัน และสิทธิพิเศษได้ในที่เดียว', result:'แอปใหม่', slug:'mbk' },
  { id:21, tags:['Government & Public Sector'], client:'DITP', title:'แอปมือถือส่งเสริมผู้ประกอบการส่งออก DITP', desc:'แอปเวอร์ชันใหม่ ต่อยอดจากแอปที่เราเคยทำให้ เพื่อช่วยผู้ประกอบการส่งออกไทย', result:'แอปใหม่', slug:'ditp' },
  { id:22, tags:['F&B'], client:'Sra Bua by Kiin Kiin', title:'เว็บไซต์ร้านอาหารไฟน์ไดนิ่ง', desc:'เว็บไซต์สองภาษา มีระบบจองโต๊ะออนไลน์ สำหรับร้านอาหารไทยโมเดิร์นระดับไฟน์ไดนิ่ง', result:'เว็บไซต์ใหม่', slug:'sra-bua' },
  { id:23, tags:['Travel & Tourism'], client:'World Surprise Travel', title:'เว็บไซต์ แบรนด์ และ AI CRM', desc:'ทำแบรนด์ใหม่ เว็บไซต์ และ AI CRM ให้บริษัททัวร์ ใช้จัดการแพ็กเกจทัวร์และลูกค้า', result:'เว็บไซต์ใหม่', slug:'world-surprise-travel' },
  { id:24, tags:['Construction & Real Estate'], client:'Awii House', title:'เว็บไซต์และ CRM สำหรับบริษัทรับสร้างบ้าน', desc:'เว็บไซต์และ CRM ใหม่ของบริษัทรับสร้างบ้าน ติดตามลูกค้าตั้งแต่ปรึกษาจนถึงเซ็นสัญญา', result:'เว็บไซต์ใหม่', slug:'awii-house' },
  { id:25, tags:['Real Estate'], client:'Canapaya Residences', title:'เว็บไซต์ แบรนด์ CI และ CRM อสังหาริมทรัพย์', desc:'ทำแบรนด์ เว็บไซต์ และ CRM เฉพาะทางให้โครงการที่พักอาศัยหรูริมแม่น้ำ', result:'เว็บไซต์ใหม่', slug:'canapaya-residences' },
  { id:26, tags:['Telecommunications'], client:'RFS', title:'เว็บไซต์และ AI CRM', desc:'เว็บไซต์และ AI CRM ใหม่ของผู้ให้บริการโครงสร้างพื้นฐานโทรคมนาคมและสมาร์ทซิตี้จากสิงคโปร์', result:'เว็บไซต์ใหม่', slug:'rfs' },
  { id:27, tags:['Government & Public Sector'], client:'กรมสรรพสามิต', title:'แอปตรวจสอบภาษี', desc:'แอปมือถือใหม่ให้เจ้าหน้าที่ใช้ตรวจสอบภาษีสรรพสามิต และเชื่อมข้อมูลกับหน่วยงานที่เกี่ยวข้อง', result:'แอปใหม่', slug:'excise-department' },
  { id:28, tags:['Government & Public Sector'], client:'ITAGC', title:'เว็บไซต์ตรวจสอบความโปร่งใสของผู้รับเหมาภาครัฐ', desc:'ออกแบบ UX/UI แล้วพัฒนาเว็บไซต์ใหม่ ให้หน่วยงานใช้ประเมินความซื่อตรงและความโปร่งใสของผู้รับเหมาภาครัฐ', result:'เว็บไซต์ใหม่', slug:'itagc' },
  { id:29, tags:['Government & Public Sector'], client:'กรมทรัพยากรน้ำ', title:'แอปมือถือต่อยอดด้วย AI', desc:'ต่อยอดแอปที่เราเคยทำให้เมื่อ 4 ปีก่อน โดยเพิ่ม AI สำหรับบริหารจัดการทรัพยากรน้ำ', result:'แอปใหม่', slug:'department-of-water-resources' },
  { id:30, tags:['Government & Public Sector'], client:'สำนักงานตรวจคนเข้าเมือง', title:'แอปตรวจคนเข้าเมืองที่ใช้ AI', desc:'แอปมือถือใหม่ มี AI ช่วยตรวจเอกสารและใบหน้าที่จุดตรวจคนเข้าเมือง', result:'แอปใหม่', slug:'immigration-bureau' },
  { id:31, tags:['Government & Public Sector'], client:'กระทรวงวัฒนธรรม', title:'แอปงานด้านวัฒนธรรม', desc:'แอปมือถือใหม่ นำเนื้อหาจากเว็บไซต์เดิมของกระทรวงไปถึงประชาชนได้มากขึ้น', result:'แอปใหม่', slug:'ministry-of-culture' },
  { id:32, tags:['F&B'], client:'BBK Menu', title:'เว็บไซต์แนะนำร้านอาหาร', desc:'ออกแบบ UX/UI แล้วพัฒนาเว็บไซต์ใหม่ สำหรับค้นหาร้านอาหารและเมนูเด็ดในกรุงเทพฯ', result:'เว็บไซต์ใหม่', slug:'bbk-menu' },
  { id:33, tags:['Real Estate'], client:"Sena Development", title:"ระบบ CRM และ AI สำหรับผู้พัฒนาอสังหาริมทรัพย์", desc:"ระบบ CRM และ AI ใหม่ ให้ผู้พัฒนาอสังหาริมทรัพย์ใช้จัดการลูกค้าและข้อมูลการขาย", result:"ระบบใหม่", slug:"sena-development" },
  { id:34, tags:['E-Commerce'], client:"PAÑPURI", title:"เว็บไซต์อีคอมเมิร์ซบน Shopify แบรนด์เวลเนสและสกินแคร์", desc:"ออกแบบ UX/UI แล้วพัฒนาเว็บไซต์อีคอมเมิร์ซบน Shopify ให้แบรนด์เวลเนสและสกินแคร์ไทย", result:"เว็บไซต์ใหม่", slug:"panpuri" },
  { id:35, tags:['Hospitality & Travel'], client:"Shanghai Mansion Bangkok", title:"เว็บไซต์โรงแรมบูติก มีระบบจองห้องพัก", desc:"เว็บไซต์ใหม่ของโรงแรมบูติก มีระบบจองห้องพักออนไลน์", result:"เว็บไซต์ใหม่", slug:"shanghai-mansion-bangkok" },
  { id:36, tags:['Retail & Shopping Mall'], client:"Jampha Shopping Mall", title:"เว็บไซต์อีคอมเมิร์ซพร้อม AI ช่วยงานหลังบ้าน", desc:"เว็บไซต์อีคอมเมิร์ซและระบบ AI ใหม่ ช่วยงานหลังบ้านและดูแลลูกค้าของศูนย์การค้าชุมชน", result:"เว็บไซต์ใหม่", slug:"jampha-shopping-mall" },
  { id:38, tags:['Logistics & Marine'], client:"Prima Marine", title:"เว็บไซต์องค์กรสำหรับธุรกิจขนส่งทางทะเล", desc:"เว็บไซต์องค์กรที่แสดงกองเรือ บริการ และความน่าเชื่อถือของบริษัทมหาชนด้านขนส่งทางทะเล", result:"เว็บไซต์ใหม่", slug:"prima-marine" },
  { id:39, tags:['F&B'], client:"Baan Khanitha Thai Cuisine", title:"เว็บไซต์ร้านอาหารไทยชื่อดัง", desc:"ออกแบบ UX/UI และพัฒนาเว็บไซต์ที่สื่อถึงความอบอุ่นและเอกลักษณ์ของร้านอาหารไทยชั้นนำ", result:"เว็บไซต์ใหม่", slug:"baan-khanitha" },
  { id:40, tags:['Beauty & Aesthetics'], client:"DSK", title:"เว็บไซต์ UX/UI และ AI CRM สำหรับคลินิกศัลยกรรมความงาม", desc:"ให้คำปรึกษาธุรกิจ ออกแบบเว็บไซต์และ UX/UI พร้อม CRM ที่มี AI ช่วย สำหรับธุรกิจศัลยกรรมความงาม", result:"เว็บไซต์ + CRM", slug:"dsk" },
  { id:41, tags:['Construction & Real Estate'], client:"Admire", title:"เว็บไซต์ UX/UI และ AI CRM สำหรับธุรกิจรับสร้างบ้าน", desc:"ออกแบบ UX/UI และพัฒนาเว็บไซต์ใหม่สำหรับธุรกิจรับสร้างบ้าน พร้อม CRM ที่มี AI ช่วยจัดการลูกค้าที่สนใจ", result:"เว็บไซต์ + CRM", slug:"admire" },
  { id:42, tags:['Beauty & Aesthetics'], client:"MEKO International Hospital", title:"แบรนด์ เว็บไซต์ และกราฟิกสำหรับโรงพยาบาลศัลยกรรมความงาม", desc:"ออกแบบเว็บไซต์ UX/UI กราฟิก และ Brand CI สำหรับโรงพยาบาลศัลยกรรมความงามชื่อดัง", result:"แบรนด์ + เว็บไซต์", slug:"meko-international-hospital" },
]

const gradients = [
  'linear-gradient(135deg, var(--purple) 0%, var(--purple-light) 100%)',
  'linear-gradient(135deg, var(--purple-light) 0%, var(--lime) 100%)',
  'linear-gradient(135deg, var(--purple-dark) 0%, var(--purple) 100%)',
  'linear-gradient(135deg, var(--purple) 0%, var(--lime) 100%)',
]

function PhoneMock({ variant }: { variant: 'home' | 'doctor' }) {
  return (
    <div className="w-[190px] h-[390px] rounded-[32px] p-1.5 shrink-0" style={{ background: '#0A0A0F', boxShadow: '0 30px 60px -20px rgba(0,0,0,0.5)' }}>
      <div className="w-full h-full rounded-[26px] overflow-hidden relative" style={{ background: '#fff' }}>
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full" style={{ background: '#0A0A0F', zIndex: 2 }} />
        {variant === 'home' ? (
          <div className="pt-9 px-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full" style={{ background: 'var(--purple-bg)' }} />
              <div className="h-2 w-20 rounded" style={{ background: '#EDEDF5' }} />
            </div>
            <div className="h-7 rounded-lg mb-3" style={{ background: '#F5F5FA' }} />
            <div className="grid grid-cols-2 gap-2 mb-3">
              {[0,1,2,3].map(i => (
                <div key={i} className="h-14 rounded-xl flex items-center justify-center" style={{ background: i % 2 === 0 ? 'var(--purple-bg)' : 'var(--lime-bg)' }}>
                  <div className="w-5 h-5 rounded" style={{ background: i % 2 === 0 ? 'var(--purple)' : 'var(--lime-dark)', opacity: 0.6 }} />
                </div>
              ))}
            </div>
            <div className="h-2 w-16 rounded mb-2" style={{ background: '#EDEDF5' }} />
            <div className="h-20 rounded-xl" style={{ background: 'linear-gradient(135deg, var(--purple-bg), var(--lime-bg))' }} />
          </div>
        ) : (
          <div className="pt-9 px-3">
            <div className="h-20 rounded-xl mb-3" style={{ background: 'linear-gradient(135deg, var(--purple), var(--purple-light))' }} />
            <div className="h-2.5 w-24 rounded mb-2" style={{ background: '#0A0A0F', opacity: 0.75 }} />
            <div className="h-2 w-32 rounded mb-4" style={{ background: '#EDEDF5' }} />
            <div className="h-2 w-14 rounded mb-2" style={{ background: '#CFCFE0' }} />
            <div className="h-2 w-28 rounded mb-1.5" style={{ background: '#EDEDF5' }} />
            <div className="h-2 w-20 rounded mb-5" style={{ background: '#EDEDF5' }} />
            <div className="h-9 rounded-full" style={{ background: 'var(--lime-dark)' }} />
          </div>
        )}
      </div>
    </div>
  )
}

export default function CaseStudiesPageClient({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any
  const featureCards = isEN ? featureCardsEN : featureCardsTH
  const featured = isEN ? featuredEN : featuredTH
  const groups = isEN ? groupsEN : groupsTH
  const cases = isEN ? casesEN : casesTH
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const scrollRow = (label: string, dir: 1 | -1) => {
    const el = rowRefs.current[label]
    if (el) el.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }

  const left = featureCards.slice(0, 3)
  const right = featureCards.slice(3, 6)

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
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-16">
            <div className="mb-16">
              <p className="t-label mb-5">{isEN ? 'Case Studies' : 'Case Studies'}</p>
              <h1 className="t-display text-[clamp(3rem,7vw,6.5rem)] leading-relaxed mb-6" style={{ color: '#fff' }}>
                {isEN ? <>Real work,<br /><span style={{ background:'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Real results</span></> : <>ผลงานจริง<br /><span style={{ background:'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>ผลลัพธ์ที่วัดได้</span></>}
              </h1>
              <p className="text-sm max-w-lg" style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 400 }}>
                {isEN ? "How we've helped clients across industries solve complex challenges with technology." : 'ตัวอย่างงานที่เราช่วยลูกค้าหลายอุตสาหกรรมแก้ปัญหายาก ๆ ด้วยเทคโนโลยี'}
              </p>
            </div>

            {/* Featured case study — cover art + 2 rows of feature cards */}
            <div className="rounded-[32px] overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="relative py-16 px-6 lg:px-16" style={{ background: 'linear-gradient(160deg, #171232 0%, #1B1A33 100%)' }}>
                <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                  <div className="grid grid-rows-2 gap-5 order-2 lg:order-1">
                    {left.map((c) => (
                      <div key={c.title} className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: 'rgba(123,110,246,0.18)' }}>
                          <i className={`ti ${c.icon}`} style={{ fontSize: 18, color: 'var(--purple-light)' }} aria-hidden="true" />
                        </div>
                        <p className="mb-1" style={{ color: '#fff', fontWeight: 500, fontSize: '0.95rem' }}>{c.title}</p>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 400, fontSize: '0.8rem', lineHeight: 1.5 }}>{c.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-end justify-center gap-4 order-1 lg:order-2">
                    <div className="-rotate-6 -mr-6 mb-4"><PhoneMock variant="home" /></div>
                    <div className="rotate-3"><PhoneMock variant="doctor" /></div>
                  </div>

                  <div className="grid grid-rows-2 gap-5 order-3">
                    {right.map((c) => (
                      <div key={c.title} className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: 'rgba(196,232,106,0.18)' }}>
                          <i className={`ti ${c.icon}`} style={{ fontSize: 18, color: 'var(--lime)' }} aria-hidden="true" />
                        </div>
                        <p className="mb-1" style={{ color: '#fff', fontWeight: 500, fontSize: '0.95rem' }}>{c.title}</p>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 400, fontSize: '0.8rem', lineHeight: 1.5 }}>{c.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-10 lg:p-14" style={{ background: '#08070F' }}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full text-xs" style={{ background: 'rgba(123,110,246,0.15)', color: 'var(--purple-light)', fontWeight: 400 }}>{featured.badge}</span>
                  <span className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 400 }}>
                    <i className="ti ti-building-hospital" style={{ fontSize: 15 }} aria-hidden="true" /> {featured.client}
                  </span>
                </div>
                <h2 className="t-display text-[clamp(1.7rem,3vw,2.6rem)] leading-tight mb-5" style={{ color: 'var(--lime)' }}>{featured.title}</h2>
                <p className="max-w-2xl mb-8" style={{ color: 'rgba(255,255,255,0.65)', fontWeight: 400, fontSize: '0.95rem', lineHeight: 1.6 }}>{featured.desc}</p>
                <Link href={`/${lang}/work`} className="inline-flex items-center gap-2 text-base transition-all hover:gap-3" style={{ color: 'var(--lime)', fontWeight: 400 }}>
                  {isEN ? 'View Case Study' : 'ดูรายละเอียด'} <i className="ti ti-arrow-right" style={{ fontSize: 15 }} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Grouped by industry — same horizontal-scroll pattern as Blog */}
        <section className="py-20 lg:py-28" style={{ background: '#08070F' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-16">
            {groups.map((g) => {
              const items = cases.filter(c => c.tags.includes(g.label) && (c as any).slug)
              if (!items.length) return null
              return (
                <div key={g.label}>
                  <div className="flex items-end justify-between mb-8">
                    <div>
                      <h2 className="t-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none mb-2" style={{ color: '#fff' }}>{g.label}</h2>
                      <p className="text-sm" style={{ color: 'var(--lime)', fontWeight: 400 }}>
                        {isEN ? 'Case studies from this industry.' : 'ผลงานในอุตสาหกรรมนี้'}
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 shrink-0">
                      <button
                        aria-label={isEN ? 'Scroll left' : 'เลื่อนซ้าย'}
                        onClick={() => scrollRow(g.label, -1)}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                        style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                      >
                        <i className="ti ti-chevron-left" style={{ fontSize: 16, color: '#fff' }} aria-hidden="true" />
                      </button>
                      <button
                        aria-label={isEN ? 'Scroll right' : 'เลื่อนขวา'}
                        onClick={() => scrollRow(g.label, 1)}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                        style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                      >
                        <i className="ti ti-chevron-right" style={{ fontSize: 16, color: '#fff' }} aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div
                    ref={(el) => { rowRefs.current[g.label] = el }}
                    className="no-scrollbar flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory"
                  >
                    {items.map((c, i) => {
                      const cover = (c as any).slug ? getCaseStudy((c as any).slug)?.[lang]?.heroImage : undefined
                      return (
                      <Link
                        key={c.id}
                        href={(c as any).slug ? `/${lang}/case-studies/${(c as any).slug}` : `/${lang}/work`}
                        className="group shrink-0 w-[280px] snap-start rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                      >
                        <div className="h-32 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden" style={cover ? undefined : { background: gradients[i % gradients.length] }}>
                          {cover ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={cover} alt={c.title} loading="lazy" width={280} height={128} className="absolute inset-0 w-full h-full object-cover" />
                          ) : (
                            <i className="ti ti-photo" style={{ fontSize: 22, color: '#fff', opacity: 0.45 }} aria-hidden="true" />
                          )}
                          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs" style={{ background: 'rgba(255,255,255,0.9)', color: 'var(--purple)', fontWeight: 500 }}>{c.result}</span>
                        </div>
                        <p className="text-xs mb-1.5" style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 400 }}>{c.client}</p>
                        <h3 className="text-white leading-snug mb-2 group-hover:text-[var(--purple-light)] transition-colors" style={{ fontWeight: 500, fontSize: '0.98rem' }}>{c.title}</h3>
                        <p style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 400, fontSize: '0.8rem', lineHeight: 1.5 }} className="mb-4 line-clamp-2">{c.desc}</p>
                        <span className="text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all" style={{ color: 'var(--purple-light)', fontWeight: 400 }}>
                          {isEN ? 'View Case Study' : 'ดูรายละเอียด'} <i className="ti ti-arrow-up-right" style={{ fontSize: 13 }} aria-hidden="true" />
                        </span>
                      </Link>
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
          <div className="relative max-w-4xl mx-auto px-6 lg:px-10 py-24 text-center">
            <p className="text-sm tracking-widest uppercase mb-6" style={{ color: '#fff', fontWeight: 500 }}>{isEN ? 'Have a project in mind?' : 'มีโปรเจกต์ในใจไหม?'}</p>
            <h2 className="t-display text-[clamp(1.75rem,4vw,3rem)] mb-6 leading-normal md:whitespace-nowrap" style={{ background: 'linear-gradient(135deg, var(--purple-light) 0%, #53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {isEN ? <>Let's build your next case study</> : <>มาทำโปรเจกต์ถัดไปด้วยกัน</>}
            </h2>
            <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}>
              {isEN ? 'Talk to Us' : 'คุยกับเรา'}
              <i className="ti ti-arrow-right" style={{ fontSize: 14 }} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
