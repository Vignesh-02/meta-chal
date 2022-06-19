import Head from 'next/head'
import Login from '../components/login'
import { useMoralis } from 'react-moralis'
import Header from '../components/Header';
import Messages  from '../components/Messages';

export default function Home() {
  
  const { isAuthenticated,logout } =useMoralis();


  if( !isAuthenticated ) return <Login />
  

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b
     from-black to-fuchsia-400 overflow-hidden">
      <Head>
        <title>Meta challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to the meta app</h1>
       
      <></>
        <div className='max-w-screen-2xl mx-auto'>
          {/* Header */}
          <Header />
          <Messages />
          {/* Messages  */}
      </div>
      
      
      
  
    </div>
  )
}
