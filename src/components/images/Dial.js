import Image from 'next/image'

export default function Dial() {
    return (
        <div>
            <Image
                src="/dial.svg"
                width={500}
                height={500}
                alt='dial'
            />
        </div>
    )
}