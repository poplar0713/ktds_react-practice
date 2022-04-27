import Link from 'next/link'

export default function Pro_write(props) {
    return (
        <div className='relative'>
            <h3 className="text-6xl font-medium tracking-tight">{props.title}</h3>
            <h2 className="leading-loose text-2xl">{props.title2}</h2>
            <div className='relative mb-6'>
                <a href='https://www.apple.com/kr/iphone-13-pro/'
                    className='
                    relative
                    top-0
                    left-0
                    z-10
                    mr-10
                    text-xl
                    text-blue-800
                    no-underline hover:underline'
                    >더 알아보기 {'>'}</a>
                    <a href='https://www.apple.com/kr/shop/buy-iphone/iphone-13-pro'
                    className='
                    relative
                    top-0
                    right-0
                    z-10
                    text-xl
                    text-blue-800
                    no-underline hover:underline'
                    >구입하기 {'>'}</a>
            </div>
        </div>
    )
}