import Image from 'next/image';
import LogoImg from '../../../public/ies_syp_logo.png';
import Link from 'next/link';

export function Logo() {
    return (
        <div className="inline-flex items-center gap-10">
            <Link href="/Home" className="flex items-center">
                <Image
                    alt="IES Logo"
                    loading="lazy"
                    width={100}
                    height={100}
                    decoding="async"
                    className="h-16 sm:h-20"
                    style={{ color: 'transparent' }}
                    src={LogoImg}
                />
            </Link>
        </div>
    );
}
