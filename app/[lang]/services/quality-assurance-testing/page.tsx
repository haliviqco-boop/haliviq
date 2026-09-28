import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  cypress: { hex: '#69D3A7', path: 'M11.998.0195c-.8642 0-1.6816.1101-2.1445.1934v.002C4.1731 1.2283 0 6.1368 0 12.0018c0 1.1265.1573 2.2328.4648 3.3028.0387.1453.0915.2993.1368.4473 1.607 4.865 6.2245 8.226 11.3925 8.2285.0651 0 .2518-.0003.502-.0118.8564-.0353 1.6228-.5734 1.9512-1.369l.4736-1.1544L20.4258 8.043H18.621l-2.3164 5.871-2.334-5.871h-1.9082l3.2734 8.0117c-.8115 1.9702-1.6252 3.9395-2.4355 5.9101-.0808.1945-.2655.3284-.4727.336-.144.005-.285.0098-.4316.0098-4.5848 0-8.6672-3.0695-9.9277-7.4649a10.3058 10.3058 0 0 1-.3985-2.8437c0-5.0887 3.6521-9.3404 8.6035-10.164.2214-.037.8885-.1446 1.7246-.1446 4.4166 0 8.269 2.732 9.7305 6.8476.0558.144.0977.293.1465.4395.299.9746.4531 1.9887.4531 3.0215 0 4.5696-2.9413 8.5326-7.3164 9.8613l.4863 1.5996c5.085-1.546 8.4995-6.1518 8.502-11.459 0-1.5491-.2983-2.8706-.6504-3.8926-.0432-.1212-.0873-.2422-.1309-.3633h-.002C21.4577 3.0954 17.0444.0195 11.998.0195ZM8.4336 7.8906c-1.1999 0-2.1747.3852-2.9805 1.1758-.8007.7856-1.205 1.7736-1.205 2.9356 0 1.1544.4068 2.1368 1.205 2.9199.8058.7906 1.7806 1.1738 2.9805 1.1738 1.705 0 3.1556-.955 3.7871-2.4883l.0332-.082-1.6289-.5547c-.168.4563-.7552 1.4883-2.1914 1.4883-.6745 0-1.2437-.2344-1.6934-.6992-.4572-.4699-.6875-1.0632-.6875-1.7578 0-.6998.2253-1.2809.6875-1.7735.4522-.4648 1.019-.7012 1.6934-.7012 1.438 0 2.0238 1.0815 2.1934 1.4883l1.627-.5527-.0333-.084c-.629-1.5358-2.082-2.4883-3.7871-2.4883Z' },
  jest: { hex: '#C21325', path: 'M22.251 11.82a3.117 3.117 0 0 0-2.328-3.01L22.911 0H8.104L11.1 8.838a3.116 3.116 0 0 0-2.244 2.988c0 1.043.52 1.967 1.313 2.536a8.279 8.279 0 0 1-1.084 1.244 8.14 8.14 0 0 1-2.55 1.647c-.834-.563-1.195-1.556-.869-2.446a3.11 3.11 0 0 0-.91-6.08 3.117 3.117 0 0 0-3.113 3.113c0 .848.347 1.626.903 2.182-.048.097-.097.195-.146.299-.465.959-.993 2.043-1.195 3.259-.403 2.432.257 4.384 1.849 5.489A5.093 5.093 0 0 0 5.999 24c1.827 0 3.682-.917 5.475-1.807 1.279-.632 2.599-1.292 3.898-1.612.48-.118.98-.187 1.508-.264 1.07-.153 2.175-.312 3.168-.89a4.482 4.482 0 0 0 2.182-3.091c.174-.994 0-1.994-.444-2.87.298-.48.465-1.042.465-1.647zm-1.355 0c0 .965-.785 1.75-1.75 1.75a1.753 1.753 0 0 1-1.085-3.126l.007-.007c.056-.042.118-.084.18-.125 0 0 .008 0 .008-.007.028-.014.055-.035.083-.05.007 0 .014-.006.021-.006.028-.014.063-.028.097-.042.035-.014.07-.027.098-.041.007 0 .013-.007.02-.007.028-.007.056-.021.084-.028.007 0 .02-.007.028-.007.034-.007.062-.014.097-.02h.007l.104-.022c.007 0 .02 0 .028-.007.028 0 .055-.007.083-.007h.035c.035 0 .07-.007.111-.007h.09c.028 0 .05 0 .077.007h.014c.055.007.111.014.167.028a1.766 1.766 0 0 1 1.396 1.723zM10.043 1.39h10.93l-2.509 7.4c-.104.02-.208.055-.312.09l-2.64-5.385-2.648 5.35c-.104-.034-.216-.055-.327-.076l-2.494-7.38zm4.968 9.825a3.083 3.083 0 0 0-.938-1.668l1.438-2.904 1.452 2.967c-.43.43-.743.98-.868 1.605H15.01zm-3.481-1.098c.034-.007.062-.014.097-.02h.02c.029-.008.056-.008.084-.015h.028c.028 0 .049-.007.076-.007h.271c.028 0 .049.007.07.007.014 0 .02 0 .035.007.027.007.048.007.076.014.007 0 .014 0 .028.007l.097.02h.007c.028.008.056.015.083.029.007 0 .014.007.028.007.021.007.049.014.07.027.007 0 .014.007.02.007.028.014.056.021.084.035h.007a.374.374 0 0 1 .09.049h.007c.028.014.056.034.084.048.007 0 .007.007.013.007.028.014.05.035.077.049l.007.007c.083.062.16.132.236.201l.007.007a1.747 1.747 0 0 1 .48 1.209 1.752 1.752 0 0 1-3.502 0 1.742 1.742 0 0 1 1.32-1.695zm-6.838-.049c.966 0 1.751.786 1.751 1.751s-.785 1.751-1.75 1.751-1.752-.785-1.752-1.75.786-1.752 1.751-1.752zm16.163 6.025a3.07 3.07 0 0 1-1.508 2.133c-.758.438-1.689.577-2.669.716a17.29 17.29 0 0 0-1.64.291c-1.445.355-2.834 1.05-4.182 1.717-1.724.854-3.35 1.66-4.857 1.66a3.645 3.645 0 0 1-2.154-.688c-1.529-1.056-1.453-3.036-1.272-4.12.167-1.015.632-1.966 1.077-2.877.028-.055.049-.104.077-.16.152.056.312.098.479.126-.264 1.473.486 2.994 1.946 3.745l.264.139.284-.104c1.216-.431 2.342-1.133 3.336-2.071a9.334 9.334 0 0 0 1.445-1.716c.16.027.32.034.48.034a3.117 3.117 0 0 0 3.008-2.327h1.167a3.109 3.109 0 0 0 3.01 2.327c.576 0 1.11-.16 1.57-.43.18.52.236 1.063.139 1.605z' },
  vitest: { hex: '#00FF74', path: 'M11.545 23.3a.613.613 0 0 1-.895.197L.252 15.936A.61.61 0 0 1 0 15.439V6.325c0-.502.569-.792.975-.497l6.358 4.624c.594.433 1.432.25 1.793-.39L14.393.7a.62.62 0 0 1 .535-.314h8.455a.613.613 0 0 1 .537.916z' },
  selenium: { hex: '#43B02A', path: 'M23.174 3.468l-7.416 8.322a.228.228 0 0 1-.33 0l-3.786-3.9a.228.228 0 0 1 0-.282L12.872 6a.228.228 0 0 1 .366 0l2.106 2.346a.228.228 0 0 0 .342 0l5.94-8.094A.162.162 0 0 0 21.5 0H.716a.174.174 0 0 0-.174.174v23.652A.174.174 0 0 0 .716 24h22.566a.174.174 0 0 0 .174-.174V3.6a.162.162 0 0 0-.282-.132zM6.932 21.366a5.706 5.706 0 0 1-4.05-1.44.222.222 0 0 1 0-.288l.882-1.236a.222.222 0 0 1 .33-.036 4.338 4.338 0 0 0 2.964 1.158c1.158 0 1.722-.534 1.722-1.098 0-1.752-5.7-.552-5.7-4.278 0-1.65 1.428-3 3.756-3a5.568 5.568 0 0 1 3.708 1.242.222.222 0 0 1 0 .3l-.906 1.2a.222.222 0 0 1-.318.036 4.29 4.29 0 0 0-2.706-.936c-.906 0-1.41.402-1.41.996 0 1.572 5.688.522 5.688 4.2.006 1.812-1.284 3.18-3.96 3.18zm12.438-3.432a.192.192 0 0 1-.192.192h-5.202a.06.06 0 0 0-.06.066 1.986 1.986 0 0 0 2.106 1.638 3.264 3.264 0 0 0 1.8-.6.192.192 0 0 1 .276.042l.636.93a.198.198 0 0 1-.042.264 4.71 4.71 0 0 1-2.892.9 3.726 3.726 0 0 1-3.93-3.87 3.744 3.744 0 0 1 3.81-3.852c2.196 0 3.684 1.644 3.684 4.05zm-3.684-2.748a1.758 1.758 0 0 0-1.8 1.56.06.06 0 0 0 .06.066h3.492a.06.06 0 0 0 .06-.066 1.698 1.698 0 0 0-1.812-1.56Z' },
  k6: { hex: '#7D64FF', path: 'M24 23.646H0L7.99 6.603l4.813 3.538L19.08.354Zm-8.8-3.681h.052a2.292 2.292 0 0 0 1.593-.64 2.088 2.088 0 0 0 .685-1.576 1.912 1.912 0 0 0-.66-1.511 2.008 2.008 0 0 0-1.37-.59h-.04a.716.716 0 0 0-.199.027l1.267-1.883-1.01-.705-.477.705-1.22 1.864c-.21.31-.386.582-.495.77-.112.2-.21.41-.29.625a1.942 1.942 0 0 0-.138.719 2.086 2.086 0 0 0 .676 1.558c.422.411.989.641 1.578.64Zm-5.365-2.027 1.398 1.978h1.496l-1.645-2.295 1.46-2.029-.97-.671-.427.565-1.314 1.853v-3.725l-1.31-1.068v7.37h1.31v-1.98Zm5.367.792a.963.963 0 1 1 0-1.927h.009a.941.941 0 0 1 .679.29.897.897 0 0 1 .29.668.978.978 0 0 1-.977.967Z' },
  postman: { hex: '#FF6C37', path: 'M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z' },
  owasp: { hex: '#FFFFFF', path: 'M15.897 20.503c-.384 0-1.782-2.489-1.97-3.198-.393-1.486-.308-2.114-.285-2.314.072-.613.667-.92.703-1.748.01-.256.14-1.535.243-2.534a1.723 1.723 0 0 1-.733-.343c.676.908-.32 1.995-1.767 3.443-1.536 1.536-4.945 2.961-4.945 2.961s1.425-3.41 2.961-4.945c1.13-1.129 2.04-1.983 2.816-1.983.22 0 .427.067.627.216a1.722 1.722 0 0 1-.343-.733c-.999.103-2.278.232-2.534.244-.829.036-1.135.63-1.747.702-.07.008-.194.024-.388.024-.36 0-.963-.054-1.926-.31-.772-.203-3.648-1.84-3.14-2.045.26-.105 1.087-.176 2.175-.176 1.047 0 2.337.066 3.596.23 1.57.205 3.01.463 3.992.656.016-.053.035-.104.058-.154l-1.004-.48s-.8-.92-.715-.984a.02.02 0 0 1 .012-.003c.126 0 .767.733.829.816l.605.202-.284-.249s-.388-1.438-.287-1.472h.004c.106 0 .459 1.25.489 1.34.07.06.303.152.596.32l-.308-.79s.14-1.305.243-1.305h.003c.105.021-.02 1.089-.047 1.221l.51.783a1.31 1.31 0 0 1 .463-.082c.184 0 .374.036.558.107-.236-.502-.218-1.025.095-1.338a.84.84 0 0 1 .353-.209.462.462 0 0 1 .457-.383c.127 0 .254.05.352.148a.497.497 0 0 1 .147.335c.151-.311.329-.73.317-.867-.03-.307-.386-.852-.39-.857a.076.076 0 0 1 .064-.119c.025 0 .05.012.064.035.016.023.381.582.414.927.018.198-.21.696-.333.95a2.227 2.227 0 0 1 .873.874c.245-.12.715-.334.927-.334l.024.001c.345.033.904.399.927.414a.076.076 0 0 1-.084.128c-.005-.004-.55-.36-.857-.39h-.015c-.15 0-.552.171-.852.317.12.004.242.053.335.147a.482.482 0 0 1 .012.681.459.459 0 0 1-.247.128.845.845 0 0 1-.21.354.924.924 0 0 1-.67.255c-.212 0-.441-.055-.667-.16.132.343.142.708.025 1.02l.783.51c.095-.019.666-.088.993-.088.13 0 .222.011.228.04.02.106-1.305.247-1.305.247l-.79-.308c.168.293.26.527.32.596.091.03 1.374.392 1.34.493-.004.012-.026.017-.063.017-.283 0-1.41-.304-1.41-.304l-.248-.284.202.605c.087.065.876.755.813.841-.004.005-.009.007-.016.007-.139 0-.967-.722-.967-.722l-.481-1.004a1.18 1.18 0 0 1-.154.058c.193.982.451 2.422.656 3.992.335 2.569.26 5.261.054 5.77-.016.041-.042.06-.076.06M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12m0-22.153C6.393 1.847 1.847 6.393 1.847 12S6.393 22.153 12 22.153 22.153 17.607 22.153 12 17.607 1.847 12 1.847Z' },
}

function BrandLogo({ name, size = 15 }: { name: string; size?: number }) {
  const logo = BRAND_LOGOS[name]
  if (!logo) return null
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d={logo.path} fill={logo.hex} />
    </svg>
  )
}

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const prefix = `/${params.lang}`

  const badge    = isEN ? 'Engineering / Quality Assurance'  : 'วิศวกรรม / Quality Assurance'
  const title    = isEN ? 'Quality That Scales'  : 'คุณภาพที่ Scale ได้'
  const subtitle = isEN ? 'With Your Release Speed'    : 'ตามความเร็วในการปล่อยเวอร์ชัน'
  const heroDesc = isEN ? 'Automated and exploratory testing embedded in delivery so quality scales with release speed.'  : 'Automated และ Exploratory Testing ที่ฝังอยู่ในกระบวนการ Delivery เพื่อให้คุณภาพ Scale ตามความเร็วในการปล่อยเวอร์ชัน'
  const whyTitle = isEN ? 'Why testing bolted on at the end always costs more'    : 'ทำไมการ Test ที่มาตอนท้ายถึงมีต้นทุนสูงกว่าเสมอ'
  const whyDesc  = isEN ? 'A bug caught in code review costs minutes to fix. The same bug found in production costs incident response, customer trust, and engineering time pulled from the roadmap.'  : 'บั๊กที่จับได้ตอน Code Review ใช้เวลาแก้ไม่กี่นาที แต่บั๊กเดียวกันที่เจอตอน Production ต้องแลกด้วย Incident Response, ความเชื่อมั่นของลูกค้า และเวลาทีม Engineer ที่ควรอยู่บน Roadmap'
  const ctaTitle = isEN ? 'Ready for quality that keeps up?'    : 'พร้อมให้คุณภาพตามทันความเร็วไหม?'
  const ctaDesc  = isEN ? 'Start with a free test coverage audit. We will show you where the risk actually is.'   : 'เริ่มด้วยการตรวจสอบ Test Coverage ฟรี เราจะชี้ให้เห็นว่าความเสี่ยงอยู่ตรงไหนจริงๆ'
  const overviewText = isEN
    ? 'We treat quality as a product capability, not a final checkpoint before ship. Our teams build test strategies, set up CI-integrated automation spanning unit, API, and end-to-end coverage, layer in performance and security testing, and turn results into reports teams can actually act on — combining tools like Playwright, Cypress, and Jest with hands-on exploratory testing to catch what automation alone cannot.'
    : 'เราให้คุณภาพเป็นความสามารถของ Product ไม่ใช่ด่านตรวจสอบตอนท้ายก่อนส่งมอบ ทีมของเราวาง Test Strategy สร้าง Automation ที่ผูกกับ CI ครอบคลุมทั้ง Unit, API และ End-to-end เสริมด้วย Performance และ Security Testing แล้วแปลงผลลัพธ์เป็นรายงานที่ทีมนำไปใช้ได้จริง ผสมผสานเครื่องมืออย่าง Playwright, Cypress และ Jest เข้ากับ Exploratory Testing ที่คนลงมือทำ เพื่อจับสิ่งที่ Automation อย่างเดียวจับไม่ได้'

  const heroBullets = isEN ? [
      'CI-native unit, API, and end-to-end test suites',
      'Performance and load testing against realistic traffic',
      'Security testing: SAST/DAST and dependency scanning',
      'Exploratory QA for edge cases automation cannot cover',
      'Reports that turn into fixes, not just dashboards',
    ] : [
      'สร้าง Test Suite แบบ Unit, API และ End-to-end ที่ผูกกับ CI',
      'ทำ Performance และ Load Testing กับ Traffic แบบใกล้เคียงจริง',
      'Security Testing: SAST/DAST และ Dependency Scanning',
      'Exploratory QA สำหรับ Edge Case ที่ Automation จับไม่ได้',
      'รายงานที่นำไปแก้ไขได้จริง ไม่ใช่แค่ Dashboard สวยๆ',
    ]
  const whyPoints   = isEN ? [
      'Automated regression suites let teams ship daily without gambling on stability.',
      'Performance testing before launch catches scaling problems while they are still cheap to fix.',
      'Security scanning integrated into CI catches vulnerabilities before they reach production.',
      'Exploratory testing by people who understand the product finds what scripts miss.',
      'Clear defect reports cut the time between "something is broken" and "it is fixed" dramatically.',
    ] : [
      'Regression Suite แบบ Automated ทำให้ทีม Ship ได้ทุกวันโดยไม่ต้องเสี่ยงเรื่องความเสถียร',
      'Performance Testing ก่อน Launch จับปัญหาเรื่อง Scale ได้ตั้งแต่ยังแก้ถูกอยู่',
      'Security Scanning ที่ผูกกับ CI จับช่องโหว่ได้ก่อนถึง Production',
      'Exploratory Testing โดยคนที่เข้าใจ Product จริง เจอสิ่งที่ Script จับไม่ได้',
      'รายงาน Defect ที่ชัดเจน ลดเวลาตั้งแต่ "มีอะไรพัง" จนถึง "แก้เสร็จแล้ว" ได้มาก',
    ]
  const outcomes    = isEN ? [
      {stat: '90%+', label: 'Automated Coverage', desc: 'Across critical user journeys'},
      {stat: '70%', label: 'Fewer Prod Defects', desc: 'After test strategy overhaul'},
      {stat: '3x', label: 'Faster Release Cycles', desc: 'With CI-integrated automation'},
      {stat: '<1%', label: 'Flaky Test Rate', desc: 'In maintained suites'}
    ] : [
      {stat: '90%+', label: 'Automated Coverage', desc: 'ครอบคลุม User Journey สำคัญ'},
      {stat: '70%', label: 'บั๊ก Production ลดลง', desc: 'หลังปรับ Test Strategy ใหม่'},
      {stat: '3x', label: 'Release เร็วขึ้น', desc: 'ด้วย Automation ที่ผูกกับ CI'},
      {stat: '<1%', label: 'อัตรา Flaky Test', desc: 'ใน Suite ที่ดูแลอย่างต่อเนื่อง'}
    ]
  const features    = isEN ? [
      {icon: 'ti-robot', title: 'Test Automation', desc: 'CI-native unit, API, and end-to-end suites that catch regressions before users do.'},
      {icon: 'ti-gauge', title: 'Performance & Load', desc: 'Load, stress, and soak testing against realistic traffic so scale is a known quantity.'},
      {icon: 'ti-shield-bolt', title: 'Security Testing', desc: 'SAST/DAST, dependency scanning, and checks aligned with your threat model.'},
      {icon: 'ti-user-search', title: 'Exploratory QA', desc: 'Human-led testing for edge cases, UX friction, and scenarios automation cannot cover.'},
      {icon: 'ti-report', title: 'Actionable Reporting', desc: 'Defect signals with reproduction steps that teams can act on immediately.'},
      {icon: 'ti-refresh', title: 'Continuous Improvement', desc: 'Flake reduction and coverage growth tracked release over release.'}
    ] : [
      {icon: 'ti-robot', title: 'Test Automation', desc: 'Suite แบบ Unit, API และ End-to-end ที่ผูกกับ CI จับ Regression ก่อนผู้ใช้เจอ'},
      {icon: 'ti-gauge', title: 'Performance & Load', desc: 'Load, Stress และ Soak Testing กับ Traffic แบบใกล้เคียงจริง เพื่อให้ Scale เป็นเรื่องคาดการณ์ได้'},
      {icon: 'ti-shield-bolt', title: 'Security Testing', desc: 'SAST/DAST, Dependency Scanning และการตรวจสอบตาม Threat Model ของคุณ'},
      {icon: 'ti-user-search', title: 'Exploratory QA', desc: 'Testing โดยคนสำหรับ Edge Case, UX Friction และสถานการณ์ที่ Automation คลอบคลุมไม่ถึง'},
      {icon: 'ti-report', title: 'Actionable Reporting', desc: 'รายงานปัญหาพร้อมขั้นตอน Reproduction ที่ทีมนำไปแก้ได้ทันที'},
      {icon: 'ti-refresh', title: 'Continuous Improvement', desc: 'ลด Flaky Test และเพิ่ม Coverage อย่างต่อเนื่องทุก Release'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Planning', desc: 'Risk-based test strategy scoped to what matters most.'},
      {no: '02', title: 'Test Design', desc: 'Cases, test data, and a clear coverage map.'},
      {no: '03', title: 'Automation', desc: 'Stable CI pipelines and maintainable test suites.'},
      {no: '04', title: 'Execution', desc: 'Regression, exploratory, and release-gate testing.'},
      {no: '05', title: 'Reporting', desc: 'Defect signals teams can act on immediately.'},
      {no: '06', title: 'Improve', desc: 'Flake reduction and steady coverage growth.'}
    ] : [
      {no: '01', title: 'Planning', desc: 'วาง Test Strategy แบบ Risk-based ตามสิ่งที่สำคัญที่สุด'},
      {no: '02', title: 'Test Design', desc: 'ออกแบบ Case, Test Data และ Coverage Map ที่ชัดเจน'},
      {no: '03', title: 'Automation', desc: 'สร้าง CI Pipeline ที่เสถียรและ Test Suite ที่ดูแลง่าย'},
      {no: '04', title: 'Execution', desc: 'ทำ Regression, Exploratory และ Release-gate Testing'},
      {no: '05', title: 'Reporting', desc: 'รายงานปัญหาที่ทีมนำไปแก้ได้ทันที'},
      {no: '06', title: 'Improve', desc: 'ลด Flaky Test และเพิ่ม Coverage อย่างต่อเนื่อง'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Zero Critical Bugs Across 40 Releases', desc: 'Full CI-integrated regression suite covering payment flows end-to-end.', result: 'Release cadence: weekly'},
      {tag: 'E-Commerce · Nationwide', title: 'Checkout Load-Tested for 10x Traffic', desc: 'Performance testing ahead of a major sale event caught 3 bottlenecks.', result: 'Zero downtime on sale day'},
      {tag: 'Healthcare · Bangkok', title: 'Security Gaps Closed Before Launch', desc: 'SAST/DAST scanning integrated into CI caught 12 vulnerabilities pre-launch.', result: '12 vulnerabilities fixed pre-launch'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'ไม่มีบั๊ก Critical ตลอด 40 Release', desc: 'Regression Suite ที่ผูกกับ CI ครอบคลุม Payment Flow แบบ End-to-end', result: 'Release ทุกสัปดาห์'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'Load-test Checkout รองรับ Traffic 10 เท่า', desc: 'Performance Testing ก่อนงาน Sale ใหญ่ จับ Bottleneck ได้ 3 จุด', result: 'ไม่มี Downtime วัน Sale'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'ปิดช่องโหว่ Security ก่อน Launch', desc: 'SAST/DAST Scanning ที่ผูกกับ CI จับช่องโหว่ได้ 12 จุดก่อน Launch', result: 'แก้ช่องโหว่ 12 จุดก่อน Launch'}
    ]
  const faqs        = isEN ? [
      {q: 'What testing services do you offer?', a: 'Automated and exploratory testing embedded in delivery: unit and integration tests, end-to-end suites, performance testing, and security scanning.'},
      {q: 'Which testing tools do you use?', a: 'Playwright, Cypress, Jest, and Vitest for functional testing, k6 for performance, and OWASP ZAP for security scanning.'},
      {q: 'Can you add automated tests to an existing codebase?', a: 'Yes. We start with the highest-risk user journeys and build an end-to-end safety net first.'},
      {q: 'Do you do manual testing too?', a: 'Yes. We combine exploratory testing with automation rather than choosing one over the other.'}
    ] : [
      {q: 'ให้บริการ Testing แบบไหนบ้าง?', a: 'Automated และ Exploratory Testing ที่ฝังในกระบวนการ Delivery: Unit, Integration, End-to-end, Performance และ Security Scanning'},
      {q: 'ใช้เครื่องมือ Testing อะไรบ้าง?', a: 'Playwright, Cypress, Jest และ Vitest สำหรับ Functional Testing, k6 สำหรับ Performance และ OWASP ZAP สำหรับ Security Scanning'},
      {q: 'เพิ่ม Automated Test ให้ Codebase เดิมได้ไหม?', a: 'ได้ครับ เราเริ่มจาก User Journey ที่ Risk สูงสุดและสร้าง End-to-end Safety Net ก่อน'},
      {q: 'ทำ Manual Testing ด้วยไหม?', a: 'ทำครับ เรารวม Exploratory Testing เข้ากับ Automation แทนที่จะเลือกอย่างใดอย่างหนึ่ง'}
    ]
  const related     = isEN ? [
      {label: 'Application Modernization', href: '/services/application-modernization'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Cybersecurity', href: '/services/cybersecurity'},
      {label: 'Managed Services & Support', href: '/services/support-maintenance'}
    ] : [
      {label: 'ปรับปรุงระบบเดิม', href: '/services/application-modernization'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'ความปลอดภัยไซเบอร์', href: '/services/cybersecurity'},
      {label: 'บริการดูแลระบบ', href: '/services/support-maintenance'}
    ]

  const qaLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>playwright test --ci</span></> },
    { n: 2, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? '248 passed · 0 failed · 4.2s' : 'ผ่าน 248 · ล้มเหลว 0 · 4.2s'}</> },
    { n: 3, jsx: <>&nbsp;</> },
    { n: 4, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>k6 run load-test.js</span></> },
    { n: 5, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? 'p95 latency 210ms @ 5k VUs' : 'p95 Latency 210ms @ 5k VUs'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{isEN ? 'zap-scan --baseline' : 'zap-scan --baseline'}</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? '0 high-risk findings' : 'ไม่พบช่องโหว่ระดับสูง'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>test-run.log</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)' }}>
          {qaLines.map((l) => (
            <div key={l.n} className="flex gap-4">
              <span style={{ color: 'rgba(255,255,255,0.25)', width: 16, textAlign: 'right' }}>{l.n}</span>
              <span>{l.jsx}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute -bottom-2 -right-2 w-[220px] rounded-2xl p-4"
        style={{ background: '#1B1A33', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)' }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Test Coverage' : 'Test Coverage'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '95%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '70%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '92%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--lime)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? '92% automated coverage' : 'Coverage อัตโนมัติ 92%'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-robot', title: 'Test Automation', desc: 'CI-native unit, API, and end-to-end suites that catch regressions before users do.' },
    { icon: 'ti-gauge', title: 'Performance & Load', desc: 'Load, stress, and soak testing against realistic traffic so scale is a known quantity.' },
    { icon: 'ti-shield-bolt', title: 'Security Testing', desc: 'SAST/DAST, dependency scanning, and targeted checks aligned with your threat model.' },
    { icon: 'ti-user-search', title: 'Exploratory QA', desc: 'Human-led testing for edge cases, UX friction, and scenarios automation cannot cover alone.' },
  ] : [
    { icon: 'ti-robot', title: 'Test Automation', desc: 'Suite แบบ Unit, API และ End-to-end ที่ผูกกับ CI จับ Regression ก่อนผู้ใช้เจอ' },
    { icon: 'ti-gauge', title: 'Performance & Load', desc: 'Load, Stress และ Soak Testing กับ Traffic แบบใกล้เคียงจริง เพื่อให้ Scale เป็นเรื่องคาดการณ์ได้' },
    { icon: 'ti-shield-bolt', title: 'Security Testing', desc: 'SAST/DAST, Dependency Scanning และการตรวจสอบเฉพาะจุดตาม Threat Model ของคุณ' },
    { icon: 'ti-user-search', title: 'Exploratory QA', desc: 'Testing โดยคนสำหรับ Edge Case, UX Friction และสถานการณ์ที่ Automation อย่างเดียวคลอบคลุมไม่ถึง' },
  ]

  const techStack = [
    { label: 'Playwright', icon: 'ti-test-pipe' },
    { label: 'Cypress', svg: 'cypress' },
    { label: 'Jest', svg: 'jest' },
    { label: 'Vitest', svg: 'vitest' },
    { label: 'Selenium', svg: 'selenium' },
    { label: 'k6', svg: 'k6' },
    { label: 'Postman', svg: 'postman' },
    { label: 'OWASP ZAP', svg: 'owasp' },
    { label: 'BrowserStack', icon: 'ti-device-desktop-analytics' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Planning', desc: 'Risk-based test strategy' },
    { no: '02', title: 'Test Design', desc: 'Cases, data, and coverage map' },
    { no: '03', title: 'Automation', desc: 'CI pipelines and stable suites' },
    { no: '04', title: 'Execution', desc: 'Regression, exploratory, release' },
    { no: '05', title: 'Reporting', desc: 'Defect signals teams can act on' },
    { no: '06', title: 'Improve', desc: 'Flake reduction and coverage growth' },
  ] : [
    { no: '01', title: 'Planning', desc: 'วาง Test Strategy แบบ Risk-based' },
    { no: '02', title: 'Test Design', desc: 'Case, Data และ Coverage Map' },
    { no: '03', title: 'Automation', desc: 'CI Pipeline และ Suite ที่เสถียร' },
    { no: '04', title: 'Execution', desc: 'Regression, Exploratory, Release' },
    { no: '05', title: 'Reporting', desc: 'รายงานปัญหาที่นำไปแก้ได้จริง' },
    { no: '06', title: 'Improve', desc: 'ลด Flaky Test และเพิ่ม Coverage' },
  ]

  const darkFaqs = isEN ? [
    { q: 'What testing services does Haliviq offer?', a: 'Automated and exploratory testing embedded in the delivery process: unit and integration tests, end-to-end suites, performance testing, and security scanning, so quality scales with release speed instead of slowing it down.' },
    { q: 'Which testing tools do you use?', a: 'Playwright, Cypress, Jest, and Vitest for functional and end-to-end testing, k6 for performance, OWASP ZAP for security scanning, and BrowserStack for cross-device coverage. We pick the toolset that fits your existing stack rather than pushing a fixed list on every project.' },
    { q: 'Can you add automated tests to an existing codebase with no coverage?', a: 'Yes. We start with the highest-risk user journeys, build an end-to-end safety net first, and then push coverage down into integration and unit tests as the suite earns trust — rather than trying to write every test on day one.' },
    { q: 'Do you do manual testing too, or is it all automated?', a: 'Both. Exploratory testing by people who understand the product finds what scripts miss — confusing flows, visual glitches, edge cases nobody thought to script. We combine it with automation rather than choosing one over the other.' },
    { q: 'How long does it take to build out a test strategy?', a: 'A focused audit of your highest-risk flows and a prioritised coverage plan takes 1-2 weeks. Building the initial automated suite for a mid-size product typically runs 4-8 weeks, after which the suite grows incrementally with every release rather than needing another big push.' },
    { q: 'How much does ongoing QA cost?', a: 'It scales with the size of the codebase and the depth of coverage needed. A focused test-strategy audit starts in the low five figures (THB); an initial automation build-out for one product area typically starts in the mid five figures, and ongoing QA support is quoted as a monthly retainer sized to your release cadence.' },
    { q: 'Will testing slow down our release cycle?', a: 'The opposite, once the suite is in place. A CI-integrated automation suite runs in minutes on every commit, which means teams ship more confidently and more often, not less — the slowdown from testing usually comes from manual regression cycles, which is exactly what automation replaces.' },
    { q: 'What happens when tests become flaky or unreliable?', a: 'We treat flaky tests as a defect in the suite itself, not something to silently retry past. Part of our ongoing process is tracking flake rate and fixing root causes — timing issues, shared state, environment differences — so the suite stays something the team trusts rather than ignores.' },
  ] : [
    { q: 'Haliviq ให้บริการ Testing แบบไหนบ้าง?', a: 'Automated และ Exploratory Testing ที่ฝังอยู่ในกระบวนการ Delivery: Unit และ Integration Test, End-to-end Suite, Performance Testing และ Security Scanning เพื่อให้คุณภาพ Scale ตามความเร็วในการ Release แทนที่จะทำให้ช้าลง' },
    { q: 'ใช้เครื่องมือ Testing อะไรบ้าง?', a: 'Playwright, Cypress, Jest และ Vitest สำหรับ Functional และ End-to-end Testing, k6 สำหรับ Performance, OWASP ZAP สำหรับ Security Scanning และ BrowserStack สำหรับ Cross-device Coverage เราเลือกชุดเครื่องมือให้เข้ากับ Stack เดิมของคุณ ไม่ใช่ยัดเยียด List ตายตัวให้ทุกโปรเจกต์' },
    { q: 'เพิ่ม Automated Test ให้ Codebase เดิมที่ยังไม่มี Coverage ได้ไหม?', a: 'ได้ครับ เราเริ่มจาก User Journey ที่ Risk สูงสุด สร้าง End-to-end Safety Net ก่อน แล้วค่อยลง Coverage ไปถึง Integration และ Unit Test เมื่อ Suite เริ่มสร้างความเชื่อมั่นได้ แทนที่จะพยายามเขียน Test ทุกอย่างตั้งแต่วันแรก' },
    { q: 'ทำ Manual Testing ด้วยไหม หรือ Automated อย่างเดียว?', a: 'ทำทั้งสองอย่างครับ Exploratory Testing โดยคนที่เข้าใจ Product เจอสิ่งที่ Script พลาด เช่น Flow ที่สับสน, Bug ด้าน Visual หรือ Edge Case ที่ไม่มีใครคิดจะเขียน Script เราผสมกับ Automation แทนที่จะเลือกอย่างใดอย่างหนึ่ง' },
    { q: 'สร้าง Test Strategy ใช้เวลานานแค่ไหน?', a: 'การ Audit Flow ที่ Risk สูงสุดและวาง Coverage Plan ใช้เวลา 1-2 สัปดาห์ ส่วนการสร้าง Automated Suite เริ่มต้นสำหรับ Product ขนาดกลาง มักใช้เวลา 4-8 สัปดาห์ หลังจากนั้น Suite จะเติบโตไปพร้อมทุก Release โดยไม่ต้องมี Push ใหญ่อีกครั้ง' },
    { q: 'งาน QA ต่อเนื่องมีค่าใช้จ่ายเท่าไหร่?', a: 'ขึ้นอยู่กับขนาด Codebase และความลึกของ Coverage ที่ต้องการ การ Audit Test Strategy แบบเจาะจงเริ่มต้นที่หลักหมื่นปลายๆ (บาท) การสร้าง Automation เริ่มต้นสำหรับหนึ่งส่วนของ Product มักเริ่มที่หลักแสนต้นๆ ส่วนงาน QA ต่อเนื่องเสนอราคาเป็นรายเดือนตามความถี่ของ Release' },
    { q: 'การ Test จะทำให้ Release ช้าลงไหม?', a: 'ตรงข้ามเลยครับ เมื่อ Suite พร้อมแล้ว Automation ที่ผูกกับ CI รันเสร็จในไม่กี่นาทีทุก Commit ทำให้ทีม Ship ได้มั่นใจขึ้นและบ่อยขึ้น ไม่ใช่น้อยลง ความช้าที่เจอมักมาจาก Manual Regression Cycle ซึ่งเป็นสิ่งที่ Automation เข้ามาแทนที่โดยตรง' },
    { q: 'ถ้า Test เริ่ม Flaky หรือไม่น่าเชื่อถือจะทำอย่างไร?', a: 'เรามอง Flaky Test เป็นข้อบกพร่องของ Suite เอง ไม่ใช่สิ่งที่ Retry ผ่านไปเฉยๆ ส่วนหนึ่งของกระบวนการต่อเนื่องของเราคือติดตามอัตรา Flaky และแก้ที่ต้นเหตุ เช่น ปัญหา Timing, Shared State หรือความแตกต่างของ Environment เพื่อให้ Suite ยังเป็นสิ่งที่ทีมเชื่อถือ ไม่ใช่สิ่งที่ถูกมองข้าม' },
  ]

  const postHeroSlot = (
    <>
    <section className="relative overflow-hidden" style={{ background: '#08070F' }}>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-10 pb-24 lg:pb-32">
        <div className="rounded-2xl p-10 lg:p-16 mb-16 lg:mb-24" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="w-12 h-[3px] rounded-full mb-8" style={{ background: 'linear-gradient(90deg, var(--purple-light), var(--lime))' }} />
          <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.05rem,1.6vw,1.35rem)', fontWeight: 400, maxWidth: 900 }}>
            {overviewText}
          </p>
        </div>

        <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
          {isEN ? 'Capabilities' : 'ความสามารถ'}
        </p>
        <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
          {isEN ? 'Key Capabilities' : 'ความสามารถหลัก'}
        </h2>
        <p className="mb-12" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400 }}>
          {isEN ? 'Concrete capabilities we bring to this engagement — not buzzwords.' : 'ความสามารถที่จับต้องได้จริงที่เรานำมาใช้ในทุกโปรเจกต์ ไม่ใช่แค่คำสวยหรู'}
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {capabilities.map((c) => (
            <div key={c.title} className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(123,110,246,0.15)' }}>
                  <i className={`ti ${c.icon}`} style={{ fontSize: 20, color: 'var(--purple-light)' }} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-2" style={{ color: '#fff', fontWeight: 600, fontSize: '1.35rem' }}>{c.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', fontWeight: 400 }}>{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-24">
          <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
            {isEN ? 'Tools We Use' : 'เครื่องมือที่ใช้'}
          </p>
          <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้งาน'}
          </h2>
          <p className="mb-12" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'Proven testing tools we apply where they fit — chosen for the problem, not the trend cycle.'
              : 'เครื่องมือ Testing ที่พิสูจน์แล้ว เลือกใช้ตามโจทย์งานจริง ไม่ใช่ตามกระแส'}
          </p>

          <div className="flex flex-wrap gap-3">
            {techStack.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}
              >
                {t.label}
                {t.svg ? (
                  <BrandLogo name={t.svg} />
                ) : (
                  <i className={`ti ${t.icon}`} style={{ fontSize: 15, color: 'var(--purple-light)' }} aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
            {isEN ? 'How We Work' : 'วิธีการทำงาน'}
          </p>
          <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Our Approach' : 'แนวทางการทำงานของเรา'}
          </h2>
          <p className="mb-16" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'A clear path from strategy to a suite the team trusts — adjusted per codebase, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจาก Strategy สู่ Suite ที่ทีมเชื่อถือได้ ปรับตามแต่ละ Codebase ไม่ใช่สูตรสำเร็จตายตัว'}
          </p>

          <div className="relative">
            <div
              className="hidden lg:block absolute left-0 right-0"
              style={{ top: 32, height: 1, background: 'linear-gradient(90deg, rgba(123,110,246,0.5), rgba(83,195,215,0.5))' }}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-14">
              {approachSteps.map((s) => (
                <div key={s.no} className="relative">
                  <div
                    className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 font-mono"
                    style={{
                      background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)',
                      boxShadow: '0 8px 24px -8px rgba(123,110,246,0.6)',
                      color: '#fff',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                    }}
                  >
                    {s.no}
                  </div>
                  <h3 className="mb-2" style={{ color: '#fff', fontWeight: 600, fontSize: '1.2rem' }}>{s.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', fontWeight: 400 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Frequently Asked Questions' : 'คำถามที่พบบ่อย'}
          </h2>
          <p className="mb-4" style={{ color: 'var(--lime)', fontSize: '1.2rem', fontWeight: 600 }}>
            {isEN ? 'Straight answers about how we test.' : 'คำตอบตรงไปตรงมาเกี่ยวกับวิธีที่เรา Test'}
          </p>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {darkFaqs.map((f, i) => (
              <details key={f.q} className="group marker:hidden [&::-webkit-details-marker]:hidden" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }} open={i === 0}>
                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none py-6">
                  <span style={{ color: '#fff', fontSize: 'clamp(1.15rem,1.8vw,1.4rem)', fontWeight: 500 }}>{f.q}</span>
                  <i className="ti ti-chevron-down shrink-0 transition-transform duration-300 group-open:rotate-180" style={{ fontSize: 20, color: 'rgba(255,255,255,0.85)' }} aria-hidden="true" />
                </summary>
                <p className="pb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', fontWeight: 400, maxWidth: 900 }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
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
      <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-28 lg:py-36">
        <h2 className="t-display mb-5 leading-tight" style={{ color: '#fff', fontSize: 'clamp(2.5rem,5.5vw,4.2rem)' }}>
          {isEN ? 'Have a project in mind?' : 'มีโปรเจกต์ในใจแล้วใช่ไหม?'}
        </h2>
        <p className="mb-10" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.25rem', fontWeight: 400 }}>
          {isEN ? "We'd love to hear what you're building." : 'เรายินดีรับฟังสิ่งที่คุณกำลังสร้างครับ'}
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href={`${prefix}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}
          >
            {isEN ? 'Start a Conversation' : 'เริ่มบทสนทนา'}
            <i className="ti ti-arrow-right" style={{ fontSize: 17 }} aria-hidden="true" />
          </Link>
          <a href="mailto:wu@haliviq.com" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', fontWeight: 400 }}>
            wu@haliviq.com
          </a>
        </div>
      </div>
    </section>
    </>
  )

  return (
    <ServiceLayout
      lang={params.lang as Lang}
      badge={badge} title={title} subtitle={subtitle}
      heroDesc={heroDesc} heroBullets={heroBullets}
      heroDark heroSlot={heroSlot} heroShowSecondaryCta={false}
      heroCtaLabel={isEN ? 'Get Started' : 'เริ่มต้นเลย'}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple)" bg="var(--purple-bg)"
      whyImg="/images/services/quality-assurance-testing/why1.jpg"
      whyImg2="/images/services/quality-assurance-testing/why2.jpg"
      featureImg="/images/services/quality-assurance-testing/feature.jpg"
      processImg="/images/services/quality-assurance-testing/process.jpg"
    />
  )
}
