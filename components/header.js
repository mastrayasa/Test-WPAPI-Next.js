import Link from 'next/link'
export default  function Header(){
    return (<>
        <div className="bg-blue-100 w-full p-4">
            <h1 className="text-lg font-bold">Wordpress</h1>
            <p className="text-xs text-gray-500">
                Terintegrasi dengan API wordpress
            </p>
            <div>
            <ul className="main-menu">
                <li>
                    <Link  href="/"><a>Home</a></Link> 
                </li> 
                <li> 
                    <Link  href="#"><a>Profil</a></Link>
                </li> 
                <li> 
                    <Link  href="#"><a>Download</a></Link>
                </li> 
                <li> 
                    <Link  href="#"><a>Kontak</a></Link>
                </li> 
            </ul>
            </div>
        </div>
    </>)
}