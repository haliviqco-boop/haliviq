export type Lang = 'th' | 'en'
export const langs: Lang[] = ['th', 'en']
export const defaultLang: Lang = 'th'

export const t = {
  th: {
    // ── NAV ──
    nav: {
      services: 'บริการ', industries: 'อุตสาหกรรม', work: 'ผลงาน', partners: 'พาร์ทเนอร์',
      careers: 'ร่วมงาน', blog: 'บทความ', contact: 'ติดต่อ', cta: 'เริ่มโปรเจกต์',
      servicesNotSure: 'ยังไม่แน่ใจว่าจะเริ่มตรงไหน?', talkToUs: 'คุยกับเรา →',
      allIndustries: 'อุตสาหกรรมทั้งหมด', insights: 'บทความและแนวคิด',
    },
    // ── HERO ──
    hero: {
      badge: 'สตูดิโอพัฒนาผลิตภัณฑ์ดิจิทัล — กรุงเทพฯ',
      h1a: 'เราสร้าง', h1b: 'ผลิตภัณฑ์ดิจิทัล', h1c: 'ที่สร้างความต่าง',
      sub: 'วางกลยุทธ์ ออกแบบ และพัฒนาซอฟต์แวร์ ครบในที่เดียว ด้วยประสบการณ์กว่า 8 ปี สร้างผลิตภัณฑ์ที่ช่วยธุรกิจได้จริง',
      btn1: 'เริ่มโปรเจกต์', btn2: 'ดูผลงานของเรา',
      currentProject: 'โปรเจกต์ปัจจุบัน', mobileApp: 'ออกแบบแอปธนาคาร\nมือถือใหม่',
      stats: ['โปรเจกต์ที่ส่งมอบ', 'ประสบการณ์ในวงการ', 'ทีมผู้เชี่ยวชาญ', 'ลูกค้าที่กลับมาใช้อีก'],
      statsN: ['120+', '8 ปี', '40+', '95%'],
    },
    // ── CLIENTS ──
    clients: { label: 'แบรนด์ชั้นนำทั่วเอเชียไว้วางใจเรา' },
    // ── CORE SKILLS ──
    coreSkills: {
      h2: 'Core Skills',
      subtitle: 'Core disciplines. One integrated team.',
      desc: 'ทุกโปรเจกต์ของ Haliviq ใช้ความเชี่ยวชาญของทีมเราเอง ทั้งวิศวกรรม AI ข้อมูล และดีไซน์ ทีมเดียวดูแลผลิตภัณฑ์ตั้งแต่ร่างแรกจนถึงวันที่ใช้งานจริงในวงกว้าง งานไม่ตกหล่นระหว่างทาง',
      exploreLabel: 'ดูเพิ่ม',
      categories: [
        {
          heading: 'กลยุทธ์',
          desc: 'งานกลยุทธ์ของ Haliviq เริ่มจากการทำความเข้าใจธุรกิจก่อนลงมือ เรารวมงานวิจัย ข้อมูล และแผนการเติบโต เพื่อกำหนดทิศทางผลิตภัณฑ์จากข้อมูลจริง ไม่ใช่การเดา',
          tags: ['กลยุทธ์ดิจิทัล', 'กลยุทธ์การเติบโต', 'วิจัยผู้ใช้งาน', 'ข้อมูลและการวิเคราะห์'],
        },
        {
          heading: 'ดีไซน์',
          desc: 'งานดีไซน์ของ Haliviq เริ่มจากการเข้าใจปัญหาก่อนเปิด Figma เรารวมการวิจัยผู้ใช้งาน การออกแบบประสบการณ์ และหน้าจอ เพื่อให้ผลิตภัณฑ์ใช้งานง่ายตั้งแต่วันแรก และทดสอบทุกไอเดียกับผู้ใช้จริงก่อนเขียนโค้ดบรรทัดแรก',
          tags: ['ออกแบบประสบการณ์ (UX)', 'ออกแบบหน้าจอ (UI)', 'วิจัยผู้ใช้งาน', 'ทำ Prototype', 'ระบบดีไซน์', 'ตรวจคุณภาพงานดีไซน์'],
        },
        {
          heading: 'วิศวกรรม',
          desc: 'เราสร้างเว็บและแอปมือถือที่พร้อมใช้งานจริงตั้งแต่ต้นจนจบ ทั้ง iOS และ Android แบบ Native, Frontend ด้วย React และ Next.js และ Backend API ที่ปลอดภัยและรองรับผู้ใช้ที่เพิ่มขึ้นได้ การทดสอบอัตโนมัติ, CI/CD และ Cloud Infrastructure อยู่ในทุกงานตั้งแต่แรก ไม่ใช่มาทำทีหลัง',
          tags: ['iOS & Android', 'Web Frontend', 'Backend & APIs', 'React / Next.js / Flutter', 'Cloud & DevOps', 'Automated Testing'],
        },
        {
          heading: 'AI และนวัตกรรม',
          desc: 'เราใช้ AI ในจุดที่เกิดประโยชน์จริง ไม่ใช่เพราะกำลังเป็นกระแส ตั้งแต่ Agent ที่ทำงานหลายขั้นตอนและ Copilot ที่ใช้เครื่องมือได้ ไปจนถึงระบบความรู้แบบ RAG โมเดลพยากรณ์ และระบบแนะนำ เราดูแลทุกขั้นตอน ได้แก่ ตรวจความพร้อมด้าน AI, เตรียมข้อมูล, ออกแบบ Agent และโมเดล, ประเมินผล, เชื่อมเข้าระบบจริง และติดตามผล',
          tags: ['AI Agents & Tool Use', 'RAG & Knowledge Systems', 'Generative AI & LLMs', 'Copilots & Assistants', 'Predictive Analytics', 'AI Audits, Evals & Strategy'],
        },
      ],
    },
    // ── WHAT WE DO ──
    whatWeDo: {
      h2: 'สิ่งที่เราทำ',
      items: [
        {
          heading: 'วิศวกรรมเว็บและมือถือ',
          desc: 'React, Next.js, React Native, Flutter: แอปที่พร้อมใช้งานจริงและรองรับผู้ใช้ที่เพิ่มขึ้น',
        },
        {
          heading: 'AI Agents และ Generative AI',
          desc: 'Agent ที่ทำงานหลายขั้นตอน, RAG pipeline และการนำ LLM มาใช้ให้เกิดประโยชน์กับธุรกิจจริง',
        },
        {
          heading: 'Data Engineering และ Analytics',
          desc: 'Pipeline, Data Warehouse และ Dashboard ที่เปลี่ยนข้อมูลดิบให้ช่วยตัดสินใจได้',
        },
        {
          heading: 'Product Design',
          desc: 'วิจัยผู้ใช้งาน ออกแบบ UI และ Design System ให้ผลิตภัณฑ์ใช้งานง่ายตั้งแต่วันแรก',
        },
        {
          heading: 'Cloud และ Infrastructure',
          desc: 'ระบบบน AWS, GCP และ Azure ที่เสถียร ปลอดภัย และขยายได้เมื่อผู้ใช้เพิ่ม',
        },
        {
          heading: 'Digital Transformation',
          desc: 'ปรับระบบและขั้นตอนการทำงานแบบเดิมให้เป็นแพลตฟอร์มที่เชื่อมถึงกันและขยายได้',
        },
      ],
    },
    // ── FEATURED WORK ──
    featuredWork: {
      h2: 'ผลงานเด่น',
      viewProject: 'ดูโปรเจกต์',
      viewAll: 'ดูผลงานทั้งหมด',
      items: [
        {
          tag: 'อสังหาริมทรัพย์ · กลยุทธ์',
          title: 'ADMiRE Digital Strategy',
          desc: 'วางกลยุทธ์ดิจิทัลและ Roadmap การเติบโตให้ ADMiRE ตั้งแต่วิจัยตลาดไปจนถึงแผนการตลาดดิจิทัลที่วัดผลได้ ช่วยให้ขายได้มากขึ้นและทำให้กลุ่มลูกค้าเป้าหมายรู้จักแบรนด์',
          img: '/images/work/project-1.jpg',
        },
        {
          tag: 'อสังหาริมทรัพย์ · UX/UI',
          title: 'Sea Hills Riracha Website',
          desc: 'ออกแบบและพัฒนาเว็บไซต์ระดับพรีเมียมให้ Sea Hills Riracha ตั้งแต่ Brand Experience ไปจนถึงระบบจองเข้าชมโครงการออนไลน์',
          img: '/images/work/design-3.jpg',
        },
        {
          tag: 'AI · องค์กร',
          title: 'ITAGC Platform',
          desc: 'พัฒนาแพลตฟอร์ม AI สำหรับองค์กร เชื่อม Agent อัตโนมัติเข้ากับขั้นตอนการทำงานเดิม ลดงานซ้ำซ้อนและช่วยให้ตัดสินใจแม่นยำขึ้น',
          img: '/images/work/ai-4.jpg',
        },
        {
          tag: 'PropTech · อสังหาริมทรัพย์',
          title: 'Canapaya Residences',
          desc: 'สร้างแพลตฟอร์ม PropTech ให้ Canapaya Residences ตั้งแต่ระบบจัดการโครงการไปจนถึงประสบการณ์ออนไลน์ของลูกค้าที่ต่อเนื่องไม่สะดุด',
          img: '/images/work/ai-new-2.jpg',
        },
        {
          tag: 'ค้าปลีก · Enterprise',
          title: 'MBK Retail Platform',
          desc: 'พัฒนาระบบ POS และแพลตฟอร์มค้าปลีกให้ MBK ใช้ได้หลายสาขาพร้อมกัน และดูข้อมูลสต๊อกกับยอดขายแบบเรียลไทม์',
          img: '/images/work/ent-2.jpg',
        },
      ],
    },
    // ── PORTFOLIO GALLERY ──
    portfolioGallery: {
      h2: 'ผลงานอื่นๆ ของเรา',
      viewAll: 'ดูผลงานทั้งหมด',
      items: [
        { tag: 'อาหาร · ไทย', title: 'dsk Growth Roadmap', img: '/images/work/project-2.jpg' },
        { tag: 'Brand · โรงแรม', title: 'Shanghai Mansion Brand', img: '/images/work/design-1.jpg' },
        { tag: 'eService · ภาครัฐ', title: 'IMMIGRATION eServices', img: '/images/work/ai-2.jpg' },
        { tag: 'ท่องเที่ยว · Travel', title: 'World Surprise Travel', img: '/images/work/ai-new-4.jpg' },
        { tag: 'E-Commerce · Fashion', title: 'VERA E-Commerce', img: '/images/work/ent-4.jpg' },
        { tag: 'Consulting · Fitness', title: 'BASE Training Platform', img: '/images/work/sup-2.jpg' },
      ],
    },
    // ── LATEST THINKING ──
    latestThinking: {
      h2: 'บทความล่าสุด',
      subtitle: 'มุมมองและแนวคิดจากทีมของเรา',
      readArticle: 'อ่านบทความ',
      readMore: 'ดูทั้งหมด',
      items: [
        {
          slug: 'ai-product-2025',
          img: '/images/blog/post-1.jpg',
          title: 'คู่มือสร้างผลิตภัณฑ์ AI ในปี 2025 ที่ใช้งานได้จริง',
          excerpt: 'สร้างผลิตภัณฑ์ AI ไม่ได้ยากอย่างที่คิด ถ้าเริ่มจากโจทย์ที่ชัดเจน',
        },
        {
          slug: 'ux-research',
          img: '/images/blog/post-2.jpg',
          title: 'เปรียบเทียบวิธีวิจัยผู้ใช้งาน 8 วิธี ควรใช้เมื่อไหร่',
          excerpt: 'สัมภาษณ์ สำรวจ หรือทดสอบการใช้งาน แต่ละวิธีมีจุดแข็งต่างกัน',
        },
        {
          slug: 'nextjs-perf',
          img: '/images/blog/post-3.jpg',
          title: 'Next.js Performance จาก PageSpeed 45 ขึ้น 98 ใน 3 สัปดาห์',
          excerpt: 'ปรับรูปภาพ แยกโค้ด และใช้ Edge Caching ที่ได้ผลจริงในระบบที่ใช้งานอยู่',
        },
        {
          slug: 'dx-mistakes',
          img: '/images/blog/post-4.jpg',
          title: '7 ข้อผิดพลาดที่ทำให้ Digital Transformation ล้มเหลว',
          excerpt: '70% ของโครงการ DX ไม่ถึงเป้า และส่วนใหญ่สาเหตุไม่ใช่เรื่องเทคโนโลยี',
        },
        {
          slug: 'banking-case',
          img: '/images/blog/post-5.jpg',
          title: 'Case Study: แอปธนาคารทำให้ DAU เพิ่ม 62% ได้อย่างไร',
          excerpt: 'เบื้องหลังการออกแบบ Mobile Banking ใหม่ ที่มีผู้ใช้ 4 ล้านคน',
        },
      ],
    },
    // ── FAQ ──
    faq: {
      h2: 'คำถามที่พบบ่อย',
      subtitle: 'คำตอบสั้นๆ ก่อนที่คุณจะถาม',
      items: [
        {
          q: 'Haliviq ทำอะไรบ้าง?',
          a: 'Haliviq คือสตูดิโอพัฒนาผลิตภัณฑ์ดิจิทัล เราดูแลตั้งแต่กลยุทธ์ ดีไซน์ ไปจนถึงวิศวกรรมซอฟต์แวร์และ AI ช่วยตั้งแต่ไอเดียแรกจนได้ผลิตภัณฑ์ที่ใช้งานจริงและขยายต่อได้',
        },
        {
          q: 'Haliviq ให้บริการอะไรบ้าง?',
          a: 'เราให้บริการกลยุทธ์ดิจิทัล, ออกแบบ UX/UI, พัฒนาเว็บและแอปมือถือ, Data Engineering & Analytics, AI Agents & Generative AI, Cloud & Infrastructure และ Digital Transformation',
        },
        {
          q: 'Haliviq เคยทำงานร่วมกับบริษัทไหนบ้าง?',
          a: 'เราเคยทำงานกับแบรนด์ชั้นนำหลายอุตสาหกรรมทั่วเอเชีย ตั้งแต่ Startup ที่ได้รับเงินทุนไปจนถึงองค์กรขนาดใหญ่ ดูตัวอย่างผลงานได้ที่หน้า Work',
        },
        {
          q: 'Haliviq ตั้งอยู่ที่ไหน?',
          a: 'สำนักงานหลักอยู่ที่กรุงเทพฯ ประเทศไทย เราทำงานกับลูกค้าทั่วเอเชียและทั่วโลกได้ โดยทำงานทางไกล',
        },
        {
          q: 'Haliviq ใช้เทคโนโลยีอะไรบ้าง?',
          a: 'เราใช้ React, Next.js, React Native และ Flutter สำหรับ Frontend, ระบบ Backend และ Cloud บน AWS/GCP/Azure ส่วนงาน AI ใช้เครื่องมืออย่าง OpenAI, LangChain และ RAG Pipeline',
        },
        {
          q: 'เริ่มต้นโปรเจกต์กับ Haliviq ได้อย่างไร?',
          a: 'กดปุ่ม "เริ่มโปรเจกต์" เพื่อนัดคุยกับทีมเราได้ฟรี เราจะช่วยประเมินขอบเขตงานและแนะนำแนวทางที่เหมาะกับธุรกิจของคุณ',
        },
      ],
    },
    // ── SERVICES ──
    services: {
      label: 'สิ่งที่เราทำ', h2a: 'บริการดิจิทัล', h2b: 'ครบในที่เดียว',
      sub: 'ทุกอย่างที่คุณต้องการ ในสตูดิโอเดียว',
      more: 'ดูเพิ่มเติม', seeAll: 'ดูบริการทั้งหมด',
      platform: 'Tools We Use', platformSub: 'เครื่องมือที่เราใช้จริงในทุกโปรเจกต์',
      groups: [
        { heading: 'กลยุทธ์', items: [
          { title: 'วางกลยุทธ์ดิจิทัล', desc: 'ค้นคว้าเชิงลึก วิเคราะห์ตลาด กำหนดทิศทางผลิตภัณฑ์ และวางแผนจากข้อมูลจริง' },
          { title: 'กลยุทธ์การเติบโต', desc: 'วางแผนการเติบโตระยะยาวโดยใช้ข้อมูลเป็นตัวนำ' },
          { title: 'วิจัยผู้ใช้งาน', desc: 'เข้าใจพฤติกรรมและความต้องการของผู้ใช้จริง เพื่อตัดสินใจจากข้อมูล' },
          { title: 'ข้อมูลและการวิเคราะห์', desc: 'วางระบบ Analytics ติดตาม KPI และเปลี่ยนข้อมูลให้เป็นข้อสรุปที่นำไปใช้ได้' },
        ]},
        { heading: 'ดีไซน์', items: [
          { title: 'ออกแบบ UX / UI', desc: 'ตั้งแต่ระบบดีไซน์ที่ขยายต่อได้ ไปจนถึงหน้าจอที่ละเอียดครบถ้วน' },
          { title: 'ทำ Prototype อย่างรวดเร็ว', desc: 'ทดสอบไอเดียกับผู้ใช้จริงก่อนพัฒนา ลดความเสี่ยงและงบประมาณ' },
          { title: 'ออกแบบ Brand Experience', desc: 'สร้างอัตลักษณ์แบรนด์ที่โดดเด่นและเป็นหนึ่งเดียวในทุกจุดที่ลูกค้าพบเจอ' },
          { title: 'Motion & Animation', desc: 'ทำให้หน้าจอมีชีวิตชีวาด้วย Micro-interaction ที่สื่อความหมาย' },
        ]},
        { heading: 'พัฒนาซอฟต์แวร์', items: [
          { title: 'พัฒนาเว็บและแอปมือถือ', desc: 'เว็บไซต์ เว็บแอป และแอปมือถือทั้ง iOS และ Android ด้วยเทคโนโลยีที่ทันสมัย' },
          { title: 'Backend, API & Cloud', desc: 'ระบบหลังบ้านที่มั่นคง ปลอดภัย รองรับผู้ใช้จำนวนมาก พร้อมโครงสร้างพื้นฐานบน Cloud' },
          { title: 'Database & Architecture', desc: 'ออกแบบฐานข้อมูลและสถาปัตยกรรมระบบที่รองรับการเติบโตในระยะยาว' },
          { title: 'QA & Security Testing', desc: 'ทดสอบระบบรอบด้าน ทั้งการทำงาน ความเร็ว และความปลอดภัย' },
        ]},
        { heading: 'AI & นวัตกรรม', items: [
          { title: 'พัฒนาผลิตภัณฑ์ AI', desc: 'ใช้ AI และ Machine Learning ในผลิตภัณฑ์ เพื่อสร้างความได้เปรียบในการแข่งขัน' },
          { title: 'ระบบอัตโนมัติ', desc: 'ทำงานซ้ำๆ แบบอัตโนมัติ ลดต้นทุนและความผิดพลาด ทำงานได้เร็วขึ้น' },
          { title: 'AI Chatbot & Assistant', desc: 'Chatbot ที่เข้าใจภาษาพูด ดูแลลูกค้าได้ตลอด 24 ชั่วโมง' },
          { title: 'Data Intelligence', desc: 'วิเคราะห์ข้อมูลขนาดใหญ่ สร้าง Dashboard อัตโนมัติ ช่วยให้ตัดสินใจแม่นยำขึ้น' },
        ]},
        { heading: 'ระบบองค์กร', items: [
          { title: 'ระบบ ERP', desc: 'วางระบบบริหารจัดการองค์กรตั้งแต่ต้นจนจบ ลดขั้นตอนและช่วยให้ทีมทำงานได้เร็วขึ้น' },
          { title: 'ระบบ CRM', desc: 'ดูแลความสัมพันธ์กับลูกค้าอย่างเป็นระบบ ติดตาม Lead และเพิ่มยอดขาย' },
          { title: 'ระบบ POS & E-Commerce', desc: 'เชื่อมหน้าร้านกับออนไลน์ให้ขายได้ทุกช่องทาง พร้อม Payment Gateway' },
          { title: 'ระบบเอกสารและ Workflow', desc: 'เปลี่ยนขั้นตอนอนุมัติและการจัดการเอกสารเป็นดิจิทัล ลดกระดาษ ตรวจสอบได้ชัดเจน' },
        ]},
        { heading: 'ดูแลและซัพพอร์ต', items: [
          { title: 'บำรุงรักษาระบบ', desc: 'ดูแลระบบต่อเนื่องหลังเปิดใช้งาน แก้ปัญหาไว อัปเดตสม่ำเสมอ' },
          { title: 'อัปเกรดและ Migration', desc: 'ปรับปรุงระบบเก่าให้ทันสมัย หรือย้ายไปแพลตฟอร์มใหม่อย่างปลอดภัย' },
          { title: 'Technical Consulting', desc: 'ที่ปรึกษาด้านเทคโนโลยี ช่วยเลือกเทคโนโลยีที่เหมาะและวาง Roadmap' },
          { title: 'ฝึกอบรมทีม', desc: 'อบรมทีมของคุณให้ใช้ระบบและเทคโนโลยีใหม่ได้อย่างคล่อง' },
        ]},
      ],
    },
    // ── WORK ──
    work: {
      label: 'ผลงานที่คัดมา', h2a: 'ผลงานที่เรา', h2b: 'ภูมิใจ',
      seeAll: 'ดูทุก Case Study',
    },
    // ── PROCESS ──
    process: {
      label: 'วิธีทำงานของเรา', h2a: 'ขั้นตอนที่วางไว้', h2b: 'เพื่อให้ได้ผลจริง',
      steps: [
        { no:'01', title:'ค้นหาและกำหนดทิศทาง', desc:'ทำความเข้าใจธุรกิจ ผู้ใช้งาน และตลาดอย่างลึกซึ้ง ผ่าน Workshop งานวิจัย และกลยุทธ์', time:'1–2 สัปดาห์' },
        { no:'02', title:'ออกแบบและทำ Prototype', desc:'ตั้งแต่ Wireframe จนถึง Prototype ที่ละเอียดสูง ทดสอบกับผู้ใช้จริงก่อนพัฒนา', time:'2–4 สัปดาห์' },
        { no:'03', title:'พัฒนาและปรับปรุง', desc:'ทำงานเป็น Sprint แบบ Agile โชว์งานทุกสัปดาห์ โค้ดสะอาดและต่อยอดได้', time:'8–24 สัปดาห์' },
        { no:'04', title:'เปิดตัวและเติบโต', desc:'เปิดใช้งานอย่างราบรื่น ติดตามประสิทธิภาพ และพัฒนาต่อเนื่องหลังเปิดตัว', time:'ต่อเนื่อง' },
      ],
    },
    // ── ABOUT ──
    about: {
      label: 'เกี่ยวกับ Haliviq', h2a: 'เราไม่ได้แค่สร้างซอฟต์แวร์', h2b: 'เราสร้างธุรกิจ',
      p1: 'Haliviq คือสตูดิโอพัฒนาผลิตภัณฑ์ดิจิทัลในกรุงเทพฯ เราเชื่อว่าเทคโนโลยีที่ดีควรใช้งานได้โดยไม่ต้องคิดมาก และควรทำให้ชีวิตและธุรกิจของผู้คนดีขึ้นเท่านั้น',
      p2: 'เรามีทีมกว่า 40 คน ทั้งนักกลยุทธ์ ดีไซเนอร์ และวิศวกร ร่วมงานกับบริษัทที่มุ่งมั่นจะเติบโต ตั้งแต่ Startup จนถึงองค์กรขนาดใหญ่',
      stats: ['โปรเจกต์', 'ประสบการณ์', 'ลูกค้ากลับมา'],
      pillars: [
        { title: 'เริ่มจากกลยุทธ์', desc: 'เราถาม "ทำไม" ก่อน "อย่างไร" ทุกโปรเจกต์เริ่มจากการเชื่อมสิ่งที่ธุรกิจคาดหวังเข้ากับวิธีแก้ที่ถูกต้อง' },
        { title: 'วิศวกรรมที่นำด้วยดีไซน์', desc: 'ดีไซเนอร์และวิศวกรทำงานเป็นทีมเดียว ไม่ต้องส่งต่องาน รายละเอียดไม่หาย' },
        { title: 'เร็วแต่ไม่ลวก', desc: 'ทำงานเป็น Sprint แบบ Agile เห็นความคืบหน้าชัดเจน โค้ดสะอาด เราส่งงานเร็วและถูกต้องตั้งแต่ครั้งแรก' },
        { title: 'พาร์ทเนอร์ที่แท้จริง', desc: 'เราไม่ใช่แค่ผู้รับจ้าง แต่เป็นส่วนหนึ่งของทีมคุณ ร่วมรับผิดชอบและอยู่ด้วยกันในระยะยาว' },
      ],
    },
    // ── CTA ──
    cta: {
      label: 'เริ่มวันนี้', h2: 'มาเปลี่ยนไอเดียของคุณ\nให้เป็นผลิตภัณฑ์จริง',
      sub: 'ไม่ว่าคุณจะเป็น Startup ที่มีไอเดียใหม่ หรือองค์กรที่อยากปรับสู่ดิจิทัล เรายินดีรับฟัง',
      btn1: 'เริ่มโปรเจกต์', btn2: 'wu@haliviq.com',
      trust: ['ปรึกษาครั้งแรกฟรี', 'ตอบกลับภายใน 24 ชั่วโมง', 'มี NDA ให้ลงนามได้'],
    },
    // ── CTA (simple / starry) ──
    ctaSimple: {
      h2: 'มีโปรเจกต์ในใจไหม?',
      sub: 'เล่าให้เราฟังหน่อยว่าคุณกำลังสร้างอะไรอยู่',
      btn: 'เริ่มคุยกัน',
      email: 'wu@haliviq.com',
    },
    // ── FOOTER ──
    footer: {
      desc: 'สตูดิโอพัฒนาผลิตภัณฑ์ดิจิทัลในกรุงเทพฯ เราออกแบบและพัฒนาซอฟต์แวร์ที่ช่วยให้ธุรกิจของคุณแข่งขันได้จริง',
      sections: {
        'บริการ': [
          {l:'กลยุทธ์และที่ปรึกษา',h:'/services/strategy'},
          {l:'ออกแบบ UX / UI',h:'/services/design'},
          {l:'พัฒนาเว็บไซต์',h:'/services/web'},
          {l:'แอปมือถือ',h:'/services/mobile'},
          {l:'ระบบ AI',h:'/services/ai'},
        ],
        'บริษัท': [
          {l:'เกี่ยวกับเรา',h:'/about'},
          {l:'ผลงาน',h:'/work'},
          {l:'ร่วมงานกับเรา',h:'/careers'},
          {l:'บทความ',h:'/blog'},
          {l:'พาร์ทเนอร์',h:'/partners'},
        ],
        'อุตสาหกรรม': [
          {l:'FinTech & ธนาคาร',h:'/industries/fintech'},
          {l:'สุขภาพ',h:'/industries/healthcare'},
          {l:'ค้าปลีก & อีคอมเมิร์ซ',h:'/industries/retail'},
          {l:'อสังหาริมทรัพย์',h:'/industries/real-estate'},
          {l:'การศึกษา',h:'/industries/education'},
        ],
      },
      rights: 'บริษัท Haliviq จำกัด สงวนลิขสิทธิ์',
      privacy: 'นโยบายความเป็นส่วนตัว',
      terms: 'เงื่อนไขการใช้งาน',
      locations: 'ความคิดของคน สู่อนาคตที่ฉลาดขึ้น',
      legalName: 'บริษัท ฮาลิวิก จำกัด',
      addressLines: ['111 ถนนสุขุมวิท แขวงบางจาก', 'เขตพระโขนง กรุงเทพฯ 10260'],
      thailandLabel: 'ประเทศไทย',
      usaLabel: 'สหรัฐอเมริกา',
      usaAddressLines: ['2025 Olympic Hwy N Ste 105,', 'Shelton, WA'],
      phone: '+66 90 918 9009',
      whatsapp: '+1 (206) 849 6901',
      line: '@haliviq',
      website: 'www.haliviq.com',
      langLabel: 'ภาษา',
      salesLabel: 'ฝ่ายขาย', supportLabel: 'ซัพพอร์ต',
    },
  },

  en: {
    nav: {
      services: 'Services', industries: 'Industries', work: 'Work', partners: 'Partners',
      careers: 'Careers', blog: 'Blog', contact: 'Contact', cta: 'Start a Project',
      servicesNotSure: 'Not sure where to start?', talkToUs: 'Talk to us →', insights: 'Insights',
      allIndustries: 'All Industries',
    },
    hero: {
      badge: 'Digital Product Studio — Bangkok',
      h1a: 'We Build', h1b: 'Digital Products', h1c: 'That Matter.',
      sub: 'Strategy · Design · Engineering under one roof. 8+ years of building digital products that drive real business outcomes.',
      btn1: 'Start a Project', btn2: 'View Our Work',
      currentProject: 'Current Project', mobileApp: 'Mobile Banking\nApp Redesign',
      stats: ['Products Shipped', 'Industry Experience', 'Expert Team', 'Client Retention'],
      statsN: ['120+', '8 yrs', '40+', '95%'],
    },
    clients: { label: 'Trusted by leading brands across Asia' },
    // ── CORE SKILLS ──
    coreSkills: {
      h2: 'Core Skills',
      subtitle: 'Core disciplines. One integrated team.',
      desc: 'Every Haliviq project draws on our core in-house disciplines: engineering, AI, data, and design. One integrated team carries your product from first sketch to production scale, so nothing gets lost in handovers.',
      exploreLabel: 'Explore',
      categories: [
        {
          heading: 'Strategy',
          desc: 'Strategy at Haliviq starts with understanding the business before we act. We combine research, data, and growth planning to set product direction on real evidence, not guesswork.',
          tags: ['Digital Strategy', 'Growth Strategy', 'User Research', 'Data & Analytics'],
        },
        {
          heading: 'Design',
          desc: 'Design at Haliviq means understanding the problem before opening Figma. We combine user research, experience design, and interface design to craft products that are intuitive from day one, and we validate every concept with real users before a line of code is written.',
          tags: ['Experience (UX) Design', 'Interface (UI) Design', 'User Research', 'Rapid Prototyping', 'Design Systems', 'Design QA'],
        },
        {
          heading: 'Engineering',
          desc: 'We build production-grade web and mobile applications end-to-end: native iOS and Android, React and Next.js frontends, and secure, scalable backend APIs. Automated testing, CI/CD, and cloud infrastructure are part of every build, not an afterthought.',
          tags: ['iOS & Android', 'Web Frontend', 'Backend & APIs', 'React / Next.js / Flutter', 'Cloud & DevOps', 'Automated Testing'],
        },
        {
          heading: 'AI & Innovation',
          desc: 'We integrate AI where it creates measurable value, not because it is trendy. From multi-step agents and tool-using copilots to RAG knowledge systems, predictive models, and recommendation engines, we cover the full lifecycle: AI audit, data preparation, agent and model design, evaluation, production integration, and monitoring.',
          tags: ['AI Agents & Tool Use', 'RAG & Knowledge Systems', 'Generative AI & LLMs', 'Copilots & Assistants', 'Predictive Analytics', 'AI Audits, Evals & Strategy'],
        },
      ],
    },
    // ── WHAT WE DO ──
    whatWeDo: {
      h2: 'What We Do',
      items: [
        {
          heading: 'Web & Mobile Engineering',
          desc: 'React, Next.js, React Native, Flutter: production-grade applications built for scale.',
        },
        {
          heading: 'AI Agents & Generative AI',
          desc: 'Multi-step agents, RAG pipelines, and LLM integrations that create measurable business value.',
        },
        {
          heading: 'Data Engineering & Analytics',
          desc: 'Pipelines, warehousing, and dashboards that turn raw data into decisions.',
        },
        {
          heading: 'Product Design',
          desc: 'UX research, UI design, and design systems that make products intuitive from day one.',
        },
        {
          heading: 'Cloud & Infrastructure',
          desc: 'AWS, GCP, and Azure architecture built for uptime, security, and scale.',
        },
        {
          heading: 'Digital Transformation',
          desc: 'Modernizing legacy systems and workflows into connected, scalable platforms.',
        },
      ],
    },
    // ── FEATURED WORK ──
    featuredWork: {
      h2: 'Featured Work',
      viewProject: 'View Project',
      viewAll: 'View All Work',
      items: [
        {
          tag: 'Property · Strategy',
          title: 'ADMiRE Digital Strategy',
          desc: 'Crafted a digital strategy and growth roadmap for ADMiRE, from market research to a measurable digital marketing plan that grew qualified leads and built brand awareness with the right audience.',
          img: '/images/work/project-1.jpg',
        },
        {
          tag: 'Property · UX/UI',
          title: 'Sea Hills Riracha Website',
          desc: 'Designed and built a premium web experience for Sea Hills Riracha, covering everything from brand experience to an online project-viewing booking system.',
          img: '/images/work/design-3.jpg',
        },
        {
          tag: 'AI · Enterprise',
          title: 'ITAGC Platform',
          desc: 'Built an enterprise AI platform integrating automated agents into existing workflows, cutting repetitive work and improving decision accuracy across teams.',
          img: '/images/work/ai-4.jpg',
        },
        {
          tag: 'PropTech · Property',
          title: 'Canapaya Residences',
          desc: 'Delivered an end-to-end PropTech platform for Canapaya Residences, from project management tools to a seamless online customer experience.',
          img: '/images/work/ai-new-2.jpg',
        },
        {
          tag: 'Retail · Enterprise',
          title: 'MBK Retail Platform',
          desc: 'Built a POS and retail platform for MBK supporting multiple branches at once, with real-time inventory and sales data across locations.',
          img: '/images/work/ent-2.jpg',
        },
      ],
    },
    // ── PORTFOLIO GALLERY ──
    portfolioGallery: {
      h2: 'More From Our Work',
      viewAll: 'View All Work',
      items: [
        { tag: 'F&B · Thailand', title: 'dsk Growth Roadmap', img: '/images/work/project-2.jpg' },
        { tag: 'Brand · Hotel', title: 'Shanghai Mansion Brand', img: '/images/work/design-1.jpg' },
        { tag: 'eService · Gov', title: 'IMMIGRATION eServices', img: '/images/work/ai-2.jpg' },
        { tag: 'Travel · Tourism', title: 'World Surprise Travel', img: '/images/work/ai-new-4.jpg' },
        { tag: 'E-Commerce · Fashion', title: 'VERA E-Commerce', img: '/images/work/ent-4.jpg' },
        { tag: 'Consulting · Fitness', title: 'BASE Training Platform', img: '/images/work/sup-2.jpg' },
      ],
    },
    // ── LATEST THINKING ──
    latestThinking: {
      h2: 'Latest Thinking',
      subtitle: 'Insights and perspectives from our team.',
      readArticle: 'Read article',
      readMore: 'Read More',
      items: [
        {
          slug: 'ai-product-2025',
          img: '/images/blog/post-1.jpg',
          title: 'The 2025 Guide to Building AI Products That Actually Work',
          excerpt: 'AI product development is not as hard as you think if you start with a clear use case.',
        },
        {
          slug: 'ux-research',
          img: '/images/blog/post-2.jpg',
          title: 'Comparing 8 User Research Methods — When to Use Each',
          excerpt: 'Interviews, surveys, usability tests — each method has different strengths.',
        },
        {
          slug: 'nextjs-perf',
          img: '/images/blog/post-3.jpg',
          title: 'Next.js Performance: From PageSpeed 45 to 98 in 3 Weeks',
          excerpt: 'Image optimization, code splitting, edge caching that actually work in production.',
        },
        {
          slug: 'dx-mistakes',
          img: '/images/blog/post-4.jpg',
          title: '7 Mistakes That Make Digital Transformation Fail',
          excerpt: '70% of DX initiatives miss their targets. Most of the time it is not a technology problem.',
        },
        {
          slug: 'banking-case',
          img: '/images/blog/post-5.jpg',
          title: 'Case Study: How We Grew Banking App DAU by 62%',
          excerpt: 'The story behind a mobile banking redesign serving 4 million users.',
        },
      ],
    },
    // ── FAQ ──
    faq: {
      h2: 'Frequently Asked Questions',
      subtitle: 'The short answers, before you even ask.',
      items: [
        {
          q: 'What does Haliviq do?',
          a: 'Haliviq is a digital product studio offering end-to-end services from strategy and design to software engineering and AI. We help you go from first idea to a product that scales.',
        },
        {
          q: 'Which services does Haliviq offer?',
          a: 'We offer digital strategy, UX/UI design, web and mobile development, data engineering & analytics, AI agents & generative AI, cloud & infrastructure, and full digital transformation.',
        },
        {
          q: 'Which companies has Haliviq worked with?',
          a: 'We have partnered with leading brands across industries throughout Asia, from funded startups to enterprise organizations. See examples of our work on the Work page.',
        },
        {
          q: 'Where is Haliviq located?',
          a: 'Our main office is in Bangkok, Thailand, and we work remotely with clients across Asia and around the world.',
        },
        {
          q: 'What technologies does Haliviq use?',
          a: 'We build with React, Next.js, React Native, and Flutter on the frontend, cloud infrastructure on AWS/GCP/Azure, and AI tooling such as OpenAI, LangChain, and RAG pipelines.',
        },
        {
          q: 'How do I start a project with Haliviq?',
          a: 'Just click "Start a Project" to book a free call with our team. We will help scope your project and recommend the right approach for your business.',
        },
      ],
    },
    services: {
      label: 'What We Do', h2a: 'Full-Spectrum', h2b: 'Digital Expertise',
      sub: 'Every capability you need, under one roof.',
      more: 'Explore', seeAll: 'See All Services',
      platform: 'Tools We Use', platformSub: 'The tools we use on every project',
      groups: [
        { heading: 'Strategy', items: [
          { title: 'Digital Strategy', desc: 'Deep research, market analysis, and data-driven planning before a single pixel is drawn.' },
          { title: 'Growth Strategy', desc: 'Long-term growth planning with a data-driven framework covering Funnel, Retention, and LTV.' },
          { title: 'User Research', desc: 'Understand real user behavior and needs to make data-backed design decisions.' },
          { title: 'Data & Analytics', desc: 'Build Analytics systems, track KPIs, and transform data into actionable insights.' },
        ]},
        { heading: 'Design', items: [
          { title: 'UX / UI Design', desc: 'From scalable design systems to pixel-perfect interfaces balancing beauty and function.' },
          { title: 'Rapid Prototyping', desc: 'Test ideas with real users before development—saving risk, time, and budget.' },
          { title: 'Brand Experience', desc: 'Build a bold, consistent brand identity across every touchpoint.' },
          { title: 'Motion & Animation', desc: 'Bring interfaces to life with meaningful micro-interactions.' },
        ]},
        { heading: 'Engineering', items: [
          { title: 'Web & Mobile Apps', desc: 'Websites, web apps, and mobile apps for iOS & Android with modern stacks.' },
          { title: 'Backend, API & Cloud', desc: 'Reliable, secure backend systems that scale with your business.' },
          { title: 'Database & Architecture', desc: 'Database and system architecture designed for long-term scalability.' },
          { title: 'QA & Security Testing', desc: 'Comprehensive testing covering Functional, Performance, and Security.' },
        ]},
        { heading: 'AI & Innovation', items: [
          { title: 'AI Product Development', desc: 'Integrate AI and ML into your products for real competitive advantage.' },
          { title: 'Process Automation', desc: 'Automate repetitive tasks, cut costs, eliminate errors, accelerate your team.' },
          { title: 'AI Chatbot & Assistant', desc: 'Natural language chatbots that handle customer service 24/7.' },
          { title: 'Data Intelligence', desc: 'Analyze large datasets, auto-generate dashboards, and make sharper decisions.' },
        ]},
        { heading: 'Enterprise Systems', items: [
          { title: 'ERP System', desc: 'End-to-end enterprise management to reduce steps and boost team efficiency.' },
          { title: 'CRM System', desc: 'Systematically manage customer relationships, track leads, and grow revenue.' },
          { title: 'POS & E-Commerce', desc: 'Seamless omnichannel commerce connecting stores and online with Payment Gateway.' },
          { title: 'Document & Workflow', desc: 'Digitize approval processes, manage documents, reduce paper, increase transparency.' },
        ]},
        { heading: 'Support', items: [
          { title: 'System Maintenance', desc: 'Continuous post-launch system care—fast fixes, regular updates, clear SLA.' },
          { title: 'Upgrade & Migration', desc: 'Modernize legacy systems or migrate to a new platform safely.' },
          { title: 'Technical Consulting', desc: 'Technology advisory to help choose the right stack and plan your roadmap.' },
          { title: 'Team Training', desc: 'Upskill your team to use new systems and technologies effectively.' },
        ]},
      ],
    },
    work: {
      label: 'Selected Work', h2a: 'Products We\'re', h2b: 'Proud Of',
      seeAll: 'View All Case Studies',
    },
    process: {
      label: 'How We Work', h2a: 'A Process Built for', h2b: 'Real Results',
      steps: [
        { no:'01', title:'Discover & Define', desc:'Deep dive into your business, users, and market through workshops, research, and strategy.', time:'1–2 weeks' },
        { no:'02', title:'Design & Prototype', desc:'From wireframes to high-fidelity prototypes, validated with real users before coding begins.', time:'2–4 weeks' },
        { no:'03', title:'Build & Iterate', desc:'Agile sprints, weekly demos, and clean scalable code with full transparency.', time:'8–24 weeks' },
        { no:'04', title:'Launch & Grow', desc:'Smooth deployment, performance monitoring, and continuous improvement post-launch.', time:'Ongoing' },
      ],
    },
    about: {
      label: 'About Haliviq', h2a: 'We don\'t just build software.', h2b: 'We build businesses.',
      p1: 'Haliviq is a Bangkok-based digital product studio founded on the belief that great technology should be invisible — it should simply make lives and businesses better.',
      p2: 'With a team of 40+ strategists, designers, and engineers, we partner with ambitious companies — from funded startups to enterprise — to build products that create lasting value.',
      stats: ['Projects', 'Experience', 'Retention'],
      pillars: [
        { title: 'Strategy First', desc: 'We ask "why" before "how". Every project starts by connecting your business expectations to the right digital solution.' },
        { title: 'Design-Led Engineering', desc: 'Designers and engineers work as one team — no handoff friction, no lost details.' },
        { title: 'Speed Without Shortcuts', desc: 'Agile sprints, transparent progress, clean code. We ship fast and right the first time.' },
        { title: 'True Partnership', desc: 'We\'re not just a vendor — we\'re an extension of your team, built on shared accountability.' },
      ],
    },
    cta: {
      label: 'Start Today', h2: 'Let\'s turn your idea\ninto a real product.',
      sub: 'Whether you\'re a startup with a bold idea or an enterprise going digital — we\'d love to hear from you.',
      btn1: 'Start a Project', btn2: 'wu@haliviq.com',
      trust: ['Free first consultation', 'Response within 24 hours', 'NDA available on request'],
    },
    // ── CTA (simple / starry) ──
    ctaSimple: {
      h2: 'Have a project in mind?',
      sub: 'We\'d love to hear what you\'re building.',
      btn: 'Start a Conversation',
      email: 'wu@haliviq.com',
    },
    footer: {
      desc: 'Bangkok-based digital product studio. We design and engineer software that creates real competitive advantage.',
      sections: {
        'Services': [
          {l:'Strategy & Consulting',h:'/services/strategy'},
          {l:'UX / UI Design',h:'/services/design'},
          {l:'Web Development',h:'/services/web'},
          {l:'Mobile Apps',h:'/services/mobile'},
          {l:'AI Solutions',h:'/services/ai'},
        ],
        'Company': [
          {l:'About Us',h:'/about'},
          {l:'Our Work',h:'/work'},
          {l:'Careers',h:'/careers'},
          {l:'Blog',h:'/blog'},
          {l:'Partners',h:'/partners'},
        ],
        'Industries': [
          {l:'FinTech & Banking',h:'/industries/fintech'},
          {l:'Healthcare',h:'/industries/healthcare'},
          {l:'Retail & E-Commerce',h:'/industries/retail'},
          {l:'Real Estate',h:'/industries/real-estate'},
          {l:'Education',h:'/industries/education'},
        ],
      },
      rights: 'Haliviq Co., Ltd. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      locations: 'Human Ideas. Intelligent Future.',
      legalName: 'Haliviq Co., Ltd.',
      addressLines: ['111 Sukhumvit Rd, Bang Chak,', 'Phra Khanong, Bangkok 10260'],
      thailandLabel: 'Thailand',
      usaLabel: 'USA',
      usaAddressLines: ['2025 Olympic Hwy N Ste 105,', 'Shelton, WA'],
      phone: '+66 90 918 9009',
      whatsapp: '+1 (206) 849 6901',
      line: '@haliviq',
      website: 'www.haliviq.com',
      langLabel: 'Language',
      salesLabel: 'Sales', supportLabel: 'Support',
    },
  },
} as const

export type T = (typeof t)[Lang]
