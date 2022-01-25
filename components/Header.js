import Link from "next/link"
import LoginForm from "./LoginForm"

export default function Header(props){
    function handleLogout(){
        props.logout()
        window.location.reload()
    }
    return(
        <header className="p-4 bg-gray-500 f text-gray-50">
            <div className="flex float-right">
                {props.user ? <div><p>{props.user.id}</p> <button className="px-4 py-1 mx-2 my-5 bg-gray-700 rounded-lg" onClick={handleLogout}>Log Out</button></div> :
                <LoginForm login={props.login}/>
                }
            </div>
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
