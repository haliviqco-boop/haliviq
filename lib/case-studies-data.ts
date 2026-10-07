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
      desc: 'ออกแบบและพัฒนาเว็บไซต์ให้ร้านอาหารฝรั่งเศสระดับมิชลินสตาร์ พร้อมวางแผนคอนเทนต์และการตลาดดิจิทัล เพื่อให้ลูกค้าทั้งชาวไทยและต่างชาติเห็นความใส่ใจในรายละเอียดของร้าน',
      duration: '3 เดือน',
      servicesProvided: ['ออกแบบเว็บไซต์ (UX/UI)', 'พัฒนาเว็บไซต์', 'ดูแลทิศทางภาพถ่ายและคอนเทนต์', 'ช่วยวางแผนการตลาดดิจิทัล', 'แชทบอท AI ตอบคำถามลูกค้า'],
      heroImage: '/images/case-studies/savelberg/cover.jpg',
      challengeHeading: 'โจทย์ของโปรเจกต์',
      challenge: 'Savelberg เป็นร้านอาหารฝรั่งเศสระดับมิชลินสตาร์ของเชฟ Henk Savelberg ร้านต้องการเว็บไซต์ที่ดูได้มาตรฐานระดับโลกสมกับเป็นร้านไฟน์ไดนิ่ง และต้องใช้งานง่ายด้วย ให้ทั้งคนไทยและนักท่องเที่ยวดูเมนู จองโต๊ะ และรู้สึกถึงความพรีเมียมได้ตั้งแต่หน้าแรก',
      solutionHeading: 'แนวทางที่เราทำ',
      solution: 'เราออกแบบเว็บไซต์ใหม่ทั้งหมดด้วยโทนมืดหรูหรา ให้ภาพอาหารและบรรยากาศร้านโดดเด่น จัดโครงสร้างให้เปิดดูเมนู จองโต๊ะ และอ่านเรื่องราวของเชฟได้ในไม่กี่คลิก รองรับสองภาษา (ไทย/อังกฤษ) และวางแนวทางคอนเทนต์สำหรับการตลาดออนไลน์ให้เข้ากับงานออกแบบ',
      overviewHeading: 'ภาพรวมโปรเจกต์',
      overview: 'Savelberg ตั้งอยู่ย่านยานนาวา กรุงเทพฯ เสิร์ฟอาหารฝรั่งเศสร่วมสมัยที่มีกลิ่นอายเมดิเตอร์เรเนียน โดยเชฟที่เคยได้รับดาวมิชลินมาแล้วถึง 5 ร้าน โจทย์หลักคือทำให้เว็บไซต์สื่อมาตรฐานนี้ได้ทันทีที่เปิดเข้ามา',
      approachHeading: 'กระบวนการทำงาน',
      approach: [
        { title: 'ทำความเข้าใจแบรนด์', desc: 'ไปดูร้านจริง เก็บข้อมูลบรรยากาศ สไตล์การเสิร์ฟ และตัวตนของเชฟ แล้วแปลงเป็นโทนภาพและข้อความบนเว็บไซต์' },
        { title: 'ออกแบบ UX/UI', desc: 'จัดหน้าเว็บให้เปิดดูเมนู จองโต๊ะ และแกลเลอรีภาพได้ง่าย ใช้ภาพใหญ่และเว้นพื้นที่ว่างแบบร้านไฟน์ไดนิ่ง' },
        { title: 'พัฒนาและเชื่อมระบบจอง', desc: 'พัฒนาเว็บไซต์ให้โหลดเร็ว รองรับสองภาษา และเชื่อมกับช่องทางจองโต๊ะออนไลน์' },
        { title: 'วางแผนคอนเทนต์การตลาด', desc: 'ช่วยวางแนวทางภาพและข้อความสำหรับโซเชียลมีเดีย ให้ตรงกับกลุ่มลูกค้าไฟน์ไดนิ่ง' },
      ],
      keyFeaturesHeading: 'ฟีเจอร์เด่น',
      keyFeatures: [
        {
          title: 'แบรนด์ที่สื่อผ่านเว็บไซต์',
          bullets: [
            'ดีไซน์โทนมืดหรูหรา เข้ากับภาพลักษณ์ร้านไฟน์ไดนิ่ง',
            'แกลเลอรีภาพอาหารและบรรยากาศร้านความละเอียดสูง',
            'เรื่องราวของเชฟและความเป็นมาของร้าน',
          ],
        },
        {
          title: 'การจองโต๊ะที่ใช้งานง่าย',
          bullets: [
            'จองโต๊ะออนไลน์ได้จากเว็บไซต์โดยตรง',
            'แสดง Tasting Menu และไวน์ลิสต์ให้อ่านง่าย',
            'รองรับสองภาษา ไทยและอังกฤษ',
          ],
        },
        {
          title: 'ช่วยด้านการตลาด',
          bullets: [
            'วางแนวทางคอนเทนต์สำหรับโซเชียลมีเดีย',
            'จัดภาพถ่ายให้พร้อมใช้ในงานโฆษณา',
            'โครงสร้างเว็บไซต์ที่เหมาะกับการทำ SEO ต่อในระยะยาว',
            'แชทบอท AI ตอบคำถามเรื่องเมนูและช่วยแนะนำการจองโต๊ะได้ตลอด 24 ชั่วโมง',
          ],
        },
      ],
      backLabel: 'กลับไปหน้าผลงาน',
      servicesLabel: 'บริการที่เราทำ',
    },
    en: {
      badge: 'F&B',
      client: 'Savelberg Restaurant',
      title: 'Savelberg — Michelin-Starred Restaurant Website',
      desc: 'Designed and built a new website for a Michelin-starred French fine-dining restaurant, with content direction and digital marketing support to carry the brand\'s refinement online for both Thai and international guests.',
      duration: '3 months',
      servicesProvided: ['UX/UI Design', 'Web Development', 'Photography & Content Direction', 'Digital Marketing Support', 'AI Concierge Chatbot'],
      heroImage: '/images/case-studies/savelberg/cover.jpg',
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
  {
    slug: 'ovo',
    industryTag: 'F&B',
    result: 'เว็บไซต์ใหม่',
    year: '2025',
    th: {
      badge: 'F&B',
      client: 'OVO',
      title: 'เว็บไซต์แบรนด์ไอศกรีม OVO',
      desc: 'ออกแบบและพัฒนาเว็บไซต์ให้แบรนด์ไอศกรีมและของหวาน ใช้ภาพถ่ายโทนอบอุ่นเป็นกันเอง มีระบบสั่งซื้อออนไลน์ และคอนเทนต์สำหรับโซเชียลมีเดีย',
      duration: '2 เดือน',
      servicesProvided: ['ออกแบบเว็บไซต์ (UX/UI)', 'พัฒนาเว็บไซต์', 'ดูแลทิศทางภาพถ่ายและคอนเทนต์', 'ช่วยวางแผนการตลาดดิจิทัล'],
      heroImage: '/images/case-studies/ovo/cover.jpg',
      challengeHeading: 'โจทย์ของโปรเจกต์',
      challenge: 'OVO เป็นแบรนด์ไอศกรีมและของหวานที่มีภาพลักษณ์อบอุ่นเป็นกันเอง แต่ยังไม่มีเว็บไซต์ที่บอกตัวตนของแบรนด์ได้ครบ ลูกค้าจึงดูเมนู สั่งซื้อ หรือหาข้อมูลร้านทางออนไลน์ได้ไม่สะดวก',
      solutionHeading: 'แนวทางที่เราทำ',
      solution: 'เราออกแบบเว็บไซต์โทนสว่างอบอุ่น ให้ภาพสินค้าเป็นพระเอก มีระบบสั่งซื้อออนไลน์ที่ใช้งานง่าย และวางแนวทางคอนเทนต์บนโซเชียลมีเดียให้เข้ากับโทนแบรนด์',
      overviewHeading: 'ภาพรวมโปรเจกต์',
      overview: 'OVO ต้องการเว็บไซต์ที่เป็นหน้าร้านออนไลน์หลัก ให้ลูกค้าดูเมนู สั่งซื้อ และรู้สึกถึงความเป็นกันเองของแบรนด์ได้ตั้งแต่เข้ามาครั้งแรก',
      approachHeading: 'กระบวนการทำงาน',
      approach: [
        { title: 'ทำความเข้าใจแบรนด์', desc: 'เก็บข้อมูลโทนภาพ สไตล์การสื่อสาร และกลุ่มลูกค้าของแบรนด์' },
        { title: 'ออกแบบ UX/UI', desc: 'จัดหน้าเว็บให้ดูเมนูและสั่งซื้อได้ง่าย เน้นภาพสินค้าให้ชัด' },
        { title: 'พัฒนาและเชื่อมระบบสั่งซื้อ', desc: 'พัฒนาเว็บไซต์ให้โหลดเร็ว และเชื่อมกับช่องทางสั่งซื้อออนไลน์' },
        { title: 'วางแผนคอนเทนต์การตลาด', desc: 'วางแนวทางภาพและข้อความสำหรับโซเชียลมีเดีย' },
      ],
      keyFeaturesHeading: 'ฟีเจอร์เด่น',
      keyFeatures: [
        { title: 'แบรนด์ที่สื่อผ่านเว็บไซต์', bullets: ['ดีไซน์โทนสว่างอบอุ่น เข้ากับภาพลักษณ์แบรนด์', 'แกลเลอรีภาพสินค้าความละเอียดสูง', 'เรื่องราวของแบรนด์'] },
        { title: 'สั่งซื้อออนไลน์สะดวก', bullets: ['สั่งซื้อออนไลน์ได้จากเว็บไซต์โดยตรง', 'แสดงเมนูสินค้าและราคาให้ดูง่าย', 'ใช้งานบนมือถือได้ครบ'] },
        { title: 'ช่วยด้านการตลาด', bullets: ['วางแนวทางคอนเทนต์สำหรับโซเชียลมีเดีย', 'จัดภาพถ่ายให้พร้อมใช้ในงานโฆษณา', 'โครงสร้างเว็บไซต์ที่เหมาะกับการทำ SEO ต่อในระยะยาว'] },
      ],
      backLabel: 'กลับไปหน้าผลงาน',
      servicesLabel: 'บริการที่เราทำ',
    },
    en: {
      badge: 'F&B',
      client: 'OVO',
      title: 'OVO — Ice Cream Brand Website',
      desc: "Designed and built a website for an ice cream and dessert brand, with warm, approachable photography, an online ordering flow, and social media content direction.",
      duration: '2 months',
      servicesProvided: ['UX/UI Design', 'Web Development', 'Photography & Content Direction', 'Digital Marketing Support'],
      heroImage: '/images/case-studies/ovo/cover.jpg',
      challengeHeading: 'The Challenge',
      challenge: "OVO is an ice cream and dessert brand with a warm, approachable identity, but had no website that carried that identity online. Customers couldn't browse the menu, order, or find the shop's information through any online channel.",
      solutionHeading: 'Our Solution',
      solution: "We designed a bright, warm website that lets product photography lead, built an easy online ordering flow, and planned a content direction matching the brand's tone across social channels.",
      overviewHeading: 'Project Overview',
      overview: "OVO needed its website to work as a primary online storefront — letting customers browse the menu, order, and feel the brand's warmth from the first visit.",
      approachHeading: 'Our Approach',
      approach: [
        { title: 'Brand Immersion', desc: "Gathered the brand's visual tone, communication style, and target audience." },
        { title: 'UX/UI Design', desc: 'Structured the site so the menu and ordering flow are easy to reach, with clear product photography.' },
        { title: 'Development & Ordering Integration', desc: 'Built a fast website connected to an online ordering flow.' },
        { title: 'Marketing Content Direction', desc: 'Planned a content direction for photography and copy across social channels.' },
      ],
      keyFeaturesHeading: 'Key Features',
      keyFeatures: [
        { title: 'Brand Experience Online', bullets: ['Bright, warm design language matching the brand', 'High-resolution gallery of products', "The brand's story and background"] },
        { title: 'Effortless Online Ordering', bullets: ['Online ordering connected directly from the website', 'Menu and pricing presented clearly', 'Fully responsive on mobile'] },
        { title: 'Marketing Support', bullets: ['Content direction for social media channels', 'Photography organized and ready for ad placements', 'Site structure built with long-term SEO in mind'] },
      ],
      backLabel: 'Back to Case Studies',
      servicesLabel: 'Services Provided',
    },
  },
  {
    slug: 'base',
    industryTag: 'Fitness & Wellness',
    result: 'เว็บไซต์ใหม่',
    year: '2025',
    th: {
      badge: 'Fitness & Wellness',
      client: 'BASE',
      title: 'เว็บไซต์สตูดิโอฟิตเนส BASE',
      desc: 'ออกแบบและพัฒนาเว็บไซต์ให้สตูดิโอฟิตเนสและเวลเนส มีระบบจองคลาสออนไลน์และแนะนำเทรนเนอร์ ให้สมาชิกใหม่ตัดสินใจสมัครได้ง่ายขึ้น',
      duration: '2 เดือน',
      servicesProvided: ['ออกแบบเว็บไซต์ (UX/UI)', 'พัฒนาเว็บไซต์', 'ระบบจองคลาสออนไลน์', 'ดูแลทิศทางภาพถ่ายและคอนเทนต์'],
      heroImage: '/images/case-studies/base/cover.jpg',
      challengeHeading: 'โจทย์ของโปรเจกต์',
      challenge: 'BASE เป็นสตูดิโอฟิตเนสที่ดูแลสุขภาพแบบองค์รวม มีทีมเทรนเนอร์และอุปกรณ์ทันสมัย แต่เว็บไซต์เดิมไม่ดูเป็นมืออาชีพ และลูกค้าใหม่จองคลาสทดลองไม่สะดวก',
      solutionHeading: 'แนวทางที่เราทำ',
      solution: 'เราออกแบบเว็บไซต์โทนมืดที่ดูทันสมัย เน้นภาพเทรนเนอร์และบรรยากาศสตูดิโอ มีระบบจองคลาสออนไลน์ที่ใช้งานง่าย ให้ลูกค้าใหม่ตัดสินใจสมัครได้เร็วขึ้น',
      overviewHeading: 'ภาพรวมโปรเจกต์',
      overview: 'BASE ต้องการเว็บไซต์ที่แสดงความเป็นมืออาชีพของทีมเทรนเนอร์ และทำให้ลูกค้าใหม่จองคลาสทดลองได้ง่ายขึ้น',
      approachHeading: 'กระบวนการทำงาน',
      approach: [
        { title: 'ทำความเข้าใจแบรนด์', desc: 'เก็บข้อมูลบรรยากาศสตูดิโอ ทีมเทรนเนอร์ และกลุ่มลูกค้าเป้าหมาย' },
        { title: 'ออกแบบ UX/UI', desc: 'จัดหน้าเว็บให้ดูคลาสและเทรนเนอร์ได้ง่าย และเว้นพื้นที่สำหรับภาพเคลื่อนไหว' },
        { title: 'พัฒนาและเชื่อมระบบจอง', desc: 'พัฒนาเว็บไซต์ให้โหลดเร็ว และเชื่อมกับระบบจองคลาสออนไลน์' },
        { title: 'วางแผนคอนเทนต์', desc: 'วางแนวทางภาพและข้อความสำหรับโซเชียลมีเดีย' },
      ],
      keyFeaturesHeading: 'ฟีเจอร์เด่น',
      keyFeatures: [
        { title: 'แบรนด์ที่สื่อผ่านเว็บไซต์', bullets: ['ดีไซน์โทนมืดทันสมัย เข้ากับภาพลักษณ์ฟิตเนส', 'แกลเลอรีภาพเทรนเนอร์และอุปกรณ์', 'โปรไฟล์เทรนเนอร์แต่ละคน'] },
        { title: 'จองคลาสที่ใช้งานง่าย', bullets: ['จองคลาสออนไลน์ได้จากเว็บไซต์โดยตรง', 'แสดงตารางคลาสและความพร้อมของเทรนเนอร์', 'ใช้งานบนมือถือได้ครบ'] },
        { title: 'ช่วยด้านการตลาด', bullets: ['วางแนวทางคอนเทนต์สำหรับโซเชียลมีเดีย', 'จัดภาพถ่ายให้พร้อมใช้ในงานโฆษณา', 'โครงสร้างเว็บไซต์ที่เหมาะกับการทำ SEO ต่อในระยะยาว'] },
      ],
      backLabel: 'กลับไปหน้าผลงาน',
      servicesLabel: 'บริการที่เราทำ',
    },
    en: {
      badge: 'Fitness & Wellness',
      client: 'BASE',
      title: 'BASE — Fitness Studio Website',
      desc: 'Designed and built a website for a fitness and wellness studio, with an online class-booking flow and trainer profiles to help new members decide and sign up faster.',
      duration: '2 months',
      servicesProvided: ['UX/UI Design', 'Web Development', 'Class Booking System', 'Photography & Content Direction'],
      heroImage: '/images/case-studies/base/cover.jpg',
      challengeHeading: 'The Challenge',
      challenge: "BASE is a fitness studio focused on holistic wellness, with a strong trainer team and modern equipment, but its old website couldn't communicate that professionalism and gave new customers no easy way to book a trial class.",
      solutionHeading: 'Our Solution',
      solution: "We designed a modern, dark-toned website that lets trainer and studio photography lead, with an easy online class-booking flow so new customers can sign up faster.",
      overviewHeading: 'Project Overview',
      overview: "BASE needed a website that communicated its trainer team's professionalism and removed friction from booking a trial class for new customers.",
      approachHeading: 'Our Approach',
      approach: [
        { title: 'Brand Immersion', desc: "Gathered the studio's ambience, trainer team, and target audience." },
        { title: 'UX/UI Design', desc: 'Structured the site so classes and trainers are easy to reach, with room for dynamic photography.' },
        { title: 'Development & Booking Integration', desc: 'Built a fast website connected to an online class-booking system.' },
        { title: 'Content Direction', desc: 'Planned a content direction for photography and copy across social channels.' },
      ],
      keyFeaturesHeading: 'Key Features',
      keyFeatures: [
        { title: 'Brand Experience Online', bullets: ['Modern, dark design language matching the fitness brand', 'Gallery of trainers and equipment', 'Individual trainer profiles'] },
        { title: 'Effortless Class Booking', bullets: ['Online class booking connected directly from the website', 'Class schedule and trainer availability shown clearly', 'Fully responsive on mobile'] },
        { title: 'Marketing Support', bullets: ['Content direction for social media channels', 'Photography organized and ready for ad placements', 'Site structure built with long-term SEO in mind'] },
      ],
      backLabel: 'Back to Case Studies',
      servicesLabel: 'Services Provided',
    },
  },
  {
    slug: 'blue-bear',
    industryTag: 'Apparel & Uniforms',
    result: 'เว็บไซต์ใหม่',
    year: '2025',
    th: {
      badge: 'Apparel & Uniforms',
      client: 'Blue Bear',
      title: 'เว็บไซต์ผู้ผลิตชุดยูนิฟอร์มทางการแพทย์ Blue Bear',
      desc: 'ออกแบบและพัฒนาเว็บไซต์ให้ผู้ผลิตชุดยูนิฟอร์มทางการแพทย์ มีแคตตาล็อกสินค้าและช่องทางติดต่อสั่งซื้อสำหรับลูกค้าองค์กร เช่น โรงพยาบาลและคลินิก',
      duration: '2 เดือน',
      servicesProvided: ['ออกแบบเว็บไซต์ (UX/UI)', 'พัฒนาเว็บไซต์', 'ระบบแคตตาล็อกสินค้า', 'ฟอร์มติดต่อสั่งซื้อแบบองค์กร (B2B)'],
      heroImage: '/images/case-studies/blue-bear/cover.jpg',
      challengeHeading: 'โจทย์ของโปรเจกต์',
      challenge: 'Blue Bear ผลิตชุดยูนิฟอร์มทางการแพทย์คุณภาพสูงให้โรงพยาบาลและคลินิก แต่ยังไม่มีเว็บไซต์ที่แสดงสินค้าและรับคำสั่งซื้อจากลูกค้าองค์กรอย่างเป็นระเบียบ',
      solutionHeading: 'แนวทางที่เราทำ',
      solution: 'เราออกแบบเว็บไซต์ที่ดูน่าเชื่อถือและเป็นมืออาชีพ มีแคตตาล็อกสินค้าแยกตามประเภท และฟอร์มติดต่อสั่งซื้อสำหรับลูกค้าองค์กรโดยเฉพาะ',
      overviewHeading: 'ภาพรวมโปรเจกต์',
      overview: 'Blue Bear ต้องการเว็บไซต์ที่ช่วยให้โรงพยาบาลและคลินิกค้นหาสินค้า เปรียบเทียบตัวเลือก และติดต่อสั่งซื้อได้สะดวกขึ้น',
      approachHeading: 'กระบวนการทำงาน',
      approach: [
        { title: 'ทำความเข้าใจธุรกิจ', desc: 'เก็บข้อมูลสินค้า กลุ่มลูกค้า และขั้นตอนการสั่งซื้อของลูกค้าองค์กร' },
        { title: 'ออกแบบ UX/UI', desc: 'จัดแคตตาล็อกให้ค้นหาและเปรียบเทียบสินค้าได้ง่าย' },
        { title: 'พัฒนาและเชื่อมฟอร์มสั่งซื้อ', desc: 'พัฒนาเว็บไซต์พร้อมฟอร์มติดต่อสั่งซื้อสำหรับลูกค้าองค์กร' },
        { title: 'วางแผนคอนเทนต์สินค้า', desc: 'จัดภาพและข้อมูลสินค้าให้ครบและน่าเชื่อถือ' },
      ],
      keyFeaturesHeading: 'ฟีเจอร์เด่น',
      keyFeatures: [
        { title: 'แคตตาล็อกสินค้าครบถ้วน', bullets: ['แยกหมวดหมู่สินค้าตามประเภทการใช้งาน', 'ภาพสินค้าความละเอียดสูง พร้อมรายละเอียดผ้าและขนาด', 'ค้นหาและกรองสินค้าได้สะดวก'] },
        { title: 'รองรับลูกค้าองค์กร (B2B)', bullets: ['ฟอร์มติดต่อสั่งซื้อสำหรับโรงพยาบาลและคลินิกโดยเฉพาะ', 'ระบบขอใบเสนอราคาสำหรับคำสั่งซื้อจำนวนมาก', 'ข้อมูลติดต่อฝ่ายขายที่เข้าถึงง่าย'] },
        { title: 'ความน่าเชื่อถือของแบรนด์', bullets: ['ดีไซน์ที่ดูเป็นมืออาชีพ เหมาะกับลูกค้าองค์กร', 'หน้าแนะนำมาตรฐานคุณภาพและขั้นตอนการผลิต', 'โครงสร้างเว็บไซต์ที่เหมาะกับการทำ SEO ต่อในระยะยาว'] },
      ],
      backLabel: 'กลับไปหน้าผลงาน',
      servicesLabel: 'บริการที่เราทำ',
    },
    en: {
      badge: 'Apparel & Uniforms',
      client: 'Blue Bear',
      title: 'Blue Bear — Medical Uniform Manufacturer Website',
      desc: 'Designed and built a website for a medical uniform manufacturer, with a product catalog and a B2B order-inquiry flow to serve hospital and clinic customers.',
      duration: '2 months',
      servicesProvided: ['UX/UI Design', 'Web Development', 'Product Catalog System', 'B2B Order Inquiry Forms'],
      heroImage: '/images/case-studies/blue-bear/cover.jpg',
      challengeHeading: 'The Challenge',
      challenge: "Blue Bear manufactures high-quality medical uniforms for hospitals and clinics, but had no website to showcase its products or take orders from institutional customers in an organized way.",
      solutionHeading: 'Our Solution',
      solution: "We designed a trustworthy, professional-looking website with a product catalog organized by category, and a dedicated order-inquiry flow for institutional customers.",
      overviewHeading: 'Project Overview',
      overview: "Blue Bear needed a website that let hospitals and clinics browse products, compare options, and reach out to order more easily.",
      approachHeading: 'Our Approach',
      approach: [
        { title: 'Business Immersion', desc: "Gathered the product line, customer base, and institutional ordering process." },
        { title: 'UX/UI Design', desc: 'Structured the product catalog so it is easy to browse and compare.' },
        { title: 'Development & Order Form Integration', desc: 'Built the website with an order-inquiry flow for institutional customers.' },
        { title: 'Product Content Direction', desc: 'Organized product photography and specs to read as complete and trustworthy.' },
      ],
      keyFeaturesHeading: 'Key Features',
      keyFeatures: [
        { title: 'Complete Product Catalog', bullets: ['Products organized by category and use case', 'High-resolution photos with fabric and size details', 'Easy search and filtering'] },
        { title: 'Built for B2B Customers', bullets: ['Dedicated order-inquiry form for hospitals and clinics', 'Quote request flow for bulk orders', 'Easy-to-reach sales contact information'] },
        { title: 'Brand Credibility', bullets: ['Professional design suited to institutional buyers', 'A page on quality standards and manufacturing process', 'Site structure built with long-term SEO in mind'] },
      ],
      backLabel: 'Back to Case Studies',
      servicesLabel: 'Services Provided',
    },
  },
  {
    slug: 'thai-metal-aluminium',
    industryTag: 'Manufacturing',
    result: 'เว็บไซต์ใหม่',
    year: '2025',
    th: {
      badge: 'Manufacturing',
      client: 'Thai Metal Aluminium',
      title: 'เว็บไซต์โรงงานผลิตชิ้นส่วนอะลูมิเนียม Thai Metal Aluminium',
      desc: 'ออกแบบและพัฒนาเว็บไซต์องค์กรให้โรงงานผลิตชิ้นส่วนโลหะและอะลูมิเนียมความแม่นยำสูง เพื่อแสดงความสามารถในการผลิตและมาตรฐานคุณภาพให้ลูกค้าอุตสาหกรรมเห็น',
      duration: '2 เดือน',
      servicesProvided: ['ออกแบบเว็บไซต์ (UX/UI)', 'พัฒนาเว็บไซต์', 'ดูแลทิศทางคอนเทนต์เชิงเทคนิค', 'SEO สำหรับลูกค้าอุตสาหกรรม'],
      heroImage: '/images/case-studies/thai-metal-aluminium/cover.jpg',
      challengeHeading: 'โจทย์ของโปรเจกต์',
      challenge: 'Thai Metal Aluminium เป็นโรงงานผลิตชิ้นส่วนโลหะและอะลูมิเนียมความแม่นยำสูง แต่เว็บไซต์เดิมทำให้ลูกค้าอุตสาหกรรมเห็นภาพเครื่องจักรและมาตรฐานคุณภาพได้ไม่ชัด',
      solutionHeading: 'แนวทางที่เราทำ',
      solution: 'เราออกแบบเว็บไซต์องค์กรที่ดูน่าเชื่อถือ แสดงขั้นตอนการผลิต เครื่องจักร และมาตรฐานคุณภาพอย่างเป็นระเบียบ และจัดคอนเทนต์ให้ลูกค้าอุตสาหกรรมค้นเจอได้ง่ายบน Google',
      overviewHeading: 'ภาพรวมโปรเจกต์',
      overview: 'Thai Metal Aluminium ต้องการเว็บไซต์ที่สร้างความน่าเชื่อถือกับลูกค้าอุตสาหกรรมรายใหม่ และอธิบายความสามารถด้านการผลิตได้ชัดเจน',
      approachHeading: 'กระบวนการทำงาน',
      approach: [
        { title: 'ทำความเข้าใจธุรกิจ', desc: 'เก็บข้อมูลขั้นตอนการผลิต เครื่องจักร และกลุ่มลูกค้าอุตสาหกรรม' },
        { title: 'ออกแบบ UX/UI', desc: 'จัดหน้าเว็บให้ดูความสามารถและมาตรฐานคุณภาพได้ง่าย' },
        { title: 'พัฒนาเว็บไซต์องค์กร', desc: 'พัฒนาเว็บไซต์ที่โหลดเร็วและดูน่าเชื่อถือสำหรับลูกค้า B2B' },
        { title: 'วางแผน SEO เชิงเทคนิค', desc: 'จัดโครงสร้างคอนเทนต์ให้ลูกค้าอุตสาหกรรมค้นเจอได้ง่าย' },
      ],
      keyFeaturesHeading: 'ฟีเจอร์เด่น',
      keyFeatures: [
        { title: 'แสดงความสามารถในการผลิต', bullets: ['แสดงเครื่องจักรและขั้นตอนการผลิตอย่างเป็นระเบียบ', 'ภาพถ่ายโรงงานและชิ้นงานความละเอียดสูง', 'หน้าแนะนำมาตรฐานคุณภาพและการรับรอง'] },
        { title: 'รองรับลูกค้าอุตสาหกรรม (B2B)', bullets: ['ฟอร์มติดต่อสอบถามสำหรับลูกค้าองค์กร', 'ข้อมูลติดต่อฝ่ายขายที่เข้าถึงง่าย', 'หน้าแสดงผลงานและลูกค้าอ้างอิง'] },
        { title: 'ความน่าเชื่อถือของแบรนด์', bullets: ['ดีไซน์ที่ดูเป็นมืออาชีพ เหมาะกับลูกค้าอุตสาหกรรม', 'โครงสร้างคอนเทนต์เชิงเทคนิคที่เข้าใจง่าย', 'โครงสร้างเว็บไซต์ที่เหมาะกับการทำ SEO ต่อในระยะยาว'] },
      ],
      backLabel: 'กลับไปหน้าผลงาน',
      servicesLabel: 'บริการที่เราทำ',
    },
    en: {
      badge: 'Manufacturing',
      client: 'Thai Metal Aluminium',
      title: 'Thai Metal Aluminium — Precision Manufacturing Website',
      desc: 'Designed and built a corporate website for a precision metal and aluminium parts manufacturer, presenting its manufacturing capabilities and quality standards to industrial customers.',
      duration: '2 months',
      servicesProvided: ['UX/UI Design', 'Web Development', 'Technical Content Direction', 'SEO for Industrial Customers'],
      heroImage: '/images/case-studies/thai-metal-aluminium/cover.jpg',
      challengeHeading: 'The Challenge',
      challenge: "Thai Metal Aluminium manufactures precision metal and aluminium parts, but its old website couldn't clearly communicate its machining capabilities and quality standards to industrial customers.",
      solutionHeading: 'Our Solution',
      solution: "We designed a trustworthy corporate website that presents the manufacturing process, machinery, and quality standards systematically, with content structured to be found by industrial customers searching online.",
      overviewHeading: 'Project Overview',
      overview: "Thai Metal Aluminium needed a website that built credibility with new industrial customers and clearly communicated its manufacturing capabilities.",
      approachHeading: 'Our Approach',
      approach: [
        { title: 'Business Immersion', desc: "Gathered the manufacturing process, machinery, and target industrial customer base." },
        { title: 'UX/UI Design', desc: 'Structured the site so capabilities and quality standards are easy to reach.' },
        { title: 'Corporate Website Development', desc: 'Built a fast, trustworthy website for B2B customers.' },
        { title: 'Technical SEO Planning', desc: 'Structured content to be found by industrial customers searching online.' },
      ],
      keyFeaturesHeading: 'Key Features',
      keyFeatures: [
        { title: 'Showcasing Manufacturing Capability', bullets: ['Machinery and manufacturing process presented systematically', 'High-resolution photos of the factory and parts', 'A page on quality standards and certifications'] },
        { title: 'Built for Industrial B2B Customers', bullets: ['Inquiry form for institutional customers', 'Easy-to-reach sales contact information', 'A page showcasing past work and reference clients'] },
        { title: 'Brand Credibility', bullets: ['Professional design suited to industrial buyers', 'Technical content structured to be easy to understand', 'Site structure built with long-term SEO in mind'] },
      ],
      backLabel: 'Back to Case Studies',
      servicesLabel: 'Services Provided',
    },
  },
  {
    slug: 'vera',
    industryTag: 'E-Commerce',
    result: 'เว็บไซต์ใหม่',
    year: '2025',
    th: {
      badge: 'E-Commerce',
      client: 'VERA',
      title: 'เว็บไซต์อีคอมเมิร์ซแบรนด์กระเป๋า VERA',
      desc: 'ออกแบบและพัฒนาเว็บไซต์อีคอมเมิร์ซให้แบรนด์กระเป๋าที่ผลิตและขายออนไลน์ มีระบบตะกร้าสินค้าและชำระเงิน เพื่อขายตรงถึงลูกค้าทั่วประเทศ',
      duration: '3 เดือน',
      servicesProvided: ['ออกแบบเว็บไซต์ (UX/UI)', 'พัฒนาเว็บไซต์อีคอมเมิร์ซ', 'ดูแลทิศทางภาพถ่ายสินค้า', 'ช่วยวางแผนการตลาดดิจิทัล'],
      heroImage: '/images/case-studies/vera/cover.jpg',
      challengeHeading: 'โจทย์ของโปรเจกต์',
      challenge: 'VERA เป็นแบรนด์กระเป๋าที่ผลิตเองและขายผ่านช่องทางออนไลน์เป็นหลัก ต้องการเว็บไซต์อีคอมเมิร์ซที่ดูพรีเมียมสมกับคุณภาพสินค้า มีตะกร้าสินค้าและระบบชำระเงินที่ใช้ง่าย จะได้ไม่ต้องพึ่งการขายผ่านมาร์เก็ตเพลสอย่างเดียว',
      solutionHeading: 'แนวทางที่เราทำ',
      solution: 'เราออกแบบเว็บไซต์อีคอมเมิร์ซโทนมินิมอลหรูหรา ให้ภาพถ่ายสินค้าเป็นจุดเด่น มีตะกร้าสินค้าและระบบชำระเงินครบในเว็บเดียว และวางแนวทางคอนเทนต์ให้เข้ากับภาพลักษณ์แบรนด์',
      overviewHeading: 'ภาพรวมโปรเจกต์',
      overview: 'VERA ต้องการเว็บไซต์ของแบรนด์เอง เพื่อขายตรงถึงลูกค้า พึ่งมาร์เก็ตเพลสให้น้อยลง และสร้างความสัมพันธ์กับลูกค้าในระยะยาว',
      approachHeading: 'กระบวนการทำงาน',
      approach: [
        { title: 'ทำความเข้าใจแบรนด์', desc: 'เก็บข้อมูลสินค้า โทนภาพ และกลุ่มลูกค้า' },
        { title: 'ออกแบบ UX/UI', desc: 'จัดหน้าร้านออนไลน์ให้เลือกซื้อและเช็คเอาต์ได้สะดวก' },
        { title: 'พัฒนาระบบอีคอมเมิร์ซ', desc: 'พัฒนาตะกร้าสินค้า ระบบชำระเงิน และระบบจัดการคำสั่งซื้อ' },
        { title: 'วางแผนคอนเทนต์การตลาด', desc: 'วางแนวทางภาพถ่ายสินค้าและคอนเทนต์สำหรับโซเชียลมีเดีย' },
      ],
      keyFeaturesHeading: 'ฟีเจอร์เด่น',
      keyFeatures: [
        { title: 'แบรนด์ที่สื่อผ่านเว็บไซต์', bullets: ['ดีไซน์มินิมอลหรูหรา เข้ากับภาพลักษณ์แบรนด์', 'ภาพถ่ายสินค้าความละเอียดสูงหลายมุมมอง', 'หน้าคอลเลกชันที่อัปเดตตามฤดูกาล'] },
        { title: 'ช้อปปิ้งและชำระเงินในที่เดียว', bullets: ['ตะกร้าสินค้าและเช็คเอาต์ในหน้าเดียว', 'ชำระเงินได้หลายช่องทาง', 'ระบบติดตามสถานะคำสั่งซื้อ'] },
        { title: 'ช่วยด้านการตลาด', bullets: ['วางแนวทางคอนเทนต์สำหรับโซเชียลมีเดีย', 'จัดภาพถ่ายให้พร้อมใช้ในงานโฆษณา', 'โครงสร้างเว็บไซต์ที่เหมาะกับการทำ SEO ต่อในระยะยาว'] },
      ],
      backLabel: 'กลับไปหน้าผลงาน',
      servicesLabel: 'บริการที่เราทำ',
    },
    en: {
      badge: 'E-Commerce',
      client: 'VERA',
      title: 'VERA — Bag Brand E-Commerce Website',
      desc: 'Designed and built an e-commerce website for a self-manufactured bag brand selling online, with a cart and checkout flow to sell directly to customers nationwide.',
      duration: '3 months',
      servicesProvided: ['UX/UI Design', 'E-Commerce Development', 'Product Photography Direction', 'Digital Marketing Support'],
      heroImage: '/images/case-studies/vera/cover.jpg',
      challengeHeading: 'The Challenge',
      challenge: "VERA is a self-manufactured bag brand selling mainly online. It needed an e-commerce website premium enough to match its product quality, with an easy cart and checkout flow, to reduce reliance on marketplace-only selling.",
      solutionHeading: 'Our Solution',
      solution: "We designed a minimal, premium e-commerce website that lets product photography lead, with a complete cart and checkout flow, and a content direction matching the brand's image.",
      overviewHeading: 'Project Overview',
      overview: "VERA needed its own branded website to sell directly to customers, reduce marketplace dependency, and build long-term customer relationships.",
      approachHeading: 'Our Approach',
      approach: [
        { title: 'Brand Immersion', desc: "Gathered the product line, visual tone, and target audience." },
        { title: 'UX/UI Design', desc: 'Structured the storefront so browsing and checkout flow smoothly.' },
        { title: 'E-Commerce Development', desc: 'Built the cart, checkout, and order management system.' },
        { title: 'Marketing Content Direction', desc: 'Planned product photography and content direction for social channels.' },
      ],
      keyFeaturesHeading: 'Key Features',
      keyFeatures: [
        { title: 'Brand Experience Online', bullets: ['Minimal, premium design language matching the brand', 'High-resolution multi-angle product photography', 'A collections page updated by season'] },
        { title: 'Complete Shopping & Checkout', bullets: ['Single-page cart and checkout flow', 'Multiple payment methods supported', 'Order status tracking'] },
        { title: 'Marketing Support', bullets: ['Content direction for social media channels', 'Photography organized and ready for ad placements', 'Site structure built with long-term SEO in mind'] },
      ],
      backLabel: 'Back to Case Studies',
      servicesLabel: 'Services Provided',
    },
  },
  {
    slug: 'nfi',
    industryTag: 'Government & Public Sector',
    result: 'เว็บไซต์ใหม่',
    year: '2025',
    th: {
      badge: 'Government & Public Sector',
      client: 'NFI สถาบันอาหาร',
      title: 'เว็บไซต์สถาบันอาหาร กระทรวงอุตสาหกรรม',
      desc: 'ออกแบบและพัฒนาเว็บไซต์ให้สถาบันอาหาร หน่วยงานวิจัยและทดสอบคุณภาพอาหารภายใต้กระทรวงอุตสาหกรรม เพื่อให้ผู้ประกอบการดูบริการห้องปฏิบัติการและงานวิจัยได้ง่าย',
      duration: '3 เดือน',
      servicesProvided: ['ออกแบบเว็บไซต์ (UX/UI)', 'พัฒนาเว็บไซต์', 'ระบบค้นหาบริการห้องปฏิบัติการ', 'จัดคอนเทนต์งานวิจัย'],
      heroImage: '/images/case-studies/nfi/cover.jpg',
      challengeHeading: 'โจทย์ของโปรเจกต์',
      challenge: 'สถาบันอาหารมีบริการห้องปฏิบัติการและงานวิจัยหลายสาขา แต่เว็บไซต์เดิมหาข้อมูลยาก ผู้ประกอบการจึงค้นหาบริการที่ต้องการไม่สะดวก',
      solutionHeading: 'แนวทางที่เราทำ',
      solution: 'ออกแบบเว็บไซต์ใหม่ให้แบ่งหมวดหมู่บริการห้องปฏิบัติการและงานวิจัยเป็นระเบียบ พร้อมระบบค้นหาที่ช่วยให้ผู้ประกอบการเจอบริการที่ต้องการได้เร็ว',
      overviewHeading: 'ภาพรวมโปรเจกต์',
      overview: 'โปรเจกต์นี้ช่วยให้หน่วยงานรัฐสื่อสารได้ง่ายและทันสมัยขึ้น ทั้งกับผู้ประกอบการและนักวิจัย',
      approachHeading: 'แนวทางที่เราทำ',
      approach: [
        { title: 'ทำความเข้าใจหน่วยงาน', desc: 'เก็บข้อมูลบริการ ห้องปฏิบัติการ และกลุ่มผู้ใช้หลัก' },
        { title: 'ออกแบบ UX/UI', desc: 'จัดหน้าเว็บให้ค้นหาบริการและงานวิจัยได้ง่าย' },
        { title: 'พัฒนาเว็บไซต์', desc: 'พัฒนาเว็บไซต์ที่โหลดเร็ว และใช้งานได้ดีกับผู้ประกอบการหลายกลุ่ม' },
        { title: 'จัดคอนเทนต์', desc: 'จัดข้อมูลบริการและงานวิจัยให้ครบและค้นหาง่าย' },
      ],
      keyFeaturesHeading: 'ฟีเจอร์เด่น',
      keyFeatures: [
        { title: 'บริการห้องปฏิบัติการครบถ้วน', bullets: ['แยกหมวดหมู่บริการตามประเภทการทดสอบ', 'ระบบค้นหาบริการที่ใช้งานง่าย', 'ข้อมูลขั้นตอนและระยะเวลาการให้บริการชัดเจน'] },
        { title: 'เข้าถึงงานวิจัยง่าย', bullets: ['คลังข้อมูลงานวิจัยที่ค้นหาได้สะดวก', 'จัดหมวดหมู่ตามสาขาการวิจัย', 'เอกสารดาวน์โหลดพร้อมใช้งาน'] },
        { title: 'ความน่าเชื่อถือของหน่วยงาน', bullets: ['ดีไซน์ที่ดูเป็นหน่วยงานรัฐที่น่าเชื่อถือ', 'ข้อมูลติดต่อและช่องทางสอบถามที่เข้าถึงง่าย', 'โครงสร้างเว็บไซต์ที่เหมาะกับการทำ SEO ต่อในระยะยาว'] },
      ],
      backLabel: 'กลับไปหน้าผลงาน',
      servicesLabel: 'บริการที่เราทำ',
    },
    en: {
      badge: 'Government & Public Sector',
      client: 'NFI – National Food Institute',
      title: 'National Food Institute Website',
      desc: "Designed and built a website for the National Food Institute, a food research and testing body under Thailand's Ministry of Industry, to make its lab services and research easier for businesses to find and understand.",
      duration: '3 months',
      servicesProvided: ['UX/UI Design', 'Web Development', 'Lab Service Search System', 'Research Content Organization'],
      heroImage: '/images/case-studies/nfi/cover.jpg',
      challengeHeading: 'The Challenge',
      challenge: "The institute offers a wide range of lab and research services, but its old website made it hard for businesses to find the specific service they needed.",
      solutionHeading: 'Our Solution',
      solution: 'Redesigned the website to organize lab services and research into clear categories, with a search system that helps businesses find what they need quickly.',
      overviewHeading: 'Project Overview',
      overview: 'The project set out to modernize how a public institution communicates, making it accessible to both businesses and researchers.',
      approachHeading: 'Our Approach',
      approach: [
        { title: 'Institutional Immersion', desc: "Gathered the institute's service structure, lab capabilities, and core user groups." },
        { title: 'UX/UI Design', desc: 'Structured the site so services and research are easy to search and reach.' },
        { title: 'Web Development', desc: 'Built a fast website that serves a wide range of business users.' },
        { title: 'Content Organization', desc: 'Organized service and research content to be complete and easy to search.' },
      ],
      keyFeaturesHeading: 'Key Features',
      keyFeatures: [
        { title: 'Complete Lab Services', bullets: ['Services organized by testing category', 'Easy-to-use service search', 'Clear process and turnaround information'] },
        { title: 'Accessible Research', bullets: ['Searchable research archive', 'Organized by research field', 'Downloadable documents ready to use'] },
        { title: 'Institutional Credibility', bullets: ['Design that reads as a trustworthy public institution', 'Easy-to-reach contact and inquiry channels', 'Site structure built with long-term SEO in mind'] },
      ],
      backLabel: 'Back to Case Studies',
      servicesLabel: 'Services Provided',
    },
  },
  {
    slug: 'mbk',
    industryTag: 'Retail & Shopping Mall',
    result: 'แอปมือถือใหม่',
    year: '2025',
    th: {
      badge: 'Retail & Shopping Mall',
      client: 'MBK Center',
      title: 'แอปมือถือศูนย์การค้า MBK',
      desc: 'ออกแบบและพัฒนาแอปมือถือให้ศูนย์การค้า MBK Center ให้ลูกค้าค้นหาร้านค้า โปรโมชัน และสิทธิพิเศษได้ในที่เดียว',
      duration: '4 เดือน',
      servicesProvided: ['ออกแบบ UX/UI', 'พัฒนาแอปมือถือ', 'ระบบค้นหาร้านค้าและโปรโมชัน', 'ระบบสมาชิกและสิทธิพิเศษ'],
      heroImage: '/images/case-studies/mbk/cover.jpg',
      challengeHeading: 'โจทย์ของโปรเจกต์',
      challenge: 'ศูนย์การค้าใหญ่มีร้านค้าและโปรโมชันมากมาย แต่ลูกค้ายังไม่มีช่องทางดิจิทัลที่รวมข้อมูลเหล่านี้ไว้ให้ค้นหาในที่เดียว',
      solutionHeading: 'แนวทางที่เราทำ',
      solution: 'พัฒนาแอปมือถือที่รวมร้านค้า โปรโมชัน และผังศูนย์การค้าไว้ในที่เดียว พร้อมระบบสมาชิกที่ให้สิทธิพิเศษกับลูกค้าประจำ',
      overviewHeading: 'ภาพรวมโปรเจกต์',
      overview: 'โปรเจกต์นี้ทำให้ลูกค้าศูนย์การค้าช็อปปิ้งได้สะดวกขึ้นผ่านช่องทางดิจิทัล',
      approachHeading: 'แนวทางที่เราทำ',
      approach: [
        { title: 'ทำความเข้าใจผู้ใช้งาน', desc: 'เก็บข้อมูลพฤติกรรมลูกค้าและผังร้านค้าภายในศูนย์การค้า' },
        { title: 'ออกแบบ UX/UI', desc: 'จัดโครงสร้างแอปให้ค้นหาร้านค้าและโปรโมชันได้ง่าย' },
        { title: 'พัฒนาแอปมือถือ', desc: 'พัฒนาแอปที่ใช้งานลื่น รองรับผู้ใช้จำนวนมาก' },
        { title: 'เชื่อมระบบสมาชิก', desc: 'เชื่อมระบบสมาชิกและสิทธิพิเศษเข้ากับแอป' },
      ],
      keyFeaturesHeading: 'ฟีเจอร์เด่น',
      keyFeatures: [
        { title: 'ค้นหาร้านค้าและโปรโมชันง่าย', bullets: ['ผังศูนย์การค้าที่กดดูได้', 'ค้นหาร้านค้าตามหมวดหมู่', 'รวบรวมโปรโมชันล่าสุดในที่เดียว'] },
        { title: 'สิทธิพิเศษสมาชิก', bullets: ['สะสมแต้มและแลกของรางวัล', 'แจ้งเตือนสิทธิพิเศษเฉพาะสมาชิก', 'ประวัติการใช้งานและสิทธิประโยชน์'] },
        { title: 'ประสบการณ์ใช้งานที่ลื่นไหล', bullets: ['ดีไซน์ทันสมัยใช้งานง่าย', 'รองรับผู้ใช้พร้อมกันจำนวนมาก', 'โครงสร้างระบบที่ต่อยอดได้ในอนาคต'] },
      ],
      backLabel: 'กลับไปหน้าผลงาน',
      servicesLabel: 'บริการที่เราทำ',
    },
    en: {
      badge: 'Retail & Shopping Mall',
      client: 'MBK Center',
      title: 'MBK Center Mobile App',
      desc: 'Designed and built a mobile app for MBK Center, letting shoppers find stores, promotions, and member perks all in one place.',
      duration: '4 months',
      servicesProvided: ['UX/UI Design', 'Mobile App Development', 'Store & Promotion Search System', 'Membership & Rewards System'],
      heroImage: '/images/case-studies/mbk/cover.jpg',
      challengeHeading: 'The Challenge',
      challenge: "A large shopping mall has hundreds of stores and promotions, but shoppers had no digital channel bringing it all together in one searchable place.",
      solutionHeading: 'Our Solution',
      solution: 'Built a mobile app bringing stores, promotions, and the mall directory into one place, with a membership system offering perks to regular shoppers.',
      overviewHeading: 'Project Overview',
      overview: "The project modernized the mall's shopping experience through a digital channel built around what shoppers actually look for.",
      approachHeading: 'Our Approach',
      approach: [
        { title: 'User Immersion', desc: 'Gathered shopper behavior and the structure of stores across the mall.' },
        { title: 'UX/UI Design', desc: 'Structured the app so stores and promotions are easy to find.' },
        { title: 'Mobile App Development', desc: 'Built a smooth app that scales to a large number of users.' },
        { title: 'Membership Integration', desc: 'Connected a membership and rewards system to the app.' },
      ],
      keyFeaturesHeading: 'Key Features',
      keyFeatures: [
        { title: 'Easy Store & Promotion Search', bullets: ['Interactive mall directory', 'Search stores by category', 'Latest promotions gathered in one place'] },
        { title: 'Member Perks', bullets: ['Earn and redeem points', 'Member-only perk notifications', 'Usage history and benefits'] },
        { title: 'Smooth User Experience', bullets: ['Modern, easy-to-use design', 'Scales to a high volume of concurrent users', 'System structure built to extend in the future'] },
      ],
      backLabel: 'Back to Case Studies',
      servicesLabel: 'Services Provided',
    },
  },
  {
    slug: 'ditp',
    industryTag: 'Government & Public Sector',
    result: 'แอปมือถือใหม่',
    year: '2025',
    th: {
      badge: 'Government & Public Sector',
      client: 'DITP กรมส่งเสริมการค้าระหว่างประเทศ',
      title: 'แอปมือถือส่งเสริมผู้ประกอบการส่งออก DITP',
      desc: 'ออกแบบและพัฒนาแอปมือถือให้กรมส่งเสริมการค้าระหว่างประเทศ ต่อยอดจากแอปที่เราเคยทำให้ เพื่อช่วยผู้ประกอบการไทยขยายตลาดส่งออก',
      duration: '4 เดือน',
      servicesProvided: ['ออกแบบ UX/UI', 'พัฒนาแอปมือถือ', 'ระบบข้อมูลตลาดส่งออก', 'เชื่อมต่อฐานข้อมูลผู้ประกอบการ'],
      heroImage: '/images/case-studies/ditp/cover.jpg',
      challengeHeading: 'โจทย์ของโปรเจกต์',
      challenge: 'กรมฯ ต้องการแอปมือถือเวอร์ชันใหม่ที่ต่อยอดจากของเดิม ให้ทันสมัยและตรงกับความต้องการของผู้ส่งออกไทยในปัจจุบัน',
      solutionHeading: 'แนวทางที่เราทำ',
      solution: 'ศึกษาแอปเดิมแล้วต่อยอดด้วยเทคโนโลยีและดีไซน์ใหม่ พร้อมปรับให้ดูข้อมูลตลาดส่งออกได้สะดวกขึ้น',
      overviewHeading: 'ภาพรวมโปรเจกต์',
      overview: 'โปรเจกต์นี้ทำให้เครื่องมือดิจิทัลของภาครัฐช่วยผู้ส่งออกไทยได้ดีขึ้น',
      approachHeading: 'แนวทางที่เราทำ',
      approach: [
        { title: 'ศึกษาแนวทางเดิม', desc: 'ศึกษาโครงสร้างและฟีเจอร์ของแอปเดิม เพื่อต่อยอดให้เหมาะสม' },
        { title: 'ออกแบบ UX/UI', desc: 'ออกแบบหน้าตาใหม่ให้ทันสมัยและใช้ง่ายขึ้นสำหรับผู้ประกอบการ' },
        { title: 'พัฒนาแอปมือถือ', desc: 'พัฒนาแอปด้วยเทคโนโลยีปัจจุบัน ให้ใช้งานได้เสถียร' },
        { title: 'เชื่อมฐานข้อมูล', desc: 'เชื่อมฐานข้อมูลผู้ประกอบการและข้อมูลตลาดส่งออก' },
      ],
      keyFeaturesHeading: 'ฟีเจอร์เด่น',
      keyFeatures: [
        { title: 'ข้อมูลตลาดส่งออกครบถ้วน', bullets: ['ข้อมูลตลาดและโอกาสส่งออกที่อัปเดตสม่ำเสมอ', 'ค้นหาข้อมูลตามประเภทสินค้าและประเทศเป้าหมาย', 'แจ้งเตือนกิจกรรมและงานแสดงสินค้า'] },
        { title: 'ช่วยผู้ประกอบการ', bullets: ['ฐานข้อมูลผู้ประกอบการที่เชื่อมถึงกัน', 'ช่องทางติดต่อหน่วยงานที่หาง่าย', 'คู่มือและเอกสารสำหรับผู้ส่งออก'] },
        { title: 'ประสบการณ์ใช้งานที่ทันสมัย', bullets: ['ดีไซน์ใหม่ใช้งานง่ายกว่าเดิม', 'ทำงานได้เสถียร', 'โครงสร้างระบบที่ต่อยอดได้ในอนาคต'] },
      ],
      backLabel: 'กลับไปหน้าผลงาน',
      servicesLabel: 'บริการที่เราทำ',
    },
    en: {
      badge: 'Government & Public Sector',
      client: 'DITP – Department of International Trade Promotion',
      title: 'DITP Export Promotion Mobile App',
      desc: "Designed and built a mobile app for Thailand's Department of International Trade Promotion, building on an app we had developed for them previously, to help Thai exporters grow into new markets.",
      duration: '4 months',
      servicesProvided: ['UX/UI Design', 'Mobile App Development', 'Export Market Data System', 'Business Database Integration'],
      heroImage: '/images/case-studies/ditp/cover.jpg',
      challengeHeading: 'The Challenge',
      challenge: "The department wanted a new version of its mobile app, built on the earlier version's direction but modernized to better serve today's Thai exporters.",
      solutionHeading: 'Our Solution',
      solution: 'Reviewed the earlier app and rebuilt it with current technology and design, improving how exporters access market data.',
      overviewHeading: 'Project Overview',
      overview: 'The project modernized a public-sector digital tool to more effectively support Thai exporters.',
      approachHeading: 'Our Approach',
      approach: [
        { title: 'Reviewing the Earlier App', desc: 'Studied the structure and features of the app we had built previously to extend it appropriately.' },
        { title: 'UX/UI Design', desc: 'Designed a modern, easier-to-use interface for exporters.' },
        { title: 'Mobile App Development', desc: 'Built the app with current technology for stable performance.' },
        { title: 'Database Integration', desc: 'Connected the business database and export market data.' },
      ],
      keyFeaturesHeading: 'Key Features',
      keyFeatures: [
        { title: 'Complete Export Market Data', bullets: ['Regularly updated market and export opportunity data', 'Search by product category and target country', 'Notifications for trade events and fairs'] },
        { title: 'Support for Exporters', bullets: ['Connected business database', 'Easy-to-reach department contact channels', 'Guides and documents for exporters'] },
        { title: 'Modernized Experience', bullets: ['New design, easier to use than before', 'Stable performance', 'System structure built to extend in the future'] },
      ],
      backLabel: 'Back to Case Studies',
      servicesLabel: 'Services Provided',
    },
  },
  {
    slug: 'sra-bua',
    industryTag: 'F&B',
    result: 'เว็บไซต์ใหม่',
    year: '2025',
    th: {
      badge: 'F&B',
      client: 'Sra Bua by Kiin Kiin',
      title: 'เว็บไซต์ร้านอาหารไฟน์ไดนิ่ง Sra Bua by Kiin Kiin',
      desc: 'ออกแบบและพัฒนาเว็บไซต์ให้ร้านอาหารไฟน์ไดนิ่งสไตล์ไทยโมเดิร์น มีระบบจองโต๊ะออนไลน์ เพื่อสื่อถึงบรรยากาศหรูหราและความประณีตของอาหาร ให้ลูกค้าทั้งชาวไทยและต่างชาติ',
      duration: '3 เดือน',
      servicesProvided: ['ออกแบบ UX/UI', 'พัฒนาเว็บไซต์', 'ระบบจองโต๊ะออนไลน์', 'ดูแลภาพถ่ายและคอนเทนต์'],
      heroImage: '/images/case-studies/sra-bua/cover.jpg',
      challengeHeading: 'โจทย์ของโปรเจกต์',
      challenge: 'ร้านอาหารไฟน์ไดนิ่งต้องการเว็บไซต์ที่สื่อความหรูหราและเอกลักษณ์ของอาหารไทยโมเดิร์นได้ครบ และมีช่องทางจองโต๊ะที่สะดวกสำหรับลูกค้า',
      solutionHeading: 'แนวทางที่เราทำ',
      solution: 'ออกแบบเว็บไซต์ให้ภาพและบรรยากาศของร้านโดดเด่น และเชื่อมระบบจองโต๊ะออนไลน์ที่ใช้ง่ายทั้งภาษาไทยและอังกฤษ',
      overviewHeading: 'ภาพรวมโปรเจกต์',
      overview: 'โปรเจกต์นี้ช่วยให้แบรนด์ร้านไฟน์ไดนิ่งดูทันสมัย และเข้าถึงลูกค้าทั้งในและต่างประเทศได้ดีขึ้น',
      approachHeading: 'แนวทางที่เราทำ',
      approach: [
        { title: 'ทำความเข้าใจแบรนด์', desc: 'ไปดูร้านจริง เก็บข้อมูลบรรยากาศ สไตล์อาหาร และตัวตนของเชฟ' },
        { title: 'ออกแบบ UX/UI', desc: 'จัดหน้าเว็บให้ดูเมนูและจองโต๊ะได้ง่าย เน้นภาพบรรยากาศหรูหรา' },
        { title: 'พัฒนาและเชื่อมระบบจอง', desc: 'พัฒนาเว็บไซต์สองภาษา และเชื่อมระบบจองโต๊ะออนไลน์' },
        { title: 'ดูแลภาพถ่ายคอนเทนต์', desc: 'วางแนวทางภาพถ่ายอาหารและบรรยากาศร้านให้ดูประณีต' },
      ],
      keyFeaturesHeading: 'ฟีเจอร์เด่น',
      keyFeatures: [
        { title: 'แบรนด์ที่สื่อผ่านเว็บไซต์', bullets: ['ภาพบรรยากาศร้านและอาหารความละเอียดสูง', 'ดีไซน์หรูหรา เข้ากับภาพลักษณ์ไฟน์ไดนิ่ง', 'เรื่องราวแนวคิดอาหารไทยโมเดิร์น'] },
        { title: 'การจองโต๊ะที่ใช้งานง่าย', bullets: ['จองโต๊ะออนไลน์ได้จากเว็บไซต์โดยตรง', 'รองรับสองภาษา สำหรับลูกค้าต่างชาติ', 'ใช้งานบนมือถือได้ครบ'] },
        { title: 'ความน่าเชื่อถือของแบรนด์', bullets: ['ดีไซน์ที่ดูเป็นร้านอาหารระดับพรีเมียม', 'หน้าแนะนำเชฟและแนวคิดอาหาร', 'โครงสร้างเว็บไซต์ที่เหมาะกับการทำ SEO ต่อในระยะยาว'] },
      ],
      backLabel: 'กลับไปหน้าผลงาน',
      servicesLabel: 'บริการที่เราทำ',
    },
    en: {
      badge: 'F&B',
      client: 'Sra Bua by Kiin Kiin',
      title: 'Sra Bua by Kiin Kiin — Fine-Dining Restaurant Website',
      desc: 'Designed and built a website for a modern Thai fine-dining restaurant, with an online table-reservation system, to carry the restaurant\'s refined atmosphere and cuisine to both Thai and international guests.',
      duration: '3 months',
      servicesProvided: ['UX/UI Design', 'Web Development', 'Online Reservation System', 'Photography & Content Direction'],
      heroImage: '/images/case-studies/sra-bua/cover.jpg',
      challengeHeading: 'The Challenge',
      challenge: 'The restaurant needed a website that fully captured its luxury atmosphere and modern Thai identity, with a reservation flow convenient for guests.',
      solutionHeading: 'Our Solution',
      solution: "Designed a website that puts the restaurant's imagery and atmosphere front and center, connected to an online table-reservation system in both Thai and English.",
      overviewHeading: 'Project Overview',
      overview: "The project modernized the restaurant's brand communication, reaching both local and international guests more effectively.",
      approachHeading: 'Our Approach',
      approach: [
        { title: 'Brand Immersion', desc: "Spent time understanding the restaurant's ambience, cuisine style, and the chef's story." },
        { title: 'UX/UI Design', desc: 'Structured the site so the menu and reservations are easy to reach, with the atmosphere front and center.' },
        { title: 'Development & Booking Integration', desc: 'Built a bilingual website connected to an online table-reservation flow.' },
        { title: 'Photography & Content Direction', desc: 'Directed photography of the food and ambience to read as refined and premium.' },
      ],
      keyFeaturesHeading: 'Key Features',
      keyFeatures: [
        { title: 'Brand Experience Online', bullets: ['High-resolution photography of the food and ambience', 'Luxury design language matching fine dining', "The story behind the restaurant's modern Thai concept"] },
        { title: 'Effortless Reservations', bullets: ['Online table reservation connected directly from the website', 'Bilingual for international guests', 'Fully responsive on mobile'] },
        { title: 'Brand Credibility', bullets: ['Design that reads as a premium dining destination', 'A page on the chef and culinary concept', 'Site structure built with long-term SEO in mind'] },
      ],
      backLabel: 'Back to Case Studies',
      servicesLabel: 'Services Provided',
    },
  },
  {
    slug: 'world-surprise-travel',
    industryTag: 'Travel & Tourism',
    result: 'เว็บไซต์ใหม่',
    year: '2025',
    th: {
      badge: 'Travel & Tourism',
      client: 'World Surprise Travel',
      title: 'เว็บไซต์ แบรนด์ และ AI CRM ให้บริษัททัวร์ World Surprise Travel',
      desc: 'ออกแบบและพัฒนาเว็บไซต์ ทำแบรนด์ใหม่ และสร้างระบบ AI CRM ให้บริษัทท่องเที่ยว เพื่อให้แบรนด์ดูดีขึ้นและดูแลลูกค้าทัวร์ได้เป็นระบบ',
      duration: '4 เดือน',
      servicesProvided: ['ออกแบบแบรนด์', 'ออกแบบ UX/UI', 'พัฒนาเว็บไซต์', 'พัฒนา AI CRM'],
      heroImage: '/images/case-studies/world-surprise-travel/cover.jpg',
      challengeHeading: 'โจทย์ของโปรเจกต์',
      challenge: 'บริษัททัวร์มีแพ็กเกจท่องเที่ยวหลากหลายและมีลูกค้าเพิ่มขึ้นเรื่อย ๆ แต่ยังไม่มีระบบจัดการลูกค้า และแบรนด์ยังดูไม่น่าเชื่อถือเท่าที่ควร',
      solutionHeading: 'แนวทางที่เราทำ',
      solution: 'ทำแบรนด์ใหม่ให้ทันสมัยและน่าเชื่อถือ พัฒนาเว็บไซต์ที่นำเสนอแพ็กเกจทัวร์ให้น่าสนใจ และสร้างระบบ AI CRM ที่ช่วยติดตามลูกค้าและแนะนำแพ็กเกจที่เหมาะให้อัตโนมัติ',
      overviewHeading: 'ภาพรวมโปรเจกต์',
      overview: 'โปรเจกต์นี้ทำตั้งแต่อัตลักษณ์แบรนด์ไปจนถึงเครื่องมือดิจิทัลที่ช่วยให้ทีมขายทัวร์ทำงานได้ดีขึ้น',
      approachHeading: 'แนวทางที่เราทำ',
      approach: [
        { title: 'ทำแบรนด์ใหม่', desc: 'ออกแบบโลโก้ โทนสี และแนวทางภาพลักษณ์ ให้ดูน่าเชื่อถือและสนุกแบบการเดินทาง' },
        { title: 'ออกแบบ UX/UI', desc: 'จัดเว็บไซต์ให้ค้นหาและเปรียบเทียบแพ็กเกจทัวร์ได้ง่าย' },
        { title: 'พัฒนาเว็บไซต์', desc: 'พัฒนาเว็บไซต์ที่โหลดเร็วและแสดงภาพทริปให้น่าสนใจ' },
        { title: 'พัฒนา AI CRM', desc: 'สร้างระบบ AI ที่ติดตามพฤติกรรมลูกค้าและแนะนำแพ็กเกจทัวร์ที่ตรงกับความสนใจ' },
      ],
      keyFeaturesHeading: 'ฟีเจอร์เด่น',
      keyFeatures: [
        { title: 'แบรนด์ที่น่าเชื่อถือ', bullets: ['อัตลักษณ์แบรนด์ใหม่ทันสมัย', 'โทนภาพที่ให้ความรู้สึกผจญภัยและสนุก', 'ใช้ได้เหมือนกันทั้งเว็บไซต์และสื่อการตลาด'] },
        { title: 'แสดงแพ็กเกจทัวร์ชัดเจน', bullets: ['แกลเลอรีภาพทริปความละเอียดสูง', 'เปรียบเทียบแพ็กเกจและราคาได้สะดวก', 'ใช้งานบนมือถือได้ครบ'] },
        { title: 'AI CRM ดูแลลูกค้า', bullets: ['ติดตามสถานะลูกค้าแต่ละรายอัตโนมัติ', 'แนะนำแพ็กเกจทัวร์ตามความสนใจด้วย AI', 'แดชบอร์ดสรุปยอดขายและลูกค้าแบบเรียลไทม์'] },
      ],
      backLabel: 'กลับไปหน้าผลงาน',
      servicesLabel: 'บริการที่เราทำ',
    },
    en: {
      badge: 'Travel & Tourism',
      client: 'World Surprise Travel',
      title: 'World Surprise Travel — Website, Branding & AI CRM',
      desc: 'Designed and built a website, a new brand identity, and an AI-powered CRM for a tour company, raising its brand image and making it easier to manage tour customers effectively.',
      duration: '4 months',
      servicesProvided: ['Brand Identity Design', 'UX/UI Design', 'Web Development', 'AI CRM Development'],
      heroImage: '/images/case-studies/world-surprise-travel/cover.jpg',
      challengeHeading: 'The Challenge',
      challenge: "The tour company had a wide range of travel packages and a growing customer base, but no real system for managing customers, and its brand didn't yet read as trustworthy.",
      solutionHeading: 'Our Solution',
      solution: 'Rebuilt the brand to feel modern and trustworthy, built a website that presents tour packages compellingly, and developed an AI CRM that tracks customers and recommends the right packages automatically.',
      overviewHeading: 'Project Overview',
      overview: "The project spanned from brand identity through to the digital tools that help the sales team work more effectively.",
      approachHeading: 'Our Approach',
      approach: [
        { title: 'Brand Identity', desc: 'Designed a logo, color palette, and visual direction that reads as trustworthy and adventurous.' },
        { title: 'UX/UI Design', desc: 'Structured the website so packages are easy to browse and compare.' },
        { title: 'Web Development', desc: 'Built a fast website that presents trip photography compellingly.' },
        { title: 'AI CRM Development', desc: 'Built an AI system that tracks customer behavior and recommends matching tour packages.' },
      ],
      keyFeaturesHeading: 'Key Features',
      keyFeatures: [
        { title: 'A Trustworthy Brand', bullets: ['New, modern brand identity', 'Visual tone that captures adventure and fun', 'Applied consistently across the website and marketing'] },
        { title: 'Clear Package Presentation', bullets: ['High-resolution trip photo galleries', 'Easy package and price comparison', 'Fully responsive on mobile'] },
        { title: 'AI-Powered CRM', bullets: ['Automatic tracking of each customer\'s status', 'AI-recommended packages based on interest', 'Real-time sales and customer dashboard'] },
      ],
      backLabel: 'Back to Case Studies',
      servicesLabel: 'Services Provided',
    },
  },
  {
    slug: 'awii-house',
    industryTag: 'Construction & Real Estate',
    result: 'เว็บไซต์ใหม่',
    year: '2025',
    th: {
      badge: 'Construction & Real Estate',
      client: 'Awii House',
      title: 'เว็บไซต์และระบบ CRM ให้บริษัทรับสร้างบ้าน Awii House',
      desc: 'ออกแบบและพัฒนาเว็บไซต์ให้บริษัทรับสร้างบ้าน พร้อมระบบ CRM ดูแลลูกค้าตั้งแต่เริ่มสนใจแบบบ้านจนปิดการขาย ช่วยให้ทีมขายติดตามลูกค้าได้เป็นระบบ',
      duration: '3 เดือน',
      servicesProvided: ['ออกแบบ UX/UI', 'พัฒนาเว็บไซต์', 'พัฒนาระบบ CRM', 'แกลเลอรีแบบบ้านและผลงาน'],
      heroImage: '/images/case-studies/awii-house/cover.jpg',
      challengeHeading: 'โจทย์ของโปรเจกต์',
      challenge: 'บริษัทรับสร้างบ้านมีแบบบ้านและผลงานมากมาย แต่ขาดเว็บไซต์ที่นำเสนอได้น่าสนใจ และไม่มีระบบติดตามลูกค้าที่มาปรึกษาเรื่องแบบบ้าน',
      solutionHeading: 'แนวทางที่เราทำ',
      solution: 'พัฒนาเว็บไซต์ที่แสดงแบบบ้านและผลงานอย่างเป็นระเบียบ และเชื่อมระบบ CRM ที่ช่วยติดตามลูกค้าตั้งแต่ขอคำปรึกษาจนถึงเซ็นสัญญา',
      overviewHeading: 'ภาพรวมโปรเจกต์',
      overview: 'โปรเจกต์นี้ให้บริษัทรับสร้างบ้านมีเครื่องมือดิจิทัลที่ใช้ได้ตั้งแต่โชว์ผลงานไปจนถึงดูแลลูกค้า',
      approachHeading: 'แนวทางที่เราทำ',
      approach: [
        { title: 'ทำความเข้าใจธุรกิจ', desc: 'เก็บข้อมูลแบบบ้าน ขั้นตอนการขาย และพฤติกรรมลูกค้าที่สนใจสร้างบ้าน' },
        { title: 'ออกแบบ UX/UI', desc: 'จัดเว็บไซต์ให้ค้นหาและเปรียบเทียบแบบบ้านและผลงานได้ง่าย' },
        { title: 'พัฒนาเว็บไซต์', desc: 'พัฒนาเว็บไซต์ที่แสดงภาพแบบบ้านและผลงานจริงให้สวยงาม' },
        { title: 'พัฒนาระบบ CRM', desc: 'เชื่อมระบบ CRM ติดตามสถานะลูกค้าตั้งแต่ขอคำปรึกษาจนถึงปิดการขาย' },
      ],
      keyFeaturesHeading: 'ฟีเจอร์เด่น',
      keyFeatures: [
        { title: 'แสดงแบบบ้านครบ', bullets: ['แกลเลอรีแบบบ้านและผลงานจริงความละเอียดสูง', 'แยกหมวดหมู่แบบบ้านตามสไตล์และขนาด', 'ฟอร์มขอคำปรึกษาที่หาง่าย'] },
        { title: 'ระบบ CRM ดูแลลูกค้า', bullets: ['ติดตามสถานะลูกค้าตั้งแต่สนใจจนถึงปิดการขาย', 'บันทึกประวัติการติดต่อและความต้องการลูกค้า', 'แดชบอร์ดสรุปยอดขายสำหรับผู้บริหาร'] },
        { title: 'ความน่าเชื่อถือของแบรนด์', bullets: ['ดีไซน์ที่ดูเป็นมืออาชีพ เหมาะกับธุรกิจรับสร้างบ้าน', 'หน้าผลงานบ้านที่สร้างจริงพร้อมรีวิวลูกค้า', 'โครงสร้างเว็บไซต์ที่เหมาะกับการทำ SEO ต่อในระยะยาว'] },
      ],
      backLabel: 'กลับไปหน้าผลงาน',
      servicesLabel: 'บริการที่เราทำ',
    },
    en: {
      badge: 'Construction & Real Estate',
      client: 'Awii House',
      title: 'Awii House — Website with CRM for a Home Builder',
      desc: 'Designed and built a website for a home-building company, with a CRM to manage customers from first interest in a house design through to closing the sale, helping the sales team track leads systematically.',
      duration: '3 months',
      servicesProvided: ['UX/UI Design', 'Web Development', 'CRM Development', 'House Design & Portfolio Gallery'],
      heroImage: '/images/case-studies/awii-house/cover.jpg',
      challengeHeading: 'The Challenge',
      challenge: 'The home builder had many house designs and completed projects but no website that presented them compellingly, and no system for tracking customers interested in consultations.',
      solutionHeading: 'Our Solution',
      solution: 'Built a website that presents house designs and portfolio work systematically, connected to a CRM that tracks customers from consultation request through to signed contract.',
      overviewHeading: 'Project Overview',
      overview: "The project gave the home builder a complete digital toolkit, from showcasing work to managing customers.",
      approachHeading: 'Our Approach',
      approach: [
        { title: 'Business Immersion', desc: "Gathered the company's house designs, sales process, and the behavior of customers looking to build." },
        { title: 'UX/UI Design', desc: 'Structured the site so house designs and portfolio work are easy to browse and compare.' },
        { title: 'Web Development', desc: 'Built a website that showcases house designs and real projects beautifully.' },
        { title: 'CRM Development', desc: 'Connected a CRM tracking customer status from consultation through to closed sale.' },
      ],
      keyFeaturesHeading: 'Key Features',
      keyFeatures: [
        { title: 'Complete House Design Showcase', bullets: ['High-resolution gallery of designs and real projects', 'Designs organized by style and size', 'Easy-to-reach consultation request form'] },
        { title: 'CRM for Customer Management', bullets: ['Tracks customer status from interest to closed sale', 'Logs contact history and customer requirements', 'Sales dashboard for management'] },
        { title: 'Brand Credibility', bullets: ['Professional design suited to the home-building business', 'A portfolio page of completed homes with customer reviews', 'Site structure built with long-term SEO in mind'] },
      ],
      backLabel: 'Back to Case Studies',
      servicesLabel: 'Services Provided',
    },
  },
  {
    slug: 'canapaya-residences',
    industryTag: 'Real Estate',
    result: 'เว็บไซต์ใหม่',
    year: '2025',
    th: {
      badge: 'Real Estate',
      client: 'Canapaya Residences',
      title: 'เว็บไซต์ แบรนด์ CI และ CRM ให้โครงการอสังหาริมทรัพย์ Canapaya Residences',
      desc: 'ออกแบบและพัฒนาเว็บไซต์ ทำอัตลักษณ์แบรนด์ (Brand CI) และระบบ CRM เฉพาะทางอสังหาริมทรัพย์ ให้โครงการที่พักอาศัยริมแม่น้ำ เพื่อสื่อถึงความหรูหราและดูแลลูกค้าที่สนใจจองยูนิต',
      duration: '5 เดือน',
      servicesProvided: ['ออกแบบ Brand CI', 'ออกแบบ UX/UI', 'พัฒนาเว็บไซต์', 'พัฒนา CRM อสังหาริมทรัพย์'],
      heroImage: '/images/case-studies/canapaya-residences/cover.jpg',
      challengeHeading: 'โจทย์ของโปรเจกต์',
      challenge: 'โครงการอสังหาริมทรัพย์ระดับพรีเมียมต้องการสื่อถึงความหรูหราและวิวแม่น้ำซึ่งเป็นจุดขายหลัก พร้อมระบบดูแลลูกค้าที่สนใจจองยูนิตอย่างเป็นระเบียบ',
      solutionHeading: 'แนวทางที่เราทำ',
      solution: 'ทำอัตลักษณ์แบรนด์ให้ดูหรูหราริมแม่น้ำ พัฒนาเว็บไซต์ที่แสดงยูนิตและสิ่งอำนวยความสะดวกได้อย่างน่าประทับใจ พร้อมระบบ CRM เฉพาะทางอสังหาริมทรัพย์ ติดตามลูกค้าตั้งแต่นัดดูห้องจนถึงโอนกรรมสิทธิ์',
      overviewHeading: 'ภาพรวมโปรเจกต์',
      overview: 'โปรเจกต์นี้ทำตั้งแต่แบรนด์ไปจนถึงเครื่องมือดิจิทัลที่ช่วยให้ทีมขายอสังหาริมทรัพย์ปิดการขายได้ดีขึ้น',
      approachHeading: 'แนวทางที่เราทำ',
      approach: [
        { title: 'ทำ Brand CI', desc: 'ออกแบบโลโก้ โทนสี และแนวทางภาพลักษณ์ ให้สื่อถึงความหรูหราและวิวแม่น้ำ' },
        { title: 'ออกแบบ UX/UI', desc: 'จัดเว็บไซต์ให้ดูยูนิตและสิ่งอำนวยความสะดวกได้ง่ายและน่าประทับใจ' },
        { title: 'พัฒนาเว็บไซต์', desc: 'พัฒนาเว็บไซต์ที่แสดงภาพโครงการและวิวแม่น้ำให้สวยงาม' },
        { title: 'พัฒนา CRM อสังหาริมทรัพย์', desc: 'เชื่อมระบบ CRM ติดตามลูกค้าตั้งแต่นัดดูห้องจนถึงโอนกรรมสิทธิ์' },
      ],
      keyFeaturesHeading: 'ฟีเจอร์เด่น',
      keyFeatures: [
        { title: 'แบรนด์ระดับพรีเมียม', bullets: ['อัตลักษณ์แบรนด์หรูหราที่สื่อถึงวิวแม่น้ำ', 'ภาพถ่ายโครงการและยูนิตความละเอียดสูง', 'ใช้ได้เหมือนกันทั้งเว็บไซต์และสื่อการตลาด'] },
        { title: 'แสดงโครงการให้น่าประทับใจ', bullets: ['ผังโครงการและยูนิตที่กดดูได้', 'ข้อมูลสิ่งอำนวยความสะดวกครบ', 'ใช้งานบนมือถือได้ครบ'] },
        { title: 'CRM เฉพาะทางอสังหาริมทรัพย์', bullets: ['ติดตามสถานะลูกค้าตั้งแต่นัดดูห้องจนถึงโอนกรรมสิทธิ์', 'จัดการการจองยูนิตและนัดเข้าชม', 'แดชบอร์ดสรุปยอดขายและสถานะยูนิตแบบเรียลไทม์'] },
      ],
      backLabel: 'กลับไปหน้าผลงาน',
      servicesLabel: 'บริการที่เราทำ',
    },
    en: {
      badge: 'Real Estate',
      client: 'Canapaya Residences',
      title: 'Canapaya Residences — Website, Brand CI & Real Estate CRM',
      desc: 'Designed and built a website, a brand corporate identity, and a dedicated real-estate CRM for a riverside residential project, communicating its luxury positioning and managing customers interested in booking a unit.',
      duration: '5 months',
      servicesProvided: ['Brand CI Design', 'UX/UI Design', 'Web Development', 'Real Estate CRM Development'],
      heroImage: '/images/case-studies/canapaya-residences/cover.jpg',
      challengeHeading: 'The Challenge',
      challenge: "The premium residential project needed to communicate its luxury positioning and river-view selling point, along with a systematic way to manage customers interested in booking a unit.",
      solutionHeading: 'Our Solution',
      solution: 'Built a brand identity that reads as riverside luxury, a website that presents units and amenities impressively, and a dedicated real-estate CRM tracking customers from viewing through to ownership transfer.',
      overviewHeading: 'Project Overview',
      overview: "The project spanned from brand identity through to the digital tools that help the real-estate sales team close deals more effectively.",
      approachHeading: 'Our Approach',
      approach: [
        { title: 'Brand CI', desc: 'Designed a logo, color palette, and visual direction that reads as luxury and riverside.' },
        { title: 'UX/UI Design', desc: 'Structured the site so units and amenities are impressive and easy to reach.' },
        { title: 'Web Development', desc: 'Built a website that presents the project and river views beautifully.' },
        { title: 'Real Estate CRM Development', desc: 'Connected a CRM tracking customers from unit viewing through to ownership transfer.' },
      ],
      keyFeaturesHeading: 'Key Features',
      keyFeatures: [
        { title: 'Premium Brand', bullets: ['Luxury brand identity capturing the river view', 'High-resolution photography of the project and units', 'Applied consistently across the website and marketing'] },
        { title: 'Impressive Project Presentation', bullets: ['Interactive project and unit floor plans', 'Complete amenity information', 'Fully responsive on mobile'] },
        { title: 'Dedicated Real Estate CRM', bullets: ['Tracks customer status from viewing to ownership transfer', 'Manages unit bookings and viewing appointments', 'Real-time sales and unit-status dashboard'] },
      ],
      backLabel: 'Back to Case Studies',
      servicesLabel: 'Services Provided',
    },
  },
  {
    slug: 'rfs',
    industryTag: 'Telecommunications',
    result: 'เว็บไซต์ใหม่',
    year: '2025',
    th: {
      badge: 'Telecommunications',
      client: 'RFS',
      title: 'เว็บไซต์และ AI CRM ให้ RFS ผู้ให้บริการโครงสร้างพื้นฐานโทรคมนาคม (สิงคโปร์)',
      desc: 'ออกแบบและพัฒนาเว็บไซต์ พร้อมระบบ AI CRM ให้ RFS ผู้ให้บริการโครงสร้างพื้นฐานโทรคมนาคมและโซลูชันสมาร์ทซิตี้ในสิงคโปร์ เพื่ออธิบายโซลูชันและดูแลความสัมพันธ์กับลูกค้าองค์กร',
      duration: '4 เดือน',
      servicesProvided: ['ออกแบบ UX/UI', 'พัฒนาเว็บไซต์', 'พัฒนา AI CRM', 'จัดคอนเทนต์โซลูชัน'],
      heroImage: '/images/case-studies/rfs/cover.jpg',
      challengeHeading: 'โจทย์ของโปรเจกต์',
      challenge: 'RFS มีโซลูชันด้านโครงสร้างพื้นฐานโทรคมนาคมและสมาร์ทซิตี้หลายอย่าง แต่เว็บไซต์เดิมอธิบายได้ไม่ชัด และยังไม่มีระบบดูแลลูกค้าองค์กร',
      solutionHeading: 'แนวทางที่เราทำ',
      solution: 'ออกแบบเว็บไซต์ใหม่ให้อธิบายโซลูชันได้ชัดและน่าเชื่อถือ พร้อมพัฒนาระบบ AI CRM ที่ช่วยติดตามและดูแลความสัมพันธ์กับลูกค้าองค์กรแบบ B2B',
      overviewHeading: 'ภาพรวมโปรเจกต์',
      overview: 'โปรเจกต์นี้ช่วยให้แบรนด์เทคโนโลยีระดับสากลเข้าถึงลูกค้าองค์กรได้ดีขึ้น พร้อมเครื่องมือ AI ที่ช่วยทีมขายทำงาน',
      approachHeading: 'แนวทางที่เราทำ',
      approach: [
        { title: 'ทำความเข้าใจธุรกิจ', desc: 'ศึกษาโซลูชันโครงสร้างพื้นฐานโทรคมนาคมและกลุ่มลูกค้าองค์กร' },
        { title: 'ออกแบบ UX/UI', desc: 'จัดเว็บไซต์ให้ลูกค้า B2B ดูโซลูชันและกรณีศึกษาได้ง่าย' },
        { title: 'พัฒนาเว็บไซต์', desc: 'พัฒนาเว็บไซต์ที่ดูเป็นมืออาชีพและน่าเชื่อถือสำหรับลูกค้าองค์กร' },
        { title: 'พัฒนา AI CRM', desc: 'สร้างระบบ AI ที่ช่วยติดตามโอกาสการขายและดูแลลูกค้าองค์กร' },
      ],
      keyFeaturesHeading: 'ฟีเจอร์เด่น',
      keyFeatures: [
        { title: 'แสดงโซลูชันชัดเจน', bullets: ['แยกหมวดโซลูชันตามประเภทการใช้งาน', 'กรณีศึกษาและผลงานที่ผ่านมา', 'ข้อมูลทางเทคนิคที่เข้าใจง่ายสำหรับลูกค้าองค์กร'] },
        { title: 'AI CRM ดูแลลูกค้าองค์กร', bullets: ['ติดตามโอกาสการขาย B2B อัตโนมัติ', 'AI วิเคราะห์และจัดลำดับความสำคัญของลูกค้า', 'แดชบอร์ดสรุปสถานะการขายแบบเรียลไทม์'] },
        { title: 'ความน่าเชื่อถือระดับสากล', bullets: ['ดีไซน์ที่ดูเป็นผู้นำด้านเทคโนโลยี', 'ข้อมูลติดต่อฝ่ายขายที่เข้าถึงง่าย', 'โครงสร้างเว็บไซต์ที่เหมาะกับการทำ SEO ต่อในระยะยาว'] },
      ],
      backLabel: 'กลับไปหน้าผลงาน',
      servicesLabel: 'บริการที่เราทำ',
    },
    en: {
      badge: 'Telecommunications',
      client: 'RFS',
      title: 'RFS — Website with AI CRM for a Telecom Infrastructure Provider (Singapore)',
      desc: 'Designed and built a website with an AI-powered CRM for RFS, a telecom infrastructure and smart-city solutions provider based in Singapore, to communicate its solutions clearly and manage relationships with enterprise customers.',
      duration: '4 months',
      servicesProvided: ['UX/UI Design', 'Web Development', 'AI CRM Development', 'Solution Content Organization'],
      heroImage: '/images/case-studies/rfs/cover.jpg',
      challengeHeading: 'The Challenge',
      challenge: "RFS offers a wide range of telecom infrastructure and smart-city solutions, but its old website communicated them unclearly, and it lacked a systematic way to manage enterprise customers.",
      solutionHeading: 'Our Solution',
      solution: 'Redesigned the website to communicate solutions clearly and credibly, and built an AI CRM that tracks and manages B2B enterprise customer relationships.',
      overviewHeading: 'Project Overview',
      overview: "The project modernized how a global technology brand reaches enterprise customers, with AI tools that help the sales team work more effectively.",
      approachHeading: 'Our Approach',
      approach: [
        { title: 'Business Immersion', desc: 'Studied the telecom infrastructure solutions and target enterprise customer base.' },
        { title: 'UX/UI Design', desc: 'Structured the site so solutions and case studies are easy for B2B customers to reach.' },
        { title: 'Web Development', desc: 'Built a website that reads as professional and credible to enterprise customers.' },
        { title: 'AI CRM Development', desc: 'Built an AI system that tracks sales opportunities and manages enterprise customer relationships.' },
      ],
      keyFeaturesHeading: 'Key Features',
      keyFeatures: [
        { title: 'Clear Solution Presentation', bullets: ['Solutions organized by use case', 'Case studies and past project work', 'Technical information made easy for enterprise customers to understand'] },
        { title: 'AI CRM for Enterprise Customers', bullets: ['Automatic tracking of B2B sales opportunities', 'AI-driven customer analysis and prioritization', 'Real-time sales status dashboard'] },
        { title: 'Global Credibility', bullets: ['Design that reads as a technology leader', 'Easy-to-reach sales contact information', 'Site structure built with long-term SEO in mind'] },
      ],
      backLabel: 'Back to Case Studies',
      servicesLabel: 'Services Provided',
    },
  },
  {
    slug: 'excise-department',
    industryTag: 'Government & Public Sector',
    result: 'แอปมือถือใหม่',
    year: '2025',
    th: {
      badge: 'Government & Public Sector',
      client: 'กรมสรรพสามิต',
      title: 'แอปมือถือตรวจสอบภาษีสรรพสามิต เชื่อมข้อมูลระหว่างหน่วยงาน',
      desc: 'ออกแบบและพัฒนาแอปมือถือให้กรมสรรพสามิต ให้เจ้าหน้าที่ตรวจสอบและยืนยันการชำระภาษีสรรพสามิต พร้อมเชื่อมข้อมูลกับหน่วยงานที่เกี่ยวข้อง เพื่อให้ตรวจสอบได้เร็วและแม่นยำ',
      duration: '5 เดือน',
      servicesProvided: ['ออกแบบ UX/UI', 'พัฒนาแอปมือถือ', 'เชื่อมข้อมูลระหว่างหน่วยงาน', 'ระบบตรวจสอบและยืนยันภาษี'],
      heroImage: '/images/case-studies/excise-department/cover.jpg',
      challengeHeading: 'โจทย์ของโปรเจกต์',
      challenge: 'เจ้าหน้าที่ภาคสนามต้องตรวจสอบการชำระภาษีสรรพสามิตของสินค้าหลายประเภท แต่ขั้นตอนเดิมต้องเช็กข้อมูลจากหลายหน่วยงานแยกกัน ใช้เวลานานและพลาดง่าย',
      solutionHeading: 'แนวทางที่เราทำ',
      solution: 'พัฒนาแอปมือถือให้เจ้าหน้าที่ตรวจสอบและยืนยันการชำระภาษีได้จากหน้างานโดยตรง และเชื่อมฐานข้อมูลจากหน่วยงานที่เกี่ยวข้องมาแสดงในที่เดียว',
      overviewHeading: 'ภาพรวมโปรเจกต์',
      overview: 'โปรเจกต์นี้ช่วยให้เจ้าหน้าที่รัฐตรวจสอบภาษีได้เร็วขึ้น และลดขั้นตอนกับข้อมูลที่ซ้ำซ้อน',
      approachHeading: 'แนวทางที่เราทำ',
      approach: [
        { title: 'ทำความเข้าใจกระบวนการ', desc: 'เก็บข้อมูลขั้นตอนการตรวจสอบภาษีและหน่วยงานที่เกี่ยวข้อง' },
        { title: 'ออกแบบ UX/UI', desc: 'ออกแบบแอปให้เจ้าหน้าที่ใช้สะดวกแม้อยู่หน้างาน' },
        { title: 'พัฒนาแอปมือถือ', desc: 'พัฒนาแอปที่เสถียรและเร็ว สำหรับตรวจสอบหน้างาน' },
        { title: 'เชื่อมต่อข้อมูลหน่วยงาน', desc: 'เชื่อมฐานข้อมูลจากหน่วยงานที่เกี่ยวข้องมาแสดงรวมในแอปเดียว' },
      ],
      keyFeaturesHeading: 'ฟีเจอร์เด่น',
      keyFeatures: [
        { title: 'ตรวจสอบภาษีได้รวดเร็ว', bullets: ['ค้นหาและเช็กสถานะการชำระภาษีแบบเรียลไทม์', 'สแกนรหัสสินค้าเพื่อตรวจสอบได้ทันที', 'บันทึกผลตรวจพร้อมภาพถ่ายเป็นหลักฐาน'] },
        { title: 'เชื่อมข้อมูลระหว่างหน่วยงาน', bullets: ['รวมข้อมูลจากหน่วยงานที่เกี่ยวข้องไว้ในที่เดียว', 'อัปเดตสถานะข้อมูลแบบเรียลไทม์', 'ไม่ต้องเช็กข้อมูลซ้ำในหลายระบบ'] },
        { title: 'รองรับการทำงานภาคสนาม', bullets: ['ใช้งานได้แม้สัญญาณอินเทอร์เน็ตไม่เสถียร', 'ออกแบบให้เจ้าหน้าที่ภาคสนามใช้ง่าย', 'รายงานสรุปผลสำหรับผู้บริหาร'] },
      ],
      backLabel: 'กลับไปหน้าผลงาน',
      servicesLabel: 'บริการที่เราทำ',
    },
    en: {
      badge: 'Government & Public Sector',
      client: 'Excise Department',
      title: 'Excise Tax Inspection App with Cross-Agency Data Integration',
      desc: "Designed and built a mobile app for Thailand's Excise Department, letting field officers verify excise tax payments on-site, connected to data from related government agencies for faster, more accurate checks.",
      duration: '5 months',
      servicesProvided: ['UX/UI Design', 'Mobile App Development', 'Cross-Agency Data Integration', 'Tax Verification System'],
      heroImage: '/images/case-studies/excise-department/cover.jpg',
      challengeHeading: 'The Challenge',
      challenge: "Field officers needed to verify excise tax payments across many product categories, but the old process required checking data from several agencies separately, making it slow and error-prone.",
      solutionHeading: 'Our Solution',
      solution: 'Built a mobile app letting officers verify tax payments directly on-site, connected to data from related agencies so everything shows in one place.',
      overviewHeading: 'Project Overview',
      overview: "The project improved the efficiency of public-sector tax inspection work, cutting down duplicated steps and data lookups.",
      approachHeading: 'Our Approach',
      approach: [
        { title: 'Process Immersion', desc: 'Gathered the tax verification process and the agencies involved in it.' },
        { title: 'UX/UI Design', desc: 'Designed the app to be easy for officers to use even in the field.' },
        { title: 'Mobile App Development', desc: 'Built a stable, fast app for on-site verification.' },
        { title: 'Cross-Agency Data Integration', desc: 'Connected databases from related agencies to show combined results in one app.' },
      ],
      keyFeaturesHeading: 'Key Features',
      keyFeatures: [
        { title: 'Fast Tax Verification', bullets: ['Real-time search and status check of tax payments', 'Scan product codes for instant verification', 'Logs inspection results with photo evidence'] },
        { title: 'Cross-Agency Data Integration', bullets: ['Combines data from related agencies in one place', 'Real-time data status updates', 'Reduces duplicate lookups across multiple systems'] },
        { title: 'Built for Fieldwork', bullets: ['Works even with unstable internet connectivity', 'Designed to be easy for field officers to use', 'Summary reporting system for management'] },
      ],
      backLabel: 'Back to Case Studies',
      servicesLabel: 'Services Provided',
    },
  },
  {
    slug: 'itagc',
    industryTag: 'Government & Public Sector',
    result: 'เว็บไซต์ใหม่',
    year: '2025',
    th: {
      badge: 'Government & Public Sector',
      client: 'ITAGC (Integrity and Transparency Assessment of Government Contractors)',
      title: 'เว็บไซต์ตรวจสอบความโปร่งใสของผู้รับเหมาภาครัฐ ITAGC',
      desc: 'ออกแบบ UX/UI ก่อน แล้วพัฒนาเว็บไซต์ให้ ITAGC หน่วยงานประเมินความซื่อตรงและความโปร่งใสของผู้รับเหมาภาครัฐ เพื่ออธิบายระบบตรวจสอบธุรกิจที่ทุจริตหรือไม่โปร่งใสให้ชัดเจนและน่าเชื่อถือ',
      duration: '3 เดือน',
      servicesProvided: ['ออกแบบ UX/UI', 'พัฒนาเว็บไซต์', 'ระบบตรวจสอบและประเมินผล', 'ดูแลเนื้อหาและความน่าเชื่อถือ'],
      heroImage: '/images/case-studies/itagc/cover.jpg',
      challengeHeading: 'โจทย์ของโปรเจกต์',
      challenge: 'ITAGC ต้องการเว็บไซต์ที่อธิบายภารกิจตรวจสอบความโปร่งใสของผู้รับเหมาภาครัฐได้น่าเชื่อถือ ชัดเจน และใช้ง่ายสำหรับทั้งเจ้าหน้าที่และหน่วยงานที่เกี่ยวข้อง',
      solutionHeading: 'แนวทางที่เราทำ',
      solution: 'เริ่มจากออกแบบ UX/UI เพื่อจัดโครงสร้างข้อมูลและการใช้งานให้ชัดก่อน แล้วจึงพัฒนาเว็บไซต์ให้เข้ากับภาพลักษณ์ของหน่วยงานตรวจสอบภาครัฐ',
      overviewHeading: 'ภาพรวมโปรเจกต์',
      overview: 'โปรเจกต์นี้ให้ ITAGC มีเครื่องมือดิจิทัลที่น่าเชื่อถือ ไว้อธิบายขั้นตอนประเมินความซื่อตรงและความโปร่งใสของผู้รับเหมาภาครัฐ',
      approachHeading: 'แนวทางที่เราทำ',
      approach: [
        { title: 'ออกแบบ UX/UI', desc: 'จัดโครงสร้างข้อมูลและออกแบบการใช้งานก่อนเริ่มพัฒนา เพื่อให้อธิบายภารกิจของหน่วยงานได้ชัด' },
        { title: 'พัฒนาเว็บไซต์', desc: 'พัฒนาเว็บไซต์ตามดีไซน์ที่วางไว้ ให้มั่นคงและเข้ากับภาพลักษณ์หน่วยงานตรวจสอบ' },
        { title: 'ระบบตรวจสอบและประเมินผล', desc: 'จัดเนื้อหาและข้อมูลขั้นตอนตรวจสอบธุรกิจที่ทุจริตให้เข้าใจง่าย' },
        { title: 'ตรวจสอบความน่าเชื่อถือ', desc: 'ทดสอบและปรับเนื้อหาให้สื่อถึงความน่าเชื่อถือและความโปร่งใสของหน่วยงาน' },
      ],
      keyFeaturesHeading: 'ฟีเจอร์เด่น',
      keyFeatures: [
        { title: 'อธิบายภารกิจของหน่วยงานชัดเจน', bullets: ['แสดงขั้นตอนประเมินความโปร่งใสอย่างเป็นระเบียบ', 'โครงสร้างข้อมูลที่ผู้ใช้ทุกกลุ่มเข้าใจง่าย', 'ดีไซน์ที่ดูน่าเชื่อถือ'] },
        { title: 'ออกแบบ UX/UI ก่อนพัฒนา', bullets: ['วางการใช้งานให้ชัดตั้งแต่ต้น', 'ลดความยุ่งยากตอนพัฒนาเว็บไซต์', 'ผลงานตรงกับสิ่งที่ต้องการสื่อ'] },
        { title: 'พร้อมรองรับการขยายระบบ', bullets: ['โครงสร้างเว็บไซต์ที่ต่อยอดได้ในอนาคต', 'เพิ่มข้อมูลและขั้นตอนตรวจสอบใหม่ได้', 'ทำงานเสถียรและปลอดภัย'] },
      ],
      backLabel: 'กลับไปหน้าผลงาน',
      servicesLabel: 'บริการที่เราทำ',
    },
    en: {
      badge: 'Government & Public Sector',
      client: 'ITAGC – Integrity and Transparency Assessment of Government Contractors',
      title: 'ITAGC Government Contractor Integrity & Transparency Website',
      desc: 'Designed the UX/UI first, then built the website for ITAGC, a body that assesses the integrity and transparency of government contractors — clearly and credibly communicating a system for flagging businesses with corrupt or non-transparent practices.',
      duration: '3 months',
      servicesProvided: ['UX/UI Design', 'Web Development', 'Assessment & Review System', 'Content & Credibility Direction'],
      heroImage: '/images/case-studies/itagc/cover.jpg',
      challengeHeading: 'The Challenge',
      challenge: "ITAGC needed a website that communicated its mission of assessing government contractor transparency in a credible, clear way that was easy for both staff and partner agencies to use.",
      solutionHeading: 'Our Solution',
      solution: 'Started with UX/UI design to establish a clear information structure and user experience, then built the website to match the look and feel of a government oversight body.',
      overviewHeading: 'Project Overview',
      overview: 'The project gave ITAGC a credible digital tool for communicating its process for assessing the integrity and transparency of government contractors.',
      approachHeading: 'Our Approach',
      approach: [
        { title: 'UX/UI Design', desc: "Structured the information and designed the user experience before development began, to clearly communicate the organization's mission." },
        { title: 'Web Development', desc: 'Built the website on top of the finished design, stable and aligned with the look of a government oversight body.' },
        { title: 'Assessment & Review System', desc: 'Organized content and information about the business integrity review process so it is easy to understand.' },
        { title: 'Credibility Review', desc: "Tested and refined the content to communicate the organization's credibility and transparency." },
      ],
      keyFeaturesHeading: 'Key Features',
      keyFeatures: [
        { title: 'Clear Mission Communication', bullets: ['Presents the transparency assessment process systematically', 'Easy-to-understand structure for every user group', 'Design that conveys institutional credibility'] },
        { title: 'UX/UI-First Design Process', bullets: ['User experience structured from the start', 'Reduced complexity during later development', 'Results aligned with communication goals'] },
        { title: 'Built to Scale', bullets: ['Website structure ready to extend in the future', 'Supports adding new assessment processes and data', 'Stable performance and security'] },
      ],
      backLabel: 'Back to Case Studies',
      servicesLabel: 'Services Provided',
    },
  },
  {
    slug: 'department-of-water-resources',
    industryTag: 'Government & Public Sector',
    result: 'แอปใหม่',
    year: '2025',
    th: {
      badge: 'Government & Public Sector',
      client: 'กรมทรัพยากรน้ำ',
      title: 'แอปมือถือกรมทรัพยากรน้ำ ต่อยอดด้วย AI',
      desc: 'ออกแบบและพัฒนาแอปมือถือให้กรมทรัพยากรน้ำ ต่อยอดจากแอปที่เราเคยทำให้เมื่อ 4 ปีก่อน โดยเน้นพัฒนาโมดูล AI เพื่อช่วยบริหารจัดการและติดตามทรัพยากรน้ำของประเทศ',
      duration: '5 เดือน',
      servicesProvided: ['พัฒนาแอปมือถือ', 'พัฒนาโมดูล AI', 'วิเคราะห์ข้อมูลทรัพยากรน้ำ', 'ต่อยอดระบบเดิม'],
      heroImage: '/images/case-studies/department-of-water-resources/cover.jpg',
      challengeHeading: 'โจทย์ของโปรเจกต์',
      challenge: 'กรมฯ มีแอปที่เราเคยทำให้เมื่อ 4 ปีก่อน และต้องการเพิ่มความสามารถด้าน AI เพื่อวิเคราะห์และคาดการณ์สถานการณ์น้ำให้แม่นยำขึ้น',
      solutionHeading: 'แนวทางที่เราทำ',
      solution: 'ศึกษาระบบเดิม แล้วต่อยอดด้วยโมดูล AI สำหรับวิเคราะห์ข้อมูลทรัพยากรน้ำ พร้อมปรับแอปให้ทันสมัยขึ้น',
      overviewHeading: 'ภาพรวมโปรเจกต์',
      overview: 'โปรเจกต์นี้เพิ่มความสามารถด้าน AI ให้เครื่องมือดิจิทัลของกรมทรัพยากรน้ำ ไว้ใช้บริหารจัดการทรัพยากรน้ำของประเทศ',
      approachHeading: 'แนวทางที่เราทำ',
      approach: [
        { title: 'ศึกษาระบบเดิม', desc: 'ทบทวนแอปที่เราเคยทำให้เมื่อ 4 ปีก่อน เพื่อหาแนวทางต่อยอดที่เหมาะสม' },
        { title: 'พัฒนาโมดูล AI', desc: 'พัฒนา AI สำหรับวิเคราะห์และคาดการณ์ข้อมูลทรัพยากรน้ำ' },
        { title: 'พัฒนาแอปมือถือ', desc: 'ปรับแอปให้ทันสมัยและรองรับฟีเจอร์ AI ใหม่' },
        { title: 'ทดสอบและปรับปรุง', desc: 'ทดสอบความแม่นยำของโมดูล AI และปรับปรุงการใช้งาน' },
      ],
      keyFeaturesHeading: 'ฟีเจอร์เด่น',
      keyFeatures: [
        { title: 'วิเคราะห์ข้อมูลด้วย AI', bullets: ['คาดการณ์สถานการณ์ทรัพยากรน้ำล่วงหน้า', 'วิเคราะห์แนวโน้มจากข้อมูลย้อนหลัง', 'แจ้งเตือนสถานการณ์ผิดปกติอัตโนมัติ'] },
        { title: 'ต่อยอดจากระบบเดิม', bullets: ['ใช้ฐานข้อมูลและโครงสร้างเดิมต่อได้', 'ปรับการใช้งานให้ทันสมัยขึ้น', 'เปลี่ยนมาใช้ระบบใหม่ได้ราบรื่น'] },
        { title: 'ช่วยตัดสินใจ', bullets: ['ข้อมูลวิเคราะห์สำหรับเจ้าหน้าที่และผู้บริหาร', 'รายงานสรุปที่เข้าใจง่าย', 'โครงสร้างระบบที่ต่อยอดได้ในอนาคต'] },
      ],
      backLabel: 'กลับไปหน้าผลงาน',
      servicesLabel: 'บริการที่เราทำ',
    },
    en: {
      badge: 'Government & Public Sector',
      client: 'Department of Water Resources',
      title: 'Department of Water Resources Mobile App, Rebuilt with AI',
      desc: "Designed and built a mobile app for Thailand's Department of Water Resources, building on an app we developed for them four years earlier, with a focus on new AI capabilities to improve national water resource management and monitoring.",
      duration: '5 months',
      servicesProvided: ['Mobile App Development', 'AI Module Development', 'Water Resource Data Analysis', 'Legacy System Extension'],
      heroImage: '/images/case-studies/department-of-water-resources/cover.jpg',
      challengeHeading: 'The Challenge',
      challenge: "The department had an app we built four years earlier, but wanted to upgrade it with AI capabilities to analyze and forecast water resource conditions more accurately.",
      solutionHeading: 'Our Solution',
      solution: 'Reviewed the system we had built previously, then extended it with a new AI module for analyzing water resource data, alongside a modernized app experience.',
      overviewHeading: 'Project Overview',
      overview: "The project upgraded the Department of Water Resources' digital tool with AI capabilities for managing the country's water resources.",
      approachHeading: 'Our Approach',
      approach: [
        { title: 'Reviewing the Earlier System', desc: 'Reviewed the app we had built four years earlier to find the right path for extending it.' },
        { title: 'AI Module Development', desc: 'Built AI capabilities for analyzing and forecasting water resource data.' },
        { title: 'Mobile App Development', desc: 'Modernized the app to support the new AI features.' },
        { title: 'Testing & Refinement', desc: "Tested the AI module's accuracy and refined the user experience." },
      ],
      keyFeaturesHeading: 'Key Features',
      keyFeatures: [
        { title: 'AI-Powered Analysis', bullets: ['Forecasts water resource conditions ahead of time', 'Analyzes trends from historical data', 'Automatic alerts for abnormal conditions'] },
        { title: 'Built on the Legacy System', bullets: ['Leverages the existing database and structure', 'Modernized user experience', 'Smooth transition from the earlier system'] },
        { title: 'Decision Support', bullets: ['Insights for officers and management', 'Easy-to-understand summary reports', 'System structure built to extend in the future'] },
      ],
      backLabel: 'Back to Case Studies',
      servicesLabel: 'Services Provided',
    },
  },
  {
    slug: 'immigration-bureau',
    industryTag: 'Government & Public Sector',
    result: 'แอปใหม่',
    year: '2025',
    th: {
      badge: 'Government & Public Sector',
      client: 'สำนักงานตรวจคนเข้าเมือง (Royal Thai Police Immigration Bureau)',
      title: 'แอปตรวจคนเข้าเมืองที่ใช้ AI',
      desc: 'ออกแบบและพัฒนาแอปมือถือให้สำนักงานตรวจคนเข้าเมือง ช่วยเจ้าหน้าที่ตรวจสอบและยืนยันตัวตนผู้เดินทางเข้า-ออกประเทศ พร้อมโมดูล AI ตรวจเอกสารและใบหน้าให้เร็วและแม่นยำขึ้น',
      duration: '6 เดือน',
      servicesProvided: ['พัฒนาแอปมือถือ', 'พัฒนาโมดูล AI ตรวจเอกสารและใบหน้า', 'ระบบยืนยันตัวตน', 'เชื่อมต่อฐานข้อมูลผู้เดินทาง'],
      heroImage: '/images/case-studies/immigration-bureau/cover.jpg',
      challengeHeading: 'โจทย์ของโปรเจกต์',
      challenge: 'เจ้าหน้าที่ตรวจคนเข้าเมืองต้องตรวจเอกสารและยืนยันตัวตนผู้เดินทางจำนวนมากทุกวัน ขั้นตอนเดิมใช้เวลานานและต้องใช้สายตาตรวจเป็นหลัก',
      solutionHeading: 'แนวทางที่เราทำ',
      solution: 'พัฒนาแอปมือถือพร้อมโมดูล AI ตรวจเอกสารเดินทางและจดจำใบหน้า ช่วยให้เจ้าหน้าที่ยืนยันตัวตนผู้เดินทางได้เร็วและแม่นยำขึ้น',
      overviewHeading: 'ภาพรวมโปรเจกต์',
      overview: 'โปรเจกต์นี้ใช้ AI ช่วยให้การตรวจคนเข้าเมืองปลอดภัยและเร็วขึ้น',
      approachHeading: 'แนวทางที่เราทำ',
      approach: [
        { title: 'ทำความเข้าใจขั้นตอนการตรวจสอบ', desc: 'ศึกษาขั้นตอนตรวจเอกสารและยืนยันตัวตนของเจ้าหน้าที่ภาคสนาม' },
        { title: 'พัฒนาโมดูล AI', desc: 'พัฒนาโมดูล AI ตรวจเอกสารเดินทางและจดจำใบหน้าผู้เดินทาง' },
        { title: 'พัฒนาแอปมือถือ', desc: 'พัฒนาแอปที่ใช้ง่ายและเร็ว สำหรับเจ้าหน้าที่หน้างาน' },
        { title: 'เชื่อมต่อฐานข้อมูล', desc: 'เชื่อมฐานข้อมูลผู้เดินทางเพื่อตรวจประวัติและสถานะได้ทันที' },
      ],
      keyFeaturesHeading: 'ฟีเจอร์เด่น',
      keyFeatures: [
        { title: 'ตรวจสอบด้วย AI', bullets: ['ตรวจสอบเอกสารเดินทางอัตโนมัติ', 'จดจำและยืนยันใบหน้าผู้เดินทาง', 'แจ้งเตือนทันทีเมื่อพบความผิดปกติ'] },
        { title: 'ยืนยันตัวตนรวดเร็ว', bullets: ['ลดระยะเวลาการตรวจสอบต่อคน', 'ลดความผิดพลาดจากการตรวจด้วยสายตา', 'บันทึกประวัติการตรวจสอบอัตโนมัติ'] },
        { title: 'รองรับการทำงานภาคสนาม', bullets: ['ใช้ได้ที่จุดตรวจคนเข้าเมืองทุกจุด', 'เชื่อมฐานข้อมูลกลางแบบเรียลไทม์', 'ระบบรายงานผลสำหรับผู้บริหาร'] },
      ],
      backLabel: 'กลับไปหน้าผลงาน',
      servicesLabel: 'บริการที่เราทำ',
    },
    en: {
      badge: 'Government & Public Sector',
      client: 'Royal Thai Police Immigration Bureau',
      title: 'AI-Powered Immigration Inspection App',
      desc: "Designed and built a mobile app for the Royal Thai Police Immigration Bureau, helping officers verify travelers' identities at entry and exit points, with an AI module for faster, more accurate document and facial verification.",
      duration: '6 months',
      servicesProvided: ['Mobile App Development', 'AI Document & Facial Verification Module', 'Identity Verification System', 'Traveler Database Integration'],
      heroImage: '/images/case-studies/immigration-bureau/cover.jpg',
      challengeHeading: 'The Challenge',
      challenge: "Immigration officers needed to check documents and verify the identity of large numbers of travelers each day, and the existing process was slow and relied mainly on manual visual checks.",
      solutionHeading: 'Our Solution',
      solution: 'Built a mobile app with an AI module for travel document verification and facial recognition, helping officers confirm traveler identity faster and more accurately.',
      overviewHeading: 'Project Overview',
      overview: 'The project improved the speed and security of the immigration inspection process using AI technology.',
      approachHeading: 'Our Approach',
      approach: [
        { title: 'Process Immersion', desc: "Studied officers' document-checking and identity-verification steps in the field." },
        { title: 'AI Module Development', desc: 'Built an AI module for travel document verification and traveler facial recognition.' },
        { title: 'Mobile App Development', desc: 'Built a fast, easy-to-use app for officers on the ground.' },
        { title: 'Database Integration', desc: "Connected the traveler database for instant history and status checks." },
      ],
      keyFeaturesHeading: 'Key Features',
      keyFeatures: [
        { title: 'AI-Powered Verification', bullets: ['Automatic travel document verification', 'Facial recognition and verification for travelers', 'Immediate alerts for anomalies'] },
        { title: 'Fast Identity Checks', bullets: ['Reduced verification time per traveler', 'Fewer errors from manual visual checks', 'Automatic logging of inspection history'] },
        { title: 'Built for Fieldwork', bullets: ['Usable at every immigration checkpoint', 'Real-time connection to the central database', 'Reporting system for management'] },
      ],
      backLabel: 'Back to Case Studies',
      servicesLabel: 'Services Provided',
    },
  },
  {
    slug: 'ministry-of-culture',
    industryTag: 'Government & Public Sector',
    result: 'แอปใหม่',
    year: '2025',
    th: {
      badge: 'Government & Public Sector',
      client: 'กระทรวงวัฒนธรรม',
      title: 'แอปมือถืองานด้านวัฒนธรรม กระทรวงวัฒนธรรม',
      desc: 'ออกแบบและพัฒนาแอปมือถือให้กระทรวงวัฒนธรรม โดยใช้ผลงานและเนื้อหาบนเว็บไซต์ของกระทรวงเป็นแนวทาง เพื่อให้คนเข้าถึงข้อมูลศิลปวัฒนธรรมไทยได้ง่ายขึ้นผ่านแอป',
      duration: '4 เดือน',
      servicesProvided: ['พัฒนาแอปมือถือ', 'ออกแบบ UX/UI', 'รวบรวมและจัดเนื้อหาด้านวัฒนธรรม', 'เชื่อมฐานข้อมูลจากเว็บไซต์เดิม'],
      heroImage: '/images/case-studies/ministry-of-culture/cover.jpg',
      challengeHeading: 'โจทย์ของโปรเจกต์',
      challenge: 'กระทรวงมีเนื้อหาด้านศิลปวัฒนธรรมจำนวนมากบนเว็บไซต์ แต่ประชาชนยังไม่มีแอปมือถือที่เปิดดูได้ง่าย',
      solutionHeading: 'แนวทางที่เราทำ',
      solution: 'ศึกษาเนื้อหาและผลงานบนเว็บไซต์ของกระทรวง แล้วออกแบบแอปมือถือที่นำข้อมูลเดิมมาแสดงให้เปิดดูง่ายและทันสมัยขึ้น',
      overviewHeading: 'ภาพรวมโปรเจกต์',
      overview: 'โปรเจกต์นี้ช่วยให้กระทรวงวัฒนธรรมไปถึงประชาชนได้มากขึ้นผ่านแอปมือถือ โดยต่อยอดจากเนื้อหาที่มีอยู่แล้ว',
      approachHeading: 'แนวทางที่เราทำ',
      approach: [
        { title: 'ศึกษาเนื้อหาเดิม', desc: 'ทบทวนผลงานและเนื้อหาด้านวัฒนธรรมบนเว็บไซต์ของกระทรวง' },
        { title: 'ออกแบบ UX/UI', desc: 'ออกแบบแอปให้เปิดดูเนื้อหาวัฒนธรรมได้ง่ายและน่าสนใจ' },
        { title: 'พัฒนาแอปมือถือ', desc: 'พัฒนาแอปที่นำเนื้อหาเดิมมาแสดงในรูปแบบใหม่' },
        { title: 'เชื่อมต่อฐานข้อมูล', desc: 'เชื่อมข้อมูลจากเว็บไซต์เดิมให้อัปเดตอัตโนมัติ' },
      ],
      keyFeaturesHeading: 'ฟีเจอร์เด่น',
      keyFeatures: [
        { title: 'เนื้อหาวัฒนธรรมครบถ้วน', bullets: ['รวบรวมผลงานและกิจกรรมจากเว็บไซต์เดิม', 'จัดหมวดหมู่ให้ค้นหาง่าย', 'อัปเดตเนื้อหาใหม่อัตโนมัติ'] },
        { title: 'เข้าถึงง่ายสำหรับทุกคน', bullets: ['ดีไซน์ทันสมัยใช้งานง่าย', 'รองรับการค้นหาตามความสนใจ', 'แจ้งเตือนกิจกรรมวัฒนธรรมใหม่'] },
        { title: 'เชื่อมต่อกับเว็บไซต์เดิม', bullets: ['ข้อมูลสอดคล้องกันระหว่างเว็บและแอป', 'ไม่ต้องจัดการเนื้อหาซ้ำสองที่', 'โครงสร้างพร้อมต่อยอดในอนาคต'] },
      ],
      backLabel: 'กลับไปหน้าผลงาน',
      servicesLabel: 'บริการที่เราทำ',
    },
    en: {
      badge: 'Government & Public Sector',
      client: 'Ministry of Culture',
      title: "Ministry of Culture's Culture & Heritage Mobile App",
      desc: "Designed and built a mobile app for Thailand's Ministry of Culture, drawing on the content and work already published on the ministry's website to make Thai arts and culture information more accessible in app form.",
      duration: '4 months',
      servicesProvided: ['Mobile App Development', 'UX/UI Design', 'Cultural Content Curation', 'Legacy Website Data Integration'],
      heroImage: '/images/case-studies/ministry-of-culture/cover.jpg',
      challengeHeading: 'The Challenge',
      challenge: "The ministry had a large body of arts and culture content on its website, but no easily accessible mobile app for the general public.",
      solutionHeading: 'Our Solution',
      solution: "Reviewed the existing content and work on the ministry's website, then designed a mobile app that presents that same information in a more accessible, modern format.",
      overviewHeading: 'Project Overview',
      overview: "The project helped the Ministry of Culture reach a wider audience through a mobile app, built on its existing content.",
      approachHeading: 'Our Approach',
      approach: [
        { title: 'Reviewing Existing Content', desc: "Reviewed the cultural content and work already published on the ministry's website." },
        { title: 'UX/UI Design', desc: 'Designed an app structure that makes cultural content easy and engaging to explore.' },
        { title: 'Mobile App Development', desc: 'Built an app that presents the existing content in a fresh, modern format.' },
        { title: 'Data Integration', desc: "Connected data from the existing website so it updates automatically." },
      ],
      keyFeaturesHeading: 'Key Features',
      keyFeatures: [
        { title: 'Complete Cultural Content', bullets: ['Brings together work and activities from the existing website', 'Organized into categories for easy browsing', 'Automatically updates with new content'] },
        { title: 'Accessible to Everyone', bullets: ['Modern, easy-to-use design', 'Search by interest', 'Notifications for new cultural activities'] },
        { title: 'Connected to the Existing Website', bullets: ['Consistent data between web and app', 'Reduces duplicate content management', 'Structure built to extend in the future'] },
      ],
      backLabel: 'Back to Case Studies',
      servicesLabel: 'Services Provided',
    },
  },
  {
    slug: 'bbk-menu',
    industryTag: 'F&B',
    result: 'เว็บไซต์ใหม่',
    year: '2025',
    th: {
      badge: 'F&B',
      client: 'BBK Menu',
      title: 'เว็บไซต์แนะนำร้านอาหาร BBK Menu',
      desc: 'ออกแบบ UX/UI ก่อน แล้วพัฒนาเว็บไซต์ให้ BBK Menu แพลตฟอร์มแนะนำร้านอาหารและเมนูเด็ดในกรุงเทพฯ เพื่อสื่อถึงบรรยากาศหรูหราและไลฟ์สไตล์การกินดื่ม ให้ผู้ใช้เปิดดูได้ง่าย',
      duration: '3 เดือน',
      servicesProvided: ['ออกแบบ UX/UI', 'พัฒนาเว็บไซต์', 'ระบบแนะนำร้านอาหาร', 'ดูแลภาพถ่ายและคอนเทนต์'],
      heroImage: '/images/case-studies/bbk-menu/cover.jpg',
      challengeHeading: 'โจทย์ของโปรเจกต์',
      challenge: 'BBK Menu ต้องการเว็บไซต์ที่สื่อถึงไลฟ์สไตล์การกินดื่มระดับพรีเมียมในกรุงเทพฯ และชวนให้ผู้ใช้ลองร้านอาหารใหม่ ๆ',
      solutionHeading: 'แนวทางที่เราทำ',
      solution: 'เริ่มจากออกแบบ UX/UI เพื่อวางการเล่าเรื่องและการใช้งาน แล้วจึงพัฒนาเว็บไซต์ที่ถ่ายทอดความหรูหราของแต่ละร้าน',
      overviewHeading: 'ภาพรวมโปรเจกต์',
      overview: 'โปรเจกต์นี้ให้ BBK Menu มีเว็บไซต์ที่เล่าไลฟ์สไตล์การกินดื่มในกรุงเทพฯ ได้น่าสนใจ',
      approachHeading: 'แนวทางที่เราทำ',
      approach: [
        { title: 'ออกแบบ UX/UI', desc: 'วางการเล่าเรื่องและการใช้งานก่อนเริ่มพัฒนา' },
        { title: 'พัฒนาเว็บไซต์', desc: 'พัฒนาเว็บไซต์ตามดีไซน์ที่วางไว้ ให้เห็นบรรยากาศพรีเมียมของแต่ละร้าน' },
        { title: 'ระบบแนะนำร้านอาหาร', desc: 'ทำระบบค้นหาและแนะนำร้านอาหารตามสไตล์และโอกาสพิเศษ' },
        { title: 'ดูแลภาพถ่ายและคอนเทนต์', desc: 'วางแนวทางภาพถ่ายและคอนเทนต์ให้สื่อไลฟ์สไตล์ได้สม่ำเสมอ' },
      ],
      keyFeaturesHeading: 'ฟีเจอร์เด่น',
      keyFeatures: [
        { title: 'หาร้านอาหารใหม่ได้ง่ายขึ้น', bullets: ['ค้นหาตามสไตล์อาหารและโอกาสพิเศษ', 'ภาพถ่ายคุณภาพสูงที่สื่อบรรยากาศร้าน', 'แนะนำเมนูเด็ดของแต่ละร้าน'] },
        { title: 'ออกแบบ UX/UI ก่อนพัฒนา', bullets: ['วางการใช้งานให้ชัดตั้งแต่ต้น', 'เว็บไซต์ที่สื่อความพรีเมียมได้ตรงจุด', 'ใช้ง่ายทั้งบนมือถือและเดสก์ท็อป'] },
        { title: 'พร้อมต่อยอดในอนาคต', bullets: ['เพิ่มร้านอาหารใหม่ได้', 'ทำคอนเทนต์ต่อเนื่องได้', 'เว็บไซต์ทำงานเร็วและเสถียร'] },
      ],
      backLabel: 'กลับไปหน้าผลงาน',
      servicesLabel: 'บริการที่เราทำ',
    },
    en: {
      badge: 'F&B',
      client: 'BBK Menu',
      title: 'BBK Menu Restaurant Discovery Website',
      desc: "Designed the UX/UI first, then built the website for BBK Menu, a platform for discovering Bangkok's best restaurants and must-try dishes — communicating a premium dining lifestyle in an experience that's easy to explore.",
      duration: '3 months',
      servicesProvided: ['UX/UI Design', 'Web Development', 'Restaurant Discovery System', 'Photography & Content Direction'],
      heroImage: '/images/case-studies/bbk-menu/cover.jpg',
      challengeHeading: 'The Challenge',
      challenge: "BBK Menu needed a website that communicated Bangkok's premium dining lifestyle, with an experience that invited users to discover new restaurants.",
      solutionHeading: 'Our Solution',
      solution: 'Started with UX/UI design to establish the storytelling structure and user experience, then built a website that communicates the premium feel of each restaurant.',
      overviewHeading: 'Project Overview',
      overview: "The project gave BBK Menu a website that communicates Bangkok's dining lifestyle in an engaging way.",
      approachHeading: 'Our Approach',
      approach: [
        { title: 'UX/UI Design', desc: 'Structured the storytelling and user experience before development began.' },
        { title: 'Web Development', desc: "Built the website on top of the finished design to communicate each restaurant's premium feel." },
        { title: 'Restaurant Discovery System', desc: 'Built search and discovery by cuisine style and occasion.' },
        { title: 'Photography & Content Direction', desc: 'Set a photography and content direction for consistent lifestyle storytelling.' },
      ],
      keyFeaturesHeading: 'Key Features',
      keyFeatures: [
        { title: 'Easier Restaurant Discovery', bullets: ['Search by cuisine style and occasion', 'High-quality photography that conveys atmosphere', "Highlights each restaurant's must-try dishes"] },
        { title: 'UX/UI-First Design Process', bullets: ['User experience structured from the start', 'Website communicates a premium feel on target', 'Easy to use on both mobile and desktop'] },
        { title: 'Built to Scale', bullets: ['Structure supports adding new restaurants', 'Supports ongoing content production', 'Reliable, high-performance website'] },
      ],
      backLabel: 'Back to Case Studies',
      servicesLabel: 'Services Provided',
    },
  },
  {
    slug: 'sena-development',
    industryTag: 'Real Estate',
    result: 'ระบบ CRM + AI',
    year: '2025',
    th: {
      badge: "Real Estate",
      client: "Sena Development",
      title: "ระบบ CRM และ AI สำหรับผู้พัฒนาอสังหาริมทรัพย์",
      desc: "พัฒนาระบบ CRM และระบบ AI ให้ Sena Development ผู้พัฒนาอสังหาริมทรัพย์ เพื่อจัดการลูกค้าและข้อมูลการขายอย่างเป็นระบบ และทำงานได้คล่องขึ้น",
      duration: "4 เดือน",
      servicesProvided: ["พัฒนาระบบ CRM", "พัฒนา AI", "เชื่อมต่อระบบและข้อมูล", "ออกแบบ UX/UI"],
      heroImage: "/images/case-studies/sena-development/cover.jpg",
      challengeHeading: "โจทย์ของโปรเจกต์",
      challenge: "Sena Development ต้องการระบบที่ให้ทีมขายและผู้บริหารติดตามลูกค้าและข้อมูลโครงการได้ในที่เดียว และใช้ AI ช่วยวิเคราะห์ข้อมูลเหล่านั้น",
      solutionHeading: "แนวทางที่เราทำ",
      solution: "เราพัฒนาระบบ CRM ตามขั้นตอนการทำงานของทีม และเพิ่ม AI ช่วยให้ทีมทำงานได้เร็วและแม่นยำขึ้น",
      overviewHeading: "ภาพรวมโปรเจกต์",
      overview: "โปรเจกต์นี้ให้ Sena Development มีระบบ CRM และ AI ที่รวมการจัดการลูกค้าและข้อมูลการขายไว้ในแพลตฟอร์มเดียว",
      approachHeading: "แนวทางที่เราทำ",
      approach: [
        { title: "พัฒนาระบบ CRM", desc: "พัฒนาระบบจัดการลูกค้าตามขั้นตอนทำงานจริงของทีมขายและผู้บริหาร" },
        { title: "พัฒนา AI", desc: "เพิ่ม AI ช่วยวิเคราะห์ข้อมูลและช่วยงานทีม" },
        { title: "เชื่อมต่อระบบและข้อมูล", desc: "นำข้อมูลจากแหล่งต่าง ๆ เข้าระบบ ให้ข้อมูลตรงกัน" },
        { title: "ออกแบบ UX/UI", desc: "ออกแบบหน้าจอให้ทีมเรียนรู้และใช้งานได้ง่ายในแต่ละวัน" },
      ],
      keyFeaturesHeading: "ฟีเจอร์เด่น",
      keyFeatures: [
        { title: "ดูแลลูกค้าได้ในที่เดียว", bullets: ["รวมข้อมูลลูกค้าและประวัติการติดต่อไว้ในระบบเดียว", "ติดตามสถานะลูกค้าตามขั้นตอนการขาย", "ทีมหาข้อมูลที่ต้องการได้ง่าย"] },
        { title: "ใช้ AI ช่วย", bullets: ["ช่วยวิเคราะห์ข้อมูลลูกค้าและการขาย", "ลดงานซ้ำซ้อนของทีมงาน", "ใช้ข้อมูลช่วยตัดสินใจ"] },
        { title: "พร้อมต่อยอดในอนาคต", bullets: ["เชื่อมกับระบบอื่นได้", "เพิ่มฟังก์ชันใหม่ได้ตามต้องการ", "ระบบทำงานเร็วและเสถียร"] },
      ],
      backLabel: "กลับไปหน้าผลงาน",
      servicesLabel: "บริการที่เราทำ",
    },
    en: {
      badge: "Real Estate",
      client: "Sena Development",
      title: "CRM and AI System for a Real-Estate Developer",
      desc: "Developed a CRM and AI system for Sena Development, a real-estate developer, to manage customers and sales data in an organized way and help teams work more efficiently.",
      duration: "4 months",
      servicesProvided: ["CRM System Development", "AI Development", "Data & Integration", "UX/UI Design"],
      heroImage: "/images/case-studies/sena-development/cover.jpg",
      challengeHeading: "The Challenge",
      challenge: "Sena Development needed a system that lets sales and management teams track customers and project information in one place, while making use of that data with AI.",
      solutionHeading: "Our Solution",
      solution: "We built a CRM designed around the way the team works, and added AI capabilities to help the team work faster and more accurately.",
      overviewHeading: "Project Overview",
      overview: "The project gave Sena Development a CRM and AI system that brings customer management and sales data together on a single platform.",
      approachHeading: "Our Approach",
      approach: [
        { title: "CRM System Development", desc: "Built a customer management system around the real workflows of the sales and management teams." },
        { title: "AI Development", desc: "Added AI capabilities to help analyze data and support the team’s day-to-day work." },
        { title: "Data & Integration", desc: "Connected data from different sources into the system so information stays consistent." },
        { title: "UX/UI Design", desc: "Designed screens that the team can learn and use easily every day." },
      ],
      keyFeaturesHeading: "Key Features",
      keyFeatures: [
        { title: "Customer Management in One Place", bullets: ["Customer data and contact history in a single system", "Track customer status through the sales process", "Easy access to the information teams need"] },
        { title: "Powered by AI", bullets: ["Helps analyze customer and sales data", "Reduces repetitive work for the team", "Supports data-informed decisions"] },
        { title: "Built to Scale", bullets: ["Structure supports connecting other systems", "New functions can be added as needs grow", "Reliable, high-performance system"] },
      ],
      backLabel: "Back to Case Studies",
      servicesLabel: "Services Provided",
    },
  },
  {
    slug: 'panpuri',
    industryTag: 'E-Commerce',
    result: 'เว็บไซต์ใหม่',
    year: '2025',
    th: {
      badge: "E-Commerce",
      client: "PAÑPURI",
      title: "เว็บไซต์อีคอมเมิร์ซแบรนด์ PAÑPURI บน Shopify",
      desc: "ออกแบบ UX/UI ก่อน แล้วพัฒนาเว็บไซต์อีคอมเมิร์ซบน Shopify ให้ PAÑPURI แบรนด์เวลเนสและสกินแคร์ไทย เพื่อสื่อถึงภาพลักษณ์พรีเมียมและให้ลูกค้าเลือกซื้อสินค้าได้สะดวก",
      duration: "3 เดือน",
      servicesProvided: ["ออกแบบ UX/UI", "พัฒนาเว็บไซต์อีคอมเมิร์ซบน Shopify", "ระบบสั่งซื้อและชำระเงิน", "จัดสินค้าและคอนเทนต์"],
      heroImage: "/images/case-studies/panpuri/cover.jpg",
      challengeHeading: "โจทย์ของโปรเจกต์",
      challenge: "PAÑPURI ต้องการเว็บไซต์อีคอมเมิร์ซที่สื่อถึงภาพลักษณ์แบรนด์เวลเนสและสกินแคร์ระดับพรีเมียม และซื้อสินค้าได้สะดวก",
      solutionHeading: "แนวทางที่เราทำ",
      solution: "เริ่มจากออกแบบ UX/UI เพื่อวางขั้นตอนการเลือกซื้อและภาพลักษณ์แบรนด์ แล้วจึงพัฒนาเว็บไซต์บน Shopify ตามดีไซน์ที่วางไว้",
      overviewHeading: "ภาพรวมโปรเจกต์",
      overview: "โปรเจกต์นี้ให้ PAÑPURI มีเว็บไซต์อีคอมเมิร์ซบน Shopify ที่สื่อความพรีเมียมของแบรนด์ และจัดการร้านค้าได้สะดวก",
      approachHeading: "แนวทางที่เราทำ",
      approach: [
        { title: "ออกแบบ UX/UI", desc: "วางขั้นตอนการเลือกซื้อและภาพลักษณ์แบรนด์ก่อนเริ่มพัฒนา" },
        { title: "พัฒนาเว็บไซต์อีคอมเมิร์ซบน Shopify", desc: "พัฒนาร้านค้าออนไลน์บน Shopify ต่อจากดีไซน์ที่วางไว้" },
        { title: "ระบบสั่งซื้อและชำระเงิน", desc: "ตั้งค่าตะกร้าสินค้าและขั้นตอนชำระเงินให้ใช้ง่าย" },
        { title: "จัดสินค้าและคอนเทนต์", desc: "จัดหมวดหมู่สินค้าและคอนเทนต์ให้สื่อแบรนด์ได้สม่ำเสมอ" },
      ],
      keyFeaturesHeading: "ฟีเจอร์เด่น",
      keyFeatures: [
        { title: "ซื้อสินค้าได้สะดวก", bullets: ["เลือกดูสินค้าตามหมวดหมู่ได้ง่าย", "ตะกร้าสินค้าและขั้นตอนชำระเงินที่ชัดเจน", "ใช้สะดวกทั้งบนมือถือและเดสก์ท็อป"] },
        { title: "ออกแบบ UX/UI ก่อนพัฒนา", bullets: ["วางการใช้งานให้ชัดตั้งแต่ต้น", "ภาพลักษณ์พรีเมียมที่เข้ากับแบรนด์", "ดีไซน์กับเว็บไซต์ไปในทิศทางเดียวกัน"] },
        { title: "บริหารร้านค้าบน Shopify", bullets: ["จัดการสินค้าและคำสั่งซื้อได้สะดวก", "เพิ่มสินค้าและคอนเทนต์ใหม่ได้ง่าย", "พร้อมต่อยอดในอนาคต"] },
      ],
      backLabel: "กลับไปหน้าผลงาน",
      servicesLabel: "บริการที่เราทำ",
    },
    en: {
      badge: "E-Commerce",
      client: "PAÑPURI",
      title: "PAÑPURI E-Commerce Website on Shopify",
      desc: "Designed the UX/UI first, then built an e-commerce website on Shopify for PAÑPURI, a Thai wellness and skincare brand, communicating a premium brand image and a smooth shopping experience.",
      duration: "3 months",
      servicesProvided: ["UX/UI Design", "Shopify E-Commerce Development", "Ordering & Checkout", "Product & Content Setup"],
      heroImage: "/images/case-studies/panpuri/cover.jpg",
      challengeHeading: "The Challenge",
      challenge: "PAÑPURI needed an e-commerce website that communicated its premium wellness and skincare image, with a smooth shopping experience.",
      solutionHeading: "Our Solution",
      solution: "Started with UX/UI design to shape the shopping experience and brand image, then built the website on Shopify based on the finished design.",
      overviewHeading: "Project Overview",
      overview: "The project gave PAÑPURI a Shopify e-commerce website that conveys the brand’s premium feel and is easy to manage.",
      approachHeading: "Our Approach",
      approach: [
        { title: "UX/UI Design", desc: "Structured the shopping experience and brand image before development began." },
        { title: "Shopify E-Commerce Development", desc: "Built the online store on Shopify on top of the finished design." },
        { title: "Ordering & Checkout", desc: "Set up the cart and checkout flow to be simple to use." },
        { title: "Product & Content Setup", desc: "Organized products and content to communicate the brand consistently." },
      ],
      keyFeaturesHeading: "Key Features",
      keyFeatures: [
        { title: "Smooth Shopping Experience", bullets: ["Easy browsing of products by category", "Clear cart and checkout flow", "Easy to use on both mobile and desktop"] },
        { title: "UX/UI-First Design Process", bullets: ["User experience structured from the start", "Premium look consistent with the brand", "Design and website aligned end to end"] },
        { title: "Store Management on Shopify", bullets: ["Manage products and orders with ease", "Add new products and content easily", "Ready to extend in the future"] },
      ],
      backLabel: "Back to Case Studies",
      servicesLabel: "Services Provided",
    },
  },
  {
    slug: 'shanghai-mansion-bangkok',
    industryTag: 'Hospitality & Travel',
    result: 'เว็บไซต์ + ระบบจองห้องพัก',
    year: '2025',
    th: {
      badge: "Hospitality & Travel",
      client: "Shanghai Mansion Bangkok",
      title: "เว็บไซต์โรงแรมพร้อมระบบจองห้องพักออนไลน์",
      desc: "พัฒนาเว็บไซต์พร้อมระบบจองห้องพักออนไลน์ให้ Shanghai Mansion Bangkok โรงแรมบูติก เพื่อแสดงห้องพักและบรรยากาศของโรงแรม และให้แขกจองได้สะดวก",
      duration: "3 เดือน",
      servicesProvided: ["ออกแบบ UX/UI", "พัฒนาเว็บไซต์โรงแรม", "ระบบจองห้องพักออนไลน์", "จัดภาพถ่ายและคอนเทนต์"],
      heroImage: "/images/case-studies/shanghai-mansion-bangkok/cover.jpg",
      challengeHeading: "โจทย์ของโปรเจกต์",
      challenge: "Shanghai Mansion Bangkok ต้องการเว็บไซต์ที่แสดงเอกลักษณ์ของโรงแรมบูติก และให้แขกดูห้องพักและจองได้เอง",
      solutionHeading: "แนวทางที่เราทำ",
      solution: "เราออกแบบและพัฒนาเว็บไซต์ที่สื่อบรรยากาศของโรงแรม พร้อมระบบจองห้องพักออนไลน์ที่ใช้ง่าย",
      overviewHeading: "ภาพรวมโปรเจกต์",
      overview: "โปรเจกต์นี้ให้ Shanghai Mansion Bangkok มีเว็บไซต์และระบบจองห้องพักออนไลน์ ที่แขกจองตรงได้",
      approachHeading: "แนวทางที่เราทำ",
      approach: [
        { title: "ออกแบบ UX/UI", desc: "จัดหน้าเว็บและขั้นตอนการจองให้แขกใช้สะดวก" },
        { title: "พัฒนาเว็บไซต์โรงแรม", desc: "พัฒนาเว็บไซต์ที่แสดงห้องพักและบรรยากาศของโรงแรม" },
        { title: "ระบบจองห้องพักออนไลน์", desc: "พัฒนาระบบให้แขกเลือกห้องและส่งคำขอจองผ่านเว็บไซต์" },
        { title: "จัดภาพถ่ายและคอนเทนต์", desc: "จัดภาพถ่ายและคอนเทนต์ให้สื่อเอกลักษณ์ของโรงแรม" },
      ],
      keyFeaturesHeading: "ฟีเจอร์เด่น",
      keyFeatures: [
        { title: "จองห้องพักออนไลน์ได้สะดวก", bullets: ["เลือกห้องพักและส่งคำขอจองผ่านเว็บไซต์", "ขั้นตอนการจองชัดเจน", "ใช้สะดวกทั้งบนมือถือและเดสก์ท็อป"] },
        { title: "แสดงห้องพักและบรรยากาศ", bullets: ["ภาพถ่ายที่สื่อเอกลักษณ์ของโรงแรม", "รายละเอียดห้องพักเข้าใจง่าย", "ดีไซน์เข้ากับภาพลักษณ์โรงแรมบูติก"] },
        { title: "พร้อมต่อยอดในอนาคต", bullets: ["เพิ่มห้องพักและคอนเทนต์ได้", "จัดการข้อมูลห้องพักได้สะดวก", "เว็บไซต์ทำงานเร็วและเสถียร"] },
      ],
      backLabel: "กลับไปหน้าผลงาน",
      servicesLabel: "บริการที่เราทำ",
    },
    en: {
      badge: "Hospitality & Travel",
      client: "Shanghai Mansion Bangkok",
      title: "Hotel Website with Online Room Booking",
      desc: "Built a website with an online room-booking system for Shanghai Mansion Bangkok, a boutique hotel, presenting its rooms and atmosphere and making it easy for guests to book.",
      duration: "3 months",
      servicesProvided: ["UX/UI Design", "Hotel Website Development", "Online Room Booking System", "Photography & Content Layout"],
      heroImage: "/images/case-studies/shanghai-mansion-bangkok/cover.jpg",
      challengeHeading: "The Challenge",
      challenge: "Shanghai Mansion Bangkok needed a website that presented the identity of a boutique hotel and let guests check rooms and book on their own.",
      solutionHeading: "Our Solution",
      solution: "We designed and built a website that communicates the hotel’s atmosphere, together with an easy-to-use online room-booking system.",
      overviewHeading: "Project Overview",
      overview: "The project gave Shanghai Mansion Bangkok a website and online booking system that supports direct reservations from guests.",
      approachHeading: "Our Approach",
      approach: [
        { title: "UX/UI Design", desc: "Structured the pages and booking flow so guests can use them with ease." },
        { title: "Hotel Website Development", desc: "Built a website presenting the hotel’s rooms and atmosphere." },
        { title: "Online Room Booking System", desc: "Built a system for guests to choose a room and submit a booking request through the website." },
        { title: "Photography & Content Layout", desc: "Arranged photography and content to communicate the hotel’s identity." },
      ],
      keyFeaturesHeading: "Key Features",
      keyFeatures: [
        { title: "Easy Online Room Booking", bullets: ["Choose a room and submit a booking request on the website", "Clear booking flow", "Easy to use on both mobile and desktop"] },
        { title: "Showcasing Rooms and Atmosphere", bullets: ["Photography that conveys the hotel’s identity", "Room details that are easy to understand", "Design consistent with a boutique hotel image"] },
        { title: "Built to Scale", bullets: ["Structure supports adding rooms and content", "Room information is easy to manage", "Reliable, high-performance website"] },
      ],
      backLabel: "Back to Case Studies",
      servicesLabel: "Services Provided",
    },
  },
  {
    slug: 'jampha-shopping-mall',
    industryTag: 'Retail & Shopping Mall',
    result: 'เว็บไซต์อีคอมเมิร์ซ + AI',
    year: '2025',
    th: {
      badge: "Retail & Shopping Mall",
      client: "Jampha Shopping Mall",
      title: "เว็บไซต์อีคอมเมิร์ซและระบบ AI ช่วยงานหลังบ้าน",
      desc: "พัฒนาเว็บไซต์อีคอมเมิร์ซและระบบ AI ช่วยงานหลังบ้านและดูแลลูกค้าให้ Jampha Shopping Mall ศูนย์การค้าชุมชน เพื่อขยายช่องทางขายออนไลน์",
      duration: "4 เดือน",
      servicesProvided: ["พัฒนาเว็บไซต์อีคอมเมิร์ซ", "พัฒนาระบบ AI", "ระบบสั่งซื้อและชำระเงิน", "ออกแบบ UX/UI"],
      heroImage: "/images/case-studies/jampha-shopping-mall/cover.jpg",
      challengeHeading: "โจทย์ของโปรเจกต์",
      challenge: "Jampha Shopping Mall ต้องการช่องทางขายออนไลน์สำหรับร้านค้าและสินค้า พร้อมเครื่องมือที่ช่วยลดงานหลังบ้านและดูแลลูกค้า",
      solutionHeading: "แนวทางที่เราทำ",
      solution: "เราพัฒนาเว็บไซต์อีคอมเมิร์ซที่ใช้ง่าย และเพิ่มระบบ AI ที่ช่วยทีมงานและลูกค้าในงานประจำวัน",
      overviewHeading: "ภาพรวมโปรเจกต์",
      overview: "โปรเจกต์นี้ให้ Jampha Shopping Mall มีเว็บไซต์อีคอมเมิร์ซและระบบ AI ที่ช่วยทั้งงานขายและงานหลังบ้าน",
      approachHeading: "แนวทางที่เราทำ",
      approach: [
        { title: "ออกแบบ UX/UI", desc: "จัดหน้าเว็บและขั้นตอนการเลือกซื้อให้ใช้สะดวก" },
        { title: "พัฒนาเว็บไซต์อีคอมเมิร์ซ", desc: "พัฒนาเว็บไซต์ร้านค้าออนไลน์สำหรับแสดงและขายสินค้า" },
        { title: "พัฒนาระบบ AI", desc: "พัฒนาระบบ AI ช่วยงานหลังบ้านและการดูแลลูกค้า" },
        { title: "ระบบสั่งซื้อและชำระเงิน", desc: "จัดตะกร้าสินค้าและขั้นตอนชำระเงินให้ใช้ง่าย" },
      ],
      keyFeaturesHeading: "ฟีเจอร์เด่น",
      keyFeatures: [
        { title: "ช่องทางขายออนไลน์", bullets: ["แสดงสินค้าตามหมวดหมู่ให้ค้นหาง่าย", "ตะกร้าสินค้าและขั้นตอนชำระเงินที่ชัดเจน", "ใช้สะดวกทั้งบนมือถือและเดสก์ท็อป"] },
        { title: "ระบบ AI ช่วยงาน", bullets: ["ช่วยงานประจำของทีม", "ช่วยดูแลและตอบคำถามลูกค้า", "ลดงานซ้ำซ้อนในแต่ละวัน"] },
        { title: "พร้อมต่อยอดในอนาคต", bullets: ["เพิ่มสินค้าและร้านค้าได้", "เพิ่มความสามารถ AI ได้ในอนาคต", "ระบบทำงานเร็วและเสถียร"] },
      ],
      backLabel: "กลับไปหน้าผลงาน",
      servicesLabel: "บริการที่เราทำ",
    },
    en: {
      badge: "Retail & Shopping Mall",
      client: "Jampha Shopping Mall",
      title: "E-Commerce Website and AI for Operations",
      desc: "Built an e-commerce website and an AI system that supports operations and customer service for Jampha Shopping Mall, a community shopping mall, expanding its online sales channel.",
      duration: "4 months",
      servicesProvided: ["E-Commerce Website Development", "AI Development", "Ordering & Checkout", "UX/UI Design"],
      heroImage: "/images/case-studies/jampha-shopping-mall/cover.jpg",
      challengeHeading: "The Challenge",
      challenge: "Jampha Shopping Mall needed an online sales channel for its shops and products, along with tools that reduce operational workload and help look after customers.",
      solutionHeading: "Our Solution",
      solution: "We built an easy-to-use e-commerce website and added an AI system that supports the team and customers in day-to-day operations.",
      overviewHeading: "Project Overview",
      overview: "The project gave Jampha Shopping Mall an e-commerce website and AI system that supports both sales and operations.",
      approachHeading: "Our Approach",
      approach: [
        { title: "UX/UI Design", desc: "Structured the pages and shopping experience to be easy to use." },
        { title: "E-Commerce Website Development", desc: "Built an online store website to present and sell products." },
        { title: "AI Development", desc: "Built an AI system to support operations and customer care." },
        { title: "Ordering & Checkout", desc: "Set up the cart and checkout flow to be simple to use." },
      ],
      keyFeaturesHeading: "Key Features",
      keyFeatures: [
        { title: "Online Sales Channel", bullets: ["Products organized by category for easy discovery", "Clear cart and checkout flow", "Easy to use on both mobile and desktop"] },
        { title: "AI-Assisted Operations", bullets: ["Supports the team’s daily operations", "Helps look after and answer customers", "Reduces repetitive daily work"] },
        { title: "Built to Scale", bullets: ["Structure supports adding products and shops", "AI capabilities can be extended over time", "Reliable, high-performance system"] },
      ],
      backLabel: "Back to Case Studies",
      servicesLabel: "Services Provided",
    },
  },
  {
    "slug": "prima-marine",
    "industryTag": "Logistics & Marine",
    "result": "เว็บไซต์ใหม่",
    "year": "2025",
    "th": {
      "badge": "ขนส่งและโลจิสติกส์ทางทะเล",
      "client": "Prima Marine",
      "title": "เว็บไซต์องค์กรสำหรับธุรกิจขนส่งทางทะเล",
      "desc": "เว็บไซต์องค์กรที่แสดงกองเรือ บริการ และความน่าเชื่อถือของบริษัทมหาชนด้านขนส่งทางทะเล",
      "duration": "3 เดือน",
      "servicesProvided": [
        "พัฒนาเว็บไซต์",
        "ออกแบบ UX/UI"
      ],
      "heroImage": "/images/case-studies/prima-marine/cover.jpg",
      "challengeHeading": "โจทย์ของโปรเจกต์",
      "challenge": "Prima Marine เป็นบริษัทมหาชนด้านขนส่งทางทะเล ต้องการเว็บไซต์ที่แสดงขนาดธุรกิจ ความปลอดภัย และความน่าเชื่อถือต่อลูกค้า พันธมิตร และนักลงทุน",
      "solutionHeading": "แนวทางที่เราทำ",
      "solution": "เราออกแบบและพัฒนาเว็บไซต์องค์กรที่ดูมืออาชีพ แสดงบริการและการดำเนินงานอย่างเป็นระเบียบ และดูแลต่อได้ง่าย",
      "overviewHeading": "ภาพรวมโปรเจกต์",
      "overview": "โปรเจกต์ของ Prima Marine คือเว็บไซต์องค์กรที่แสดงกองเรือ บริการ และความน่าเชื่อถือของบริษัทมหาชนด้านขนส่งทางทะเล",
      "approachHeading": "แนวทางที่เราทำ",
      "approach": [
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ที่เร็ว ใช้ได้ทุกอุปกรณ์ และให้ทีมงานอัปเดตเนื้อหาได้เอง"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบ Wireframe และหน้าตาเว็บไซต์ให้ชัดเจนและใช้ง่ายทุกหน้า"
        },
        {
          "title": "ศึกษาธุรกิจและกลุ่มเป้าหมาย",
          "desc": "ทำความเข้าใจธุรกิจ กลุ่มลูกค้า และเป้าหมาย เพื่อกำหนดขอบเขตงานและวิธีวัดผล"
        },
        {
          "title": "ทดสอบและเปิดใช้งาน",
          "desc": "ทดสอบบนหลายอุปกรณ์และเบราว์เซอร์ เปิดใช้งานและส่งมอบให้ทีมงาน"
        }
      ],
      "keyFeaturesHeading": "ฟีเจอร์เด่น",
      "keyFeatures": [
        {
          "title": "การแสดงบริการ",
          "bullets": [
            "ภาพรวมบริการขนส่งทางทะเลที่ชัดเจน",
            "แสดงกองเรือและการดำเนินงานด้วยภาพที่ทรงพลัง",
            "ช่องทางสอบถามและติดต่อทีมงานที่หาง่าย"
          ]
        },
        {
          "title": "ความน่าเชื่อถือขององค์กร",
          "bullets": [
            "เลย์เอาต์มืออาชีพ เหมาะกับบริษัทมหาชน",
            "จัดข้อมูลบริษัทสำหรับพันธมิตรและนักลงทุน",
            "งานภาพที่เป็นแนวเดียวกันและน่าเชื่อถือ"
          ]
        },
        {
          "title": "พร้อมดูแลต่อเนื่อง",
          "bullets": [
            "ทีมงานอัปเดตเนื้อหาได้เอง",
            "รวดเร็วและรองรับทุกอุปกรณ์",
            "เพิ่มบริการและข่าวสารใหม่ได้"
          ]
        }
      ],
      "backLabel": "กลับไปหน้าผลงาน",
      "servicesLabel": "บริการที่เราทำ"
    },
    "en": {
      "badge": "Logistics & Marine",
      "client": "Prima Marine",
      "title": "Corporate Website for a Marine Logistics Company",
      "desc": "A corporate website presenting the fleet, services and credibility of a publicly listed marine logistics company.",
      "duration": "3 months",
      "servicesProvided": [
        "Website Development",
        "UX/UI Design"
      ],
      "heroImage": "/images/case-studies/prima-marine/cover.jpg",
      "challengeHeading": "The Challenge",
      "challenge": "As a publicly listed marine logistics company, Prima Marine needed a website that conveys scale, safety and reliability to customers, partners and investors.",
      "solutionHeading": "Our Solution",
      "solution": "We designed and built a clear, professional corporate website that presents services and operations in an organized way and is easy to maintain.",
      "overviewHeading": "Project Overview",
      "overview": "This project gave Prima Marine: A corporate website presenting the fleet, services and credibility of a publicly listed marine logistics company.",
      "approachHeading": "Our Approach",
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
      "keyFeaturesHeading": "Key Features",
      "keyFeatures": [
        {
          "title": "Service Presentation",
          "bullets": [
            "Clear overview of marine logistics services",
            "Fleet and operations presented with strong imagery",
            "Easy paths to enquire or contact the team"
          ]
        },
        {
          "title": "Corporate Credibility",
          "bullets": [
            "Professional layout suited to a listed company",
            "Company information organized for partners and investors",
            "Consistent, trustworthy visual language"
          ]
        },
        {
          "title": "Built to Maintain",
          "bullets": [
            "Content the team can update independently",
            "Fast, responsive on every device",
            "Structure ready for new services and news"
          ]
        }
      ],
      "backLabel": "Back to Case Studies",
      "servicesLabel": "Services Provided"
    }
  },
  {
    "slug": "baan-khanitha",
    "industryTag": "F&B",
    "result": "เว็บไซต์ใหม่",
    "year": "2025",
    "th": {
      "badge": "ร้านอาหารและเครื่องดื่ม",
      "client": "Baan Khanitha Thai Cuisine",
      "title": "เว็บไซต์ร้านอาหารไทยชื่อดัง",
      "desc": "ออกแบบ UX/UI และพัฒนาเว็บไซต์ที่สื่อถึงความอบอุ่นและเอกลักษณ์ของร้านอาหารไทยชั้นนำ",
      "duration": "2 เดือน",
      "servicesProvided": [
        "พัฒนาเว็บไซต์",
        "ออกแบบ UX/UI"
      ],
      "heroImage": "/images/case-studies/baan-khanitha/cover.jpg",
      "challengeHeading": "โจทย์ของโปรเจกต์",
      "challenge": "Baan Khanitha เป็นร้านอาหารไทยชื่อดังที่ชื่อเสียงมาจากบรรยากาศและอาหาร เว็บไซต์ต้องสะท้อนประสบการณ์นั้น และให้คนดูเมนูและหาทางไปร้านได้ง่าย",
      "solutionHeading": "แนวทางที่เราทำ",
      "solution": "เราออกแบบตามเอกลักษณ์ของร้าน และพัฒนาเว็บไซต์ที่สวยงามเรียบง่าย สำหรับดูเมนู สาขา และการจอง",
      "overviewHeading": "ภาพรวมโปรเจกต์",
      "overview": "โปรเจกต์ของ Baan Khanitha Thai Cuisine คือออกแบบ UX/UI และพัฒนาเว็บไซต์ที่สื่อถึงความอบอุ่นและเอกลักษณ์ของร้านอาหารไทยชั้นนำ",
      "approachHeading": "แนวทางที่เราทำ",
      "approach": [
        {
          "title": "ศึกษาธุรกิจและกลุ่มเป้าหมาย",
          "desc": "ทำความเข้าใจธุรกิจ กลุ่มลูกค้า และเป้าหมาย เพื่อกำหนดขอบเขตงานและวิธีวัดผล"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบ Wireframe และหน้าตาเว็บไซต์ให้ชัดเจนและใช้ง่ายทุกหน้า"
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
      "keyFeaturesHeading": "ฟีเจอร์เด่น",
      "keyFeatures": [
        {
          "title": "บรรยากาศแบรนด์",
          "bullets": [
            "ภาพและเลย์เอาต์ที่สะท้อนประสบการณ์การทานอาหาร",
            "ตัวอักษรประณีตและโทนสีอบอุ่น",
            "เล่าเรื่องราวของอาหารและวัฒนธรรม"
          ]
        },
        {
          "title": "เมนูและการมาเยือน",
          "bullets": [
            "เมนูที่ดูชัดเจน",
            "ดูสาขา เวลา และช่องทางติดต่อได้ทันที",
            "จองโต๊ะได้ง่าย"
          ]
        },
        {
          "title": "พร้อมต้อนรับแขก",
          "bullets": [
            "เร็วบนมือถือที่ลูกค้าส่วนใหญ่ใช้",
            "ทีมงานอัปเดตเนื้อหาได้",
            "ตั้งค่า SEO พื้นฐานสำหรับการค้นหาในพื้นที่"
          ]
        }
      ],
      "backLabel": "กลับไปหน้าผลงาน",
      "servicesLabel": "บริการที่เราทำ"
    },
    "en": {
      "badge": "F&B",
      "client": "Baan Khanitha Thai Cuisine",
      "title": "Website for a Renowned Thai Restaurant",
      "desc": "UX/UI design and a website that carries the warmth and heritage of a well-known Thai fine-dining restaurant.",
      "duration": "2 months",
      "servicesProvided": [
        "Website Development",
        "UX/UI Design"
      ],
      "heroImage": "/images/case-studies/baan-khanitha/cover.jpg",
      "challengeHeading": "The Challenge",
      "challenge": "Baan Khanitha is a well-known Thai restaurant whose atmosphere and cuisine are central to its reputation. Its website needed to reflect that experience and make it easy to discover the menu and visit.",
      "solutionHeading": "Our Solution",
      "solution": "We designed the experience around the restaurant's character and built an elegant, easy-to-browse website for menus, locations and reservations.",
      "overviewHeading": "Project Overview",
      "overview": "This project gave Baan Khanitha Thai Cuisine: UX/UI design and a website that carries the warmth and heritage of a well-known Thai fine-dining restaurant.",
      "approachHeading": "Our Approach",
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
      "keyFeaturesHeading": "Key Features",
      "keyFeatures": [
        {
          "title": "Brand Atmosphere",
          "bullets": [
            "Imagery and layout that echo the dining experience",
            "Refined typography and warm palette",
            "Storytelling about the cuisine and heritage"
          ]
        },
        {
          "title": "Menu & Visit",
          "bullets": [
            "Clear menu presentation",
            "Location, hours and contact details at a glance",
            "Easy path to book a table"
          ]
        },
        {
          "title": "Ready for Guests",
          "bullets": [
            "Fast on mobile where most guests browse",
            "Content the team can update",
            "SEO foundations for local search"
          ]
        }
      ],
      "backLabel": "Back to Case Studies",
      "servicesLabel": "Services Provided"
    }
  },
  {
    "slug": "dsk",
    "industryTag": "Beauty & Aesthetics",
    "result": "เว็บไซต์ + CRM",
    "year": "2025",
    "th": {
      "badge": "ความงามและศัลยกรรม",
      "client": "DSK",
      "title": "เว็บไซต์ UX/UI และ AI CRM สำหรับคลินิกศัลยกรรมความงาม",
      "desc": "ให้คำปรึกษาธุรกิจ ออกแบบเว็บไซต์และ UX/UI พร้อม CRM ที่มี AI ช่วย สำหรับธุรกิจศัลยกรรมความงาม",
      "duration": "4 เดือน",
      "servicesProvided": [
        "ให้คำปรึกษาธุรกิจ",
        "ออกแบบเว็บไซต์",
        "ออกแบบ UX/UI",
        "CRM ที่มี AI ช่วย"
      ],
      "heroImage": "/images/case-studies/dsk/cover.jpg",
      "challengeHeading": "โจทย์ของโปรเจกต์",
      "challenge": "DSK ธุรกิจศัลยกรรมความงาม ต้องการภาพลักษณ์ออนไลน์ที่ประณีตและน่าไว้ใจ พร้อมวิธีจัดการและติดตามลูกค้าที่สนใจให้ดีขึ้น",
      "solutionHeading": "แนวทางที่เราทำ",
      "solution": "เราเริ่มจากให้คำปรึกษาธุรกิจ แล้วออกแบบเว็บไซต์และ UX/UI ที่ดูสง่างาม พร้อมเพิ่ม CRM ที่มี AI ช่วยจัดการและติดตามลูกค้า",
      "overviewHeading": "ภาพรวมโปรเจกต์",
      "overview": "โปรเจกต์ของ DSK ประกอบด้วยให้คำปรึกษาธุรกิจ ออกแบบเว็บไซต์และ UX/UI พร้อม CRM ที่มี AI ช่วย สำหรับธุรกิจศัลยกรรมความงาม",
      "approachHeading": "แนวทางที่เราทำ",
      "approach": [
        {
          "title": "ให้คำปรึกษาธุรกิจ",
          "desc": "ให้คำปรึกษาเรื่องแผนดิจิทัล และบทบาทของเว็บไซต์ต่อเป้าหมายธุรกิจ"
        },
        {
          "title": "ศึกษาธุรกิจและกลุ่มเป้าหมาย",
          "desc": "ทำความเข้าใจธุรกิจ กลุ่มลูกค้า และเป้าหมาย เพื่อกำหนดขอบเขตงานและวิธีวัดผล"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบ Wireframe และหน้าตาเว็บไซต์ให้ชัดเจนและใช้ง่ายทุกหน้า"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ที่เร็ว ใช้ได้ทุกอุปกรณ์ และให้ทีมงานอัปเดตเนื้อหาได้เอง"
        }
      ],
      "keyFeaturesHeading": "ฟีเจอร์เด่น",
      "keyFeatures": [
        {
          "title": "เว็บไซต์ที่สร้างความไว้ใจ",
          "bullets": [
            "อัตลักษณ์ภาพที่สง่างาม เหมาะกับธุรกิจความงาม",
            "แสดงบริการและข้อมูลอย่างชัดเจน",
            "ช่องทางสอบถามและปรึกษาที่ใช้ง่าย"
          ]
        },
        {
          "title": "CRM ที่มี AI ช่วย",
          "bullets": [
            "รวมลูกค้าที่สนใจไว้ในที่เดียว",
            "AI ช่วยคัดแยกและจัดลำดับการติดตาม",
            "ติดต่อลูกค้าอย่างสม่ำเสมอ"
          ]
        },
        {
          "title": "คำปรึกษาธุรกิจ",
          "bullets": [
            "แผนดิจิทัลที่ตรงกับเป้าหมายธุรกิจ",
            "คำแนะนำเรื่อง Customer Journey",
            "แผนพัฒนาต่อยอดในอนาคต"
          ]
        }
      ],
      "backLabel": "กลับไปหน้าผลงาน",
      "servicesLabel": "บริการที่เราทำ"
    },
    "en": {
      "badge": "Beauty & Aesthetics",
      "client": "DSK",
      "title": "Website, UX/UI and AI-Assisted CRM for an Aesthetic Clinic",
      "desc": "Business consulting, website design and UX/UI, plus AI-assisted CRM for an aesthetic surgery business.",
      "duration": "4 months",
      "servicesProvided": [
        "Business Consulting",
        "Website Design",
        "UX/UI Design",
        "AI-Assisted CRM"
      ],
      "heroImage": "/images/case-studies/dsk/cover.jpg",
      "challengeHeading": "The Challenge",
      "challenge": "DSK, an aesthetic surgery business, needed a refined online presence that builds trust, along with a better way to manage and follow up customer enquiries.",
      "solutionHeading": "Our Solution",
      "solution": "We started with business consulting, then designed an elegant website and UX/UI, and added an AI-assisted CRM to organize and follow up enquiries.",
      "overviewHeading": "Project Overview",
      "overview": "This project gave DSK: Business consulting, website design and UX/UI, plus AI-assisted CRM for an aesthetic surgery business.",
      "approachHeading": "Our Approach",
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
        }
      ],
      "keyFeaturesHeading": "Key Features",
      "keyFeatures": [
        {
          "title": "Trust-Building Website",
          "bullets": [
            "Elegant visual identity suited to aesthetics",
            "Clear presentation of services and information",
            "Simple path to enquire or consult"
          ]
        },
        {
          "title": "AI-Assisted CRM",
          "bullets": [
            "Captures enquiries in one place",
            "AI helps sort and prioritize follow-ups",
            "Consistent customer communication"
          ]
        },
        {
          "title": "Business Guidance",
          "bullets": [
            "Digital strategy aligned with business goals",
            "Recommendations on customer journey",
            "Roadmap for future improvements"
          ]
        }
      ],
      "backLabel": "Back to Case Studies",
      "servicesLabel": "Services Provided"
    }
  },
  {
    "slug": "admire",
    "industryTag": "Construction & Real Estate",
    "result": "เว็บไซต์ + CRM",
    "year": "2025",
    "th": {
      "badge": "ก่อสร้างและอสังหาริมทรัพย์",
      "client": "Admire",
      "title": "เว็บไซต์ UX/UI และ AI CRM สำหรับธุรกิจรับสร้างบ้าน",
      "desc": "ออกแบบ UX/UI และพัฒนาเว็บไซต์ใหม่สำหรับธุรกิจรับสร้างบ้าน พร้อม CRM ที่มี AI ช่วยจัดการลูกค้าที่สนใจ",
      "duration": "4 เดือน",
      "servicesProvided": [
        "ออกแบบ UX/UI",
        "พัฒนาเว็บไซต์",
        "CRM ที่มี AI ช่วย"
      ],
      "heroImage": "/images/case-studies/admire/cover.jpg",
      "challengeHeading": "โจทย์ของโปรเจกต์",
      "challenge": "Admire รับสร้างบ้าน ซึ่งผู้ซื้อต้องใช้เวลาดูแบบบ้านและเปรียบเทียบผู้รับเหมา ธุรกิจต้องการเว็บไซต์ที่โชว์ผลงาน และระบบที่ไม่ปล่อยให้ลูกค้าที่สนใจหลุดมือ",
      "solutionHeading": "แนวทางที่เราทำ",
      "solution": "เราออกแบบ UX/UI ที่เน้นแบบบ้าน พัฒนาเว็บไซต์ และเพิ่ม CRM ที่มี AI ช่วยเก็บและติดตามทุกคำถามจากลูกค้า",
      "overviewHeading": "ภาพรวมโปรเจกต์",
      "overview": "โปรเจกต์ของ Admire ประกอบด้วยออกแบบ UX/UI และพัฒนาเว็บไซต์ใหม่สำหรับธุรกิจรับสร้างบ้าน พร้อม CRM ที่มี AI ช่วยจัดการลูกค้าที่สนใจ",
      "approachHeading": "แนวทางที่เราทำ",
      "approach": [
        {
          "title": "ศึกษาธุรกิจและกลุ่มเป้าหมาย",
          "desc": "ทำความเข้าใจธุรกิจ กลุ่มลูกค้า และเป้าหมาย เพื่อกำหนดขอบเขตงานและวิธีวัดผล"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบ Wireframe และหน้าตาเว็บไซต์ให้ชัดเจนและใช้ง่ายทุกหน้า"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ที่เร็ว ใช้ได้ทุกอุปกรณ์ และให้ทีมงานอัปเดตเนื้อหาได้เอง"
        },
        {
          "title": "เชื่อมระบบ AI และ CRM",
          "desc": "เพิ่ม CRM ที่มี AI ช่วยเก็บ จัดการ และติดตามลูกค้าที่สนใจอย่างสม่ำเสมอ"
        }
      ],
      "keyFeaturesHeading": "ฟีเจอร์เด่น",
      "keyFeatures": [
        {
          "title": "โชว์แบบบ้านและผลงาน",
          "bullets": [
            "ภาพใหญ่ของแบบบ้านและผลงานจริง",
            "เลือกดูตามสไตล์และโครงการได้ง่าย",
            "ช่องทางขอคำปรึกษาที่ชัดเจน"
          ]
        },
        {
          "title": "CRM ที่มี AI ช่วย",
          "bullets": [
            "ทุกคำถามจากลูกค้ารวมอยู่ในที่เดียว",
            "AI ช่วยจัดลำดับความสำคัญและเตือนให้ติดตาม",
            "เห็นสถานะตั้งแต่เริ่มสนใจจนถึงเซ็นสัญญา"
          ]
        },
        {
          "title": "พร้อมเติบโต",
          "bullets": [
            "เพิ่มแบบบ้านและโครงการใหม่ได้ง่าย",
            "รวดเร็วและรองรับทุกอุปกรณ์",
            "ตั้งค่า SEO พื้นฐานสำหรับการค้นหาบริการรับสร้างบ้าน"
          ]
        }
      ],
      "backLabel": "กลับไปหน้าผลงาน",
      "servicesLabel": "บริการที่เราทำ"
    },
    "en": {
      "badge": "Construction & Real Estate",
      "client": "Admire",
      "title": "Website, UX/UI and AI-Assisted CRM for a Home Builder",
      "desc": "UX/UI design and a new website for a custom home builder, with AI-assisted CRM to manage leads.",
      "duration": "4 months",
      "servicesProvided": [
        "UX/UI Design",
        "Website Development",
        "AI-Assisted CRM"
      ],
      "heroImage": "/images/case-studies/admire/cover.jpg",
      "challengeHeading": "The Challenge",
      "challenge": "Admire builds custom homes, where buyers take time to explore designs and compare builders. The business needed a website that showcases its work and a system that does not let promising leads slip away.",
      "solutionHeading": "Our Solution",
      "solution": "We designed a UX/UI centered on the home designs, built the website, and added AI-assisted CRM that captures and follows up every enquiry.",
      "overviewHeading": "Project Overview",
      "overview": "This project gave Admire: UX/UI design and a new website for a custom home builder, with AI-assisted CRM to manage leads.",
      "approachHeading": "Our Approach",
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
        }
      ],
      "keyFeaturesHeading": "Key Features",
      "keyFeatures": [
        {
          "title": "Home Showcase",
          "bullets": [
            "Large imagery for designs and finished homes",
            "Easy browsing by style and project",
            "Clear way to request a consultation"
          ]
        },
        {
          "title": "AI-Assisted CRM",
          "bullets": [
            "Every enquiry captured in one place",
            "AI helps prioritize and remind follow-ups",
            "Visibility from lead to contract"
          ]
        },
        {
          "title": "Built to Grow",
          "bullets": [
            "Add new designs and projects easily",
            "Fast and responsive on every device",
            "SEO foundations for home-building searches"
          ]
        }
      ],
      "backLabel": "Back to Case Studies",
      "servicesLabel": "Services Provided"
    }
  },
  {
    "slug": "meko-international-hospital",
    "industryTag": "Beauty & Aesthetics",
    "result": "แบรนด์ + เว็บไซต์",
    "year": "2025",
    "th": {
      "badge": "ความงามและศัลยกรรม",
      "client": "MEKO International Hospital",
      "title": "แบรนด์ เว็บไซต์ และกราฟิกสำหรับโรงพยาบาลศัลยกรรมความงาม",
      "desc": "ออกแบบเว็บไซต์ UX/UI กราฟิก และ Brand CI สำหรับโรงพยาบาลศัลยกรรมความงามชื่อดัง",
      "duration": "5 เดือน",
      "servicesProvided": [
        "ออกแบบเว็บไซต์",
        "ออกแบบ UX/UI",
        "ออกแบบกราฟิก",
        "Brand & CI"
      ],
      "heroImage": "/images/case-studies/meko-international-hospital/cover.jpg",
      "challengeHeading": "โจทย์ของโปรเจกต์",
      "challenge": "MEKO International Hospital เป็นชื่อที่รู้จักในวงการศัลยกรรมความงาม ภาพลักษณ์ดิจิทัลและสื่อแบรนด์จึงต้องประณีตและน่าเชื่อถือเท่ากับบริการ",
      "solutionHeading": "แนวทางที่เราทำ",
      "solution": "เราทำอัตลักษณ์แบรนด์และกราฟิกควบคู่กับเว็บไซต์และ UX/UI เพื่อให้ผู้ใช้บริการเจอประสบการณ์ที่เป็นแนวเดียวกันและประณีตในทุกช่องทาง",
      "overviewHeading": "ภาพรวมโปรเจกต์",
      "overview": "โปรเจกต์ของ MEKO International Hospital ประกอบด้วยออกแบบเว็บไซต์ UX/UI กราฟิก และ Brand CI สำหรับโรงพยาบาลศัลยกรรมความงามชื่อดัง",
      "approachHeading": "แนวทางที่เราทำ",
      "approach": [
        {
          "title": "ศึกษาธุรกิจและกลุ่มเป้าหมาย",
          "desc": "ทำความเข้าใจธุรกิจ กลุ่มลูกค้า และเป้าหมาย เพื่อกำหนดขอบเขตงานและวิธีวัดผล"
        },
        {
          "title": "พัฒนาแบรนด์และ CI",
          "desc": "ทำอัตลักษณ์แบรนด์และแนวทางการใช้งาน เพื่อให้ทุกจุดที่ลูกค้าพบเห็นเป็นแนวเดียวกัน"
        },
        {
          "title": "ออกแบบ UX/UI",
          "desc": "ออกแบบ Wireframe และหน้าตาเว็บไซต์ให้ชัดเจนและใช้ง่ายทุกหน้า"
        },
        {
          "title": "พัฒนาเว็บไซต์",
          "desc": "พัฒนาเว็บไซต์ที่เร็ว ใช้ได้ทุกอุปกรณ์ และให้ทีมงานอัปเดตเนื้อหาได้เอง"
        }
      ],
      "keyFeaturesHeading": "ฟีเจอร์เด่น",
      "keyFeatures": [
        {
          "title": "อัตลักษณ์แบรนด์ (CI)",
          "bullets": [
            "แนวทางแบรนด์ทั้งโลโก้ สี และตัวอักษร",
            "หน้าตาเป็นแนวเดียวกันทั้งดิจิทัลและสื่อพิมพ์",
            "โทนภาพที่ประณีตและน่าเชื่อถือ"
          ]
        },
        {
          "title": "เว็บไซต์และ UX/UI",
          "bullets": [
            "แสดงบริการและการรักษาอย่างชัดเจน",
            "ช่องทางสอบถามและนัดปรึกษาที่ใช้ง่าย",
            "รวดเร็วและรองรับทุกอุปกรณ์"
          ]
        },
        {
          "title": "งานกราฟิก",
          "bullets": [
            "กราฟิกแคมเปญและโซเชียลมีเดีย",
            "สื่อที่เข้ากับแนวทางแบรนด์",
            "เทมเพลตที่ทีมงานนำไปใช้ซ้ำได้"
          ]
        }
      ],
      "backLabel": "กลับไปหน้าผลงาน",
      "servicesLabel": "บริการที่เราทำ"
    },
    "en": {
      "badge": "Beauty & Aesthetics",
      "client": "MEKO International Hospital",
      "title": "Brand, Website and Graphics for an Aesthetic Hospital",
      "desc": "Website design and UX/UI, graphic design and brand CI for a renowned aesthetic surgery hospital.",
      "duration": "5 months",
      "servicesProvided": [
        "Website Design",
        "UX/UI Design",
        "Graphic Design",
        "Brand & CI"
      ],
      "heroImage": "/images/case-studies/meko-international-hospital/cover.jpg",
      "challengeHeading": "The Challenge",
      "challenge": "MEKO International Hospital is a well-known name in aesthetic surgery. Its digital presence and brand materials needed to feel as refined and trustworthy as the care it provides.",
      "solutionHeading": "Our Solution",
      "solution": "We worked on the brand identity and graphics together with the website and UX/UI, so patients meet one consistent, polished experience across every channel.",
      "overviewHeading": "Project Overview",
      "overview": "This project gave MEKO International Hospital: Website design and UX/UI, graphic design and brand CI for a renowned aesthetic surgery hospital.",
      "approachHeading": "Our Approach",
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
        }
      ],
      "keyFeaturesHeading": "Key Features",
      "keyFeatures": [
        {
          "title": "Brand Identity (CI)",
          "bullets": [
            "Brand guidelines for logo, color and typography",
            "Consistent look across digital and print",
            "Refined, trustworthy visual tone"
          ]
        },
        {
          "title": "Website & UX/UI",
          "bullets": [
            "Clear presentation of treatments and services",
            "Simple paths to enquire and book a consultation",
            "Responsive, fast on every device"
          ]
        },
        {
          "title": "Graphic Design",
          "bullets": [
            "Campaign and social graphics",
            "Materials aligned with brand guidelines",
            "Reusable templates for the team"
          ]
        }
      ],
      "backLabel": "Back to Case Studies",
      "servicesLabel": "Services Provided"
    }
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug)
}
