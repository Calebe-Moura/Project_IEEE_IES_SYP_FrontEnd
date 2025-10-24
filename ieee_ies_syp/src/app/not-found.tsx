import Link from 'next/link';

export default function NotFound(){
    return (
        <div>
            <h1>Page 404 Not Found!</h1>
            <Link href="/">Back page home</Link>
        </div>
    )
}