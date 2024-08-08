import Image from 'next/image'
import styles from "@/app/page.module.css"

export default function Logo() {
    return (
        <div className={styles.logo}>
            <Image
                src="/LOGO.svg"
                width={35}
                height={35}
                alt='Quálitas'
            />
        </div>
    )
}