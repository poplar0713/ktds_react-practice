import Link from 'next/link'

export default function Pro_write() {
    return (
        <div>
            <h3 className="text-6xl font-medium">iPhone 13 Pro</h3>
            <h2 className="text-2xl">이게 바로 프로.</h2>
            <div
                style={{
                    position: 'relative',
                }}
            >
                <a href='https://www.apple.com/kr/shop/buy-iphone/iphone-13-pro' style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 4,
                }}>구입하기 {'>'}</a>
            </div>
        </div>
    )
}