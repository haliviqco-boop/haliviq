import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  prometheus: { hex: '#E6522C', path: 'M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.628-5.373-12-12-12zm0 22.46c-1.885 0-3.414-1.26-3.414-2.814h6.828c0 1.553-1.528 2.813-3.414 2.813zm5.64-3.745H6.36v-2.046h11.28v2.046zm-.04-3.098H6.391c-.037-.043-.075-.086-.111-.13-1.155-1.401-1.427-2.133-1.69-2.879-.005-.025 1.4.287 2.395.511 0 0 .513.119 1.262.255-.72-.843-1.147-1.915-1.147-3.01 0-2.406 1.845-4.508 1.18-6.207.648.053 1.34 1.367 1.387 3.422.689-.951.977-2.69.977-3.755 0-1.103.727-2.385 1.454-2.429-.648 1.069.168 1.984.894 4.256.272.854.237 2.29.447 3.201.07-1.892.395-4.652 1.595-5.605-.529 1.2.079 2.702.494 3.424.671 1.164 1.078 2.047 1.078 3.716a4.642 4.642 0 01-1.11 2.996c.792-.149 1.34-.283 1.34-.283l2.573-.502s-.374 1.538-1.81 3.019z' },
  grafana: { hex: '#F46800', path: 'M23.02 10.59a8.578 8.578 0 0 0-.862-3.034 8.911 8.911 0 0 0-1.789-2.445c.337-1.342-.413-2.505-.413-2.505-1.292-.08-2.113.4-2.416.62-.052-.02-.102-.044-.154-.064-.22-.089-.446-.172-.677-.247-.231-.073-.47-.14-.711-.197a9.867 9.867 0 0 0-.875-.161C14.557.753 12.94 0 12.94 0c-1.804 1.145-2.147 2.744-2.147 2.744l-.018.093c-.098.029-.2.057-.298.088-.138.042-.275.094-.413.143-.138.055-.275.107-.41.166a8.869 8.869 0 0 0-1.557.87l-.063-.029c-2.497-.955-4.716.195-4.716.195-.203 2.658.996 4.33 1.235 4.636a11.608 11.608 0 0 0-.607 2.635C1.636 12.677.953 15.014.953 15.014c1.926 2.214 4.171 2.351 4.171 2.351.003-.002.006-.002.006-.005.285.509.615.994.986 1.446.156.19.32.371.488.548-.704 2.009.099 3.68.099 3.68 2.144.08 3.553-.937 3.849-1.173a9.784 9.784 0 0 0 3.164.501h.08l.055-.003.107-.002.103-.005.003.002c1.01 1.44 2.788 1.646 2.788 1.646 1.264-1.332 1.337-2.653 1.337-2.94v-.058c0-.02-.003-.039-.003-.06.265-.187.52-.387.758-.6a7.875 7.875 0 0 0 1.415-1.7c1.43.083 2.437-.885 2.437-.885-.236-1.49-1.085-2.216-1.264-2.354l-.018-.013-.016-.013a.217.217 0 0 1-.031-.02c.008-.092.016-.18.02-.27.011-.162.016-.323.016-.48v-.253l-.005-.098-.008-.135a1.891 1.891 0 0 0-.01-.13c-.003-.042-.008-.083-.013-.125l-.016-.124-.018-.122a6.215 6.215 0 0 0-2.032-3.73 6.015 6.015 0 0 0-3.222-1.46 6.292 6.292 0 0 0-.85-.048l-.107.002h-.063l-.044.003-.104.008a4.777 4.777 0 0 0-3.335 1.695c-.332.4-.592.84-.768 1.297a4.594 4.594 0 0 0-.312 1.817l.003.091c.005.055.007.11.013.164a3.615 3.615 0 0 0 .698 1.82 3.53 3.53 0 0 0 1.827 1.282c.33.098.66.14.971.137.039 0 .078 0 .114-.002l.063-.003c.02 0 .041-.003.062-.003.034-.002.065-.007.099-.01.007 0 .018-.003.028-.003l.031-.005.06-.008a1.18 1.18 0 0 0 .112-.02c.036-.008.072-.013.109-.024a2.634 2.634 0 0 0 .914-.415c.028-.02.056-.041.085-.065a.248.248 0 0 0 .039-.35.244.244 0 0 0-.309-.06l-.078.042c-.09.044-.184.083-.283.116a2.476 2.476 0 0 1-.475.096c-.028.003-.054.006-.083.006l-.083.002c-.026 0-.054 0-.08-.002l-.102-.006h-.012l-.024.006c-.016-.003-.031-.003-.044-.006-.031-.002-.06-.007-.091-.01a2.59 2.59 0 0 1-.724-.213 2.557 2.557 0 0 1-.667-.438 2.52 2.52 0 0 1-.805-1.475 2.306 2.306 0 0 1-.029-.444l.006-.122v-.023l.002-.031c.003-.021.003-.04.005-.06a3.163 3.163 0 0 1 1.352-2.29 3.12 3.12 0 0 1 .937-.43 2.946 2.946 0 0 1 .776-.101h.06l.07.002.045.003h.026l.07.005a4.041 4.041 0 0 1 1.635.49 3.94 3.94 0 0 1 1.602 1.662 3.77 3.77 0 0 1 .397 1.414l.005.076.003.075c.002.026.002.05.002.075 0 .024.003.052 0 .07v.065l-.002.073-.008.174a6.195 6.195 0 0 1-.08.639 5.1 5.1 0 0 1-.267.927 5.31 5.31 0 0 1-.624 1.13 5.052 5.052 0 0 1-3.237 2.014 4.82 4.82 0 0 1-.649.066l-.039.003h-.287a6.607 6.607 0 0 1-1.716-.265 6.776 6.776 0 0 1-3.4-2.274 6.75 6.75 0 0 1-.746-1.15 6.616 6.616 0 0 1-.714-2.596l-.005-.083-.002-.02v-.056l-.003-.073v-.096l-.003-.104v-.07l.003-.163c.008-.22.026-.45.054-.678a8.707 8.707 0 0 1 .28-1.355c.128-.444.286-.872.473-1.277a7.04 7.04 0 0 1 1.456-2.1 5.925 5.925 0 0 1 .953-.763c.169-.111.343-.213.524-.306.089-.05.182-.091.273-.135.047-.02.093-.042.138-.062a7.177 7.177 0 0 1 .714-.267l.145-.045c.049-.015.098-.026.148-.041.098-.029.197-.052.296-.076.049-.013.1-.02.15-.033l.15-.032.151-.028.076-.013.075-.01.153-.024c.057-.01.114-.013.171-.023l.169-.021c.036-.003.073-.008.106-.01l.073-.008.036-.003.042-.002c.057-.003.114-.008.171-.01l.086-.006h.023l.037-.003.145-.007a7.999 7.999 0 0 1 1.708.125 7.917 7.917 0 0 1 2.048.68 8.253 8.253 0 0 1 1.672 1.09l.09.077.089.078c.06.052.114.107.171.159.057.052.112.106.166.16.052.055.107.107.159.164a8.671 8.671 0 0 1 1.41 1.978c.012.026.028.052.04.078l.04.078.075.156c.023.051.05.1.07.153l.065.15a8.848 8.848 0 0 1 .45 1.34.19.19 0 0 0 .201.142.186.186 0 0 0 .172-.184c.01-.246.002-.532-.024-.856z' },
  datadog: { hex: '#632CA6', path: 'M19.57 17.04l-1.997-1.316-1.665 2.782-1.937-.567-1.706 2.604.087.82 9.274-1.71-.538-5.794zm-8.649-2.498l1.488-.204c.241.108.409.15.697.223.45.117.97.23 1.741-.16.18-.088.553-.43.704-.625l6.096-1.106.622 7.527-10.444 1.882zm11.325-2.712l-.602.115L20.488 0 .789 2.285l2.427 19.693 2.306-.334c-.184-.263-.471-.581-.96-.989-.68-.564-.44-1.522-.039-2.127.53-1.022 3.26-2.322 3.106-3.956-.056-.594-.15-1.368-.702-1.898-.02.22.017.432.017.432s-.227-.289-.34-.683c-.112-.15-.2-.199-.319-.4-.085.233-.073.503-.073.503s-.186-.437-.216-.807c-.11.166-.137.48-.137.48s-.241-.69-.186-1.062c-.11-.323-.436-.965-.343-2.424.6.421 1.924.321 2.44-.439.171-.251.288-.939-.086-2.293-.24-.868-.835-2.16-1.066-2.651l-.028.02c.122.395.374 1.223.47 1.625.293 1.218.372 1.642.234 2.204-.116.488-.397.808-1.107 1.165-.71.358-1.653-.514-1.713-.562-.69-.55-1.224-1.447-1.284-1.883-.062-.477.275-.763.445-1.153-.243.07-.514.192-.514.192s.323-.334.722-.624c.165-.109.262-.178.436-.323a9.762 9.762 0 0 0-.456.003s.42-.227.855-.392c-.318-.014-.623-.003-.623-.003s.937-.419 1.678-.727c.509-.208 1.006-.147 1.286.257.367.53.752.817 1.569.996.501-.223.653-.337 1.284-.509.554-.61.99-.688.99-.688s-.216.198-.274.51c.314-.249.66-.455.66-.455s-.134.164-.259.426l.03.043c.366-.22.797-.394.797-.394s-.123.156-.268.358c.277-.002.838.012 1.056.037 1.285.028 1.552-1.374 2.045-1.55.618-.22.894-.353 1.947.68.903.888 1.609 2.477 1.259 2.833-.294.295-.874-.115-1.516-.916a3.466 3.466 0 0 1-.716-1.562 1.533 1.533 0 0 0-.497-.85s.23.51.23.96c0 .246.03 1.165.424 1.68-.039.076-.057.374-.1.43-.458-.554-1.443-.95-1.604-1.067.544.445 1.793 1.468 2.273 2.449.453.927.186 1.777.416 1.997.065.063.976 1.197 1.15 1.767.306.994.019 2.038-.381 2.685l-1.117.174c-.163-.045-.273-.068-.42-.153.08-.143.241-.5.243-.572l-.063-.111c-.348.492-.93.97-1.414 1.245-.633.359-1.363.304-1.838.156-1.348-.415-2.623-1.327-2.93-1.566 0 0-.01.191.048.234.34.383 1.119 1.077 1.872 1.56l-1.605.177.759 5.908c-.337.048-.39.071-.757.124-.325-1.147-.946-1.895-1.624-2.332-.599-.384-1.424-.47-2.214-.314l-.05.059a2.851 2.851 0 0 1 1.863.444c.654.413 1.181 1.481 1.375 2.124.248.822.42 1.7-.248 2.632-.476.662-1.864 1.028-2.986.237.3.481.705.876 1.25.95.809.11 1.577-.03 2.106-.574.452-.464.69-1.434.628-2.456l.714-.104.258 1.834 11.827-1.424zM15.05 6.848c-.034.075-.085.125-.007.37l.004.014.013.032.032.073c.14.287.295.558.552.696.067-.011.136-.019.207-.023.242-.01.395.028.492.08.009-.048.01-.119.005-.222-.018-.364.072-.982-.626-1.308-.264-.122-.634-.084-.757.068a.302.302 0 0 1 .058.013c.186.066.06.13.027.207m1.958 3.392c-.092-.05-.52-.03-.821.005-.574.068-1.193.267-1.328.372-.247.191-.135.523.047.66.511.382.96.638 1.432.575.29-.038.546-.497.728-.914.124-.288.124-.598-.058-.698m-5.077-2.942c.162-.154-.805-.355-1.556.156-.554.378-.571 1.187-.041 1.646.053.046.096.078.137.104a4.77 4.77 0 0 1 1.396-.412c.113-.125.243-.345.21-.745-.044-.542-.455-.456-.146-.749' },
  newrelic: { hex: '#1CE783', path: 'M8.0015 14.3091v7.384L12.0008 24V12.0008L1.6078 5.9996v4.6167ZM12.0008 0 2.8232 5.2976 6.8209 7.606l5.1799-2.9893 6.3936 3.6913v7.384l-5.1783 2.9908v4.6167l9.176-5.2991V5.9996Z' },
  pagerduty: { hex: '#06AC38', path: 'M16.965 1.18C15.085.164 13.769 0 10.683 0H3.73v14.55h6.926c2.743 0 4.8-.164 6.61-1.37 1.975-1.303 3.004-3.484 3.004-6.007 0-2.716-1.262-4.896-3.305-5.994zm-5.5 10.326h-4.21V3.113l3.977-.027c3.62-.028 5.43 1.234 5.43 4.128 0 3.113-2.248 4.292-5.197 4.292zM3.73 17.61h3.525V24H3.73Z' },
  sentry: { hex: '#362D59', path: 'M13.91 2.505c-.873-1.448-2.972-1.448-3.844 0L6.904 7.92a15.478 15.478 0 0 1 8.53 12.811h-2.221A13.301 13.301 0 0 0 5.784 9.814l-2.926 5.06a7.65 7.65 0 0 1 4.435 5.848H2.194a.365.365 0 0 1-.298-.534l1.413-2.402a5.16 5.16 0 0 0-1.614-.913L.296 19.275a2.182 2.182 0 0 0 .812 2.999 2.24 2.24 0 0 0 1.086.288h6.983a9.322 9.322 0 0 0-3.845-8.318l1.11-1.922a11.47 11.47 0 0 1 4.95 10.24h5.915a17.242 17.242 0 0 0-7.885-15.28l2.244-3.845a.37.37 0 0 1 .504-.13c.255.14 9.75 16.708 9.928 16.9a.365.365 0 0 1-.327.543h-2.287c.029.612.029 1.223 0 1.831h2.297a2.206 2.206 0 0 0 1.922-3.31z' },
  opentelemetry: { hex: '#FFFFFF', path: 'M12.6974 13.1173c-1.0224 1.0224-1.0224 2.68 0 3.7024 1.0224 1.0224 2.68 1.0224 3.7024 0 1.0224-1.0223 1.0224-2.68 0-3.7024-1.0223-1.0223-2.68-1.0223-3.7024 0zm2.7677 2.7701c-.5063.5063-1.3267.5063-1.833 0s-.5063-1.3266 0-1.833c.5063-.5062 1.3267-.5062 1.833 0 .5063.504.5063 1.3267 0 1.833zM16.356.2355l-1.6041 1.6042c-.314.314-.314.83 0 1.144L21.015 9.247c.314.314.83.314 1.144 0l1.6042-1.6041c.314-.314.314-.83 0-1.144L17.4976.2354c-.314-.314-.8276-.314-1.1416 0zM5.1173 20.734c.2848-.2848.2848-.7497 0-1.0345l-.8155-.8155c-.2848-.2848-.7497-.2848-1.0345 0l-1.6845 1.6845-.0024.0024-.4625-.4625c-.2556-.2556-.6718-.2556-.925 0-.2556.2556-.2556.6718 0 .925l2.775 2.775c.2556.2556.6718.2556.925 0 .2532-.2556.2556-.6718 0-.925l-.4625-.4625.0024-.0024zm8.4856-15.893-3.5637 3.5637c-.3164.3164-.3164.8374 0 1.1538l2.2006 2.2005c1.5554-1.1197 3.7365-.981 5.1361.4187l1.7819-1.7818c.3164-.3165.3164-.8374 0-1.1538l-4.401-4.401c-.3165-.319-.8374-.319-1.1539 0zm-2.2881 7.8455-1.2999-1.2999c-.3043-.3043-.8033-.3043-1.1076 0l-4.5836 4.586c-.3042.3043-.3042.8033 0 1.1076l2.5973 2.5973c.3043.3043.8033.3043 1.1076 0l2.9478-2.9527c-.6231-1.2877-.5112-2.8431.3384-4.0383z' },
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

  const badge    = isEN ? 'Operations / Managed Services'  : 'ปฏิบัติการ / Managed Services'
  const title    = isEN ? 'Production That'  : 'ระบบจริงที่'
  const subtitle = isEN ? 'Stays Healthy'    : 'แข็งแรงตลอดเวลา'
  const heroDesc = isEN ? 'Proactive monitoring, incident response, and continuous improvement so production stays healthy after launch.'  : 'เฝ้าระบบล่วงหน้า รับมือเหตุขัดข้อง และปรับปรุงต่อเนื่อง ให้ระบบจริงแข็งแรงหลังเปิดตัว'
  const whyTitle = isEN ? 'Why launch is the beginning, not the finish line'    : 'ทำไมวันเปิดตัวคือจุดเริ่มต้น ไม่ใช่เส้นชัย'
  const whyDesc  = isEN ? 'Systems degrade quietly — dependencies drift out of date, traffic patterns shift, and small issues compound until they become outages nobody saw coming.'  : 'ระบบเสื่อมลงอย่างเงียบๆ Dependency ล้าสมัยไปเรื่อยๆ ปริมาณผู้ใช้เปลี่ยน และปัญหาเล็กๆ ทบกันจนกลายเป็นระบบล่มที่ไม่มีใครเห็นล่วงหน้า'
  const ctaTitle = isEN ? 'Ready for production that just works?'    : 'พร้อมให้ระบบจริงทำงานได้อย่างมั่นใจหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a free observability audit. We will show you the blind spots in your current setup.'   : 'เริ่มด้วยการตรวจ Observability ฟรี เราจะชี้จุดบอดในระบบปัจจุบันของคุณ'
  const overviewText = isEN
    ? 'We offer post-launch support with defined service level agreements covering observability, on-call response, dependency updates, performance tuning, and improvement backlogs. You keep full product ownership and decision-making authority while our team maintains platform reliability, documentation, and readiness for whatever release comes next — so production stays healthy long after the initial excitement of launch day fades.'
    : 'เราดูแลหลังเปิดตัวพร้อม SLA ที่ชัดเจน ครอบคลุม Observability, เวรรับมือเหตุขัดข้อง, อัปเดต Dependency, ปรับประสิทธิภาพ และรายการงานปรับปรุง คุณยังเป็นเจ้าของผลิตภัณฑ์และตัดสินใจเองทั้งหมด ส่วนทีมเราดูแลความน่าเชื่อถือของแพลตฟอร์ม เอกสาร และความพร้อมสำหรับเวอร์ชันถัดไป เพื่อให้ระบบแข็งแรงต่อไปนานหลังความตื่นเต้นวันเปิดตัวผ่านไป'

  const heroBullets = isEN ? [
      'Metrics, logs, traces, and alerts before customers complain',
      'Capacity planning and fix-before-fail proactive work',
      'Scheduled patching with tested, low-risk release paths',
      'Performance, cost, and reliability improvement backlogs',
      'SLAs sized to how critical your system actually is',
    ] : [
      'Metrics, Logs, Traces และการแจ้งเตือน ก่อนที่ลูกค้าจะร้องเรียน',
      'วางแผนรองรับผู้ใช้และลงมือแก้ล่วงหน้าก่อนระบบพัง',
      'อุดช่องโหว่ตามกำหนด พร้อมขั้นตอนปล่อยเวอร์ชันที่ทดสอบแล้วและเสี่ยงต่ำ',
      'รายการปรับปรุงด้านประสิทธิภาพ ต้นทุน และความน่าเชื่อถือ',
      'SLA ที่กำหนดตามความสำคัญของระบบจริง',
    ]
  const whyPoints   = isEN ? [
      'Most outages are preceded by warning signs that go unnoticed without proper observability.',
      'Proactive dependency updates prevent the security and stability issues that pile up silently.',
      'A well-defined SLA turns "someone should fix this" into a clear, accountable response time.',
      'Freeing internal teams from on-call rotation lets them focus on building the product.',
      'Predictable support costs beat unpredictable emergency-fix bills every time.',
    ] : [
      'ระบบล่มส่วนใหญ่มีสัญญาณเตือนล่วงหน้า แต่ถูกมองข้ามเพราะ Observability ไม่ดีพอ',
      'การอัปเดต Dependency ล่วงหน้า ป้องกันปัญหาด้านความปลอดภัยและความเสถียรที่สะสมอย่างเงียบๆ',
      'SLA ที่ชัดเจน เปลี่ยน "ใครสักคนควรแก้เรื่องนี้" ให้เป็นเวลาตอบสนองที่ชัดเจนและมีคนรับผิดชอบ',
      'เมื่อทีมภายในไม่ต้องเข้าเวรรับเหตุขัดข้อง ก็โฟกัสกับการสร้างผลิตภัณฑ์ได้เต็มที่',
      'ค่าดูแลที่คาดการณ์ได้ ดีกว่าบิลแก้ปัญหาฉุกเฉินที่เดาไม่ได้เสมอ',
    ]
  const outcomes    = isEN ? [
      {stat: '99.99%', label: 'Uptime', desc: 'Across managed production systems'},
      {stat: '42ms', label: 'Average Latency', desc: 'Monitored and optimized continuously'},
      {stat: '0', label: 'Unplanned Errors', desc: 'Caught before customer impact'},
      {stat: '<15min', label: 'Alert Response', desc: 'For critical severity incidents'}
    ] : [
      {stat: '99.99%', label: 'Uptime', desc: 'ในระบบจริงที่เราดูแล'},
      {stat: '42ms', label: 'Latency เฉลี่ย', desc: 'ติดตามและปรับปรุงต่อเนื่อง'},
      {stat: '0', label: 'ข้อผิดพลาดที่ไม่ได้วางแผนไว้', desc: 'จับได้ก่อนกระทบลูกค้า'},
      {stat: '<15min', label: 'เวลาตอบสนองต่อการแจ้งเตือน', desc: 'สำหรับเหตุร้ายแรง'}
    ]
  const features    = isEN ? [
      {icon: 'ti-chart-dots', title: 'Observability & Alerts', desc: 'Metrics, logs, traces, and actionable alerts so issues surface before customers complain.'},
      {icon: 'ti-shield-check', title: 'Proactive Support', desc: 'Capacity planning, dependency updates, and fix-before-fail work — not only firefighting.'},
      {icon: 'ti-tool', title: 'Maintenance & Patching', desc: 'Scheduled updates for frameworks, OS images, and services with tested release paths.'},
      {icon: 'ti-trending-up', title: 'Continuous Improvement', desc: 'Performance, cost, and reliability workstreams driven by production data.'},
      {icon: 'ti-phone-call', title: 'On-Call Response', desc: 'Defined SLAs with escalation paths sized to how critical each system is.'},
      {icon: 'ti-report-analytics', title: 'Clear Reporting', desc: 'Transparent status updates and recommendations, not black-box operations.'}
    ] : [
      {icon: 'ti-chart-dots', title: 'Observability & Alerts', desc: 'Metrics, Logs, Traces และการแจ้งเตือนที่ใช้งานได้จริง เพื่อจับปัญหาก่อนลูกค้าร้องเรียน'},
      {icon: 'ti-shield-check', title: 'Proactive Support', desc: 'วางแผนรองรับผู้ใช้ อัปเดต Dependency และแก้ล่วงหน้าก่อนระบบพัง ไม่ใช่แค่ตามดับไฟ'},
      {icon: 'ti-tool', title: 'Maintenance & Patching', desc: 'อัปเดต Framework, OS Image และบริการตามกำหนด พร้อมขั้นตอนปล่อยเวอร์ชันที่ทดสอบแล้ว'},
      {icon: 'ti-trending-up', title: 'Continuous Improvement', desc: 'ปรับปรุงประสิทธิภาพ ต้นทุน และความน่าเชื่อถือ โดยดูจากข้อมูลระบบจริง'},
      {icon: 'ti-phone-call', title: 'On-Call Response', desc: 'SLA ที่ชัดเจน พร้อมลำดับการส่งต่อปัญหาตามความสำคัญของแต่ละระบบ'},
      {icon: 'ti-report-analytics', title: 'Clear Reporting', desc: 'รายงานสถานะและข้อเสนอแนะที่โปร่งใส ไม่ใช่การทำงานแบบปิดบัง'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Onboard', desc: 'Knowledge transfer and access setup.'},
      {no: '02', title: 'Instrument', desc: 'Monitoring, alerts, and runbooks.'},
      {no: '03', title: 'Monitor', desc: 'Health and SLO tracking.'},
      {no: '04', title: 'Maintain', desc: 'Patches, upgrades, and fixes.'},
      {no: '05', title: 'Improve', desc: 'Reliability and performance work.'},
      {no: '06', title: 'Report', desc: 'Clear status and recommendations.'}
    ] : [
      {no: '01', title: 'Onboard', desc: 'ถ่ายทอดความรู้และตั้งค่าสิทธิ์เข้าถึง'},
      {no: '02', title: 'Instrument', desc: 'ตั้งระบบเฝ้าดู การแจ้งเตือน และคู่มือรับมือ'},
      {no: '03', title: 'Monitor', desc: 'ติดตามสุขภาพระบบและ SLO'},
      {no: '04', title: 'Maintain', desc: 'อุดช่องโหว่ อัปเกรด และแก้ปัญหา'},
      {no: '05', title: 'Improve', desc: 'ปรับปรุงความน่าเชื่อถือและประสิทธิภาพ'},
      {no: '06', title: 'Report', desc: 'รายงานสถานะและข้อเสนอแนะที่ชัดเจน'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: '99.99% Uptime Across 18 Months', desc: 'Full observability stack with proactive capacity planning.', result: 'Zero critical outages'},
      {tag: 'E-Commerce · Nationwide', title: 'Sale-Day Traffic Handled Without Incident', desc: 'Capacity planning and load monitoring ahead of peak events.', result: '10x traffic, zero downtime'},
      {tag: 'Healthcare · Bangkok', title: 'Incident Response Time Cut to 12 Minutes', desc: 'PagerDuty escalation and runbooks replaced ad-hoc firefighting.', result: 'MTTR down from 3 hours'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'Uptime 99.99% ตลอด 18 เดือน', desc: 'Observability เต็มรูปแบบ พร้อมวางแผนรองรับผู้ใช้ล่วงหน้า', result: 'ไม่มีระบบล่มร้ายแรง'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'รองรับผู้ใช้วัน Sale ได้โดยไม่มีปัญหา', desc: 'วางแผนรองรับผู้ใช้และเฝ้าดูโหลดล่วงหน้าก่อนงานใหญ่', result: 'ผู้ใช้เพิ่ม 10 เท่า ไม่มีระบบล่ม'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'ลดเวลารับมือเหตุขัดข้องเหลือ 12 นาที', desc: 'ใช้ PagerDuty ส่งต่อปัญหาและมีคู่มือรับมือ แทนการดับไฟเฉพาะหน้า', result: 'MTTR ลดจาก 3 ชั่วโมง'}
    ]
  const faqs        = isEN ? [
      {q: 'What does managed support cover?', a: 'Proactive monitoring, incident response, dependency and security updates, performance tuning, and continuous improvement.'},
      {q: 'Which monitoring tools do you use?', a: 'Prometheus, Grafana, Datadog, New Relic, Sentry, and OpenTelemetry for observability, with PagerDuty for alerting.'},
      {q: 'Do you support systems you did not build?', a: 'Yes. We onboard external systems with an audit, add observability, and take over operations once we understand failure modes.'},
      {q: 'Do you offer SLAs?', a: 'Yes. Support engagements come with defined response times sized to how critical the system is.'}
    ] : [
      {q: 'บริการดูแลระบบ (Managed Support) ครอบคลุมอะไรบ้าง?', a: 'เฝ้าระบบล่วงหน้า รับมือเหตุขัดข้อง อัปเดต Dependency และความปลอดภัย ปรับประสิทธิภาพ และปรับปรุงต่อเนื่อง'},
      {q: 'ใช้เครื่องมือเฝ้าระบบอะไรบ้าง?', a: 'Prometheus, Grafana, Datadog, New Relic, Sentry และ OpenTelemetry สำหรับ Observability พร้อม PagerDuty สำหรับแจ้งเตือน'},
      {q: 'ดูแลระบบที่ไม่ได้พัฒนาเองได้ไหม?', a: 'ได้ครับ เรารับระบบภายนอกด้วยการตรวจสอบก่อน เพิ่ม Observability แล้วรับดูแลเมื่อเข้าใจว่าระบบพังได้แบบไหน'},
      {q: 'มี SLA ไหม?', a: 'มีครับ งานดูแลมาพร้อมเวลาตอบสนองที่ชัดเจน ตามความสำคัญของระบบ'}
    ]
  const related     = isEN ? [
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Application Modernization', href: '/services/application-modernization'},
      {label: 'Cybersecurity', href: '/services/cybersecurity'},
      {label: 'Quality Assurance & Testing', href: '/services/quality-assurance-testing'}
    ] : [
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'ปรับปรุงระบบเดิม', href: '/services/application-modernization'},
      {label: 'ความปลอดภัยไซเบอร์', href: '/services/cybersecurity'},
      {label: 'Quality Assurance & Testing', href: '/services/quality-assurance-testing'}
    ]

  const supportLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{isEN ? 'alert: p99 latency spike' : 'alert: p99 latency spike'}</span></> },
    { n: 2, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? 'Auto-scaled · resolved in 4min' : 'ขยายระบบอัตโนมัติ · แก้ใน 4 นาที'}</> },
    { n: 3, jsx: <>&nbsp;</> },
    { n: 4, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>patch --apply security-updates</span></> },
    { n: 5, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? '7 CVEs patched · zero downtime' : 'แก้ CVE 7 รายการ · ไม่มีระบบล่ม'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{isEN ? 'slo --report weekly' : 'slo --report weekly'}</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? '99.99% uptime maintained' : 'รักษา Uptime 99.99%'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>ops-status.log</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)' }}>
          {supportLines.map((l) => (
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'System Health' : 'สุขภาพระบบ'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 12h4l2-8 4 16 2-8h6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '96%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '70%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '99%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--lime)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? '99.99% uptime' : 'Uptime 99.99%'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-chart-dots', title: 'Observability & Alerts', desc: 'Metrics, logs, traces, and actionable alerts so issues surface before customers complain.' },
    { icon: 'ti-shield-check', title: 'Proactive Support', desc: 'Capacity planning, dependency updates, and fix-before-fail work — not only ticket firefighting.' },
    { icon: 'ti-tool', title: 'Maintenance & Patching', desc: 'Scheduled updates for frameworks, OS images, and services with tested release paths.' },
    { icon: 'ti-trending-up', title: 'Continuous Improvement', desc: 'Performance, cost, and reliability workstreams driven by production data and product goals.' },
  ] : [
    { icon: 'ti-chart-dots', title: 'Observability & Alerts', desc: 'Metrics, Logs, Traces และการแจ้งเตือนที่ใช้งานได้จริง เพื่อจับปัญหาก่อนลูกค้าร้องเรียน' },
    { icon: 'ti-shield-check', title: 'Proactive Support', desc: 'วางแผนรองรับผู้ใช้ อัปเดต Dependency และแก้ล่วงหน้าก่อนระบบพัง ไม่ใช่แค่ปิดงานตาม Ticket' },
    { icon: 'ti-tool', title: 'Maintenance & Patching', desc: 'อัปเดต Framework, OS Image และบริการตามกำหนด พร้อมขั้นตอนปล่อยเวอร์ชันที่ทดสอบแล้ว' },
    { icon: 'ti-trending-up', title: 'Continuous Improvement', desc: 'ปรับปรุงประสิทธิภาพ ต้นทุน และความน่าเชื่อถือ โดยดูจากข้อมูลระบบจริงและเป้าหมายของผลิตภัณฑ์' },
  ]

  const techStack = [
    { label: 'Prometheus', svg: 'prometheus' },
    { label: 'Grafana', svg: 'grafana' },
    { label: 'Datadog', svg: 'datadog' },
    { label: 'New Relic', svg: 'newrelic' },
    { label: 'PagerDuty', svg: 'pagerduty' },
    { label: 'Sentry', svg: 'sentry' },
    { label: 'OpenTelemetry', svg: 'opentelemetry' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Onboard', desc: 'Knowledge transfer and access' },
    { no: '02', title: 'Instrument', desc: 'Monitoring, alerts, runbooks' },
    { no: '03', title: 'Monitor', desc: 'Health and SLO tracking' },
    { no: '04', title: 'Maintain', desc: 'Patches, upgrades, fixes' },
    { no: '05', title: 'Improve', desc: 'Reliability and performance' },
    { no: '06', title: 'Report', desc: 'Clear status and recommendations' },
  ] : [
    { no: '01', title: 'Onboard', desc: 'ถ่ายทอดความรู้และตั้งค่าสิทธิ์เข้าถึง' },
    { no: '02', title: 'Instrument', desc: 'ระบบเฝ้าดู การแจ้งเตือน และคู่มือรับมือ' },
    { no: '03', title: 'Monitor', desc: 'ติดตามสุขภาพระบบและ SLO' },
    { no: '04', title: 'Maintain', desc: 'อุดช่องโหว่ อัปเกรด และแก้ปัญหา' },
    { no: '05', title: 'Improve', desc: 'ปรับปรุงความน่าเชื่อถือและประสิทธิภาพ' },
    { no: '06', title: 'Report', desc: 'รายงานสถานะและข้อเสนอแนะ' },
  ]

  const darkFaqs = isEN ? [
    { q: 'What does Haliviq\'s managed support cover?', a: 'Proactive monitoring, incident response, dependency and security updates, performance tuning, and continuous improvement, so production stays healthy long after launch. It is not a ticket queue — it is ongoing engineering attention on your system.' },
    { q: 'Which monitoring tools do you use?', a: 'Prometheus, Grafana, Datadog, New Relic, Sentry, and OpenTelemetry for observability, with PagerDuty for alerting and on-call escalation. We adapt to tools you already have in place rather than ripping out a working setup.' },
    { q: 'Do you support systems Haliviq did not build?', a: 'Yes. We onboard external systems with an audit first — mapping architecture, dependencies, and known failure modes — add observability where it is missing, and take over operations once we understand how the system actually behaves under load.' },
    { q: 'Do you offer SLAs, and how are they structured?', a: 'Yes. Support engagements come with defined response times and escalation paths sized to how critical the system is, from business-hours coverage for internal tools to around-the-clock response for customer-facing production systems.' },
    { q: 'How much does managed support cost?', a: 'Pricing is a monthly retainer sized to system criticality, on-call coverage hours, and the number of systems under management. A single production application with business-hours coverage typically starts in the low five figures (THB) per month; 24/7 coverage for multiple critical systems is quoted after the onboarding audit.' },
    { q: 'What happens during an actual incident?', a: 'Alerts route through PagerDuty to the on-call engineer, who follows a pre-written runbook specific to your system rather than improvising. You get status updates at defined intervals during the incident, not silence until it is resolved, and a post-incident review afterward covering root cause and prevention.' },
    { q: 'Can we cancel or scale support up and down?', a: 'Yes. Support engagements run month-to-month after an initial onboarding period, and coverage level can scale with a notice period rather than being locked into a long fixed contract. Many clients start with business-hours coverage and expand to 24/7 as the system becomes more critical.' },
    { q: 'Do you just monitor, or do you actually fix things?', a: 'Both. Monitoring without action is just a dashboard nobody looks at. Our engineers investigate root causes, apply fixes, and run the improvement backlog — proactive work like right-sizing infrastructure and patching dependencies — not only reactive firefighting when something breaks.' },
  ] : [
    { q: 'บริการดูแลระบบ (Managed Support) ของ Haliviq ครอบคลุมอะไรบ้าง?', a: 'เฝ้าระบบล่วงหน้า รับมือเหตุขัดข้อง อัปเดต Dependency และความปลอดภัย ปรับประสิทธิภาพ และปรับปรุงต่อเนื่อง ให้ระบบแข็งแรงต่อไปนานหลังเปิดตัว ไม่ใช่แค่คิวรับ Ticket แต่เป็นการดูแลระบบของคุณด้วยความใส่ใจแบบวิศวกรอย่างต่อเนื่อง' },
    { q: 'ใช้เครื่องมือเฝ้าระบบอะไรบ้าง?', a: 'Prometheus, Grafana, Datadog, New Relic, Sentry และ OpenTelemetry สำหรับ Observability พร้อม PagerDuty สำหรับแจ้งเตือนและส่งต่อวิศวกรเวร เราปรับให้เข้ากับเครื่องมือที่คุณมีอยู่ ไม่รื้อสิ่งที่ใช้ได้ดีอยู่แล้วทิ้ง' },
    { q: 'ดูแลระบบที่ Haliviq ไม่ได้พัฒนาเองได้ไหม?', a: 'ได้ครับ เรารับระบบภายนอกด้วยการตรวจสอบก่อน โดยทำแผนที่สถาปัตยกรรม Dependency และจุดที่เคยพังที่รู้อยู่แล้ว เพิ่ม Observability ในจุดที่ยังขาด และรับดูแลเมื่อเข้าใจว่าระบบทำงานจริงอย่างไรเมื่อมีผู้ใช้มาก' },
    { q: 'มี SLA ไหม และมีโครงสร้างอย่างไร?', a: 'มีครับ งานดูแลมาพร้อมเวลาตอบสนองและลำดับการส่งต่อปัญหาที่ชัดเจน ตามความสำคัญของระบบ ตั้งแต่ดูแลในเวลาทำการสำหรับเครื่องมือภายใน ไปจนถึงตอบสนองตลอด 24 ชั่วโมงสำหรับระบบจริงที่ลูกค้าใช้งาน' },
    { q: 'ค่าดูแลระบบเท่าไหร่?', a: 'ราคาเป็นแบบรายเดือน ขึ้นกับความสำคัญของระบบ ชั่วโมงที่มีเวรดูแล และจำนวนระบบที่ดูแล ระบบจริงหนึ่งระบบพร้อมดูแลในเวลาทำการ มักเริ่มที่หลักหมื่นปลายๆ (บาท) ต่อเดือน ส่วนการดูแล 24/7 สำหรับหลายระบบสำคัญจะเสนอราคาหลังตรวจสอบตอนรับระบบ' },
    { q: 'เกิดอะไรขึ้นจริงเมื่อมีเหตุขัดข้อง?', a: 'ระบบแจ้งเตือนผ่าน PagerDuty ไปยังวิศวกรเวร ซึ่งทำตามคู่มือที่เขียนไว้ล่วงหน้าเฉพาะระบบคุณ ไม่ใช่ด้นสด คุณจะได้รับการอัปเดตสถานะตามช่วงเวลาที่กำหนดระหว่างเกิดเหตุ ไม่ใช่เงียบไปจนกว่าจะแก้เสร็จ และมีการทบทวนหลังเหตุการณ์ที่ครอบคลุมสาเหตุราก และวิธีป้องกัน' },
    { q: 'ยกเลิกหรือปรับระดับการดูแลขึ้นลงได้ไหม?', a: 'ได้ครับ งานดูแลเป็นรายเดือนหลังช่วงเริ่มต้น และปรับระดับได้ตามระยะเวลาแจ้งล่วงหน้า ไม่ได้ล็อกไว้ในสัญญาระยะยาว ลูกค้าหลายรายเริ่มจากดูแลในเวลาทำการ แล้วขยายเป็น 24/7 เมื่อระบบสำคัญขึ้น' },
    { q: 'เฝ้าดูอย่างเดียว หรือลงมือแก้ไขจริงด้วย?', a: 'ทำทั้งสองอย่างครับ การเฝ้าดูโดยไม่ลงมือก็เป็นแค่ Dashboard ที่ไม่มีใครมอง วิศวกรของเราตรวจหาสาเหตุราก แก้ไขจริง และดูแลรายการงานปรับปรุง เช่น ปรับโครงสร้างพื้นฐานให้เหมาะสมและอุดช่องโหว่ใน Dependency ไม่ใช่แค่ดับไฟเมื่อมีอะไรพัง' },
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
          {isEN ? 'Concrete capabilities we bring to this engagement — not buzzwords.' : 'สิ่งที่เราทำได้จริงในทุกโปรเจกต์ ไม่ใช่แค่คำสวยหรู'}
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
            {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้'}
          </h2>
          <p className="mb-12" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'Proven observability and alerting tools we apply where they fit — chosen for the problem, not the trend cycle.'
              : 'เครื่องมือ Observability และแจ้งเตือนที่ผ่านการใช้งานจริง เลือกตามโจทย์งาน ไม่ใช่ตามกระแส'}
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
              ? 'A clear path from onboarding to steady-state reliability — adjusted per system, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนตั้งแต่รับระบบจนถึงความน่าเชื่อถือที่มั่นคง ปรับตามแต่ละระบบ ไม่ใช่สูตรตายตัว'}
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
            {isEN ? 'Straight answers about how we support production.' : 'คำตอบตรงไปตรงมาเกี่ยวกับวิธีที่เราดูแลระบบจริง'}
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
            {isEN ? 'Start a Conversation' : 'เริ่มคุยกัน'}
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
      heroCtaLabel={isEN ? 'Get Started' : 'เริ่มเลย'}
      postHeroSlot={postHeroSlot}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple)" bg="var(--purple-bg)"
      whyImg="/images/services/support-maintenance/why1.jpg"
      whyImg2="/images/services/support-maintenance/why2.jpg"
      featureImg="/images/services/support-maintenance/feature.jpg"
      processImg="/images/services/support-maintenance/process.jpg"
    />
  )
}
