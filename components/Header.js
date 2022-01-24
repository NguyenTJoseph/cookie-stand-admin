import Link from "next/link"
export default function Header(){
    return(
        <header className="p-4 bg-gray-500 f text-gray-50">
            <h1 className='p-4 text-4xl'>Cookie Stand Admin</h1>
            <Link href="/overview" >
                    <a className="px-4 py-2 m-0 ml-5 bg-gray-700 rounded-lg">Overview</a>
            </Link>
            <Link href="/">
                <a className="px-4 py-2 m-0 ml-5 bg-gray-700 rounded-lg">Admin Page</a>
            </Link>

        </header>
    )
}
