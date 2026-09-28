import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  nextdotjs: { hex: '#FFFFFF', path: 'M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z' },
  typescript: { hex: '#3178C6', path: 'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z' },
  react: { hex: '#61DAFB', path: 'M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z' },
  nodedotjs: { hex: '#5FA04E', path: 'M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z' },
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

  const badge    = isEN ? 'Commerce / LINE Mini Apps'  : 'Commerce / LINE Mini Apps'
  const title    = isEN ? 'Meet Customers'  : 'เจอลูกค้าตรงที่'
  const subtitle = isEN ? 'Where They Already Are: LINE'    : 'พวกเขาอยู่แล้ว: LINE'
  const heroDesc = isEN ? 'LINE Mini App development, chat commerce, and payments inside LINE — built into the platform Thai customers already use every day.'  : 'พัฒนา LINE Mini App, Chat Commerce และ Payment ภายใน LINE สร้างเข้ากับ Platform ที่ลูกค้าคนไทยใช้อยู่ทุกวันแล้ว'
  const whyTitle = isEN ? 'Why LINE is the platform, not just a channel'    : 'ทำไม LINE ถึงเป็น Platform ไม่ใช่แค่ช่องทาง'
  const whyDesc  = isEN ? 'For most Thai consumers, LINE is where discovery, chat, and payment already happen. A Mini App meets them there instead of asking them to download something new.'  : 'สำหรับผู้บริโภคไทยส่วนใหญ่ LINE คือที่ที่การค้นหา แชท และชำระเงินเกิดขึ้นอยู่แล้ว Mini App ช่วยเจอลูกค้าตรงจุดนั้น แทนที่จะให้ดาวน์โหลดอะไรใหม่'
  const ctaTitle = isEN ? 'Ready to launch inside LINE?'    : 'พร้อม Launch ภายใน LINE หรือยัง?'
  const ctaDesc  = isEN ? 'Start with a LINE OA and Mini App strategy session tailored to your business.'   : 'เริ่มด้วย Session วางกลยุทธ์ LINE OA และ Mini App ที่ออกแบบเฉพาะธุรกิจของคุณ'
  const overviewText = isEN
    ? 'We build LINE Mini Apps, chat commerce experiences, and Official Account integrations that let customers browse, chat, and pay without ever leaving LINE. That covers LIFF-based Mini App development, Flex Message-driven chat commerce, LINE Pay checkout, rich menus, and backend integration into your existing product and order systems — engineered for the platform Thai customers already trust.'
    : 'เราสร้าง LINE Mini App, ประสบการณ์ Chat Commerce และการเชื่อมต่อ Official Account ที่ให้ลูกค้าเลือกดู แชท และชำระเงินได้โดยไม่ต้องออกจาก LINE ครอบคลุมตั้งแต่การพัฒนา Mini App ด้วย LIFF, Chat Commerce ผ่าน Flex Message, Checkout ด้วย LINE Pay, Rich Menu ไปจนถึงการเชื่อมต่อ Backend เข้ากับระบบ Product และ Order ที่คุณมีอยู่ ออกแบบมาเพื่อ Platform ที่ลูกค้าคนไทยไว้ใจอยู่แล้ว'

  const heroBullets = isEN ? [
      'LIFF-based Mini App development, fully native to LINE',
      'Chat commerce with Flex Messages and Official Accounts',
      'LINE Pay checkout without leaving the conversation',
      'Rich menus and integration into your product catalog',
      'Backend connections to your existing order and CRM systems',
    ] : [
      'พัฒนา Mini App ด้วย LIFF แบบ Native เข้ากับ LINE เต็มรูปแบบ',
      'Chat Commerce ผ่าน Flex Message และ Official Account',
      'Checkout ด้วย LINE Pay โดยไม่ต้องออกจากบทสนทนา',
      'Rich Menu และเชื่อมต่อเข้ากับ Catalog สินค้าของคุณ',
      'เชื่อมต่อ Backend เข้ากับระบบ Order และ CRM ที่มีอยู่',
    ]
  const whyPoints   = isEN ? [
      'LINE has near-universal reach among Thai consumers, far beyond any single app download.',
      'Mini Apps launch instantly from a chat or rich menu — no app store friction, no install step.',
      'LINE Pay checkout keeps the entire purchase journey inside a channel customers already trust.',
      'Official Account broadcasts and chat commerce turn conversations directly into sales.',
      'Backend integration means the Mini App reflects real inventory and order status, not a separate silo.',
    ] : [
      'LINE มีการเข้าถึงเกือบครอบคลุมผู้บริโภคไทย มากกว่าแอปเดี่ยวใดๆ ที่ต้องดาวน์โหลด',
      'Mini App เปิดใช้งานได้ทันทีจากแชทหรือ Rich Menu ไม่มีขั้นตอนติดตั้งหรือแรงเสียดทานจาก App Store',
      'Checkout ด้วย LINE Pay ทำให้ทั้ง Journey การซื้ออยู่ในช่องทางที่ลูกค้าไว้ใจอยู่แล้ว',
      'การ Broadcast จาก Official Account และ Chat Commerce เปลี่ยนบทสนทนาให้เป็นยอดขายได้โดยตรง',
      'การเชื่อมต่อ Backend ทำให้ Mini App สะท้อน Inventory และสถานะ Order จริง ไม่ใช่ระบบแยกต่างหาก',
    ]
  const outcomes    = isEN ? [
      {stat: '50M+', label: 'LINE Users in Thailand', desc: 'Reachable without a new app install'},
      {stat: '0', label: 'App Store Friction', desc: 'Mini Apps launch instantly'},
      {stat: '40%', label: 'Avg. Chat-to-Sale Lift', desc: 'With chat commerce flows'},
      {stat: '<6wk', label: 'Typical Launch', desc: 'From kickoff to go-live'}
    ] : [
      {stat: '50M+', label: 'ผู้ใช้ LINE ในไทย', desc: 'เข้าถึงได้โดยไม่ต้องติดตั้งแอปใหม่'},
      {stat: '0', label: 'แรงเสียดทานจาก App Store', desc: 'Mini App เปิดใช้งานได้ทันที'},
      {stat: '40%', label: 'ยอดขายเพิ่มขึ้นเฉลี่ย', desc: 'จาก Chat Commerce Flow'},
      {stat: '<6wk', label: 'ระยะเวลา Launch', desc: 'ตั้งแต่เริ่มจนถึง Go-live'}
    ]
  const features    = isEN ? [
      {icon: 'ti-apps', title: 'LINE Mini App Development', desc: 'Full LIFF-based Mini Apps that feel native inside LINE, from browsing to checkout.'},
      {icon: 'ti-message-circle', title: 'Chat Commerce & Official Accounts', desc: 'Flex Message-driven shopping flows and OA broadcasts that turn conversations into sales.'},
      {icon: 'ti-wallet', title: 'Payments Inside LINE', desc: 'LINE Pay checkout embedded directly in the chat and Mini App experience.'},
      {icon: 'ti-plug-connected', title: 'Platform & Backend Integration', desc: 'Real-time connections into your product catalog, order system, and CRM.'},
      {icon: 'ti-menu-2', title: 'Rich Menus & Navigation', desc: 'Custom rich menus that put your key actions one tap away from any chat.'},
      {icon: 'ti-chart-bar', title: 'Analytics & Growth', desc: 'Tracking on engagement, conversion, and repeat purchase to guide iteration.'}
    ] : [
      {icon: 'ti-apps', title: 'LINE Mini App Development', desc: 'Mini App เต็มรูปแบบด้วย LIFF ที่รู้สึกเป็น Native ภายใน LINE ตั้งแต่เลือกดูจนถึง Checkout'},
      {icon: 'ti-message-circle', title: 'Chat Commerce & Official Accounts', desc: 'Flow การช้อปปิ้งผ่าน Flex Message และ Broadcast จาก OA ที่เปลี่ยนบทสนทนาเป็นยอดขาย'},
      {icon: 'ti-wallet', title: 'Payments Inside LINE', desc: 'Checkout ด้วย LINE Pay ฝังตรงในแชทและประสบการณ์ Mini App'},
      {icon: 'ti-plug-connected', title: 'Platform & Backend Integration', desc: 'เชื่อมต่อแบบ Real-time เข้ากับ Catalog สินค้า, ระบบ Order และ CRM'},
      {icon: 'ti-menu-2', title: 'Rich Menus & Navigation', desc: 'Rich Menu แบบ Custom ที่ทำให้ Action สำคัญอยู่แค่แตะเดียวจากทุกแชท'},
      {icon: 'ti-chart-bar', title: 'Analytics & Growth', desc: 'ติดตาม Engagement, Conversion และการซื้อซ้ำ เพื่อปรับปรุงต่อเนื่อง'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Discovery', desc: 'Understand customer journey and OA setup.'},
      {no: '02', title: 'Design', desc: 'Map chat flows, Mini App screens, and rich menus.'},
      {no: '03', title: 'Development', desc: 'Build the LIFF Mini App and chat commerce flows.'},
      {no: '04', title: 'Integration', desc: 'Connect LINE Pay, catalog, and order systems.'},
      {no: '05', title: 'Review & Launch', desc: 'LINE platform review and go-live.'},
      {no: '06', title: 'Growth', desc: 'Broadcast campaigns and conversion optimization.'}
    ] : [
      {no: '01', title: 'Discovery', desc: 'ทำความเข้าใจ Customer Journey และ OA ที่มี'},
      {no: '02', title: 'Design', desc: 'ออกแบบ Chat Flow, หน้าจอ Mini App และ Rich Menu'},
      {no: '03', title: 'Development', desc: 'สร้าง Mini App ด้วย LIFF และ Chat Commerce Flow'},
      {no: '04', title: 'Integration', desc: 'เชื่อมต่อ LINE Pay, Catalog และระบบ Order'},
      {no: '05', title: 'Review & Launch', desc: 'ตรวจสอบตามเงื่อนไข LINE และ Go-live'},
      {no: '06', title: 'Growth', desc: 'แคมเปญ Broadcast และปรับปรุง Conversion'}
    ]
  const caseStudies = isEN ? [
      {tag: 'Retail · Bangkok', title: 'Mini App Drives 40% of Mobile Sales', desc: 'Full LIFF Mini App with catalog, cart, and LINE Pay checkout.', result: '40% of mobile revenue via LINE'},
      {tag: 'F&B · Nationwide', title: 'Chat Commerce Launched in 5 Weeks', desc: 'Flex Message ordering flow integrated with the existing POS.', result: 'Zero new app download required'},
      {tag: 'Beauty · Bangkok', title: 'OA Broadcasts Lift Repeat Purchases 40%', desc: 'Segmented broadcast campaigns tied directly to the Mini App catalog.', result: '+40% repeat purchase rate'}
    ] : [
      {tag: 'Retail · กรุงเทพฯ', title: 'Mini App สร้างยอดขาย Mobile 40%', desc: 'Mini App ด้วย LIFF เต็มรูปแบบ พร้อม Catalog, Cart และ Checkout ด้วย LINE Pay', result: '40% ของรายได้ Mobile มาจาก LINE'},
      {tag: 'F&B · ทั่วประเทศ', title: 'Chat Commerce เปิดตัวใน 5 สัปดาห์', desc: 'Flow สั่งอาหารผ่าน Flex Message เชื่อมต่อกับ POS ที่มีอยู่', result: 'ไม่ต้องดาวน์โหลดแอปใหม่'},
      {tag: 'Beauty · กรุงเทพฯ', title: 'Broadcast จาก OA เพิ่มการซื้อซ้ำ 40%', desc: 'แคมเปญ Broadcast แบบแบ่งกลุ่มเชื่อมตรงกับ Catalog ใน Mini App', result: 'อัตราซื้อซ้ำ +40%'}
    ]
  const faqs        = isEN ? [
      {q: 'What is a LINE Mini App?', a: 'A web app built with LIFF that opens instantly inside LINE — no download, no app store — for browsing, ordering, and payment.'},
      {q: 'Can it connect to our existing e-commerce or POS system?', a: 'Yes. We build backend integrations so the Mini App reflects real inventory, pricing, and order status.'},
      {q: 'Does it support LINE Pay?', a: 'Yes, checkout can be completed with LINE Pay directly inside the chat or Mini App experience.'},
      {q: 'Do we need an existing Official Account?', a: 'Not necessarily — we can set up and configure a new Official Account as part of the project, or work with your existing one.'}
    ] : [
      {q: 'LINE Mini App คืออะไร?', a: 'Web App ที่สร้างด้วย LIFF เปิดใช้งานได้ทันทีภายใน LINE ไม่ต้องดาวน์โหลด ไม่ต้องผ่าน App Store สำหรับเลือกดู สั่งซื้อ และชำระเงิน'},
      {q: 'เชื่อมต่อกับ E-Commerce หรือ POS ที่มีอยู่ได้ไหม?', a: 'ได้ครับ เราสร้างการเชื่อมต่อ Backend ให้ Mini App สะท้อน Inventory, ราคา และสถานะ Order จริง'},
      {q: 'รองรับ LINE Pay ไหม?', a: 'รองรับครับ Checkout สามารถทำได้ด้วย LINE Pay โดยตรงภายในแชทหรือ Mini App'},
      {q: 'ต้องมี Official Account อยู่แล้วไหม?', a: 'ไม่จำเป็นครับ เราสามารถตั้งค่า Official Account ใหม่เป็นส่วนหนึ่งของโปรเจกต์ หรือทำงานร่วมกับที่มีอยู่แล้วก็ได้'}
    ]
  const related     = isEN ? [
      {label: 'E-Commerce', href: '/services/ecommerce'},
      {label: 'AI Voice Agents', href: '/services/ai-voice-agents'},
      {label: 'PDPA Compliance', href: '/services/pdpa-compliance'},
      {label: 'Quality Assurance & Testing', href: '/services/quality-assurance-testing'}
    ] : [
      {label: 'E-Commerce', href: '/services/ecommerce'},
      {label: 'AI Voice Agents', href: '/services/ai-voice-agents'},
      {label: 'PDPA Compliance', href: '/services/pdpa-compliance'},
      {label: 'Quality Assurance & Testing', href: '/services/quality-assurance-testing'}
    ]

  const lineLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>liff init --app catalog-mini-app</span></> },
    { n: 2, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? 'Mini App live inside LINE' : 'Mini App พร้อมใช้ใน LINE'}</> },
    { n: 3, jsx: <>&nbsp;</> },
    { n: 4, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>checkout --provider line-pay</span></> },
    { n: 5, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? 'Payment completed in-chat' : 'ชำระเงินสำเร็จในแชท'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>broadcast --segment repeat-customers</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? 'Repeat purchases +40%' : 'ซื้อซ้ำเพิ่มขึ้น +40%'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>liff-session.log</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)' }}>
          {lineLines.map((l) => (
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Mini App Reach' : 'Mini App Reach'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <i className="ti ti-brand-line" style={{ fontSize: 22, color: '#fff' }} aria-hidden="true" />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '90%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '65%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '85%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--lime)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? '40% of mobile sales via LINE' : '40% ของยอดขาย Mobile มาจาก LINE'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-apps', title: 'LINE Mini App Development', desc: 'Full LIFF-based Mini Apps that feel native inside LINE, from browsing to checkout.' },
    { icon: 'ti-message-circle', title: 'Chat Commerce & Official Accounts', desc: 'Flex Message-driven shopping flows and OA broadcasts that turn conversations into sales.' },
    { icon: 'ti-wallet', title: 'Payments Inside LINE', desc: 'LINE Pay checkout embedded directly in the chat and Mini App experience.' },
    { icon: 'ti-plug-connected', title: 'Platform & Backend Integration', desc: 'Real-time connections into your product catalog, order system, and CRM.' },
  ] : [
    { icon: 'ti-apps', title: 'LINE Mini App Development', desc: 'Mini App เต็มรูปแบบด้วย LIFF ที่รู้สึกเป็น Native ภายใน LINE ตั้งแต่เลือกดูจนถึง Checkout' },
    { icon: 'ti-message-circle', title: 'Chat Commerce & Official Accounts', desc: 'Flow การช้อปปิ้งผ่าน Flex Message และ Broadcast จาก OA ที่เปลี่ยนบทสนทนาเป็นยอดขาย' },
    { icon: 'ti-wallet', title: 'Payments Inside LINE', desc: 'Checkout ด้วย LINE Pay ฝังตรงในแชทและประสบการณ์ Mini App' },
    { icon: 'ti-plug-connected', title: 'Platform & Backend Integration', desc: 'เชื่อมต่อแบบ Real-time เข้ากับ Catalog สินค้า, ระบบ Order และ CRM' },
  ]

  const techStack = [
    { label: 'LIFF', icon: 'ti-brand-line' },
    { label: 'LINE Messaging API', icon: 'ti-message-2' },
    { label: 'LINE Login', icon: 'ti-login' },
    { label: 'LINE Pay', icon: 'ti-wallet' },
    { label: 'Flex Messages', icon: 'ti-layout-cards' },
    { label: 'Rich Menus', icon: 'ti-menu-2' },
    { label: 'LINE Official Account', icon: 'ti-speakerphone' },
    { label: 'React', svg: 'react' },
    { label: 'Next.js', svg: 'nextdotjs' },
    { label: 'TypeScript', svg: 'typescript' },
    { label: 'Node.js', svg: 'nodedotjs' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Discovery', desc: 'Customer journey and OA setup' },
    { no: '02', title: 'Design', desc: 'Chat flows, screens, rich menus' },
    { no: '03', title: 'Development', desc: 'Build the Mini App and chat flows' },
    { no: '04', title: 'Integration', desc: 'LINE Pay, catalog, order systems' },
    { no: '05', title: 'Review & Launch', desc: 'Platform review and go-live' },
    { no: '06', title: 'Growth', desc: 'Broadcasts and conversion tuning' },
  ] : [
    { no: '01', title: 'Discovery', desc: 'Customer Journey และ OA ที่มี' },
    { no: '02', title: 'Design', desc: 'Chat Flow, หน้าจอ และ Rich Menu' },
    { no: '03', title: 'Development', desc: 'สร้าง Mini App และ Chat Flow' },
    { no: '04', title: 'Integration', desc: 'LINE Pay, Catalog และระบบ Order' },
    { no: '05', title: 'Review & Launch', desc: 'ตรวจสอบตามเงื่อนไขและ Go-live' },
    { no: '06', title: 'Growth', desc: 'Broadcast และปรับปรุง Conversion' },
  ]

  const darkFaqs = isEN ? [
    { q: 'What is a LINE Mini App and how is it different from a regular app?', a: 'A LINE Mini App is a web app built with LIFF that opens instantly inside LINE — no download, no app store review to wait on — for browsing, ordering, and payment, all inside a chat window customers already have open.' },
    { q: 'Can it connect to our existing e-commerce or POS system?', a: 'Yes. We build backend integrations so the Mini App reflects real inventory, pricing, and order status from your existing systems rather than maintaining a separate product catalog.' },
    { q: 'Does it support LINE Pay for checkout?', a: 'Yes, checkout can be completed with LINE Pay directly inside the chat or Mini App experience, keeping the entire purchase in one flow without redirecting to an external payment page.' },
    { q: 'Do we need an existing Official Account to start?', a: 'Not necessarily. We can set up and configure a new Official Account as part of the project, or build on top of an OA you already run, including migrating existing rich menus and automation.' },
    { q: 'How long does a LINE Mini App project take?', a: 'A focused Mini App with catalog and checkout typically launches in 5-6 weeks. Projects that include deeper backend integration, custom chat commerce flows, or multiple Official Accounts usually run 8-10 weeks.' },
    { q: 'How much does a LINE Mini App project cost?', a: 'Pricing depends on catalog complexity and the depth of backend integration required. A focused Mini App project typically starts in the low five figures (THB); broader chat commerce and CRM-integrated builds are quoted after a discovery call.' },
    { q: 'Do we own the Mini App code after launch?', a: 'Yes. You own the LIFF application code, the backend integration, and the Official Account configuration, and can extend or maintain it independently or with our ongoing support.' },
    { q: 'Can this reach customers who don’t already follow our Official Account?', a: 'Partially — a Mini App works best paired with OA growth (rich menu placement, QR codes, ad campaigns) since it launches from a LINE touchpoint. We help plan that acquisition strategy alongside the build.' },
  ] : [
    { q: 'LINE Mini App คืออะไร ต่างจากแอปทั่วไปอย่างไร?', a: 'LINE Mini App คือ Web App ที่สร้างด้วย LIFF เปิดใช้งานได้ทันทีภายใน LINE ไม่ต้องดาวน์โหลด ไม่ต้องรอ App Store Review สำหรับเลือกดู สั่งซื้อ และชำระเงิน ทั้งหมดอยู่ในหน้าต่างแชทที่ลูกค้าเปิดอยู่แล้ว' },
    { q: 'เชื่อมต่อกับ E-Commerce หรือ POS ที่มีอยู่ได้ไหม?', a: 'ได้ครับ เราสร้างการเชื่อมต่อ Backend ให้ Mini App สะท้อน Inventory, ราคา และสถานะ Order จากระบบที่มีอยู่ แทนที่จะต้องดูแล Catalog สินค้าแยกต่างหาก' },
    { q: 'รองรับ LINE Pay สำหรับ Checkout ไหม?', a: 'รองรับครับ Checkout สามารถทำได้ด้วย LINE Pay โดยตรงภายในแชทหรือ Mini App ทำให้การซื้อทั้งหมดอยู่ใน Flow เดียว ไม่ต้อง Redirect ไปหน้าชำระเงินภายนอก' },
    { q: 'ต้องมี Official Account อยู่แล้วก่อนเริ่มไหม?', a: 'ไม่จำเป็นครับ เราสามารถตั้งค่า Official Account ใหม่เป็นส่วนหนึ่งของโปรเจกต์ หรือต่อยอดจาก OA ที่คุณมีอยู่แล้ว รวมถึงการย้าย Rich Menu และ Automation เดิม' },
    { q: 'โปรเจกต์ LINE Mini App ใช้เวลานานแค่ไหน?', a: 'Mini App แบบเจาะจงพร้อม Catalog และ Checkout มักเปิดตัวได้ใน 5-6 สัปดาห์ ส่วนโปรเจกต์ที่รวมการเชื่อมต่อ Backend เชิงลึก, Chat Commerce Flow แบบ Custom หรือหลาย Official Account มักใช้เวลา 8-10 สัปดาห์' },
    { q: 'โปรเจกต์ LINE Mini App มีค่าใช้จ่ายเท่าไหร่?', a: 'ราคาขึ้นอยู่กับความซับซ้อนของ Catalog และความลึกของการเชื่อมต่อ Backend Mini App แบบเจาะจงมักเริ่มต้นที่หลักหมื่นปลายๆ (บาท) ส่วน Chat Commerce ที่กว้างขึ้นและเชื่อมต่อ CRM จะเสนอราคาหลัง Discovery' },
    { q: 'เราเป็นเจ้าของ Code ของ Mini App หลัง Launch ไหม?', a: 'ใช่ครับ คุณเป็นเจ้าของ Code ของ LIFF Application, การเชื่อมต่อ Backend และการตั้งค่า Official Account สามารถต่อยอดหรือดูแลเองได้ หรือใช้บริการดูแลต่อเนื่องจากเรา' },
    { q: 'ช่วยเข้าถึงลูกค้าที่ยังไม่ได้ Follow Official Account ของเราได้ไหม?', a: 'ได้บางส่วนครับ Mini App จะทำงานได้ดีที่สุดเมื่อควบคู่กับการเติบโตของ OA เช่น การวาง Rich Menu, QR Code และแคมเปญโฆษณา เนื่องจาก Mini App เปิดจาก Touchpoint ของ LINE เราช่วยวางกลยุทธ์การเข้าถึงลูกค้านี้ควบคู่ไปกับการสร้างด้วย' },
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
              ? 'The LINE developer platform paired with a modern web stack for Mini Apps that feel fast and native.'
              : 'LINE Developer Platform ควบคู่กับ Web Stack สมัยใหม่ สำหรับ Mini App ที่เร็วและรู้สึก Native'}
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
              ? 'A clear path from discovery to a launched Mini App — adjusted per business, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจาก Discovery สู่ Mini App ที่ Launch แล้ว ปรับตามแต่ละธุรกิจ ไม่ใช่สูตรสำเร็จตายตัว'}
          </p>

          <div className="relative">
            <div
              className="hidden lg:block absolute left-0 right-0"
              style={{ top: 32, height: 1, background: 'linear-gradient(90deg, rgba(123,110,246,0.5), rgba(196,255,92,0.5))' }}
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
            {isEN ? 'Straight answers about building on LINE.' : 'คำตอบตรงไปตรงมาเกี่ยวกับการสร้างบน LINE'}
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
        style={{ height: 260, background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(123,110,246,0.35) 0%, rgba(196,255,92,0.08) 45%, transparent 75%)' }}
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
      postHeroSlot={postHeroSlot}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple)" bg="var(--purple-bg)"
      whyImg="/images/services/line-mini-apps/why1.jpg"
      whyImg2="/images/services/line-mini-apps/why2.jpg"
      featureImg="/images/services/line-mini-apps/feature.jpg"
      processImg="/images/services/line-mini-apps/process.jpg"
    />
  )
}
