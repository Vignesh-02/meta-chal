import Head from 'next/head'
import Login from '../components/login'
import { useMoralis } from 'react-moralis'

export default function Home() {
  
  const { isAuthenticated,logout } =useMoralis();


  if( !isAuthenticated ) return <Login />
  

  return (
    <div className="h-screen">
      <Head>
        <title>Meta challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to the meta app</h1>
      <button 
      onClick={logout}
      className='bg-orange-200 font-bold rounded-lg p-5 justify-center'>Logout</button>
    </div>
  )
}
