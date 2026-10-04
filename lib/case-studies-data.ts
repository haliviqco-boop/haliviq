export type CaseStudyContent = {
  badge: string
  client: string
  title: string
  desc: string
  duration: string
  servicesProvided: string[]
  heroImage: string
  challengeHeading: string
  challenge: string
  solutionHeading: string
  solution: string
  overviewHeading: string
  overview: string
  approachHeading: string
  approach: { title: string; desc: string }[]
  keyFeaturesHeading: string
  keyFeatures: { title: string; bullets: string[] }[]
  backLabel: string
  servicesLabel: string
}

export type CaseStudy = {
  slug: string
  industryTag: string
  result: string
  year: string
  th: CaseStudyContent
  en: CaseStudyContent
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'savelberg',
    industryTag: 'F&B',
    result: 'เว็บไซต์ใหม่',
    year: '2025',
    th: {
      badge: 'F&B',
      client: 'Savelberg Restaurant',
      title: 'เว็บไซต์ร้านอาหารระดับมิชลินสตาร์ Savelberg',
      desc: 'ออกแบบและพัฒนาเว็บไซต์ให้ร้านอาหารไฟน์ไดนิ่งสไตล์ฝรั่งเศสระดับมิชลินสตาร์ พร้อมวางกลยุทธ์คอนเทนต์และการตลาดดิจิทัล เพื่อสื่อสารความประณีตของแบรนด์ให้ลูกค้าทั้งชาวไทยและต่างชาติ',
      duration: '3 เดือน',
      servicesProvided: ['ออกแบบเว็บไซต์ (UX/UI)', 'พัฒนาเว็บไซต์', 'กำกับทิศทางภาพถ่าย & คอนเทนต์', 'ช่วยวางกลยุทธ์การตลาดดิจิทัล', 'แชทบอท AI ตอบคำถามลูกค้า'],
      heroImage: '/images/case-studies/savelberg/cover.png',
      challengeHeading: 'โจทย์ของโปรเจกต์',
      challenge: 'Savelberg เป็นร้านอาหารฝรั่งเศสระดับมิชลินสตาร์ภายใต้การดูแลของเชฟ Henk Savelberg ต้องการเว็บไซต์ที่สื่อสารความประณีตและมาตรฐานระดับโลกของร้าน ให้สมกับภาพลักษณ์ไฟน์ไดนิ่ง ในขณะเดียวกันก็ต้องใช้งานง่าย ให้ลูกค้าทั้งคนไทยและนักท่องเที่ยวต่างชาติค้นหาข้อมูลเมนู จองโต๊ะ และรู้สึกถึงประสบการณ์ระดับพรีเมียมได้ตั้งแต่หน้าแรก',
      solutionHeading: 'แนวทางที่เราทำ',
      solution: 'เราออกแบบเว็บไซต์ใหม่ทั้งหมดด้วยโทนมืดหรูหราที่ขับเน้นภาพถ่ายอาหารและบรรยากาศร้าน วางโครงสร้างให้เข้าถึงเมนู การจองโต๊ะ และเรื่องราวของเชฟได้ในไม่กี่คลิก พร้อมซัพพอร์ตสองภาษา (ไทย/อังกฤษ) และวางแนวทางคอนเทนต์สำหรับช่องทางการตลาดออนไลน์ให้สอดคล้องกับงานออกแบบ',
      overviewHeading: 'ภาพรวมโปรเจกต์',
      overview: 'Savelberg ตั้งอยู่ย่านยานนาวา กรุงเทพฯ ชูจุดเด่นด้านอาหารฝรั่งเศสร่วมสมัยผสมผสานกลิ่นอายเมดิเตอร์เรเนียน จากเชฟที่ได้รับดาวมิชลินมาแล้วถึง 5 ร้าน โจทย์หลักคือทำให้เว็บไซต์เป็นหน้าด่านที่ถ่ายทอดมาตรฐานนี้ได้ทันทีที่เข้าชม',
      approachHeading: 'กระบวนการทำงาน',
      approach: [
        { title: 'ทำความเข้าใจแบรนด์', desc: 'ลงพื้นที่เก็บข้อมูลบรรยากาศร้าน สไตล์การเสิร์ฟ และตัวตนของเชฟ เพื่อแปลงเป็นโทนภาพและข้อความบนเว็บไซต์' },
        { title: 'ออกแบบ UX/UI', desc: 'วางโครงสร้างหน้าเว็บให้เมนู การจองโต๊ะ และแกลเลอรีภาพเข้าถึงง่าย เน้นภาพใหญ่และพื้นที่ว่างแบบไฟน์ไดนิ่ง' },
        { title: 'พัฒนาและเชื่อมระบบจอง', desc: 'พัฒนาเว็บไซต์ให้โหลดเร็ว รองรับสองภาษา และเชื่อมต่อช่องทางการจองโต๊ะออนไลน์' },
        { title: 'วางแผนคอนเทนต์การตลาด', desc: 'ช่วยวางแนวทางคอนเทนต์ภาพและข้อความสำหรับโซเชียลมีเดีย ให้สื่อสารตรงกับกลุ่มลูกค้าไฟน์ไดนิ่ง' },
      ],
      keyFeaturesHeading: 'ฟีเจอร์เด่น',
      keyFeatures: [
        {
          title: 'ประสบการณ์แบรนด์บนเว็บไซต์',
          bullets: [
            'ดีไซน์โทนมืดหรูหราที่เข้ากับภาพลักษณ์ไฟน์ไดนิ่ง',
            'แกลเลอรีภาพอาหารและบรรยากาศร้านความละเอียดสูง',
            'เรื่องราวของเชฟและความเป็นมาของร้าน',
          ],
        },
        {
          title: 'การจองโต๊ะที่ใช้งานง่าย',
          bullets: [
            'ระบบจองโต๊ะออนไลน์เชื่อมต่อโดยตรงจากเว็บไซต์',
            'แสดงเมนู Tasting Menu และไวน์ลิสต์อย่างเป็นระเบียบ',
            'รองรับสองภาษา ไทยและอังกฤษ',
          ],
        },
        {
          title: 'สนับสนุนด้านการตลาด',
          bullets: [
            'วางแนวทางคอนเทนต์สำหรับโซเชียลมีเดีย',
            'จัดระเบียบภาพถ่ายให้พร้อมใช้ในสื่อโฆษณา',
            'โครงสร้างเว็บไซต์ที่เอื้อต่อการทำ SEO ในระยะยาว',
            'แชทบอท AI ตอบคำถามเมนูและช่วยแนะนำการจองโต๊ะได้ตลอด 24 ชั่วโมง',
          ],
        },
      ],
      backLabel: 'กลับไปหน้า Case Studies',
      servicesLabel: 'บริการที่ให้',
    },
    en: {
      badge: 'F&B',
      client: 'Savelberg Restaurant',
      title: 'Savelberg — Michelin-Starred Restaurant Website',
      desc: 'Designed and built a new website for a Michelin-starred French fine-dining restaurant, with content direction and digital marketing support to carry the brand\'s refinement online for both Thai and international guests.',
      duration: '3 months',
      servicesProvided: ['UX/UI Design', 'Web Development', 'Photography & Content Direction', 'Digital Marketing Support', 'AI Concierge Chatbot'],
      heroImage: '/images/case-studies/savelberg/cover.png',
      challengeHeading: 'The Challenge',
      challenge: "Savelberg is a Michelin-starred French restaurant led by Chef Henk Savelberg. The brand needed a website that matched its fine-dining standard — elegant enough to reflect the quality of the food and service, yet simple enough for both local and international guests to browse the menu, reserve a table, and feel the premium experience from the very first scroll.",
      solutionHeading: 'Our Solution',
      solution: "We designed a new website in a dark, refined palette that lets the food and ambience photography carry the page. The structure puts the menu, reservations, and the chef's story within a few clicks, built bilingual for Thai and English, and paired with a content direction for the restaurant's marketing channels.",
      overviewHeading: 'Project Overview',
      overview: "Savelberg sits in Bangkok's Yan Nawa district, serving contemporary French cuisine with Mediterranean influences from a chef who has earned Michelin recognition across five previous restaurants. The core challenge was making the website communicate that standard the moment it loads.",
      approachHeading: 'Our Approach',
      approach: [
        { title: 'Brand Immersion', desc: "Spent time understanding the restaurant's ambience, service style, and the chef's story to translate into visual tone and website copy." },
        { title: 'UX/UI Design', desc: 'Structured the site so the menu, reservations, and photo gallery are easy to reach, with generous whitespace that reads as fine dining.' },
        { title: 'Development & Booking Integration', desc: 'Built a fast, bilingual website connected to an online table-reservation flow.' },
        { title: 'Marketing Content Direction', desc: "Planned a content direction for photography and copy across the restaurant's social channels." },
      ],
      keyFeaturesHeading: 'Key Features',
      keyFeatures: [
        {
          title: 'Brand Experience Online',
          bullets: [
            'Dark, elegant design language matching the fine-dining brand',
            'High-resolution gallery of dishes and restaurant ambience',
            "The chef's story and the restaurant's background",
          ],
        },
        {
          title: 'Effortless Reservations',
          bullets: [
            'Online table reservation connected directly from the website',
            'Tasting menu and wine list presented clearly',
            'Fully bilingual in Thai and English',
          ],
        },
        {
          title: 'Marketing Support',
          bullets: [
            'Content direction for social media channels',
            'Photography organized and ready for ad placements',
            'Site structure built with long-term SEO in mind',
          ],
        },
      ],
      backLabel: 'Back to Case Studies',
      servicesLabel: 'Services Provided',
    },
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug)
}
