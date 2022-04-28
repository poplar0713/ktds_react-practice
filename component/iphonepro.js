import Pro_write from "./pro_write"
import Image from "next/image"

export default function Iphonepro(props) {
    return (
        <div className='text-center bg-gradient-to-b from-white to-slate-50 grid grid-cols-1 border-b-8 border-white relative'>
            <a 
                href={props.href1} 
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
                    title={props.title}
                    title2={props.title2}
                    href1={props.href1}
                    href2={props.href2}
                    couple={props.couple}
                    ></Pro_write>
            </div>
            <div className="flex justify-self-center">
                <Image
                    src={props.img}
                />
            </div>
        </div>
    )
}