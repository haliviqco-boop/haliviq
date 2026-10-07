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
      "metaTitle": "เว็บไซต์ Savelberg Restaurant — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ เว็บไซต์ Savelberg Restaurant โดย Haliviq ครอบคลุม ออกแบบเว็บไซต์ (UX/UI) พัฒนาเว็บไซต์ กำกับภาพถ่าย...",
      "h1": "Savelberg Restaurant — เว็บไซต์และประสบการณ์ลูกค้าออนไลน์",
      "client": "Savelberg Restaurant",
      "badge": "F&B",
      "servicesProvided": [
        "ออกแบบเว็บไซต์ (UX/UI)",
        "พัฒนาเว็บไซต์",
        "กำกับภาพถ่ายและคอนเทนต์",
        "ช่วยวางกลยุทธ์การตลาดออนไลน์",
        "แชทบอท AI ตอบคำถามลูกค้า"
      ],
      "intro": "Savelberg Restaurant ต้องการมากกว่าเมนูออนไลน์ แต่ต้องการหน้าเว็บที่ทำให้คนรู้สึกถึงมาตรฐานร้านไฟน์ไดนิ่งตั้งแต่แรกเห็น Haliviq ทำเว็บไซต์สองภาษาพร้อมระบบจองโต๊ะ ใช้ภาพอาหารความละเอียดสูง จัดเมนูชิมให้อ่านง่าย และวางหน้าให้ดูมีคุณภาพก่อนผู้ชมจะอ่านข้อความด้วยซ้ำ บทความนี้สรุปงานที่ส่งมอบ เทคโนโลยีที่ใช้ และผลลัพธ์ ทั้งมุมการดำเนินงานของร้านอาหารและมุมการพัฒนาเว็บ",
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
        "เปลี่ยนเว็บไซต์เดิมที่ล้าสมัยหรือยังไม่มี เป็นเว็บไซต์ที่เหมาะกับระดับราคาและมาตรฐานการบริการของร้าน",
        "ลดภาระการจองทางโทรศัพท์ ด้วยการจองออนไลน์ที่กดได้จากหน้าแรก",
        "วางโครงสร้างคอนเทนต์ให้ทีมครัวและทีมหน้าร้านอัปเดตเองได้ โดยไม่ต้องพึ่งนักพัฒนา",
        "วางพื้นฐาน SEO เพื่อให้ติดอันดับต่อเนื่องในคำค้นหาไฟน์ไดนิ่งในกรุงเทพฯ ที่แข่งขันสูง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์สองภาษา (ไทย/อังกฤษ) ที่แสดงผลได้ดีทุกขนาดหน้าจอ",
        "หน้าแรกและแกลเลอรีเมนูที่เน้นภาพถ่ายความละเอียดสูง",
        "หน้าเมนูชิม ไวน์ลิสต์ และเมนูตามฤดูกาลที่จัดไว้อ่านง่าย",
        "ระบบจองโต๊ะออนไลน์ที่กดได้จากหน้าหลัก",
        "หน้าเรื่องราวของเชฟและแบรนด์ ใช้ประกอบงานสื่อและประชาสัมพันธ์",
        "แชทบอท AI ตอบคำถามเรื่องเมนูและการจองได้ตลอด 24 ชั่วโมง"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ดูหน้างานและเก็บข้อมูล",
          "desc": "ไปที่ร้านเพื่อดูจังหวะการเสิร์ฟ การจัดจาน และการเดินของแขก แล้วนำมาใช้ตัดสินใจเรื่องเลย์เอาต์และภาพ แทนการคาดเดา"
        },
        {
          "title": "วางโครงสร้างข้อมูล",
          "desc": "จัดหน้าที่ลูกค้าต้องใช้ ทั้งเมนู การจอง ที่ตั้ง และเรื่องราวของร้าน ให้เข้าถึงได้ด้วยการคลิกน้อยที่สุด"
        },
        {
          "title": "พัฒนาและเชื่อมต่อระบบ",
          "desc": "พัฒนาหน้าเว็บ เชื่อมระบบจองโต๊ะ และปรับการโหลดภาพ เพื่อให้เว็บที่เน้นภาพยังเปิดได้เร็ว"
        },
        {
          "title": "เปิดตัวและส่งมอบคอนเทนต์",
          "desc": "ส่งมอบระบบคอนเทนต์ที่แก้ไขได้เอง พร้อมอบรมสั้นๆ ให้ทีมอัปเดตเมนูและภาพได้"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "Headless CMS สำหรับอัปเดตเมนูและคอนเทนต์",
        "Cloud hosting และ CDN สำหรับส่งภาพ",
        "ระบบจองโต๊ะออนไลน์",
        "โครงสร้างคอนเทนต์สองภาษา",
        "พื้นฐาน SEO บนหน้าเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้เว็บไซต์ใหม่ตามกำหนด มาแทนเว็บเดิมที่ไม่เหมาะกับภาพลักษณ์ของแบรนด์",
        "จองโต๊ะได้ภายในสองคลิกจากทุกหน้า ลดการจองทางโทรศัพท์",
        "ทางร้านปรับเมนูตามฤดูกาลได้เอง ไม่ต้องรอนักพัฒนา",
        "มีพื้นฐาน SEO ทั้งด้านเทคนิคและบนหน้าเว็บ พร้อมเติบโตในคำค้นหาไฟน์ไดนิ่ง"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์ของ Savelberg Restaurant ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์ร้านอาหารสองภาษาที่เน้นภาพถ่ายแบบนี้ ปกติใช้เวลาสองถึงสามเดือนตั้งแต่เก็บข้อมูลจนถึงเปิดตัว ขึ้นกับความพร้อมของภาพถ่ายและเนื้อหา"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เว็บไซต์สร้างด้วย Next.js ใช้ Headless CMS จัดการคอนเทนต์ ติดตั้งบน Cloud hosting ที่มี CDN ให้ภาพโหลดเร็ว และมีระบบจองโต๊ะโดยเฉพาะ"
        },
        {
          "question": "ใช้แนวทางนี้กับแบรนด์ร้านอาหารอื่นได้ไหม",
          "answer": "ได้ โครงสร้างแบบเดียวกันคือ ใช้เมนูเป็นหลักในการนำทาง มีระบบจอง คอนเทนต์สองภาษา และแชทบอท AI เสริม ใช้ได้ดีกับร้านไฟน์ไดนิ่งหรือร้านอาหารหลายสาขา"
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
      "metaTitle": "เว็บไซต์ OVO — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์เว็บไซต์ OVO โดย Haliviq ครอบคลุมการออกแบบเว็บไซต์ (UX/UI) พัฒนาเว็บไซต์ กำกับภาพถ่ายและคอนเทนต์",
      "h1": "OVO — เว็บไซต์แบรนด์พร้อมระบบสั่งซื้อ",
      "client": "OVO",
      "badge": "F&B",
      "servicesProvided": [
        "ออกแบบเว็บไซต์ (UX/UI)",
        "พัฒนาเว็บไซต์",
        "กำกับภาพถ่ายและคอนเทนต์",
        "ช่วยวางกลยุทธ์การตลาดออนไลน์"
      ],
      "intro": "OVO ขายตรงถึงผู้บริโภค เว็บไซต์จึงต้องทำสองอย่างพร้อมกัน คือบอกเล่าตัวตนของแบรนด์ และพาลูกค้าจากการดูสินค้าไปสู่การสั่งซื้อด้วยขั้นตอนน้อยที่สุด Haliviq เน้นภาพสินค้าโทนอบอุ่น ระบบสั่งซื้อที่เรียบง่าย และโครงสร้างคอนเทนต์ที่ทีมดูแลเองได้หลังเปิดตัว บทความนี้สรุปงานที่ส่งมอบ ทั้งด้านผลงานและ SEO",
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
        "สร้างช่องทางขายตรงถึงผู้บริโภค โดยไม่ต้องพึ่งมาร์เก็ตเพลสอย่างเดียว",
        "ย่นขั้นตอนจากการ \"ดูเมนู\" ไปจนถึง \"สั่งซื้อสำเร็จ\" ให้สั้นที่สุด",
        "ให้ทีมภายในอัปเดตสินค้าและราคาได้อย่างแม่นยำ",
        "วางพื้นฐานด้านเทคนิคเพื่อให้ติดอันดับในผลค้นหาธรรมชาติ สำหรับคำค้นหาร้านอาหารและเครื่องดื่มในพื้นที่"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์แบรนด์และสั่งซื้อที่ออกแบบสำหรับมือถือเป็นหลัก",
        "แนวภาพสินค้าโทนอบอุ่นและการจัดแกลเลอรี",
        "ระบบสั่งซื้อออนไลน์ที่เรียบง่าย แสดงราคาชัดเจน",
        "โครงสร้างข้อมูลสินค้าและเมนูที่ทีมภายในแก้ไขเองได้",
        "ภาพถ่ายพร้อมใช้บนโซเชียลมีเดีย นำกลับมาใช้ซ้ำได้"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาแบรนด์และกลุ่มลูกค้า",
          "desc": "รวบรวมข้อมูลโทนภาพ ระดับราคา และกลุ่มลูกค้าเป้าหมาย ก่อนเริ่มออกแบบ"
        },
        {
          "title": "ออกแบบ UX ให้สั่งซื้อง่าย",
          "desc": "ออกแบบขั้นตอนสั่งซื้อให้สั้นที่สุด ตั้งแต่หน้าสินค้าจนถึงสั่งซื้อสำเร็จ"
        },
        {
          "title": "พัฒนาและเชื่อมต่อระบบ",
          "desc": "พัฒนาเว็บไซต์ที่โหลดเร็วและเชื่อมกับระบบสั่งซื้อออนไลน์"
        },
        {
          "title": "คอนเทนต์และส่งมอบงาน",
          "desc": "จัดภาพถ่ายและข้อความให้เป็นโครงสร้างที่ทีมภายในดูแลต่อได้"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "เลย์เอาต์ที่ออกแบบสำหรับมือถือเป็นหลัก",
        "ระบบสั่งซื้อออนไลน์",
        "Cloud hosting & CDN",
        "CMS แบบเบาสำหรับจัดการข้อมูลสินค้า",
        "พื้นฐาน SEO บนหน้าเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เว็บไซต์ใหม่ทำหน้าที่เป็นหน้าร้านออนไลน์หลักของแบรนด์",
        "ขั้นตอนสั่งซื้อที่ออกแบบมาให้ลูกค้าไม่หลุดกลางทาง ระหว่างเลือกดูสินค้าและชำระเงิน",
        "คลังภาพถ่ายที่แบรนด์นำไปใช้ต่อบนโซเชียลและโฆษณา",
        "วางพื้นฐาน SEO ด้านเทคนิคไว้สำหรับการเติบโตระยะยาว"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์แบรนด์พร้อมระบบสั่งซื้อเฉพาะแบบนี้ ปกติใช้เวลาประมาณสองเดือนตั้งแต่เริ่มจนถึงเปิดตัว"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "หน้าเว็บสร้างด้วย Next.js ที่ใช้งานบนมือถือได้ดี ใช้ CMS แบบเบาอัปเดตสินค้าและคอนเทนต์ ติดตั้งบน Cloud hosting ที่มี CDN"
        },
        {
          "question": "ใช้กับแบรนด์อาหารและเครื่องดื่ม หรือสินค้าอุปโภคบริโภคอื่นได้ไหม",
          "answer": "ได้ โครงสร้างที่เน้นการสั่งซื้อและระบบคอนเทนต์แบบนี้ ใช้ได้ดีกับแบรนด์ขนมหวาน คาเฟ่ หรือสินค้าบรรจุภัณฑ์อื่นที่ขายตรงถึงผู้บริโภค"
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
      "metaTitle": "เว็บไซต์ BASE — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์เว็บไซต์ BASE โดย Haliviq ครอบคลุมการออกแบบเว็บไซต์ (UX/UI) พัฒนาเว็บไซต์ ระบบจองคลาสออนไลน์",
      "h1": "BASE — เว็บไซต์สตูดิโอฟิตเนสพร้อมระบบจองคลาส",
      "client": "BASE",
      "badge": "Fitness & Wellness",
      "servicesProvided": [
        "ออกแบบเว็บไซต์ (UX/UI)",
        "พัฒนาเว็บไซต์",
        "ระบบจองคลาสออนไลน์",
        "กำกับภาพถ่ายและคอนเทนต์"
      ],
      "intro": "BASE ขึ้นชื่อเรื่องฝีมือเทรนเนอร์และบรรยากาศในคลาส แต่เว็บไซต์เดิมไม่มีช่องทางให้ผู้มาใหม่ดูตารางคลาสหรือจองคลาสทดลองได้ง่ายๆ Haliviq ผสานดีไซน์โทนมืดทันสมัยเข้ากับระบบจองคลาสที่ใช้งานได้จริง ให้เว็บไซต์ช่วยให้ผู้เข้าชมตัดสินใจมาคลาสแรก ไม่ใช่แค่ดูดี",
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
        "ลดความยุ่งยากตั้งแต่ \"เจอสตูดิโอออนไลน์\" จนถึง \"จองคลาสทดลองสำเร็จ\"",
        "ให้เทรนเนอร์แต่ละคนมีหน้าของตัวเอง เพื่อให้สมาชิกใหม่เลือกคลาสจากผู้สอนได้",
        "แสดงตารางคลาสให้ตรงตามจริง โดยไม่ต้องแก้เว็บไซต์ด้วยมือ",
        "ออกแบบสำหรับมือถือเป็นหลัก เพราะสมาชิกส่วนใหญ่ดูและจองผ่านโทรศัพท์"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์สตูดิโอที่ออกแบบสำหรับมือถือเป็นหลัก",
        "ระบบจองคลาสออนไลน์ที่เชื่อมอยู่ในเว็บไซต์",
        "หน้าโปรไฟล์เทรนเนอร์รายบุคคล",
        "ตารางคลาสที่อัปเดตจากแหล่งข้อมูลกลาง",
        "แนวภาพถ่ายและคอนเทนต์สำหรับภาพสตูดิโอและเทรนเนอร์"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาสตูดิโอและกลุ่มเป้าหมาย",
          "desc": "รวบรวมข้อมูลรูปแบบคลาส ทีมเทรนเนอร์ และลักษณะของสมาชิกเป้าหมาย"
        },
        {
          "title": "ออกแบบ UX โดยให้การจองเป็นหลัก",
          "desc": "ออกแบบตารางคลาสและขั้นตอนจองให้เป็นเส้นทางหลักของเว็บไซต์ ไม่ใช่ฟีเจอร์เสริม"
        },
        {
          "title": "พัฒนาและเชื่อมต่อระบบ",
          "desc": "พัฒนาเว็บไซต์ที่โหลดเร็วและเชื่อมกับระบบจองคลาสครบทุกขั้นตอน"
        },
        {
          "title": "คอนเทนต์และเปิดตัว",
          "desc": "จัดภาพถ่ายเทรนเนอร์และสตูดิโอ พร้อมส่งมอบระบบตารางคลาสที่แก้ไขเองได้"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "เชื่อมต่อระบบจองคลาส",
        "เลย์เอาต์ที่ออกแบบสำหรับมือถือเป็นหลัก",
        "Cloud hosting & CDN",
        "CMS แบบเบาสำหรับตารางคลาสและข้อมูลเทรนเนอร์",
        "พื้นฐาน SEO บนหน้าเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เว็บไซต์ใหม่พร้อมระบบจองคลาสที่ใช้ได้ตั้งแต่วันแรก",
        "จองได้ในไม่กี่แตะจากหน้าแรกบนมือถือ",
        "หน้าเทรนเนอร์รายบุคคล ที่สมาชิกใหม่ใช้เลือกคลาสแรก",
        "ระบบตารางคลาสที่สตูดิโออัปเดตเองได้ ไม่ต้องพึ่งนักพัฒนา"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์สตูดิโอพร้อมระบบจองคลาสแบบนี้ ปกติใช้เวลาประมาณสองเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เว็บไซต์ Next.js ที่ใช้งานบนมือถือได้ดี เชื่อมกับระบบจองคลาส ใช้ CMS แบบเบาจัดการตารางและเทรนเนอร์ ติดตั้งบน Cloud hosting ที่มี CDN"
        },
        {
          "question": "ใช้กับแบรนด์ฟิตเนสหรือเวลเนสอื่นได้ไหม",
          "answer": "ได้ โครงสร้างที่เน้นการจองและหน้าโปรไฟล์เทรนเนอร์แบบนี้ ใช้ได้กับยิม สตูดิโอโยคะ และธุรกิจเวลเนสแบบคลาสอื่นๆ"
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
      "metaTitle": "เว็บไซต์ Blue Bear — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์เว็บไซต์ Blue Bear โดย Haliviq ครอบคลุมการออกแบบเว็บไซต์ (UX/UI) พัฒนาเว็บไซต์ ระบบแคตตาล็อกสินค้า",
      "h1": "Blue Bear — เว็บไซต์ B2B และแคตตาล็อกสินค้า",
      "client": "Blue Bear",
      "badge": "Apparel & Uniforms",
      "servicesProvided": [
        "ออกแบบเว็บไซต์ (UX/UI)",
        "พัฒนาเว็บไซต์",
        "ระบบแคตตาล็อกสินค้า",
        "ฟอร์มติดต่อสั่งซื้อสำหรับองค์กร (B2B)"
      ],
      "intro": "Blue Bear ขายให้โรงพยาบาลและคลินิก ผู้ซื้อกลุ่มนี้ต้องดูสินค้าทั้งไลน์และขอใบเสนอราคา ไม่ใช่แค่ใส่สินค้าลงตะกร้า Haliviq ทำเว็บไซต์แบบมืออาชีพที่มีแคตตาล็อกเป็นหลัก พร้อมฟอร์มติดต่อสั่งซื้อแบบ B2B ออกแบบตามวิธีจัดซื้อจริงขององค์กร ไม่ใช่หน้าร้านแบบผู้บริโภคทั่วไป",
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
        "ให้ผู้ซื้อระดับองค์กรดูสินค้าทั้งไลน์ตามหมวดหมู่ได้เอง ไม่ต้องโทรขอแคตตาล็อก",
        "เปลี่ยนการสั่งซื้อที่ไม่เป็นระบบ เป็นฟอร์มสอบถามและขอใบเสนอราคาที่ชัดเจน",
        "แสดงข้อมูลผ้า ขนาด และมาตรฐานให้ชัด เพื่อย่นเวลาการขาย",
        "สร้างความน่าเชื่อถือกับทีมจัดซื้อด้วยดีไซน์ที่เหมาะกับงาน B2B"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์และแคตตาล็อก B2B ที่แสดงผลได้ดีทุกขนาดหน้าจอ",
        "แคตตาล็อกสินค้าแบ่งหมวดตามประเภทการใช้งาน",
        "ฟอร์มติดต่อสั่งซื้อและขอใบเสนอราคาสำหรับผู้ซื้อองค์กรโดยเฉพาะ",
        "หน้ารายละเอียดสินค้า พร้อมข้อมูลผ้า ขนาด และสเปก",
        "หน้ามาตรฐานคุณภาพและกระบวนการผลิต ให้ฝ่ายจัดซื้อใช้ตรวจสอบ"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาธุรกิจและผู้ซื้อ",
          "desc": "รวบรวมข้อมูลไลน์สินค้า โครงสร้างหมวดหมู่ และวิธีที่ทีมจัดซื้อของโรงพยาบาลและคลินิกประเมินซัพพลายเออร์"
        },
        {
          "title": "ออกแบบ UX แคตตาล็อก",
          "desc": "ออกแบบเมนูหมวดหมู่และตัวกรอง ให้ผู้ซื้อหาสินค้าที่ต้องการได้เอง ไม่ต้องติดต่อฝ่ายขายไปมา"
        },
        {
          "title": "พัฒนาและเชื่อมฟอร์ม",
          "desc": "พัฒนาแคตตาล็อกและเชื่อมขั้นตอนสั่งซื้อที่เป็นระบบสำหรับลูกค้าองค์กร"
        },
        {
          "title": "คอนเทนต์และความน่าเชื่อถือ",
          "desc": "จัดภาพถ่ายสินค้า สเปก และหน้ามาตรฐานคุณภาพ เพื่อช่วยงานขาย"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "แคตตาล็อกสินค้าที่จัดโครงสร้างชัดเจน",
        "เชื่อมฟอร์มสอบถามและขอใบเสนอราคา B2B",
        "Cloud hosting & CDN",
        "ระบบจัดการคอนเทนต์สำหรับข้อมูลสินค้า",
        "SEO บนหน้าเว็บสำหรับคำค้นหาขององค์กร"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เว็บไซต์ใหม่ที่ทีมขายส่งให้ผู้ซื้อองค์กรดูได้ทันที",
        "ขั้นตอนขอใบเสนอราคา มาแทนการรับคำสั่งซื้อทางโทรศัพท์และอีเมลที่ไม่เป็นระบบ",
        "หน้าสินค้าที่ละเอียดพอจะตอบคำถามด้านจัดซื้อที่พบบ่อยได้ล่วงหน้า",
        "ดีไซน์ดูเป็นมืออาชีพ เหมาะกับคณะกรรมการจัดซื้อของโรงพยาบาลและคลินิก"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์ B2B ที่มีแคตตาล็อกเป็นหลักแบบนี้ ปกติใช้เวลาประมาณสองเดือน ขึ้นกับปริมาณข้อมูลสินค้าที่ต้องจัด"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "หน้าเว็บ Next.js พร้อมแคตตาล็อกสินค้าที่จัดโครงสร้างชัดเจน เชื่อมฟอร์มสอบถาม B2B โดยเฉพาะ และใช้ Cloud hosting ที่มี CDN"
        },
        {
          "question": "ใช้กับผู้ผลิต B2B รายอื่นได้ไหม",
          "answer": "ได้ รูปแบบแคตตาล็อกตามหมวดหมู่และการขอใบเสนอราคาแบบนี้ ใช้ได้กับผู้ผลิตรายอื่นที่ขายให้ผู้ซื้อองค์กรหรือสถาบัน"
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
      "metaTitle": "เว็บไซต์ Thai Metal Aluminium — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์เว็บไซต์ Thai Metal Aluminium โดย Haliviq ครอบคลุมการออกแบบเว็บไซต์ (UX/UI) พัฒนาเว็บไซต์ กำกับคอนเทนต์เชิงเทคนิค",
      "h1": "Thai Metal Aluminium — เว็บไซต์องค์กรแสดงความสามารถด้านอุตสาหกรรม",
      "client": "Thai Metal Aluminium",
      "badge": "Manufacturing",
      "servicesProvided": [
        "ออกแบบเว็บไซต์ (UX/UI)",
        "พัฒนาเว็บไซต์",
        "กำกับคอนเทนต์เชิงเทคนิค",
        "SEO สำหรับลูกค้าอุตสาหกรรม"
      ],
      "intro": "Thai Metal Aluminium ผลิตชิ้นส่วนโลหะและอะลูมิเนียมที่ต้องการความแม่นยำสูง แต่เว็บไซต์เดิมแสดงข้อมูลเครื่องจักรและมาตรฐานคุณภาพ ซึ่งผู้ซื้อในอุตสาหกรรมใช้ประเมินก่อนส่ง RFQ ได้ไม่ครบ Haliviq จึงสร้างเว็บไซต์องค์กรที่จัดโครงสร้างรอบความสามารถ การรับรอง และขั้นตอนการผลิตที่เปิดเผยชัดเจน โดยเน้นคอนเทนต์เชิงเทคนิคมากกว่าการตลาดแบรนด์ทั่วไป",
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
        "ให้วิศวกรและทีมจัดซื้อตรวจสอบความสามารถของเครื่องจักรและสเปกได้ง่ายทางออนไลน์",
        "แสดงมาตรฐานและใบรับรองคุณภาพในรูปแบบที่ช่วยย่นเวลาประเมินซัพพลายเออร์",
        "สร้างหน้าผลงานอ้างอิงและลูกค้าที่ผ่านมา เพื่อช่วยงานพัฒนาธุรกิจใหม่",
        "จัดโครงสร้างคอนเทนต์ให้ติดอันดับคำค้นหาด้านอุตสาหกรรมที่ผู้ซื้อใช้จริง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์องค์กรที่แสดงผลได้ดีทุกขนาดหน้าจอ สร้างสำหรับผู้ซื้อ B2B ในอุตสาหกรรม",
        "หน้าแสดงเครื่องจักร กระบวนการ และกำลังการผลิตอย่างเป็นระบบ",
        "หน้ามาตรฐานคุณภาพและใบรับรอง",
        "หน้าแสดงผลงานอ้างอิงและลูกค้าที่ผ่านมา",
        "คอนเทนต์เชิงเทคนิคที่จัดตามวิธีค้นหาของผู้ซื้อในอุตสาหกรรม"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาธุรกิจและความสามารถ",
          "desc": "รวบรวมข้อมูลกระบวนการผลิต รายการเครื่องจักร และลักษณะลูกค้าอุตสาหกรรมเป้าหมาย"
        },
        {
          "title": "วางโครงสร้างข้อมูล",
          "desc": "จัดโครงสร้างเว็บไซต์ให้ดูความสามารถ ใบรับรอง และผลงานเก่าได้ง่ายและตรวจสอบได้"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ที่โหลดเร็วและดูเป็นมืออาชีพ เหมาะกับกลุ่มเป้าหมาย B2B ในอุตสาหกรรม"
        },
        {
          "title": "วางแผน SEO ด้านเทคนิค",
          "desc": "จัดโครงสร้างคอนเทนต์และเมตาดาต้าให้ตรงกับคำค้นหาที่ผู้ซื้อในอุตสาหกรรมใช้จริง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "โครงสร้างคอนเทนต์เชิงเทคนิค",
        "Cloud hosting & CDN",
        "CMS แบบเบาสำหรับอัปเดตผลงานและกรณีศึกษา",
        "SEO เชิงเทคนิคบนหน้าเว็บ",
        "Structured data เพื่อเสริมความน่าเชื่อถือขององค์กร"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เว็บไซต์ใหม่ที่ทำให้บริษัทพร้อมรับ RFQ จากงานอุตสาหกรรมใหม่ๆ",
        "ข้อมูลความสามารถและใบรับรองที่ตรวจสอบได้ออนไลน์ ก่อนติดต่อฝ่ายขาย",
        "หน้าผลงานอ้างอิงที่ทีมพัฒนาธุรกิจส่งให้ลูกค้าที่สนใจได้ทันที",
        "พื้นฐาน SEO ด้านเทคนิคที่ตั้งเป้าคำค้นหาเฉพาะที่ผู้ซื้อในอุตสาหกรรมใช้"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์องค์กรที่แสดงความสามารถแบบนี้ ปกติใช้เวลาประมาณสองเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "หน้าเว็บ Next.js พร้อม CMS แบบเบาสำหรับเคสและใบรับรอง ติดตั้งบน Cloud hosting ที่มี CDN พร้อมโครงสร้าง SEO ด้านเทคนิค"
        },
        {
          "question": "ใช้กับผู้ผลิตในอุตสาหกรรมรายอื่นได้ไหม",
          "answer": "ได้ โครงสร้างที่เน้นความสามารถและใบรับรองแบบนี้ ใช้ได้กับผู้ผลิตชิ้นส่วนความแม่นยำสูงหรือธุรกิจจัดหาวัสดุอุตสาหกรรมอื่นๆ"
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
      "metaTitle": "เว็บไซต์ VERA — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์เว็บไซต์ VERA โดย Haliviq ครอบคลุมการออกแบบเว็บไซต์ (UX/UI) พัฒนาเว็บไซต์อีคอมเมิร์ซ กำกับภาพถ่ายสินค้า",
      "h1": "VERA — เว็บไซต์อีคอมเมิร์ซ ตะกร้าสินค้า และชำระเงิน",
      "client": "VERA",
      "badge": "E-Commerce",
      "servicesProvided": [
        "ออกแบบเว็บไซต์ (UX/UI)",
        "พัฒนาเว็บไซต์อีคอมเมิร์ซ",
        "กำกับภาพถ่ายสินค้า",
        "ช่วยวางกลยุทธ์การตลาดออนไลน์"
      ],
      "intro": "VERA ผลิตและขายสินค้าของตัวเอง แต่ขายผ่านมาร์เก็ตเพลสเป็นหลัก ทำให้กำไรและความสัมพันธ์กับลูกค้าถูกจำกัด Haliviq สร้างเว็บไซต์อีคอมเมิร์ซครบทั้งตะกร้าสินค้า ชำระเงิน และจัดการคำสั่งซื้อ ให้แบรนด์ขายตรงได้ และเก็บข้อมูลลูกค้าไว้เอง ซึ่งการขายผ่านมาร์เก็ตเพลสทำไม่ได้",
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
        "ลดการพึ่งพามาร์เก็ตเพลสของบุคคลที่สาม ด้วยช่องทางขายตรงถึงผู้บริโภคของแบรนด์เอง",
        "ทำขั้นตอนตะกร้าและชำระเงินให้ลื่นไหลพอจะสู้ความสะดวกของมาร์เก็ตเพลสได้",
        "ให้ทีมดูคำสั่งซื้อได้เอง ไม่ต้องพึ่งแดชบอร์ดผู้ขายของมาร์เก็ตเพลส",
        "นำเสนอภาพลักษณ์พรีเมียมให้สมกับคุณภาพและราคาสินค้าจริง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์อีคอมเมิร์ซพร้อมตะกร้าสินค้า ชำระเงิน และจัดการคำสั่งซื้อ",
        "ดีไซน์มินิมอลหรูหรา พร้อมภาพสินค้าหลายมุม",
        "หน้าคอลเลกชันตามฤดูกาลที่ทีมภายในอัปเดตเองได้",
        "เชื่อมช่องทางชำระเงินหลายรูปแบบ",
        "ระบบติดตามสถานะคำสั่งซื้อให้ลูกค้าหลังสั่งซื้อ"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาแบรนด์และสินค้า",
          "desc": "รวบรวมข้อมูลไลน์สินค้า โทนภาพ และกลุ่มลูกค้าเป้าหมาย ก่อนวางโครงสร้างหน้าร้าน"
        },
        {
          "title": "ออกแบบ UX ให้สั่งซื้อง่าย",
          "desc": "ออกแบบการเลือกดูสินค้าและชำระเงินให้มีขั้นตอนน้อย และไม่ให้ลูกค้าหลุดกลางทาง"
        },
        {
          "title": "พัฒนาระบบอีคอมเมิร์ซ",
          "desc": "พัฒนาตะกร้าสินค้า ชำระเงิน เชื่อมช่องทางจ่ายเงิน และระบบจัดการคำสั่งซื้อ"
        },
        {
          "title": "ส่งมอบคอนเทนต์และงานการตลาด",
          "desc": "จัดภาพถ่ายสินค้าและวางแนวทางคอนเทนต์ ให้ทีมนำไปใช้ต่อได้หลายช่องทาง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "ระบบตะกร้าสินค้าและชำระเงิน",
        "เชื่อม Payment gateway",
        "ระบบจัดการคำสั่งซื้อ",
        "Cloud hosting & CDN",
        "พื้นฐาน SEO บนหน้าเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เว็บไซต์ใหม่ที่ให้แบรนด์มีช่องทางขายตรง ไม่ต้องพึ่งมาร์เก็ตเพลส",
        "ชำระเงินในหน้าเดียว ออกแบบมาเพื่อลดการทิ้งตะกร้า",
        "ลูกค้าเช็กสถานะคำสั่งซื้อได้เอง ลดการสอบถามไปยังฝ่ายบริการลูกค้า",
        "นำเสนอสินค้าแบบพรีเมียมให้สมกับระดับราคาของแบรนด์"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "งานอีคอมเมิร์ซที่มีตะกร้า ชำระเงิน และจัดการคำสั่งซื้อครบแบบนี้ ปกติใช้เวลาประมาณสามเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "หน้าร้านอีคอมเมิร์ซสร้างด้วย Next.js เชื่อม Payment gateway มีระบบจัดการคำสั่งซื้อ และใช้ Cloud hosting ที่มี CDN"
        },
        {
          "question": "ใช้กับแบรนด์สินค้าอื่นได้ไหม",
          "answer": "ได้ โครงสร้างตะกร้า ชำระเงิน และจัดการคำสั่งซื้อแบบนี้ ใช้ได้กับผู้ผลิตรายอื่นที่ขายตรงถึงผู้บริโภค และอยากลดการพึ่งพามาร์เก็ตเพลส"
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
      "metaTitle": "เว็บไซต์ NFI สถาบันอาหาร — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์ เว็บไซต์ NFI สถาบันอาหาร โดย Haliviq ครอบคลุม ออกแบบเว็บไซต์ (UX/UI) พัฒนาเว็บไซต์ ระบบค้นหาบริการห้องปฏิบ...",
      "h1": "NFI สถาบันอาหาร — เว็บไซต์ภาครัฐและระบบค้นหาบริการ",
      "client": "NFI สถาบันอาหาร",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "ออกแบบเว็บไซต์ (UX/UI)",
        "พัฒนาเว็บไซต์",
        "ระบบค้นหาบริการห้องปฏิบัติการ",
        "จัดระเบียบเนื้อหางานวิจัย"
      ],
      "intro": "NFI สถาบันอาหาร มีบริการหลากหลายสำหรับผู้ประกอบการและนักวิจัย แต่เว็บไซต์เดิมซ่อนบริการเหล่านั้นไว้หลังเมนูที่หาไม่เจอ Haliviq จึงเน้นให้ผู้ใช้หาบริการเจอ โดยจัดบริการที่ซับซ้อนของหน่วยงานเป็นหมวดหมู่ พร้อมระบบค้นหาที่ใช้ได้จริง ให้เว็บไซต์ช่วยผู้ใช้ได้จริง ไม่ใช่แค่โบรชัวร์ออนไลน์",
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
        "ให้ผู้เข้าชมครั้งแรกหาบริการที่ต้องการเจอภายในไม่ถึงนาที",
        "จัดบริการที่หลากหลายของหน่วยงานเป็นหมวดหมู่ชัดเจน นำทางง่าย",
        "แสดงขั้นตอนและระยะเวลาให้ชัด เพื่อลดสายโทรเข้ามาสอบถาม",
        "สร้างเว็บไซต์ภาครัฐที่ทันสมัยและน่าเชื่อถือ"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์ภาครัฐที่แสดงผลได้ดีทุกขนาดหน้าจอ",
        "เนื้อหาบริการและงานวิจัยที่จัดเป็นหมวดหมู่ชัดเจน",
        "ระบบค้นหาบริการของหน่วยงานที่ใช้ได้จริง",
        "หน้าข้อมูลขั้นตอนและระยะเวลาการให้บริการ",
        "โครงสร้างเอกสารดาวน์โหลดสำหรับเผยแพร่สู่สาธารณะ"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาหน่วยงาน",
          "desc": "รวบรวมโครงสร้างบริการทั้งหมดและกลุ่มผู้ใช้ของแต่ละบริการ"
        },
        {
          "title": "วางโครงสร้างข้อมูล",
          "desc": "จัดบริการและงานวิจัยให้ผู้เข้าชมที่ไม่ใช่ผู้เชี่ยวชาญใช้งานได้"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ที่โหลดเร็วและเข้าถึงง่าย รองรับทั้งผู้ใช้ฝั่งธุรกิจและงานวิจัย"
        },
        {
          "title": "จัดระเบียบเนื้อหา",
          "desc": "จัดโครงสร้างเนื้อหาบริการและงานวิจัยให้ครบและค้นหาได้"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "ระบบค้นหาและกรองบริการ",
        "Cloud hosting & CDN",
        "ระบบจัดการเนื้อหาให้หน่วยงานอัปเดตเอง",
        "โค้ด HTML ที่เข้าถึงได้ตามมาตรฐาน",
        "พื้นฐาน SEO บนหน้าเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เว็บไซต์ใหม่ที่ผู้ใช้หาบริการเจอได้เอง",
        "ระบบค้นหาที่ใช้ได้จริง ลดการสอบถามทางโทรศัพท์",
        "เผยแพร่ขั้นตอนและระยะเวลาอย่างชัดเจนเป็นครั้งแรก",
        "เว็บไซต์ทันสมัยที่สมกับความน่าเชื่อถือของหน่วยงานภาครัฐ"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์ภาครัฐพร้อมระบบค้นหาบริการแบบนี้ ปกติใช้เวลาประมาณสามเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "หน้าเว็บ Next.js พร้อมระบบค้นหาและกรองโดยเฉพาะ ระบบจัดการเนื้อหาสำหรับหน่วยงาน และ Cloud hosting ที่มี CDN"
        },
        {
          "question": "ใช้กับหน่วยงานภาครัฐอื่นได้ไหม",
          "answer": "ได้ การจัดหมวดหมู่บริการและระบบค้นหาแบบนี้ ใช้ได้กับหน่วยงานหรือสถาบันภาครัฐอื่นที่มีบริการหลากหลาย"
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
      "metaTitle": "แอป MBK Center — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์แอปมือถือ MBK Center โดย Haliviq ครอบคลุมการออกแบบ UX/UI พัฒนาแอปมือถือ ระบบค้นหาร้านค้าและโปรโมชัน",
      "h1": "MBK Center — แอปมือถือค้นหาร้านค้าและระบบสมาชิก",
      "client": "MBK Center",
      "badge": "Retail & Shopping Mall",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาแอปมือถือ",
        "ระบบค้นหาร้านค้าและโปรโมชัน",
        "ระบบสมาชิกและสิทธิพิเศษ"
      ],
      "intro": "MBK Center ต้องการแอปมือถือที่แก้ปัญหาจริงสองอย่างของคนที่มาเดินศูนย์การค้า คือหาร้านค้าหรือโปรโมชันที่ต้องการ และรู้ว่าตอนนี้มีสิทธิพิเศษสมาชิกอะไรบ้าง Haliviq ส่งมอบแอปมือถือที่มีระบบค้นหาร้านค้าและโปรโมชัน รวมถึงระบบสมาชิกและสิทธิพิเศษ เป็นเครื่องมือที่ลูกค้าเปิดใช้ตอนอยู่ในศูนย์จริงๆ",
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
        "ให้ลูกค้าหาร้านค้าหรือโปรโมชันที่ต้องการได้เร็วในศูนย์การค้าขนาดใหญ่",
        "ทำให้สิทธิพิเศษสมาชิกเป็นสิ่งที่ลูกค้าเปิดดูเป็นประจำ ไม่ใช่บัตรที่ลืมไปแล้ว",
        "ลดการใช้ป้ายไดเรกทอรีแบบติดตายตัวสำหรับข้อมูลร้านค้าและโปรโมชัน",
        "สร้างแพลตฟอร์มที่ทีมการตลาดของศูนย์ส่งโปรโมชันเข้าไปได้เอง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "แอปมือถือที่ใช้งานลื่นเหมือนแอปเนทีฟบน iOS และ Android",
        "ค้นหาร้านค้าและโปรโมชันจากข้อมูลที่อัปเดตเรียลไทม์",
        "ระบบสมาชิกและสิทธิพิเศษที่อยู่ในแอป",
        "งานออกแบบ UX/UI ครอบคลุมหน้าแนะนำการใช้งานครั้งแรก การค้นหา และบัญชีสมาชิก",
        "ระบบหลังบ้านสำหรับให้ทีมการตลาดของศูนย์จัดการเนื้อหา"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาผู้ใช้และผู้เกี่ยวข้อง",
          "desc": "รวบรวมข้อมูลวิธีที่ลูกค้าหาร้านค้าและโปรโมชันจริง และวิธีที่ทีมศูนย์จัดการข้อมูลร้านค้า"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบการค้นหา การดูโปรโมชัน และขั้นตอนสมาชิก ให้เหมาะกับการใช้งานตอนอยู่ในศูนย์"
        },
        {
          "title": "พัฒนาแอปมือถือ",
          "desc": "พัฒนาแอปพร้อมระบบค้นหาร้านค้าและโปรโมชัน และเชื่อมระบบสมาชิก"
        },
        {
          "title": "ช่วยดูแลช่วงเปิดตัว",
          "desc": "ส่งมอบระบบหลังบ้านให้ทีมการตลาดจัดการรายชื่อร้านและโปรโมชันได้เอง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "เฟรมเวิร์กแอปมือถือที่ใช้ได้ทั้งสองแพลตฟอร์ม",
        "ระบบค้นหาร้านค้าและโปรโมชัน",
        "เชื่อมระบบหลังบ้านของสมาชิกและสิทธิพิเศษ",
        "Cloud hosting และโครงสร้าง API",
        "รองรับ Push notification",
        "หน้าจอหลังบ้านสำหรับจัดการเนื้อหา"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "แอปใหม่ที่ใช้แทนป้ายไดเรกทอรีแบบเดิมได้",
        "ค้นหาร้านค้าและโปรโมชันได้ในไม่กี่วินาที",
        "ระบบสมาชิกที่ออกแบบให้ลูกค้าเปิดดูอยู่เสมอ ไม่ถูกลืม",
        "ทีมการตลาดดูแลเนื้อหาเองได้ ไม่ต้องพึ่งทีมวิศวกร"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "แอปมือถือพร้อมระบบค้นหาและสมาชิกแบบนี้ ปกติใช้เวลาประมาณสองถึงสามเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เฟรมเวิร์กแอปมือถือที่ใช้ได้ทั้งสองแพลตฟอร์ม ระบบค้นหาร้านค้าและโปรโมชันโดยเฉพาะ และระบบหลังบ้านของสมาชิกที่เชื่อมกับระบบเดิมของศูนย์"
        },
        {
          "question": "ใช้กับศูนย์การค้าหรือกลุ่มค้าปลีกอื่นได้ไหม",
          "answer": "ได้ ระบบค้นหาร้านค้าและระบบสมาชิกแบบนี้ ใช้ได้กับผู้ดำเนินการศูนย์การค้าหรือค้าปลีกที่มีผู้เช่าหลายราย"
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
      "metaTitle": "แอป DITP กรมส่งเสริมการค้าระหว่างประเทศ — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์แอปมือถือ DITP กรมส่งเสริมการค้าระหว่างประเทศ โดย Haliviq ครอบคลุมการออกแบบ UX/UI พัฒนาแอปมือถือ ระบบข้อมูลตลาดส่งออก",
      "h1": "DITP กรมส่งเสริมการค้าระหว่างประเทศ — พัฒนาแอปมือถือเพื่อบริการประชาชน",
      "client": "DITP กรมส่งเสริมการค้าระหว่างประเทศ",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาแอปมือถือ",
        "ระบบข้อมูลตลาดส่งออก",
        "เชื่อมฐานข้อมูลผู้ประกอบการ"
      ],
      "intro": "DITP กรมส่งเสริมการค้าระหว่างประเทศ ต้องการแอปมือถือที่ให้บริการของหน่วยงานกับประชาชนผ่านมือถือเป็นหลัก โดยต้องเชื่อมกับข้อมูลและระบบของภาครัฐที่มีอยู่แล้ว ไม่ใช่แอปสำหรับผู้บริโภคที่เริ่มจากศูนย์ Haliviq ดูแลทั้งการออกแบบ UX/UI และการพัฒนา รวมถึงงานเชื่อมต่อข้อมูล เพื่อให้แอปภาครัฐใช้งานได้จริงตั้งแต่วันเปิดตัว",
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
        "ให้บริการหรือเนื้อหาของหน่วยงานกับประชาชนผ่านมือถือเป็นหลัก",
        "เชื่อมกับแหล่งข้อมูลภาครัฐที่มีอยู่ได้อย่างราบรื่น ไม่ต้องสร้างข้อมูลซ้ำ",
        "ออกแบบให้ใช้ได้กับผู้ใช้หลายกลุ่ม รวมถึงประชาชนที่ไม่คุ้นกับเทคโนโลยี",
        "สร้างแพลตฟอร์มที่หน่วยงานเพิ่มฟีเจอร์ใหม่ได้ในอนาคต"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "แอปมือถือที่ใช้งานลื่นเหมือนแอปเนทีฟบน iOS และ Android",
        "งานออกแบบ UX/UI ที่เหมาะกับผู้ใช้ทั่วไปที่ไม่ใช่สายเทคนิค",
        "เชื่อมกับฐานข้อมูลและระบบภาครัฐที่มีอยู่",
        "โครงสร้างเนื้อหาที่หน่วยงานอัปเดตเองได้",
        "หน้าจอที่ออกแบบให้ทุกคนเข้าถึงได้ (Accessibility)"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาผู้เกี่ยวข้องและข้อมูล",
          "desc": "สำรวจระบบและแหล่งข้อมูลเดิมที่แอปต้องเชื่อมต่อ"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบสำหรับผู้ใช้ทั่วไป เน้นให้ชัดเจนมากกว่าใส่ข้อมูลแน่น"
        },
        {
          "title": "พัฒนาแอปมือถือ",
          "desc": "พัฒนาแอปและเชื่อมกับข้อมูลและระบบเดิมของหน่วยงาน"
        },
        {
          "title": "ส่งมอบและวางแผนต่อยอด",
          "desc": "ส่งมอบแอปพร้อมโครงสร้างที่หน่วยงานเพิ่มฟีเจอร์ใหม่ได้ในอนาคต"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "เฟรมเวิร์กแอปมือถือที่ใช้ได้ทั้งสองแพลตฟอร์ม",
        "เชื่อมข้อมูลและ API ภาครัฐ",
        "Cloud hosting และโครงสร้างระบบหลังบ้าน",
        "ชุดส่วนประกอบหน้าจอ (UI library) ที่เข้าถึงได้",
        "ระบบจัดการเนื้อหาให้หน่วยงานอัปเดตเอง",
        "ระบบยืนยันตัวตนที่ปลอดภัย"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "แอปใหม่ที่ให้บริการของหน่วยงานผ่านมือถือเป็นหลัก",
        "เชื่อมข้อมูลโดยไม่ต้องสร้างข้อมูลซ้ำซ้อนระหว่างระบบ",
        "หน้าจอที่ออกแบบสำหรับผู้ใช้ทั่วไปที่ไม่ใช่สายเทคนิค",
        "แพลตฟอร์มที่วางโครงสร้างให้หน่วยงานเพิ่มความสามารถใหม่ได้ในอนาคต"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "แอปมือถือภาครัฐที่เชื่อมระบบแบบนี้ ปกติใช้เวลาประมาณสองถึงสามเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เฟรมเวิร์กแอปมือถือที่ใช้ได้ทั้งสองแพลตฟอร์ม เชื่อมกับฐานข้อมูลของหน่วยงาน ติดตั้งบนคลาวด์พร้อมระบบยืนยันตัวตนที่ปลอดภัย"
        },
        {
          "question": "ใช้กับหน่วยงานภาครัฐอื่นได้ไหม",
          "answer": "ได้ การเชื่อมข้อมูลและ UX ที่เข้าถึงง่ายแบบนี้ ใช้ได้กับหน่วยงานภาครัฐอื่นที่นำบริการขึ้นมือถือ"
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
      "metaTitle": "เว็บไซต์ Sra Bua by Kiin Kiin — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์เว็บไซต์ Sra Bua by Kiin Kiin โดย Haliviq ครอบคลุมการออกแบบ UX/UI พัฒนาเว็บไซต์ ระบบจองโต๊ะออนไลน์",
      "h1": "Sra Bua by Kiin Kiin — เว็บไซต์และประสบการณ์ลูกค้าออนไลน์",
      "client": "Sra Bua by Kiin Kiin",
      "badge": "F&B",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "ระบบจองโต๊ะออนไลน์",
        "กำกับภาพถ่ายและคอนเทนต์"
      ],
      "intro": "Sra Bua by Kiin Kiin ต้องการมากกว่าเมนูออนไลน์ แต่ต้องการหน้าเว็บที่ทำให้คนรู้สึกถึงมาตรฐานร้านไฟน์ไดนิ่งตั้งแต่แรกเห็น Haliviq ทำเว็บไซต์สองภาษาพร้อมระบบจองโต๊ะ ใช้ภาพอาหารความละเอียดสูง จัดเมนูชิมให้อ่านง่าย และวางหน้าให้ดูมีคุณภาพก่อนผู้ชมจะอ่านข้อความด้วยซ้ำ บทความนี้สรุปงานที่ส่งมอบ เทคโนโลยีที่ใช้ และผลลัพธ์ ทั้งมุมการดำเนินงานของร้านอาหารและมุมการพัฒนาเว็บ",
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
        "เปลี่ยนเว็บไซต์เดิมที่ล้าสมัยหรือยังไม่มี เป็นเว็บไซต์ที่เหมาะกับระดับราคาและมาตรฐานการบริการของร้าน",
        "ลดภาระการจองทางโทรศัพท์ ด้วยการจองออนไลน์ที่กดได้จากหน้าแรก",
        "วางโครงสร้างคอนเทนต์ให้ทีมครัวและทีมหน้าร้านอัปเดตเองได้ โดยไม่ต้องพึ่งนักพัฒนา",
        "วางพื้นฐาน SEO เพื่อให้ติดอันดับต่อเนื่องในคำค้นหาไฟน์ไดนิ่งในกรุงเทพฯ ที่แข่งขันสูง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์สองภาษา (ไทย/อังกฤษ) ที่แสดงผลได้ดีทุกขนาดหน้าจอ",
        "หน้าแรกและแกลเลอรีเมนูที่เน้นภาพถ่ายความละเอียดสูง",
        "หน้าเมนูชิม ไวน์ลิสต์ และเมนูตามฤดูกาลที่จัดไว้อ่านง่าย",
        "ระบบจองโต๊ะออนไลน์ที่กดได้จากหน้าหลัก",
        "หน้าเรื่องราวของเชฟและแบรนด์ ใช้ประกอบงานสื่อและประชาสัมพันธ์",
        "ฟอร์มติดต่อสำหรับจัดงานส่วนตัวและกลุ่มใหญ่"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ดูหน้างานและเก็บข้อมูล",
          "desc": "ไปที่ร้านเพื่อดูจังหวะการเสิร์ฟ การจัดจาน และการเดินของแขก แล้วนำมาใช้ตัดสินใจเรื่องเลย์เอาต์และภาพ แทนการคาดเดา"
        },
        {
          "title": "วางโครงสร้างข้อมูล",
          "desc": "จัดหน้าที่ลูกค้าต้องใช้ ทั้งเมนู การจอง ที่ตั้ง และเรื่องราวของร้าน ให้เข้าถึงได้ด้วยการคลิกน้อยที่สุด"
        },
        {
          "title": "พัฒนาและเชื่อมต่อระบบ",
          "desc": "พัฒนาหน้าเว็บ เชื่อมระบบจองโต๊ะ และปรับการโหลดภาพ เพื่อให้เว็บที่เน้นภาพยังเปิดได้เร็ว"
        },
        {
          "title": "เปิดตัวและส่งมอบคอนเทนต์",
          "desc": "ส่งมอบระบบคอนเทนต์ที่แก้ไขได้เอง พร้อมอบรมสั้นๆ ให้ทีมอัปเดตเมนูและภาพได้"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "Headless CMS สำหรับอัปเดตเมนูและคอนเทนต์",
        "Cloud hosting และ CDN สำหรับส่งภาพ",
        "ระบบจองโต๊ะออนไลน์",
        "โครงสร้างคอนเทนต์สองภาษา",
        "พื้นฐาน SEO บนหน้าเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ได้เว็บไซต์ใหม่ตามกำหนด มาแทนเว็บเดิมที่ไม่เหมาะกับภาพลักษณ์ของแบรนด์",
        "จองโต๊ะได้ภายในสองคลิกจากทุกหน้า ลดการจองทางโทรศัพท์",
        "ทางร้านปรับเมนูตามฤดูกาลได้เอง ไม่ต้องรอนักพัฒนา",
        "มีพื้นฐาน SEO ทั้งด้านเทคนิคและบนหน้าเว็บ พร้อมเติบโตในคำค้นหาไฟน์ไดนิ่ง"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์ของ Sra Bua by Kiin Kiin ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์ร้านอาหารสองภาษาที่เน้นภาพถ่ายแบบนี้ ปกติใช้เวลาสองถึงสามเดือนตั้งแต่เก็บข้อมูลจนถึงเปิดตัว ขึ้นกับความพร้อมของภาพถ่ายและเนื้อหา"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เว็บไซต์สร้างด้วย Next.js ใช้ Headless CMS จัดการคอนเทนต์ ติดตั้งบน Cloud hosting ที่มี CDN ให้ภาพโหลดเร็ว และมีระบบจองโต๊ะโดยเฉพาะ"
        },
        {
          "question": "ใช้แนวทางนี้กับแบรนด์ร้านอาหารอื่นได้ไหม",
          "answer": "ได้ โครงสร้างแบบเดียวกันคือ ใช้เมนูเป็นหลักในการนำทาง มีระบบจอง คอนเทนต์สองภาษา และแชทบอท AI เสริม ใช้ได้ดีกับร้านไฟน์ไดนิ่งหรือร้านอาหารหลายสาขา"
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
      "metaTitle": "เว็บไซต์ World Surprise Travel — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์เว็บไซต์ World Surprise Travel โดย Haliviq ครอบคลุมการออกแบบ Branding ออกแบบ UX/UI พัฒนาเว็บไซต์",
      "h1": "World Surprise Travel — งานแบรนด์ เว็บไซต์ และ AI CRM",
      "client": "World Surprise Travel",
      "badge": "Travel & Tourism",
      "servicesProvided": [
        "ออกแบบแบรนด์",
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "พัฒนา AI CRM"
      ],
      "intro": "World Surprise Travel ต้องการสามอย่างที่บริษัททัวร์ส่วนใหญ่ไม่ได้จากงานเดียว คือแบรนด์ที่มีเอกลักษณ์ชัดเจน เว็บไซต์ที่ขายแพ็กเกจทัวร์ได้จริง และ CRM ที่สร้างให้เข้ากับวิธีรับจองทัวร์และดูแลลูกค้าจริง Haliviq ส่งมอบทั้งสามอย่างเป็นระบบเดียวที่เชื่อมกัน ไม่ใช่งานจากผู้ให้บริการสามเจ้าที่แยกขาดจากกัน",
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
        "ให้แบรนด์มีเอกลักษณ์ที่สอดคล้องกัน ใช้ได้ทั้งบนเว็บและสื่อออฟไลน์",
        "สร้างเว็บไซต์ที่เสนอและขายแพ็กเกจทัวร์ได้จริง ไม่ใช่แค่แนะนำบริษัท",
        "เปลี่ยนจากการติดตามลูกค้าด้วยสเปรดชีต เป็น CRM ที่สร้างให้เข้ากับขั้นตอนการขายทัวร์",
        "เชื่อมแบรนด์ เว็บไซต์ และ CRM เป็นระบบเดียว แทนเครื่องมือสามชิ้นที่แยกกัน"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "งานออกแบบแบรนด์ครบชุด (โลโก้ ชุดสี และสไตล์ภาพ)",
        "เว็บไซต์ที่แสดงผลได้ดีทุกขนาดหน้าจอ ใช้เสนอและขายแพ็กเกจทัวร์",
        "AI CRM สำหรับจัดการลีด การจอง และความสัมพันธ์กับลูกค้า",
        "งานออกแบบ UX/UI ที่เชื่อมประสบการณ์บนเว็บไซต์และ CRM เข้าด้วยกัน",
        "โครงสร้างเนื้อหาสำหรับแพ็กเกจ โปรโมชัน และข้อเสนอตามฤดูกาล"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "วางกลยุทธ์แบรนด์และออกแบบเอกลักษณ์",
          "desc": "สร้างเอกลักษณ์แบรนด์ที่สะท้อนจุดยืนของบริษัทในธุรกิจท่องเที่ยว"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบประสบการณ์บนเว็บไซต์และ CRM ให้เป็นระบบเดียวที่เชื่อมกัน"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ที่วางโครงสร้างรอบการดูและซื้อแพ็กเกจทัวร์"
        },
        {
          "title": "พัฒนา AI CRM",
          "desc": "พัฒนา CRM ที่ปรับให้เหมาะกับการจัดการลีดและการจองในธุรกิจท่องเที่ยว"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "ระบบเอกลักษณ์แบรนด์",
        "Next.js front-end",
        "แพลตฟอร์ม CRM ที่มี AI ช่วย",
        "Cloud hosting & CDN",
        "ระบบจัดการข้อมูลการจองและแพ็กเกจ",
        "พื้นฐาน SEO บนหน้าเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บไซต์ใหม่พร้อมเอกลักษณ์แบรนด์ใหม่และ AI CRM",
        "เว็บไซต์ที่สร้างมาเพื่อขายแพ็กเกจโดยตรง ไม่ใช่แค่แนะนำบริษัท",
        "CRM ที่มาแทนการติดตามลูกค้าและการจองด้วยสเปรดชีต",
        "ระบบเดียวที่เชื่อมตั้งแต่แบรนด์ถึง CRM แทนเครื่องมือสามชิ้นที่แยกกัน"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "งานรวมแบรนด์ เว็บไซต์ และ AI CRM แบบนี้ ปกติใช้เวลาสามถึงสี่เดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เว็บไซต์ Next.js เชื่อมกับแพลตฟอร์ม CRM ที่มี AI ช่วย ติดตั้งบน Cloud hosting ที่มี CDN"
        },
        {
          "question": "ใช้กับบริษัททัวร์หรือท่องเที่ยวอื่นได้ไหม",
          "answer": "ได้ การรวมแบรนด์ เว็บไซต์ และ CRM แบบนี้ ใช้ได้กับบริษัททัวร์และเอเจนซี่ท่องเที่ยวอื่นที่ต้องการครบทั้งสามอย่างในระบบเดียว"
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
      "metaTitle": "เว็บไซต์ Awii House — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์เว็บไซต์ Awii House โดย Haliviq ครอบคลุมการออกแบบ UX/UI พัฒนาเว็บไซต์ พัฒนาระบบ CRM",
      "h1": "Awii House — เว็บไซต์ แบรนด์ และ CRM อสังหาริมทรัพย์",
      "client": "Awii House",
      "badge": "Construction & Real Estate",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "พัฒนาระบบ CRM",
        "แกลเลอรีแบบบ้านและผลงาน"
      ],
      "intro": "Awii House ต้องการติดตามลูกค้าตั้งแต่สอบถามครั้งแรกจนถึงเซ็นสัญญา ซึ่งเว็บไซต์การตลาดอย่างเดียวทำไม่ได้ Haliviq จึงสร้างเว็บไซต์คู่กับ CRM เฉพาะทาง ให้ลีดทุกรายที่เข้ามาทางเว็บไซต์ถูกติดตามและปิดการขายด้วยข้อมูลที่ทีมขายเห็นได้จริง",
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
        "รับและติดตามลีดทุกราย ตั้งแต่เข้าเว็บไซต์ครั้งแรกจนถึงเซ็นสัญญา",
        "ให้ทีมขายดูข้อมูลผ่าน CRM แทนสเปรดชีตหรือแอปแชทที่กระจัดกระจาย",
        "นำเสนอโครงการหรือผลงานด้วยภาพถ่ายและเลย์เอาต์ที่สมกับระดับราคา",
        "สร้างระบบที่ขยายได้เมื่อมีโครงการหรือยูนิตใหม่"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์การตลาดที่แสดงผลได้ดีทุกขนาดหน้าจอ สำหรับโครงการหรือผลงาน",
        "CRM อสังหาริมทรัพย์เฉพาะทางสำหรับติดตามลีดและขั้นตอนการขาย",
        "แกลเลอรีและหน้าผลงานสำหรับยูนิต แบบบ้าน หรือผลงานที่ผ่านมา",
        "ฟอร์มรับลีดที่เชื่อมเข้า CRM โดยตรง",
        "โครงสร้างเนื้อหาสำหรับอัปเดตโครงการหรือยูนิตอย่างต่อเนื่อง"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาธุรกิจและขั้นตอนการขาย",
          "desc": "วาดแผนผังขั้นตอนการขายจริงตั้งแต่สอบถามจนถึงเซ็นสัญญา ก่อนออกแบบ CRM"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบเว็บไซต์และ CRM ให้ขั้นตอนรับลีดและติดตามสอดคล้องกัน"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์การตลาดที่เน้นภาพถ่าย สำหรับโครงการหรือผลงาน"
        },
        {
          "title": "พัฒนา CRM",
          "desc": "พัฒนา CRM ที่ปรับตามขั้นตอนการขายอสังหาริมทรัพย์ เชื่อมกับการรับลีดจากเว็บไซต์โดยตรง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "พัฒนา CRM อสังหาริมทรัพย์",
        "เชื่อมฟอร์มรับลีด",
        "Cloud hosting & CDN",
        "ระบบจัดการเนื้อหาแกลเลอรีและผลงาน",
        "พื้นฐาน SEO บนหน้าเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เว็บไซต์ใหม่คู่กับ CRM ที่ติดตามลีดตั้งแต่เข้าชมครั้งแรกจนถึงเซ็นสัญญา",
        "ขั้นตอนการขายที่ทีมดูและจัดการได้ในที่เดียว",
        "แกลเลอรีที่สมกับระดับราคาและจุดยืนของโครงการ",
        "ระบบที่วางโครงสร้างให้ขยายได้เมื่อมียูนิตหรือโครงการใหม่เปิดตัว"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "งานเว็บไซต์คู่กับ CRM แบบนี้ ปกติใช้เวลาสองถึงสามเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เว็บไซต์การตลาด Next.js เชื่อมกับ CRM อสังหาริมทรัพย์เฉพาะทางโดยตรง ติดตั้งบน Cloud hosting ที่มี CDN"
        },
        {
          "question": "ใช้กับผู้พัฒนาโครงการหรือบริษัทรับสร้างบ้านอื่นได้ไหม",
          "answer": "ได้ เว็บไซต์คู่กับ CRM แบบนี้ ใช้ได้กับผู้พัฒนาอสังหาริมทรัพย์และบริษัทรับสร้างบ้านอื่นที่ต้องการติดตามลีดตั้งแต่สอบถามจนถึงเซ็นสัญญา"
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
      "metaTitle": "เว็บไซต์ Canapaya Residences — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์เว็บไซต์ Canapaya Residences โดย Haliviq ครอบคลุมการออกแบบ Brand CI ออกแบบ UX/UI พัฒนาเว็บไซต์",
      "h1": "Canapaya Residences — เว็บไซต์ แบรนด์ และ CRM อสังหาริมทรัพย์",
      "client": "Canapaya Residences",
      "badge": "Real Estate",
      "servicesProvided": [
        "ออกแบบ Brand CI",
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "พัฒนา CRM อสังหาริมทรัพย์"
      ],
      "intro": "Canapaya Residences ต้องการติดตามลูกค้าตั้งแต่สอบถามครั้งแรกจนถึงเซ็นสัญญา ซึ่งเว็บไซต์การตลาดอย่างเดียวทำไม่ได้ Haliviq จึงสร้างเว็บไซต์คู่กับ CRM เฉพาะทาง ให้ลีดทุกรายที่เข้ามาทางเว็บไซต์ถูกติดตามและปิดการขายด้วยข้อมูลที่ทีมขายเห็นได้จริง",
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
        "รับและติดตามลีดทุกราย ตั้งแต่เข้าเว็บไซต์ครั้งแรกจนถึงเซ็นสัญญา",
        "ให้ทีมขายดูข้อมูลผ่าน CRM แทนสเปรดชีตหรือแอปแชทที่กระจัดกระจาย",
        "นำเสนอโครงการหรือผลงานด้วยภาพถ่ายและเลย์เอาต์ที่สมกับระดับราคา",
        "สร้างระบบที่ขยายได้เมื่อมีโครงการหรือยูนิตใหม่"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์การตลาดที่แสดงผลได้ดีทุกขนาดหน้าจอ สำหรับโครงการหรือผลงาน",
        "CRM อสังหาริมทรัพย์เฉพาะทางสำหรับติดตามลีดและขั้นตอนการขาย",
        "แกลเลอรีและหน้าผลงานสำหรับยูนิต แบบบ้าน หรือผลงานที่ผ่านมา",
        "ฟอร์มรับลีดที่เชื่อมเข้า CRM โดยตรง",
        "โครงสร้างเนื้อหาสำหรับอัปเดตโครงการหรือยูนิตอย่างต่อเนื่อง"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาธุรกิจและขั้นตอนการขาย",
          "desc": "วาดแผนผังขั้นตอนการขายจริงตั้งแต่สอบถามจนถึงเซ็นสัญญา ก่อนออกแบบ CRM"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบเว็บไซต์และ CRM ให้ขั้นตอนรับลีดและติดตามสอดคล้องกัน"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์การตลาดที่เน้นภาพถ่าย สำหรับโครงการหรือผลงาน"
        },
        {
          "title": "พัฒนา CRM",
          "desc": "พัฒนา CRM ที่ปรับตามขั้นตอนการขายอสังหาริมทรัพย์ เชื่อมกับการรับลีดจากเว็บไซต์โดยตรง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "พัฒนา CRM อสังหาริมทรัพย์",
        "เชื่อมฟอร์มรับลีด",
        "Cloud hosting & CDN",
        "ระบบจัดการเนื้อหาแกลเลอรีและผลงาน",
        "พื้นฐาน SEO บนหน้าเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เว็บไซต์ใหม่คู่กับ CRM ที่ติดตามลีดตั้งแต่เข้าชมครั้งแรกจนถึงเซ็นสัญญา",
        "ขั้นตอนการขายที่ทีมดูและจัดการได้ในที่เดียว",
        "แกลเลอรีที่สมกับระดับราคาและจุดยืนของโครงการ",
        "ระบบที่วางโครงสร้างให้ขยายได้เมื่อมียูนิตหรือโครงการใหม่เปิดตัว"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "งานเว็บไซต์คู่กับ CRM แบบนี้ ปกติใช้เวลาสองถึงสามเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เว็บไซต์การตลาด Next.js เชื่อมกับ CRM อสังหาริมทรัพย์เฉพาะทางโดยตรง ติดตั้งบน Cloud hosting ที่มี CDN"
        },
        {
          "question": "ใช้กับผู้พัฒนาโครงการหรือบริษัทรับสร้างบ้านอื่นได้ไหม",
          "answer": "ได้ เว็บไซต์คู่กับ CRM แบบนี้ ใช้ได้กับผู้พัฒนาอสังหาริมทรัพย์และบริษัทรับสร้างบ้านอื่นที่ต้องการติดตามลีดตั้งแต่สอบถามจนถึงเซ็นสัญญา"
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
      "metaTitle": "เว็บไซต์ RFS — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์เว็บไซต์ RFS โดย Haliviq ครอบคลุมการออกแบบ UX/UI พัฒนาเว็บไซต์ พัฒนา AI CRM",
      "h1": "RFS — เว็บไซต์และ AI CRM สำหรับโซลูชัน B2B",
      "client": "RFS",
      "badge": "Telecommunications",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "พัฒนา AI CRM",
        "จัดระเบียบเนื้อหาโซลูชัน"
      ],
      "intro": "RFS ขายโครงสร้างพื้นฐานโทรคมนาคมและโซลูชันสมาร์ทซิตี้ให้ลูกค้าองค์กรและภาครัฐ การขายแบบนี้ต้องใช้เนื้อหาเชิงเทคนิคที่ชัดเจน และ CRM ที่สร้างมาสำหรับดีลที่ใช้เวลานานและต้องให้คำปรึกษา Haliviq สร้างเว็บไซต์ที่นำเสนอโซลูชันของบริษัทอย่างชัดเจน และ AI CRM ที่จัดการลูกค้าองค์กรที่เข้ามา",
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
        "นำเสนอโซลูชันเชิงเทคนิคทั้งหมดให้ชัดเจน สำหรับลูกค้าองค์กรและภาครัฐ",
        "เปลี่ยนจากการติดตามลูกค้าด้วยมือ เป็น CRM ที่สร้างสำหรับการขาย B2B ที่ใช้เวลานานและต้องให้คำปรึกษา",
        "ให้ทีมขายมีเครื่องมือที่ใช้ AI ช่วยจัดการและเรียงลำดับความสำคัญของลีดองค์กร",
        "สร้างความน่าเชื่อถือกับผู้ซื้อที่กำลังเลือกผู้ให้บริการโครงสร้างพื้นฐานและสมาร์ทซิตี้"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์ B2B ที่แสดงผลได้ดีทุกขนาดหน้าจอ นำเสนอโซลูชันของบริษัท",
        "AI CRM สำหรับจัดการลีดและลูกค้าองค์กร",
        "เนื้อหาโซลูชันที่จัดตามกรณีใช้งานและประเภทผู้ซื้อ",
        "ฟอร์มรับลีดและสอบถามที่เชื่อมเข้า CRM",
        "เนื้อหาเชิงเทคนิคที่จัดโครงสร้างไว้ให้ฝ่ายจัดซื้อขององค์กรใช้ค้นคว้า"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาธุรกิจและโซลูชัน",
          "desc": "รวบรวมโซลูชันทั้งหมด และวิธีที่ผู้ซื้อองค์กรและภาครัฐประเมินผู้ให้บริการ"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบเว็บไซต์ให้อธิบายโซลูชันเชิงเทคนิคได้ชัด ทั้งกับคณะกรรมการจัดซื้อที่ไม่ใช่สายเทคนิคและกับวิศวกร"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ B2B ที่ดูเป็นมืออาชีพ จัดโครงสร้างรอบโซลูชันของบริษัท"
        },
        {
          "title": "พัฒนา AI CRM",
          "desc": "พัฒนา CRM ที่ปรับให้เหมาะกับการขายองค์กรและการเรียงลำดับความสำคัญของลีด"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "แพลตฟอร์ม CRM ที่มี AI ช่วย",
        "เชื่อมฟอร์มรับลีด",
        "Cloud hosting & CDN",
        "ระบบจัดการเนื้อหาโซลูชัน",
        "SEO บนหน้าเว็บสำหรับคำค้นหาขององค์กร"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เว็บไซต์ใหม่คู่กับ AI CRM ที่จัดการลูกค้าองค์กร",
        "นำเสนอโซลูชันได้ชัด ทั้งกับผู้ซื้อสายเทคนิคและไม่ใช่สายเทคนิค",
        "ใช้ AI เรียงลำดับความสำคัญของลีด แทนการติดตามด้วยมือ",
        "นำเสนอแบบ B2B ที่น่าเชื่อถือ เหมาะกับการจัดซื้อโครงสร้างพื้นฐานและสมาร์ทซิตี้"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "งานรวมเว็บไซต์และ AI CRM แบบนี้ ปกติใช้เวลาสองถึงสามเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เว็บไซต์ Next.js เชื่อมกับแพลตฟอร์ม CRM ที่มี AI ช่วย ติดตั้งบน Cloud hosting ที่มี CDN"
        },
        {
          "question": "ใช้กับบริษัทโครงสร้างพื้นฐาน B2B อื่นได้ไหม",
          "answer": "ได้ เว็บไซต์โซลูชันคู่กับ AI CRM แบบนี้ ใช้ได้กับผู้ให้บริการโครงสร้างพื้นฐานองค์กรหรือโซลูชันสมาร์ทซิตี้รายอื่น"
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
      "metaTitle": "แอป กรมสรรพสามิต — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์แอปมือถือ กรมสรรพสามิต โดย Haliviq ครอบคลุมการออกแบบ UX/UI พัฒนาแอปมือถือ เชื่อมข้อมูลระหว่างหน่วยงาน",
      "h1": "กรมสรรพสามิต — พัฒนาแอปมือถือเพื่อบริการประชาชน",
      "client": "กรมสรรพสามิต",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาแอปมือถือ",
        "เชื่อมข้อมูลระหว่างหน่วยงาน",
        "ระบบตรวจสอบและยืนยันภาษี"
      ],
      "intro": "กรมสรรพสามิต ต้องการแอปมือถือที่ให้บริการของหน่วยงานกับประชาชนผ่านมือถือเป็นหลัก โดยต้องเชื่อมกับข้อมูลและระบบของภาครัฐที่มีอยู่แล้ว ไม่ใช่แอปสำหรับผู้บริโภคที่เริ่มจากศูนย์ Haliviq ดูแลทั้งการออกแบบ UX/UI และการพัฒนา รวมถึงงานเชื่อมต่อข้อมูล เพื่อให้แอปภาครัฐใช้งานได้จริงตั้งแต่วันเปิดตัว",
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
        "ให้บริการหรือเนื้อหาของหน่วยงานกับประชาชนผ่านมือถือเป็นหลัก",
        "เชื่อมกับแหล่งข้อมูลภาครัฐที่มีอยู่ได้อย่างราบรื่น ไม่ต้องสร้างข้อมูลซ้ำ",
        "ออกแบบให้ใช้ได้กับผู้ใช้หลายกลุ่ม รวมถึงประชาชนที่ไม่คุ้นกับเทคโนโลยี",
        "สร้างแพลตฟอร์มที่หน่วยงานเพิ่มฟีเจอร์ใหม่ได้ในอนาคต"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "แอปมือถือที่ใช้งานลื่นเหมือนแอปเนทีฟบน iOS และ Android",
        "งานออกแบบ UX/UI ที่เหมาะกับผู้ใช้ทั่วไปที่ไม่ใช่สายเทคนิค",
        "เชื่อมกับฐานข้อมูลและระบบภาครัฐที่มีอยู่",
        "โครงสร้างเนื้อหาที่หน่วยงานอัปเดตเองได้",
        "หน้าจอที่ออกแบบให้ทุกคนเข้าถึงได้ (Accessibility)"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาผู้เกี่ยวข้องและข้อมูล",
          "desc": "สำรวจระบบและแหล่งข้อมูลเดิมที่แอปต้องเชื่อมต่อ"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบสำหรับผู้ใช้ทั่วไป เน้นให้ชัดเจนมากกว่าใส่ข้อมูลแน่น"
        },
        {
          "title": "พัฒนาแอปมือถือ",
          "desc": "พัฒนาแอปและเชื่อมกับข้อมูลและระบบเดิมของหน่วยงาน"
        },
        {
          "title": "ส่งมอบและวางแผนต่อยอด",
          "desc": "ส่งมอบแอปพร้อมโครงสร้างที่หน่วยงานเพิ่มฟีเจอร์ใหม่ได้ในอนาคต"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "เฟรมเวิร์กแอปมือถือที่ใช้ได้ทั้งสองแพลตฟอร์ม",
        "เชื่อมข้อมูลและ API ภาครัฐ",
        "Cloud hosting และโครงสร้างระบบหลังบ้าน",
        "ชุดส่วนประกอบหน้าจอ (UI library) ที่เข้าถึงได้",
        "ระบบจัดการเนื้อหาให้หน่วยงานอัปเดตเอง",
        "ระบบยืนยันตัวตนที่ปลอดภัย"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "แอปใหม่ที่ให้บริการของหน่วยงานผ่านมือถือเป็นหลัก",
        "เชื่อมข้อมูลโดยไม่ต้องสร้างข้อมูลซ้ำซ้อนระหว่างระบบ",
        "หน้าจอที่ออกแบบสำหรับผู้ใช้ทั่วไปที่ไม่ใช่สายเทคนิค",
        "แพลตฟอร์มที่วางโครงสร้างให้หน่วยงานเพิ่มความสามารถใหม่ได้ในอนาคต"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "แอปมือถือภาครัฐที่เชื่อมระบบแบบนี้ ปกติใช้เวลาประมาณสองถึงสามเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เฟรมเวิร์กแอปมือถือที่ใช้ได้ทั้งสองแพลตฟอร์ม เชื่อมกับฐานข้อมูลของหน่วยงาน ติดตั้งบนคลาวด์พร้อมระบบยืนยันตัวตนที่ปลอดภัย"
        },
        {
          "question": "ใช้กับหน่วยงานภาครัฐอื่นได้ไหม",
          "answer": "ได้ การเชื่อมข้อมูลและ UX ที่เข้าถึงง่ายแบบนี้ ใช้ได้กับหน่วยงานภาครัฐอื่นที่นำบริการขึ้นมือถือ"
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
      "metaTitle": "เว็บไซต์ ITAGC — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์เว็บไซต์ ITAGC โดย Haliviq ครอบคลุมการออกแบบ UX/UI พัฒนาเว็บไซต์ ระบบตรวจสอบและประเมินผล",
      "h1": "ITAGC — เว็บไซต์ภาครัฐและระบบค้นหาบริการ",
      "client": "ITAGC",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "ระบบตรวจสอบและประเมินผล",
        "กำกับเนื้อหาและความน่าเชื่อถือ"
      ],
      "intro": "ITAGC มีบริการหลากหลายสำหรับผู้ประกอบการและนักวิจัย แต่เว็บไซต์เดิมซ่อนบริการเหล่านั้นไว้หลังเมนูที่หาไม่เจอ Haliviq จึงเน้นให้ผู้ใช้หาบริการเจอ โดยจัดบริการที่ซับซ้อนของหน่วยงานเป็นหมวดหมู่ พร้อมระบบค้นหาที่ใช้ได้จริง ให้เว็บไซต์ช่วยผู้ใช้ได้จริง ไม่ใช่แค่โบรชัวร์ออนไลน์",
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
        "ให้ผู้เข้าชมครั้งแรกหาบริการที่ต้องการเจอภายในไม่ถึงนาที",
        "จัดบริการที่หลากหลายของหน่วยงานเป็นหมวดหมู่ชัดเจน นำทางง่าย",
        "แสดงขั้นตอนและระยะเวลาให้ชัด เพื่อลดสายโทรเข้ามาสอบถาม",
        "สร้างเว็บไซต์ภาครัฐที่ทันสมัยและน่าเชื่อถือ"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์ภาครัฐที่แสดงผลได้ดีทุกขนาดหน้าจอ",
        "เนื้อหาบริการและงานวิจัยที่จัดเป็นหมวดหมู่ชัดเจน",
        "ระบบค้นหาบริการของหน่วยงานที่ใช้ได้จริง",
        "หน้าข้อมูลขั้นตอนและระยะเวลาการให้บริการ",
        "โครงสร้างเอกสารดาวน์โหลดสำหรับเผยแพร่สู่สาธารณะ"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาหน่วยงาน",
          "desc": "รวบรวมโครงสร้างบริการทั้งหมดและกลุ่มผู้ใช้ของแต่ละบริการ"
        },
        {
          "title": "วางโครงสร้างข้อมูล",
          "desc": "จัดบริการและงานวิจัยให้ผู้เข้าชมที่ไม่ใช่ผู้เชี่ยวชาญใช้งานได้"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ที่โหลดเร็วและเข้าถึงง่าย รองรับทั้งผู้ใช้ฝั่งธุรกิจและงานวิจัย"
        },
        {
          "title": "จัดระเบียบเนื้อหา",
          "desc": "จัดโครงสร้างเนื้อหาบริการและงานวิจัยให้ครบและค้นหาได้"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "ระบบค้นหาและกรองบริการ",
        "Cloud hosting & CDN",
        "ระบบจัดการเนื้อหาให้หน่วยงานอัปเดตเอง",
        "โค้ด HTML ที่เข้าถึงได้ตามมาตรฐาน",
        "พื้นฐาน SEO บนหน้าเว็บ"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เว็บไซต์ใหม่ที่ผู้ใช้หาบริการเจอได้เอง",
        "ระบบค้นหาที่ใช้ได้จริง ลดการสอบถามทางโทรศัพท์",
        "เผยแพร่ขั้นตอนและระยะเวลาอย่างชัดเจนเป็นครั้งแรก",
        "เว็บไซต์ทันสมัยที่สมกับความน่าเชื่อถือของหน่วยงานภาครัฐ"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "เว็บไซต์ภาครัฐพร้อมระบบค้นหาบริการแบบนี้ ปกติใช้เวลาประมาณสามเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "หน้าเว็บ Next.js พร้อมระบบค้นหาและกรองโดยเฉพาะ ระบบจัดการเนื้อหาสำหรับหน่วยงาน และ Cloud hosting ที่มี CDN"
        },
        {
          "question": "ใช้กับหน่วยงานภาครัฐอื่นได้ไหม",
          "answer": "ได้ การจัดหมวดหมู่บริการและระบบค้นหาแบบนี้ ใช้ได้กับหน่วยงานหรือสถาบันภาครัฐอื่นที่มีบริการหลากหลาย"
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
      "metaTitle": "แอป กรมทรัพยากรน้ำ — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์แอปมือถือ กรมทรัพยากรน้ำ โดย Haliviq ครอบคลุมการพัฒนาแอปมือถือ พัฒนาโมดูล AI วิเคราะห์ข้อมูลทรัพยากรน้ำ",
      "h1": "กรมทรัพยากรน้ำ — แอปมือถือที่ใช้ AI สำหรับหน่วยงานภาครัฐ",
      "client": "กรมทรัพยากรน้ำ",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "พัฒนาแอปมือถือ",
        "พัฒนาโมดูล AI",
        "วิเคราะห์ข้อมูลทรัพยากรน้ำ",
        "ต่อยอดระบบเดิม"
      ],
      "intro": "กรมทรัพยากรน้ำ ต้องการเพิ่มความสามารถ AI ให้แอปมือถือที่เป็นงานหลักของหน่วยงาน โปรเจกต์นี้จึงเป็นทั้งงานเชื่อมระบบและงานนำโมเดลมาใช้จริง ไม่ต่างจากงานพัฒนาแอป Haliviq สร้างโมดูล AI และเชื่อมเข้ากับแอปมือถือ (ทั้งแอปเดิมและแอปที่สร้างใหม่) โดยต่อกับข้อมูลจริงที่หน่วยงานใช้ในการทำงาน",
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
        "เพิ่มความสามารถ AI เฉพาะทาง (ตรวจสอบ วิเคราะห์ หรือจำแนกประเภท) ในขั้นตอนทำงานของภาครัฐ",
        "เชื่อมโมดูล AI กับข้อมูลจริงของหน่วยงาน ไม่ใช่ชุดข้อมูลทดสอบที่ไม่เปลี่ยนแปลง",
        "ทำให้ระบบเชื่อถือได้ ให้เจ้าหน้าที่ภาคสนามใช้งานได้ทุกวัน",
        "สร้างโมดูลที่ต่อยอดหรือฝึกใหม่ได้เมื่อความต้องการเปลี่ยน"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "โมดูล AI ที่สร้างมาเพื่องานตรวจสอบหรือวิเคราะห์เฉพาะทาง",
        "เชื่อมโมดูล AI เข้ากับแอปมือถือ ให้ใช้ในขั้นตอนทำงานภาคสนามได้",
        "เชื่อมกับระบบข้อมูลเดิมของหน่วยงาน",
        "ทดสอบความน่าเชื่อถือและความแม่นยำกับข้อมูลการทำงานจริง",
        "เอกสารและการส่งมอบ เพื่อให้หน่วยงานดูแลระบบต่อได้"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "สำรวจงานปฏิบัติการและข้อมูล",
          "desc": "ศึกษาขั้นตอนทำงานเดิมและข้อมูลที่โมดูล AI ต้องเข้าถึง"
        },
        {
          "title": "พัฒนาโมดูล AI",
          "desc": "สร้างและปรับโมเดลให้เหมาะกับงานตรวจสอบหรือวิเคราะห์ที่ต้องการ"
        },
        {
          "title": "เชื่อมเข้ากับมือถือ",
          "desc": "เชื่อมโมดูล AI เข้ากับแอปที่เจ้าหน้าที่ภาคสนามใช้ทุกวัน"
        },
        {
          "title": "ตรวจสอบและส่งมอบ",
          "desc": "ทดสอบกับสถานการณ์ทำงานจริง และส่งมอบเอกสารสำหรับการดูแลระบบต่อ"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "พัฒนาโมดูล AI/ML",
        "ส่วนเชื่อมเข้ากับแอปมือถือ",
        "เชื่อมระบบเดิมและฐานข้อมูล",
        "โครงสร้างคลาวด์สำหรับประมวลผลโมเดล",
        "ระบบจัดการข้อมูลที่ปลอดภัย",
        "ออกแบบ UX สำหรับงานภาคสนาม"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "แอปใหม่ที่เพิ่มความสามารถ AI ให้ระบบที่เจ้าหน้าที่ภาคสนามใช้อยู่จริง",
        "โมดูล AI ที่ใช้กับข้อมูลจริงของหน่วยงาน ไม่ใช่แค่ทดสอบแยกต่างหาก",
        "ขั้นตอนทำงานที่เชื่อถือได้พอสำหรับใช้ภาคสนามทุกวัน",
        "โมดูลที่ขยายต่อได้ หน่วยงานฝึกใหม่หรือต่อยอดได้ในอนาคต"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "โปรเจกต์ภาครัฐที่ใช้ AI แบบนี้ ปกติใช้เวลาสองถึงสี่เดือน ขึ้นกับความซับซ้อนของการเชื่อมระบบ"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "โมดูล AI/ML ที่สร้างเฉพาะงาน เชื่อมเข้ากับแอปมือถือ และต่อกับระบบเดิมของหน่วยงานผ่านระบบจัดการข้อมูลที่ปลอดภัย"
        },
        {
          "question": "ใช้กับหน่วยงานอื่นที่มีระบบเดิมอยู่แล้วได้ไหม",
          "answer": "ได้ การเพิ่มโมดูล AI บนระบบเดิมแบบนี้ ใช้ได้กับหน่วยงานอื่นที่ต้องการปรับปรุงระบบที่มีอยู่ แทนการสร้างใหม่ทั้งหมด"
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
      "metaTitle": "แอป สำนักงานตรวจคนเข้าเมือง — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์แอปมือถือ สำนักงานตรวจคนเข้าเมือง โดย Haliviq ครอบคลุมการพัฒนาแอปมือถือ พัฒนาโมดูล AI ตรวจสอบเอกสารและใบหน้า...",
      "h1": "สำนักงานตรวจคนเข้าเมือง — แอปมือถือที่ใช้ AI สำหรับหน่วยงานภาครัฐ",
      "client": "สำนักงานตรวจคนเข้าเมือง",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "พัฒนาแอปมือถือ",
        "พัฒนาโมดูล AI ตรวจสอบเอกสารและใบหน้า",
        "ระบบยืนยันตัวตน",
        "เชื่อมฐานข้อมูลผู้เดินทาง"
      ],
      "intro": "สำนักงานตรวจคนเข้าเมือง ต้องการเพิ่มความสามารถ AI ให้แอปมือถือที่เป็นงานหลักของหน่วยงาน โปรเจกต์นี้จึงเป็นทั้งงานเชื่อมระบบและงานนำโมเดลมาใช้จริง ไม่ต่างจากงานพัฒนาแอป Haliviq สร้างโมดูล AI และเชื่อมเข้ากับแอปมือถือ (ทั้งแอปเดิมและแอปที่สร้างใหม่) โดยต่อกับข้อมูลจริงที่หน่วยงานใช้ในการทำงาน",
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
        "เพิ่มความสามารถ AI เฉพาะทาง (ตรวจสอบ วิเคราะห์ หรือจำแนกประเภท) ในขั้นตอนทำงานของภาครัฐ",
        "เชื่อมโมดูล AI กับข้อมูลจริงของหน่วยงาน ไม่ใช่ชุดข้อมูลทดสอบที่ไม่เปลี่ยนแปลง",
        "ทำให้ระบบเชื่อถือได้ ให้เจ้าหน้าที่ภาคสนามใช้งานได้ทุกวัน",
        "สร้างโมดูลที่ต่อยอดหรือฝึกใหม่ได้เมื่อความต้องการเปลี่ยน"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "โมดูล AI ที่สร้างมาเพื่องานตรวจสอบหรือวิเคราะห์เฉพาะทาง",
        "เชื่อมโมดูล AI เข้ากับแอปมือถือ ให้ใช้ในขั้นตอนทำงานภาคสนามได้",
        "เชื่อมกับระบบข้อมูลเดิมของหน่วยงาน",
        "ทดสอบความน่าเชื่อถือและความแม่นยำกับข้อมูลการทำงานจริง",
        "เอกสารและการส่งมอบ เพื่อให้หน่วยงานดูแลระบบต่อได้"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "สำรวจงานปฏิบัติการและข้อมูล",
          "desc": "ศึกษาขั้นตอนทำงานเดิมและข้อมูลที่โมดูล AI ต้องเข้าถึง"
        },
        {
          "title": "พัฒนาโมดูล AI",
          "desc": "สร้างและปรับโมเดลให้เหมาะกับงานตรวจสอบหรือวิเคราะห์ที่ต้องการ"
        },
        {
          "title": "เชื่อมเข้ากับมือถือ",
          "desc": "เชื่อมโมดูล AI เข้ากับแอปที่เจ้าหน้าที่ภาคสนามใช้ทุกวัน"
        },
        {
          "title": "ตรวจสอบและส่งมอบ",
          "desc": "ทดสอบกับสถานการณ์ทำงานจริง และส่งมอบเอกสารสำหรับการดูแลระบบต่อ"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "พัฒนาโมดูล AI/ML",
        "ส่วนเชื่อมเข้ากับแอปมือถือ",
        "เชื่อมระบบเดิมและฐานข้อมูล",
        "โครงสร้างคลาวด์สำหรับประมวลผลโมเดล",
        "ระบบจัดการข้อมูลที่ปลอดภัย",
        "ออกแบบ UX สำหรับงานภาคสนาม"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "แอปใหม่ที่เพิ่มความสามารถ AI ให้ระบบที่เจ้าหน้าที่ภาคสนามใช้อยู่จริง",
        "โมดูล AI ที่ใช้กับข้อมูลจริงของหน่วยงาน ไม่ใช่แค่ทดสอบแยกต่างหาก",
        "ขั้นตอนทำงานที่เชื่อถือได้พอสำหรับใช้ภาคสนามทุกวัน",
        "โมดูลที่ขยายต่อได้ หน่วยงานฝึกใหม่หรือต่อยอดได้ในอนาคต"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "โปรเจกต์ภาครัฐที่ใช้ AI แบบนี้ ปกติใช้เวลาสองถึงสี่เดือน ขึ้นกับความซับซ้อนของการเชื่อมระบบ"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "โมดูล AI/ML ที่สร้างเฉพาะงาน เชื่อมเข้ากับแอปมือถือ และต่อกับระบบเดิมของหน่วยงานผ่านระบบจัดการข้อมูลที่ปลอดภัย"
        },
        {
          "question": "ใช้กับหน่วยงานอื่นที่มีระบบเดิมอยู่แล้วได้ไหม",
          "answer": "ได้ การเพิ่มโมดูล AI บนระบบเดิมแบบนี้ ใช้ได้กับหน่วยงานอื่นที่ต้องการปรับปรุงระบบที่มีอยู่ แทนการสร้างใหม่ทั้งหมด"
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
      "metaTitle": "แอป กระทรวงวัฒนธรรม — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์แอปมือถือ กระทรวงวัฒนธรรม โดย Haliviq ครอบคลุมการพัฒนาแอปมือถือ ออกแบบ UX/UI รวบรวมและจัดระเบียบเนื้อหาวัฒนธรรม",
      "h1": "กระทรวงวัฒนธรรม — พัฒนาแอปมือถือเพื่อบริการประชาชน",
      "client": "กระทรวงวัฒนธรรม",
      "badge": "Government & Public Sector",
      "servicesProvided": [
        "พัฒนาแอปมือถือ",
        "ออกแบบ UX/UI",
        "รวบรวมและจัดระเบียบเนื้อหาวัฒนธรรม",
        "เชื่อมฐานข้อมูลจากเว็บไซต์เดิม"
      ],
      "intro": "กระทรวงวัฒนธรรม ต้องการแอปมือถือที่ให้บริการของหน่วยงานกับประชาชนผ่านมือถือเป็นหลัก โดยต้องเชื่อมกับข้อมูลและระบบของภาครัฐที่มีอยู่แล้ว ไม่ใช่แอปสำหรับผู้บริโภคที่เริ่มจากศูนย์ Haliviq ดูแลทั้งการออกแบบ UX/UI และการพัฒนา รวมถึงงานเชื่อมต่อข้อมูล เพื่อให้แอปภาครัฐใช้งานได้จริงตั้งแต่วันเปิดตัว",
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
        "ให้บริการหรือเนื้อหาของหน่วยงานกับประชาชนผ่านมือถือเป็นหลัก",
        "เชื่อมกับแหล่งข้อมูลภาครัฐที่มีอยู่ได้อย่างราบรื่น ไม่ต้องสร้างข้อมูลซ้ำ",
        "ออกแบบให้ใช้ได้กับผู้ใช้หลายกลุ่ม รวมถึงประชาชนที่ไม่คุ้นกับเทคโนโลยี",
        "สร้างแพลตฟอร์มที่หน่วยงานเพิ่มฟีเจอร์ใหม่ได้ในอนาคต"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "แอปมือถือที่ใช้งานลื่นเหมือนแอปเนทีฟบน iOS และ Android",
        "งานออกแบบ UX/UI ที่เหมาะกับผู้ใช้ทั่วไปที่ไม่ใช่สายเทคนิค",
        "เชื่อมกับฐานข้อมูลและระบบภาครัฐที่มีอยู่",
        "โครงสร้างเนื้อหาที่หน่วยงานอัปเดตเองได้",
        "หน้าจอที่ออกแบบให้ทุกคนเข้าถึงได้ (Accessibility)"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาผู้เกี่ยวข้องและข้อมูล",
          "desc": "สำรวจระบบและแหล่งข้อมูลเดิมที่แอปต้องเชื่อมต่อ"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบสำหรับผู้ใช้ทั่วไป เน้นให้ชัดเจนมากกว่าใส่ข้อมูลแน่น"
        },
        {
          "title": "พัฒนาแอปมือถือ",
          "desc": "พัฒนาแอปและเชื่อมกับข้อมูลและระบบเดิมของหน่วยงาน"
        },
        {
          "title": "ส่งมอบและวางแผนต่อยอด",
          "desc": "ส่งมอบแอปพร้อมโครงสร้างที่หน่วยงานเพิ่มฟีเจอร์ใหม่ได้ในอนาคต"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "เฟรมเวิร์กแอปมือถือที่ใช้ได้ทั้งสองแพลตฟอร์ม",
        "เชื่อมข้อมูลและ API ภาครัฐ",
        "Cloud hosting และโครงสร้างระบบหลังบ้าน",
        "ชุดส่วนประกอบหน้าจอ (UI library) ที่เข้าถึงได้",
        "ระบบจัดการเนื้อหาให้หน่วยงานอัปเดตเอง",
        "ระบบยืนยันตัวตนที่ปลอดภัย"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "แอปใหม่ที่ให้บริการของหน่วยงานผ่านมือถือเป็นหลัก",
        "เชื่อมข้อมูลโดยไม่ต้องสร้างข้อมูลซ้ำซ้อนระหว่างระบบ",
        "หน้าจอที่ออกแบบสำหรับผู้ใช้ทั่วไปที่ไม่ใช่สายเทคนิค",
        "แพลตฟอร์มที่วางโครงสร้างให้หน่วยงานเพิ่มความสามารถใหม่ได้ในอนาคต"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "แอปมือถือภาครัฐที่เชื่อมระบบแบบนี้ ปกติใช้เวลาประมาณสองถึงสามเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "เฟรมเวิร์กแอปมือถือที่ใช้ได้ทั้งสองแพลตฟอร์ม เชื่อมกับฐานข้อมูลของหน่วยงาน ติดตั้งบนคลาวด์พร้อมระบบยืนยันตัวตนที่ปลอดภัย"
        },
        {
          "question": "ใช้กับหน่วยงานภาครัฐอื่นได้ไหม",
          "answer": "ได้ การเชื่อมข้อมูลและ UX ที่เข้าถึงง่ายแบบนี้ ใช้ได้กับหน่วยงานภาครัฐอื่นที่นำบริการขึ้นมือถือ"
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
      "metaTitle": "เว็บไซต์ BBK Menu — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และผลลัพธ์ของโปรเจกต์เว็บไซต์ BBK Menu โดย Haliviq ครอบคลุมการออกแบบ UX/UI พัฒนาเว็บไซต์ ระบบแนะนำร้านอาหาร",
      "h1": "BBK Menu — แพลตฟอร์มค้นหาร้านอาหาร ออกแบบ UX และพัฒนาเว็บ",
      "client": "BBK Menu",
      "badge": "F&B",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "ระบบแนะนำร้านอาหาร",
        "กำกับภาพถ่ายและคอนเทนต์"
      ],
      "intro": "BBK Menu ตั้งใจให้คนหาร้านอาหารและเมนูเด็ดในกรุงเทพฯ ได้ง่ายขึ้น โจทย์หลักจึงอยู่ที่โครงสร้างเนื้อหาและ UX การค้นหาและเรียกดู ไม่ใช่แค่งานออกแบบภาพ Haliviq นำทีมออกแบบ UX/UI ก่อนพัฒนาเว็บไซต์จริง โดยเน้นวิธีจัดร้านอาหารและเมนูหลายร้อยรายการ ให้ยังเรียกดูได้เร็วและดูแลง่าย",
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
        "ออกแบบโครงสร้างข้อมูลให้รองรับร้านอาหารและเมนูหลายร้อยรายการ โดยไม่ทำให้เรียกดูยาก",
        "พาผู้อ่านจากความอยากกินกว้างๆ ไปสู่คำแนะนำเฉพาะเจาะจงได้เร็ว",
        "ให้ทีมบรรณาธิการเผยแพร่รายการใหม่ได้เอง ไม่ต้องพึ่งนักพัฒนา",
        "วางพื้นฐานด้านเทคนิคให้เหมาะกับคำค้นหาแบบ long-tail เกี่ยวกับร้านอาหารและเมนู"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "ระบบ UX/UI สำหรับแพลตฟอร์มค้นหาร้านอาหาร",
        "เว็บไซต์ที่แสดงผลได้ดีทุกขนาดหน้าจอ พร้อมรายการร้านอาหารและเมนูที่กรองได้",
        "ระบบแนะนำและค้นหาร้านอาหาร",
        "โครงสร้างเนื้อหาสำหรับเผยแพร่ต่อเนื่อง",
        "แนวภาพถ่ายและคอนเทนต์สำหรับหน้ารายการ"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ขั้นตอนออกแบบ UX/UI",
          "desc": "ออกแบบการเรียกดู การกรอง และการแสดงรายการก่อนเขียนโค้ด พร้อมทดสอบกับข้อมูลร้านอาหารและเมนูจริง"
        },
        {
          "title": "วางโครงสร้างข้อมูล",
          "desc": "จัดหมวดหมู่ ย่าน และประเภทอาหาร ให้ขยายต่อได้โดยไม่สับสน"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ที่โหลดเร็ว บนระบบออกแบบที่อนุมัติแล้ว"
        },
        {
          "title": "ส่งมอบงานด้านบรรณาธิการ",
          "desc": "ส่งมอบขั้นตอนเผยแพร่ที่ทีมบรรณาธิการทำเองได้"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "ระบบ UX/UI",
        "Next.js front-end",
        "Headless CMS สำหรับรายการร้าน",
        "ระบบค้นหาและกรอง",
        "Cloud hosting & CDN",
        "พื้นฐาน SEO สำหรับคำค้นหา long-tail"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บไซต์ใหม่พร้อมระบบเนื้อหาที่ขยายได้เกินรายการเริ่มต้น",
        "การเรียกดูและกรองที่ออกแบบตามวิธีหาร้านอาหารจริง",
        "ทีมบรรณาธิการทำงานได้โดยไม่ต้องรอนักพัฒนา",
        "โครงสร้าง SEO ที่ตั้งเป้าคำค้นหาแบบ \"ร้านที่ดีที่สุดในกรุงเทพฯ\""
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "โปรเจกต์นี้ใช้เวลานานแค่ไหน",
          "answer": "งานออกแบบ UX/UI และพัฒนาเว็บไซต์ของแพลตฟอร์มค้นหาแบบนี้ ปกติใช้เวลารวมกันหลายเดือน"
        },
        {
          "question": "ใช้เทคโนโลยีอะไรบ้าง",
          "answer": "หน้าเว็บ Next.js ใช้ Headless CMS จัดการรายการร้านอาหารและเมนู สร้างบนระบบค้นหาและกรอง ติดตั้งบน Cloud hosting ที่มี CDN"
        },
        {
          "question": "ใช้กับแพลตฟอร์มค้นหาหรือไดเรกทอรีอื่นได้ไหม",
          "answer": "ได้ โครงสร้างรายการ การกรอง และการเผยแพร่แบบเดียวกันนี้ ใช้ได้กับแพลตฟอร์มค้นหาท้องถิ่นอื่นนอกจากร้านอาหาร"
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
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และแนวทางของโปรเจกต์ระบบ CRM และ AI สำหรับ Sena Development ผู้พัฒนาอสังหาริมทรัพย์ โดย Haliviq",
      "h1": "Sena Development — ระบบ CRM สำหรับผู้พัฒนาอสังหาริมทรัพย์ และงานพัฒนา AI",
      "client": "Sena Development",
      "badge": "อสังหาริมทรัพย์",
      "servicesProvided": [
        "พัฒนาระบบ CRM",
        "พัฒนา AI"
      ],
      "intro": "ผู้พัฒนาอสังหาริมทรัพย์ต้องดูแลลูกค้าที่สนใจหลายโครงการพร้อมกัน จากหลายช่องทาง และใช้เวลาตัดสินใจนาน ข้อมูลที่กระจายอยู่ตามสเปรดชีตหรือแชทจึงเป็นคอขวดของงานขาย Haliviq พัฒนาระบบ CRM ให้ Sena Development (sena.co.th) รวมข้อมูลลูกค้า โครงการ และการติดตามผลไว้ในที่เดียว และต่อยอดด้วยงานพัฒนา AI ให้ทีมทำงานซ้ำๆ ได้เร็วขึ้น บทความนี้สรุปงานที่ส่งมอบ แนวทางการพัฒนา และเทคโนโลยีที่ใช้ สำหรับผู้ที่กำลังมองหา CRM สำหรับผู้พัฒนาอสังหาริมทรัพย์ในประเทศไทย",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "อสังหาริมทรัพย์"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "ระบบ CRM บนเว็บ และโมดูล AI"
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
        "รวมข้อมูลลูกค้าและประวัติการติดต่อจากหลายช่องทางไว้ในระบบเดียว",
        "ให้ทีมขายเห็นสถานะของแต่ละดีลและงานที่ต้องติดตามอย่างชัดเจน",
        "แยกข้อมูลตามโครงการและบทบาทผู้ใช้ ให้แต่ละทีมเห็นเฉพาะข้อมูลที่เกี่ยวข้อง",
        "ใช้ AI ลดงานซ้ำๆ และช่วยให้ทีมตัดสินใจได้เร็วขึ้นจากข้อมูลที่มี"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "ระบบ CRM ที่สร้างเฉพาะสำหรับงานขายอสังหาริมทรัพย์",
        "ฐานข้อมูลลูกค้า พร้อมประวัติการติดต่อและสถานะการขาย",
        "จัดการโครงการ ยูนิต และข้อมูลที่ใช้ในงานขาย",
        "กำหนดสิทธิ์การใช้งานตามบทบาทและทีม",
        "โมดูล AI ช่วยงานวิเคราะห์และงานซ้ำๆ ของทีม",
        "เอกสารและการส่งมอบ ให้ทีมดูแลระบบต่อได้"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ทำความเข้าใจขั้นตอนการขาย",
          "desc": "สัมภาษณ์ทีมเพื่อเข้าใจเส้นทางลูกค้าตั้งแต่เริ่มสนใจจนถึงตัดสินใจ และจุดที่ข้อมูลหายไปในตอนนี้"
        },
        {
          "title": "ออกแบบโครงสร้างข้อมูลและขั้นตอนงาน",
          "desc": "กำหนดโครงสร้างข้อมูลลูกค้า โครงการ และการติดตามผล ก่อนเริ่มพัฒนา เพื่อให้ระบบตรงกับวิธีทำงานจริง"
        },
        {
          "title": "พัฒนาระบบ CRM",
          "desc": "พัฒนาเป็นช่วงๆ ให้ทีมลองใช้และให้ความเห็นระหว่างทาง แทนที่จะส่งมอบครั้งเดียวตอนท้าย"
        },
        {
          "title": "พัฒนาและเชื่อม AI",
          "desc": "เพิ่มความสามารถ AI บนข้อมูลที่ระบบเก็บไว้ โดยกำหนดให้ช่วยทีมงาน ไม่ใช่ตัดสินใจแทนคน"
        },
        {
          "title": "ส่งมอบและต่อยอด",
          "desc": "ส่งมอบเอกสาร อบรมผู้ใช้ และวางแนวทางปรับปรุงระบบต่อเนื่อง"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "ระบบ CRM บนเว็บที่สร้างเฉพาะ",
        "Next.js / TypeScript front-end",
        "API และฐานข้อมูลเชิงสัมพันธ์",
        "ระบบสิทธิ์ตามบทบาท (RBAC)",
        "โมดูล AI / LLM สำหรับงานวิเคราะห์และงานซ้ำๆ",
        "Cloud hosting และสำรองข้อมูล"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "ข้อมูลลูกค้าและการติดตามผลอยู่ในระบบเดียว ไม่กระจายหลายที่",
        "ทีมขายเห็นสถานะดีลและงานค้างได้ชัดขึ้น",
        "ทีมแต่ละโครงการเข้าถึงข้อมูลตามบทบาทของตน",
        "มีโมดูล AI ช่วยลดงานซ้ำๆ ของทีม"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "ระบบ CRM สำหรับผู้พัฒนาอสังหาริมทรัพย์ต่างจาก CRM ทั่วไปอย่างไร",
          "answer": "งานขายอสังหาริมทรัพย์มีหลายโครงการ หลายยูนิต และใช้เวลาตัดสินใจนาน ระบบจึงออกแบบให้ติดตามลูกค้าตามโครงการและขั้นตอนการขาย ไม่ใช่แค่เก็บรายชื่อ"
        },
        {
          "question": "AI ในระบบนี้ช่วยอะไรได้บ้าง",
          "answer": "AI ช่วยวิเคราะห์ข้อมูลและทำงานซ้ำๆ ของทีม โดยทำงานบนข้อมูลที่ระบบเก็บไว้ และให้คนเป็นผู้ตัดสินใจขั้นสุดท้าย"
        },
        {
          "question": "ใช้กับผู้พัฒนาอสังหาริมทรัพย์รายอื่นได้ไหม",
          "answer": "ได้ ระบบและแนวทางพัฒนาปรับให้เข้ากับขั้นตอนการขายของแต่ละองค์กรได้ หลังจากสำรวจความต้องการร่วมกัน"
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
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และแนวทางของโปรเจกต์ออกแบบ UX/UI และเว็บไซต์อีคอมเมิร์ซบน Shopify สำหรับ PAÑPURI แบรนด์เวลเนสและสกินแคร์ไทย โดย Haliviq",
      "h1": "PAÑPURI — ออกแบบ UX/UI และเว็บไซต์อีคอมเมิร์ซ Shopify สำหรับแบรนด์เวลเนส",
      "client": "PAÑPURI",
      "badge": "เวลเนส",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์อีคอมเมิร์ซบน Shopify"
      ],
      "intro": "แบรนด์เวลเนสและสกินแคร์ระดับลักชัวรีขายความรู้สึกก่อนขายผลิตภัณฑ์ เว็บไซต์จึงต้องสื่อคุณภาพของแบรนด์ได้ทันที และพาลูกค้าไปสั่งซื้อได้อย่างราบรื่น Haliviq ดูแลทั้งงานออกแบบ UX/UI และพัฒนาเว็บไซต์อีคอมเมิร์ซบน Shopify ให้ PAÑPURI โดยออกแบบประสบการณ์ให้ชัดก่อน แล้วจึงพัฒนาตามแบบที่อนุมัติ บทความนี้สรุปงานที่ส่งมอบและแนวทางด้านเทคนิค สำหรับแบรนด์ที่กำลังมองหาผู้พัฒนาเว็บไซต์ Shopify e-commerce ในประเทศไทย",
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
        "สื่อภาพลักษณ์ลักชัวรีของแบรนด์ผ่านโครงสร้างและการจัดหน้าเว็บไซต์",
        "ออกแบบเส้นทางตั้งแต่เลือกดูสินค้าไปจนถึงชำระเงิน ให้ราบรื่นทั้งบนมือถือและเดสก์ท็อป",
        "จัดโครงสร้างสินค้าและคอลเลกชันให้ลูกค้าค้นหาได้ง่าย",
        "ให้ทีมแบรนด์จัดการสินค้า เนื้อหา และโปรโมชันเองได้บน Shopify"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "ระบบ UX/UI สำหรับเว็บไซต์อีคอมเมิร์ซของแบรนด์",
        "เว็บไซต์อีคอมเมิร์ซบน Shopify ที่แสดงผลได้ดีทุกขนาดหน้าจอ",
        "หน้าสินค้า คอลเลกชัน และขั้นตอนสั่งซื้อที่ออกแบบเฉพาะแบรนด์",
        "โครงสร้างสินค้าและการจัดหมวดหมู่",
        "ตั้งค่าหลังบ้านให้ทีมแบรนด์ดูแลเองได้"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ออกแบบ UX/UI",
          "desc": "เริ่มจากกำหนดภาพรวมประสบการณ์ ผังหน้า และเส้นทางลูกค้า แล้วออกแบบหน้าจอหลักให้สะท้อนตัวตนแบรนด์ก่อนเริ่มพัฒนา"
        },
        {
          "title": "วางโครงสร้างสินค้า",
          "desc": "จัดหมวดหมู่ คอลเลกชัน และคุณสมบัติสินค้า ให้ค้นหาและเปรียบเทียบได้ง่าย"
        },
        {
          "title": "พัฒนาบน Shopify",
          "desc": "สร้างธีมและส่วนประกอบตามแบบที่อนุมัติ ปรับให้เข้ากับแบรนด์ และดูแลเรื่องความเร็วในการโหลด"
        },
        {
          "title": "ทดสอบและส่งมอบ",
          "desc": "ทดสอบการใช้งานบนอุปกรณ์ต่างๆ และขั้นตอนสั่งซื้อ ก่อนส่งมอบและอบรมทีมแบรนด์"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Shopify",
        "ธีมและส่วนประกอบที่พัฒนาเอง (Liquid)",
        "ระบบ UX/UI",
        "ออกแบบสำหรับมือถือเป็นหลัก",
        "ปรับความเร็วและรูปภาพ",
        "พื้นฐาน SEO สำหรับร้านค้าออนไลน์"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บไซต์อีคอมเมิร์ซที่สื่อภาพลักษณ์ลักชัวรีของแบรนด์",
        "ขั้นตอนซื้อสินค้าที่ออกแบบให้ใช้งานลื่นทั้งบนมือถือและเดสก์ท็อป",
        "ทีมแบรนด์จัดการสินค้าและเนื้อหาเองได้ผ่าน Shopify",
        "โครงสร้างที่พร้อมรองรับสินค้าและคอลเลกชันใหม่ในอนาคต"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "ทำไมต้องออกแบบ UX/UI ก่อนพัฒนา Shopify",
          "answer": "การออกแบบก่อนช่วยให้ทุกหน้าสะท้อนแบรนด์ และเส้นทางซื้อชัดเจนตั้งแต่ต้น ลดการแก้งานระหว่างพัฒนา"
        },
        {
          "question": "Shopify เหมาะกับแบรนด์สกินแคร์และเวลเนสหรือไม่",
          "answer": "เหมาะ Shopify รองรับสินค้าหลากหลาย การชำระเงิน และการจัดการสต็อก และปรับดีไซน์ให้เป็นเอกลักษณ์ของแบรนด์ได้"
        },
        {
          "question": "ทีมแบรนด์ดูแลเว็บไซต์เองได้ไหม",
          "answer": "ได้ เราตั้งค่าหลังบ้านและอบรมทีม ให้เพิ่มสินค้า แก้เนื้อหา และจัดโปรโมชันได้เอง"
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
      "metaTitle": "เว็บไซต์จองห้องพัก Shanghai Mansion Bangkok — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และแนวทางของโปรเจกต์เว็บไซต์โรงแรมพร้อมระบบจองห้องพักออนไลน์ สำหรับ Shanghai Mansion Bangkok โดย Haliviq",
      "h1": "Shanghai Mansion Bangkok — เว็บไซต์โรงแรมพร้อมระบบจองห้องพักออนไลน์",
      "client": "Shanghai Mansion Bangkok",
      "badge": "ท่องเที่ยวและโรงแรม",
      "servicesProvided": [
        "ออกแบบและพัฒนาเว็บไซต์โรงแรม",
        "ระบบจองห้องพักออนไลน์"
      ],
      "intro": "โรงแรมบูติกต้องแข่งกับแพลตฟอร์มจองห้องรายใหญ่ ขณะที่การจองตรงผ่านเว็บไซต์ของโรงแรมเองทำให้ดูแลแขกได้ใกล้ชิดกว่า Haliviq พัฒนาเว็บไซต์ให้ Shanghai Mansion Bangkok พร้อมระบบจองห้องพักออนไลน์ ผู้เข้าชมดูห้องพัก เลือกวันพัก และส่งคำขอจองได้ในเว็บไซต์เดียว โดยยังคงบรรยากาศและเอกลักษณ์ของโรงแรมไว้ บทความนี้สรุปงานที่ส่งมอบและแนวทางด้านเทคนิค สำหรับผู้ที่กำลังหาเว็บไซต์จองห้องพักโรงแรมในกรุงเทพฯ",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "โรงแรมและการท่องเที่ยว"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์โรงแรมและระบบจองห้อง"
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
        "แสดงบรรยากาศ ห้องพัก และเอกลักษณ์ของโรงแรมให้ชัดตั้งแต่หน้าแรก",
        "ให้แขกดูห้องพักและจองได้ง่ายบนมือถือ",
        "กระตุ้นให้จองตรงผ่านเว็บไซต์ของโรงแรม",
        "ให้ทีมโรงแรมจัดการข้อมูลห้องพักและการจองได้สะดวก"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์โรงแรมที่แสดงผลได้ดีทุกขนาดหน้าจอ",
        "หน้าห้องพักพร้อมรายละเอียดและแกลเลอรีภาพ",
        "ระบบจองห้องพักออนไลน์ เลือกวันพักและประเภทห้องได้",
        "ระบบจัดการข้อมูลห้องพักและการจองสำหรับทีมโรงแรม",
        "โครงสร้างเว็บไซต์ที่เหมาะกับ SEO ของธุรกิจโรงแรม"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ทำความเข้าใจแขกและการจอง",
          "desc": "ดูเส้นทางที่แขกใช้ตัดสินใจ ตั้งแต่ดูห้องจนถึงยืนยันการจอง และข้อมูลที่แขกต้องการก่อนตัดสินใจ"
        },
        {
          "title": "ออกแบบเว็บไซต์",
          "desc": "ออกแบบหน้าและการเล่าเรื่องให้สะท้อนบรรยากาศของโรงแรม โดยให้กดปุ่มจองได้ง่ายทุกหน้า"
        },
        {
          "title": "พัฒนาระบบจองห้อง",
          "desc": "พัฒนาขั้นตอนเลือกวันพัก ประเภทห้อง และกรอกข้อมูลแขก พร้อมแจ้งเตือนทีมโรงแรม"
        },
        {
          "title": "ทดสอบและส่งมอบ",
          "desc": "ทดสอบขั้นตอนจองบนอุปกรณ์ต่างๆ ก่อนส่งมอบและอบรมทีมโรงแรม"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front-end",
        "ระบบจองห้องพักออนไลน์",
        "ระบบจัดการข้อมูลห้องพัก",
        "แจ้งเตือนการจองทางอีเมล",
        "Cloud hosting & CDN",
        "พื้นฐาน SEO สำหรับโรงแรม"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บไซต์ที่สื่อเอกลักษณ์ของโรงแรม พร้อมช่องทางจองตรง",
        "แขกดูห้องและจองได้ในเว็บไซต์เดียว",
        "ทีมโรงแรมจัดการห้องพักและการจองได้สะดวกขึ้น",
        "โครงสร้างพร้อมรองรับคำค้นหาเกี่ยวกับโรงแรมในกรุงเทพฯ"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "ระบบจองห้องพักบนเว็บไซต์ทำงานอย่างไร",
          "answer": "แขกเลือกวันพักและประเภทห้อง กรอกข้อมูล แล้วส่งการจอง ระบบจะแจ้งทีมโรงแรมให้ดำเนินการต่อ"
        },
        {
          "question": "ทำไมโรงแรมควรมีเว็บไซต์จองตรง",
          "answer": "การจองตรงช่วยให้โรงแรมดูแลประสบการณ์และข้อมูลแขกได้เอง ไม่ต้องพึ่งแพลตฟอร์มภายนอกอย่างเดียว"
        },
        {
          "question": "ใช้กับโรงแรมหรือที่พักอื่นได้ไหม",
          "answer": "ได้ เว็บไซต์และระบบจองปรับให้เหมาะกับโรงแรมบูติก รีสอร์ต และที่พักขนาดเล็กได้"
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
      "metaTitle": "เว็บไซต์อีคอมเมิร์ซและ AI สำหรับ Jampha Shopping Mall — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และแนวทางของโปรเจกต์เว็บไซต์อีคอมเมิร์ซและระบบ AI ช่วยงาน สำหรับ Jampha Shopping Mall โดย Haliviq",
      "h1": "Jampha Shopping Mall — เว็บไซต์อีคอมเมิร์ซและระบบ AI ช่วยงานสำหรับค้าปลีก",
      "client": "Jampha Shopping Mall",
      "badge": "ค้าปลีกและ SME",
      "servicesProvided": [
        "พัฒนาเว็บไซต์อีคอมเมิร์ซ",
        "ระบบ AI ช่วยงานปฏิบัติการและงานลูกค้า"
      ],
      "intro": "ศูนย์การค้าที่รวมร้านค้าและสินค้าท้องถิ่นหลากหลาย มีโจทย์ต่างจากร้านเดี่ยว ทั้งการนำเสนอสินค้าจากหลายร้านและการตอบคำถามลูกค้าที่หลากหลาย Haliviq พัฒนาเว็บไซต์อีคอมเมิร์ซให้ Jampha Shopping Mall พร้อมระบบ AI ช่วยงานปฏิบัติการและงานลูกค้า ให้ผู้ซื้อหาสินค้าได้ง่าย และทีมงานทำงานซ้ำๆ น้อยลง บทความนี้สรุปงานที่ส่งมอบและแนวทางด้านเทคนิค สำหรับธุรกิจที่กำลังมองหา AI สำหรับธุรกิจค้าปลีกและเว็บไซต์อีคอมเมิร์ซในประเทศไทย",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "ค้าปลีกและชุมชน"
        },
        {
          "label": "แพลตฟอร์ม",
          "value": "เว็บไซต์อีคอมเมิร์ซและระบบ AI"
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
        "แสดงสินค้าและร้านค้าในศูนย์การค้าอย่างเป็นระเบียบ ค้นหาและเลือกซื้อได้ง่าย",
        "สร้างขั้นตอนสั่งซื้อที่ใช้ง่ายบนมือถือ",
        "ใช้ AI ช่วยตอบคำถามลูกค้าและลดงานซ้ำๆ ของทีมปฏิบัติการ",
        "ให้ทีมงานจัดการสินค้าและเนื้อหาเองได้ต่อเนื่อง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "เว็บไซต์อีคอมเมิร์ซที่แสดงผลได้ดีทุกขนาดหน้าจอ",
        "โครงสร้างสินค้าและหมวดหมู่สำหรับร้านค้าหลากหลาย",
        "ขั้นตอนสั่งซื้อและชำระเงิน",
        "ระบบ AI ช่วยตอบคำถามลูกค้าและสนับสนุนงานปฏิบัติการ",
        "ระบบหลังบ้านสำหรับจัดการสินค้าและเนื้อหา"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ทำความเข้าใจธุรกิจและลูกค้า",
          "desc": "ศึกษาโครงสร้างสินค้า ลักษณะลูกค้า และงานซ้ำๆ ที่ทีมต้องทำทุกวัน เพื่อกำหนดขอบเขตของเว็บไซต์และ AI"
        },
        {
          "title": "ออกแบบประสบการณ์ซื้อสินค้า",
          "desc": "ออกแบบการเรียกดู ค้นหา และสั่งซื้อ ให้เหมาะกับลูกค้าชุมชนและค้าปลีกแบบดั้งเดิม"
        },
        {
          "title": "พัฒนาเว็บไซต์อีคอมเมิร์ซ",
          "desc": "พัฒนาหน้าสินค้า ตะกร้า และขั้นตอนชำระเงิน พร้อมระบบจัดการสินค้า"
        },
        {
          "title": "พัฒนาระบบ AI",
          "desc": "เพิ่ม AI ที่ตอบคำถามลูกค้าและช่วยงานปฏิบัติการจากข้อมูลของศูนย์การค้า โดยกำหนดขอบเขตชัดเจน"
        },
        {
          "title": "ทดสอบและส่งมอบ",
          "desc": "ทดสอบการใช้งาน ส่งมอบ และอบรมทีมงาน"
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
        "เปิดตัวเว็บไซต์อีคอมเมิร์ซที่แสดงสินค้าของศูนย์การค้าอย่างเป็นระเบียบ",
        "ลูกค้าสอบถามได้ตลอด โดยมี AI ช่วยตอบ",
        "ทีมปฏิบัติการมีเครื่องมือช่วยลดงานซ้ำๆ",
        "โครงสร้างพร้อมรองรับร้านค้าและสินค้าที่เพิ่มขึ้น"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "AI ในระบบนี้ช่วยงานอะไรบ้าง",
          "answer": "ช่วยตอบคำถามทั่วไปของลูกค้าและสนับสนุนงานปฏิบัติการจากข้อมูลของศูนย์การค้า ส่วนเรื่องที่ต้องใช้ดุลยพินิจ ทีมงานยังเป็นผู้ดูแล"
        },
        {
          "question": "เหมาะกับธุรกิจค้าปลีกแบบดั้งเดิมหรือไม่",
          "answer": "เหมาะ เราออกแบบให้ใช้ง่ายสำหรับลูกค้าหลายกลุ่ม และให้ทีมงานดูแลเองได้โดยไม่ต้องมีพื้นฐานเทคนิค"
        },
        {
          "question": "ใช้กับศูนย์การค้าหรือตลาดอื่นได้ไหม",
          "answer": "ได้ ระบบอีคอมเมิร์ซและ AI ปรับให้เข้ากับศูนย์การค้า ตลาด และธุรกิจ SME อื่นได้"
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
  },
  {
    "slug": "prima-marine",
    "industryTag": "Logistics & Marine",
    "year": "2025",
    "th": {
      "metaTitle": "เว็บไซต์องค์กรสำหรับธุรกิจโลจิสติกส์ทางทะเล Prima Marine — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และแนวทางของโปรเจกต์ Prima Marine โดย Haliviq: พัฒนาเว็บไซต์, ออกแบบ UX/UI",
      "h1": "Prima Marine — เว็บไซต์องค์กรสำหรับธุรกิจโลจิสติกส์ทางทะเล",
      "client": "Prima Marine",
      "badge": "โลจิสติกส์และการขนส่งทางทะเล",
      "servicesProvided": [
        "พัฒนาเว็บไซต์",
        "ออกแบบ UX/UI"
      ],
      "intro": "Prima Marine เป็นบริษัทมหาชนด้านโลจิสติกส์ทางทะเล ต้องการเว็บไซต์ที่สื่อถึงขนาดธุรกิจ ความปลอดภัย และความน่าเชื่อถือต่อลูกค้า พันธมิตร และนักลงทุน เราออกแบบและพัฒนาเว็บไซต์องค์กรที่ดูเป็นมืออาชีพ แสดงบริการและการดำเนินงานอย่างเป็นระเบียบ และดูแลง่าย หน้านี้สรุปงานที่ส่งมอบและวิธีทำงาน สำหรับธุรกิจที่มองหาทีมพัฒนาผลิตภัณฑ์ดิจิทัลในประเทศไทย",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "โลจิสติกส์และการขนส่งทางทะเล"
        },
        {
          "label": "ขอบเขต",
          "value": "พัฒนาเว็บไซต์, ออกแบบ UX/UI"
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
        "สร้างเว็บไซต์ที่สะท้อนแบรนด์ Prima Marine ให้ดูเป็นมืออาชีพและเข้าใจง่าย",
        "หาข้อมูลสำคัญได้ง่ายบนทุกอุปกรณ์",
        "มีช่องทางให้ลูกค้าสอบถามหรือติดต่อต่อได้ชัดเจน",
        "ให้ทีมงานดูแลและต่อยอดงานที่พัฒนาได้เอง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "พัฒนาเว็บไซต์",
        "ออกแบบ UX/UI",
        "ระบบจัดการเนื้อหาสำหรับทีมงาน",
        "ส่งมอบงานและอบรมทีมงาน"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ที่เร็ว ใช้ได้ทุกอุปกรณ์ และให้ทีมงานอัปเดตเนื้อหาได้เอง"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบ Wireframe และหน้าตาเว็บไซต์ให้ชัดเจน ใช้ง่ายในทุกหน้า"
        },
        {
          "title": "ศึกษาธุรกิจและกลุ่มเป้าหมาย",
          "desc": "ทำความเข้าใจธุรกิจ ลูกค้า และเป้าหมาย เพื่อกำหนดขอบเขตงานและตัวชี้วัดความสำเร็จ"
        },
        {
          "title": "ทดสอบและเปิดใช้งาน",
          "desc": "ทดสอบบนหลายอุปกรณ์และเบราว์เซอร์ เปิดใช้งานและส่งมอบให้ทีมงาน"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front end",
        "Headless CMS สำหรับอัปเดตเนื้อหา",
        "Cloud hosting & CDN",
        "พื้นฐาน SEO และประสิทธิภาพ",
        "Responsive design system"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บไซต์ที่เรียบร้อยสวยงามและสะท้อนแบรนด์ Prima Marine",
        "ข้อมูลเป็นระเบียบ หาง่ายทั้งบนมือถือและเดสก์ท็อป",
        "ลูกค้ามีช่องทางติดต่อที่ชัดเจน",
        "ทีมงานอัปเดตเนื้อหาเองได้ต่อเนื่อง"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "เว็บไซต์รองรับความต้องการของบริษัทมหาชนได้หรือไม่",
          "answer": "ได้ เราจัดข้อมูลบริษัทและบริการให้ชัดเจน เพื่อให้ลูกค้า พันธมิตร และนักลงทุนหาข้อมูลได้ง่าย"
        },
        {
          "question": "ทีมงานอัปเดตเนื้อหาเองได้หรือไม่",
          "answer": "ได้ เนื้อหาจัดการผ่าน CMS เจ้าหน้าที่จึงอัปเดตข่าวและบริการได้เอง ไม่ต้องพึ่งนักพัฒนา"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/prima-marine/cover.jpg"
    },
    "en": {
      "metaTitle": "Prima Marine Corporate Website for a Marine Logistics Company — Haliviq",
      "metaDescription": "Deliverables, approach and tech behind Prima Marine's project by Haliviq: Website Development, UX/UI Design.",
      "h1": "Prima Marine — Corporate Website for a Marine Logistics Company",
      "client": "Prima Marine",
      "badge": "Logistics & Marine",
      "servicesProvided": [
        "Website Development",
        "UX/UI Design"
      ],
      "intro": "As a publicly listed marine logistics company, Prima Marine needed a website that conveys scale, safety and reliability to customers, partners and investors. We designed and built a clear, professional corporate website that presents services and operations in an organized way and is easy to maintain. This page summarizes the deliverables and approach, for businesses looking for a digital product studio in Thailand.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Logistics & Marine"
        },
        {
          "label": "Scope",
          "value": "Website Development, UX/UI Design"
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
        "Reflect the Prima Marine brand through a clear, professional experience.",
        "Make key information easy to find on any device.",
        "Create clear paths for customers to enquire or take action.",
        "Give the team tools to maintain and grow what we built."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Website Development",
        "UX/UI Design",
        "Content management for the team",
        "Handover and team training"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Website Development",
          "desc": "Built a fast, responsive website that is easy for the team to update."
        },
        {
          "title": "UX/UI Design",
          "desc": "Designed the structure, wireframes and visual interface so every page is clear and easy to use."
        },
        {
          "title": "Discovery & Research",
          "desc": "Studied the business, audience and goals to define the scope and success criteria."
        },
        {
          "title": "Testing & Launch",
          "desc": "Tested across devices and browsers, launched and handed over to the team."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end",
        "Headless CMS for content updates",
        "Cloud hosting & CDN",
        "SEO and performance foundations",
        "Responsive design system"
      ],
      "resultsHeading": "Results",
      "results": [
        "Launched a polished experience that reflects the Prima Marine brand.",
        "Information is organized and easy to find on mobile and desktop.",
        "Customers have clear ways to get in touch.",
        "The team can keep content up to date independently."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "Can the website support a listed company's needs?",
          "answer": "Yes. We structure company information and service content clearly so customers, partners and investors can find what they need."
        },
        {
          "question": "Can the team update content themselves?",
          "answer": "Yes. Content is managed through a CMS so staff can update news and services without a developer."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/prima-marine/cover.jpg"
    }
  },
  {
    "slug": "baan-khanitha",
    "industryTag": "F&B",
    "year": "2025",
    "th": {
      "metaTitle": "เว็บไซต์ร้านอาหารไทยชื่อดัง Baan Khanitha Thai Cuisine — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และแนวทางของโปรเจกต์ Baan Khanitha Thai Cuisine โดย Haliviq: พัฒนาเว็บไซต์, ออกแบบ UX/UI",
      "h1": "Baan Khanitha Thai Cuisine — เว็บไซต์สำหรับร้านอาหารไทยชื่อดัง",
      "client": "Baan Khanitha Thai Cuisine",
      "badge": "ร้านอาหารและเครื่องดื่ม",
      "servicesProvided": [
        "พัฒนาเว็บไซต์",
        "ออกแบบ UX/UI"
      ],
      "intro": "Baan Khanitha เป็นร้านอาหารไทยชื่อดังที่มีชื่อเสียงจากบรรยากาศและอาหาร เว็บไซต์จึงต้องสื่อประสบการณ์นั้น และให้คนหาเมนูและหาทางไปร้านได้ง่าย เราออกแบบประสบการณ์ตามเอกลักษณ์ของร้าน และพัฒนาเว็บไซต์ที่สวยและเรียบง่าย ครอบคลุมเมนู สาขา และการจอง หน้านี้สรุปงานที่ส่งมอบและวิธีทำงาน สำหรับธุรกิจที่มองหาทีมพัฒนาผลิตภัณฑ์ดิจิทัลในประเทศไทย",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "ร้านอาหารและเครื่องดื่ม"
        },
        {
          "label": "ขอบเขต",
          "value": "พัฒนาเว็บไซต์, ออกแบบ UX/UI"
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
        "สร้างเว็บไซต์ที่สะท้อนแบรนด์ Baan Khanitha Thai Cuisine ให้ดูเป็นมืออาชีพและเข้าใจง่าย",
        "หาข้อมูลสำคัญได้ง่ายบนทุกอุปกรณ์",
        "มีช่องทางให้ลูกค้าสอบถามหรือติดต่อต่อได้ชัดเจน",
        "ให้ทีมงานดูแลและต่อยอดงานที่พัฒนาได้เอง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "พัฒนาเว็บไซต์",
        "ออกแบบ UX/UI",
        "ระบบจัดการเนื้อหาสำหรับทีมงาน",
        "ส่งมอบงานและอบรมทีมงาน"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาธุรกิจและกลุ่มเป้าหมาย",
          "desc": "ทำความเข้าใจธุรกิจ ลูกค้า และเป้าหมาย เพื่อกำหนดขอบเขตงานและตัวชี้วัดความสำเร็จ"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบ Wireframe และหน้าตาเว็บไซต์ให้ชัดเจน ใช้ง่ายในทุกหน้า"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ที่เร็ว ใช้ได้ทุกอุปกรณ์ และให้ทีมงานอัปเดตเนื้อหาได้เอง"
        },
        {
          "title": "ทดสอบและเปิดใช้งาน",
          "desc": "ทดสอบบนหลายอุปกรณ์และเบราว์เซอร์ เปิดใช้งานและส่งมอบให้ทีมงาน"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front end",
        "Headless CMS สำหรับเมนูและเนื้อหา",
        "เชื่อมระบบจองและติดต่อ",
        "Cloud hosting & CDN",
        "พื้นฐาน Local SEO"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บไซต์ที่เรียบร้อยสวยงามและสะท้อนแบรนด์ Baan Khanitha Thai Cuisine",
        "ข้อมูลเป็นระเบียบ หาง่ายทั้งบนมือถือและเดสก์ท็อป",
        "ลูกค้ามีช่องทางติดต่อที่ชัดเจน",
        "ทีมงานอัปเดตเนื้อหาเองได้ต่อเนื่อง"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "อัปเดตเมนูได้ง่ายหรือไม่",
          "answer": "ได้ เมนูและเนื้อหาจัดการผ่าน CMS ทีมงานอัปเดตอาหารและโปรโมชันได้เอง"
        },
        {
          "question": "ใช้งานบนมือถือได้ดีหรือไม่",
          "answer": "ได้ เราออกแบบโดยเริ่มจากมือถือก่อน (Mobile-first) เพราะผู้เข้าชมเว็บไซต์ร้านอาหารส่วนใหญ่ใช้โทรศัพท์"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/baan-khanitha/cover.jpg"
    },
    "en": {
      "metaTitle": "Baan Khanitha Thai Cuisine Website for a Renowned Thai Restaurant — Haliviq",
      "metaDescription": "Deliverables, approach and tech behind Baan Khanitha Thai Cuisine's project by Haliviq: Website Development, UX/UI Design.",
      "h1": "Baan Khanitha Thai Cuisine — Website for a Renowned Thai Restaurant",
      "client": "Baan Khanitha Thai Cuisine",
      "badge": "F&B",
      "servicesProvided": [
        "Website Development",
        "UX/UI Design"
      ],
      "intro": "Baan Khanitha is a well-known Thai restaurant whose atmosphere and cuisine are central to its reputation. Its website needed to reflect that experience and make it easy to discover the menu and visit. We designed the experience around the restaurant's character and built an elegant, easy-to-browse website for menus, locations and reservations. This page summarizes the deliverables and approach, for businesses looking for a digital product studio in Thailand.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "F&B"
        },
        {
          "label": "Scope",
          "value": "Website Development, UX/UI Design"
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
        "Reflect the Baan Khanitha Thai Cuisine brand through a clear, professional experience.",
        "Make key information easy to find on any device.",
        "Create clear paths for customers to enquire or take action.",
        "Give the team tools to maintain and grow what we built."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Website Development",
        "UX/UI Design",
        "Content management for the team",
        "Handover and team training"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Discovery & Research",
          "desc": "Studied the business, audience and goals to define the scope and success criteria."
        },
        {
          "title": "UX/UI Design",
          "desc": "Designed the structure, wireframes and visual interface so every page is clear and easy to use."
        },
        {
          "title": "Website Development",
          "desc": "Built a fast, responsive website that is easy for the team to update."
        },
        {
          "title": "Testing & Launch",
          "desc": "Tested across devices and browsers, launched and handed over to the team."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end",
        "Headless CMS for menus and content",
        "Reservation / contact integration",
        "Cloud hosting & CDN",
        "Local SEO foundations"
      ],
      "resultsHeading": "Results",
      "results": [
        "Launched a polished experience that reflects the Baan Khanitha Thai Cuisine brand.",
        "Information is organized and easy to find on mobile and desktop.",
        "Customers have clear ways to get in touch.",
        "The team can keep content up to date independently."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "Can the menu be updated easily?",
          "answer": "Yes. Menu and content are managed through a CMS so the team can update dishes and promotions themselves."
        },
        {
          "question": "Does the site work well on mobile?",
          "answer": "Yes. The design is built mobile-first because most restaurant visitors browse on their phones."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/baan-khanitha/cover.jpg"
    }
  },
  {
    "slug": "dsk",
    "industryTag": "Beauty & Aesthetics",
    "year": "2025",
    "th": {
      "metaTitle": "เว็บไซต์ UX/UI และ AI CRM สำหรับคลินิกศัลยกรรมความงาม DSK — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และแนวทางของโปรเจกต์ DSK โดย Haliviq: ให้คำปรึกษาธุรกิจ, ออกแบบเว็บไซต์, ออกแบบ UX/UI, CRM ที่มี AI ช่วย",
      "h1": "DSK — เว็บไซต์ UX/UI และ AI CRM สำหรับคลินิกศัลยกรรมความงาม",
      "client": "DSK",
      "badge": "ความงามและศัลยกรรม",
      "servicesProvided": [
        "ให้คำปรึกษาธุรกิจ",
        "ออกแบบเว็บไซต์",
        "ออกแบบ UX/UI",
        "CRM ที่มี AI ช่วย"
      ],
      "intro": "DSK เป็นธุรกิจศัลยกรรมความงาม ต้องการภาพลักษณ์ออนไลน์ที่เรียบร้อยและสร้างความไว้ใจ พร้อมวิธีดูแลและติดตามลูกค้าที่สนใจให้ดีขึ้น เราเริ่มจากให้คำปรึกษาธุรกิจ แล้วออกแบบเว็บไซต์และ UX/UI ที่ดูหรูเรียบ พร้อมเพิ่ม CRM ที่มี AI ช่วยจัดระเบียบและติดตามลูกค้า หน้านี้สรุปงานที่ส่งมอบและวิธีทำงาน สำหรับธุรกิจที่มองหาทีมพัฒนาผลิตภัณฑ์ดิจิทัลในประเทศไทย",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "ความงามและศัลยกรรม"
        },
        {
          "label": "ขอบเขต",
          "value": "ให้คำปรึกษาธุรกิจ, ออกแบบเว็บไซต์, ออกแบบ UX/UI, CRM ที่มี AI ช่วย"
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
        "สร้างเว็บไซต์ที่สะท้อนแบรนด์ DSK ให้ดูเป็นมืออาชีพและเข้าใจง่าย",
        "หาข้อมูลสำคัญได้ง่ายบนทุกอุปกรณ์",
        "มีช่องทางให้ลูกค้าสอบถามหรือติดต่อต่อได้ชัดเจน",
        "ให้ทีมงานดูแลและต่อยอดงานที่พัฒนาได้เอง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "ให้คำปรึกษาธุรกิจ",
        "ออกแบบเว็บไซต์",
        "ออกแบบ UX/UI",
        "CRM ที่มี AI ช่วย",
        "ระบบจัดการเนื้อหาสำหรับทีมงาน",
        "ส่งมอบงานและอบรมทีมงาน"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ให้คำปรึกษาธุรกิจ",
          "desc": "ให้คำปรึกษาด้านกลยุทธ์ดิจิทัล และบทบาทของเว็บไซต์ต่อเป้าหมายทางธุรกิจ"
        },
        {
          "title": "ศึกษาธุรกิจและกลุ่มเป้าหมาย",
          "desc": "ทำความเข้าใจธุรกิจ ลูกค้า และเป้าหมาย เพื่อกำหนดขอบเขตงานและตัวชี้วัดความสำเร็จ"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบ Wireframe และหน้าตาเว็บไซต์ให้ชัดเจน ใช้ง่ายในทุกหน้า"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ที่เร็ว ใช้ได้ทุกอุปกรณ์ และให้ทีมงานอัปเดตเนื้อหาได้เอง"
        },
        {
          "title": "เชื่อมระบบ AI และ CRM",
          "desc": "เพิ่ม CRM ที่มี AI ช่วย เพื่อเก็บ จัดระเบียบ และติดตามลูกค้าที่สนใจอย่างสม่ำเสมอ"
        },
        {
          "title": "ทดสอบและเปิดใช้งาน",
          "desc": "ทดสอบบนหลายอุปกรณ์และเบราว์เซอร์ เปิดใช้งานและส่งมอบให้ทีมงาน"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front end",
        "แพลตฟอร์ม CRM พร้อม AI ช่วย",
        "ระบบรับคำถามและนัดหมาย",
        "Cloud hosting & CDN",
        "SEO และ Analytics ที่คำนึงถึงความเป็นส่วนตัว"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บไซต์ที่เรียบร้อยสวยงามและสะท้อนแบรนด์ DSK",
        "ข้อมูลเป็นระเบียบ หาง่ายทั้งบนมือถือและเดสก์ท็อป",
        "ลูกค้ามีช่องทางติดต่อที่ชัดเจน",
        "ทีมงานอัปเดตเนื้อหาเองได้ต่อเนื่อง"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "AI ใน CRM ช่วยทำอะไร",
          "answer": "ช่วยจัดระเบียบลูกค้าที่สนใจและแนะนำการติดตาม ส่วนการให้คำปรึกษาและการคุยกับลูกค้า เจ้าหน้าที่ยังเป็นผู้ดูแล"
        },
        {
          "question": "ข้อมูลลูกค้าถูกจัดการอย่างไร",
          "answer": "จัดการข้อมูลลูกค้าตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล (PDPA) และให้เฉพาะเจ้าหน้าที่ที่ได้รับอนุญาตเข้าถึงได้"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/dsk/cover.jpg"
    },
    "en": {
      "metaTitle": "DSK Website, UX/UI and AI-Assisted CRM for an Aesthetic Clinic — Haliviq",
      "metaDescription": "Deliverables, approach and tech behind DSK's project by Haliviq: Business Consulting, Website Design, UX/UI Design, AI-Assisted CRM.",
      "h1": "DSK — Website, UX/UI and AI-Assisted CRM for an Aesthetic Clinic",
      "client": "DSK",
      "badge": "Beauty & Aesthetics",
      "servicesProvided": [
        "Business Consulting",
        "Website Design",
        "UX/UI Design",
        "AI-Assisted CRM"
      ],
      "intro": "DSK, an aesthetic surgery business, needed a refined online presence that builds trust, along with a better way to manage and follow up customer enquiries. We started with business consulting, then designed an elegant website and UX/UI, and added an AI-assisted CRM to organize and follow up enquiries. This page summarizes the deliverables and approach, for businesses looking for a digital product studio in Thailand.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Beauty & Aesthetics"
        },
        {
          "label": "Scope",
          "value": "Business Consulting, Website Design, UX/UI Design, AI-Assisted CRM"
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
        "Reflect the DSK brand through a clear, professional experience.",
        "Make key information easy to find on any device.",
        "Create clear paths for customers to enquire or take action.",
        "Give the team tools to maintain and grow what we built."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Business Consulting",
        "Website Design",
        "UX/UI Design",
        "AI-Assisted CRM",
        "Content management for the team",
        "Handover and team training"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Business Consulting",
          "desc": "Advised on digital strategy and how the website should support business goals."
        },
        {
          "title": "Discovery & Research",
          "desc": "Studied the business, audience and goals to define the scope and success criteria."
        },
        {
          "title": "UX/UI Design",
          "desc": "Designed the structure, wireframes and visual interface so every page is clear and easy to use."
        },
        {
          "title": "Website Development",
          "desc": "Built a fast, responsive website that is easy for the team to update."
        },
        {
          "title": "AI & CRM Integration",
          "desc": "Added AI-assisted CRM so enquiries are captured, organized and followed up consistently."
        },
        {
          "title": "Testing & Launch",
          "desc": "Tested across devices and browsers, launched and handed over to the team."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end",
        "CRM platform with AI assistance",
        "Enquiry and appointment capture",
        "Cloud hosting & CDN",
        "SEO and privacy-conscious analytics"
      ],
      "resultsHeading": "Results",
      "results": [
        "Launched a polished experience that reflects the DSK brand.",
        "Information is organized and easy to find on mobile and desktop.",
        "Customers have clear ways to get in touch.",
        "The team can keep content up to date independently."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "What does the AI in the CRM do?",
          "answer": "It helps organize enquiries and suggest follow-ups; staff remain in charge of consultations and customer communication."
        },
        {
          "question": "How is customer data handled?",
          "answer": "Customer information is handled in line with applicable data protection law (PDPA), with access limited to authorized staff."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/dsk/cover.jpg"
    }
  },
  {
    "slug": "admire",
    "industryTag": "Real Estate & Construction",
    "year": "2025",
    "th": {
      "metaTitle": "เว็บไซต์ UX/UI และ AI CRM สำหรับธุรกิจรับสร้างบ้าน Admire — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และแนวทางของโปรเจกต์ Admire โดย Haliviq: ออกแบบ UX/UI, พัฒนาเว็บไซต์, CRM ที่มี AI ช่วย",
      "h1": "Admire — เว็บไซต์ UX/UI และ AI CRM สำหรับธุรกิจรับสร้างบ้าน",
      "client": "Admire",
      "badge": "อสังหาริมทรัพย์และก่อสร้าง",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "CRM ที่มี AI ช่วย"
      ],
      "intro": "Admire รับสร้างบ้าน ผู้ซื้อมักใช้เวลาดูแบบบ้านและเปรียบเทียบผู้รับเหมา ธุรกิจจึงต้องการเว็บไซต์ที่โชว์ผลงาน และระบบที่ไม่ปล่อยให้ลูกค้าที่สนใจหลุดมือ เราออกแบบ UX/UI ที่เน้นแบบบ้าน พัฒนาเว็บไซต์ และเพิ่ม CRM ที่มี AI ช่วยเก็บและติดตามทุกการสอบถาม หน้านี้สรุปงานที่ส่งมอบและวิธีทำงาน สำหรับธุรกิจที่มองหาทีมพัฒนาผลิตภัณฑ์ดิจิทัลในประเทศไทย",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "อสังหาริมทรัพย์และก่อสร้าง"
        },
        {
          "label": "ขอบเขต",
          "value": "ออกแบบ UX/UI, พัฒนาเว็บไซต์, CRM ที่มี AI ช่วย"
        },
        {
          "label": "ปี",
          "value": "2025"
        },
        {
          "label": "บริการ",
          "value": "3"
        }
      ],
      "objectivesHeading": "เป้าหมายของโปรเจกต์",
      "objectives": [
        "สร้างเว็บไซต์ที่สะท้อนแบรนด์ Admire ให้ดูเป็นมืออาชีพและเข้าใจง่าย",
        "หาข้อมูลสำคัญได้ง่ายบนทุกอุปกรณ์",
        "มีช่องทางให้ลูกค้าสอบถามหรือติดต่อต่อได้ชัดเจน",
        "ให้ทีมงานดูแลและต่อยอดงานที่พัฒนาได้เอง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "CRM ที่มี AI ช่วย",
        "ระบบจัดการเนื้อหาสำหรับทีมงาน",
        "ส่งมอบงานและอบรมทีมงาน"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาธุรกิจและกลุ่มเป้าหมาย",
          "desc": "ทำความเข้าใจธุรกิจ ลูกค้า และเป้าหมาย เพื่อกำหนดขอบเขตงานและตัวชี้วัดความสำเร็จ"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบ Wireframe และหน้าตาเว็บไซต์ให้ชัดเจน ใช้ง่ายในทุกหน้า"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ที่เร็ว ใช้ได้ทุกอุปกรณ์ และให้ทีมงานอัปเดตเนื้อหาได้เอง"
        },
        {
          "title": "เชื่อมระบบ AI และ CRM",
          "desc": "เพิ่ม CRM ที่มี AI ช่วย เพื่อเก็บ จัดระเบียบ และติดตามลูกค้าที่สนใจอย่างสม่ำเสมอ"
        },
        {
          "title": "ทดสอบและเปิดใช้งาน",
          "desc": "ทดสอบบนหลายอุปกรณ์และเบราว์เซอร์ เปิดใช้งานและส่งมอบให้ทีมงาน"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front end",
        "CRM พร้อม AI ช่วย",
        "แกลเลอรีผลงานและแบบบ้านพร้อม CMS",
        "Cloud hosting & CDN",
        "พื้นฐาน SEO"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บไซต์ที่เรียบร้อยสวยงามและสะท้อนแบรนด์ Admire",
        "ข้อมูลเป็นระเบียบ หาง่ายทั้งบนมือถือและเดสก์ท็อป",
        "ลูกค้ามีช่องทางติดต่อที่ชัดเจน",
        "ทีมงานอัปเดตเนื้อหาเองได้ต่อเนื่อง"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "CRM ที่มี AI ช่วยธุรกิจรับสร้างบ้านอย่างไร",
          "answer": "เก็บทุกการสอบถามไว้ในที่เดียว และช่วยเรียงลำดับและเตือนให้ติดตาม ทีมขายจึงมีเวลาคุยกับลูกค้ามากขึ้น"
        },
        {
          "question": "ทีมงานเพิ่มโครงการใหม่เองได้หรือไม่",
          "answer": "ได้ แบบบ้านและโครงการจัดการผ่าน CMS ไม่ต้องพึ่งนักพัฒนา"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/admire/cover.jpg"
    },
    "en": {
      "metaTitle": "Admire Website, UX/UI and AI-Assisted CRM for a Home Builder — Haliviq",
      "metaDescription": "Deliverables, approach and tech behind Admire's project by Haliviq: UX/UI Design, Website Development, AI-Assisted CRM.",
      "h1": "Admire — Website, UX/UI and AI-Assisted CRM for a Home Builder",
      "client": "Admire",
      "badge": "Real Estate & Construction",
      "servicesProvided": [
        "UX/UI Design",
        "Website Development",
        "AI-Assisted CRM"
      ],
      "intro": "Admire builds custom homes, where buyers take time to explore designs and compare builders. The business needed a website that showcases its work and a system that does not let promising leads slip away. We designed a UX/UI centered on the home designs, built the website, and added AI-assisted CRM that captures and follows up every enquiry. This page summarizes the deliverables and approach, for businesses looking for a digital product studio in Thailand.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Real Estate & Construction"
        },
        {
          "label": "Scope",
          "value": "UX/UI Design, Website Development, AI-Assisted CRM"
        },
        {
          "label": "Year",
          "value": "2025"
        },
        {
          "label": "Services",
          "value": "3"
        }
      ],
      "objectivesHeading": "Project Objectives",
      "objectives": [
        "Reflect the Admire brand through a clear, professional experience.",
        "Make key information easy to find on any device.",
        "Create clear paths for customers to enquire or take action.",
        "Give the team tools to maintain and grow what we built."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "UX/UI Design",
        "Website Development",
        "AI-Assisted CRM",
        "Content management for the team",
        "Handover and team training"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Discovery & Research",
          "desc": "Studied the business, audience and goals to define the scope and success criteria."
        },
        {
          "title": "UX/UI Design",
          "desc": "Designed the structure, wireframes and visual interface so every page is clear and easy to use."
        },
        {
          "title": "Website Development",
          "desc": "Built a fast, responsive website that is easy for the team to update."
        },
        {
          "title": "AI & CRM Integration",
          "desc": "Added AI-assisted CRM so enquiries are captured, organized and followed up consistently."
        },
        {
          "title": "Testing & Launch",
          "desc": "Tested across devices and browsers, launched and handed over to the team."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end",
        "CRM with AI assistance",
        "Project / design gallery with CMS",
        "Cloud hosting & CDN",
        "SEO foundations"
      ],
      "resultsHeading": "Results",
      "results": [
        "Launched a polished experience that reflects the Admire brand.",
        "Information is organized and easy to find on mobile and desktop.",
        "Customers have clear ways to get in touch.",
        "The team can keep content up to date independently."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "How does the AI-assisted CRM help a home builder?",
          "answer": "It keeps every enquiry in one place and helps prioritize and remind follow-ups so sales staff can focus on conversations."
        },
        {
          "question": "Can new projects be added by the team?",
          "answer": "Yes. Designs and projects are managed through a CMS without developer help."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/admire/cover.jpg"
    }
  },
  {
    "slug": "meko-international-hospital",
    "industryTag": "Beauty & Aesthetics",
    "year": "2025",
    "th": {
      "metaTitle": "แบรนด์ เว็บไซต์ และกราฟิกสำหรับโรงพยาบาลศัลยกรรมความงาม MEKO International Hospital — ผลงาน Haliviq",
      "metaDescription": "งานที่ส่งมอบ เทคโนโลยี และแนวทางของโปรเจกต์ MEKO International Hospital โดย Haliviq: ออกแบบเว็บไซต์, ออกแบบ UX/UI, ออกแบบกราฟิก, Brand & CI",
      "h1": "MEKO International Hospital — แบรนด์ เว็บไซต์ และกราฟิกสำหรับโรงพยาบาลศัลยกรรมความงาม",
      "client": "MEKO International Hospital",
      "badge": "ความงามและศัลยกรรม",
      "servicesProvided": [
        "ออกแบบเว็บไซต์",
        "ออกแบบ UX/UI",
        "ออกแบบกราฟิก",
        "Brand & CI"
      ],
      "intro": "MEKO International Hospital เป็นชื่อที่รู้จักในวงการศัลยกรรมความงาม ภาพลักษณ์ออนไลน์และสื่อแบรนด์จึงต้องเรียบร้อยและน่าเชื่อถือเท่ากับบริการ เราทำอัตลักษณ์แบรนด์และกราฟิกควบคู่กับเว็บไซต์และ UX/UI ให้ผู้ใช้บริการเจอประสบการณ์ที่เป็นแบบเดียวกันในทุกช่องทาง หน้านี้สรุปงานที่ส่งมอบและวิธีทำงาน สำหรับธุรกิจที่มองหาทีมพัฒนาผลิตภัณฑ์ดิจิทัลในประเทศไทย",
      "snapshot": [
        {
          "label": "อุตสาหกรรม",
          "value": "ความงามและศัลยกรรม"
        },
        {
          "label": "ขอบเขต",
          "value": "ออกแบบเว็บไซต์, ออกแบบ UX/UI, ออกแบบกราฟิก, Brand & CI"
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
        "สร้างเว็บไซต์ที่สะท้อนแบรนด์ MEKO International Hospital ให้ดูเป็นมืออาชีพและเข้าใจง่าย",
        "หาข้อมูลสำคัญได้ง่ายบนทุกอุปกรณ์",
        "มีช่องทางให้ลูกค้าสอบถามหรือติดต่อต่อได้ชัดเจน",
        "ให้ทีมงานดูแลและต่อยอดงานที่พัฒนาได้เอง"
      ],
      "deliverablesHeading": "สิ่งที่เราส่งมอบ",
      "deliverables": [
        "ออกแบบเว็บไซต์",
        "ออกแบบ UX/UI",
        "ออกแบบกราฟิก",
        "Brand & CI",
        "ระบบจัดการเนื้อหาสำหรับทีมงาน",
        "ส่งมอบงานและอบรมทีมงาน"
      ],
      "approachHeading": "ขั้นตอนการทำงาน",
      "approach": [
        {
          "title": "ศึกษาธุรกิจและกลุ่มเป้าหมาย",
          "desc": "ทำความเข้าใจธุรกิจ ลูกค้า และเป้าหมาย เพื่อกำหนดขอบเขตงานและตัวชี้วัดความสำเร็จ"
        },
        {
          "title": "พัฒนาแบรนด์และ CI",
          "desc": "พัฒนาอัตลักษณ์แบรนด์และแนวทางการใช้งาน ให้ทุกจุดที่ลูกค้าพบเจอแบรนด์ดูเป็นแบบเดียวกัน"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบ Wireframe และหน้าตาเว็บไซต์ให้ชัดเจน ใช้ง่ายในทุกหน้า"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ที่เร็ว ใช้ได้ทุกอุปกรณ์ และให้ทีมงานอัปเดตเนื้อหาได้เอง"
        },
        {
          "title": "ออกแบบกราฟิก",
          "desc": "ทำสื่อกราฟิกสำหรับช่องทางดิจิทัลและสื่อสิ่งพิมพ์ให้เข้ากับแบรนด์"
        },
        {
          "title": "ทดสอบและเปิดใช้งาน",
          "desc": "ทดสอบบนหลายอุปกรณ์และเบราว์เซอร์ เปิดใช้งานและส่งมอบให้ทีมงาน"
        }
      ],
      "techHeading": "เทคโนโลยีและเครื่องมือ",
      "tech": [
        "Next.js front end",
        "Headless CMS สำหรับบริการและเนื้อหา",
        "Brand design system และแนวทางการใช้แบรนด์",
        "Cloud hosting & CDN",
        "พื้นฐาน SEO และการเข้าถึง"
      ],
      "resultsHeading": "ผลลัพธ์",
      "results": [
        "เปิดตัวเว็บไซต์ที่เรียบร้อยสวยงามและสะท้อนแบรนด์ MEKO International Hospital",
        "ข้อมูลเป็นระเบียบ หาง่ายทั้งบนมือถือและเดสก์ท็อป",
        "ลูกค้ามีช่องทางติดต่อที่ชัดเจน",
        "ทีมงานอัปเดตเนื้อหาเองได้ต่อเนื่อง"
      ],
      "faqHeading": "คำถามที่พบบ่อย",
      "faq": [
        {
          "question": "ทำทั้งแบรนด์และเว็บไซต์ได้หรือไม่",
          "answer": "ได้ การทำอัตลักษณ์แบรนด์ กราฟิก และเว็บไซต์ไปพร้อมกัน ช่วยให้ประสบการณ์ทั้งหมดดูเป็นแบบเดียวกัน"
        },
        {
          "question": "ทีมงานผลิตสื่อใหม่เองภายหลังได้หรือไม่",
          "answer": "ได้ เรามอบแนวทางและเทมเพลตให้ทีมงานผลิตสื่อที่ตรงแบรนด์ได้เอง"
        }
      ],
      "backLabel": "กลับไปหน้า Work",
      "servicesLabel": "บริการที่ให้",
      "ogImage": "/images/case-studies/meko-international-hospital/cover.jpg"
    },
    "en": {
      "metaTitle": "MEKO International Hospital Brand, Website and Graphics for an Aesthetic Hospital — Haliviq",
      "metaDescription": "Deliverables, approach and tech behind MEKO International Hospital's project by Haliviq: Website Design, UX/UI Design, Graphic Design, Brand & CI.",
      "h1": "MEKO International Hospital — Brand, Website and Graphics for an Aesthetic Hospital",
      "client": "MEKO International Hospital",
      "badge": "Beauty & Aesthetics",
      "servicesProvided": [
        "Website Design",
        "UX/UI Design",
        "Graphic Design",
        "Brand & CI"
      ],
      "intro": "MEKO International Hospital is a well-known name in aesthetic surgery. Its digital presence and brand materials needed to feel as refined and trustworthy as the care it provides. We worked on the brand identity and graphics together with the website and UX/UI, so patients meet one consistent, polished experience across every channel. This page summarizes the deliverables and approach, for businesses looking for a digital product studio in Thailand.",
      "snapshot": [
        {
          "label": "Industry",
          "value": "Beauty & Aesthetics"
        },
        {
          "label": "Scope",
          "value": "Website Design, UX/UI Design, Graphic Design, Brand & CI"
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
        "Reflect the MEKO International Hospital brand through a clear, professional experience.",
        "Make key information easy to find on any device.",
        "Create clear paths for customers to enquire or take action.",
        "Give the team tools to maintain and grow what we built."
      ],
      "deliverablesHeading": "What We Delivered",
      "deliverables": [
        "Website Design",
        "UX/UI Design",
        "Graphic Design",
        "Brand & CI",
        "Content management for the team",
        "Handover and team training"
      ],
      "approachHeading": "How We Built It",
      "approach": [
        {
          "title": "Discovery & Research",
          "desc": "Studied the business, audience and goals to define the scope and success criteria."
        },
        {
          "title": "Brand & CI",
          "desc": "Developed the brand identity and guidelines so every touchpoint feels consistent."
        },
        {
          "title": "UX/UI Design",
          "desc": "Designed the structure, wireframes and visual interface so every page is clear and easy to use."
        },
        {
          "title": "Website Development",
          "desc": "Built a fast, responsive website that is easy for the team to update."
        },
        {
          "title": "Graphic Design",
          "desc": "Produced graphic assets for digital and print use across the brand."
        },
        {
          "title": "Testing & Launch",
          "desc": "Tested across devices and browsers, launched and handed over to the team."
        }
      ],
      "techHeading": "Technology & Tools",
      "tech": [
        "Next.js front end",
        "Headless CMS for services and content",
        "Brand design system & guidelines",
        "Cloud hosting & CDN",
        "SEO and accessibility foundations"
      ],
      "resultsHeading": "Results",
      "results": [
        "Launched a polished experience that reflects the MEKO International Hospital brand.",
        "Information is organized and easy to find on mobile and desktop.",
        "Customers have clear ways to get in touch.",
        "The team can keep content up to date independently."
      ],
      "faqHeading": "Frequently Asked Questions",
      "faq": [
        {
          "question": "Can you handle both brand and website?",
          "answer": "Yes. Working on brand identity, graphics and the website together keeps the whole experience consistent."
        },
        {
          "question": "Can the team create new materials later?",
          "answer": "Yes. We provide guidelines and reusable templates so the team can produce on-brand materials themselves."
        }
      ],
      "backLabel": "Back to Work",
      "servicesLabel": "Services Provided",
      "ogImage": "/images/case-studies/meko-international-hospital/cover.jpg"
    }
  }
]

export function getWorkProject(slug: string): WorkProject | undefined {
  return workProjects.find((w) => w.slug === slug)
}
