import Head from 'next/head'
import Link from 'next/link'
import Iphonepro from '../component/iphonepro'
import Iphone from "../public/iphone_big_one/iphone_13_pro_hero__gqclakbze4a6_medium_2x.png"
import IphoneSE from "../public/iphone_big_one/hero_iphonese_avail__eg8srhcnpo66_mediumtall_2x.jpeg"

export default function Home() {
  return (
    <><Head>
      <title>Apple site clone codging</title>
      <link rel="icon" href="https://www.apple.com/ac/globalfooter/7/ko_KR/assets/ac-footer/breadcrumbs/apple/icon_large.svg" />
      <style lang="postcss"></style>
    </Head>

    <section>
      <Iphonepro
        title='iPhone 13 Pro'
        title2='이게 바로 프로.'
        href1='https://www.apple.com/kr/iphone-13-pro/'
        href2='https://www.apple.com/kr/shop/buy-iphone/iphone-13-pro'
        couple={true}
        img={Iphone}></Iphonepro>
      <Iphonepro
        title='새로운 iPhone SE'
        title2='거침없는 파워. 실속 있는 선택.'
        href1='https://www.apple.com/kr/iphone-se/'
        href2='https://www.apple.com/kr/shop/buy-iphone/iphone-se'
        couple={true}
        img={IphoneSE}></Iphonepro>
    </section></>
  )
}