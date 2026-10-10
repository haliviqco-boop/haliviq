'use client'
import { useEffect, useMemo, useRef, useState } from 'react'

// [ISO region, dial code]
const COUNTRIES: [string, string][] = [
  ['TH','66'],['US','1'],['CA','1'],['GB','44'],['AU','61'],['NZ','64'],['SG','65'],['MY','60'],['ID','62'],['VN','84'],['PH','63'],['KH','855'],['LA','856'],['MM','95'],['BN','673'],
  ['JP','81'],['KR','82'],['CN','86'],['HK','852'],['TW','886'],['MO','853'],['IN','91'],['PK','92'],['BD','880'],['LK','94'],['NP','977'],['MV','960'],
  ['AE','971'],['SA','966'],['QA','974'],['KW','965'],['BH','973'],['OM','968'],['IL','972'],['TR','90'],['JO','962'],['EG','20'],
  ['DE','49'],['FR','33'],['IT','39'],['ES','34'],['PT','351'],['NL','31'],['BE','32'],['LU','352'],['CH','41'],['AT','43'],['IE','353'],['SE','46'],['NO','47'],['DK','45'],['FI','358'],['IS','354'],
  ['PL','48'],['CZ','420'],['SK','421'],['HU','36'],['RO','40'],['BG','359'],['GR','30'],['HR','385'],['SI','386'],['RS','381'],['UA','380'],['EE','372'],['LV','371'],['LT','370'],['RU','7'],['KZ','7'],
  ['BR','55'],['AR','54'],['CL','56'],['CO','57'],['PE','51'],['MX','52'],['UY','598'],['CR','506'],['PA','507'],
  ['ZA','27'],['NG','234'],['KE','254'],['GH','233'],['MA','212'],['TN','216'],['ET','251'],['TZ','255'],['UG','256'],['MU','230'],
]
// currency -> approximate units per 1 USD (used only to suggest budget bands)
const RATES: Record<string, number> = {
  THB: 33, USD: 1, EUR: 0.92, GBP: 0.79, JPY: 150, SGD: 1.35, AUD: 1.5, CAD: 1.37, NZD: 1.65, CHF: 0.88, CNY: 7.2, HKD: 7.8, TWD: 32, KRW: 1350,
  INR: 83, IDR: 15800, MYR: 4.7, VND: 25000, PHP: 57, AED: 3.67, SAR: 3.75, QAR: 3.64, ILS: 3.7, TRY: 32, SEK: 10.5, NOK: 10.6, DKK: 6.9,
  PLN: 4, CZK: 23, HUF: 360, BRL: 5, MXN: 17.5, ARS: 900, CLP: 940, COP: 4000, ZAR: 18, NGN: 1500, KES: 130, EGP: 48, RUB: 90, UAH: 40,
}
const THB_BANDS = [300000, 1000000, 3000000, 10000000]
const USD_BANDS = [10000, 30000, 100000, 300000]

// [value sent to the team (EN), EN label, TH label]
const INTERESTS: [string, string][] = [
  ['Websites', 'พัฒนาเว็บไซต์'],
  ['Mobile apps (iOS & Android)', 'แอปมือถือ iOS & Android'],
  ['E-commerce', 'อีคอมเมิร์ซ'],
  ['UX / UI design', 'ออกแบบ UX / UI'],
  ['Brand experience', 'ประสบการณ์แบรนด์'],
  ['AI products', 'ผลิตภัณฑ์ AI'],
  ['Automation', 'ระบบอัตโนมัติ'],
  ['ERP / CRM', 'ระบบ ERP / CRM'],
  ['Backend & API', 'Backend & API'],
  ['Cloud & DevOps', 'Cloud & DevOps'],
  ['Data & analytics', 'ข้อมูลและการวิเคราะห์'],
  ['Digital transformation', 'ปรับองค์กรสู่ดิจิทัล'],
  ['Product discovery & research', 'หาแนวทางผลิตภัณฑ์ และวิจัยผู้ใช้'],
  ['LINE Mini Apps', 'LINE Mini App'],
  ['Cybersecurity', 'ความปลอดภัยไซเบอร์'],
  ['Support & maintenance', 'บำรุงรักษาและซัพพอร์ต'],
  ['Not sure yet, need advice', 'ยังไม่แน่ใจ ขอคำปรึกษา'],
]

const flag = (iso: string) => String.fromCodePoint(...Array.from(iso).map((c) => 127397 + c.charCodeAt(0)))
const nice = (n: number) => {
  const p = Math.pow(10, Math.floor(Math.log10(n)) - 1)
  return Math.round(n / p) * p
}
const box = { background: 'rgb(var(--fg) / 0.05)', border: '1px solid rgb(var(--fg) / 0.12)', color: 'var(--ink)', fontWeight: 400 } as const

export default function ContactFields({ lang, part }: { lang: 'en' | 'th'; part: 'phone' | 'budget' | 'interest' }) {
  const isEN = lang === 'en'
  const cur0 = isEN ? 'USD' : 'THB'
  const home = isEN ? 'US' : 'TH'
  const [cur, setCur] = useState(isEN ? 'USD' : 'THB')
  const [picked, setPicked] = useState<string[]>([])
  const groupRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const form = groupRef.current?.closest('form')
    if (!form) return
    const onReset = () => setPicked([])
    form.addEventListener('reset', onReset)
    return () => form.removeEventListener('reset', onReset)
  }, [])
  // Intl.DisplayNames / localeCompare give different results on the server (Node ICU) and in
  // the browser, which broke hydration of this form. Render plain codes first, then the
  // localized names once mounted.
  const [ready, setReady] = useState(false)
  useEffect(() => setReady(true), [])
  const regionNames = useMemo(() => (ready ? new Intl.DisplayNames([lang], { type: 'region' }) : null), [lang, ready])
  const curNames = useMemo(() => (ready ? new Intl.DisplayNames([lang], { type: 'currency' }) : null), [lang, ready])
  const countries = useMemo(
    () => COUNTRIES.map(([iso, dial]) => ({ iso, dial, name: regionNames?.of(iso) || iso })).sort((a, b) => (a.iso === home ? -1 : b.iso === home ? 1 : ready ? a.name.localeCompare(b.name, lang) : a.iso.localeCompare(b.iso))),
    [regionNames, lang, home, ready],
  )
  const money = (n: number, c: string) => new Intl.NumberFormat('en', { style: 'currency', currency: c, maximumFractionDigits: 0, currencyDisplay: 'narrowSymbol' }).format(n)
  const bands = useMemo(() => {
    const th = cur === 'THB'
    const vals = th ? THB_BANDS : USD_BANDS.map((v) => nice(v * RATES[cur]))
    const f = (n: number) => money(n, cur)
    return [
      `${isEN ? 'Under' : 'ต่ำกว่า'} ${f(vals[0])}`,
      `${f(vals[0])} – ${f(vals[1])}`,
      `${f(vals[1])} – ${f(vals[2])}`,
      `${f(vals[2])} – ${f(vals[3])}`,
      `${f(vals[3])}+`,
    ]
  }, [cur, isEN])

  return (
    <>
      {part === 'phone' && <div>
        <label className="block text-xs mb-2" style={{ fontWeight: 400, color: 'rgb(var(--fg) / 0.5)' }} htmlFor="cf-phone">
          {isEN ? 'Phone Number' : 'เบอร์โทรศัพท์'} <span style={{ color: 'rgb(var(--fg) / 0.4)' }}>({isEN ? 'Optional' : 'ไม่บังคับ'})</span>
        </label>
        <div className="grid grid-cols-[auto_1fr] gap-3">
          <select name="phoneCountry" aria-label={isEN ? 'Country code' : 'รหัสประเทศ'} defaultValue={home} className="px-3 py-3.5 rounded-xl text-sm outline-none max-w-[150px]" style={box}>
            {countries.map((c) => (
              <option key={c.iso} value={c.iso} style={{ color: '#000' }}>{flag(c.iso)} +{c.dial} {c.name}</option>
            ))}
          </select>
          <input id="cf-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel-national" placeholder={isEN ? 'Phone number' : 'เบอร์โทรศัพท์'} className="w-full px-5 py-3.5 rounded-xl text-sm outline-none" style={box} />
        </div>
      </div>}

      {part === 'interest' && <div>
        <p className="block text-xs mb-3" style={{ fontWeight: 400, color: 'rgb(var(--fg) / 0.5)' }} id="cf-interest-label">
          {isEN ? 'What are you interested in?' : 'บริการที่คุณสนใจ'} <span style={{ color: 'rgb(var(--fg) / 0.4)' }}>({isEN ? 'Optional, pick any' : 'ไม่บังคับ เลือกได้หลายข้อ'})</span>
        </p>
        <div ref={groupRef} role="group" aria-labelledby="cf-interest-label" className="flex flex-wrap gap-2">
          {INTERESTS.map(([val, th]) => {
            const on = picked.includes(val)
            return (
              <label key={val} className="cursor-pointer select-none rounded-full px-4 py-2 text-xs transition-colors"
                style={{ background: on ? 'rgba(123,110,246,0.25)' : 'rgb(var(--fg) / 0.05)', border: `1px solid ${on ? 'var(--purple)' : 'rgb(var(--fg) / 0.12)'}`, color: on ? '#fff' : 'rgb(var(--fg) / 0.7)', fontWeight: 400 }}>
                <input type="checkbox" name="interest" value={val} checked={on} className="sr-only"
                  onChange={(e) => setPicked((p) => (e.target.checked ? [...p, val] : p.filter((x) => x !== val)))} />
                {isEN ? val : th}
              </label>
            )
          })}
        </div>
      </div>}

      {part === 'budget' && <div>
        <label className="block text-xs mb-2" style={{ fontWeight: 400, color: 'rgb(var(--fg) / 0.5)' }}>
          {isEN ? 'What is your budget?' : 'งบประมาณของคุณ'} <span style={{ color: 'rgb(var(--fg) / 0.4)' }}>({isEN ? 'Optional' : 'ไม่บังคับ'})</span>
        </label>
        <div className="grid grid-cols-[auto_1fr] gap-3">
          <select name="currency" aria-label={isEN ? 'Currency' : 'สกุลเงิน'} value={cur} onChange={(e) => setCur(e.target.value)} className="px-3 py-3.5 rounded-xl text-sm outline-none max-w-[150px]" style={box}>
            {[cur0, ...Object.keys(RATES).filter((k) => k !== cur0)].map((c) => (
              <option key={c} value={c} style={{ color: '#000' }}>{c} · {curNames?.of(c) || c}</option>
            ))}
          </select>
          <select key={cur} name="budget" defaultValue="" className="w-full px-5 py-3.5 rounded-xl text-sm outline-none" style={{ ...box, color: 'rgb(var(--fg) / 0.7)' }}>
            <option value="" style={{ color: '#000' }}>{isEN ? 'Select a range...' : 'เลือกช่วงงบประมาณ...'}</option>
            {bands.map((o) => <option key={o} value={o} style={{ color: '#000' }}>{o}</option>)}
          </select>
        </div>
        {cur !== 'THB' && (
          <p className="text-xs mt-2" style={{ color: 'rgb(var(--fg) / 0.4)' }}>
            {isEN ? 'Ranges are approximate conversions; just pick the closest.' : 'ช่วงงบเป็นค่าประมาณจากอัตราแลกเปลี่ยน เลือกช่วงที่ใกล้เคียงที่สุดได้เลย'}
          </p>
        )}
      </div>}
    </>
  )
}
