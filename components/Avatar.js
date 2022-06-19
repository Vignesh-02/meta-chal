import React from 'react';
import { useMoralis } from 'react-moralis';
import Image from "next/image"

function Avatar({username, logoutOnPress}) {

    const {user,logut} = useMoralis();

  return (
    
    <Image 
    className="rounded-full bg-black cursor-pointer
                hover:opacity-75"
        src={`https://avatars.dicebear.com/api/pixel-art/${
            username || user.get("username")}.svg`}
        onClick={() => logoutOnPress && logout()}
        layout="fill"  //determined by parent component
    />
  
        )
  
}

export default Avatar;