import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  snowflake: { hex: '#29B5E8', path: 'M24 3.459c0 .646-.418 1.18-1.141 1.18-.723 0-1.142-.534-1.142-1.18 0-.647.419-1.18 1.142-1.18.723 0 1.141.533 1.141 1.18zm-.228 0c0-.533-.38-.951-.913-.951s-.913.38-.913.95c0 .533.38.952.913.952.57 0 .913-.419.913-.951zm-1.37-.533h.495c.266 0 .456.152.456.38 0 .153-.076.229-.19.305l.19.266v.038h-.266l-.19-.266h-.229v.266h-.266zm.495.228h-.229v.267h.229c.114 0 .152-.038.152-.114.038-.077-.038-.153-.152-.153zM7.602 12.4c.038-.151.076-.304.076-.456 0-.114-.038-.228-.038-.342-.114-.343-.304-.647-.646-.838l-4.87-2.777c-.685-.38-1.56-.152-1.94.533-.381.685-.153 1.56.532 1.94l2.701 1.56-2.701 1.56c-.685.38-.913 1.256-.533 1.94.38.685 1.256.914 1.94.533l4.832-2.777c.343-.267.571-.533.647-.876zm1.332 2.626c-.266-.038-.57.038-.837.19l-4.832 2.777c-.685.38-.913 1.256-.532 1.94.38.686 1.255.914 1.94.533l2.701-1.56v3.12c0 .8.647 1.408 1.446 1.408.799 0 1.407-.647 1.407-1.408v-5.592c0-.761-.57-1.37-1.293-1.408zm4.946-6.088c.266.038.57-.038.837-.19l4.832-2.777c.685-.38.913-1.256.532-1.94-.38-.686-1.255-.914-1.94-.533l-2.701 1.56V1.975c0-.799-.647-1.408-1.446-1.408-.799 0-1.446.609-1.446 1.408V7.53c0 .76.609 1.37 1.332 1.407zM3.265 5.97l4.832 2.777c.266.152.533.19.837.19.723-.038 1.331-.684 1.331-1.407V1.975c0-.799-.646-1.408-1.407-1.408-.799 0-1.446.647-1.446 1.408v3.12l-2.701-1.56c-.685-.38-1.56-.152-1.94.533-.419.646-.19 1.521.494 1.902zm9.093 6.011a.412.412 0 00-.114-.266l-.57-.571a.346.346 0 00-.267-.114.412.412 0 00-.266.114l-.571.57a.411.411 0 00-.114.267c0 .076.038.19.114.267l.57.57a.345.345 0 00.267.114c.076 0 .19-.038.266-.114l.571-.57a.412.412 0 00.114-.267zm1.598.533L11.94 14.53c-.039.038-.153.114-.229.114h-.608a.411.411 0 01-.267-.114L8.82 12.514a.408.408 0 01-.076-.229v-.608c0-.076.038-.19.114-.267l2.016-2.016a.41.41 0 01.267-.114h.608a.41.41 0 01.267.114l2.016 2.016a.347.347 0 01.114.267v.608c-.076.077-.114.19-.19.229zm5.593 5.44l-4.832-2.777c-.266-.152-.57-.19-.837-.152-.723.038-1.332.684-1.332 1.408v5.554c0 .8.647 1.408 1.408 1.408.799 0 1.446-.647 1.446-1.408v-3.12l2.7 1.56c.686.38 1.561.152 1.941-.533.419-.646.19-1.521-.494-1.94zm2.549-7.533l-2.701 1.56 2.7 1.56c.686.38.914 1.256.533 1.94-.38.685-1.255.913-1.94.533l-4.832-2.778a1.644 1.644 0 01-.647-.798c-.037-.153-.076-.305-.076-.457 0-.114.039-.228.039-.342.114-.343.342-.647.646-.837l4.832-2.778c.685-.38 1.56-.152 1.94.533.457.609.19 1.484-.494 1.864' },
  databricks: { hex: '#FF3621', path: 'M.95 14.184L12 20.403l9.919-5.55v2.21L12 22.662l-10.484-5.96-.565.308v.77L12 24l11.05-6.218v-4.317l-.515-.309L12 19.118l-9.867-5.653v-2.21L12 16.805l11.05-6.218V6.32l-.515-.308L12 11.974 2.647 6.681 12 1.388l7.76 4.368.668-.411v-.566L12 0 .95 6.27v.72L12 13.207l9.919-5.55v2.26L12 15.52 1.516 9.56l-.565.308Z' },
  apachespark: { hex: '#E25A1C', path: 'M10.812 0c-.425.013-.845.215-1.196.605a3.593 3.593 0 00-.493.722c-.355.667-.425 1.415-.556 2.143a551.9 551.9 0 00-.726 4.087c-.027.16-.096.227-.244.273C5.83 8.386 4.06 8.94 2.3 9.514c-.387.125-.773.289-1.114.506-1.042.665-1.196 1.753-.415 2.71.346.422.79.715 1.284.936 1.1.49 2.202.976 3.3 1.47.019.01.036.013.053.019h-.004l1.306.535c0 .023.002.045 0 .073-.2 2.03-.39 4.063-.58 6.095-.04.419-.012.831.134 1.23.317.87 1.065 1.148 1.881.701.372-.204.666-.497.937-.818 1.372-1.623 2.746-3.244 4.113-4.872.111-.133.205-.15.363-.098.349.117.697.231 1.045.347h.001c.02.012.045.02.073.03l.142.042c1.248.416 2.68.775 3.929 1.19.4.132.622.164 1.045.098.311-.048.592-.062.828-.236.602-.33.995-.957.988-1.682-.005-.427-.154-.813-.35-1.186-.82-1.556-1.637-3.113-2.461-4.666-.078-.148-.076-.243.037-.375 1.381-1.615 2.756-3.236 4.133-4.855.272-.32.513-.658.653-1.058.308-.878-.09-1.57-1-1.741a2.783 2.783 0 00-1.235.069c-1.974.521-3.947 1.041-5.918 1.57-.175.047-.26.015-.355-.144a353.08 353.08 0 00-2.421-4.018 4.61 4.61 0 00-.652-.849c-.371-.37-.802-.549-1.227-.536zm.172 3.703a.592.592 0 01.189.211c.87 1.446 1.742 2.89 2.609 4.338.07.118.135.16.277.121 1.525-.41 3.052-.813 4.579-1.217.367-.098.735-.193 1.103-.289a.399.399 0 01-.1.2c-1.259 1.48-2.516 2.962-3.779 4.438-.11.13-.12.22-.04.37.937 1.803 1.768 3.309 2.498 4.76l-3.696-1.019c-.538-.18-1.077-.358-1.615-.539-.163-.055-.25-.03-.36.1-1.248 1.488-2.504 2.97-3.759 4.454a.398.398 0 01-.18.132c.035-.378.068-.757.104-1.136.149-1.572.297-3.144.451-4.716-.03-.318.117-.405-.322-.545-1.493-.593-3.346-1.321-4.816-1.905a.595.595 0 01.24-.134c1.797-.57 3.595-1.14 5.394-1.705.127-.04.199-.092.211-.233.013-.148.05-.294.076-.441.241-1.363.483-2.726.726-4.088.068-.386.14-.771.21-1.157z' },
  apachekafka: { hex: '#FFFFFF', path: 'M9.71 2.136a1.43 1.43 0 0 0-2.047 0h-.007a1.48 1.48 0 0 0-.421 1.042c0 .41.161.777.422 1.039l.007.007c.257.264.616.426 1.019.426.404 0 .766-.162 1.027-.426l.003-.007c.261-.262.421-.629.421-1.039 0-.408-.159-.777-.421-1.042H9.71zM8.683 22.295c.404 0 .766-.167 1.027-.429l.003-.008c.261-.261.421-.631.421-1.036 0-.41-.159-.778-.421-1.044H9.71a1.42 1.42 0 0 0-1.027-.432 1.4 1.4 0 0 0-1.02.432h-.007c-.26.266-.422.634-.422 1.044 0 .406.161.775.422 1.036l.007.008c.258.262.617.429 1.02.429zm7.89-4.462c.359-.096.683-.33.882-.684l.027-.052a1.47 1.47 0 0 0 .114-1.067 1.454 1.454 0 0 0-.675-.896l-.021-.014a1.425 1.425 0 0 0-1.078-.132c-.36.091-.684.335-.881.686-.2.349-.241.75-.146 1.119.099.363.33.691.675.896h.002c.346.203.737.239 1.101.144zm-6.405-7.342a2.083 2.083 0 0 0-1.485-.627c-.58 0-1.103.242-1.482.627-.378.385-.612.916-.612 1.507s.233 1.124.612 1.514a2.08 2.08 0 0 0 2.967 0c.379-.39.612-.923.612-1.514s-.233-1.122-.612-1.507zm-.835-2.51c.843.141 1.6.552 2.178 1.144h.004c.092.093.182.196.265.299l1.446-.851a3.176 3.176 0 0 1-.047-1.808 3.149 3.149 0 0 1 1.456-1.926l.025-.016a3.062 3.062 0 0 1 2.345-.306c.77.21 1.465.721 1.898 1.482v.002c.431.757.518 1.626.313 2.408a3.145 3.145 0 0 1-1.456 1.928l-.198.118h-.02a3.095 3.095 0 0 1-2.154.201 3.127 3.127 0 0 1-1.514-.944l-1.444.848a4.162 4.162 0 0 1 0 2.879l1.444.846c.413-.47.939-.789 1.514-.944a3.041 3.041 0 0 1 2.371.319l.048.023v.002a3.17 3.17 0 0 1 1.408 1.906 3.215 3.215 0 0 1-.313 2.405l-.026.053-.003-.005a3.147 3.147 0 0 1-1.867 1.436 3.096 3.096 0 0 1-2.371-.318v-.006a3.156 3.156 0 0 1-1.456-1.927 3.175 3.175 0 0 1 .047-1.805l-1.446-.848a3.905 3.905 0 0 1-.265.294l-.004.005a3.938 3.938 0 0 1-2.178 1.138v1.699a3.09 3.09 0 0 1 1.56.862l.002.004c.565.572.914 1.368.914 2.243 0 .873-.35 1.664-.914 2.239l-.002.009a3.1 3.1 0 0 1-2.21.931 3.1 3.1 0 0 1-2.206-.93h-.002v-.009a3.186 3.186 0 0 1-.916-2.239c0-.875.35-1.672.916-2.243v-.004h.002a3.1 3.1 0 0 1 1.558-.862v-1.699a3.926 3.926 0 0 1-2.176-1.138l-.006-.005a4.098 4.098 0 0 1-1.173-2.874c0-1.122.452-2.136 1.173-2.872h.006a3.947 3.947 0 0 1 2.176-1.144V6.289a3.137 3.137 0 0 1-1.558-.864h-.002v-.004a3.192 3.192 0 0 1-.916-2.243c0-.871.35-1.669.916-2.243l.002-.002A3.084 3.084 0 0 1 8.683 0c.861 0 1.641.355 2.21.932v.002h.002c.565.574.914 1.372.914 2.243 0 .876-.35 1.667-.914 2.243l-.002.005a3.142 3.142 0 0 1-1.56.864v1.692zm8.121-1.129l-.012-.019a1.452 1.452 0 0 0-.87-.668 1.43 1.43 0 0 0-1.103.146h.002c-.347.2-.58.529-.677.896-.095.365-.054.768.146 1.119l.007.009c.2.347.519.579.874.673.357.103.755.059 1.098-.144l.019-.009a1.47 1.47 0 0 0 .657-.885 1.493 1.493 0 0 0-.141-1.118' },
  apacheairflow: { hex: '#017CEE', path: 'M17.195 16.822l4.002-4.102C23.55 10.308 23.934 5.154 24 .43a.396.396 0 0 0-.246-.373.392.392 0 0 0-.437.09l-6.495 6.658-4.102-4.003C10.309.45 5.154.066.43 0H.423a.397.397 0 0 0-.277.683l6.658 6.494-4.003 4.103C.45 13.692.065 18.846 0 23.57a.398.398 0 0 0 .683.282l6.494-6.657 3.934 3.837.17.165c2.41 2.353 7.565 2.737 12.288 2.803h.006a.397.397 0 0 0 .277-.683l-6.657-6.495zm-.409-9.476c.04.115.05.24.031.344-.17.96-1.593 2.538-4.304 3.87a.597.597 0 0 0-.08-.079c1.432-3.155 1.828-5.61 1.175-7.322l3.058 2.984.12.203zm-.131 9.44a.73.73 0 0 1-.347.031c-.96-.171-2.537-1.594-3.87-4.307a.656.656 0 0 0 .08-.078l-.001.001c3.155 1.432 5.61 1.83 7.324 1.174l-2.969 3.043M23.568.392a.05.05 0 0 1 .052-.011c.018.006.03.024.029.043-.065 4.655-.437 9.726-2.703 12.05-1.53 1.565-4.326 1.419-8.283-.377.006-.037.021-.07.02-.108 0-.044-.017-.082-.026-.123 2.83-1.39 4.315-3.037 4.506-4.115.057-.322-.009-.542-.102-.688l6.507-6.67V.392zM.393.43A.045.045 0 0 1 .382.38C.39.36.403.343.425.35c4.655.065 9.727.438 12.05 2.703l.002.002c1.56 1.527 1.415 4.323-.379 8.28-.033-.005-.062-.02-.097-.02h-.008c-.045.001-.084.019-.126.027-1.39-2.83-3.037-4.314-4.115-4.506-.323-.057-.542.01-.688.103L.393.43zm11.94 11.563a.331.331 0 0 1-.327.335H12a.332.332 0 0 1-.004-.661c.172.016.333.144.335.326h.002zm-5.12 4.661a.722.722 0 0 1-.03-.345c.17-.96 1.595-2.54 4.309-3.873.013.016.019.035.033.05.013.012.03.017.044.028-1.434 3.158-1.83 5.613-1.177 7.326l-3.041-2.967m-.006-9.659a.735.735 0 0 1 .345-.031c.961.17 2.54 1.594 3.871 4.306a.597.597 0 0 0-.079.08c-2.167-.983-4.007-1.484-5.498-1.484-.68 0-1.289.103-1.825.308L7.128 7.35M.43 23.607c-.018.018-.038.015-.052.01-.019-.007-.028-.021-.028-.043.065-4.654.437-9.725 2.703-12.049 1.527-1.565 4.325-1.419 8.286.378-.006.035-.02.067-.02.104 0 .043.018.083.026.124-2.831 1.391-4.317 3.04-4.51 4.117-.057.322.01.542.103.688L.43 23.607zm23.144.042c-4.655-.065-9.726-.437-12.05-2.703l-.005-.006c-1.56-1.526-1.412-4.322.383-8.279.033.005.064.02.098.02h.009c.043 0 .08-.018.122-.027 1.39 2.832 3.036 4.317 4.115 4.51.083.014.16.021.23.021a.776.776 0 0 0 .45-.133l6.68 6.516c.02.02.016.04.01.052a.042.042 0 0 1-.042.029z' },
  googlebigquery: { hex: '#669DF6', path: 'M5.676 10.595h2.052v5.244a5.892 5.892 0 0 1-2.052-2.088v-3.156zm18.179 10.836a.504.504 0 0 1 0 .708l-1.716 1.716a.504.504 0 0 1-.708 0l-4.248-4.248a.206.206 0 0 1-.007-.007c-.02-.02-.028-.045-.043-.066a10.736 10.736 0 0 1-6.334 2.065C4.835 21.599 0 16.764 0 10.799S4.835 0 10.8 0s10.799 4.835 10.799 10.8c0 2.369-.772 4.553-2.066 6.333.025.017.052.028.074.05l4.248 4.248zm-5.028-10.632a8.015 8.015 0 1 0-8.028 8.028h.024a8.016 8.016 0 0 0 8.004-8.028zm-4.86 4.98a6.002 6.002 0 0 0 2.04-2.184v-1.764h-2.04v3.948zm-4.5.948c.442.057.887.08 1.332.072.4.025.8.025 1.2 0V7.692H9.468v9.035z' },
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

  const badge    = isEN ? 'Strategy / Data & Analytics'  : 'กลยุทธ์ / ข้อมูลและ Analytics'
  const title    = isEN ? 'Make Decisions with'  : 'ตัดสินใจด้วย'
  const subtitle = isEN ? 'Data, Not Gut Feel'    : 'ข้อมูล ไม่ใช่สัญชาตญาณ'
  const heroDesc = isEN ? 'Reliable pipelines, warehouses, and analytics that turn operational data into decisions you can act on.'  : 'Pipeline, Data Warehouse และ Analytics ที่เชื่อถือได้ ช่วยเปลี่ยนข้อมูลในการทำงานให้เป็นการตัดสินใจที่ใช้ได้จริง'
  const whyTitle = isEN ? 'Why most companies are data-rich but insight-poor'    : 'ทำไมหลายบริษัทมีข้อมูลเยอะ แต่ได้ข้อมูลเชิงลึกน้อย'
  const whyDesc  = isEN ? 'Most organisations collect enormous amounts of data but lack the infrastructure to turn it into action. Spreadsheets break at scale, reports arrive too late.'  : 'หลายองค์กรเก็บข้อมูลไว้มหาศาล แต่ไม่มีระบบรองรับที่จะเอาไปใช้ได้จริง Spreadsheet เริ่มรับไม่ไหวเมื่อข้อมูลโตขึ้น และรายงานก็มาช้าเกินไป'
  const ctaTitle = isEN ? 'Ready to become data-driven?'    : 'พร้อมใช้ข้อมูลตัดสินใจหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a free Data Audit. We will show you exactly where your biggest opportunities lie.'   : 'เริ่มด้วยการตรวจข้อมูล (Data Audit) ฟรี เราจะบอกชัดๆ ว่าโอกาสที่ใหญ่ที่สุดของคุณอยู่ตรงไหน'
  const overviewText = isEN
    ? 'We build data infrastructure for modern products — event collection, batch and streaming pipelines, warehouse and lakehouse implementation, semantic modelling, and business intelligence. Our approach emphasises data quality, lineage, and governance from the start, working with platforms like Snowflake, Databricks, Kafka, Airflow, and dbt so the numbers your team reports from are numbers they can trust.'
    : 'เราสร้างระบบข้อมูลให้ผลิตภัณฑ์ยุคใหม่ ตั้งแต่การเก็บ Event, Pipeline ทั้งแบบ Batch และ Streaming, Data Warehouse และ Lakehouse, Semantic Modeling ไปจนถึง Business Intelligence เราให้ความสำคัญกับคุณภาพข้อมูล Lineage และ Governance ตั้งแต่ต้น ทำงานกับ Snowflake, Databricks, Kafka, Airflow และ dbt เพื่อให้ตัวเลขที่ทีมใช้ทำรายงานเชื่อถือได้จริง'

  const heroBullets = isEN ? [
      'Audit your current data sources and quality',
      'Design a modern Data Architecture that scales',
      'Build dashboards your team actually uses every day',
      'Set up automated reporting and KPI tracking',
      'Train your team to become data-driven decision makers',
    ] : [
      'ตรวจแหล่งข้อมูลและคุณภาพข้อมูลที่มีอยู่',
      'ออกแบบ Data Architecture ที่รองรับการเติบโต',
      'สร้าง Dashboard ที่ทีมใช้ได้จริงทุกวัน',
      'ตั้งรายงานอัตโนมัติและติดตาม KPI',
      'ฝึกทีมให้ใช้ข้อมูลตัดสินใจเป็นประจำ',
    ]
  const whyPoints   = isEN ? [
      'Real-time analytics reduces decision latency by 5x — advantage measured in hours, not weeks.',
      'Poor data quality costs businesses 15-25% of revenue. A solid data foundation pays for itself.',
      'Self-serve analytics empowers every department to answer their own questions instantly.',
      'Predictive models built on clean historical data forecast demand, churn, and revenue accurately.',
      'A single source of truth eliminates reporting conflicts and wasted reconciliation time.',
    ] : [
      'องค์กรที่ใช้ Real-time Analytics ตัดสินใจเร็วขึ้น 5 เท่า ได้เปรียบกันเป็นชั่วโมง ไม่ใช่เป็นสัปดาห์',
      'ข้อมูลคุณภาพต่ำทำให้ธุรกิจเสียรายได้ 15-25% ฐานข้อมูลที่ดีจึงคืนทุนได้เร็ว',
      'Self-serve Analytics ช่วยให้ทุกทีมหาคำตอบเองได้ทันที',
      'Predictive Model ที่สร้างจากข้อมูลย้อนหลัง พยากรณ์ความต้องการซื้อ ลูกค้าที่จะเลิกใช้ และรายได้ได้แม่นยำ',
      'แหล่งข้อมูลเดียวที่ทุกคนเชื่อถือ ทำให้ตัวเลขในรายงานไม่ขัดกันอีก',
    ]
  const outcomes    = isEN ? [
      {stat: '5x', label: 'Faster Decision Making', desc: 'With real-time dashboards'},
      {stat: '40%', label: 'Reduction in Reporting Time', desc: 'Through automation'},
      {stat: '25%', label: 'Revenue Impact', desc: 'From better data decisions'},
      {stat: '90%', label: 'Data Accuracy', desc: 'After data cleaning and governance'}
    ] : [
      {stat: '5x', label: 'ตัดสินใจเร็วขึ้น', desc: 'ด้วย Real-time Dashboard'},
      {stat: '40%', label: 'ลดเวลาทำรายงาน', desc: 'ด้วยระบบอัตโนมัติ'},
      {stat: '25%', label: 'ผลต่อรายได้', desc: 'จากการใช้ข้อมูลตัดสินใจ'},
      {stat: '90%', label: 'ความแม่นยำข้อมูล', desc: 'หลังทำความสะอาดข้อมูล'}
    ]
  const features    = isEN ? [
      {icon: 'ti-layout-dashboard', title: 'Analytics Dashboard', desc: 'Real-time dashboards every team can understand — Sales, Marketing, and Operations.'},
      {icon: 'ti-database', title: 'Data Pipeline', desc: 'Pipelines that collect, clean, and store data from every source systematically.'},
      {icon: 'ti-report-analytics', title: 'Business Intelligence', desc: 'BI solutions that let non-technical teams explore data and build their own reports.'},
      {icon: 'ti-trending-up', title: 'Predictive Analytics', desc: 'Statistical models that forecast sales, churn, and demand before they happen.'},
      {icon: 'ti-target', title: 'Customer Analytics', desc: 'Analyse customer behaviour, segment audiences, and personalise to increase LTV.'},
      {icon: 'ti-shield-check', title: 'Data Governance', desc: 'Policies for accurate, secure, PDPA-compliant data management.'}
    ] : [
      {icon: 'ti-layout-dashboard', title: 'Analytics Dashboard', desc: 'Dashboard Real-time ที่ทุกทีมเข้าใจง่าย ทั้งฝ่ายขาย การตลาด และปฏิบัติการ'},
      {icon: 'ti-database', title: 'Data Pipeline', desc: 'วางระบบรวมข้อมูลจากทุกแหล่ง ทำความสะอาด และเก็บใน Data Warehouse อย่างเป็นระเบียบ'},
      {icon: 'ti-report-analytics', title: 'Business Intelligence', desc: 'BI ที่ช่วยให้ทีมที่ไม่ใช่สายเทคนิคสำรวจข้อมูลและทำรายงานเองได้'},
      {icon: 'ti-trending-up', title: 'Predictive Analytics', desc: 'ใช้โมเดลทางสถิติพยากรณ์แนวโน้มล่วงหน้า เช่น ยอดขาย ลูกค้าที่จะเลิกใช้ หรือความต้องการซื้อ'},
      {icon: 'ti-target', title: 'Customer Analytics', desc: 'วิเคราะห์พฤติกรรมลูกค้า แบ่งกลุ่ม และปรับประสบการณ์ให้เหมาะกับแต่ละคน เพื่อเพิ่มมูลค่าตลอดอายุลูกค้า (LTV)'},
      {icon: 'ti-shield-check', title: 'Data Governance', desc: 'วางนโยบายจัดการข้อมูลให้ถูกต้อง ปลอดภัย และเป็นไปตาม PDPA'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Data Audit', desc: 'Assess existing data, sources, quality, and gaps that need addressing.'},
      {no: '02', title: 'Architecture Design', desc: 'Design a data architecture suited to your organisation size and needs.'},
      {no: '03', title: 'Build & Integrate', desc: 'Develop pipelines, dashboards, and reports that work in the real world.'},
      {no: '04', title: 'Train & Enable', desc: 'Train your team and build a sustainable data-driven culture.'}
    ] : [
      {no: '01', title: 'Data Audit', desc: 'ดูข้อมูลที่มี แหล่งที่มา คุณภาพ และช่องว่างที่ต้องแก้'},
      {no: '02', title: 'Architecture Design', desc: 'ออกแบบ Data Architecture ให้เหมาะกับขนาดและความต้องการขององค์กร'},
      {no: '03', title: 'Build & Integrate', desc: 'สร้าง Pipeline, Dashboard และรายงานที่ใช้ได้จริง'},
      {no: '04', title: 'Train & Enable', desc: 'อบรมทีมให้ใช้เครื่องมือข้อมูลเป็น และสร้างวัฒนธรรมใช้ข้อมูลในระยะยาว'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Real-time Dashboard for 50 branches', desc: 'Consolidated data from 8 systems into one dashboard for real-time performance visibility.', result: 'Report time reduced 85%'},
      {tag: 'Retail · Nationwide', title: 'Customer Segmentation & Personalisation', desc: '12 segments with personalised offers driving higher conversion.', result: 'Revenue up 32%'},
      {tag: 'Healthcare · Regional', title: 'Predictive Demand Planning', desc: '3-month forward forecast eliminating medicine stock-outs.', result: 'Stock-outs down 67%'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'Dashboard Real-time สำหรับ 50 สาขา', desc: 'รวมข้อมูลจาก 8 ระบบไว้ใน Dashboard เดียว ผู้บริหารดูผลงานแบบ Real-time ได้', result: 'ลดเวลาทำรายงาน 85%'},
      {tag: 'Retail · ทั่วประเทศ', title: 'Customer Segmentation & Personalization', desc: 'แบ่งลูกค้า 12 กลุ่ม ส่งข้อเสนอเฉพาะกลุ่มเพื่อเพิ่ม Conversion', result: 'รายได้เพิ่ม 32%'},
      {tag: 'Healthcare · ภูมิภาค', title: 'Predictive Demand Planning', desc: 'พยากรณ์ความต้องการยาล่วงหน้า 3 เดือน ลดปัญหายาขาดสต็อก', result: 'ยาขาดสต็อกลด 67%'}
    ]
  const faqs        = isEN ? [
      {q: 'What tools do you use?', a: 'We choose based on your stack and budget — Looker Studio, Power BI, or Metabase with BigQuery or Redshift.'},
      {q: 'Can you consolidate data from multiple sources?', a: 'Yes. We design ETL pipelines from CRM, ERP, web analytics, and internal databases.'},
      {q: 'Do we need a Data Engineer?', a: 'Not necessarily. We handle everything with full knowledge transfer included.'},
      {q: 'How does PDPA affect analytics?', a: 'We design PDPA-compliant systems from day one — anonymisation, consent, and access control.'}
    ] : [
      {q: 'ใช้เครื่องมืออะไรบ้าง?', a: 'เลือกตามระบบที่คุณมีและงบประมาณครับ เช่น Looker Studio, Power BI, Metabase ร่วมกับ BigQuery หรือ Redshift'},
      {q: 'ข้อมูลอยู่หลายที่รวมได้ไหม?', a: 'ได้ครับ เราออกแบบ ETL Pipeline ดึงข้อมูลจาก CRM, ERP, Web Analytics และฐานข้อมูลภายในมารวมกัน'},
      {q: 'ต้องมี Data Engineer ไหม?', a: 'ไม่จำเป็นครับ เราทำให้ได้ทั้งหมด พร้อมถ่ายทอดความรู้ให้ทีมคุณ'},
      {q: 'PDPA กระทบ Analytics ยังไง?', a: 'เราออกแบบให้เป็นไปตาม PDPA ตั้งแต่ต้น ทั้งการทำข้อมูลให้ไม่ระบุตัวตน (Anonymization) และการควบคุมสิทธิ์เข้าถึง'}
    ]
  const related     = isEN ? [
      {label: 'Growth Strategy', href: '/services/growth-strategy'},
      {label: 'AI Solutions', href: '/services/ai'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'Backend & API', href: '/services/backend-api'}
    ] : [
      {label: 'กลยุทธ์การเติบโต', href: '/services/growth-strategy'},
      {label: 'AI Solutions', href: '/services/ai'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'Backend & API', href: '/services/backend-api'}
    ]

  const pipelineLines = [
    { n: 1, jsx: <><span style={{ color: 'var(--lime)' }}>$</span>&nbsp;dbt run --select warehouse.orders</> },
    { n: 2, jsx: <>&nbsp;</> },
    { n: 3, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? '12 models built' : 'สร้างสำเร็จ 12 Models'}</> },
    { n: 4, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? '0 test failures' : 'ทดสอบผ่านทั้งหมด 0 Failure'}</> },
    { n: 5, jsx: <>&nbsp;</> },
    { n: 6, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{isEN ? 'refreshing dashboard' : 'รีเฟรช Dashboard'}</span></> },
    { n: 7, jsx: <>&nbsp;</> },
    { n: 8, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? 'Synced · 2.3M rows/day' : 'ซิงก์สำเร็จ · 2.3 ล้านแถว/วัน'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>pipeline.log</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)' }}>
          {pipelineLines.map((l) => (
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Pipeline Health' : 'สถานะ Pipeline'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 19V9M12 19V5M20 19v-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '80%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '55%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '99%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--lime)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? '99.9% pipeline uptime' : 'Uptime Pipeline 99.9%'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-server-2', title: 'Warehouses & Lakehouses', desc: 'Scalable analytical storage with clear models, ownership, and performance for BI and AI workloads.' },
    { icon: 'ti-report-analytics', title: 'Business Intelligence', desc: 'Dashboards and semantic layers that answer real operational questions, not vanity metrics.' },
    { icon: 'ti-bolt', title: 'Streaming & Real-Time', desc: 'Event pipelines and low-latency analytics for products that need answers in seconds, not overnight.' },
    { icon: 'ti-shield-check', title: 'Quality & Governance', desc: 'Contracts, lineage, access control, and quality checks so teams can trust the numbers.' },
  ] : [
    { icon: 'ti-server-2', title: 'Warehouses & Lakehouses', desc: 'ที่เก็บข้อมูลเพื่อการวิเคราะห์ที่รองรับการเติบโต มีโมเดลข้อมูลชัดเจน ระบุเจ้าของข้อมูล และเร็วพอสำหรับทั้ง BI และ AI' },
    { icon: 'ti-report-analytics', title: 'Business Intelligence', desc: 'Dashboard และ Semantic Layer ที่ตอบคำถามการทำงานจริง ไม่ใช่แค่ตัวเลขสวยๆ' },
    { icon: 'ti-bolt', title: 'Streaming & Real-Time', desc: 'Event Pipeline และ Analytics ที่ตอบสนองเร็ว สำหรับผลิตภัณฑ์ที่ต้องการคำตอบภายในไม่กี่วินาที ไม่ใช่ข้ามคืน' },
    { icon: 'ti-shield-check', title: 'Quality & Governance', desc: 'Data Contract, Lineage, การควบคุมสิทธิ์ และการตรวจคุณภาพ เพื่อให้ทุกทีมเชื่อถือตัวเลข' },
  ]

  const techStack = [
    { label: 'Snowflake', svg: 'snowflake' },
    { label: 'Databricks', svg: 'databricks' },
    { label: 'Apache Spark', svg: 'apachespark' },
    { label: 'Kafka', svg: 'apachekafka' },
    { label: 'Airflow', svg: 'apacheairflow' },
    { label: 'dbt', icon: 'ti-transform' },
    { label: 'BigQuery', svg: 'googlebigquery' },
    { label: 'Tableau', icon: 'ti-chart-dots' },
    { label: 'Power BI', icon: 'ti-chart-pie' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Assessment', desc: 'Sources, consumers, and data gaps' },
    { no: '02', title: 'Architecture', desc: 'Pipeline, warehouse, and access design' },
    { no: '03', title: 'Implementation', desc: 'Ingestion, transforms, and models' },
    { no: '04', title: 'Integration', desc: 'BI, apps, and AI consumers wired in' },
    { no: '05', title: 'Optimization', desc: 'Cost, performance, and quality tuning' },
    { no: '06', title: 'Support', desc: 'Ongoing ops and model evolution' },
  ] : [
    { no: '01', title: 'Assessment', desc: 'แหล่งข้อมูล ผู้ใช้ และช่องว่างที่ต้องแก้' },
    { no: '02', title: 'Architecture', desc: 'ออกแบบ Pipeline, Warehouse และสิทธิ์การเข้าถึง' },
    { no: '03', title: 'Implementation', desc: 'พัฒนาส่วนนำเข้าข้อมูล (Ingestion), Transform และ Model' },
    { no: '04', title: 'Integration', desc: 'เชื่อมต่อ BI, แอป และ AI เข้ากับข้อมูล' },
    { no: '05', title: 'Optimization', desc: 'ปรับค่าใช้จ่าย ความเร็ว และคุณภาพข้อมูล' },
    { no: '06', title: 'Support', desc: 'ดูแลระบบต่อเนื่องและพัฒนา Model เพิ่ม' },
  ]

  const darkFaqs = isEN ? [
    { q: 'What data services does Haliviq provide?', a: "Data pipelines, warehouses, real-time analytics, and business intelligence dashboards, plus the governance to keep them trustworthy. The goal is always the same: turn operational data into decisions you can act on, not just a prettier spreadsheet. A typical engagement starts with an assessment of your sources and the decisions you want to support, moves into architecture and implementation, and continues through integration, optimisation, and ongoing support after launch." },
    { q: 'Which data platforms do you work with?', a: 'Snowflake, Databricks, BigQuery, Apache Spark, Kafka, and Airflow for engineering, dbt for transformation and modelling, and Tableau or Power BI for analytics and reporting on top. We choose the specific combination based on your existing stack, team skillset, and budget rather than defaulting to one vendor across every project.' },
    { q: 'Our data is scattered across many systems. Can you consolidate it?', a: 'Yes — that is the most common starting point. We build pipelines that bring your operational systems (CRM, ERP, product databases, event tracking) into one warehouse with modelled, documented data, so every team reports from the same numbers instead of three slightly different versions of "revenue" depending on who pulled the report.' },
    { q: 'How do we start a data project with Haliviq?', a: "We start with a short audit of your current data landscape and the decisions you want it to support, then deliver a first working pipeline or dashboard quickly — usually within the first few weeks — rather than a six-month architecture document that ships nothing you can use. From there we expand coverage incrementally based on what actually proves valuable." },
    { q: 'How long does a data engineering project take?', a: 'A focused pipeline or dashboard for one business area typically ships in 4-8 weeks from kickoff. A full warehouse migration or multi-source consolidation with governance and BI on top usually runs 3-6 months, depending on how many source systems are involved and how much historical data needs backfilling. We always aim to ship something usable in the first sprint rather than making you wait until the end.' },
    { q: 'How much does a data project cost?', a: 'Cost tracks the number of source systems, data volume, and whether real-time streaming is required more than anything else. A scoped dashboard or single-pipeline project generally starts in the low six figures (THB); a full warehouse build with multiple integrations, governance, and BI across departments typically runs several times that. We quote a fixed price per phase after the initial assessment, and separately estimate ongoing platform costs (Snowflake/Databricks compute, storage) so there are no surprises.' },
    { q: 'How does PDPA and data privacy affect our analytics setup?', a: 'We design PDPA-compliant systems from day one rather than retrofitting compliance later — this includes data anonymisation or pseudonymisation where appropriate, documented consent tracking, role-based access control down to the column level where needed, and clear data retention policies. For regulated industries we can also scope data residency requirements into the architecture from the start.' },
    { q: 'Do we need to hire a Data Engineer to maintain this after launch?', a: "Not necessarily. We hand over full documentation, a walkthrough session, and — if you have a technical team — the training needed for them to maintain and extend the pipelines themselves. If you don't have a data team yet, we offer ongoing retainer support that covers monitoring, incident response, and incremental model changes, so nothing breaks silently while no one is watching it." },
  ] : [
    { q: 'Haliviq ให้บริการด้าน Data อะไรบ้าง?', a: 'Data Pipeline, Data Warehouse, Real-time Analytics และ Business Intelligence Dashboard พร้อม Governance ที่ทำให้ข้อมูลเชื่อถือได้ เป้าหมายของเราคือเปลี่ยนข้อมูลจากการทำงานจริงให้เป็นการตัดสินใจที่ใช้ได้ ไม่ใช่แค่ Spreadsheet ที่สวยขึ้น โปรเจกต์ทั่วไปเริ่มจากการดูแหล่งข้อมูลและการตัดสินใจที่คุณอยากให้ข้อมูลช่วย ต่อด้วยการออกแบบและพัฒนา แล้วเชื่อมต่อ ปรับปรุง และดูแลต่อเนื่องหลังเปิดใช้งาน' },
    { q: 'ใช้เครื่องมืออะไรบ้างสำหรับงานข้อมูล?', a: 'Snowflake, Databricks, BigQuery, Apache Spark, Kafka และ Airflow สำหรับงานวิศวกรรมข้อมูล, dbt สำหรับ Transformation และ Modeling และ Tableau หรือ Power BI สำหรับวิเคราะห์และทำรายงาน เราเลือกชุดที่เหมาะกับระบบที่คุณมี ทักษะของทีม และงบประมาณ ไม่ยึดติดกับผู้ให้บริการรายใดรายหนึ่ง' },
    { q: 'ข้อมูลกระจายอยู่หลายระบบ รวมให้ได้ไหม?', a: 'ได้ครับ และนี่คือจุดเริ่มต้นที่พบบ่อยที่สุด เราสร้าง Pipeline ที่ดึงระบบการทำงานของคุณ (CRM, ERP, ฐานข้อมูลของผลิตภัณฑ์, Event Tracking) มารวมไว้ใน Warehouse เดียว พร้อมโมเดลข้อมูลที่มีเอกสารอธิบายชัดเจน ทุกทีมจะได้ใช้ตัวเลขชุดเดียวกัน ไม่ต้องมี "Revenue" สามเวอร์ชันที่ต่างกันเล็กน้อย แล้วแต่ว่าใครเป็นคนดึงรายงาน' },
    { q: 'เริ่มโปรเจกต์ข้อมูลกับ Haliviq ได้อย่างไร?', a: 'เราเริ่มจากการตรวจข้อมูลที่คุณมีสั้นๆ และดูว่าคุณอยากใช้ข้อมูลตัดสินใจเรื่องอะไร จากนั้นส่งมอบ Pipeline หรือ Dashboard ชุดแรกที่ใช้ได้จริงอย่างรวดเร็ว ปกติภายในไม่กี่สัปดาห์แรก ไม่ใช่เอกสารออกแบบ 6 เดือนที่ยังใช้อะไรไม่ได้ หลังจากนั้นค่อยๆ ขยายขอบเขตตามสิ่งที่เห็นว่าได้ผลจริง' },
    { q: 'โปรเจกต์ Data Engineering ใช้เวลานานแค่ไหน?', a: 'Pipeline หรือ Dashboard ที่เน้นด้านธุรกิจด้านเดียว ปกติส่งมอบได้ใน 4-8 สัปดาห์หลังเริ่มงาน ส่วนการย้าย Warehouse เต็มรูปแบบ หรือการรวมหลายแหล่งข้อมูลพร้อม Governance และ BI มักใช้ 3-6 เดือน ขึ้นอยู่กับจำนวนระบบต้นทางและปริมาณข้อมูลย้อนหลังที่ต้องโหลดเข้ามา เราตั้งใจส่งของที่ใช้ได้จริงตั้งแต่ Sprint แรก ไม่ให้คุณรอจนจบโปรเจกต์' },
    { q: 'โปรเจกต์ข้อมูลมีค่าใช้จ่ายเท่าไหร่?', a: 'ค่าใช้จ่ายขึ้นอยู่กับจำนวนระบบต้นทาง ปริมาณข้อมูล และว่าต้องใช้ Real-time Streaming หรือไม่เป็นหลัก Dashboard หรือ Pipeline เดียวที่ขอบเขตชัดเจน ปกติเริ่มที่ประมาณหลักแสนต้นๆ (บาท) ส่วน Warehouse เต็มรูปแบบที่เชื่อมหลายระบบ พร้อม Governance และ BI ครบทุกแผนก มักสูงกว่านั้นหลายเท่า เราเสนอราคาคงที่แยกตามช่วงงานหลังประเมินเบื้องต้น และแยกประมาณค่า Platform ที่ต้องจ่ายต่อเนื่อง (Compute ของ Snowflake/Databricks, Storage) ให้ชัดเจน จะได้ไม่มีค่าใช้จ่ายที่ไม่คาดคิด' },
    { q: 'PDPA และความเป็นส่วนตัวของข้อมูลส่งผลต่อระบบ Analytics อย่างไร?', a: 'เราออกแบบให้เป็นไปตาม PDPA ตั้งแต่วันแรก ไม่รอมาแก้ทีหลัง ครอบคลุมการทำข้อมูลให้ไม่ระบุตัวตน (Anonymization หรือ Pseudonymization) ตามความเหมาะสม การบันทึกความยินยอมที่มีเอกสารรองรับ การคุมสิทธิ์ตามบทบาท ละเอียดถึงระดับคอลัมน์เมื่อจำเป็น และนโยบายเก็บรักษาข้อมูลที่ชัดเจน สำหรับอุตสาหกรรมที่มีข้อกำหนดเฉพาะ เรากำหนดเรื่องที่ตั้งของข้อมูล (Data Residency) ไว้ในการออกแบบตั้งแต่ต้นได้ด้วย' },
    { q: 'ต้องจ้าง Data Engineer มาดูแลต่อหลังเปิดใช้งานไหม?', a: 'ไม่จำเป็นครับ เราส่งมอบเอกสารครบ มีการสอนวิธีใช้งานให้ และถ้าคุณมีทีมเทคนิคอยู่แล้ว เราจะอบรมให้ดูแลและต่อยอด Pipeline เองได้ ถ้ายังไม่มีทีมข้อมูล เรามีบริการดูแลรายเดือนที่รวมการเฝ้าระวัง การแก้ปัญหาเมื่อระบบมีเหตุ และการปรับ Model ทีละนิด ระบบจะได้ไม่พังเงียบๆ โดยไม่มีใครรู้' },
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
            {isEN ? 'Tech Stack' : 'เทคโนโลยีที่ใช้'}
          </p>
          <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้งาน'}
          </h2>
          <p className="mb-12" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'Proven platforms and tools we apply where they fit — chosen for the data problem, not the trend cycle.'
              : 'Platform และเครื่องมือที่ผ่านการใช้งานจริง เลือกให้เหมาะกับโจทย์ข้อมูล ไม่ใช่ตามกระแส'}
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
              ? 'A clear path from problem to production — adjusted per data landscape, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจากปัญหาไปจนถึงใช้งานจริง ปรับตามข้อมูลของแต่ละองค์กร ไม่ใช่สูตรสำเร็จ'}
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
            {isEN ? 'Straight answers about how we build data systems.' : 'คำตอบตรงๆ เรื่องวิธีที่เราสร้างระบบข้อมูล'}
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
      heroCtaLabel={isEN ? 'Get Started' : 'เริ่มต้นเลย'}
      postHeroSlot={postHeroSlot}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple)" bg="var(--purple-bg)"
      whyImg="/images/services/data-analytics/why1.jpg"
      whyImg2="/images/services/data-analytics/why2.jpg"
      featureImg="/images/services/data-analytics/feature.jpg"
      processImg="/images/services/data-analytics/process.jpg"
    />
  )
}
