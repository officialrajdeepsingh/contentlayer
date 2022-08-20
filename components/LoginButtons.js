
import { signIn } from "next-auth/react"


export default function LoginButtons({ providers }) {
    return Object.values(providers).map((provider) => <button key={provider.name} type="button" className="btn btn-block send-button" onClick={() => signIn(provider.id)} >
        Connect with  {provider.name}
    </button>

    )
}

