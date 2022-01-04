import Image from "next/image" 
import { useMoralis } from 'react-moralis'

function Login() {
    const { authenticate }  = useMoralis()

    return (
        <div  className="bg-black relative text-white">
            
            <div className=" absolute flex flex-col  z-50 h-2/3 w-full items-center
            justify-center space-y-4">
            {/* Vigu logo*/}
            <Image  src="/viguLogo.png" height={200} width={200}/>

            {/* Login button*/}
        <button onClick={authenticate}
        
        className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">Este es el button de login</button>    

            </div>

            <div className="w-full h-screen ">
                <Image  src="https://links.papareact.com/55n" layout="fill" objectFit="cover" />
            </div>    
        </div>
    )
}

export default Login
