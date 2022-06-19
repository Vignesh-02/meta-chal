import { useState } from "react";
import { useMoralis } from "react-moralis";

//you can also useRef to track a value
function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message,setMessage] = useState("")

  const sendMessage = (e) => {
    e.preventDefault();

    if(!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    setMessage("")

    messages.save({
      message: message,
      username: user.getUsername(),
      ethAddress: user.get("ethAddress")
    }).then((message) => {
      // the object was saved succesfully
    },(error)=>{
        //the save failed
        //error is a Moralis.Error with an error code and message.
        console.log(error.message);
    });
    endOfMessagesRef.current.scrollIntoView({behavior: 'smooth'})

    setMessage("");
  };

  return (
    <form className="flex fixed bottom-10 bg-black opacity-80
     w-11/12 px-3 py-3 max-w-3xl  shadow-xl rounded-full border-4 border-blue-400">
      <input className="flex-grow outline-none  bg-transparent text-white 
       placeholder-gray-500 pr-3"
       type="text"
       onChange={e => setMessage(e.target.value)}
       placeholder={`Enter a Message ${user.getUsername()}....`}
       />
       <button 
       type="submit"
       onClick={sendMessage}
       >
         Send
       </button>
    </form>

  );
}

export default SendMessage;
