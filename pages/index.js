import Head from 'next/head'
import Link from 'next/link'
import Iphonepro from '../component/iphonepro'

export default function Home() {
  return (
    <><Head>
      <title>Apple site clone codging</title>
      <link rel="icon" href="/icon/applecon.png" />
      <style lang="postcss"></style>
    </Head>

    <section>
      <a href='https://www.apple.com/kr/iphone-13-pro/'>
        <Iphonepro></Iphonepro>
      </a>
    </section></>
  )
}