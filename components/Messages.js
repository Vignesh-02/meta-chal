import { useRef } from 'react';
import { ByMoralis, useMoralis, useMoralisQuery} from 'react-moralis';
import SendMessage from './sendMessage';
import Message from './Message';

//Only show messages from the last 20 minutes

const MINS_DUATION = 20;

function Messages() {
    const { user } = useMoralis();
    const endOfMessagesRef = useRef(null);
    const { data, loading, errror } = useMoralisQuery(
        'Messages',
        (query) => query.ascending('createdAt').greaterThan(
            'createdAt', new Date(Date.now() - 1000 * 60 * MINS_DUATION)
        ),
        [],
        {
            live: true,
        }
        );
        console.log(data);

  return (
    <div className='pb-56'>
        <div className='my-10'>
            <ByMoralis variant="light" 
            style={{ marginLeft: "auto", marginRight: "auto" }} 
            />
        </div>

        <div className="space-y-10 p-5">

            {data.map(message => (
                <Message key={message.id} message={message} />
            ))}
        </div>

        <div className='flex justify-center'>
            <SendMessage endOfMessagesRef={endOfMessagesRef}/>
        </div>

        <div ref={endOfMessagesRef}
        className='text-center mt-5 '>
            <p>You're up to date {user.getUsername()} </p>
        </div>
    </div>
  );
}

export default Messages;
            /* each time you go through map there must be a new unique key, otherwise React will re-render only  items which have unique key */