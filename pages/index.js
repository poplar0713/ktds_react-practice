import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Iphonepro from '../component/iphonepro'

export default function Home() {
  return (
    <><Head>
      <title>Apple site clone codging</title>
      <link rel="icon" href="/icon/applecon.png" />
    </Head>
    {/* <section className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
      <Iphonepro></Iphonepro>
    </section></> */}
    <Iphonepro></Iphonepro></>
  )
}