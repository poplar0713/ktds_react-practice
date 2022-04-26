export default function Pro_write() {
    return (
        <section>
            <h3 className="text-6xl font-medium">iPhone 13 Pro</h3>
            <h2 className="text-2xl">이게 바로 프로.</h2>
            <a onClick={(event) => {event.stopPropagation}}>구입하기 {'>'}</a>
        </section>
    )
}