import TextInput from "../../../../../packages/ui/src/text-input";

export default function ChatRoom() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '100vw',
            backgroundColor: '#f5f5f5',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px'
        }
        }>
            <div>
                chat room
            </div>
            <div>
                <TextInput 
                    placeholder="Type a message" 
                    onChange={() => {}} 
                />
            </div>
        </div>
    )
} 