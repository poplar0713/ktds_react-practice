import Pro_write from "./pro_write"
import Image from "next/image"
import Iphone from "../public/iphone_big_one/iphone_13_pro_hero__gqclakbze4a6_medium_2x.png"

export default function Iphonepro() {
    return (
        <div className='text-center bg-gradient-to-b from-white to-slate-50 grid grid-cols-1 border-b-8 border-white relative'>
            <a 
                href='https://www.apple.com/kr/iphone-13-pro/' 
                className="position: absolute "
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                }}
            >
            </a>
            <div className="flex justify-self-center">
                <Pro_write
                    title='iPhone 13 Pro'
                    title2='이게 바로 프로.'
                    href1='https://www.apple.com/kr/iphone-13-pro/'
                    href2=''
                    ></Pro_write>
            </div>
            <div className="flex justify-self-center">
                <Image
                    src={Iphone}
                />
            </div>
        </div>
    )
}