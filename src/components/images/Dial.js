import Image from 'next/image'

export default function Dial() {
    return (
        <div>
            <Image
                src="/dial.svg"
                width={400}
                height={400}
                alt='dial'
            />
        </div>
    )
}