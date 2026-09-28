import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  medusa: { hex: '#FFFFFF', path: 'M20.325 3.8958 14.8913.7692a5.7283 5.7283 0 0 0-5.7342 0L3.6983 3.8958C1.9455 4.9213.8437 6.8223.8437 8.8484v6.2783c0 2.051 1.1018 3.927 2.8546 4.9526l5.4337 3.1515a5.7283 5.7283 0 0 0 5.7343 0l5.4338-3.1515c1.7778-1.0256 2.8545-2.9015 2.8545-4.9526V8.8484c.0501-2.026-1.0517-3.927-2.8296-4.9526Zm-8.3133 13.6821c-3.08 0-5.584-2.5013-5.584-5.5778 0-3.0767 2.504-5.578 5.584-5.578 3.08 0 5.609 2.5013 5.609 5.578 0 3.0765-2.504 5.5778-5.609 5.5778z' },
  nodedotjs: { hex: '#5FA04E', path: 'M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z' },
  postgresql: { hex: '#4169E1', path: 'M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z' },
  nextdotjs: { hex: '#FFFFFF', path: 'M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z' },
  typescript: { hex: '#3178C6', path: 'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z' },
  stripe: { hex: '#635BFF', path: 'M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z' },
  redis: { hex: '#FF4438', path: 'M22.71 13.145c-1.66 2.092-3.452 4.483-7.038 4.483-3.203 0-4.397-2.825-4.48-5.12.701 1.484 2.073 2.685 4.214 2.63 4.117-.133 6.94-3.852 6.94-7.239 0-4.05-3.022-6.972-8.268-6.972-3.752 0-8.4 1.428-11.455 3.685C2.59 6.937 3.885 9.958 4.35 9.626c2.648-1.904 4.748-3.13 6.784-3.744C8.12 9.244.886 17.05 0 18.425c.1 1.261 1.66 4.648 2.424 4.648.232 0 .431-.133.664-.365a100.49 100.49 0 0 0 5.54-6.765c.222 3.104 1.748 6.898 6.014 6.898 3.819 0 7.604-2.756 9.33-8.965.2-.764-.73-1.361-1.261-.73zm-4.349-5.013c0 1.959-1.926 2.922-3.685 2.922-.941 0-1.664-.247-2.235-.568 1.051-1.592 2.092-3.225 3.21-4.973 1.972.334 2.71 1.43 2.71 2.619z' },
  react: { hex: '#61DAFB', path: 'M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z' },
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

  const badge    = isEN ? 'Commerce / E-Commerce'  : 'Commerce / E-Commerce'
  const title    = isEN ? 'Commerce Built'  : 'อีคอมเมิร์ซที่สร้าง'
  const subtitle = isEN ? 'For Your Brand, Not a Template'    : 'เพื่อแบรนด์คุณ ไม่ใช่ Template สำเร็จรูป'
  const heroDesc = isEN ? 'Headless, API-first commerce on Medusa.js — a storefront built for your brand, with payments, fulfillment, and integrations wired in from day one.'  : 'Commerce แบบ Headless API-First บน Medusa.js Storefront ที่สร้างเพื่อแบรนด์คุณโดยเฉพาะ พร้อม Payment, Fulfillment และการเชื่อมต่อระบบตั้งแต่วันแรก'
  const whyTitle = isEN ? 'Why off-the-shelf platforms hit a ceiling'    : 'ทำไม Platform สำเร็จรูปถึงมีเพดานจำกัด'
  const whyDesc  = isEN ? 'Template platforms are fast to launch but fight you the moment your business needs something they were not built for. Headless, API-first commerce removes that ceiling entirely.'  : 'Platform แบบ Template เปิดตัวได้เร็ว แต่จะเริ่มขัดขวางทันทีที่ธุรกิจต้องการสิ่งที่ Platform ไม่ได้ออกแบบมารองรับ Commerce แบบ Headless API-First ช่วยตัดข้อจำกัดนี้ออกไปทั้งหมด'
  const ctaTitle = isEN ? 'Ready to build commerce without the ceiling?'    : 'พร้อมสร้าง Commerce ที่ไม่มีเพดานจำกัดหรือยัง?'
  const ctaDesc  = isEN ? 'Start with an architecture review of your current setup, or a clean build from scratch.'   : 'เริ่มด้วยการตรวจสอบ Architecture ของระบบปัจจุบัน หรือสร้างใหม่ทั้งหมดตั้งแต่ต้น'
  const overviewText = isEN
    ? 'We build commerce platforms on a headless, API-first architecture using Medusa.js modules for carts, orders, pricing, and inventory, paired with a storefront custom-built for your brand rather than skinned onto a template. That means real design freedom on the frontend, and full control over payments, fulfillment, and every third-party integration your business actually needs — not just the ones a SaaS platform decided to support.'
    : 'เราสร้างแพลตฟอร์ม Commerce บน Architecture แบบ Headless API-First โดยใช้ Medusa.js Module สำหรับ Cart, Order, Pricing และ Inventory ควบคู่กับ Storefront ที่สร้างขึ้นเพื่อแบรนด์คุณโดยเฉพาะ ไม่ใช่แค่แปะ Skin บน Template หมายความว่าคุณมีอิสระในการออกแบบ Frontend เต็มที่ และควบคุม Payment, Fulfillment และการเชื่อมต่อ Third-party ทุกตัวที่ธุรกิจต้องการจริง ไม่ใช่แค่ตัวที่ SaaS Platform เลือกรองรับให้'

  const heroBullets = isEN ? [
      'Headless, API-first architecture with Medusa.js modules',
      'Storefront designed and built for your brand, not a theme',
      'Payments, fulfillment, and shipping integrations built in',
      'Custom integrations to ERP, CRM, and marketplaces',
      'Built to scale from first sale to high-volume traffic',
    ] : [
      'Architecture แบบ Headless API-First ด้วย Medusa.js Module',
      'Storefront ที่ออกแบบและสร้างเพื่อแบรนด์คุณโดยเฉพาะ ไม่ใช่ Theme สำเร็จรูป',
      'เชื่อมต่อ Payment, Fulfillment และ Shipping ครบวงจร',
      'เชื่อมต่อ Custom เข้ากับ ERP, CRM และ Marketplace',
      'ออกแบบให้ Scale ได้ตั้งแต่ยอดขายแรกจนถึง Traffic ปริมาณสูง',
    ]
  const whyPoints   = isEN ? [
      'Template platforms limit design to what the theme system allows.',
      'Headless architecture separates the storefront from commerce logic, unlocking any frontend experience.',
      'Open-source modules like Medusa.js avoid vendor lock-in and per-transaction platform fees.',
      'Custom integrations connect commerce directly to ERP, CRM, and fulfillment without brittle workarounds.',
      'A codebase you own scales and evolves with the business, not the platform vendor’s roadmap.',
    ] : [
      'Platform แบบ Template จำกัดการออกแบบไว้แค่ที่ระบบ Theme อนุญาต',
      'Architecture แบบ Headless แยก Storefront ออกจาก Commerce Logic ทำให้ออกแบบ Frontend ได้อิสระ',
      'Module Open-source อย่าง Medusa.js ช่วยเลี่ยง Vendor Lock-in และค่าธรรมเนียมต่อ Transaction',
      'การเชื่อมต่อ Custom ทำให้ Commerce เชื่อมตรงกับ ERP, CRM และ Fulfillment โดยไม่ต้องใช้ทางลัดที่เปราะบาง',
      'Codebase ที่คุณเป็นเจ้าของ จะเติบโตไปกับธุรกิจ ไม่ใช่ตาม Roadmap ของเจ้าของ Platform',
    ]
  const outcomes    = isEN ? [
      {stat: '100%', label: 'Design Freedom', desc: 'No theme system constraints'},
      {stat: '0%', label: 'Platform Transaction Fees', desc: 'With open-source commerce core'},
      {stat: '3x', label: 'Faster Page Loads', desc: 'Vs. typical SaaS storefronts'},
      {stat: '<8wk', label: 'Typical Launch', desc: 'From kickoff to go-live'}
    ] : [
      {stat: '100%', label: 'อิสระในการออกแบบ', desc: 'ไม่ติดข้อจำกัดระบบ Theme'},
      {stat: '0%', label: 'ค่าธรรมเนียม Platform', desc: 'ด้วย Commerce Core แบบ Open-source'},
      {stat: '3x', label: 'โหลดหน้าเว็บเร็วขึ้น', desc: 'เทียบกับ Storefront SaaS ทั่วไป'},
      {stat: '<8wk', label: 'ระยะเวลา Launch', desc: 'ตั้งแต่เริ่มจนถึง Go-live'}
    ]
  const features    = isEN ? [
      {icon: 'ti-api', title: 'Headless, API-First Architecture', desc: 'Commerce logic decoupled from the frontend, giving total freedom over the customer experience.'},
      {icon: 'ti-puzzle', title: 'Medusa.js Modules', desc: 'Carts, orders, pricing, promotions, and inventory built on a proven open-source commerce engine.'},
      {icon: 'ti-brush', title: 'Storefront Built for Your Brand', desc: 'A custom-designed storefront, not a re-skinned template, built to convert for your specific audience.'},
      {icon: 'ti-credit-card', title: 'Payments & Fulfillment', desc: 'Stripe and local payment methods, shipping providers, and fulfillment workflows wired in.'},
      {icon: 'ti-plug-connected', title: 'Custom Integrations', desc: 'Connections into ERP, CRM, marketplaces, and internal tools without brittle workarounds.'},
      {icon: 'ti-trending-up', title: 'Built to Scale', desc: 'Architecture that handles traffic spikes and catalog growth without a re-platform.'}
    ] : [
      {icon: 'ti-api', title: 'Headless, API-First Architecture', desc: 'แยก Commerce Logic ออกจาก Frontend ทำให้ออกแบบ Customer Experience ได้อย่างอิสระ'},
      {icon: 'ti-puzzle', title: 'Medusa.js Modules', desc: 'Cart, Order, Pricing, Promotion และ Inventory บน Commerce Engine Open-source ที่พิสูจน์แล้ว'},
      {icon: 'ti-brush', title: 'Storefront Built for Your Brand', desc: 'Storefront ออกแบบเฉพาะ ไม่ใช่ Template แปะ Skin สร้างมาเพื่อ Convert กลุ่มลูกค้าของคุณ'},
      {icon: 'ti-credit-card', title: 'Payments & Fulfillment', desc: 'เชื่อมต่อ Stripe และช่องทางชำระเงินในไทย, ผู้ให้บริการขนส่ง และ Workflow Fulfillment'},
      {icon: 'ti-plug-connected', title: 'Custom Integrations', desc: 'เชื่อมต่อ ERP, CRM, Marketplace และเครื่องมือภายใน โดยไม่ต้องใช้ทางลัดที่เปราะบาง'},
      {icon: 'ti-trending-up', title: 'Built to Scale', desc: 'Architecture ที่รองรับ Traffic พุ่งสูงและ Catalog ที่เติบโตโดยไม่ต้อง Re-platform'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Discovery', desc: 'Understand catalog, operations, and growth plans.'},
      {no: '02', title: 'Architecture', desc: 'Design the Medusa.js data model and integrations.'},
      {no: '03', title: 'Development', desc: 'Build the storefront and commerce backend.'},
      {no: '04', title: 'Integration', desc: 'Connect payments, fulfillment, and third-party tools.'},
      {no: '05', title: 'Launch', desc: 'Go-live support and performance validation.'},
      {no: '06', title: 'Support & Growth', desc: 'Ongoing feature development and optimization.'}
    ] : [
      {no: '01', title: 'Discovery', desc: 'ทำความเข้าใจ Catalog, Operation และแผนการเติบโต'},
      {no: '02', title: 'Architecture', desc: 'ออกแบบ Data Model ของ Medusa.js และการเชื่อมต่อ'},
      {no: '03', title: 'Development', desc: 'สร้าง Storefront และ Commerce Backend'},
      {no: '04', title: 'Integration', desc: 'เชื่อมต่อ Payment, Fulfillment และเครื่องมือ Third-party'},
      {no: '05', title: 'Launch', desc: 'สนับสนุนการ Go-live และตรวจสอบ Performance'},
      {no: '06', title: 'Support & Growth', desc: 'พัฒนาฟีเจอร์และปรับปรุงต่อเนื่อง'}
    ]
  const caseStudies = isEN ? [
      {tag: 'Fashion Retail · Bangkok', title: 'Headless Rebuild Cuts Load Time 3x', desc: 'Migrated from a legacy SaaS platform to a custom Medusa.js storefront.', result: '3x faster page loads'},
      {tag: 'Consumer Goods · Nationwide', title: 'Multi-Warehouse Fulfillment Automated', desc: 'Custom inventory and fulfillment integration across 12 warehouses.', result: 'Zero manual order routing'},
      {tag: 'Beauty · Bangkok', title: 'Launched in 6 Weeks, Zero Transaction Fees', desc: 'Full storefront and backend built on open-source Medusa.js.', result: '0% platform transaction fees'}
    ] : [
      {tag: 'Fashion Retail · กรุงเทพฯ', title: 'Rebuild แบบ Headless ลด Load Time 3 เท่า', desc: 'ย้ายจาก Platform SaaS เดิมมาสู่ Storefront Medusa.js แบบ Custom', result: 'โหลดหน้าเว็บเร็วขึ้น 3 เท่า'},
      {tag: 'Consumer Goods · ทั่วประเทศ', title: 'Automate Fulfillment หลายคลังสินค้า', desc: 'เชื่อมต่อ Inventory และ Fulfillment แบบ Custom ครอบคลุม 12 คลัง', result: 'ไม่ต้อง Route Order ด้วยมือ'},
      {tag: 'Beauty · กรุงเทพฯ', title: 'Launch ใน 6 สัปดาห์ ไม่มีค่าธรรมเนียม Transaction', desc: 'สร้าง Storefront และ Backend เต็มรูปแบบบน Medusa.js Open-source', result: 'ไม่มีค่าธรรมเนียม Platform'}
    ]
  const faqs        = isEN ? [
      {q: 'Why build on Medusa.js instead of Shopify or a similar SaaS platform?', a: 'Medusa.js gives full ownership of the codebase, no per-transaction platform fees, and no ceiling on customization — you are not limited to what a SaaS vendor decides to support.'},
      {q: 'Can you migrate our existing store?', a: 'Yes. We handle product, customer, and order data migration with minimal downtime and a clear cutover plan.'},
      {q: 'What payment methods can be supported?', a: 'Stripe, plus Thai payment methods like PromptPay and popular local payment gateways, integrated directly into checkout.'},
      {q: 'Do you handle fulfillment and shipping integration?', a: 'Yes, including multi-warehouse routing, shipping provider integrations, and real-time inventory sync.'}
    ] : [
      {q: 'ทำไมต้องสร้างบน Medusa.js แทน Shopify หรือ SaaS อื่น?', a: 'Medusa.js ให้ความเป็นเจ้าของ Codebase เต็มรูปแบบ ไม่มีค่าธรรมเนียมต่อ Transaction และไม่มีเพดานจำกัดการ Customize คุณไม่ต้องติดอยู่กับสิ่งที่ SaaS Vendor เลือกรองรับ'},
      {q: 'ย้ายร้านค้าเดิมมาได้ไหม?', a: 'ได้ครับ เราดูแลการย้ายข้อมูล Product, Customer และ Order โดย Downtime น้อยที่สุด พร้อมแผน Cutover ที่ชัดเจน'},
      {q: 'รองรับช่องทางชำระเงินแบบไหนบ้าง?', a: 'Stripe รวมถึงช่องทางชำระเงินในไทยอย่าง PromptPay และ Payment Gateway ท้องถิ่นยอดนิยม เชื่อมต่อตรงเข้า Checkout'},
      {q: 'ดูแลเรื่อง Fulfillment และ Shipping ไหม?', a: 'ดูแลครับ รวมถึงการจัดเส้นทางหลายคลังสินค้า, เชื่อมต่อผู้ให้บริการขนส่ง และ Sync Inventory แบบ Real-time'}
    ]
  const related     = isEN ? [
      {label: 'LINE Mini Apps', href: '/services/line-mini-apps'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Quality Assurance & Testing', href: '/services/quality-assurance-testing'},
      {label: 'Application Modernization', href: '/services/application-modernization'}
    ] : [
      {label: 'LINE Mini Apps', href: '/services/line-mini-apps'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Quality Assurance & Testing', href: '/services/quality-assurance-testing'},
      {label: 'Application Modernization', href: '/services/application-modernization'}
    ]

  const commerceLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>medusa build --storefront custom</span></> },
    { n: 2, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? 'Storefront built, 0 template dependencies' : 'สร้าง Storefront เสร็จ ไม่พึ่ง Template'}</> },
    { n: 3, jsx: <>&nbsp;</> },
    { n: 4, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>checkout --payment stripe,promptpay</span></> },
    { n: 5, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? 'Checkout conversion +18%' : 'อัตราปิดการขาย +18%'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>fulfillment --sync warehouses=12</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? 'Inventory synced in real time' : 'Sync Inventory แบบ Real-time'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>storefront.log</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)' }}>
          {commerceLines.map((l) => (
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Store Performance' : 'Store Performance'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 6h16l-1.5 9h-13Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="9" cy="19" r="1.4" fill="#fff" /><circle cx="17" cy="19" r="1.4" fill="#fff" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '90%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '65%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '95%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--lime)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? '3x faster page loads' : 'โหลดหน้าเว็บเร็วขึ้น 3 เท่า'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-api', title: 'Headless, API-First Architecture', desc: 'Commerce logic decoupled from the frontend, giving total freedom over the customer experience.' },
    { icon: 'ti-puzzle', title: 'Medusa.js Modules', desc: 'Carts, orders, pricing, promotions, and inventory built on a proven open-source commerce engine.' },
    { icon: 'ti-brush', title: 'Storefront Built for Your Brand', desc: 'A custom-designed storefront, not a re-skinned template, built to convert for your specific audience.' },
    { icon: 'ti-credit-card', title: 'Payments, Fulfillment & Integrations', desc: 'Stripe, local payment methods, shipping providers, and custom system integrations wired in.' },
  ] : [
    { icon: 'ti-api', title: 'Headless, API-First Architecture', desc: 'แยก Commerce Logic ออกจาก Frontend ทำให้ออกแบบ Customer Experience ได้อย่างอิสระ' },
    { icon: 'ti-puzzle', title: 'Medusa.js Modules', desc: 'Cart, Order, Pricing, Promotion และ Inventory บน Commerce Engine Open-source ที่พิสูจน์แล้ว' },
    { icon: 'ti-brush', title: 'Storefront Built for Your Brand', desc: 'Storefront ออกแบบเฉพาะ ไม่ใช่ Template แปะ Skin สร้างมาเพื่อ Convert กลุ่มลูกค้าของคุณ' },
    { icon: 'ti-credit-card', title: 'Payments, Fulfillment & Integrations', desc: 'เชื่อมต่อ Stripe, ช่องทางชำระเงินในไทย, ผู้ให้บริการขนส่ง และระบบ Custom ต่างๆ' },
  ]

  const techStack = [
    { label: 'Medusa.js', svg: 'medusa' },
    { label: 'Node.js', svg: 'nodedotjs' },
    { label: 'PostgreSQL', svg: 'postgresql' },
    { label: 'Next.js', svg: 'nextdotjs' },
    { label: 'TypeScript', svg: 'typescript' },
    { label: 'Stripe', svg: 'stripe' },
    { label: 'Redis', svg: 'redis' },
    { label: 'React', svg: 'react' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Discovery', desc: 'Catalog, operations, growth plans' },
    { no: '02', title: 'Architecture', desc: 'Data model and integration design' },
    { no: '03', title: 'Development', desc: 'Storefront and commerce backend' },
    { no: '04', title: 'Integration', desc: 'Payments, fulfillment, third-party tools' },
    { no: '05', title: 'Launch', desc: 'Go-live support and validation' },
    { no: '06', title: 'Support & Growth', desc: 'Ongoing development and optimization' },
  ] : [
    { no: '01', title: 'Discovery', desc: 'Catalog, Operation และแผนการเติบโต' },
    { no: '02', title: 'Architecture', desc: 'ออกแบบ Data Model และการเชื่อมต่อ' },
    { no: '03', title: 'Development', desc: 'Storefront และ Commerce Backend' },
    { no: '04', title: 'Integration', desc: 'Payment, Fulfillment และ Third-party' },
    { no: '05', title: 'Launch', desc: 'สนับสนุนการ Go-live และตรวจสอบ' },
    { no: '06', title: 'Support & Growth', desc: 'พัฒนาและปรับปรุงต่อเนื่อง' },
  ]

  const darkFaqs = isEN ? [
    { q: 'Why build on Medusa.js instead of Shopify or a similar SaaS platform?', a: 'Medusa.js gives full ownership of the codebase, no per-transaction platform fees, and no ceiling on customization. You are never limited to what a SaaS vendor decided to support — the frontend, checkout flow, and backend logic are all yours to shape.' },
    { q: 'Can you migrate our existing store to this architecture?', a: 'Yes. We handle product, customer, and order data migration with minimal downtime and a clear cutover plan, so the storefront switches over without disrupting live sales.' },
    { q: 'What payment methods can be supported?', a: 'Stripe for international cards, plus Thai payment methods like PromptPay and popular local payment gateways, all integrated directly into a custom checkout flow rather than a bolted-on plugin.' },
    { q: 'Do you handle fulfillment and shipping integration?', a: 'Yes, including multi-warehouse order routing, integrations with shipping providers, and real-time inventory synchronization across sales channels.' },
    { q: 'How long does a typical e-commerce build take?', a: 'A focused storefront on a single sales channel typically launches in 6-8 weeks. More complex builds with multi-warehouse fulfillment, ERP integration, or a full platform migration usually run 10-16 weeks.' },
    { q: 'How much does an e-commerce project cost?', a: 'Pricing depends on catalog complexity, number of integrations, and whether it is a migration or a new build. A focused storefront project typically starts in the mid five figures (THB); larger multi-integration builds are scoped after discovery.' },
    { q: 'Do we own the code and infrastructure after launch?', a: 'Yes, entirely. There is no platform lock-in — you own the Medusa.js instance, the storefront code, and all customer and order data, and can host it wherever you choose.' },
    { q: 'Can the platform handle high-traffic events like flash sales?', a: 'Yes. The architecture is built to handle traffic spikes and catalog growth without a re-platform, and we load-test flows like checkout ahead of major sales events.' },
  ] : [
    { q: 'ทำไมต้องสร้างบน Medusa.js แทน Shopify หรือ SaaS อื่น?', a: 'Medusa.js ให้ความเป็นเจ้าของ Codebase เต็มรูปแบบ ไม่มีค่าธรรมเนียมต่อ Transaction และไม่มีเพดานจำกัดการ Customize คุณไม่ต้องติดอยู่กับสิ่งที่ SaaS Vendor เลือกรองรับ ทั้ง Frontend, Checkout Flow และ Backend Logic เป็นของคุณทั้งหมด' },
    { q: 'ย้ายร้านค้าเดิมมาสู่ Architecture นี้ได้ไหม?', a: 'ได้ครับ เราดูแลการย้ายข้อมูล Product, Customer และ Order โดย Downtime น้อยที่สุด พร้อมแผน Cutover ที่ชัดเจน ทำให้ Storefront เปลี่ยนได้โดยไม่กระทบยอดขายที่กำลังดำเนินอยู่' },
    { q: 'รองรับช่องทางชำระเงินแบบไหนบ้าง?', a: 'Stripe สำหรับบัตรต่างประเทศ รวมถึงช่องทางชำระเงินในไทยอย่าง PromptPay และ Payment Gateway ท้องถิ่นยอดนิยม เชื่อมต่อตรงเข้า Checkout Flow แบบ Custom ไม่ใช่ Plugin แปะเพิ่ม' },
    { q: 'ดูแลเรื่อง Fulfillment และ Shipping ไหม?', a: 'ดูแลครับ รวมถึงการจัดเส้นทาง Order หลายคลังสินค้า, เชื่อมต่อผู้ให้บริการขนส่ง และ Sync Inventory แบบ Real-time ข้ามทุกช่องทางขาย' },
    { q: 'โปรเจกต์ E-Commerce ทั่วไปใช้เวลานานแค่ไหน?', a: 'Storefront แบบเจาะจงหนึ่งช่องทางขาย มักเปิดตัวได้ใน 6-8 สัปดาห์ ส่วนโปรเจกต์ที่ซับซ้อนกว่า เช่น Fulfillment หลายคลัง, เชื่อมต่อ ERP หรือย้าย Platform เต็มรูปแบบ มักใช้เวลา 10-16 สัปดาห์' },
    { q: 'โปรเจกต์ E-Commerce มีค่าใช้จ่ายเท่าไหร่?', a: 'ราคาขึ้นอยู่กับความซับซ้อนของ Catalog, จำนวนการเชื่อมต่อ และเป็นการย้ายระบบหรือสร้างใหม่ Storefront แบบเจาะจงมักเริ่มต้นที่หลักแสนกลางๆ (บาท) ส่วนโปรเจกต์ที่เชื่อมต่อหลายระบบจะเสนอราคาหลัง Discovery' },
    { q: 'เราเป็นเจ้าของ Code และ Infrastructure หลัง Launch ไหม?', a: 'ใช่ครับ เป็นเจ้าของเต็มรูปแบบ ไม่มี Platform Lock-in คุณเป็นเจ้าของ Medusa.js Instance, Code Storefront และข้อมูล Customer/Order ทั้งหมด และ Host ที่ไหนก็ได้ตามต้องการ' },
    { q: 'Platform รองรับ Traffic สูงๆ เช่นช่วง Flash Sale ได้ไหม?', a: 'ได้ครับ Architecture ออกแบบมารองรับ Traffic พุ่งสูงและ Catalog ที่เติบโตโดยไม่ต้อง Re-platform และเรา Load-test Flow อย่าง Checkout ก่อนงาน Sale สำคัญเสมอ' },
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
              ? 'A modern, open-source commerce stack chosen for performance and freedom, not vendor lock-in.'
              : 'Commerce Stack แบบ Open-source สมัยใหม่ เลือกใช้เพื่อ Performance และอิสระ ไม่ใช่ Vendor Lock-in'}
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
              ? 'A clear path from discovery to a production storefront — adjusted per business, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจาก Discovery สู่ Storefront ระดับ Production ปรับตามแต่ละธุรกิจ ไม่ใช่สูตรสำเร็จตายตัว'}
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
            {isEN ? 'Straight answers about how we build commerce platforms.' : 'คำตอบตรงไปตรงมาเกี่ยวกับวิธีที่เราสร้าง Commerce Platform'}
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
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple)" bg="var(--purple-bg)"
      whyImg="/images/services/ecommerce/why1.jpg"
      whyImg2="/images/services/ecommerce/why2.jpg"
      featureImg="/images/services/ecommerce/feature.jpg"
      processImg="/images/services/ecommerce/process.jpg"
    />
  )
}
