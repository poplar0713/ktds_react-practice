import Head from 'next/head'
import Link from 'next/link'
import Iphonepro from '../component/iphonepro'

export default function Home() {
  return (
    <><Head>
      <title>Apple site clone codging</title>
      <link rel="icon" href="https://www.apple.com/ac/globalfooter/7/ko_KR/assets/ac-footer/breadcrumbs/apple/icon_large.svg" />
      <style lang="postcss"></style>
    </Head>

    <section>
      <Iphonepro></Iphonepro>
      <Iphonepro></Iphonepro>
    </section></>
  )
}