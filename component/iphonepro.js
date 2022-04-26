import Pro_example from "./pro_example"
import Image from "next/image"
import Iphone from "../public/iphone_big_one/iphone_13_pro_hero__gqclakbze4a6_medium_2x.png"

export default function Iphonepro() {
    return (
        <div className='text-center bg-gradient-to-b from-white to-slate-50 grid grid-cols-1'>
            <div className="flex justify-self-center">
                <Pro_example></Pro_example>
            </div>
            <div className="flex justify-self-center">
                <Image
                    src={Iphone}
                />
            </div>
        </div>
    )
}