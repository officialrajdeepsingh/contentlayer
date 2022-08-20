import Link from 'next/link'
import { useSession,signIn,signOut } from "next-auth/react"

export default function Header() {

    const { data: session, status } = useSession()

    return (<>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link href="/">
                    <a className='navbar-brand'>
                     Contentlayer + Nextjs
                    </a>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link href="/">
                            <a  className='nav-link'>
                                <li className="nav-item"> Home </li>
                            </a>
                        </Link>
                        <Link href="https://officialrajdeepsingh.dev">
                            <a target="_blank" className='nav-link'>
                                <li className="nav-item">About </li>
                            </a>
                        </Link>

                        <button className='btn loginIndicator' onClick={
                           ()=> session?signOut():signIn()
                        }> {
                            status !=="loading"? session? "LogOut ":"SignIn": "looding..."
                        } </button>

                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}