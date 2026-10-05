// AUTO-GENERATED content file. Edit the prose here directly if needed — this is a
// one-time generation, not re-run automatically.
//
// Work pages (/work/[slug]) are the deliverables/technical/SEO-oriented counterpart
// to the narrative case studies in lib/case-studies-data.ts. Same slug, 1:1 mapping,
// deliberately different prose, structure, and angle from the matching case study.

export type WorkSnapshotItem = { label: string; value: string }
export type WorkFaqItem = { question: string; answer: string }
export type WorkApproachStep = { title: string; desc: string }

export type WorkContent = {
  metaTitle: string
  metaDescription: string
  h1: string
  client: string
  badge: string
  servicesProvided: string[]
  intro: string
  snapshot: WorkSnapshotItem[]
  objectivesHeading: string
  objectives: string[]
  deliverablesHeading: string
  deliverables: string[]
  approachHeading: string
  approach: WorkApproachStep[]
  techHeading: string
  tech: string[]
  resultsHeading: string
  results: string[]
  faqHeading: string
  faq: WorkFaqItem[]
  backLabel: string
  servicesLabel: string
  ogImage: string
}

export type WorkProject = {
  slug: string
  industryTag: string
  year: string
  th: WorkContent
  en: WorkContent
}

export const workProjects: WorkProject[] = [
  {
    "slug": "savelberg",
    "industryTag": "F&B",
    "year": "2025",
    "th": {
      "metaTitle": "Savelberg Restaurant เว็บไซต์ — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ เว็บไซต์ Savelberg Restaurant โดย Haliviq พร้อม ออกแบบเว็บไซต์ (UX/UI) พัฒนาเว็บไซต์ กำกับทิศทางภาพถ่าย...",
      "h1": "Savelberg Restaurant — สรุปงานเว็บไซต์และประสบการณ์ลูกค้าดิจิทัล",
      "client": "Savelberg Restaurant",
      "badge": "F&B",
      "servicesProvided": [
        "ออกแบบเว็บไซต์ (UX/UI)",
        "พัฒนาเว็บไซต์",
        "กำกับทิศทางภาพถ่าย & คอนเทนต์",
        "ช่วยวางกลยุทธ์การตลาดดิจิทัล",
        "แชทบอท AI ตอบคำถามลูกค้า"
      ],
      "intro": "Savelberg Restaurant ต้องการมากกว่าเมนูออนไลน์ — ต้องการหน้าด่านดิจิทัลที่ถ่ายทอดมาตรฐานไฟน์ไดนิ่งได้ตั้งแต่วินาทีแรกที่ผู้ใช้เข้าชม Haliviq ส่งมอบเว็บไซต์สองภาษาพร้อมระบบจองโต๊ะ สร้างจากภาพถ่ายอาหารความละเอียดสูง โครงสร้างเมนูชิมที่ชัดเจน และจังหวะการจัดวางที่สื่อถึงคุณภาพก่อนอ่านข้อความสักคำ บทความนี้สรุปงานที่ส่งมอบ เทคโนโลยีเบื้องหลัง และผลลัพธ์ที่วัดได้ จากมุมมองด้านปฏิบัติการร้านอาหารและวิศวกรรมเว็บ",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "F&B"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "5"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "แทนที่เว็บไซต์เดิมที่ล้าสมัยหรือไม่มีอยู่ ด้วยเว็บไซต์ที่สมกับระดับราคาและมาตรฐานการบริการของร้าน",
        "ลดความยุ่งยากในการจองผ่านโทรศัพท์ ด้วยช่องทางจองออนไลน์ที่เข้าถึงได้จากหน้าแรก",
        "มอบโครงสร้างคอนเทนต์ให้ทีมครัวและหน้าร้านอัปเดตเองได้โดยไม่ต้องพึ่งนักพัฒนา",
        "วางรากฐานให้ SEO เติบโตต่อเนื่องในคำค้นหาไฟน์ไดนิ่งที่มีการแข่งขันสูงในกรุงเทพฯ"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์สองภาษา (ไทย/อังกฤษ) ที่รองรับทุกขนาดหน้าจอ",
        "หน้าแรกและแกลเลอรีเมนูที่ขับเน้นด้วยภาพถ่ายความละเอียดสูง",
        "การนำเสนอเมนูชิม ไวน์ลิสต์ และเมนูตามฤดูกาลอย่างเป็นระบบ",
        "ระบบจองโต๊ะออนไลน์เชื่อมต่อโดยตรงจากหน้าหลัก",
        "หน้าเรื่องราวเชฟและแบรนด์สำหรับใช้ในงานสื่อและประชาสัมพันธ์",
        "แชทบอท AI ตอบคำถามเมนูและการจองได้ตลอด 24 ชั่วโมง"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "สำรวจและเก็บข้อมูลหน้างาน",
          "desc": "ลงพื้นที่ที่ร้านเพื่อสังเกตจังหวะการเสิร์ฟ การจัดจาน และการเคลื่อนไหวของแขก แล้วแปลงข้อมูลเหล่านั้นเป็นการตัดสินใจด้านเลย์เอาต์และภาพจริง ไม่ใช่การเดา"
        },
        {
          "title": "วางโครงสร้างข้อมูล",
          "desc": "จัดวางทุกหน้าที่ลูกค้าต้องการ — เมนู การจอง ที่ตั้ง เรื่องราว — ให้เข้าถึงได้ในจำนวนคลิกน้อยที่สุด"
        },
        {
          "title": "พัฒนาและเชื่อมต่อระบบ",
          "desc": "พัฒนาฝั่งหน้าเว็บ เชื่อมระบบจองโต๊ะ และปรับการโหลดภาพให้เว็บที่เน้นภาพถ่ายยังคงโหลดเร็ว"
        },
        {
          "title": "เปิดตัวและส่งมอบคอนเทนต์",
          "desc": "ส่งมอบโครงสร้างคอนเทนต์ที่แก้ไขได้ พร้อมเซสชันอบรมสั้นๆ ให้ทีมอัปเดตเมนูและภาพได้เอง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "Headless CMS สำหรับอัปเดตเมนูและคอนเทนต์",
        "Cloud hosting & CDN สำหรับส่งภาพ",
        "ระบบจองโต๊ะออนไลน์",
        "สถาปัตยกรรมคอนเทนต์สองภาษา",
        "พื้นฐาน SEO บนหน้าเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้เว็บไซต์ใหม่ตามกำหนดเวลา แทนที่เว็บไซต์เดิมที่ไม่สามารถรองรับการวางตำแหน่งแบรนด์ได้",
        "ช่องทางจองโต๊ะที่เข้าถึงได้ภายในสองคลิกจากทุกหน้า ลดการพึ่งพาการจองทางโทรศัพท์",
        "โครงสร้างคอนเทนต์ที่ร้านปรับให้ทันฤดูกาลได้เองโดยไม่ต้องพึ่งนักพัฒนาต่อเนื่อง",
        "พื้นฐาน SEO ทั้งเชิงเทคนิคและบนหน้าเว็บที่พร้อมเติบโตในคำค้นหาไฟน์ไดนิ่ง"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์ของ Savelberg Restaurant ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์ร้านอาหารสองภาษาที่เน้นภาพถ่ายแบบนี้ มักใช้เวลาสองถึงสามเดือนตั้งแต่เก็บข้อมูลจนถึงเปิดตัว ขึ้นอยู่กับความพร้อมของภาพถ่ายและเนื้อหา"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เว็บไซต์สร้างด้วย Next.js ฝั่งหน้าบ้าน ควบคู่กับ Headless CMS สำหรับคอนเทนต์ ติดตั้งบน Cloud hosting ที่มี CDN รองรับการโหลดภาพเร็ว พร้อมระบบจองโต๊ะโดยเฉพาะ"
        },
        {
          "question": "แนวทางนี้ปรับใช้กับแบรนด์ร้านอาหารอื่นได้ไหม",
          "answer": "ได้ โครงสร้างแบบเดียวกัน — เมนูเป็นศูนย์กลางการนำทาง ระบบจอง คอนเทนต์สองภาษา และแชทบอท AI เสริม — ปรับใช้ได้ดีกับแบรนด์ไฟน์ไดนิ่งหรือร้านอาหารหลายสาขาอื่นๆ"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/savelberg/cover.jpg"
    },
    "en": {
      "metaTitle": "Savelberg Restaurant Website Project — Haliviq",
      "metaDescription": "See the deliverables, tech stack, and results behind the Savelberg Restaurant website project — UX/UI Design, Web Development, Photography & Content Direct...",
      "h1": "Savelberg Restaurant — Website Build & Digital Guest Experience",
      "client": "Savelberg Restaurant",
      "badge": "F&B",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "Photography & Content Direction",
        "Digital Marketing Support",
        "AI Concierge Chatbot"
      ],
      "intro": "Savelberg Restaurant needed more than a menu online — it needed a digital front door that could carry a fine-dining reputation into the first few seconds of a visitor's browsing session. Haliviq delivered a bilingual, reservation-ready website built around high-resolution food photography, a clear tasting-menu structure, and the kind of pacing and whitespace that signals quality before a single word is read. This write-up breaks down the deliverables, the technology behind the build, and the measurable outcomes, from a restaurant-operations and web-engineering perspective rather than a brand-storytelling one.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "F&B"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "5"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Replace an outdated or missing web presence with a site that matches the restaurant's price point and service standard.",
        "Reduce phone-based reservation friction by surfacing an online booking path from the homepage.",
        "Give the kitchen and front-of-house team a content structure they can keep current without a developer.",
        "Build a foundation that supports future SEO growth in competitive Bangkok fine-dining search terms."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Fully responsive, bilingual (Thai/English) marketing website",
        "High-resolution photography-led homepage and menu gallery",
        "Structured presentation of tasting menus, wine lists, and seasonal specials",
        "Online table-reservation integration connected directly from key pages",
        "Chef and brand-story page to support press and PR use",
        "An AI concierge chatbot answering menu and booking questions around the clock"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Discovery & on-site audit",
          "desc": "Spent time at Savelberg Restaurant observing service pacing, plating, and guest flow to translate those cues into layout and imagery decisions rather than guessing at them."
        },
        {
          "title": "Information architecture",
          "desc": "Mapped every page a prospective guest needs — menu, reservations, location, story — into the smallest number of clicks possible."
        },
        {
          "title": "Build & integration",
          "desc": "Implemented the front end, wired up the reservation flow, and optimized image delivery so a photography-heavy site still loads quickly."
        },
        {
          "title": "Launch & content handover",
          "desc": "Delivered an editable content structure and a short handover session so the team can update menus and photos independently."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front-end",
        "Headless CMS for menu & content updates",
        "Cloud hosting & CDN for image delivery",
        "Online reservation integration",
        "Bilingual content architecture",
        "On-page SEO foundation"
      ],
      "resultsHeading": "Results",
      "results": [
        "New Website delivered on schedule, replacing a web presence that could not support the brand's positioning.",
        "A reservation path now reachable within two clicks from every page, reducing reliance on phone bookings.",
        "A content structure the restaurant can keep seasonally current without ongoing developer involvement.",
        "A technical and on-page SEO foundation ready to compound over time in fine-dining search terms."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How long did the Savelberg Restaurant project take?",
          "answer": "Timelines for a bilingual, photography-led restaurant site like this typically run two to three months from discovery through launch, depending on how quickly photography and copy are finalized."
        },
        {
          "question": "What technologies were used?",
          "answer": "The site is built on a modern Next.js front end with a headless CMS for content, deployed on a CDN-backed cloud host for fast image delivery, plus a dedicated reservation integration."
        },
        {
          "question": "Can this approach be adapted for other restaurant brands?",
          "answer": "Yes — the same structure (menu-first navigation, reservation integration, bilingual content, optional AI concierge) adapts cleanly to other fine-dining or multi-location F&B brands."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/savelberg/cover.jpg"
    }
  },
  {
    "slug": "ovo",
    "industryTag": "F&B",
    "year": "2025",
    "th": {
      "metaTitle": "OVO เว็บไซต์ — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ เว็บไซต์ OVO โดย Haliviq พร้อม ออกแบบเว็บไซต์ (UX/UI) พัฒนาเว็บไซต์ กำกับทิศทางภาพถ่าย & คอนเทนต์",
      "h1": "OVO — สรุปงานเว็บไซต์แบรนด์พร้อมระบบสั่งซื้อ",
      "client": "OVO",
      "badge": "F&B",
      "servicesProvided": [
        "ออกแบบเว็บไซต์ (UX/UI)",
        "พัฒนาเว็บไซต์",
        "กำกับทิศทางภาพถ่าย & คอนเทนต์",
        "ช่วยวางกลยุทธ์การตลาดดิจิทัล"
      ],
      "intro": "OVO เป็นแบรนด์ที่ขายตรงถึงผู้บริโภค เว็บไซต์จึงต้องทำสองหน้าที่พร้อมกัน คือสื่อสารตัวตนแบรนด์ และพาลูกค้าจากการเลือกชมไปสู่การสั่งซื้อด้วยขั้นตอนน้อยที่สุด งานของ Haliviq เน้นภาพถ่ายสินค้าโทนอบอุ่น ระบบสั่งซื้อที่เรียบง่าย และโครงสร้างคอนเทนต์ที่ทีมดูแลเองได้หลังเปิดตัว บทความนี้สรุปงานที่ส่งมอบในมุมมองด้าน Deliverable และ SEO",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "F&B"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "สร้างช่องทางขายตรงถึงผู้บริโภคที่ไม่ต้องพึ่งพามาร์เก็ตเพลสเพียงอย่างเดียว",
        "ย่นระยะจาก \"ดูเมนู\" ไปสู่ \"สั่งซื้อสำเร็จ\" ให้เหลือขั้นตอนน้อยที่สุด",
        "ทำให้ทีมภายในอัปเดตแคตตาล็อกและราคาได้อย่างแม่นยำ",
        "วางรากฐานเทคนิคสำหรับการค้นหาออร์แกนิกในคำค้นหา F&B ท้องถิ่น"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์การตลาดและสั่งซื้อที่รองรับมือถือเป็นหลัก",
        "ทิศทางภาพถ่ายสินค้าโทนอบอุ่นและการจัดวางแกลเลอรี",
        "ระบบสั่งซื้อออนไลน์ที่เรียบง่ายพร้อมการแสดงราคาชัดเจน",
        "โครงสร้างคอนเทนต์สินค้า/เมนูที่ทีมภายในแก้ไขได้เอง",
        "ภาพถ่ายพร้อมใช้ในสื่อโซเชียลมีเดียที่นำกลับมาใช้ซ้ำได้"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "วิจัยแบรนด์และกลุ่มลูกค้า",
          "desc": "เก็บข้อมูลโทนภาพ ระดับราคา และกลุ่มลูกค้าเป้าหมายก่อนเริ่มงานออกแบบ"
        },
        {
          "title": "ออกแบบ UX เพื่อการแปลงยอดขาย",
          "desc": "ออกแบบขั้นตอนสั่งซื้อให้มีจำนวนขั้นตอนน้อยที่สุดจากหน้าสินค้าไปจนถึงสั่งซื้อสำเร็จ"
        },
        {
          "title": "พัฒนาและเชื่อมต่อระบบ",
          "desc": "พัฒนาเว็บไซต์ที่โหลดเร็วและเชื่อมต่อกับระบบสั่งซื้อออนไลน์"
        },
        {
          "title": "คอนเทนต์และส่งมอบงาน",
          "desc": "จัดระเบียบภาพถ่ายและข้อความให้เป็นโครงสร้างที่ทีมภายในดูแลต่อได้"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "เลย์เอาต์ที่รองรับมือถือเป็นหลัก",
        "ระบบสั่งซื้อออนไลน์",
        "Cloud hosting & CDN",
        "CMS น้ำหนักเบาสำหรับคอนเทนต์สินค้า",
        "พื้นฐาน SEO บนหน้าเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เว็บไซต์ใหม่ทำหน้าที่เป็นหน้าร้านออนไลน์หลักของแบรนด์",
        "ขั้นตอนสั่งซื้อที่ออกแบบให้ลดการตีกลับระหว่างการเลือกชมและการชำระเงิน",
        "คลังภาพถ่ายที่แบรนด์นำไปใช้ซ้ำในช่องทางโซเชียลและโฆษณา",
        "พื้นฐาน SEO เชิงเทคนิคที่วางไว้สำหรับการเติบโตระยะยาว"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์แบรนด์พร้อมระบบสั่งซื้อแบบเฉพาะทางนี้ มักใช้เวลาประมาณสองเดือนตั้งแต่เริ่มจนถึงเปิดตัว"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ฝั่งหน้าบ้านสร้างด้วย Next.js ที่รองรับมือถือ ควบคู่กับ CMS น้ำหนักเบาสำหรับอัปเดตสินค้าและคอนเทนต์ ติดตั้งบน Cloud hosting ที่มี CDN"
        },
        {
          "question": "ปรับใช้กับแบรนด์ F&B หรือสินค้าอุปโภคบริโภคอื่นได้ไหม",
          "answer": "ได้ โครงสร้างที่เน้นการสั่งซื้อและระบบคอนเทนต์นี้ปรับใช้ได้ดีกับแบรนด์ของหวาน คาเฟ่ หรือสินค้าบรรจุภัณฑ์อื่นๆ ที่ขายตรงถึงผู้บริโภค"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/ovo/cover.jpg"
    },
    "en": {
      "metaTitle": "OVO Website Project — Haliviq",
      "metaDescription": "See the deliverables, tech stack, and results behind the OVO website project — UX/UI Design, Web Development, Photography & Content Direction, and more, bu...",
      "h1": "OVO — E-Commerce-Ready Brand Website Build",
      "client": "OVO",
      "badge": "F&B",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "Photography & Content Direction",
        "Digital Marketing Support"
      ],
      "intro": "OVO is a product-led brand selling directly to consumers, which meant the website had to do double duty: communicate the brand's personality and move people from browsing to ordering with as few steps as possible. Haliviq's build centered on warm, product-first photography, a simplified ordering flow, and a content structure the team could run independently after launch. Below is a deliverables- and SEO-oriented breakdown of what shipped and why.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "F&B"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Give the brand a direct-to-consumer web presence that does not depend on third-party marketplace listings alone.",
        "Shorten the path from \"browsing the menu\" to \"placing an order\" to as few taps as possible.",
        "Make the catalog and pricing easy for the internal team to keep accurate.",
        "Lay technical groundwork for organic search visibility in local F&B search terms."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Responsive, mobile-first marketing and ordering website",
        "Warm, product-first photography direction and gallery layout",
        "Simplified online ordering flow with clear pricing presentation",
        "Editable product/menu content structure for the internal team",
        "Social-ready photography assets reused across digital marketing"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Brand & audience research",
          "desc": "Gathered the brand's visual language, price point, and target customer before any design work began."
        },
        {
          "title": "UX for conversion",
          "desc": "Designed the ordering flow around the fewest possible steps from product page to confirmed order."
        },
        {
          "title": "Development & integration",
          "desc": "Built a fast, mobile-first site and connected it to an online ordering flow."
        },
        {
          "title": "Content & handover",
          "desc": "Organized photography and copy into a structure the internal team can maintain going forward."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front-end",
        "Mobile-first responsive layout",
        "Online ordering integration",
        "Cloud hosting & CDN",
        "Lightweight CMS for product content",
        "On-page SEO foundation"
      ],
      "resultsHeading": "Results",
      "results": [
        "New Website now serving as the brand's primary online storefront.",
        "A simplified ordering flow designed to reduce drop-off between browsing and checkout.",
        "A photography library the brand reuses across social and paid channels.",
        "A technical SEO foundation built for long-term organic growth."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A focused brand and ordering site like this typically ships in around two months from kickoff to launch."
        },
        {
          "question": "What technologies were used?",
          "answer": "A responsive Next.js front end, a lightweight CMS for product and content updates, and a cloud-hosted deployment with CDN-backed image delivery."
        },
        {
          "question": "Can this be adapted for other F&B or consumer brands?",
          "answer": "Yes — the ordering-first structure and content system generalize well to other dessert, cafe, or packaged-goods brands selling direct to consumer."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/ovo/cover.jpg"
    }
  },
  {
    "slug": "base",
    "industryTag": "Fitness & Wellness",
    "year": "2025",
    "th": {
      "metaTitle": "BASE เว็บไซต์ — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ เว็บไซต์ BASE โดย Haliviq พร้อม ออกแบบเว็บไซต์ (UX/UI) พัฒนาเว็บไซต์ ระบบจองคลาสออนไลน์",
      "h1": "BASE — เว็บไซต์สตูดิโอฟิตเนสพร้อมระบบจองคลาส",
      "client": "BASE",
      "badge": "Fitness & Wellness",
      "servicesProvided": [
        "ออกแบบเว็บไซต์ (UX/UI)",
        "พัฒนาเว็บไซต์",
        "ระบบจองคลาสออนไลน์",
        "กำกับทิศทางภาพถ่าย & คอนเทนต์"
      ],
      "intro": "BASE ขับเคลื่อนด้วยความเชี่ยวชาญของเทรนเนอร์และบรรยากาศคลาส แต่เว็บไซต์เดิมไม่มีช่องทางให้ผู้มาเยือนใหม่เห็นตารางคลาสหรือจองคลาสทดลองได้ง่าย งานของ Haliviq ผสานดีไซน์โทนมืดทันสมัยเข้ากับระบบจองคลาสที่ใช้งานได้จริง ทำให้งานด้านเทคนิคเป็นสิ่งที่ผลักดันให้ผู้มาเยือนตัดสินใจมาคลาสแรก ไม่ใช่แค่ภาพลักษณ์",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Fitness & Wellness"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "ลดความยุ่งยากระหว่าง \"เจอสตูดิโอออนไลน์\" กับ \"จองคลาสทดลองสำเร็จ\"",
        "สร้างการมองเห็นให้เทรนเนอร์แต่ละคน เพื่อให้สมาชิกใหม่เลือกคลาสจากผู้สอนได้",
        "นำเสนอตารางคลาสให้แม่นยำโดยไม่ต้องอัปเดตเว็บไซต์ด้วยมือ",
        "สร้างประสบการณ์ที่รองรับมือถือเป็นหลัก เพราะสมาชิกส่วนใหญ่เรียกดูและจองจากโทรศัพท์"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์สตูดิโอที่รองรับมือถือเป็นหลัก",
        "ระบบจองคลาสออนไลน์ที่ผนวกเข้ากับเว็บไซต์",
        "หน้าโปรไฟล์เทรนเนอร์รายบุคคล",
        "การแสดงตารางคลาสที่อัปเดตจากแหล่งข้อมูลกลาง",
        "ทิศทางภาพถ่ายและคอนเทนต์สำหรับภาพสตูดิโอและเทรนเนอร์"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "วิจัยสตูดิโอและกลุ่มเป้าหมาย",
          "desc": "เก็บข้อมูลรูปแบบคลาส ทีมเทรนเนอร์ และโปรไฟล์สมาชิกเป้าหมาย"
        },
        {
          "title": "ออกแบบ UX ให้การจองเป็นศูนย์กลาง",
          "desc": "ออกแบบตารางคลาสและขั้นตอนจองให้เป็นเส้นทางหลักของเว็บไซต์ ไม่ใช่ฟีเจอร์เสริม"
        },
        {
          "title": "พัฒนาและเชื่อมต่อระบบ",
          "desc": "พัฒนาเว็บไซต์ที่โหลดเร็วและเชื่อมต่อกับระบบจองคลาสแบบครบวงจร"
        },
        {
          "title": "คอนเทนต์และเปิดตัว",
          "desc": "จัดระเบียบภาพถ่ายเทรนเนอร์และสตูดิโอ พร้อมส่งมอบโครงสร้างตารางคลาสที่แก้ไขได้"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "การเชื่อมต่อระบบจองคลาส",
        "เลย์เอาต์ที่รองรับมือถือเป็นหลัก",
        "Cloud hosting & CDN",
        "CMS น้ำหนักเบาสำหรับตารางและคอนเทนต์เทรนเนอร์",
        "พื้นฐาน SEO บนหน้าเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เว็บไซต์ใหม่พร้อมระบบจองคลาสที่ใช้งานได้ตั้งแต่วันแรก",
        "ช่องทางจองที่เข้าถึงได้ภายในไม่กี่แตะจากหน้าแรกบนมือถือ",
        "หน้าเทรนเนอร์รายบุคคลที่สมาชิกใหม่ใช้เลือกคลาสแรก",
        "ระบบตารางคลาสที่สตูดิโออัปเดตเองได้โดยไม่ต้องพึ่งนักพัฒนา"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์สตูดิโอพร้อมระบบจองคลาสแบบนี้ มักใช้เวลาประมาณสองเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เว็บไซต์ Next.js ที่รองรับมือถือ เชื่อมต่อกับระบบจองคลาส พร้อม CMS น้ำหนักเบาสำหรับตารางและเทรนเนอร์ ติดตั้งบน Cloud hosting ที่มี CDN"
        },
        {
          "question": "ปรับใช้กับแบรนด์ฟิตเนสหรือเวลเนสอื่นได้ไหม",
          "answer": "ได้ โครงสร้างที่เน้นการจองและรูปแบบโปรไฟล์เทรนเนอร์นี้ใช้ได้กับยิม สตูดิโอโยคะ และธุรกิจเวลเนสแบบคลาสอื่นๆ"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/base/cover.jpg"
    },
    "en": {
      "metaTitle": "BASE Website Project — Haliviq",
      "metaDescription": "See the deliverables, tech stack, and results behind the BASE website project — UX/UI Design, Web Development, Class Booking System, and more, built by Hal...",
      "h1": "BASE — Fitness Studio Website & Booking System",
      "client": "BASE",
      "badge": "Fitness & Wellness",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "Class Booking System",
        "Photography & Content Direction"
      ],
      "intro": "BASE runs on trainer expertise and class energy, but its previous web presence gave new visitors no easy way to see a schedule or book a trial class. Haliviq's build paired a modern, dark-toned design language with a working class-booking system, so the technical deliverable — not just the visual one — is what actually moves a visitor to show up for a first session.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Fitness & Wellness"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Remove the friction between \"found the studio online\" and \"booked a trial class.\"",
        "Give trainers individual visibility so new members can pick a class based on who is teaching it.",
        "Present the class schedule in a way that stays accurate without manual web updates.",
        "Build a mobile-first experience, since most prospective members browse and book from a phone."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Responsive, mobile-first studio website",
        "Online class-booking system integrated into the site",
        "Individual trainer profile pages",
        "Class schedule display kept current from a central source",
        "Photography and content direction for studio and trainer imagery"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Studio & audience research",
          "desc": "Gathered the studio's class formats, trainer roster, and target member profile."
        },
        {
          "title": "Booking-first UX design",
          "desc": "Designed the schedule and booking flow as the primary path through the site, not an afterthought."
        },
        {
          "title": "Development & integration",
          "desc": "Built a fast site and wired it to the class-booking system end to end."
        },
        {
          "title": "Content & launch",
          "desc": "Organized trainer and studio photography and handed over an editable schedule structure."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front-end",
        "Class-booking system integration",
        "Mobile-first responsive layout",
        "Cloud hosting & CDN",
        "Lightweight CMS for schedule & trainer content",
        "On-page SEO foundation"
      ],
      "resultsHeading": "Results",
      "results": [
        "New Website with class booking live from day one.",
        "A booking path reachable in a couple of taps from the homepage on mobile.",
        "Individual trainer pages that new members use to choose a first class.",
        "A schedule system the studio keeps current without developer help."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A studio website with a working booking integration like this typically ships in around two months."
        },
        {
          "question": "What technologies were used?",
          "answer": "A responsive Next.js site connected to a class-booking system, with a lightweight CMS for schedule and trainer updates, deployed on a CDN-backed cloud host."
        },
        {
          "question": "Can this be adapted for other fitness or wellness brands?",
          "answer": "Yes — the booking-first structure and trainer-profile pattern generalize to gyms, yoga studios, and other class-based wellness businesses."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/base/cover.jpg"
    }
  },
  {
    "slug": "blue-bear",
    "industryTag": "Apparel & Uniforms",
    "year": "2025",
    "th": {
      "metaTitle": "Blue Bear เว็บไซต์ — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ เว็บไซต์ Blue Bear โดย Haliviq พร้อม ออกแบบเว็บไซต์ (UX/UI) พัฒนาเว็บไซต์ ระบบแคตตาล็อกสินค้า",
      "h1": "Blue Bear — สรุปงานเว็บไซต์ B2B และแคตตาล็อกสินค้า",
      "client": "Blue Bear",
      "badge": "Apparel & Uniforms",
      "servicesProvided": [
        "ออกแบบเว็บไซต์ (UX/UI)",
        "พัฒนาเว็บไซต์",
        "ระบบแคตตาล็อกสินค้า",
        "ฟอร์มติดต่อสั่งซื้อแบบองค์กร (B2B)"
      ],
      "intro": "Blue Bear ขายให้โรงพยาบาลและคลินิก กลุ่มผู้ซื้อที่ต้องการเรียกดูสินค้าทั้งไลน์และขอใบเสนอราคา ไม่ใช่แค่เพิ่มสินค้าลงตะกร้า Haliviq สร้างเว็บไซต์มืออาชีพที่ขับเคลื่อนด้วยแคตตาล็อก พร้อมฟอร์มติดต่อสั่งซื้อแบบ B2B โดยออกแบบตามวิธีจัดซื้อขององค์กรจริง ไม่ใช่รูปแบบหน้าร้านผู้บริโภคทั่วไป",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Apparel & Uniforms"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "มอบวิธีให้ผู้ซื้อองค์กรเรียกดูสินค้าทั้งไลน์ตามหมวดหมู่โดยไม่ต้องโทรขอแคตตาล็อก",
        "แทนที่กระบวนการสั่งซื้อแบบไม่เป็นระบบด้วยฟอร์มสอบถามและขอใบเสนอราคาที่ชัดเจน",
        "นำเสนอข้อมูลผ้า ขนาด และมาตรฐานให้ชัดพอที่จะย่นระยะเวลาการขาย",
        "สร้างความน่าเชื่อถือกับทีมจัดซื้อผ่านดีไซน์ที่เหมาะกับ B2B"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์การตลาดและแคตตาล็อกแบบ B2B ที่รองรับทุกขนาดหน้าจอ",
        "แคตตาล็อกสินค้าจัดหมวดหมู่ตามประเภทการใช้งาน",
        "ฟอร์มติดต่อสั่งซื้อและขอใบเสนอราคาสำหรับผู้ซื้อองค์กรโดยเฉพาะ",
        "หน้ารายละเอียดสินค้าพร้อมข้อมูลผ้า ขนาด และสเปค",
        "หน้ามาตรฐานคุณภาพและกระบวนการผลิตสำหรับการตรวจสอบของฝ่ายจัดซื้อ"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "วิจัยธุรกิจและผู้ซื้อ",
          "desc": "เก็บข้อมูลไลน์สินค้า โครงสร้างหมวดหมู่ และวิธีที่ทีมจัดซื้อโรงพยาบาล/คลินิกประเมินซัพพลายเออร์"
        },
        {
          "title": "ออกแบบ UX แคตตาล็อก",
          "desc": "ออกแบบการนำทางหมวดหมู่และการกรองให้ผู้ซื้อหาสินค้าที่ต้องการได้โดยไม่ต้องติดต่อฝ่ายขายไปมา"
        },
        {
          "title": "พัฒนาและเชื่อมฟอร์ม",
          "desc": "พัฒนาแคตตาล็อกและเชื่อมต่อขั้นตอนสั่งซื้อที่เป็นระบบสำหรับลูกค้าองค์กร"
        },
        {
          "title": "คอนเทนต์และความน่าเชื่อถือ",
          "desc": "จัดระเบียบภาพถ่ายสินค้า สเปค และหน้ามาตรฐานคุณภาพเพื่อสนับสนุนการขาย"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "สถาปัตยกรรมแคตตาล็อกสินค้าแบบมีโครงสร้าง",
        "การเชื่อมต่อฟอร์มสอบถาม/ขอใบเสนอราคา B2B",
        "Cloud hosting & CDN",
        "ระบบจัดการคอนเทนต์สำหรับข้อมูลสินค้า",
        "SEO บนหน้าเว็บสำหรับคำค้นหาองค์กร"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เว็บไซต์ใหม่เป็นเครื่องมือที่ทีมขายใช้ส่งต่อให้ผู้ซื้อองค์กรได้โดยตรง",
        "ขั้นตอนขอใบเสนอราคาที่แทนที่การรับคำสั่งซื้อทางโทรศัพท์และอีเมลแบบไม่เป็นระบบ",
        "หน้าสินค้าที่ละเอียดพอจะตอบคำถามจัดซื้อที่พบบ่อยได้ล่วงหน้า",
        "ดีไซน์มืออาชีพที่เหมาะกับคณะกรรมการจัดซื้อของโรงพยาบาลและคลินิก"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์ B2B ที่ขับเคลื่อนด้วยแคตตาล็อกแบบนี้ มักใช้เวลาประมาณสองเดือน ขึ้นอยู่กับปริมาณข้อมูลสินค้าที่ต้องจัดระเบียบ"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ฝั่งหน้าบ้าน Next.js พร้อมแคตตาล็อกสินค้าแบบมีโครงสร้าง การเชื่อมต่อฟอร์มสอบถาม B2B โดยเฉพาะ และ Cloud hosting ที่มี CDN"
        },
        {
          "question": "ปรับใช้กับผู้ผลิต B2B รายอื่นได้ไหม",
          "answer": "ได้ รูปแบบแคตตาล็อกตามหมวดหมู่และการขอใบเสนอราคานี้ใช้ได้กับผู้ผลิตรายอื่นที่ขายให้ผู้ซื้อองค์กรหรือสถาบัน"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/blue-bear/cover.jpg"
    },
    "en": {
      "metaTitle": "Blue Bear Website Project — Haliviq",
      "metaDescription": "See the deliverables, tech stack, and results behind the Blue Bear website project — UX/UI Design, Web Development, Product Catalog System, and more, built...",
      "h1": "Blue Bear — B2B Website & Product Catalog Build",
      "client": "Blue Bear",
      "badge": "Apparel & Uniforms",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "Product Catalog System",
        "B2B Order Inquiry Forms"
      ],
      "intro": "Blue Bear sells to hospitals and clinics, a buyer group that needs to browse a full product range and request a quote — not add a single item to a cart. Haliviq built a professional, catalog-driven website with a dedicated B2B order-inquiry flow, designed around how institutional procurement actually works rather than a consumer storefront pattern.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Apparel & Uniforms"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Give institutional buyers a way to browse the full product range by category without calling for a catalog.",
        "Replace an ad-hoc order process with a structured inquiry and quote-request flow.",
        "Present fabric, sizing, and compliance details clearly enough to shorten the sales cycle.",
        "Build credibility with procurement teams through a professional, B2B-appropriate design."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Responsive B2B marketing and catalog website",
        "Product catalog organized by category and use case",
        "Dedicated order-inquiry and quote-request form for institutional buyers",
        "Product detail pages with fabric, sizing, and specification information",
        "Quality-standards and manufacturing-process page for procurement due diligence"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Business & buyer research",
          "desc": "Gathered the product line, category structure, and how hospital/clinic procurement teams actually evaluate suppliers."
        },
        {
          "title": "Catalog UX design",
          "desc": "Designed category navigation and filtering so buyers can find the right product without back-and-forth with sales."
        },
        {
          "title": "Development & form integration",
          "desc": "Built the catalog and wired up a structured order-inquiry flow for institutional customers."
        },
        {
          "title": "Content & credibility",
          "desc": "Organized product photography, specs, and a quality-standards page to support the sales conversation."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front-end",
        "Structured product catalog architecture",
        "B2B inquiry/quote form integration",
        "Cloud hosting & CDN",
        "Content management for product data",
        "On-page SEO for institutional search terms"
      ],
      "resultsHeading": "Results",
      "results": [
        "New Website giving the sales team a tool to point institutional buyers to directly.",
        "A quote-request flow that replaces ad-hoc phone and email order intake.",
        "Product pages detailed enough to answer common procurement questions up front.",
        "A professional design suited to hospital and clinic buying committees."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A catalog-driven B2B website like this typically ships in around two months, depending on how much product data needs organizing."
        },
        {
          "question": "What technologies were used?",
          "answer": "A Next.js front end with a structured product catalog, a dedicated B2B inquiry form integration, and cloud hosting with CDN delivery."
        },
        {
          "question": "Can this be adapted for other B2B manufacturers?",
          "answer": "Yes — the category-based catalog and quote-request pattern applies to other manufacturers selling to institutional or enterprise buyers."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/blue-bear/cover.jpg"
    }
  },
  {
    "slug": "thai-metal-aluminium",
    "industryTag": "Manufacturing",
    "year": "2025",
    "th": {
      "metaTitle": "Thai Metal Aluminium เว็บไซต์ — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ เว็บไซต์ Thai Metal Aluminium โดย Haliviq พร้อม ออกแบบเว็บไซต์ (UX/UI) พัฒนาเว็บไซต์ กำกับทิศทางคอนเทนต...",
      "h1": "Thai Metal Aluminium — เว็บไซต์องค์กรเพื่อนำเสนอขีดความสามารถอุตสาหกรรม",
      "client": "Thai Metal Aluminium",
      "badge": "Manufacturing",
      "servicesProvided": [
        "ออกแบบเว็บไซต์ (UX/UI)",
        "พัฒนาเว็บไซต์",
        "กำกับทิศทางคอนเทนต์เชิงเทคนิค",
        "SEO สำหรับลูกค้าอุตสาหกรรม"
      ],
      "intro": "Thai Metal Aluminium ผลิตชิ้นส่วนโลหะและอะลูมิเนียมความแม่นยำสูง แต่เว็บไซต์เดิมไม่สามารถแสดงขีดความสามารถด้านเครื่องจักรและมาตรฐานคุณภาพที่ผู้ซื้ออุตสาหกรรมใช้ประเมินก่อนออก RFQ ได้ Haliviq สร้างเว็บไซต์องค์กรที่วางโครงสร้างรอบขีดความสามารถ การรับรอง และความโปร่งใสของกระบวนการ ด้วยแนวทางคอนเทนต์เชิงเทคนิคมากกว่าการตลาดแบรนด์ทั่วไป",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Manufacturing"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "ทำให้วิศวกรและทีมจัดซื้อตรวจสอบขีดความสามารถเครื่องจักรและสเปคได้ง่ายทางออนไลน์",
        "นำเสนอมาตรฐานและการรับรองคุณภาพในรูปแบบที่ย่นเวลาการประเมินซัพพลายเออร์",
        "สร้างหน้าผลงานอ้างอิงและลูกค้าในอดีตเพื่อสนับสนุนการพัฒนาธุรกิจใหม่",
        "จัดโครงสร้างคอนเทนต์ให้ติดอันดับคำค้นหาอุตสาหกรรมที่ผู้ซื้อใช้จริง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์องค์กรที่รองรับทุกขนาดหน้าจอ สร้างสำหรับผู้ซื้ออุตสาหกรรม B2B",
        "การนำเสนอเครื่องจักร กระบวนการ และขีดความสามารถการผลิตอย่างเป็นระบบ",
        "หน้ามาตรฐานคุณภาพและการรับรอง",
        "หน้าแสดงผลงานอ้างอิงและลูกค้าในอดีต",
        "คอนเทนต์เชิงเทคนิคที่จัดโครงสร้างตามพฤติกรรมค้นหาของผู้ซื้ออุตสาหกรรม"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "วิจัยธุรกิจและขีดความสามารถ",
          "desc": "เก็บข้อมูลกระบวนการผลิต รายการเครื่องจักร และโปรไฟล์ลูกค้าอุตสาหกรรมเป้าหมาย"
        },
        {
          "title": "วางโครงสร้างข้อมูล",
          "desc": "จัดโครงสร้างเว็บไซต์ให้ขีดความสามารถ การรับรอง และผลงานเก่าเข้าถึงและตรวจสอบได้ง่าย"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ที่โหลดเร็วและดูเป็นมืออาชีพเหมาะกับกลุ่มเป้าหมาย B2B อุตสาหกรรม"
        },
        {
          "title": "วางแผน SEO เชิงเทคนิค",
          "desc": "จัดโครงสร้างคอนเทนต์และเมตาดาต้ารอบคำค้นหาที่ผู้ซื้ออุตสาหกรรมใช้จริง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "สถาปัตยกรรมคอนเทนต์เชิงเทคนิค",
        "Cloud hosting & CDN",
        "CMS น้ำหนักเบาสำหรับอัปเดตผลงาน/เคส",
        "SEO เชิงเทคนิคบนหน้าเว็บ",
        "Structured data เพื่อความน่าเชื่อถือขององค์กร"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เว็บไซต์ใหม่ที่วางตำแหน่งบริษัทให้พร้อมรับ RFQ อุตสาหกรรมใหม่ๆ",
        "ข้อมูลขีดความสามารถและการรับรองที่ตรวจสอบได้ออนไลน์ก่อนการติดต่อฝ่ายขาย",
        "หน้าผลงานอ้างอิงที่ทีมพัฒนาธุรกิจใช้ส่งต่อให้ลูกค้าที่สนใจได้โดยตรง",
        "พื้นฐาน SEO เชิงเทคนิคที่มุ่งเป้าคำค้นหาเฉพาะที่ผู้ซื้ออุตสาหกรรมใช้"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์องค์กรแสดงขีดความสามารถแบบนี้ มักใช้เวลาประมาณสองเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ฝั่งหน้าบ้าน Next.js พร้อม CMS น้ำหนักเบาสำหรับเคสและการรับรอง ติดตั้งบน Cloud hosting ที่มี CDN พร้อมโครงสร้าง SEO เชิงเทคนิค"
        },
        {
          "question": "ปรับใช้กับผู้ผลิตอุตสาหกรรมรายอื่นได้ไหม",
          "answer": "ได้ โครงสร้างที่เน้นขีดความสามารถและการรับรองนี้ใช้ได้โดยตรงกับผู้ผลิตความแม่นยำสูงหรือธุรกิจจัดหาอุตสาหกรรมอื่นๆ"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/thai-metal-aluminium/cover.jpg"
    },
    "en": {
      "metaTitle": "Thai Metal Aluminium Website Project — Haliviq",
      "metaDescription": "See the deliverables, tech stack, and results behind the Thai Metal Aluminium website project — UX/UI Design, Web Development, Technical Content Direction,...",
      "h1": "Thai Metal Aluminium — Corporate Website for Industrial Capability",
      "client": "Thai Metal Aluminium",
      "badge": "Manufacturing",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "Technical Content Direction",
        "SEO for Industrial Customers"
      ],
      "intro": "Thai Metal Aluminium manufactures precision metal and aluminium parts, but its previous website could not show industrial buyers the machining capability and quality standards those buyers actually evaluate before issuing an RFQ. Haliviq built a corporate website structured around capability, certification, and process transparency, with a technical content approach rather than a conventional brand-marketing one.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Manufacturing"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Make machining capability and equipment specifications easy for engineers and procurement teams to verify online.",
        "Present quality certifications and standards in a way that shortens vendor-qualification time.",
        "Build a reference-work and past-client section that supports new business development.",
        "Structure content so the site ranks for the specific industrial search terms buyers use."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Responsive corporate website built for B2B industrial buyers",
        "Systematic presentation of machinery, processes, and production capability",
        "Quality-standards and certifications page",
        "Reference-work and past-client showcase",
        "Technical content structured for industrial-buyer search behavior"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Business & capability research",
          "desc": "Gathered the manufacturing process, machine inventory, and target industrial customer profile."
        },
        {
          "title": "Information architecture",
          "desc": "Structured the site so capability, certifications, and past work are each easy to reach and verify."
        },
        {
          "title": "Development",
          "desc": "Built a fast, professional website suited to a B2B industrial audience."
        },
        {
          "title": "Technical SEO planning",
          "desc": "Structured content and metadata around the search terms industrial buyers actually use."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front-end",
        "Technical content architecture",
        "Cloud hosting & CDN",
        "Lightweight CMS for case/reference updates",
        "Technical on-page SEO",
        "Structured data for organization credibility"
      ],
      "resultsHeading": "Results",
      "results": [
        "New Website positioning the company for new industrial RFQs.",
        "Capability and certification information now verifiable online before a sales call.",
        "A reference-work section new business development can point prospects to directly.",
        "A technical SEO foundation targeting the specific terms industrial buyers search."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A corporate capability website like this typically ships in around two months."
        },
        {
          "question": "What technologies were used?",
          "answer": "A Next.js front end with a lightweight CMS for case studies and certifications, deployed on a CDN-backed cloud host with a technical on-page SEO structure."
        },
        {
          "question": "Can this be adapted for other industrial manufacturers?",
          "answer": "Yes — the capability-first, certification-forward structure applies directly to other precision manufacturing or industrial-supply businesses."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/thai-metal-aluminium/cover.jpg"
    }
  },
  {
    "slug": "vera",
    "industryTag": "E-Commerce",
    "year": "2025",
    "th": {
      "metaTitle": "VERA เว็บไซต์ — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ เว็บไซต์ VERA โดย Haliviq พร้อม ออกแบบเว็บไซต์ (UX/UI) พัฒนาเว็บไซต์อีคอมเมิร์ซ กำกับทิศทางภาพถ่ายสินค้า",
      "h1": "VERA — สรุปงานเว็บไซต์อีคอมเมิร์ซ ตะกร้าสินค้า และชำระเงิน",
      "client": "VERA",
      "badge": "E-Commerce",
      "servicesProvided": [
        "ออกแบบเว็บไซต์ (UX/UI)",
        "พัฒนาเว็บไซต์อีคอมเมิร์ซ",
        "กำกับทิศทางภาพถ่ายสินค้า",
        "ช่วยวางกลยุทธ์การตลาดดิจิทัล"
      ],
      "intro": "VERA ผลิตและขายสินค้าของตัวเอง แต่พึ่งพาช่องทางมาร์เก็ตเพลสเป็นหลัก ซึ่งจำกัดทั้งอัตรากำไรและความสัมพันธ์กับลูกค้า Haliviq สร้างเว็บไซต์อีคอมเมิร์ซแบบครบวงจร — ตะกร้าสินค้า ชำระเงิน และจัดการคำสั่งซื้อ — เพื่อให้แบรนด์ขายตรงได้และเป็นเจ้าของข้อมูลลูกค้าที่การขายผ่านมาร์เก็ตเพลสให้ไม่ได้",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "E-Commerce"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "ลดการพึ่งพามาร์เก็ตเพลสบุคคลที่สาม ด้วยช่องทางขายตรงถึงผู้บริโภคของแบรนด์เอง",
        "สร้างขั้นตอนตะกร้าสินค้าและชำระเงินที่ลื่นไหลพอจะแข่งกับความสะดวกของมาร์เก็ตเพลส",
        "ให้ทีมมองเห็นการจัดการคำสั่งซื้อโดยไม่ต้องพึ่งแดชบอร์ดผู้ขายของมาร์เก็ตเพลส",
        "สร้างการนำเสนอภาพลักษณ์พรีเมียมที่สมกับคุณภาพและราคาสินค้าจริง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์อีคอมเมิร์ซครบวงจรพร้อมตะกร้าสินค้า ชำระเงิน และจัดการคำสั่งซื้อ",
        "ดีไซน์มินิมอลหรูหราพร้อมภาพถ่ายสินค้าหลายมุมมอง",
        "หน้าคอลเลกชันตามฤดูกาลที่ทีมภายในอัปเดตได้เอง",
        "การเชื่อมต่อช่องทางชำระเงินหลายรูปแบบ",
        "ระบบติดตามสถานะคำสั่งซื้อสำหรับลูกค้าหลังการสั่งซื้อ"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "วิจัยแบรนด์และสินค้า",
          "desc": "เก็บข้อมูลไลน์สินค้า โทนภาพ และกลุ่มลูกค้าเป้าหมายก่อนวางโครงสร้างหน้าร้าน"
        },
        {
          "title": "ออกแบบ UX เพื่อการแปลงยอดขาย",
          "desc": "ออกแบบการเลือกชมและชำระเงินให้ลดขั้นตอนและการตีกลับให้น้อยที่สุด"
        },
        {
          "title": "พัฒนาระบบอีคอมเมิร์ซ",
          "desc": "พัฒนาตะกร้าสินค้า ชำระเงิน เชื่อมต่อการจ่ายเงิน และระบบจัดการคำสั่งซื้อ"
        },
        {
          "title": "ส่งมอบคอนเทนต์และการตลาด",
          "desc": "จัดระเบียบภาพถ่ายสินค้าและวางแนวทางคอนเทนต์ให้ทีมใช้งานต่อได้หลายช่องทาง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "ระบบตะกร้าสินค้าและชำระเงิน",
        "การเชื่อมต่อ Payment gateway",
        "ระบบจัดการคำสั่งซื้อ",
        "Cloud hosting & CDN",
        "พื้นฐาน SEO บนหน้าเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เว็บไซต์ใหม่ที่ให้แบรนด์มีช่องทางขายตรงที่ไม่ต้องพึ่งมาร์เก็ตเพลส",
        "ขั้นตอนชำระเงินแบบหน้าเดียวที่ออกแบบมาเพื่อลดการทิ้งตะกร้า",
        "การมองเห็นสถานะคำสั่งซื้อที่ลดการสอบถามจากฝ่ายบริการลูกค้า",
        "การนำเสนอสินค้าแบบพรีเมียมที่สมกับระดับราคาจริงของแบรนด์"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "งานอีคอมเมิร์ซครบวงจรพร้อมตะกร้า ชำระเงิน และจัดการคำสั่งซื้อแบบนี้ มักใช้เวลาประมาณสามเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ฝั่งหน้าบ้านอีคอมเมิร์ซ Next.js พร้อมการเชื่อมต่อ Payment gateway ระบบจัดการคำสั่งซื้อ และ Cloud hosting ที่มี CDN"
        },
        {
          "question": "ปรับใช้กับแบรนด์สินค้าอื่นได้ไหม",
          "answer": "ได้ สถาปัตยกรรมตะกร้า ชำระเงิน และจัดการคำสั่งซื้อนี้ใช้ได้กับผู้ผลิตที่ขายตรงถึงผู้บริโภครายอื่นที่ต้องการลดการพึ่งพามาร์เก็ตเพลส"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/vera/cover.jpg"
    },
    "en": {
      "metaTitle": "VERA Website Project — Haliviq",
      "metaDescription": "See the deliverables, tech stack, and results behind the VERA website project — UX/UI Design, E-Commerce Development, Product Photography Direction, and mo...",
      "h1": "VERA — E-Commerce Website, Cart & Checkout Build",
      "client": "VERA",
      "badge": "E-Commerce",
      "servicesProvided": [
        "UX/UI Design",
        "E-Commerce Development",
        "Product Photography Direction",
        "Digital Marketing Support"
      ],
      "intro": "VERA manufactures and sells its own product line but relied heavily on marketplace channels, which limits both margin and the customer relationship. Haliviq built a full e-commerce website — cart, checkout, and order management included — so the brand could sell directly and own the customer data that marketplace selling does not provide.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "E-Commerce"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Reduce dependency on third-party marketplaces by giving the brand its own direct-to-consumer channel.",
        "Build a cart and checkout flow smooth enough to compete with marketplace convenience.",
        "Give the team order-management visibility without relying on a marketplace seller dashboard.",
        "Build a premium visual presentation that matches the product's actual quality and price point."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Full e-commerce website with cart, checkout, and order management",
        "Minimal, premium design language with multi-angle product photography",
        "Seasonal collections pages kept current by the internal team",
        "Multiple payment method integrations",
        "Order-status tracking for customers post-purchase"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Brand & product research",
          "desc": "Gathered the product line, visual tone, and target customer before structuring the storefront."
        },
        {
          "title": "Conversion-focused UX",
          "desc": "Designed browsing and checkout to minimize steps and drop-off."
        },
        {
          "title": "E-commerce development",
          "desc": "Built the cart, checkout, payment integration, and order management system."
        },
        {
          "title": "Content & marketing handover",
          "desc": "Organized product photography and a content direction the team can run across channels."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front-end",
        "E-commerce cart & checkout system",
        "Payment gateway integration",
        "Order management system",
        "Cloud hosting & CDN",
        "On-page SEO foundation"
      ],
      "resultsHeading": "Results",
      "results": [
        "New Website giving the brand a direct sales channel independent of marketplaces.",
        "A single-flow checkout designed to reduce cart abandonment.",
        "Order-status visibility that reduces customer-service inquiries.",
        "A premium product presentation matched to the brand's actual price point."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A full e-commerce build with cart, checkout, and order management like this typically runs around three months."
        },
        {
          "question": "What technologies were used?",
          "answer": "A Next.js e-commerce front end with payment gateway integration, an order management system, and CDN-backed cloud hosting."
        },
        {
          "question": "Can this be adapted for other product brands?",
          "answer": "Yes — the cart, checkout, and order-management architecture applies to other direct-to-consumer manufacturers moving off marketplace-only selling."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/vera/cover.jpg"
    }
  },
  {
    "slug": "nfi",
    "industryTag": "Government & Public Sector",
    "year": "2025",
    "th": {
      "metaTitle": "NFI สถาบันอาหาร เว็บไซต์ — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ เว็บไซต์ NFI สถาบันอาหาร โดย Haliviq พร้อม ออกแบบเว็บไซต์ (UX/UI) พัฒนาเว็บไซต์ ระบบค้นหาบริการห้องปฏิบ...",
      "h1": "NFI สถาบันอาหาร — เว็บไซต์ภาครัฐและระบบค้นหาบริการ",
      "client": "NFI สถาบันอาหาร",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "ออกแบบเว็บไซต์ (UX/UI)",
        "พัฒนาเว็บไซต์",
        "ระบบค้นหาบริการห้องปฏิบัติการ",
        "จัดระเบียบคอนเทนต์งานวิจัย"
      ],
      "intro": "NFI สถาบันอาหาร มีบริการหลากหลายให้ผู้ประกอบการและนักวิจัย แต่เว็บไซต์เดิมซ่อนขอบเขตบริการเหล่านั้นไว้หลังการนำทางที่ไม่ชัดเจน งานของ Haliviq เน้นไปที่การค้นพบบริการ — จัดระเบียบบริการของหน่วยงานที่ซับซ้อนให้เป็นหมวดหมู่ พร้อมระบบค้นหาที่ใช้งานได้จริง เพื่อให้เว็บไซต์ทำหน้าที่รับใช้ผู้ใช้จริง ไม่ใช่แค่เป็นโบรชัวร์ดิจิทัล",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Government & Public Sector"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "ทำให้ผู้เข้าชมครั้งแรกหาบริการที่ต้องการได้ภายในไม่ถึงนาที",
        "จัดระเบียบบริการของหน่วยงานที่หลากหลายให้เป็นหมวดหมู่ที่ชัดเจนและนำทางง่าย",
        "นำเสนอข้อมูลขั้นตอนและระยะเวลาให้ชัดพอจะลดสายเรียกเข้าสอบถาม",
        "สร้างเว็บไซต์ภาครัฐที่ทันสมัยและน่าเชื่อถือ"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์ภาครัฐที่รองรับทุกขนาดหน้าจอ",
        "คอนเทนต์บริการและงานวิจัยที่จัดระเบียบเป็นหมวดหมู่ชัดเจน",
        "ระบบค้นหาบริการของหน่วยงานที่ใช้งานได้จริง",
        "หน้าข้อมูลขั้นตอนและระยะเวลาการให้บริการ",
        "โครงสร้างเอกสารดาวน์โหลดสำหรับทรัพยากรสาธารณะ"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "วิจัยหน่วยงาน",
          "desc": "เก็บข้อมูลโครงสร้างบริการทั้งหมดและกลุ่มผู้ใช้ของแต่ละบริการ"
        },
        {
          "title": "วางโครงสร้างข้อมูล",
          "desc": "จัดระเบียบบริการและงานวิจัยให้ผู้เข้าชมที่ไม่ใช่ผู้เชี่ยวชาญนำทางได้"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ที่โหลดเร็วและเข้าถึงได้ รองรับผู้ใช้ทั้งฝั่งธุรกิจและวิจัย"
        },
        {
          "title": "จัดระเบียบคอนเทนต์",
          "desc": "จัดโครงสร้างคอนเทนต์บริการและงานวิจัยให้ครบถ้วนและค้นหาได้"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "ระบบค้นหาและกรองบริการ",
        "Cloud hosting & CDN",
        "ระบบจัดการคอนเทนต์สำหรับอัปเดตของหน่วยงาน",
        "มาร์กอัปที่เข้าถึงได้ตามมาตรฐาน",
        "พื้นฐาน SEO บนหน้าเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เว็บไซต์ใหม่ที่จัดระเบียบบริการให้ค้นพบได้ด้วยตัวเอง",
        "ระบบค้นหาที่ใช้งานได้จริง ลดการพึ่งพาการสอบถามทางโทรศัพท์",
        "ข้อมูลขั้นตอนและระยะเวลาที่เผยแพร่อย่างชัดเจนเป็นครั้งแรก",
        "เว็บไซต์ทันสมัยที่สมกับความน่าเชื่อถือของหน่วยงานภาครัฐ"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์ภาครัฐพร้อมระบบค้นหาบริการแบบนี้ มักใช้เวลาประมาณสามเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ฝั่งหน้าบ้าน Next.js พร้อมระบบค้นหาและกรองโดยเฉพาะ ระบบจัดการคอนเทนต์สำหรับหน่วยงาน และ Cloud hosting ที่มี CDN"
        },
        {
          "question": "ปรับใช้กับหน่วยงานภาครัฐอื่นได้ไหม",
          "answer": "ได้ โครงสร้างการจัดหมวดหมู่บริการและระบบค้นหานี้ใช้ได้กับหน่วยงานหรือสถาบันภาครัฐอื่นที่มีบริการหลากหลาย"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/nfi/cover.jpg"
    },
    "en": {
      "metaTitle": "NFI – National Food Institute Website Project — Haliviq",
      "metaDescription": "See the deliverables, tech stack, and results behind the NFI – National Food Institute website project — UX/UI Design, Web Development, Lab Service Search ...",
      "h1": "NFI – National Food Institute — Public-Sector Website & Service Search",
      "client": "NFI – National Food Institute",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "Lab Service Search System",
        "Research Content Organization"
      ],
      "intro": "NFI – National Food Institute offers a wide range of services to businesses and researchers, but its previous website buried that range behind unclear navigation. Haliviq's build focused on service discoverability — organizing complex institutional offerings into categories and a working search system so the site serves its actual users rather than just existing as a digital brochure.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Government & Public Sector"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Make it possible for a first-time visitor to find the specific service they need in under a minute.",
        "Organize a wide range of institutional services into clear, navigable categories.",
        "Present process and turnaround information clearly enough to reduce inbound inquiry calls.",
        "Build a modern, credible public-sector web presence."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Responsive public-sector website",
        "Service and research content organized into clear categories",
        "Working search system for institutional services",
        "Process and turnaround-time information pages",
        "Downloadable-document structure for public resources"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Institutional research",
          "desc": "Gathered the full service structure and the user groups each service serves."
        },
        {
          "title": "Information architecture",
          "desc": "Organized services and research into categories a non-expert visitor can navigate."
        },
        {
          "title": "Development",
          "desc": "Built a fast, accessible website serving a wide range of business and research users."
        },
        {
          "title": "Content organization",
          "desc": "Structured service and research content to be complete and searchable."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front-end",
        "Service search & filtering system",
        "Cloud hosting & CDN",
        "Content management for institutional updates",
        "Accessible, standards-based markup",
        "On-page SEO foundation"
      ],
      "resultsHeading": "Results",
      "results": [
        "New Website with services now organized for self-service discovery.",
        "A working search system reducing reliance on phone-based inquiries.",
        "Clear process and turnaround information published for the first time.",
        "A modern web presence appropriate to a public institution's credibility needs."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A public-sector website with a service-search system like this typically ships in around three months."
        },
        {
          "question": "What technologies were used?",
          "answer": "A Next.js front end with a dedicated search and filtering system, content management for institutional updates, and CDN-backed cloud hosting."
        },
        {
          "question": "Can this be adapted for other public institutions?",
          "answer": "Yes — the service-categorization and search architecture applies to other government bodies and institutes with a wide service catalog."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/nfi/cover.jpg"
    }
  },
  {
    "slug": "mbk",
    "industryTag": "Retail & Shopping Mall",
    "year": "2025",
    "th": {
      "metaTitle": "MBK Center แอป — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ แอปมือถือ MBK Center โดย Haliviq พร้อม ออกแบบ UX/UI พัฒนาแอปมือถือ ระบบค้นหาร้านค้าและโปรโมชัน",
      "h1": "MBK Center — แอปมือถือ — ค้นหาร้านค้าและระบบสมาชิก",
      "client": "MBK Center",
      "badge": "Retail & Shopping Mall",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาแอปมือถือ",
        "ระบบค้นหาร้านค้าและโปรโมชัน",
        "ระบบสมาชิกและสิทธิพิเศษ"
      ],
      "intro": "MBK Center ต้องการแอปมือถือที่แก้ปัญหาสองอย่างที่ผู้มาเยือนศูนย์การค้าเจอจริง คือการหาร้านค้าหรือโปรโมชันที่ต้องการ และการรู้ว่ามีสิทธิพิเศษสมาชิกอะไรบ้างในตอนนั้น Haliviq ส่งมอบแอปมือถือพร้อมระบบค้นหาร้านค้าและโปรโมชัน รวมถึงชั้นระบบสมาชิก/สิทธิพิเศษ สร้างเป็นเครื่องมือที่ลูกค้าเปิดใช้ขณะอยู่ในศูนย์จริง",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Retail & Shopping Mall"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "แอปมือถือ (iOS และ Android)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "มอบวิธีให้ลูกค้าหาร้านค้าหรือโปรโมชันที่ต้องการได้เร็วภายในศูนย์การค้าขนาดใหญ่",
        "เปลี่ยนสิทธิพิเศษสมาชิกให้เป็นสิ่งที่ลูกค้าเช็กอย่างสม่ำเสมอ ไม่ใช่บัตรที่ลืมไปแล้ว",
        "ลดการพึ่งพาป้ายไดเรกทอรีแบบคงที่สำหรับข้อมูลร้านค้าและโปรโมชัน",
        "สร้างแพลตฟอร์มที่ทีมการตลาดของศูนย์ส่งโปรโมชันเข้าไปได้โดยตรง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "แอปมือถือที่ให้ความรู้สึกเนทีฟบน iOS และ Android",
        "ระบบค้นหาร้านค้าและโปรโมชันด้วยคอนเทนต์แบบเรียลไทม์",
        "ระบบสมาชิกและสิทธิพิเศษที่ผนวกเข้ากับแอป",
        "งานออกแบบ UX/UI ครอบคลุมการ Onboarding การค้นหา และบัญชีสมาชิก",
        "โครงสร้างคอนเทนต์ฝั่งแอดมินสำหรับทีมการตลาดของศูนย์"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "วิจัยผู้ใช้และผู้มีส่วนได้ส่วนเสีย",
          "desc": "เก็บข้อมูลพฤติกรรมการค้นหาร้านค้าและโปรโมชันของลูกค้าจริง และวิธีที่ทีมศูนย์จัดการข้อมูลร้านค้า"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบการค้นหา การเรียกดูโปรโมชัน และขั้นตอนสมาชิกให้เหมาะกับการใช้งานขณะอยู่ในศูนย์"
        },
        {
          "title": "พัฒนาแอปมือถือ",
          "desc": "พัฒนาแอปพร้อมระบบค้นหาร้านค้า/โปรโมชัน และการผนวกระบบสมาชิก"
        },
        {
          "title": "สนับสนุนการเปิดตัว",
          "desc": "ส่งมอบโครงสร้างคอนเทนต์ฝั่งแอดมินให้ทีมการตลาดจัดการรายการและโปรโมชันได้โดยตรง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "เฟรมเวิร์กแอปมือถือข้ามแพลตฟอร์ม",
        "ระบบค้นหาร้านค้าและโปรโมชัน",
        "การเชื่อมต่อแบ็กเอนด์ระบบสมาชิก/สิทธิพิเศษ",
        "Cloud hosting & โครงสร้าง API",
        "รองรับ Push notification",
        "แผงจัดการคอนเทนต์ฝั่งแอดมิน"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "แอปใหม่ที่เป็นทางเลือกแทนป้ายไดเรกทอรีแบบคงที่ได้โดยตรง",
        "ระบบค้นหาที่แสดงร้านค้าและโปรโมชันได้ภายในไม่กี่วินาที",
        "ชั้นระบบสมาชิกที่ออกแบบให้ถูกเช็กอยู่เสมอ ไม่ใช่ถูกลืม",
        "ไปป์ไลน์คอนเทนต์ที่ทีมการตลาดดูแลเองได้โดยไม่ต้องพึ่งทีมวิศวกรรม"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "แอปมือถือพร้อมระบบค้นหาและสมาชิกแบบนี้ มักใช้เวลาประมาณสองถึงสามเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เฟรมเวิร์กแอปมือถือข้ามแพลตฟอร์ม ระบบค้นหาร้านค้า/โปรโมชันโดยเฉพาะ และแบ็กเอนด์ระบบสมาชิกที่เชื่อมกับระบบเดิมของศูนย์"
        },
        {
          "question": "ปรับใช้กับศูนย์การค้าหรือกลุ่มค้าปลีกอื่นได้ไหม",
          "answer": "ได้ สถาปัตยกรรมค้นหาร้านค้าและระบบสมาชิกนี้ใช้ได้กับผู้ดำเนินการศูนย์การค้าหรือค้าปลีกแบบหลายผู้เช่าอื่นๆ"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/mbk/cover.jpg"
    },
    "en": {
      "metaTitle": "MBK Center App Project — Haliviq",
      "metaDescription": "See the deliverables, tech stack, and results behind the MBK Center mobile app project — UX/UI Design, Mobile App Development, Store & Promotion Search Sys...",
      "h1": "MBK Center — Mobile App — Store Discovery & Membership",
      "client": "MBK Center",
      "badge": "Retail & Shopping Mall",
      "servicesProvided": [
        "UX/UI Design",
        "Mobile App Development",
        "Store & Promotion Search System",
        "Membership & Rewards System"
      ],
      "intro": "MBK Center needed a mobile app that solves the two problems every mall visitor actually has: finding a specific store or promotion, and knowing what membership perks are available right now. Haliviq delivered a mobile app with a store-and-promotion search system and a membership/rewards layer, built as a utility shoppers open while they're already on-site.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Retail & Shopping Mall"
        },
        {
          "label": "Platform",
          "value": "Mobile App (iOS & Android)"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Give shoppers a fast way to find a specific store or current promotion inside a large mall.",
        "Turn membership perks into something shoppers actively check, not a card they forget.",
        "Reduce reliance on static directory signage for store and promotion information.",
        "Build a platform the mall's marketing team can push offers through directly."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Native-feeling mobile app for iOS and Android",
        "Store and promotion search system with real-time content",
        "Membership and rewards system integrated into the app",
        "UX/UI design covering onboarding, search, and member account flows",
        "Admin-side content structure for the mall's marketing team"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "User & stakeholder research",
          "desc": "Gathered how shoppers actually search for stores and promotions on-site, and how the mall team manages store data."
        },
        {
          "title": "UX/UI design",
          "desc": "Designed search, promotion browsing, and membership flows around on-site, in-the-moment use."
        },
        {
          "title": "Mobile app development",
          "desc": "Built the app with a store/promotion search system and membership integration."
        },
        {
          "title": "Rollout support",
          "desc": "Delivered an admin content structure so the marketing team can manage listings and promotions directly."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Cross-platform mobile app framework",
        "Store & promotion search system",
        "Membership/rewards backend integration",
        "Cloud hosting & API infrastructure",
        "Push notification support",
        "Admin content management panel"
      ],
      "resultsHeading": "Results",
      "results": [
        "New App giving shoppers a direct replacement for static directory signage.",
        "A search system that surfaces stores and promotions in seconds.",
        "A membership layer designed to be checked, not forgotten.",
        "A content pipeline the marketing team runs without engineering involvement."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A mobile app with search and membership systems like this typically ships in around two to three months."
        },
        {
          "question": "What technologies were used?",
          "answer": "A cross-platform mobile app framework, a dedicated store/promotion search system, and a membership backend connected to the mall's existing systems."
        },
        {
          "question": "Can this be adapted for other malls or retail groups?",
          "answer": "Yes — the store-search and membership architecture generalizes to other multi-tenant retail or shopping-mall operators."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/mbk/cover.jpg"
    }
  },
  {
    "slug": "ditp",
    "industryTag": "Government & Public Sector",
    "year": "2025",
    "th": {
      "metaTitle": "DITP กรมส่งเสริมการค้าระหว่างประเทศ แอป — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ แอปมือถือ DITP กรมส่งเสริมการค้าระหว่างประเทศ โดย Haliviq พร้อม ออกแบบ UX/UI พัฒนาแอปมือถือ ระบบข้อมูลต...",
      "h1": "DITP กรมส่งเสริมการค้าระหว่างประเทศ — การพัฒนาแอปมือถือเพื่อบริการสาธารณะ",
      "client": "DITP กรมส่งเสริมการค้าระหว่างประเทศ",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาแอปมือถือ",
        "ระบบข้อมูลตลาดส่งออก",
        "เชื่อมต่อฐานข้อมูลผู้ประกอบการ"
      ],
      "intro": "DITP กรมส่งเสริมการค้าระหว่างประเทศ ต้องการแอปมือถือที่ขยายภารกิจของหน่วยงานไปสู่ผู้ใช้สาธารณะแบบมือถือเป็นหลัก สร้างบนความเป็นจริงของการเชื่อมต่อกับข้อมูลและระบบภาครัฐที่มีอยู่แล้ว ไม่ใช่แอปผู้บริโภคที่เริ่มจากศูนย์ Haliviq ดูแลทั้งการออกแบบ UX/UI และการพัฒนา รวมถึงงานเชื่อมต่อข้อมูลที่ทำให้แอปภาครัฐใช้งานได้จริงตั้งแต่วันเปิดตัว",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Government & Public Sector"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "แอปมือถือ (iOS และ Android)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "นำบริการหรือคอนเทนต์ของหน่วยงานไปสู่ผู้ใช้สาธารณะแบบมือถือเป็นหลัก",
        "เชื่อมต่อกับแหล่งข้อมูลภาครัฐที่มีอยู่อย่างราบรื่น แทนที่จะสร้างข้อมูลซ้ำ",
        "ออกแบบให้ครอบคลุมผู้ใช้หลากหลายกลุ่ม รวมถึงประชาชนที่ไม่คุ้นเคยกับเทคโนโลยี",
        "สร้างแพลตฟอร์มที่หน่วยงานต่อยอดฟีเจอร์ใหม่ได้ในอนาคต"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "แอปมือถือที่ให้ความรู้สึกเนทีฟบน iOS และ Android",
        "งานออกแบบ UX/UI ที่เหมาะกับผู้ใช้สาธารณะวงกว้างที่ไม่ใช่สายเทคนิค",
        "การเชื่อมต่อกับฐานข้อมูลและระบบภาครัฐที่มีอยู่",
        "โครงสร้างคอนเทนต์ที่หน่วยงานอัปเดตเองได้",
        "รูปแบบอินเทอร์เฟซที่คำนึงถึงการเข้าถึง (Accessibility)"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "สำรวจผู้มีส่วนได้ส่วนเสียและข้อมูล",
          "desc": "สำรวจระบบและแหล่งข้อมูลที่มีอยู่ซึ่งแอปจำเป็นต้องเชื่อมต่อ"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบสำหรับผู้ใช้สาธารณะวงกว้าง โดยให้ความสำคัญกับความชัดเจนมากกว่าความหนาแน่นของข้อมูล"
        },
        {
          "title": "พัฒนาแอปมือถือ",
          "desc": "พัฒนาแอปและเชื่อมต่อกับข้อมูลและระบบที่มีอยู่ของหน่วยงาน"
        },
        {
          "title": "ส่งมอบและวางแผนต่อยอด",
          "desc": "ส่งมอบแอปพร้อมโครงสร้างที่หน่วยงานต่อยอดด้วยฟีเจอร์ใหม่ในอนาคตได้"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "เฟรมเวิร์กแอปมือถือข้ามแพลตฟอร์ม",
        "การเชื่อมต่อข้อมูล/API ภาครัฐ",
        "Cloud hosting & โครงสร้างแบ็กเอนด์",
        "ไลบรารี UI ที่เข้าถึงได้",
        "ระบบจัดการคอนเทนต์สำหรับอัปเดตของหน่วยงาน",
        "สถาปัตยกรรมยืนยันตัวตนที่ปลอดภัย"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "แอปใหม่ที่ขยายบริการของหน่วยงานไปสู่ผู้ใช้แบบมือถือเป็นหลัก",
        "การเชื่อมต่อข้อมูลที่หลีกเลี่ยงการสร้างข้อมูลซ้ำซ้อนระหว่างระบบ",
        "อินเทอร์เฟซที่ออกแบบสำหรับผู้ใช้สาธารณะวงกว้างที่ไม่ใช่สายเทคนิค",
        "แพลตฟอร์มที่วางโครงสร้างให้หน่วยงานต่อยอดความสามารถใหม่ได้ในอนาคต"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "แอปมือถือภาครัฐพร้อมการเชื่อมต่อระบบแบบนี้ มักใช้เวลาประมาณสองถึงสามเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เฟรมเวิร์กแอปมือถือข้ามแพลตฟอร์มที่เชื่อมต่อกับฐานข้อมูลของหน่วยงาน ติดตั้งบนโครงสร้างคลาวด์พร้อมการยืนยันตัวตนที่ปลอดภัย"
        },
        {
          "question": "ปรับใช้กับหน่วยงานภาครัฐอื่นได้ไหม",
          "answer": "ได้ แนวทางการเชื่อมต่อข้อมูลและ UX ที่เข้าถึงได้นี้ใช้ได้กับหน่วยงานภาครัฐอื่นที่นำบริการสู่มือถือ"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/ditp/cover.jpg"
    },
    "en": {
      "metaTitle": "DITP App Project — Haliviq",
      "metaDescription": "See the deliverables, tech stack, and results behind the DITP mobile app project — UX/UI Design, Mobile App Development, Export Market Data System, and mor...",
      "h1": "DITP — Mobile App Development for Public Service",
      "client": "DITP",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "UX/UI Design",
        "Mobile App Development",
        "Export Market Data System",
        "Business Database Integration"
      ],
      "intro": "DITP needed a mobile app that extends an institutional mandate to a mobile-first public audience, built on the realities of integrating with existing government data and systems rather than a greenfield consumer app. Haliviq handled the UX/UI design and development, including the data-integration work that makes a public-sector app actually useful on launch day.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Government & Public Sector"
        },
        {
          "label": "Platform",
          "value": "Mobile App (iOS & Android)"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Bring an institutional service or content set to a mobile-first public audience.",
        "Integrate cleanly with existing government data sources rather than duplicating them.",
        "Design for a broad range of users, including less tech-familiar citizens.",
        "Build a platform the agency can extend with new features over time."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Native-feeling mobile app for iOS and Android",
        "UX/UI design suited to a broad, non-technical public audience",
        "Integration with existing government databases and systems",
        "Content structure the agency can keep current internally",
        "Accessibility-conscious interface patterns"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Stakeholder & data discovery",
          "desc": "Mapped the existing systems and data sources the app needs to connect to."
        },
        {
          "title": "UX/UI design",
          "desc": "Designed for a broad public audience, prioritizing clarity over density."
        },
        {
          "title": "Mobile app development",
          "desc": "Built the app and integrated it with the agency's existing data and systems."
        },
        {
          "title": "Handover & extension planning",
          "desc": "Delivered the app with a structure the agency can extend with future features."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Cross-platform mobile app framework",
        "Government data/API integration",
        "Cloud hosting & backend infrastructure",
        "Accessible UI component library",
        "Content management for agency updates",
        "Secure authentication architecture"
      ],
      "resultsHeading": "Results",
      "results": [
        "New App extending the agency's service to a mobile-first audience.",
        "Data integration that avoids duplicating records across systems.",
        "An interface designed for a broad, non-technical public user base.",
        "A platform structured for the agency to extend with new capability over time."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A public-sector mobile app with system integration like this typically ships in around two to three months."
        },
        {
          "question": "What technologies were used?",
          "answer": "A cross-platform mobile app framework integrated with the agency's existing databases, deployed on cloud infrastructure with secure authentication."
        },
        {
          "question": "Can this be adapted for other government agencies?",
          "answer": "Yes — the data-integration and accessible-UX approach applies to other public agencies bringing services to mobile."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/ditp/cover.jpg"
    }
  },
  {
    "slug": "sra-bua",
    "industryTag": "F&B",
    "year": "2025",
    "th": {
      "metaTitle": "Sra Bua by Kiin Kiin เว็บไซต์ — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ เว็บไซต์ Sra Bua by Kiin Kiin โดย Haliviq พร้อม ออกแบบ UX/UI พัฒนาเว็บไซต์ ระบบจองโต๊ะออนไลน์",
      "h1": "Sra Bua by Kiin Kiin — สรุปงานเว็บไซต์และประสบการณ์ลูกค้าดิจิทัล",
      "client": "Sra Bua by Kiin Kiin",
      "badge": "F&B",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "ระบบจองโต๊ะออนไลน์",
        "กำกับภาพถ่ายและคอนเทนต์"
      ],
      "intro": "Sra Bua by Kiin Kiin ต้องการมากกว่าเมนูออนไลน์ — ต้องการหน้าด่านดิจิทัลที่ถ่ายทอดมาตรฐานไฟน์ไดนิ่งได้ตั้งแต่วินาทีแรกที่ผู้ใช้เข้าชม Haliviq ส่งมอบเว็บไซต์สองภาษาพร้อมระบบจองโต๊ะ สร้างจากภาพถ่ายอาหารความละเอียดสูง โครงสร้างเมนูชิมที่ชัดเจน และจังหวะการจัดวางที่สื่อถึงคุณภาพก่อนอ่านข้อความสักคำ บทความนี้สรุปงานที่ส่งมอบ เทคโนโลยีเบื้องหลัง และผลลัพธ์ที่วัดได้ จากมุมมองด้านปฏิบัติการร้านอาหารและวิศวกรรมเว็บ",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "F&B"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "แทนที่เว็บไซต์เดิมที่ล้าสมัยหรือไม่มีอยู่ ด้วยเว็บไซต์ที่สมกับระดับราคาและมาตรฐานการบริการของร้าน",
        "ลดความยุ่งยากในการจองผ่านโทรศัพท์ ด้วยช่องทางจองออนไลน์ที่เข้าถึงได้จากหน้าแรก",
        "มอบโครงสร้างคอนเทนต์ให้ทีมครัวและหน้าร้านอัปเดตเองได้โดยไม่ต้องพึ่งนักพัฒนา",
        "วางรากฐานให้ SEO เติบโตต่อเนื่องในคำค้นหาไฟน์ไดนิ่งที่มีการแข่งขันสูงในกรุงเทพฯ"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์สองภาษา (ไทย/อังกฤษ) ที่รองรับทุกขนาดหน้าจอ",
        "หน้าแรกและแกลเลอรีเมนูที่ขับเน้นด้วยภาพถ่ายความละเอียดสูง",
        "การนำเสนอเมนูชิม ไวน์ลิสต์ และเมนูตามฤดูกาลอย่างเป็นระบบ",
        "ระบบจองโต๊ะออนไลน์เชื่อมต่อโดยตรงจากหน้าหลัก",
        "หน้าเรื่องราวเชฟและแบรนด์สำหรับใช้ในงานสื่อและประชาสัมพันธ์",
        "ฟอร์มติดต่อสำหรับการจัดงานส่วนตัวและกรุ๊ปใหญ่"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "สำรวจและเก็บข้อมูลหน้างาน",
          "desc": "ลงพื้นที่ที่ร้านเพื่อสังเกตจังหวะการเสิร์ฟ การจัดจาน และการเคลื่อนไหวของแขก แล้วแปลงข้อมูลเหล่านั้นเป็นการตัดสินใจด้านเลย์เอาต์และภาพจริง ไม่ใช่การเดา"
        },
        {
          "title": "วางโครงสร้างข้อมูล",
          "desc": "จัดวางทุกหน้าที่ลูกค้าต้องการ — เมนู การจอง ที่ตั้ง เรื่องราว — ให้เข้าถึงได้ในจำนวนคลิกน้อยที่สุด"
        },
        {
          "title": "พัฒนาและเชื่อมต่อระบบ",
          "desc": "พัฒนาฝั่งหน้าเว็บ เชื่อมระบบจองโต๊ะ และปรับการโหลดภาพให้เว็บที่เน้นภาพถ่ายยังคงโหลดเร็ว"
        },
        {
          "title": "เปิดตัวและส่งมอบคอนเทนต์",
          "desc": "ส่งมอบโครงสร้างคอนเทนต์ที่แก้ไขได้ พร้อมเซสชันอบรมสั้นๆ ให้ทีมอัปเดตเมนูและภาพได้เอง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "Headless CMS สำหรับอัปเดตเมนูและคอนเทนต์",
        "Cloud hosting & CDN สำหรับส่งภาพ",
        "ระบบจองโต๊ะออนไลน์",
        "สถาปัตยกรรมคอนเทนต์สองภาษา",
        "พื้นฐาน SEO บนหน้าเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้เว็บไซต์ใหม่ตามกำหนดเวลา แทนที่เว็บไซต์เดิมที่ไม่สามารถรองรับการวางตำแหน่งแบรนด์ได้",
        "ช่องทางจองโต๊ะที่เข้าถึงได้ภายในสองคลิกจากทุกหน้า ลดการพึ่งพาการจองทางโทรศัพท์",
        "โครงสร้างคอนเทนต์ที่ร้านปรับให้ทันฤดูกาลได้เองโดยไม่ต้องพึ่งนักพัฒนาต่อเนื่อง",
        "พื้นฐาน SEO ทั้งเชิงเทคนิคและบนหน้าเว็บที่พร้อมเติบโตในคำค้นหาไฟน์ไดนิ่ง"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์ของ Sra Bua by Kiin Kiin ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์ร้านอาหารสองภาษาที่เน้นภาพถ่ายแบบนี้ มักใช้เวลาสองถึงสามเดือนตั้งแต่เก็บข้อมูลจนถึงเปิดตัว ขึ้นอยู่กับความพร้อมของภาพถ่ายและเนื้อหา"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เว็บไซต์สร้างด้วย Next.js ฝั่งหน้าบ้าน ควบคู่กับ Headless CMS สำหรับคอนเทนต์ ติดตั้งบน Cloud hosting ที่มี CDN รองรับการโหลดภาพเร็ว พร้อมระบบจองโต๊ะโดยเฉพาะ"
        },
        {
          "question": "แนวทางนี้ปรับใช้กับแบรนด์ร้านอาหารอื่นได้ไหม",
          "answer": "ได้ โครงสร้างแบบเดียวกัน — เมนูเป็นศูนย์กลางการนำทาง ระบบจอง คอนเทนต์สองภาษา และแชทบอท AI เสริม — ปรับใช้ได้ดีกับแบรนด์ไฟน์ไดนิ่งหรือร้านอาหารหลายสาขาอื่นๆ"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/sra-bua/cover.jpg"
    },
    "en": {
      "metaTitle": "Sra Bua by Kiin Kiin Website Project — Haliviq",
      "metaDescription": "See the deliverables, tech stack, and results behind the Sra Bua by Kiin Kiin website project — UX/UI Design, Web Development, Online Reservation System, a...",
      "h1": "Sra Bua by Kiin Kiin — Website Build & Digital Guest Experience",
      "client": "Sra Bua by Kiin Kiin",
      "badge": "F&B",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "Online Reservation System",
        "Photography & Content Direction"
      ],
      "intro": "Sra Bua by Kiin Kiin needed more than a menu online — it needed a digital front door that could carry a fine-dining reputation into the first few seconds of a visitor's browsing session. Haliviq delivered a bilingual, reservation-ready website built around high-resolution food photography, a clear tasting-menu structure, and the kind of pacing and whitespace that signals quality before a single word is read. This write-up breaks down the deliverables, the technology behind the build, and the measurable outcomes, from a restaurant-operations and web-engineering perspective rather than a brand-storytelling one.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "F&B"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Replace an outdated or missing web presence with a site that matches the restaurant's price point and service standard.",
        "Reduce phone-based reservation friction by surfacing an online booking path from the homepage.",
        "Give the kitchen and front-of-house team a content structure they can keep current without a developer.",
        "Build a foundation that supports future SEO growth in competitive Bangkok fine-dining search terms."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Fully responsive, bilingual (Thai/English) marketing website",
        "High-resolution photography-led homepage and menu gallery",
        "Structured presentation of tasting menus, wine lists, and seasonal specials",
        "Online table-reservation integration connected directly from key pages",
        "Chef and brand-story page to support press and PR use",
        "A contact and inquiry flow for private events and group bookings"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Discovery & on-site audit",
          "desc": "Spent time at Sra Bua by Kiin Kiin observing service pacing, plating, and guest flow to translate those cues into layout and imagery decisions rather than guessing at them."
        },
        {
          "title": "Information architecture",
          "desc": "Mapped every page a prospective guest needs — menu, reservations, location, story — into the smallest number of clicks possible."
        },
        {
          "title": "Build & integration",
          "desc": "Implemented the front end, wired up the reservation flow, and optimized image delivery so a photography-heavy site still loads quickly."
        },
        {
          "title": "Launch & content handover",
          "desc": "Delivered an editable content structure and a short handover session so the team can update menus and photos independently."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front-end",
        "Headless CMS for menu & content updates",
        "Cloud hosting & CDN for image delivery",
        "Online reservation integration",
        "Bilingual content architecture",
        "On-page SEO foundation"
      ],
      "resultsHeading": "Results",
      "results": [
        "New Website delivered on schedule, replacing a web presence that could not support the brand's positioning.",
        "A reservation path now reachable within two clicks from every page, reducing reliance on phone bookings.",
        "A content structure the restaurant can keep seasonally current without ongoing developer involvement.",
        "A technical and on-page SEO foundation ready to compound over time in fine-dining search terms."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How long did the Sra Bua by Kiin Kiin project take?",
          "answer": "Timelines for a bilingual, photography-led restaurant site like this typically run two to three months from discovery through launch, depending on how quickly photography and copy are finalized."
        },
        {
          "question": "What technologies were used?",
          "answer": "The site is built on a modern Next.js front end with a headless CMS for content, deployed on a CDN-backed cloud host for fast image delivery, plus a dedicated reservation integration."
        },
        {
          "question": "Can this approach be adapted for other restaurant brands?",
          "answer": "Yes — the same structure (menu-first navigation, reservation integration, bilingual content, optional AI concierge) adapts cleanly to other fine-dining or multi-location F&B brands."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/sra-bua/cover.jpg"
    }
  },
  {
    "slug": "world-surprise-travel",
    "industryTag": "Travel & Tourism",
    "year": "2025",
    "th": {
      "metaTitle": "World Surprise Travel เว็บไซต์ — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ เว็บไซต์ World Surprise Travel โดย Haliviq พร้อม ออกแบบ Branding ออกแบบ UX/UI พัฒนาเว็บไซต์",
      "h1": "World Surprise Travel — สรุปงานแบรนด์ เว็บไซต์ และ AI CRM",
      "client": "World Surprise Travel",
      "badge": "Travel & Tourism",
      "servicesProvided": [
        "ออกแบบ Branding",
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "พัฒนา AI CRM"
      ],
      "intro": "World Surprise Travel ต้องการสามสิ่งที่บริษัททัวร์ส่วนใหญ่ไม่ได้รับในงานเดียวกัน คือแบรนด์ที่มีเอกลักษณ์ชัดเจน เว็บไซต์ที่ขายแพ็กเกจทัวร์ได้จริง และ CRM ที่สร้างขึ้นสำหรับวิธีที่การจองทัวร์และความสัมพันธ์ลูกค้าทำงานจริง Haliviq ส่งมอบทั้งสามอย่างเป็นระบบเดียวที่เชื่อมโยงกัน แทนที่จะเป็นผลงานจากผู้ให้บริการสามรายที่แยกขาดจากกัน",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Travel & Tourism"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "มอบเอกลักษณ์แบรนด์ที่สอดคล้องกันให้ใช้ได้ทั้งบนเว็บและสื่อออฟไลน์",
        "สร้างเว็บไซต์ที่นำเสนอและขายแพ็กเกจทัวร์ได้จริง ไม่ใช่แค่แนะนำบริษัท",
        "แทนที่การติดตามลูกค้าด้วยสเปรดชีตด้วย CRM ที่สร้างสำหรับวงจรการขายทัวร์",
        "เชื่อมแบรนด์ เว็บไซต์ และ CRM เป็นระบบเดียวแทนเครื่องมือที่แยกกันสามชิ้น"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "งานออกแบบแบรนด์เต็มรูปแบบ (โลโก้ ระบบสี และภาษาภาพ)",
        "เว็บไซต์ที่รองรับทุกขนาดหน้าจอ นำเสนอและขายแพ็กเกจทัวร์",
        "AI CRM สำหรับจัดการลีด การจอง และความสัมพันธ์ลูกค้า",
        "งานออกแบบ UX/UI ที่เชื่อมประสบการณ์เว็บไซต์และ CRM เข้าด้วยกัน",
        "โครงสร้างคอนเทนต์สำหรับแพ็กเกจ โปรโมชัน และข้อเสนอตามฤดูกาล"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "กลยุทธ์แบรนด์และออกแบบเอกลักษณ์",
          "desc": "พัฒนาเอกลักษณ์แบรนด์ที่สะท้อนตำแหน่งทางการตลาดของบริษัทในธุรกิจท่องเที่ยว"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบประสบการณ์เว็บไซต์และ CRM ให้เป็นระบบเดียวที่เชื่อมโยงกัน"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ที่วางโครงสร้างรอบการเลือกชมและซื้อแพ็กเกจทัวร์"
        },
        {
          "title": "พัฒนา AI CRM",
          "desc": "พัฒนา CRM ที่ปรับแต่งสำหรับการจัดการลีดและการจองในธุรกิจท่องเที่ยว"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "ระบบเอกลักษณ์แบรนด์",
        "Next.js front-end",
        "แพลตฟอร์ม CRM ที่ช่วยด้วย AI",
        "Cloud hosting & CDN",
        "ระบบจัดการคอนเทนต์การจอง/แพ็กเกจ",
        "พื้นฐาน SEO บนหน้าเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เว็บไซต์ใหม่เปิดตัวพร้อมเอกลักษณ์แบรนด์ใหม่และ AI CRM",
        "เว็บไซต์ที่สร้างมาเพื่อขายแพ็กเกจโดยตรง ไม่ใช่แค่แนะนำบริษัท",
        "CRM ที่แทนที่การติดตามลูกค้าและการจองด้วยสเปรดชีต",
        "ระบบเดียวที่เชื่อมโยงตั้งแต่แบรนด์ไปจนถึง CRM แทนเครื่องมือแยกกันสามชิ้น"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "งานรวมแบรนด์ เว็บไซต์ และ AI CRM แบบนี้ มักใช้เวลาสามถึงสี่เดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เว็บไซต์ Next.js เชื่อมต่อกับแพลตฟอร์ม CRM ที่ช่วยด้วย AI ติดตั้งบน Cloud hosting ที่มี CDN"
        },
        {
          "question": "ปรับใช้กับบริษัททัวร์หรือท่องเที่ยวอื่นได้ไหม",
          "answer": "ได้ การผสานแบรนด์ เว็บไซต์ และ CRM นี้ใช้ได้โดยตรงกับบริษัททัวร์และเอเจนซี่ท่องเที่ยวอื่นที่ต้องการทั้งสามอย่างในระบบเดียว"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/world-surprise-travel/cover.jpg"
    },
    "en": {
      "metaTitle": "World Surprise Travel Website Project — Haliviq",
      "metaDescription": "See the deliverables, tech stack, and results behind the World Surprise Travel website project — Brand Identity Design, UX/UI Design, Web Development, and ...",
      "h1": "World Surprise Travel — Brand, Website & AI CRM Build",
      "client": "World Surprise Travel",
      "badge": "Travel & Tourism",
      "servicesProvided": [
        "Brand Identity Design",
        "UX/UI Design",
        "Web Development",
        "AI CRM Development"
      ],
      "intro": "World Surprise Travel needed three things most tour operators don't get in one engagement: a coherent brand identity, a website that actually sells travel packages, and a CRM built for how travel bookings and customer relationships really work. Haliviq delivered all three as one connected system rather than three disconnected vendors' outputs.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Travel & Tourism"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Give the company a coherent brand identity to use consistently across web and offline materials.",
        "Build a website that presents and sells travel packages clearly, not just describes the company.",
        "Replace spreadsheet-based customer tracking with a CRM built for travel sales cycles.",
        "Connect brand, website, and CRM as one system instead of three disconnected tools."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Full brand identity design (logo, color system, visual language)",
        "Responsive website presenting and selling travel packages",
        "AI CRM for managing leads, bookings, and customer relationships",
        "UX/UI design connecting the website and CRM experience",
        "Content structure for packages, promotions, and seasonal offers"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Brand strategy & identity design",
          "desc": "Developed a brand identity reflecting the company's positioning in the travel market."
        },
        {
          "title": "UX/UI design",
          "desc": "Designed the website and CRM experience as one connected system."
        },
        {
          "title": "Website development",
          "desc": "Built a website structured around browsing and purchasing travel packages."
        },
        {
          "title": "AI CRM development",
          "desc": "Built a CRM tuned for travel-industry lead and booking management."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Brand identity system",
        "Next.js front-end",
        "AI-assisted CRM platform",
        "Cloud hosting & CDN",
        "Booking/package content management",
        "On-page SEO foundation"
      ],
      "resultsHeading": "Results",
      "results": [
        "New Website launched alongside a new brand identity and AI CRM.",
        "A website built to sell packages directly, not just describe the company.",
        "A CRM replacing spreadsheet-based customer and booking tracking.",
        "One connected brand-to-CRM system instead of three disconnected tools."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A combined brand, website, and AI CRM build like this typically runs three to four months."
        },
        {
          "question": "What technologies were used?",
          "answer": "A Next.js website connected to an AI-assisted CRM platform, deployed on cloud hosting with CDN-backed delivery."
        },
        {
          "question": "Can this be adapted for other travel or tour companies?",
          "answer": "Yes — the brand-website-CRM combination applies directly to other tour operators and travel agencies needing all three in one system."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/world-surprise-travel/cover.jpg"
    }
  },
  {
    "slug": "awii-house",
    "industryTag": "Construction & Real Estate",
    "year": "2025",
    "th": {
      "metaTitle": "Awii House เว็บไซต์ — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ เว็บไซต์ Awii House โดย Haliviq พร้อม ออกแบบ UX/UI พัฒนาเว็บไซต์ พัฒนาระบบ CRM",
      "h1": "Awii House — สรุปงานเว็บไซต์ แบรนด์ และ CRM อสังหาริมทรัพย์",
      "client": "Awii House",
      "badge": "Construction & Real Estate",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "พัฒนาระบบ CRM",
        "แกลเลอรีแบบบ้านและผลงาน"
      ],
      "intro": "Awii House ต้องการติดตามลูกค้าตั้งแต่สอบถามครั้งแรกจนถึงเซ็นสัญญา ซึ่งเว็บไซต์การตลาดเพียงอย่างเดียวทำไม่ได้ Haliviq สร้างเว็บไซต์คู่กับ CRM เฉพาะทาง เพื่อให้ทุกลีดที่เข้ามาผ่านเว็บไซต์ถูกติดตามและแปลงผลด้วยข้อมูลที่ทีมขายมองเห็นได้จริง",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Construction & Real Estate"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "จับและติดตามลีดทุกรายตั้งแต่เข้าชมเว็บไซต์ครั้งแรกจนถึงเซ็นสัญญา",
        "ให้ทีมขายมองเห็นข้อมูลผ่าน CRM แทนการพึ่งสเปรดชีตหรือแอปแชทที่กระจัดกระจาย",
        "นำเสนอโครงการหรือผลงานด้วยคุณภาพภาพถ่ายและเลย์เอาต์ที่สมกับระดับราคา",
        "สร้างระบบที่ขยายตัวได้เมื่อมีโครงการหรือยูนิตใหม่เพิ่มเข้ามา"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์การตลาดที่รองรับทุกขนาดหน้าจอสำหรับโครงการหรือผลงาน",
        "CRM อสังหาริมทรัพย์เฉพาะทางสำหรับติดตามลีดและไปป์ไลน์",
        "การนำเสนอแกลเลอรีและผลงานสำหรับยูนิต แบบบ้าน หรือผลงานที่ผ่านมา",
        "ฟอร์มจับลีดที่เชื่อมต่อเข้า CRM โดยตรง",
        "โครงสร้างคอนเทนต์สำหรับอัปเดตโครงการหรือยูนิตอย่างต่อเนื่อง"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "วิจัยธุรกิจและขั้นตอนการขาย",
          "desc": "ทำแผนผังไปป์ไลน์การขายจริงตั้งแต่สอบถามจนถึงเซ็นสัญญาก่อนออกแบบ CRM"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบเว็บไซต์และ CRM ให้มีขั้นตอนจับลีดและติดตามที่สอดคล้องกัน"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์การตลาดที่เน้นภาพถ่ายสำหรับโครงการหรือผลงาน"
        },
        {
          "title": "พัฒนา CRM",
          "desc": "พัฒนา CRM ที่ปรับแต่งตามไปป์ไลน์การขายอสังหาริมทรัพย์ เชื่อมต่อกับการจับลีดจากเว็บไซต์โดยตรง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "การพัฒนา CRM อสังหาริมทรัพย์",
        "การเชื่อมต่อฟอร์มจับลีด",
        "Cloud hosting & CDN",
        "ระบบจัดการคอนเทนต์แกลเลอรี/ผลงาน",
        "พื้นฐาน SEO บนหน้าเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เว็บไซต์ใหม่ควบคู่กับ CRM ที่ติดตามลีดตั้งแต่เข้าชมครั้งแรกจนถึงเซ็นสัญญา",
        "ไปป์ไลน์การขายที่ทีมมองเห็นและจัดการได้ในที่เดียว",
        "การนำเสนอแกลเลอรีที่สมกับระดับราคาและตำแหน่งของโครงการ",
        "ระบบที่วางโครงสร้างให้ขยายตัวเมื่อมียูนิตหรือโครงการใหม่เปิดตัว"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "งานเว็บไซต์คู่กับ CRM แบบนี้ มักใช้เวลาสองถึงสามเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เว็บไซต์การตลาด Next.js เชื่อมต่อโดยตรงกับ CRM อสังหาริมทรัพย์เฉพาะทาง ติดตั้งบน Cloud hosting ที่มี CDN"
        },
        {
          "question": "ปรับใช้กับผู้พัฒนาโครงการหรือบริษัทรับสร้างบ้านอื่นได้ไหม",
          "answer": "ได้ การผสานเว็บไซต์กับ CRM นี้ใช้ได้โดยตรงกับผู้พัฒนาอสังหาริมทรัพย์และบริษัทรับสร้างบ้านอื่นที่ต้องการติดตามลีดตั้งแต่สอบถามจนถึงเซ็นสัญญา"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/awii-house/cover.jpg"
    },
    "en": {
      "metaTitle": "Awii House Website Project — Haliviq",
      "metaDescription": "See the deliverables, tech stack, and results behind the Awii House website project — UX/UI Design, Web Development, CRM Development, and more, built by Ha...",
      "h1": "Awii House — Website, Brand & Real Estate CRM Build",
      "client": "Awii House",
      "badge": "Construction & Real Estate",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "CRM Development",
        "House Design & Portfolio Gallery"
      ],
      "intro": "Awii House needed to track prospects from first inquiry through contract signing, which a marketing website alone can't do. Haliviq built a website paired with a dedicated CRM, so every lead that comes through the site is tracked, followed up, and converted using data the sales team actually has visibility into.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Construction & Real Estate"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Capture and track every lead from first website visit through to contract.",
        "Give the sales team CRM visibility instead of relying on scattered spreadsheets or messaging apps.",
        "Present the project or portfolio with photography and layout quality that matches the price point.",
        "Build a system that scales as new projects or units are added."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Responsive marketing website for the project or portfolio",
        "Dedicated real estate CRM for lead and pipeline tracking",
        "Gallery and portfolio presentation for units, designs, or past work",
        "Lead-capture forms connected directly into the CRM",
        "Content structure for ongoing project or unit updates"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Business & sales-process research",
          "desc": "Mapped the actual sales pipeline from inquiry to contract before designing the CRM."
        },
        {
          "title": "UX/UI design",
          "desc": "Designed the website and CRM to share a consistent lead-capture and tracking flow."
        },
        {
          "title": "Website development",
          "desc": "Built a photography-forward marketing site for the project or portfolio."
        },
        {
          "title": "CRM development",
          "desc": "Built a CRM tuned to the real estate sales pipeline, connected directly to website lead capture."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front-end",
        "Real estate CRM development",
        "Lead-capture form integration",
        "Cloud hosting & CDN",
        "Gallery/portfolio content management",
        "On-page SEO foundation"
      ],
      "resultsHeading": "Results",
      "results": [
        "New Website paired with a CRM tracking leads from first visit to contract.",
        "A sales pipeline the team can see and manage in one place.",
        "A gallery presentation matched to the project's price point and positioning.",
        "A system built to extend as new units or projects launch."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A website-plus-CRM build like this typically runs two to three months."
        },
        {
          "question": "What technologies were used?",
          "answer": "A Next.js marketing website connected directly to a dedicated real estate CRM, deployed on cloud hosting with CDN delivery."
        },
        {
          "question": "Can this be adapted for other developers or home builders?",
          "answer": "Yes — the website-plus-CRM pairing applies directly to other real estate developers and home builders needing lead tracking from inquiry to contract."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/awii-house/cover.jpg"
    }
  },
  {
    "slug": "canapaya-residences",
    "industryTag": "Real Estate",
    "year": "2025",
    "th": {
      "metaTitle": "Canapaya Residences เว็บไซต์ — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ เว็บไซต์ Canapaya Residences โดย Haliviq พร้อม ออกแบบ Brand CI ออกแบบ UX/UI พัฒนาเว็บไซต์",
      "h1": "Canapaya Residences — สรุปงานเว็บไซต์ แบรนด์ และ CRM อสังหาริมทรัพย์",
      "client": "Canapaya Residences",
      "badge": "Real Estate",
      "servicesProvided": [
        "ออกแบบ Brand CI",
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "พัฒนา CRM อสังหาริมทรัพย์"
      ],
      "intro": "Canapaya Residences ต้องการติดตามลูกค้าตั้งแต่สอบถามครั้งแรกจนถึงเซ็นสัญญา ซึ่งเว็บไซต์การตลาดเพียงอย่างเดียวทำไม่ได้ Haliviq สร้างเว็บไซต์คู่กับ CRM เฉพาะทาง เพื่อให้ทุกลีดที่เข้ามาผ่านเว็บไซต์ถูกติดตามและแปลงผลด้วยข้อมูลที่ทีมขายมองเห็นได้จริง",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Real Estate"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "จับและติดตามลีดทุกรายตั้งแต่เข้าชมเว็บไซต์ครั้งแรกจนถึงเซ็นสัญญา",
        "ให้ทีมขายมองเห็นข้อมูลผ่าน CRM แทนการพึ่งสเปรดชีตหรือแอปแชทที่กระจัดกระจาย",
        "นำเสนอโครงการหรือผลงานด้วยคุณภาพภาพถ่ายและเลย์เอาต์ที่สมกับระดับราคา",
        "สร้างระบบที่ขยายตัวได้เมื่อมีโครงการหรือยูนิตใหม่เพิ่มเข้ามา"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์การตลาดที่รองรับทุกขนาดหน้าจอสำหรับโครงการหรือผลงาน",
        "CRM อสังหาริมทรัพย์เฉพาะทางสำหรับติดตามลีดและไปป์ไลน์",
        "การนำเสนอแกลเลอรีและผลงานสำหรับยูนิต แบบบ้าน หรือผลงานที่ผ่านมา",
        "ฟอร์มจับลีดที่เชื่อมต่อเข้า CRM โดยตรง",
        "โครงสร้างคอนเทนต์สำหรับอัปเดตโครงการหรือยูนิตอย่างต่อเนื่อง"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "วิจัยธุรกิจและขั้นตอนการขาย",
          "desc": "ทำแผนผังไปป์ไลน์การขายจริงตั้งแต่สอบถามจนถึงเซ็นสัญญาก่อนออกแบบ CRM"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบเว็บไซต์และ CRM ให้มีขั้นตอนจับลีดและติดตามที่สอดคล้องกัน"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์การตลาดที่เน้นภาพถ่ายสำหรับโครงการหรือผลงาน"
        },
        {
          "title": "พัฒนา CRM",
          "desc": "พัฒนา CRM ที่ปรับแต่งตามไปป์ไลน์การขายอสังหาริมทรัพย์ เชื่อมต่อกับการจับลีดจากเว็บไซต์โดยตรง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "การพัฒนา CRM อสังหาริมทรัพย์",
        "การเชื่อมต่อฟอร์มจับลีด",
        "Cloud hosting & CDN",
        "ระบบจัดการคอนเทนต์แกลเลอรี/ผลงาน",
        "พื้นฐาน SEO บนหน้าเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เว็บไซต์ใหม่ควบคู่กับ CRM ที่ติดตามลีดตั้งแต่เข้าชมครั้งแรกจนถึงเซ็นสัญญา",
        "ไปป์ไลน์การขายที่ทีมมองเห็นและจัดการได้ในที่เดียว",
        "การนำเสนอแกลเลอรีที่สมกับระดับราคาและตำแหน่งของโครงการ",
        "ระบบที่วางโครงสร้างให้ขยายตัวเมื่อมียูนิตหรือโครงการใหม่เปิดตัว"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "งานเว็บไซต์คู่กับ CRM แบบนี้ มักใช้เวลาสองถึงสามเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เว็บไซต์การตลาด Next.js เชื่อมต่อโดยตรงกับ CRM อสังหาริมทรัพย์เฉพาะทาง ติดตั้งบน Cloud hosting ที่มี CDN"
        },
        {
          "question": "ปรับใช้กับผู้พัฒนาโครงการหรือบริษัทรับสร้างบ้านอื่นได้ไหม",
          "answer": "ได้ การผสานเว็บไซต์กับ CRM นี้ใช้ได้โดยตรงกับผู้พัฒนาอสังหาริมทรัพย์และบริษัทรับสร้างบ้านอื่นที่ต้องการติดตามลีดตั้งแต่สอบถามจนถึงเซ็นสัญญา"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/canapaya-residences/cover.jpg"
    },
    "en": {
      "metaTitle": "Canapaya Residences Website Project — Haliviq",
      "metaDescription": "See the deliverables, tech stack, and results behind the Canapaya Residences website project — Brand CI Design, UX/UI Design, Web Development, and more, bu...",
      "h1": "Canapaya Residences — Website, Brand & Real Estate CRM Build",
      "client": "Canapaya Residences",
      "badge": "Real Estate",
      "servicesProvided": [
        "Brand CI Design",
        "UX/UI Design",
        "Web Development",
        "Real Estate CRM Development"
      ],
      "intro": "Canapaya Residences needed to track prospects from first inquiry through contract signing, which a marketing website alone can't do. Haliviq built a website paired with a dedicated CRM, so every lead that comes through the site is tracked, followed up, and converted using data the sales team actually has visibility into.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Real Estate"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Capture and track every lead from first website visit through to contract.",
        "Give the sales team CRM visibility instead of relying on scattered spreadsheets or messaging apps.",
        "Present the project or portfolio with photography and layout quality that matches the price point.",
        "Build a system that scales as new projects or units are added."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Responsive marketing website for the project or portfolio",
        "Dedicated real estate CRM for lead and pipeline tracking",
        "Gallery and portfolio presentation for units, designs, or past work",
        "Lead-capture forms connected directly into the CRM",
        "Content structure for ongoing project or unit updates"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Business & sales-process research",
          "desc": "Mapped the actual sales pipeline from inquiry to contract before designing the CRM."
        },
        {
          "title": "UX/UI design",
          "desc": "Designed the website and CRM to share a consistent lead-capture and tracking flow."
        },
        {
          "title": "Website development",
          "desc": "Built a photography-forward marketing site for the project or portfolio."
        },
        {
          "title": "CRM development",
          "desc": "Built a CRM tuned to the real estate sales pipeline, connected directly to website lead capture."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front-end",
        "Real estate CRM development",
        "Lead-capture form integration",
        "Cloud hosting & CDN",
        "Gallery/portfolio content management",
        "On-page SEO foundation"
      ],
      "resultsHeading": "Results",
      "results": [
        "New Website paired with a CRM tracking leads from first visit to contract.",
        "A sales pipeline the team can see and manage in one place.",
        "A gallery presentation matched to the project's price point and positioning.",
        "A system built to extend as new units or projects launch."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A website-plus-CRM build like this typically runs two to three months."
        },
        {
          "question": "What technologies were used?",
          "answer": "A Next.js marketing website connected directly to a dedicated real estate CRM, deployed on cloud hosting with CDN delivery."
        },
        {
          "question": "Can this be adapted for other developers or home builders?",
          "answer": "Yes — the website-plus-CRM pairing applies directly to other real estate developers and home builders needing lead tracking from inquiry to contract."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/canapaya-residences/cover.jpg"
    }
  },
  {
    "slug": "rfs",
    "industryTag": "Telecommunications",
    "year": "2025",
    "th": {
      "metaTitle": "RFS เว็บไซต์ — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ เว็บไซต์ RFS โดย Haliviq พร้อม ออกแบบ UX/UI พัฒนาเว็บไซต์ พัฒนา AI CRM",
      "h1": "RFS — เว็บไซต์และ AI CRM สำหรับโซลูชัน B2B",
      "client": "RFS",
      "badge": "Telecommunications",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "พัฒนา AI CRM",
        "จัดระเบียบคอนเทนต์โซลูชัน"
      ],
      "intro": "RFS ขายโครงสร้างพื้นฐานโทรคมนาคมและโซลูชันสมาร์ทซิตี้ให้ลูกค้าองค์กรและภาครัฐ ซึ่งเป็นวงจรการขายที่ต้องพึ่งคอนเทนต์เชิงเทคนิคที่ชัดเจนและ CRM ที่สร้างขึ้นสำหรับดีลที่ใช้เวลานานและต้องให้คำปรึกษา Haliviq สร้างเว็บไซต์เพื่อนำเสนอพอร์ตโฟลิโอโซลูชันอย่างชัดเจน และ AI CRM เพื่อจัดการไปป์ไลน์องค์กรที่เกิดขึ้น",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Telecommunications"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "นำเสนอพอร์ตโฟลิโอโซลูชันเชิงเทคนิคอย่างชัดเจนให้ลูกค้าองค์กรและภาครัฐ",
        "แทนที่การติดตามไปป์ไลน์ด้วยมือ ด้วย CRM ที่สร้างสำหรับวงจรการขาย B2B ที่ยาวและต้องให้คำปรึกษา",
        "มอบเครื่องมือที่ช่วยด้วย AI ให้ทีมขายจัดการและจัดลำดับความสำคัญของลีดองค์กร",
        "สร้างความน่าเชื่อถือกับผู้ซื้อที่ประเมินผู้ให้บริการโครงสร้างพื้นฐานและสมาร์ทซิตี้"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์ B2B ที่รองรับทุกขนาดหน้าจอ นำเสนอพอร์ตโฟลิโอโซลูชัน",
        "AI CRM สำหรับจัดการลีดและไปป์ไลน์องค์กร",
        "คอนเทนต์โซลูชันที่จัดระเบียบตามกรณีการใช้งานและประเภทผู้ซื้อ",
        "ฟอร์มจับลีดและสอบถามที่เชื่อมต่อเข้า CRM",
        "คอนเทนต์เชิงเทคนิคที่จัดโครงสร้างสำหรับการค้นคว้าของฝ่ายจัดซื้อองค์กร"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "วิจัยธุรกิจและโซลูชัน",
          "desc": "เก็บข้อมูลพอร์ตโฟลิโอโซลูชันทั้งหมดและวิธีที่ผู้ซื้อองค์กร/ภาครัฐประเมินผู้ให้บริการ"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบเว็บไซต์ให้นำเสนอโซลูชันเชิงเทคนิคได้ชัดเจนทั้งต่อคณะกรรมการจัดซื้อที่ไม่ใช่สายเทคนิคและวิศวกร"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ B2B มืออาชีพที่จัดโครงสร้างรอบพอร์ตโฟลิโอโซลูชัน"
        },
        {
          "title": "พัฒนา AI CRM",
          "desc": "พัฒนา CRM ที่ปรับแต่งสำหรับวงจรการขายองค์กรและการจัดลำดับความสำคัญของลีด"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "แพลตฟอร์ม CRM ที่ช่วยด้วย AI",
        "การเชื่อมต่อฟอร์มจับลีด",
        "Cloud hosting & CDN",
        "ระบบจัดการคอนเทนต์โซลูชัน",
        "SEO บนหน้าเว็บสำหรับคำค้นหาองค์กร"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เว็บไซต์ใหม่ควบคู่กับ AI CRM ที่จัดการไปป์ไลน์องค์กร",
        "พอร์ตโฟลิโอโซลูชันที่นำเสนอได้ชัดเจนทั้งต่อผู้ซื้อสายเทคนิคและไม่ใช่สายเทคนิค",
        "การจัดลำดับความสำคัญลีดด้วย AI ที่แทนที่การติดตามไปป์ไลน์ด้วยมือ",
        "การนำเสนอ B2B ที่น่าเชื่อถือ เหมาะกับการจัดซื้อโครงสร้างพื้นฐานและสมาร์ทซิตี้"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "งานรวมเว็บไซต์และ AI CRM แบบนี้ มักใช้เวลาสองถึงสามเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เว็บไซต์ Next.js เชื่อมต่อกับแพลตฟอร์ม CRM ที่ช่วยด้วย AI ติดตั้งบน Cloud hosting ที่มี CDN"
        },
        {
          "question": "ปรับใช้กับบริษัทโครงสร้างพื้นฐาน B2B อื่นได้ไหม",
          "answer": "ได้ การผสานเว็บไซต์พอร์ตโฟลิโอโซลูชันกับ AI CRM นี้ใช้ได้กับผู้ให้บริการโครงสร้างพื้นฐานองค์กรหรือโซลูชันสมาร์ทซิตี้รายอื่น"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/rfs/cover.jpg"
    },
    "en": {
      "metaTitle": "RFS Website Project — Haliviq",
      "metaDescription": "See the deliverables, tech stack, and results behind the RFS website project — UX/UI Design, Web Development, AI CRM Development, and more, built by Haliviq.",
      "h1": "RFS — Website & AI CRM for B2B Solutions",
      "client": "RFS",
      "badge": "Telecommunications",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "AI CRM Development",
        "Solution Content Organization"
      ],
      "intro": "RFS sells telecom infrastructure and smart-city solutions to enterprise and government buyers — a sales cycle that depends on clear technical content and a CRM built for long, consultative deals. Haliviq built a website to present the solution portfolio clearly and an AI CRM to manage the resulting enterprise pipeline.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Telecommunications"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Present a technical solution portfolio clearly to enterprise and government buyers.",
        "Replace manual pipeline tracking with a CRM built for long, consultative B2B sales cycles.",
        "Give the sales team AI-assisted tools for managing and prioritizing enterprise leads.",
        "Build credibility with buyers evaluating infrastructure and smart-city vendors."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Responsive B2B website presenting the solution portfolio",
        "AI CRM for enterprise lead and pipeline management",
        "Solution content organized by use case and buyer type",
        "Lead-capture and inquiry forms connected to the CRM",
        "Technical content structured for enterprise procurement research"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Business & solution research",
          "desc": "Gathered the full solution portfolio and how enterprise/government buyers evaluate vendors."
        },
        {
          "title": "UX/UI design",
          "desc": "Designed the site to present technical solutions clearly to a non-technical buying committee as well as engineers."
        },
        {
          "title": "Website development",
          "desc": "Built a professional B2B website structured around the solution portfolio."
        },
        {
          "title": "AI CRM development",
          "desc": "Built a CRM tuned for enterprise sales cycles and lead prioritization."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front-end",
        "AI-assisted CRM platform",
        "Lead-capture form integration",
        "Cloud hosting & CDN",
        "Solution content management",
        "On-page SEO for enterprise search terms"
      ],
      "resultsHeading": "Results",
      "results": [
        "New Website paired with an AI CRM managing the enterprise pipeline.",
        "A solution portfolio presented clearly to both technical and non-technical buyers.",
        "AI-assisted lead prioritization replacing manual pipeline tracking.",
        "A credible B2B presentation suited to infrastructure and smart-city procurement."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A combined website and AI CRM build like this typically runs two to three months."
        },
        {
          "question": "What technologies were used?",
          "answer": "A Next.js website connected to an AI-assisted CRM platform, deployed on cloud hosting with CDN delivery."
        },
        {
          "question": "Can this be adapted for other B2B infrastructure companies?",
          "answer": "Yes — the solution-portfolio website and AI CRM pairing applies to other enterprise infrastructure or smart-city solution providers."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/rfs/cover.jpg"
    }
  },
  {
    "slug": "excise-department",
    "industryTag": "Government & Public Sector",
    "year": "2025",
    "th": {
      "metaTitle": "กรมสรรพสามิต แอป — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ แอปมือถือ กรมสรรพสามิต โดย Haliviq พร้อม ออกแบบ UX/UI พัฒนาแอปมือถือ เชื่อมต่อข้อมูลระหว่างหน่วยงาน",
      "h1": "กรมสรรพสามิต — การพัฒนาแอปมือถือเพื่อบริการสาธารณะ",
      "client": "กรมสรรพสามิต",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาแอปมือถือ",
        "เชื่อมต่อข้อมูลระหว่างหน่วยงาน",
        "ระบบตรวจสอบและยืนยันภาษี"
      ],
      "intro": "กรมสรรพสามิต ต้องการแอปมือถือที่ขยายภารกิจของหน่วยงานไปสู่ผู้ใช้สาธารณะแบบมือถือเป็นหลัก สร้างบนความเป็นจริงของการเชื่อมต่อกับข้อมูลและระบบภาครัฐที่มีอยู่แล้ว ไม่ใช่แอปผู้บริโภคที่เริ่มจากศูนย์ Haliviq ดูแลทั้งการออกแบบ UX/UI และการพัฒนา รวมถึงงานเชื่อมต่อข้อมูลที่ทำให้แอปภาครัฐใช้งานได้จริงตั้งแต่วันเปิดตัว",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Government & Public Sector"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "แอปมือถือ (iOS และ Android)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "นำบริการหรือคอนเทนต์ของหน่วยงานไปสู่ผู้ใช้สาธารณะแบบมือถือเป็นหลัก",
        "เชื่อมต่อกับแหล่งข้อมูลภาครัฐที่มีอยู่อย่างราบรื่น แทนที่จะสร้างข้อมูลซ้ำ",
        "ออกแบบให้ครอบคลุมผู้ใช้หลากหลายกลุ่ม รวมถึงประชาชนที่ไม่คุ้นเคยกับเทคโนโลยี",
        "สร้างแพลตฟอร์มที่หน่วยงานต่อยอดฟีเจอร์ใหม่ได้ในอนาคต"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "แอปมือถือที่ให้ความรู้สึกเนทีฟบน iOS และ Android",
        "งานออกแบบ UX/UI ที่เหมาะกับผู้ใช้สาธารณะวงกว้างที่ไม่ใช่สายเทคนิค",
        "การเชื่อมต่อกับฐานข้อมูลและระบบภาครัฐที่มีอยู่",
        "โครงสร้างคอนเทนต์ที่หน่วยงานอัปเดตเองได้",
        "รูปแบบอินเทอร์เฟซที่คำนึงถึงการเข้าถึง (Accessibility)"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "สำรวจผู้มีส่วนได้ส่วนเสียและข้อมูล",
          "desc": "สำรวจระบบและแหล่งข้อมูลที่มีอยู่ซึ่งแอปจำเป็นต้องเชื่อมต่อ"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบสำหรับผู้ใช้สาธารณะวงกว้าง โดยให้ความสำคัญกับความชัดเจนมากกว่าความหนาแน่นของข้อมูล"
        },
        {
          "title": "พัฒนาแอปมือถือ",
          "desc": "พัฒนาแอปและเชื่อมต่อกับข้อมูลและระบบที่มีอยู่ของหน่วยงาน"
        },
        {
          "title": "ส่งมอบและวางแผนต่อยอด",
          "desc": "ส่งมอบแอปพร้อมโครงสร้างที่หน่วยงานต่อยอดด้วยฟีเจอร์ใหม่ในอนาคตได้"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "เฟรมเวิร์กแอปมือถือข้ามแพลตฟอร์ม",
        "การเชื่อมต่อข้อมูล/API ภาครัฐ",
        "Cloud hosting & โครงสร้างแบ็กเอนด์",
        "ไลบรารี UI ที่เข้าถึงได้",
        "ระบบจัดการคอนเทนต์สำหรับอัปเดตของหน่วยงาน",
        "สถาปัตยกรรมยืนยันตัวตนที่ปลอดภัย"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "แอปใหม่ที่ขยายบริการของหน่วยงานไปสู่ผู้ใช้แบบมือถือเป็นหลัก",
        "การเชื่อมต่อข้อมูลที่หลีกเลี่ยงการสร้างข้อมูลซ้ำซ้อนระหว่างระบบ",
        "อินเทอร์เฟซที่ออกแบบสำหรับผู้ใช้สาธารณะวงกว้างที่ไม่ใช่สายเทคนิค",
        "แพลตฟอร์มที่วางโครงสร้างให้หน่วยงานต่อยอดความสามารถใหม่ได้ในอนาคต"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "แอปมือถือภาครัฐพร้อมการเชื่อมต่อระบบแบบนี้ มักใช้เวลาประมาณสองถึงสามเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เฟรมเวิร์กแอปมือถือข้ามแพลตฟอร์มที่เชื่อมต่อกับฐานข้อมูลของหน่วยงาน ติดตั้งบนโครงสร้างคลาวด์พร้อมการยืนยันตัวตนที่ปลอดภัย"
        },
        {
          "question": "ปรับใช้กับหน่วยงานภาครัฐอื่นได้ไหม",
          "answer": "ได้ แนวทางการเชื่อมต่อข้อมูลและ UX ที่เข้าถึงได้นี้ใช้ได้กับหน่วยงานภาครัฐอื่นที่นำบริการสู่มือถือ"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/excise-department/cover.jpg"
    },
    "en": {
      "metaTitle": "Excise Department App Project — Haliviq",
      "metaDescription": "See the deliverables, tech stack, and results behind the Excise Department mobile app project — UX/UI Design, Mobile App Development, Cross-Agency Data Int...",
      "h1": "Excise Department — Mobile App Development for Public Service",
      "client": "Excise Department",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "UX/UI Design",
        "Mobile App Development",
        "Cross-Agency Data Integration",
        "Tax Verification System"
      ],
      "intro": "Excise Department needed a mobile app that extends an institutional mandate to a mobile-first public audience, built on the realities of integrating with existing government data and systems rather than a greenfield consumer app. Haliviq handled the UX/UI design and development, including the data-integration work that makes a public-sector app actually useful on launch day.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Government & Public Sector"
        },
        {
          "label": "Platform",
          "value": "Mobile App (iOS & Android)"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Bring an institutional service or content set to a mobile-first public audience.",
        "Integrate cleanly with existing government data sources rather than duplicating them.",
        "Design for a broad range of users, including less tech-familiar citizens.",
        "Build a platform the agency can extend with new features over time."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Native-feeling mobile app for iOS and Android",
        "UX/UI design suited to a broad, non-technical public audience",
        "Integration with existing government databases and systems",
        "Content structure the agency can keep current internally",
        "Accessibility-conscious interface patterns"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Stakeholder & data discovery",
          "desc": "Mapped the existing systems and data sources the app needs to connect to."
        },
        {
          "title": "UX/UI design",
          "desc": "Designed for a broad public audience, prioritizing clarity over density."
        },
        {
          "title": "Mobile app development",
          "desc": "Built the app and integrated it with the agency's existing data and systems."
        },
        {
          "title": "Handover & extension planning",
          "desc": "Delivered the app with a structure the agency can extend with future features."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Cross-platform mobile app framework",
        "Government data/API integration",
        "Cloud hosting & backend infrastructure",
        "Accessible UI component library",
        "Content management for agency updates",
        "Secure authentication architecture"
      ],
      "resultsHeading": "Results",
      "results": [
        "New App extending the agency's service to a mobile-first audience.",
        "Data integration that avoids duplicating records across systems.",
        "An interface designed for a broad, non-technical public user base.",
        "A platform structured for the agency to extend with new capability over time."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A public-sector mobile app with system integration like this typically ships in around two to three months."
        },
        {
          "question": "What technologies were used?",
          "answer": "A cross-platform mobile app framework integrated with the agency's existing databases, deployed on cloud infrastructure with secure authentication."
        },
        {
          "question": "Can this be adapted for other government agencies?",
          "answer": "Yes — the data-integration and accessible-UX approach applies to other public agencies bringing services to mobile."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/excise-department/cover.jpg"
    }
  },
  {
    "slug": "itagc",
    "industryTag": "Government & Public Sector",
    "year": "2025",
    "th": {
      "metaTitle": "ITAGC เว็บไซต์ — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ เว็บไซต์ ITAGC โดย Haliviq พร้อม ออกแบบ UX/UI พัฒนาเว็บไซต์ ระบบตรวจสอบและประเมินผล",
      "h1": "ITAGC — เว็บไซต์ภาครัฐและระบบค้นหาบริการ",
      "client": "ITAGC",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "ระบบตรวจสอบและประเมินผล",
        "กำกับเนื้อหาและความน่าเชื่อถือ"
      ],
      "intro": "ITAGC มีบริการหลากหลายให้ผู้ประกอบการและนักวิจัย แต่เว็บไซต์เดิมซ่อนขอบเขตบริการเหล่านั้นไว้หลังการนำทางที่ไม่ชัดเจน งานของ Haliviq เน้นไปที่การค้นพบบริการ — จัดระเบียบบริการของหน่วยงานที่ซับซ้อนให้เป็นหมวดหมู่ พร้อมระบบค้นหาที่ใช้งานได้จริง เพื่อให้เว็บไซต์ทำหน้าที่รับใช้ผู้ใช้จริง ไม่ใช่แค่เป็นโบรชัวร์ดิจิทัล",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Government & Public Sector"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "ทำให้ผู้เข้าชมครั้งแรกหาบริการที่ต้องการได้ภายในไม่ถึงนาที",
        "จัดระเบียบบริการของหน่วยงานที่หลากหลายให้เป็นหมวดหมู่ที่ชัดเจนและนำทางง่าย",
        "นำเสนอข้อมูลขั้นตอนและระยะเวลาให้ชัดพอจะลดสายเรียกเข้าสอบถาม",
        "สร้างเว็บไซต์ภาครัฐที่ทันสมัยและน่าเชื่อถือ"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์ภาครัฐที่รองรับทุกขนาดหน้าจอ",
        "คอนเทนต์บริการและงานวิจัยที่จัดระเบียบเป็นหมวดหมู่ชัดเจน",
        "ระบบค้นหาบริการของหน่วยงานที่ใช้งานได้จริง",
        "หน้าข้อมูลขั้นตอนและระยะเวลาการให้บริการ",
        "โครงสร้างเอกสารดาวน์โหลดสำหรับทรัพยากรสาธารณะ"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "วิจัยหน่วยงาน",
          "desc": "เก็บข้อมูลโครงสร้างบริการทั้งหมดและกลุ่มผู้ใช้ของแต่ละบริการ"
        },
        {
          "title": "วางโครงสร้างข้อมูล",
          "desc": "จัดระเบียบบริการและงานวิจัยให้ผู้เข้าชมที่ไม่ใช่ผู้เชี่ยวชาญนำทางได้"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ที่โหลดเร็วและเข้าถึงได้ รองรับผู้ใช้ทั้งฝั่งธุรกิจและวิจัย"
        },
        {
          "title": "จัดระเบียบคอนเทนต์",
          "desc": "จัดโครงสร้างคอนเทนต์บริการและงานวิจัยให้ครบถ้วนและค้นหาได้"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "ระบบค้นหาและกรองบริการ",
        "Cloud hosting & CDN",
        "ระบบจัดการคอนเทนต์สำหรับอัปเดตของหน่วยงาน",
        "มาร์กอัปที่เข้าถึงได้ตามมาตรฐาน",
        "พื้นฐาน SEO บนหน้าเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เว็บไซต์ใหม่ที่จัดระเบียบบริการให้ค้นพบได้ด้วยตัวเอง",
        "ระบบค้นหาที่ใช้งานได้จริง ลดการพึ่งพาการสอบถามทางโทรศัพท์",
        "ข้อมูลขั้นตอนและระยะเวลาที่เผยแพร่อย่างชัดเจนเป็นครั้งแรก",
        "เว็บไซต์ทันสมัยที่สมกับความน่าเชื่อถือของหน่วยงานภาครัฐ"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์ภาครัฐพร้อมระบบค้นหาบริการแบบนี้ มักใช้เวลาประมาณสามเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ฝั่งหน้าบ้าน Next.js พร้อมระบบค้นหาและกรองโดยเฉพาะ ระบบจัดการคอนเทนต์สำหรับหน่วยงาน และ Cloud hosting ที่มี CDN"
        },
        {
          "question": "ปรับใช้กับหน่วยงานภาครัฐอื่นได้ไหม",
          "answer": "ได้ โครงสร้างการจัดหมวดหมู่บริการและระบบค้นหานี้ใช้ได้กับหน่วยงานหรือสถาบันภาครัฐอื่นที่มีบริการหลากหลาย"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/itagc/cover.jpg"
    },
    "en": {
      "metaTitle": "ITAGC Website Project — Haliviq",
      "metaDescription": "See the deliverables, tech stack, and results behind the ITAGC website project — UX/UI Design, Web Development, Assessment & Review System, and more, built...",
      "h1": "ITAGC — Public-Sector Website & Service Search",
      "client": "ITAGC",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "Assessment & Review System",
        "Content & Credibility Direction"
      ],
      "intro": "ITAGC offers a wide range of services to businesses and researchers, but its previous website buried that range behind unclear navigation. Haliviq's build focused on service discoverability — organizing complex institutional offerings into categories and a working search system so the site serves its actual users rather than just existing as a digital brochure.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Government & Public Sector"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Make it possible for a first-time visitor to find the specific service they need in under a minute.",
        "Organize a wide range of institutional services into clear, navigable categories.",
        "Present process and turnaround information clearly enough to reduce inbound inquiry calls.",
        "Build a modern, credible public-sector web presence."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Responsive public-sector website",
        "Service and research content organized into clear categories",
        "Working search system for institutional services",
        "Process and turnaround-time information pages",
        "Downloadable-document structure for public resources"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Institutional research",
          "desc": "Gathered the full service structure and the user groups each service serves."
        },
        {
          "title": "Information architecture",
          "desc": "Organized services and research into categories a non-expert visitor can navigate."
        },
        {
          "title": "Development",
          "desc": "Built a fast, accessible website serving a wide range of business and research users."
        },
        {
          "title": "Content organization",
          "desc": "Structured service and research content to be complete and searchable."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front-end",
        "Service search & filtering system",
        "Cloud hosting & CDN",
        "Content management for institutional updates",
        "Accessible, standards-based markup",
        "On-page SEO foundation"
      ],
      "resultsHeading": "Results",
      "results": [
        "New Website with services now organized for self-service discovery.",
        "A working search system reducing reliance on phone-based inquiries.",
        "Clear process and turnaround information published for the first time.",
        "A modern web presence appropriate to a public institution's credibility needs."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A public-sector website with a service-search system like this typically ships in around three months."
        },
        {
          "question": "What technologies were used?",
          "answer": "A Next.js front end with a dedicated search and filtering system, content management for institutional updates, and CDN-backed cloud hosting."
        },
        {
          "question": "Can this be adapted for other public institutions?",
          "answer": "Yes — the service-categorization and search architecture applies to other government bodies and institutes with a wide service catalog."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/itagc/cover.jpg"
    }
  },
  {
    "slug": "department-of-water-resources",
    "industryTag": "Government & Public Sector",
    "year": "2025",
    "th": {
      "metaTitle": "กรมทรัพยากรน้ำ แอป — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ แอปมือถือ กรมทรัพยากรน้ำ โดย Haliviq พร้อม พัฒนาแอปมือถือ พัฒนาโมดูล AI วิเคราะห์ข้อมูลทรัพยากรน้ำ",
      "h1": "กรมทรัพยากรน้ำ — แอปมือถือที่ขับเคลื่อนด้วย AI สำหรับภาครัฐ",
      "client": "กรมทรัพยากรน้ำ",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "พัฒนาแอปมือถือ",
        "พัฒนาโมดูล AI",
        "วิเคราะห์ข้อมูลทรัพยากรน้ำ",
        "ต่อยอดระบบเดิม"
      ],
      "intro": "กรมทรัพยากรน้ำ ต้องการเพิ่มความสามารถ AI ใหม่เข้าไปในแอปมือถือที่มีความสำคัญเชิงภารกิจ ทำให้โปรเจกต์นี้เป็นทั้งงานผสานระบบและการนำโมเดลไปใช้งานจริง พอๆ กับงานพัฒนาแอป Haliviq สร้างโมดูล AI และผนวกเข้ากับแอปมือถือ (ทั้งที่มีอยู่เดิมหรือสร้างใหม่) โดยเชื่อมต่อกับแหล่งข้อมูลจริงที่หน่วยงานพึ่งพาในการปฏิบัติงาน",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Government & Public Sector"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "แอปมือถือ (iOS และ Android)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "เพิ่มความสามารถ AI เฉพาะทาง (ตรวจสอบ วิเคราะห์ หรือจำแนกประเภท) เข้าสู่ขั้นตอนปฏิบัติงานของภาครัฐ",
        "ผนวกโมดูล AI เข้ากับข้อมูลจริงของหน่วยงาน ไม่ใช่ชุดข้อมูลนิ่งสำหรับทดสอบ",
        "รักษาความน่าเชื่อถือของระบบให้เจ้าหน้าที่ภาคสนามพึ่งพาได้ทุกวัน",
        "สร้างโมดูลที่ต่อยอดหรือฝึกใหม่ได้เมื่อความต้องการเปลี่ยนแปลง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "โมดูล AI ที่สร้างขึ้นเพื่องานตรวจสอบหรือวิเคราะห์เฉพาะทาง",
        "การผนวกเข้ากับแอปมือถือที่เชื่อมโมดูล AI เข้ากับขั้นตอนทำงานภาคสนาม",
        "การเชื่อมต่อกับระบบข้อมูลเดิมหรือระบบที่มีอยู่ของหน่วยงาน",
        "การทดสอบความน่าเชื่อถือและความแม่นยำกับข้อมูลปฏิบัติงานจริง",
        "เอกสารและการส่งมอบสำหรับการดูแลรักษาต่อเนื่องของหน่วยงาน"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "สำรวจการปฏิบัติงานและข้อมูล",
          "desc": "ศึกษาขั้นตอนทำงานเดิมและข้อมูลที่โมดูล AI จำเป็นต้องเข้าถึง"
        },
        {
          "title": "พัฒนาโมดูล AI",
          "desc": "สร้างและปรับแต่งโมเดลให้เหมาะกับงานตรวจสอบหรือวิเคราะห์ที่ต้องการ"
        },
        {
          "title": "ผนวกเข้ากับมือถือ",
          "desc": "ผนวกโมดูล AI เข้ากับแอปที่เจ้าหน้าที่ภาคสนามใช้งานประจำวัน"
        },
        {
          "title": "ตรวจสอบและส่งมอบ",
          "desc": "ทดสอบกับสถานการณ์ปฏิบัติงานจริงและส่งมอบเอกสารสำหรับการดูแลรักษาต่อเนื่อง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "การพัฒนาโมดูล AI/ML",
        "ชั้นการผนวกเข้ากับแอปมือถือ",
        "การเชื่อมต่อระบบเดิมและฐานข้อมูล",
        "โครงสร้างคลาวด์สำหรับการประมวลผลโมเดล",
        "สถาปัตยกรรมการจัดการข้อมูลที่ปลอดภัย",
        "ออกแบบ UX สำหรับการปฏิบัติงานภาคสนาม"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "แอปใหม่ที่เพิ่มความสามารถ AI เข้าสู่ระบบที่เจ้าหน้าที่ภาคสนามใช้งานจริง",
        "โมดูล AI ที่ผนวกกับข้อมูลหน่วยงานจริง ไม่ใช่แค่ทดสอบแบบแยกส่วน",
        "ขั้นตอนทำงานที่สร้างให้น่าเชื่อถือพอสำหรับการใช้งานภาคสนามประจำวัน",
        "โมดูลที่ขยายผลได้ ซึ่งหน่วยงานฝึกใหม่หรือต่อยอดได้ในอนาคต"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "โปรเจกต์ภาครัฐที่ขับเคลื่อนด้วย AI แบบนี้ มักใช้เวลาสองถึงสี่เดือนขึ้นอยู่กับความซับซ้อนของการเชื่อมต่อระบบ"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "โมดูล AI/ML ที่สร้างขึ้นเฉพาะทาง ผนวกเข้ากับแอปมือถือ เชื่อมต่อกับระบบเดิมของหน่วยงานผ่านสถาปัตยกรรมการจัดการข้อมูลที่ปลอดภัย"
        },
        {
          "question": "ปรับใช้กับหน่วยงานอื่นที่มีระบบเดิมได้ไหม",
          "answer": "ได้ รูปแบบการเพิ่มโมดูล AI บนระบบเดิมนี้ใช้ได้กับหน่วยงานอื่นที่ปรับปรุงระบบในที่เดิมแทนการสร้างใหม่ทั้งหมด"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/department-of-water-resources/cover.jpg"
    },
    "en": {
      "metaTitle": "Department of Water Resources App Project — Haliviq",
      "metaDescription": "See the deliverables, tech stack, and results behind the Department of Water Resources mobile app project — Mobile App Development, AI Module Development, ...",
      "h1": "Department of Water Resources — AI-Enabled Mobile App for Government",
      "client": "Department of Water Resources",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "Mobile App Development",
        "AI Module Development",
        "Water Resource Data Analysis",
        "Legacy System Extension"
      ],
      "intro": "Department of Water Resources needed new AI capability added to a mission-critical mobile app, which made this a systems-integration and model-deployment project as much as an app-development one. Haliviq built the AI module and integrated it into the existing (or newly built) mobile app, connecting it to live data sources the agency depends on operationally.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Government & Public Sector"
        },
        {
          "label": "Platform",
          "value": "Mobile App (iOS & Android)"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Add a specific AI capability (verification, analysis, or classification) to an operational government workflow.",
        "Integrate the AI module with live agency data rather than a static dataset.",
        "Keep the system reliable enough for field officers to depend on it daily.",
        "Build the module so it can be extended or retrained as requirements evolve."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "AI module built for a specific verification or analysis task",
        "Mobile app integration connecting the AI module to field workflows",
        "Integration with the agency's existing or legacy data systems",
        "Reliability and accuracy testing against real operational data",
        "Documentation and handover for ongoing agency maintenance"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Operational & data discovery",
          "desc": "Studied the existing workflow and the data the AI module would need access to."
        },
        {
          "title": "AI module development",
          "desc": "Built and tuned the model for the specific verification or analysis task required."
        },
        {
          "title": "Mobile integration",
          "desc": "Integrated the AI module into the app field officers use day to day."
        },
        {
          "title": "Validation & handover",
          "desc": "Tested against real operational scenarios and handed over documentation for ongoing maintenance."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "AI/ML module development",
        "Mobile app integration layer",
        "Legacy system & database integration",
        "Cloud infrastructure for model inference",
        "Secure data-handling architecture",
        "Field-operations UX design"
      ],
      "resultsHeading": "Results",
      "results": [
        "New App adding AI capability to a system field officers use operationally.",
        "An AI module integrated with live agency data rather than tested in isolation.",
        "A workflow built to be reliable enough for daily field use.",
        "An extensible module the agency can retrain or expand over time."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "AI-enabled government mobile projects like this typically run two to four months depending on integration complexity."
        },
        {
          "question": "What technologies were used?",
          "answer": "A purpose-built AI/ML module integrated into a mobile app, connected to the agency's existing systems via a secure data-handling architecture."
        },
        {
          "question": "Can this be adapted for other agencies with legacy systems?",
          "answer": "Yes — the pattern of adding an AI module on top of an existing legacy system generalizes to other agencies modernizing in place rather than rebuilding from scratch."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/department-of-water-resources/cover.jpg"
    }
  },
  {
    "slug": "immigration-bureau",
    "industryTag": "Government & Public Sector",
    "year": "2025",
    "th": {
      "metaTitle": "สำนักงานตรวจคนเข้าเมือง แอป — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ แอปมือถือ สำนักงานตรวจคนเข้าเมือง โดย Haliviq พร้อม พัฒนาแอปมือถือ พัฒนาโมดูล AI ตรวจสอบเอกสารและใบหน้า...",
      "h1": "สำนักงานตรวจคนเข้าเมือง — แอปมือถือที่ขับเคลื่อนด้วย AI สำหรับภาครัฐ",
      "client": "สำนักงานตรวจคนเข้าเมือง",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "พัฒนาแอปมือถือ",
        "พัฒนาโมดูล AI ตรวจสอบเอกสารและใบหน้า",
        "ระบบยืนยันตัวตน",
        "เชื่อมต่อฐานข้อมูลผู้เดินทาง"
      ],
      "intro": "สำนักงานตรวจคนเข้าเมือง ต้องการเพิ่มความสามารถ AI ใหม่เข้าไปในแอปมือถือที่มีความสำคัญเชิงภารกิจ ทำให้โปรเจกต์นี้เป็นทั้งงานผสานระบบและการนำโมเดลไปใช้งานจริง พอๆ กับงานพัฒนาแอป Haliviq สร้างโมดูล AI และผนวกเข้ากับแอปมือถือ (ทั้งที่มีอยู่เดิมหรือสร้างใหม่) โดยเชื่อมต่อกับแหล่งข้อมูลจริงที่หน่วยงานพึ่งพาในการปฏิบัติงาน",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Government & Public Sector"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "แอปมือถือ (iOS และ Android)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "เพิ่มความสามารถ AI เฉพาะทาง (ตรวจสอบ วิเคราะห์ หรือจำแนกประเภท) เข้าสู่ขั้นตอนปฏิบัติงานของภาครัฐ",
        "ผนวกโมดูล AI เข้ากับข้อมูลจริงของหน่วยงาน ไม่ใช่ชุดข้อมูลนิ่งสำหรับทดสอบ",
        "รักษาความน่าเชื่อถือของระบบให้เจ้าหน้าที่ภาคสนามพึ่งพาได้ทุกวัน",
        "สร้างโมดูลที่ต่อยอดหรือฝึกใหม่ได้เมื่อความต้องการเปลี่ยนแปลง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "โมดูล AI ที่สร้างขึ้นเพื่องานตรวจสอบหรือวิเคราะห์เฉพาะทาง",
        "การผนวกเข้ากับแอปมือถือที่เชื่อมโมดูล AI เข้ากับขั้นตอนทำงานภาคสนาม",
        "การเชื่อมต่อกับระบบข้อมูลเดิมหรือระบบที่มีอยู่ของหน่วยงาน",
        "การทดสอบความน่าเชื่อถือและความแม่นยำกับข้อมูลปฏิบัติงานจริง",
        "เอกสารและการส่งมอบสำหรับการดูแลรักษาต่อเนื่องของหน่วยงาน"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "สำรวจการปฏิบัติงานและข้อมูล",
          "desc": "ศึกษาขั้นตอนทำงานเดิมและข้อมูลที่โมดูล AI จำเป็นต้องเข้าถึง"
        },
        {
          "title": "พัฒนาโมดูล AI",
          "desc": "สร้างและปรับแต่งโมเดลให้เหมาะกับงานตรวจสอบหรือวิเคราะห์ที่ต้องการ"
        },
        {
          "title": "ผนวกเข้ากับมือถือ",
          "desc": "ผนวกโมดูล AI เข้ากับแอปที่เจ้าหน้าที่ภาคสนามใช้งานประจำวัน"
        },
        {
          "title": "ตรวจสอบและส่งมอบ",
          "desc": "ทดสอบกับสถานการณ์ปฏิบัติงานจริงและส่งมอบเอกสารสำหรับการดูแลรักษาต่อเนื่อง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "การพัฒนาโมดูล AI/ML",
        "ชั้นการผนวกเข้ากับแอปมือถือ",
        "การเชื่อมต่อระบบเดิมและฐานข้อมูล",
        "โครงสร้างคลาวด์สำหรับการประมวลผลโมเดล",
        "สถาปัตยกรรมการจัดการข้อมูลที่ปลอดภัย",
        "ออกแบบ UX สำหรับการปฏิบัติงานภาคสนาม"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "แอปใหม่ที่เพิ่มความสามารถ AI เข้าสู่ระบบที่เจ้าหน้าที่ภาคสนามใช้งานจริง",
        "โมดูล AI ที่ผนวกกับข้อมูลหน่วยงานจริง ไม่ใช่แค่ทดสอบแบบแยกส่วน",
        "ขั้นตอนทำงานที่สร้างให้น่าเชื่อถือพอสำหรับการใช้งานภาคสนามประจำวัน",
        "โมดูลที่ขยายผลได้ ซึ่งหน่วยงานฝึกใหม่หรือต่อยอดได้ในอนาคต"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "โปรเจกต์ภาครัฐที่ขับเคลื่อนด้วย AI แบบนี้ มักใช้เวลาสองถึงสี่เดือนขึ้นอยู่กับความซับซ้อนของการเชื่อมต่อระบบ"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "โมดูล AI/ML ที่สร้างขึ้นเฉพาะทาง ผนวกเข้ากับแอปมือถือ เชื่อมต่อกับระบบเดิมของหน่วยงานผ่านสถาปัตยกรรมการจัดการข้อมูลที่ปลอดภัย"
        },
        {
          "question": "ปรับใช้กับหน่วยงานอื่นที่มีระบบเดิมได้ไหม",
          "answer": "ได้ รูปแบบการเพิ่มโมดูล AI บนระบบเดิมนี้ใช้ได้กับหน่วยงานอื่นที่ปรับปรุงระบบในที่เดิมแทนการสร้างใหม่ทั้งหมด"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/immigration-bureau/cover.jpg"
    },
    "en": {
      "metaTitle": "Royal Thai Police Immigration Bureau App Project — Haliviq",
      "metaDescription": "See the deliverables, tech stack, and results behind the Royal Thai Police Immigration Bureau mobile app project — Mobile App Development, AI Document & Fa...",
      "h1": "Royal Thai Police Immigration Bureau — AI-Enabled Mobile App for Government",
      "client": "Royal Thai Police Immigration Bureau",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "Mobile App Development",
        "AI Document & Facial Verification Module",
        "Identity Verification System",
        "Traveler Database Integration"
      ],
      "intro": "Royal Thai Police Immigration Bureau needed new AI capability added to a mission-critical mobile app, which made this a systems-integration and model-deployment project as much as an app-development one. Haliviq built the AI module and integrated it into the existing (or newly built) mobile app, connecting it to live data sources the agency depends on operationally.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Government & Public Sector"
        },
        {
          "label": "Platform",
          "value": "Mobile App (iOS & Android)"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Add a specific AI capability (verification, analysis, or classification) to an operational government workflow.",
        "Integrate the AI module with live agency data rather than a static dataset.",
        "Keep the system reliable enough for field officers to depend on it daily.",
        "Build the module so it can be extended or retrained as requirements evolve."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "AI module built for a specific verification or analysis task",
        "Mobile app integration connecting the AI module to field workflows",
        "Integration with the agency's existing or legacy data systems",
        "Reliability and accuracy testing against real operational data",
        "Documentation and handover for ongoing agency maintenance"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Operational & data discovery",
          "desc": "Studied the existing workflow and the data the AI module would need access to."
        },
        {
          "title": "AI module development",
          "desc": "Built and tuned the model for the specific verification or analysis task required."
        },
        {
          "title": "Mobile integration",
          "desc": "Integrated the AI module into the app field officers use day to day."
        },
        {
          "title": "Validation & handover",
          "desc": "Tested against real operational scenarios and handed over documentation for ongoing maintenance."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "AI/ML module development",
        "Mobile app integration layer",
        "Legacy system & database integration",
        "Cloud infrastructure for model inference",
        "Secure data-handling architecture",
        "Field-operations UX design"
      ],
      "resultsHeading": "Results",
      "results": [
        "New App adding AI capability to a system field officers use operationally.",
        "An AI module integrated with live agency data rather than tested in isolation.",
        "A workflow built to be reliable enough for daily field use.",
        "An extensible module the agency can retrain or expand over time."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "AI-enabled government mobile projects like this typically run two to four months depending on integration complexity."
        },
        {
          "question": "What technologies were used?",
          "answer": "A purpose-built AI/ML module integrated into a mobile app, connected to the agency's existing systems via a secure data-handling architecture."
        },
        {
          "question": "Can this be adapted for other agencies with legacy systems?",
          "answer": "Yes — the pattern of adding an AI module on top of an existing legacy system generalizes to other agencies modernizing in place rather than rebuilding from scratch."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/immigration-bureau/cover.jpg"
    }
  },
  {
    "slug": "ministry-of-culture",
    "industryTag": "Government & Public Sector",
    "year": "2025",
    "th": {
      "metaTitle": "กระทรวงวัฒนธรรม แอป — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ แอปมือถือ กระทรวงวัฒนธรรม โดย Haliviq พร้อม พัฒนาแอปมือถือ ออกแบบ UX/UI รวบรวมและจัดระเบียบเนื้อหาวัฒนธรรม",
      "h1": "กระทรวงวัฒนธรรม — การพัฒนาแอปมือถือเพื่อบริการสาธารณะ",
      "client": "กระทรวงวัฒนธรรม",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "พัฒนาแอปมือถือ",
        "ออกแบบ UX/UI",
        "รวบรวมและจัดระเบียบเนื้อหาวัฒนธรรม",
        "เชื่อมต่อฐานข้อมูลจากเว็บไซต์เดิม"
      ],
      "intro": "กระทรวงวัฒนธรรม ต้องการแอปมือถือที่ขยายภารกิจของหน่วยงานไปสู่ผู้ใช้สาธารณะแบบมือถือเป็นหลัก สร้างบนความเป็นจริงของการเชื่อมต่อกับข้อมูลและระบบภาครัฐที่มีอยู่แล้ว ไม่ใช่แอปผู้บริโภคที่เริ่มจากศูนย์ Haliviq ดูแลทั้งการออกแบบ UX/UI และการพัฒนา รวมถึงงานเชื่อมต่อข้อมูลที่ทำให้แอปภาครัฐใช้งานได้จริงตั้งแต่วันเปิดตัว",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "Government & Public Sector"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "แอปมือถือ (iOS และ Android)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "นำบริการหรือคอนเทนต์ของหน่วยงานไปสู่ผู้ใช้สาธารณะแบบมือถือเป็นหลัก",
        "เชื่อมต่อกับแหล่งข้อมูลภาครัฐที่มีอยู่อย่างราบรื่น แทนที่จะสร้างข้อมูลซ้ำ",
        "ออกแบบให้ครอบคลุมผู้ใช้หลากหลายกลุ่ม รวมถึงประชาชนที่ไม่คุ้นเคยกับเทคโนโลยี",
        "สร้างแพลตฟอร์มที่หน่วยงานต่อยอดฟีเจอร์ใหม่ได้ในอนาคต"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "แอปมือถือที่ให้ความรู้สึกเนทีฟบน iOS และ Android",
        "งานออกแบบ UX/UI ที่เหมาะกับผู้ใช้สาธารณะวงกว้างที่ไม่ใช่สายเทคนิค",
        "การเชื่อมต่อกับฐานข้อมูลและระบบภาครัฐที่มีอยู่",
        "โครงสร้างคอนเทนต์ที่หน่วยงานอัปเดตเองได้",
        "รูปแบบอินเทอร์เฟซที่คำนึงถึงการเข้าถึง (Accessibility)"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "สำรวจผู้มีส่วนได้ส่วนเสียและข้อมูล",
          "desc": "สำรวจระบบและแหล่งข้อมูลที่มีอยู่ซึ่งแอปจำเป็นต้องเชื่อมต่อ"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบสำหรับผู้ใช้สาธารณะวงกว้าง โดยให้ความสำคัญกับความชัดเจนมากกว่าความหนาแน่นของข้อมูล"
        },
        {
          "title": "พัฒนาแอปมือถือ",
          "desc": "พัฒนาแอปและเชื่อมต่อกับข้อมูลและระบบที่มีอยู่ของหน่วยงาน"
        },
        {
          "title": "ส่งมอบและวางแผนต่อยอด",
          "desc": "ส่งมอบแอปพร้อมโครงสร้างที่หน่วยงานต่อยอดด้วยฟีเจอร์ใหม่ในอนาคตได้"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "เฟรมเวิร์กแอปมือถือข้ามแพลตฟอร์ม",
        "การเชื่อมต่อข้อมูล/API ภาครัฐ",
        "Cloud hosting & โครงสร้างแบ็กเอนด์",
        "ไลบรารี UI ที่เข้าถึงได้",
        "ระบบจัดการคอนเทนต์สำหรับอัปเดตของหน่วยงาน",
        "สถาปัตยกรรมยืนยันตัวตนที่ปลอดภัย"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "แอปใหม่ที่ขยายบริการของหน่วยงานไปสู่ผู้ใช้แบบมือถือเป็นหลัก",
        "การเชื่อมต่อข้อมูลที่หลีกเลี่ยงการสร้างข้อมูลซ้ำซ้อนระหว่างระบบ",
        "อินเทอร์เฟซที่ออกแบบสำหรับผู้ใช้สาธารณะวงกว้างที่ไม่ใช่สายเทคนิค",
        "แพลตฟอร์มที่วางโครงสร้างให้หน่วยงานต่อยอดความสามารถใหม่ได้ในอนาคต"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "แอปมือถือภาครัฐพร้อมการเชื่อมต่อระบบแบบนี้ มักใช้เวลาประมาณสองถึงสามเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เฟรมเวิร์กแอปมือถือข้ามแพลตฟอร์มที่เชื่อมต่อกับฐานข้อมูลของหน่วยงาน ติดตั้งบนโครงสร้างคลาวด์พร้อมการยืนยันตัวตนที่ปลอดภัย"
        },
        {
          "question": "ปรับใช้กับหน่วยงานภาครัฐอื่นได้ไหม",
          "answer": "ได้ แนวทางการเชื่อมต่อข้อมูลและ UX ที่เข้าถึงได้นี้ใช้ได้กับหน่วยงานภาครัฐอื่นที่นำบริการสู่มือถือ"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/ministry-of-culture/cover.jpg"
    },
    "en": {
      "metaTitle": "Ministry of Culture App Project — Haliviq",
      "metaDescription": "See the deliverables, tech stack, and results behind the Ministry of Culture mobile app project — Mobile App Development, UX/UI Design, Cultural Content Cu...",
      "h1": "Ministry of Culture — Mobile App Development for Public Service",
      "client": "Ministry of Culture",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "Mobile App Development",
        "UX/UI Design",
        "Cultural Content Curation",
        "Legacy Website Data Integration"
      ],
      "intro": "Ministry of Culture needed a mobile app that extends an institutional mandate to a mobile-first public audience, built on the realities of integrating with existing government data and systems rather than a greenfield consumer app. Haliviq handled the UX/UI design and development, including the data-integration work that makes a public-sector app actually useful on launch day.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Government & Public Sector"
        },
        {
          "label": "Platform",
          "value": "Mobile App (iOS & Android)"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Bring an institutional service or content set to a mobile-first public audience.",
        "Integrate cleanly with existing government data sources rather than duplicating them.",
        "Design for a broad range of users, including less tech-familiar citizens.",
        "Build a platform the agency can extend with new features over time."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Native-feeling mobile app for iOS and Android",
        "UX/UI design suited to a broad, non-technical public audience",
        "Integration with existing government databases and systems",
        "Content structure the agency can keep current internally",
        "Accessibility-conscious interface patterns"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Stakeholder & data discovery",
          "desc": "Mapped the existing systems and data sources the app needs to connect to."
        },
        {
          "title": "UX/UI design",
          "desc": "Designed for a broad public audience, prioritizing clarity over density."
        },
        {
          "title": "Mobile app development",
          "desc": "Built the app and integrated it with the agency's existing data and systems."
        },
        {
          "title": "Handover & extension planning",
          "desc": "Delivered the app with a structure the agency can extend with future features."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Cross-platform mobile app framework",
        "Government data/API integration",
        "Cloud hosting & backend infrastructure",
        "Accessible UI component library",
        "Content management for agency updates",
        "Secure authentication architecture"
      ],
      "resultsHeading": "Results",
      "results": [
        "New App extending the agency's service to a mobile-first audience.",
        "Data integration that avoids duplicating records across systems.",
        "An interface designed for a broad, non-technical public user base.",
        "A platform structured for the agency to extend with new capability over time."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "A public-sector mobile app with system integration like this typically ships in around two to three months."
        },
        {
          "question": "What technologies were used?",
          "answer": "A cross-platform mobile app framework integrated with the agency's existing databases, deployed on cloud infrastructure with secure authentication."
        },
        {
          "question": "Can this be adapted for other government agencies?",
          "answer": "Yes — the data-integration and accessible-UX approach applies to other public agencies bringing services to mobile."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/ministry-of-culture/cover.jpg"
    }
  },
  {
    "slug": "bbk-menu",
    "industryTag": "F&B",
    "year": "2025",
    "th": {
      "metaTitle": "BBK Menu เว็บไซต์ — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ เว็บไซต์ BBK Menu โดย Haliviq พร้อม ออกแบบ UX/UI พัฒนาเว็บไซต์ ระบบแนะนำร้านอาหาร",
      "h1": "BBK Menu — แพลตฟอร์มค้นหาร้านอาหาร — ออกแบบ UX และพัฒนาเว็บ",
      "client": "BBK Menu",
      "badge": "F&B",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "ระบบแนะนำร้านอาหาร",
        "กำกับภาพถ่ายและคอนเทนต์"
      ],
      "intro": "BBK Menu ตั้งเป้าช่วยให้คนหาร้านอาหารและเมนูเด็ดในกรุงเทพฯ ได้ง่ายขึ้น ซึ่งทำให้โจทย์หลักทางวิศวกรรมคือโครงสร้างคอนเทนต์และ UX การค้นหา/เรียกดู ไม่ใช่แค่งานออกแบบภาพ Haliviq นำทีมออกแบบ UX/UI ก่อนพัฒนาเว็บไซต์จริง โดยเน้นวิธีจัดระเบียบรายการร้านอาหารและเมนูหลายร้อยรายการให้ยังคงเรียกดูได้เร็วและดูแลง่าย",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "F&B"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์ (รองรับทุกขนาดหน้าจอ)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "4"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "ออกแบบโครงสร้างข้อมูลที่รองรับรายการร้านอาหารและเมนูได้หลายร้อยรายการโดยไม่ทำให้เรียกดูยาก",
        "ทำให้ผู้อ่านไปจากความอยากกินทั่วไปสู่คำแนะนำที่เจาะจงได้เร็ว",
        "มอบระบบคอนเทนต์ให้ทีมบรรณาธิการเผยแพร่รายการใหม่ได้โดยไม่ต้องพึ่งนักพัฒนา",
        "วางรากฐานเทคนิคที่เหมาะกับคำค้นหาแบบ long-tail เกี่ยวกับร้านอาหารและเมนู"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "ระบบออกแบบ UX/UI สำหรับแพลตฟอร์มคอนเทนต์ค้นหาร้านอาหาร",
        "เว็บไซต์ที่รองรับทุกขนาดหน้าจอพร้อมรายการร้านอาหารและเมนูที่กรองได้",
        "ระบบแนะนำและค้นหาร้านอาหาร",
        "โครงสร้างคอนเทนต์สำหรับการเผยแพร่ต่อเนื่อง",
        "ทิศทางภาพถ่ายและคอนเทนต์สำหรับหน้ารายการ"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ขั้นตอนออกแบบ UX/UI",
          "desc": "ออกแบบรูปแบบการเรียกดู กรอง และแสดงรายการก่อนเริ่มเขียนโค้ด พร้อมทดสอบกับข้อมูลร้านอาหารและเมนูจริง"
        },
        {
          "title": "วางโครงสร้างข้อมูล",
          "desc": "จัดหมวดหมู่ ย่าน และประเภทอาหารให้รองรับการขยายตัวโดยไม่กลายเป็นเขาวงกต"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ที่โหลดเร็วบนพื้นฐานระบบออกแบบที่อนุมัติแล้ว"
        },
        {
          "title": "ส่งมอบงานบรรณาธิการ",
          "desc": "ส่งมอบขั้นตอนเผยแพร่ที่ทีมบรรณาธิการดำเนินการเองได้"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "ระบบออกแบบ UX/UI",
        "Next.js front-end",
        "Headless CMS สำหรับรายการ",
        "สถาปัตยกรรมค้นหาและกรอง",
        "Cloud hosting & CDN",
        "พื้นฐาน SEO สำหรับคำค้นหา long-tail"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บไซต์ใหม่พร้อมระบบคอนเทนต์ที่รองรับการขยายตัวเกินกว่ารายการเริ่มต้น",
        "ประสบการณ์เรียกดูและกรองที่ออกแบบตามพฤติกรรมการหาร้านอาหารจริง",
        "ขั้นตอนบรรณาธิการที่ไม่ติดคอขวดที่เวลานักพัฒนา",
        "โครงสร้าง SEO ที่มุ่งเป้าความต้องการค้นหาแบบ \"ร้านที่ดีที่สุดในกรุงเทพฯ\""
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "ขั้นตอนออกแบบ UX/UI และการพัฒนาเว็บไซต์ต่อเนื่องสำหรับแพลตฟอร์มค้นหาแบบนี้ มักใช้เวลารวมกันหลายเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "ฝั่งหน้าบ้าน Next.js ควบคู่กับ Headless CMS สำหรับรายการร้านอาหารและเมนู สร้างบนสถาปัตยกรรมค้นหาและกรอง ติดตั้งบน Cloud hosting ที่มี CDN"
        },
        {
          "question": "ปรับใช้กับแพลตฟอร์มค้นหาหรือไดเรกทอรีอื่นได้ไหม",
          "answer": "ได้ โครงสร้างรายการ การกรอง และการเผยแพร่แบบเดียวกันนี้ใช้ได้กับแพลตฟอร์มค้นหาท้องถิ่นอื่นนอกเหนือจากร้านอาหาร"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/bbk-menu/cover.jpg"
    },
    "en": {
      "metaTitle": "BBK Menu Website Project — Haliviq",
      "metaDescription": "See the deliverables, tech stack, and results behind the BBK Menu website project — UX/UI Design, Web Development, Restaurant Discovery System, and more, b...",
      "h1": "BBK Menu — Restaurant Discovery Platform — UX & Web Build",
      "client": "BBK Menu",
      "badge": "F&B",
      "servicesProvided": [
        "UX/UI Design",
        "Web Development",
        "Restaurant Discovery System",
        "Photography & Content Direction"
      ],
      "intro": "BBK Menu set out to help people find Bangkok's best restaurants and must-try dishes, which made content architecture and search/browse UX the core engineering problem — not just visual design. Haliviq led the UX/UI design phase before building the website itself, focused on how a discovery platform organizes hundreds of restaurant and dish entries so they stay fast to browse and easy to maintain.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "F&B"
        },
        {
          "label": "Platform",
          "value": "Responsive Website"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "4"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Design an information architecture that scales to hundreds of restaurant and dish listings without becoming hard to browse.",
        "Make it fast for readers to go from a general craving to a specific recommendation.",
        "Give the editorial team a content system that does not require developer involvement to publish new listings.",
        "Build a technical foundation suited to long-tail restaurant and dish search queries."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "UX/UI design system for a restaurant-discovery content platform",
        "Responsive website with filterable restaurant and dish listings",
        "Restaurant discovery and recommendation browsing system",
        "Editorial content structure for ongoing publishing",
        "Photography and content direction for listing pages"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "UX/UI design phase",
          "desc": "Designed the browsing, filtering, and listing patterns before any code was written, validating the structure against real restaurant and dish data."
        },
        {
          "title": "Information architecture",
          "desc": "Organized categories, neighborhoods, and cuisines so the content scales without becoming a maze."
        },
        {
          "title": "Development",
          "desc": "Built a fast, responsive website on top of the approved design system."
        },
        {
          "title": "Editorial handover",
          "desc": "Delivered a publishing workflow the editorial team runs independently."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "UX/UI design system",
        "Next.js front-end",
        "Headless CMS for listings",
        "Search & filter architecture",
        "Cloud hosting & CDN",
        "On-page SEO foundation for long-tail queries"
      ],
      "resultsHeading": "Results",
      "results": [
        "New Website launched with a content system built to scale past the initial listings.",
        "A browsing and filtering experience designed around how people actually search for a place to eat.",
        "An editorial workflow that does not bottleneck on developer time.",
        "An SEO structure aimed at long-tail \"best X in Bangkok\" search demand."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How long did this project take?",
          "answer": "The UX/UI design phase and the subsequent website build for a discovery platform like this typically run a few months combined."
        },
        {
          "question": "What technologies were used?",
          "answer": "A Next.js front end with a headless CMS for restaurant and dish listings, built on a search-and-filter architecture and deployed on a CDN-backed host."
        },
        {
          "question": "Can this be adapted for other discovery or directory platforms?",
          "answer": "Yes — the same listing, filtering, and editorial-publishing architecture applies to other local discovery platforms beyond restaurants."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/bbk-menu/cover.jpg"
    }
  },
  {
    "slug": "sena-development",
    "industryTag": "Real Estate",
    "year": "2025",
    "th": {
      "metaTitle": "Sena Development ระบบ CRM และ AI — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และแนวทางของโปรเจกต์ระบบ CRM และ AI สำหรับ Sena Development ผู้พัฒนาอสังหาริมทรัพย์ โดย Haliviq",
      "h1": "Sena Development — ระบบ CRM สำหรับผู้พัฒนาอสังหาริมทรัพย์และงานพัฒนา AI",
      "client": "Sena Development",
      "badge": "อสังหาริมทรัพย์",
      "servicesProvided": [
        "พัฒนาระบบ CRM",
        "พัฒนา AI"
      ],
      "intro": "ผู้พัฒนาอสังหาริมทรัพย์ต้องจัดการลูกค้าที่สนใจโครงการหลายแห่งพร้อมกัน ผ่านหลายช่องทาง และใช้เวลาตัดสินใจนาน ข้อมูลที่กระจัดกระจายตามสเปรดชีตหรือแชทจึงเป็นคอขวดสำคัญของงานขาย Haliviq พัฒนาระบบ CRM ให้ Sena Development (sena.co.th) ที่รวมข้อมูลลูกค้าเป้าหมาย โครงการ และการติดตามผลไว้ในที่เดียว พร้อมต่อยอดด้วยงานพัฒนา AI เพื่อช่วยทีมทำงานซ้ำ ๆ ได้เร็วขึ้น บทความนี้สรุปงานที่ส่งมอบ แนวทางทางวิศวกรรม และเทคโนโลยีเบื้องหลัง ในมุมของผู้ที่กำลังมองหา CRM สำหรับผู้พัฒนาอสังหาริมทรัพย์ในประเทศไทย",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "อสังหาริมทรัพย์"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "ระบบ CRM บนเว็บ + โมดูล AI"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "2"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "รวมข้อมูลลูกค้าเป้าหมายและประวัติการติดต่อจากหลายช่องทางไว้ในระบบเดียว",
        "ให้ทีมขายเห็นสถานะของแต่ละโอกาสขายและงานที่ต้องติดตามได้ชัดเจน",
        "แยกข้อมูลตามโครงการและบทบาทผู้ใช้ เพื่อให้แต่ละทีมเห็นเฉพาะสิ่งที่เกี่ยวข้อง",
        "ใช้ AI ลดงานซ้ำ ๆ และช่วยให้ทีมตัดสินใจได้เร็วขึ้นจากข้อมูลที่มีอยู่"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "ระบบ CRM แบบกำหนดเองสำหรับงานขายอสังหาริมทรัพย์",
        "ฐานข้อมูลลูกค้าเป้าหมาย พร้อมประวัติการติดต่อและสถานะการขาย",
        "การจัดการโครงการ ยูนิต และข้อมูลที่เกี่ยวข้องกับงานขาย",
        "ระบบสิทธิ์การใช้งานตามบทบาทและทีม",
        "โมดูล AI ที่ช่วยงานวิเคราะห์และงานซ้ำ ๆ ของทีม",
        "เอกสารและการส่งมอบให้ทีมดูแลระบบต่อได้"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ทำความเข้าใจกระบวนการขาย",
          "desc": "สัมภาษณ์ทีมเพื่อเข้าใจเส้นทางของลูกค้าตั้งแต่เริ่มสนใจจนถึงการตัดสินใจ และจุดที่ข้อมูลหลุดหายในปัจจุบัน"
        },
        {
          "title": "ออกแบบโครงสร้างข้อมูลและขั้นตอนงาน",
          "desc": "กำหนดโมเดลข้อมูลลูกค้า โครงการ และกิจกรรมติดตามผล ก่อนลงมือพัฒนา เพื่อให้ระบบสอดคล้องกับวิธีทำงานจริง"
        },
        {
          "title": "พัฒนาระบบ CRM",
          "desc": "พัฒนาเป็นระยะ ให้ทีมทดลองใช้และให้ฟีดแบ็กระหว่างทาง แทนการส่งมอบครั้งเดียวตอนท้าย"
        },
        {
          "title": "พัฒนาและผนวก AI",
          "desc": "เพิ่มความสามารถ AI บนข้อมูลที่ระบบเก็บไว้ โดยกำหนดขอบเขตให้ช่วยทีมงาน ไม่ใช่แทนการตัดสินใจของคน"
        },
        {
          "title": "ส่งมอบและต่อยอด",
          "desc": "ส่งมอบเอกสาร ฝึกอบรมผู้ใช้ และวางแนวทางปรับปรุงระบบต่อเนื่อง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "ระบบ CRM แบบกำหนดเองบนเว็บ",
        "Next.js / TypeScript front-end",
        "API และฐานข้อมูลเชิงสัมพันธ์",
        "ระบบสิทธิ์ตามบทบาท (RBAC)",
        "โมดูล AI / LLM สำหรับงานวิเคราะห์และงานซ้ำ",
        "Cloud hosting และการสำรองข้อมูล"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ข้อมูลลูกค้าเป้าหมายและการติดตามผลรวมอยู่ในระบบเดียว แทนที่จะกระจายหลายที่",
        "ทีมขายเห็นสถานะโอกาสขายและงานค้างได้ชัดเจนขึ้น",
        "ทีมแต่ละโครงการเข้าถึงข้อมูลตามบทบาทของตน",
        "มีโมดูล AI ช่วยลดงานซ้ำ ๆ ของทีมงาน"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "ระบบ CRM สำหรับผู้พัฒนาอสังหาริมทรัพย์ต่างจาก CRM ทั่วไปอย่างไร",
          "answer": "งานขายอสังหาริมทรัพย์มีหลายโครงการ ยูนิต และรอบการตัดสินใจที่ยาว ระบบจึงออกแบบให้ติดตามลูกค้าตามโครงการและขั้นตอนการขาย ไม่ใช่แค่รายชื่อติดต่อ"
        },
        {
          "question": "AI ในระบบนี้ช่วยอะไรได้บ้าง",
          "answer": "AI ช่วยงานวิเคราะห์ข้อมูลและงานซ้ำ ๆ ของทีม โดยทำงานบนข้อมูลที่ระบบเก็บไว้ และออกแบบให้คนเป็นผู้ตัดสินใจขั้นสุดท้าย"
        },
        {
          "question": "ปรับใช้กับผู้พัฒนาอสังหาริมทรัพย์รายอื่นได้ไหม",
          "answer": "ได้ โครงสร้างระบบและแนวทางพัฒนาปรับให้เข้ากับกระบวนการขายของแต่ละองค์กรได้ หลังจากสำรวจความต้องการร่วมกัน"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/sena-development/cover.jpg"
    },
    "en": {
      "metaTitle": "Sena Development CRM & AI Development — Haliviq",
      "metaDescription": "Deliverables, approach and tech behind the CRM system and AI development for Sena Development, a real estate developer, by Haliviq.",
      "h1": "Sena Development — CRM for Real Estate Developers & AI Development",
      "client": "Sena Development",
      "badge": "Real Estate",
      "servicesProvided": [
        "CRM System Development",
        "AI Development"
      ],
      "intro": "A real estate developer manages prospects across several projects, through many channels, with long decision cycles. Data scattered across spreadsheets and chat threads becomes the main bottleneck for the sales team. Haliviq built a CRM system for Sena Development (sena.co.th) that consolidates leads, projects and follow-ups in one place, then extended it with AI development to speed up repetitive team work. This page summarizes the deliverables, engineering approach and technology behind the build, from the perspective of a team evaluating CRM for real estate developers in Thailand.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Real Estate"
        },
        {
          "label": "Platform",
          "value": "Web-based CRM + AI modules"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "2"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Consolidate leads and contact history from multiple channels into a single system.",
        "Give the sales team a clear view of each opportunity and the follow-up work it needs.",
        "Separate data by project and user role so each team sees only what is relevant to them.",
        "Use AI to reduce repetitive work and help the team act faster on the data already captured."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Custom CRM system for real estate sales operations",
        "Lead database with contact history and sales-stage tracking",
        "Project, unit and sales-related data management",
        "Role- and team-based access control",
        "AI modules supporting analysis and repetitive team tasks",
        "Documentation and handover so the in-house team can run the system"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Understand the sales process",
          "desc": "Interviewed the team to map the buyer journey from first interest to decision, and where information gets lost today."
        },
        {
          "title": "Design the data model and workflows",
          "desc": "Defined lead, project and follow-up activity models before development so the system matches how the team actually works."
        },
        {
          "title": "Build the CRM",
          "desc": "Developed in phases with the team trying early versions and giving feedback, rather than a single handover at the end."
        },
        {
          "title": "Develop and integrate AI",
          "desc": "Added AI capabilities on top of the data the CRM captures, scoped to assist the team rather than replace human judgment."
        },
        {
          "title": "Handover and iteration",
          "desc": "Delivered documentation, trained users and set up a path for continuous improvement."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Custom web-based CRM",
        "Next.js / TypeScript front end",
        "API and relational database",
        "Role-based access control (RBAC)",
        "AI / LLM modules for analysis and repetitive tasks",
        "Cloud hosting and data backup"
      ],
      "resultsHeading": "Results",
      "results": [
        "Lead and follow-up data now lives in one system instead of being scattered.",
        "The sales team has clearer visibility into opportunity status and pending work.",
        "Each project team accesses data according to its role.",
        "AI modules help reduce repetitive work for the team."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How is a CRM for real estate developers different from a generic CRM?",
          "answer": "Property sales involve multiple projects, units and long decision cycles, so the system tracks buyers by project and sales stage rather than as a flat contact list."
        },
        {
          "question": "What does the AI in this system help with?",
          "answer": "AI supports data analysis and repetitive team tasks, working on the data the CRM already holds, and is designed so people make the final call."
        },
        {
          "question": "Can this approach be adapted for other property developers?",
          "answer": "Yes. The architecture and delivery approach can be tailored to each organization's sales process after a joint discovery phase."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/sena-development/cover.jpg"
    }
  },
  {
    "slug": "panpuri",
    "industryTag": "Wellness",
    "year": "2025",
    "th": {
      "metaTitle": "PAÑPURI เว็บไซต์ Shopify และ UX/UI — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และแนวทางของโปรเจกต์ออกแบบ UX/UI และเว็บไซต์อีคอมเมิร์ซบน Shopify สำหรับ PAÑPURI แบรนด์เวลเนสและสกินแคร์ไทย โดย Haliviq",
      "h1": "PAÑPURI — ออกแบบ UX/UI และเว็บไซต์อีคอมเมิร์ซ Shopify สำหรับแบรนด์เวลเนส",
      "client": "PAÑPURI",
      "badge": "เวลเนส",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์อีคอมเมิร์ซบน Shopify"
      ],
      "intro": "แบรนด์ลักชัวรีเวลเนสและสกินแคร์ขายความรู้สึกก่อนขายผลิตภัณฑ์ เว็บไซต์จึงต้องสื่อคุณภาพของแบรนด์ได้ทันที และพาลูกค้าไปสู่การสั่งซื้อได้อย่างราบรื่น Haliviq รับผิดชอบทั้งงานออกแบบ UX/UI และการพัฒนาเว็บไซต์อีคอมเมิร์ซบน Shopify ให้ PAÑPURI โดยเริ่มจากการออกแบบประสบการณ์ให้ชัดเจนก่อน แล้วจึงพัฒนาตามแบบที่อนุมัติ บทความนี้สรุปงานที่ส่งมอบและแนวทางทางเทคนิค สำหรับแบรนด์ที่กำลังมองหาการพัฒนาเว็บไซต์ Shopify e-commerce ในประเทศไทย",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "เวลเนสและสกินแคร์"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์อีคอมเมิร์ซ (Shopify)"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "2"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "ถ่ายทอดภาพลักษณ์ลักชัวรีของแบรนด์ผ่านโครงสร้างและการจัดวางของเว็บไซต์",
        "ออกแบบเส้นทางจากการเลือกชมสินค้าไปสู่การชำระเงินให้ราบรื่นทั้งมือถือและเดสก์ท็อป",
        "จัดโครงสร้างสินค้าและคอลเลกชันให้ลูกค้าค้นหาได้ง่าย",
        "ให้ทีมแบรนด์จัดการสินค้า คอนเทนต์ และโปรโมชันเองได้บน Shopify"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "ระบบออกแบบ UX/UI สำหรับเว็บไซต์อีคอมเมิร์ซของแบรนด์",
        "เว็บไซต์อีคอมเมิร์ซบน Shopify ที่รองรับทุกขนาดหน้าจอ",
        "หน้าสินค้า คอลเลกชัน และขั้นตอนสั่งซื้อที่ออกแบบเฉพาะแบรนด์",
        "โครงสร้างสินค้าและการจัดหมวดหมู่",
        "การตั้งค่าหลังบ้านให้ทีมแบรนด์ดูแลเองได้"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ออกแบบ UX/UI",
          "desc": "เริ่มจากกำหนดภาพรวมประสบการณ์ ผังหน้า และเส้นทางลูกค้า แล้วออกแบบหน้าจอหลักให้สะท้อนตัวตนแบรนด์ก่อนเริ่มพัฒนา"
        },
        {
          "title": "วางโครงสร้างสินค้า",
          "desc": "จัดหมวดหมู่ คอลเลกชัน และคุณสมบัติสินค้าเพื่อให้ค้นหาและเปรียบเทียบได้ง่าย"
        },
        {
          "title": "พัฒนาบน Shopify",
          "desc": "สร้างธีมและส่วนประกอบตามแบบที่อนุมัติ ปรับแต่งให้เข้ากับแบรนด์ พร้อมคำนึงถึงความเร็วในการโหลด"
        },
        {
          "title": "ทดสอบและส่งมอบ",
          "desc": "ทดสอบการใช้งานบนอุปกรณ์ต่าง ๆ และขั้นตอนสั่งซื้อ ก่อนส่งมอบและอบรมทีมแบรนด์"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Shopify",
        "ธีมและส่วนประกอบแบบกำหนดเอง (Liquid)",
        "ระบบออกแบบ UX/UI",
        "การออกแบบรองรับมือถือเป็นหลัก",
        "การเพิ่มประสิทธิภาพความเร็วและรูปภาพ",
        "พื้นฐาน SEO สำหรับร้านค้าออนไลน์"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บไซต์อีคอมเมิร์ซที่สื่อภาพลักษณ์ลักชัวรีของแบรนด์",
        "เส้นทางซื้อสินค้าที่ออกแบบให้ราบรื่นบนมือถือและเดสก์ท็อป",
        "ทีมแบรนด์จัดการสินค้าและคอนเทนต์ได้เองผ่าน Shopify",
        "โครงสร้างที่พร้อมรองรับสินค้าและคอลเลกชันใหม่ในอนาคต"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "ทำไมต้องออกแบบ UX/UI ก่อนพัฒนา Shopify",
          "answer": "การออกแบบก่อนช่วยให้ทุกหน้าสะท้อนแบรนด์และเส้นทางซื้อชัดเจนตั้งแต่ต้น ลดการแก้ไขระหว่างพัฒนา"
        },
        {
          "question": "Shopify เหมาะกับแบรนด์สกินแคร์และเวลเนสหรือไม่",
          "answer": "เหมาะ Shopify รองรับสินค้าหลากหลาย การชำระเงิน และการจัดการคลังสินค้า และปรับแต่งดีไซน์ให้เป็นเอกลักษณ์ของแบรนด์ได้"
        },
        {
          "question": "ทีมแบรนด์ดูแลเว็บไซต์เองได้ไหม",
          "answer": "ได้ เราตั้งค่าหลังบ้านและอบรมทีม เพื่อให้เพิ่มสินค้า แก้ไขคอนเทนต์ และจัดโปรโมชันได้เอง"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/panpuri/cover.jpg"
    },
    "en": {
      "metaTitle": "PAÑPURI Shopify E-commerce & UX/UI Design — Haliviq",
      "metaDescription": "Deliverables, approach and tech behind the UX/UI design and Shopify e-commerce website for PAÑPURI, a Thai luxury wellness and skincare brand, by Haliviq.",
      "h1": "PAÑPURI — UX/UI Design & Shopify E-commerce for a Wellness Brand",
      "client": "PAÑPURI",
      "badge": "Wellness",
      "servicesProvided": [
        "UX/UI Design",
        "Shopify E-commerce Website Development"
      ],
      "intro": "A luxury wellness and skincare brand sells a feeling before it sells a product, so its website must convey brand quality at once and guide shoppers smoothly to checkout. Haliviq handled both the UX/UI design and the Shopify e-commerce development for PAÑPURI, designing the experience first and building to the approved design. This page summarizes the deliverables and technical approach, for brands evaluating Shopify e-commerce development in Thailand.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Wellness & Skincare"
        },
        {
          "label": "Platform",
          "value": "E-commerce Website (Shopify)"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "2"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Express the brand's luxury positioning through the site's structure and layout.",
        "Design a smooth path from browsing to checkout on both mobile and desktop.",
        "Organize products and collections so shoppers find what they need easily.",
        "Let the brand team manage products, content and promotions on Shopify independently."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "UX/UI design system for the brand's e-commerce site",
        "Responsive Shopify e-commerce website",
        "Brand-specific product, collection and checkout flow pages",
        "Product structure and categorization",
        "Back-office setup so the brand team can run the store itself"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "UX/UI design",
          "desc": "Defined the overall experience, page map and customer journey, then designed the key screens to reflect the brand before development began."
        },
        {
          "title": "Product structure",
          "desc": "Organized categories, collections and product attributes to make search and comparison easy."
        },
        {
          "title": "Shopify development",
          "desc": "Built the theme and components to the approved design, tailored to the brand with page speed in mind."
        },
        {
          "title": "Testing and handover",
          "desc": "Tested across devices and the order flow before handover and training for the brand team."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Shopify",
        "Custom theme and components (Liquid)",
        "UX/UI design system",
        "Mobile-first design",
        "Page speed and image optimization",
        "E-commerce SEO foundations"
      ],
      "resultsHeading": "Results",
      "results": [
        "Launched an e-commerce site that conveys the brand's luxury positioning.",
        "A purchase path designed to feel smooth on mobile and desktop.",
        "The brand team manages products and content independently through Shopify.",
        "A structure ready to accommodate new products and collections."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "Why design UX/UI before building on Shopify?",
          "answer": "Designing first makes every page reflect the brand and the purchase path clear from the start, reducing rework during development."
        },
        {
          "question": "Is Shopify a good fit for skincare and wellness brands?",
          "answer": "Yes. Shopify supports varied catalogs, payments and inventory, and can be customized to a distinctive brand identity."
        },
        {
          "question": "Can the brand team manage the site themselves?",
          "answer": "Yes. We set up the back office and train the team to add products, edit content and run promotions independently."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/panpuri/cover.jpg"
    }
  },
  {
    "slug": "shanghai-mansion-bangkok",
    "industryTag": "Travel & Hospitality",
    "year": "2025",
    "th": {
      "metaTitle": "Shanghai Mansion Bangkok เว็บไซต์จองห้องพัก — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และแนวทางของโปรเจกต์เว็บไซต์โรงแรมพร้อมระบบจองห้องพักออนไลน์สำหรับ Shanghai Mansion Bangkok โดย Haliviq",
      "h1": "Shanghai Mansion Bangkok — เว็บไซต์โรงแรมพร้อมระบบจองห้องพักออนไลน์",
      "client": "Shanghai Mansion Bangkok",
      "badge": "ท่องเที่ยวและโรงแรม",
      "servicesProvided": [
        "ออกแบบและพัฒนาเว็บไซต์โรงแรม",
        "ระบบจองห้องพักออนไลน์"
      ],
      "intro": "โรงแรมบูติกต้องแข่งกับแพลตฟอร์มจองห้องรายใหญ่ ขณะที่การจองตรงผ่านเว็บไซต์ของโรงแรมเองให้ความสัมพันธ์กับแขกที่ดีกว่า Haliviq พัฒนาเว็บไซต์ให้ Shanghai Mansion Bangkok พร้อมระบบจองห้องพักออนไลน์ ที่ช่วยให้ผู้เข้าชมดูห้องพัก เลือกวันพัก และส่งคำขอจองได้ในเว็บไซต์เดียว โดยยังคงบรรยากาศและเอกลักษณ์ของโรงแรมไว้ บทความนี้สรุปงานที่ส่งมอบและแนวทางทางเทคนิค สำหรับผู้ที่กำลังหาเว็บไซต์จองห้องพักโรงแรมในกรุงเทพฯ",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "โรงแรมและการท่องเที่ยว"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์โรงแรม + ระบบจองห้อง"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "2"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "นำเสนอบรรยากาศ ห้องพัก และเอกลักษณ์ของโรงแรมอย่างชัดเจนตั้งแต่หน้าแรก",
        "ให้แขกตรวจสอบห้องพักและจองได้ง่ายบนมือถือ",
        "ส่งเสริมการจองตรงผ่านเว็บไซต์ของโรงแรม",
        "ให้ทีมโรงแรมจัดการข้อมูลห้องพักและการจองได้สะดวก"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์โรงแรมที่รองรับทุกขนาดหน้าจอ",
        "หน้าห้องพักพร้อมรายละเอียดและแกลเลอรีภาพ",
        "ระบบจองห้องพักออนไลน์ เลือกวันพักและประเภทห้อง",
        "ระบบจัดการข้อมูลห้องพักและการจองสำหรับทีมโรงแรม",
        "โครงสร้างเว็บไซต์ที่เหมาะกับ SEO ของธุรกิจโรงแรม"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ทำความเข้าใจแขกและการจอง",
          "desc": "วิเคราะห์เส้นทางที่แขกใช้ตัดสินใจ ตั้งแต่ดูห้องไปจนถึงยืนยันการจอง และข้อมูลที่แขกต้องการก่อนตัดสินใจ"
        },
        {
          "title": "ออกแบบเว็บไซต์",
          "desc": "ออกแบบหน้าและการเล่าเรื่องให้สะท้อนบรรยากาศของโรงแรม โดยให้ปุ่มจองเข้าถึงได้ง่ายทุกหน้า"
        },
        {
          "title": "พัฒนาระบบจองห้อง",
          "desc": "พัฒนาขั้นตอนเลือกวันพัก ประเภทห้อง และข้อมูลแขก พร้อมการแจ้งเตือนให้ทีมโรงแรม"
        },
        {
          "title": "ทดสอบและส่งมอบ",
          "desc": "ทดสอบขั้นตอนจองบนอุปกรณ์ต่าง ๆ ก่อนส่งมอบและอบรมทีมโรงแรม"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "ระบบจองห้องพักออนไลน์",
        "ระบบจัดการข้อมูลห้องพัก",
        "การแจ้งเตือนการจองทางอีเมล",
        "Cloud hosting & CDN",
        "พื้นฐาน SEO สำหรับโรงแรม"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บไซต์ที่สื่อเอกลักษณ์ของโรงแรมพร้อมช่องทางจองตรง",
        "แขกดูห้องและจองได้ในเว็บไซต์เดียว",
        "ทีมโรงแรมจัดการห้องพักและการจองได้สะดวกขึ้น",
        "โครงสร้างพร้อมรองรับคำค้นหาที่เกี่ยวกับโรงแรมในกรุงเทพฯ"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "ระบบจองห้องพักบนเว็บไซต์ทำงานอย่างไร",
          "answer": "แขกเลือกวันพักและประเภทห้อง กรอกข้อมูล แล้วส่งการจอง ระบบแจ้งเตือนทีมโรงแรมเพื่อดำเนินการต่อ"
        },
        {
          "question": "ทำไมโรงแรมควรมีเว็บไซต์จองตรง",
          "answer": "การจองตรงช่วยให้โรงแรมควบคุมประสบการณ์และข้อมูลแขกได้เอง และไม่ต้องพึ่งแพลตฟอร์มภายนอกเพียงอย่างเดียว"
        },
        {
          "question": "ปรับใช้กับโรงแรมหรือที่พักอื่นได้ไหม",
          "answer": "ได้ โครงสร้างเว็บไซต์และระบบจองปรับให้เหมาะกับโรงแรมบูติก รีสอร์ต และที่พักขนาดเล็กได้"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/shanghai-mansion-bangkok/cover.jpg"
    },
    "en": {
      "metaTitle": "Shanghai Mansion Bangkok Hotel Booking Website — Haliviq",
      "metaDescription": "Deliverables, approach and tech behind the hotel website with online room booking for Shanghai Mansion Bangkok, by Haliviq.",
      "h1": "Shanghai Mansion Bangkok — Hotel Website with Online Room Booking",
      "client": "Shanghai Mansion Bangkok",
      "badge": "Travel & Hospitality",
      "servicesProvided": [
        "Hotel Website Design & Development",
        "Online Room Booking System"
      ],
      "intro": "A boutique hotel competes with large booking platforms, while direct bookings through its own website build a better relationship with guests. Haliviq built the Shanghai Mansion Bangkok website with an online room booking system, so visitors can view rooms, choose dates and make a reservation in one place, while preserving the hotel's atmosphere and identity. This page summarizes the deliverables and technical approach, for teams looking for a hotel booking website in Bangkok.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Hospitality & Travel"
        },
        {
          "label": "Platform",
          "value": "Hotel Website + Booking Engine"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "2"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Present the hotel's atmosphere, rooms and identity clearly from the homepage.",
        "Let guests check rooms and book easily on mobile.",
        "Encourage direct bookings through the hotel's own website.",
        "Give the hotel team a convenient way to manage room information and reservations."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Responsive hotel website",
        "Room pages with details and photo galleries",
        "Online booking system for dates and room types",
        "Back-office tools for room information and reservations",
        "SEO-friendly site structure for a hotel business"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Understand guests and bookings",
          "desc": "Analyzed how guests decide, from viewing rooms to confirming a booking, and the information they need first."
        },
        {
          "title": "Website design",
          "desc": "Designed pages and storytelling to reflect the hotel's atmosphere, with the booking action reachable from every page."
        },
        {
          "title": "Booking system development",
          "desc": "Built the flow for dates, room types and guest details, with notifications to the hotel team."
        },
        {
          "title": "Testing and handover",
          "desc": "Tested the booking flow across devices before handover and training for hotel staff."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end",
        "Online room booking engine",
        "Room content management",
        "Booking email notifications",
        "Cloud hosting & CDN",
        "Hotel SEO foundations"
      ],
      "resultsHeading": "Results",
      "results": [
        "Launched a website that conveys the hotel's identity with a direct booking channel.",
        "Guests can view rooms and book in a single site.",
        "The hotel team manages rooms and reservations more conveniently.",
        "A structure ready for Bangkok hotel search queries."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How does the booking system on the website work?",
          "answer": "Guests choose dates and room type, enter their details and submit a reservation; the system notifies the hotel team to follow up."
        },
        {
          "question": "Why should a hotel have a direct-booking website?",
          "answer": "Direct bookings let the hotel control the guest experience and data rather than relying only on third-party platforms."
        },
        {
          "question": "Can this be adapted for other hotels or accommodations?",
          "answer": "Yes. The site structure and booking flow can be tailored to boutique hotels, resorts and small properties."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/shanghai-mansion-bangkok/cover.jpg"
    }
  },
  {
    "slug": "jampha-shopping-mall",
    "industryTag": "Retail & SME",
    "year": "2025",
    "th": {
      "metaTitle": "Jampha Shopping Mall เว็บไซต์อีคอมเมิร์ซและ AI — ผลงาน Haliviq",
      "metaDescription": "สรุปงานที่ส่งมอบ เทคโนโลยี และแนวทางของโปรเจกต์เว็บไซต์อีคอมเมิร์ซและระบบ AI ช่วยงานสำหรับ Jampha Shopping Mall โดย Haliviq",
      "h1": "Jampha Shopping Mall — เว็บไซต์อีคอมเมิร์ซและระบบ AI ช่วยงานสำหรับค้าปลีก",
      "client": "Jampha Shopping Mall",
      "badge": "ค้าปลีกและ SME",
      "servicesProvided": [
        "พัฒนาเว็บไซต์อีคอมเมิร์ซ",
        "ระบบ AI ช่วยงานปฏิบัติการและลูกค้า"
      ],
      "intro": "ศูนย์การค้าที่รวมร้านค้าและสินค้าท้องถิ่นหลากหลายมีความท้าทายต่างจากร้านค้าเดี่ยว ทั้งการนำเสนอสินค้าจากหลายร้านและการตอบคำถามลูกค้าที่หลากหลาย Haliviq พัฒนาเว็บไซต์อีคอมเมิร์ซให้ Jampha Shopping Mall พร้อมระบบ AI ที่ช่วยงานปฏิบัติการและลูกค้า เพื่อให้ผู้ซื้อค้นหาสินค้าได้ง่ายและทีมงานทำงานซ้ำ ๆ ได้เบาลง บทความนี้สรุปงานที่ส่งมอบและแนวทางทางเทคนิค สำหรับธุรกิจที่กำลังมองหา AI สำหรับธุรกิจค้าปลีกและเว็บไซต์อีคอมเมิร์ซในประเทศไทย",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "ค้าปลีกและชุมชน"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์อีคอมเมิร์ซ + ระบบ AI"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "2"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "นำเสนอสินค้าและร้านค้าในศูนย์การค้าอย่างเป็นระเบียบ ค้นหาและเลือกซื้อได้ง่าย",
        "สร้างขั้นตอนสั่งซื้อที่ใช้งานง่ายบนมือถือ",
        "ใช้ AI ช่วยตอบคำถามลูกค้าและลดงานซ้ำ ๆ ของทีมปฏิบัติการ",
        "ให้ทีมงานจัดการสินค้าและคอนเทนต์ได้เองอย่างต่อเนื่อง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์อีคอมเมิร์ซที่รองรับทุกขนาดหน้าจอ",
        "โครงสร้างสินค้าและหมวดหมู่สำหรับร้านค้าหลากหลาย",
        "ขั้นตอนสั่งซื้อและชำระเงิน",
        "ระบบ AI ช่วยตอบคำถามลูกค้าและสนับสนุนงานปฏิบัติการ",
        "ระบบหลังบ้านสำหรับจัดการสินค้าและคอนเทนต์"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ทำความเข้าใจธุรกิจและลูกค้า",
          "desc": "ศึกษาโครงสร้างสินค้า ลักษณะลูกค้า และงานซ้ำ ๆ ที่ทีมต้องทำทุกวัน เพื่อกำหนดขอบเขตของเว็บไซต์และ AI"
        },
        {
          "title": "ออกแบบประสบการณ์ซื้อสินค้า",
          "desc": "ออกแบบการเรียกดู ค้นหา และสั่งซื้อให้เหมาะกับกลุ่มลูกค้าชุมชนและค้าปลีกแบบดั้งเดิม"
        },
        {
          "title": "พัฒนาเว็บไซต์อีคอมเมิร์ซ",
          "desc": "พัฒนาหน้าสินค้า ตะกร้า และขั้นตอนชำระเงิน พร้อมระบบจัดการสินค้า"
        },
        {
          "title": "พัฒนาระบบ AI",
          "desc": "เพิ่ม AI ที่ตอบคำถามลูกค้าและช่วยงานปฏิบัติการจากข้อมูลของศูนย์การค้า โดยมีขอบเขตชัดเจน"
        },
        {
          "title": "ทดสอบและส่งมอบ",
          "desc": "ทดสอบการใช้งานและส่งมอบพร้อมอบรมทีมงาน"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "ระบบอีคอมเมิร์ซและจัดการสินค้า",
        "ระบบ AI / LLM ช่วยตอบคำถามและงานปฏิบัติการ",
        "Cloud hosting & CDN",
        "พื้นฐาน SEO สำหรับร้านค้าออนไลน์"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บไซต์อีคอมเมิร์ซที่นำเสนอสินค้าของศูนย์การค้าอย่างเป็นระเบียบ",
        "ลูกค้าได้ช่องทางสอบถามที่ตอบได้ต่อเนื่องด้วย AI",
        "ทีมปฏิบัติการมีเครื่องมือช่วยลดงานซ้ำ ๆ",
        "โครงสร้างพร้อมรองรับร้านค้าและสินค้าที่เพิ่มขึ้น"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "AI ในระบบนี้ช่วยงานอะไรบ้าง",
          "answer": "ช่วยตอบคำถามลูกค้าทั่วไปและสนับสนุนงานปฏิบัติการจากข้อมูลของศูนย์การค้า โดยทีมงานยังดูแลเรื่องที่ต้องใช้วิจารณญาณ"
        },
        {
          "question": "เหมาะกับธุรกิจค้าปลีกแบบดั้งเดิมหรือไม่",
          "answer": "เหมาะ เราออกแบบประสบการณ์ให้ใช้งานง่ายสำหรับลูกค้าหลากหลายกลุ่ม และให้ทีมงานดูแลเองได้โดยไม่ต้องมีพื้นฐานเทคนิค"
        },
        {
          "question": "ปรับใช้กับศูนย์การค้าหรือตลาดอื่นได้ไหม",
          "answer": "ได้ โครงสร้างอีคอมเมิร์ซและระบบ AI ปรับให้เข้ากับศูนย์การค้า ตลาด และธุรกิจ SME อื่นได้"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/jampha-shopping-mall/cover.jpg"
    },
    "en": {
      "metaTitle": "Jampha Shopping Mall E-commerce & AI System — Haliviq",
      "metaDescription": "Deliverables, approach and tech behind the e-commerce website and AI assistance system for Jampha Shopping Mall, by Haliviq.",
      "h1": "Jampha Shopping Mall — E-commerce Website & AI System for Retail",
      "client": "Jampha Shopping Mall",
      "badge": "Retail & SME",
      "servicesProvided": [
        "E-commerce Website Development",
        "AI System for Operations & Customer Assistance"
      ],
      "intro": "A shopping mall that brings together many shops and local products faces challenges a single store does not, from presenting items from multiple vendors to answering a wide range of customer questions. Haliviq built the e-commerce website for Jampha Shopping Mall together with an AI system supporting operations and customers, so shoppers find products easily and the team spends less time on repetitive work. This page summarizes the deliverables and technical approach, for businesses looking for AI for retail and e-commerce development in Thailand.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Retail & Community"
        },
        {
          "label": "Platform",
          "value": "E-commerce Website + AI System"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "2"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Present the mall's shops and products in an organized way that is easy to search and buy from.",
        "Create an easy order flow on mobile.",
        "Use AI to help answer customer questions and reduce repetitive operational work.",
        "Let the team manage products and content independently over time."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Responsive e-commerce website",
        "Product and category structure for varied vendors",
        "Order and checkout flow",
        "AI system assisting customer questions and operations",
        "Back-office tools for products and content"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Understand the business and customers",
          "desc": "Studied the product structure, customer profile and daily repetitive tasks to scope the website and the AI."
        },
        {
          "title": "Shopping experience design",
          "desc": "Designed browsing, search and ordering to suit community and traditional-retail shoppers."
        },
        {
          "title": "E-commerce development",
          "desc": "Built product pages, cart and checkout together with product management tools."
        },
        {
          "title": "AI system development",
          "desc": "Added AI that answers customer questions and assists operations using the mall's own information, within a clear scope."
        },
        {
          "title": "Testing and handover",
          "desc": "Tested the experience and handed over with team training."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end",
        "E-commerce and product management",
        "AI / LLM system for Q&A and operations",
        "Cloud hosting & CDN",
        "E-commerce SEO foundations"
      ],
      "resultsHeading": "Results",
      "results": [
        "Launched an e-commerce site that presents the mall's products in an organized way.",
        "Customers get an always-available way to ask questions through AI.",
        "The operations team has tools that reduce repetitive work.",
        "A structure ready for more shops and products."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "What does the AI in this system help with?",
          "answer": "It helps answer common customer questions and supports operations using the mall's own information, while staff handle matters requiring judgment."
        },
        {
          "question": "Is it suitable for traditional retail businesses?",
          "answer": "Yes. The experience is designed to be easy for varied shoppers, and the team can manage it without a technical background."
        },
        {
          "question": "Can this be adapted for other malls or markets?",
          "answer": "Yes. The e-commerce structure and AI system can be tailored to other malls, markets and SME businesses."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/jampha-shopping-mall/cover.jpg"
    }
  }
]

export function getWorkProject(slug: string): WorkProject | undefined {
  return workProjects.find((w) => w.slug === slug)
}
