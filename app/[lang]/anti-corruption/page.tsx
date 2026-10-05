import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN ? 'Anti-Bribery & Anti-Corruption (ABAC) Policy | Haliviq' : 'นโยบายต่อต้านการให้สินบนและการทุจริต (ABAC) | Haliviq'
  const description = isEN ? 'Haliviq has zero tolerance for bribery and corruption in any form.' : 'Haliviq ไม่ยอมรับการให้สินบนและการทุจริตในทุกรูปแบบ'
  const url = `https://haliviq.com/${params.lang}/anti-corruption`
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url } }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const sections = isEN ? [
    { title: '1. Policy Statement', body: 'Haliviq Co., Ltd. has zero tolerance for bribery and corruption. We conduct business with integrity and win work on merit, never through improper payments or favours. This policy applies to all directors, employees, contractors, and anyone acting on our behalf.' },
    { title: '2. Prohibited Conduct', body: 'No one acting for Haliviq may offer, promise, give, request, or accept a bribe or improper advantage, directly or through a third party, to or from any person, including government officials, clients, suppliers, or partners, to obtain or retain business or any improper benefit. Facilitation payments are also prohibited.' },
    { title: '3. Gifts, Hospitality & Entertainment', body: 'Modest, infrequent, and transparent gifts or hospitality given in good faith for legitimate business purposes may be acceptable. Anything lavish, frequent, secret, or given while a decision is pending is not. Gifts to government officials require prior written approval from management. When in doubt, ask first.' },
    { title: '4. Political & Charitable Contributions', body: 'Haliviq does not make political contributions. Charitable donations and sponsorships must be transparent, approved by management, and never used as a disguise for bribery.' },
    { title: '5. Dealing with Government Clients', body: 'Many of our clients are public-sector bodies. We follow all procurement rules and competition laws, including Thailand\'s laws on offences relating to the submission of bids to government agencies, and we never seek improper influence over a procurement decision.' },
    { title: '6. Third Parties', body: 'We choose partners, subcontractors, and agents carefully and expect them to meet standards consistent with this policy. We do not use third parties to do what we may not do ourselves.' },
    { title: '7. Records & Controls', body: 'All payments, expenses, and transactions must be accurately recorded. Off-the-books accounts or misleading entries are strictly prohibited.' },
    { title: '8. Reporting Concerns', body: 'Anyone who suspects bribery or corruption must report it promptly to management or to info@haliviq.com. Reports in good faith are kept confidential, and no one will be penalised for refusing to pay a bribe or for raising a concern.' },
    { title: '9. Consequences', body: 'Breaches of this policy are treated as serious misconduct and may result in dismissal or termination of contract, and may be reported to the authorities. Bribery is a criminal offence that can lead to fines and imprisonment.' },
  ] : [
    { title: '1. แถลงการณ์นโยบาย', body: 'บริษัท ฮาลิวิค จำกัด ไม่ยอมรับการให้สินบนและการทุจริตทุกรูปแบบ เราดำเนินธุรกิจด้วยความซื่อสัตย์ และได้งานด้วยความสามารถ ไม่ใช่ด้วยการจ่ายเงินหรือให้ประโยชน์อันไม่ชอบ นโยบายนี้ใช้กับกรรมการ พนักงาน ผู้รับจ้าง และทุกคนที่ปฏิบัติงานในนามของเรา' },
    { title: '2. การกระทำที่ต้องห้าม', body: 'ผู้ที่ปฏิบัติงานในนาม Haliviq ต้องไม่เสนอ สัญญา ให้ เรียกร้อง หรือรับสินบนหรือประโยชน์อันไม่ชอบ ไม่ว่าโดยตรงหรือผ่านบุคคลที่สาม กับบุคคลใดๆ รวมถึงเจ้าหน้าที่รัฐ ลูกค้า ซัพพลายเออร์ หรือพาร์ทเนอร์ เพื่อให้ได้หรือรักษาธุรกิจหรือประโยชน์อันไม่ชอบ รวมถึงห้ามจ่ายเงินเพื่ออำนวยความสะดวก' },
    { title: '3. ของขวัญ การเลี้ยงรับรอง และความบันเทิง', body: 'ของขวัญหรือการเลี้ยงรับรองที่มีมูลค่าพอสมควร ไม่บ่อยครั้ง โปร่งใส และให้ด้วยเจตนาสุจริตเพื่อวัตถุประสงค์ทางธุรกิจที่ชอบธรรม อาจยอมรับได้ แต่สิ่งที่หรูหรา บ่อยครั้ง ปกปิด หรือให้ระหว่างรอการตัดสินใจ ไม่สามารถยอมรับได้ การให้ของขวัญแก่เจ้าหน้าที่รัฐต้องได้รับอนุมัติเป็นลายลักษณ์อักษรจากผู้บริหารล่วงหน้า หากไม่แน่ใจ ให้ถามก่อน' },
    { title: '4. เงินบริจาคทางการเมืองและการกุศล', body: 'Haliviq ไม่บริจาคเงินให้กิจกรรมทางการเมือง การบริจาคเพื่อการกุศลและการสนับสนุนต้องโปร่งใส ได้รับอนุมัติจากผู้บริหาร และต้องไม่ใช้เป็นข้ออ้างเพื่อปกปิดการให้สินบน' },
    { title: '5. การทำงานกับลูกค้าภาครัฐ', body: 'ลูกค้าของเราจำนวนมากเป็นหน่วยงานภาครัฐ เราปฏิบัติตามกฎระเบียบจัดซื้อจัดจ้างและกฎหมายการแข่งขันทั้งหมด รวมถึงกฎหมายว่าด้วยความผิดเกี่ยวกับการเสนอราคาต่อหน่วยงานของรัฐ และไม่แสวงหาอิทธิพลโดยมิชอบต่อการตัดสินใจจัดซื้อจัดจ้าง' },
    { title: '6. บุคคลที่สาม', body: 'เราเลือกพาร์ทเนอร์ ผู้รับเหมาช่วง และตัวแทนอย่างระมัดระวัง และคาดหวังให้ปฏิบัติตามมาตรฐานที่สอดคล้องกับนโยบายนี้ เราไม่ใช้บุคคลที่สามทำสิ่งที่เราไม่อาจทำเอง' },
    { title: '7. การบันทึกบัญชีและการควบคุม', body: 'การชำระเงิน ค่าใช้จ่าย และธุรกรรมทั้งหมดต้องบันทึกอย่างถูกต้อง ห้ามมีบัญชีนอกระบบหรือรายการที่ทำให้เข้าใจผิด' },
    { title: '8. การแจ้งข้อกังวล', body: 'ผู้ที่สงสัยว่ามีการให้สินบนหรือการทุจริตต้องแจ้งผู้บริหารหรือที่ info@haliviq.com โดยเร็ว การแจ้งโดยสุจริตจะเก็บเป็นความลับ และจะไม่มีผู้ใดถูกลงโทษจากการปฏิเสธการจ่ายสินบนหรือการแจ้งข้อกังวล' },
    { title: '9. ผลของการฝ่าฝืน', body: 'การฝ่าฝืนนโยบายนี้ถือเป็นการประพฤติผิดร้ายแรง อาจนำไปสู่การเลิกจ้างหรือยกเลิกสัญญา และอาจแจ้งต่อหน่วยงานที่เกี่ยวข้อง การให้สินบนเป็นความผิดทางอาญาที่มีโทษปรับและจำคุก' },
  ]
  return <LegalPage lang={lang} title={isEN ? 'Anti-Bribery & Anti-Corruption Policy' : 'นโยบายต่อต้านการให้สินบนและการทุจริต'} sections={sections} />
}
