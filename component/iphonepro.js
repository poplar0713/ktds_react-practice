import homestyles from '../styles/Home.module.css'
import Pro_example from "./pro_example"
import Image from "next/image"

export default function Iphonepro() {
    return (
        <div className="">
            <Pro_example></Pro_example>

            {/* <img src="/iphone_big_one/iphone_13_pro_hero__gqclakbze4a6_medium_2x.png"></img> */}
            { // 여기 고쳐야함
            }
            <Image
                priority
                src='/iphone_big_one/iphone_13_pro_hero__gqclakbze4a6_medium_2x.png'
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
            />
        </div>
    )
}