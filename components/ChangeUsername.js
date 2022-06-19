import React from 'react';
import { useMoralis } from 'react-moralis';
 
function ChangeUsername() {

    let { setUserData, isUserUpdating, userError, user} = useMoralis()

    const setUsername = ( ) =>  {
         const username= prompt(`Enter tu nuevo username
         (current: ${user.getUsername()})`);
            
         if(!username) return;

         setUserData({
             username,
         })
    }

  return (
  <div className="text-sm absolute top-5 right-5">
      <button disabled={isUserUpdating} 
      onClick={setUsername}
      className='hover::text-pink-300'>Change the Username</button>


  </div>);
}

export default ChangeUsername;
