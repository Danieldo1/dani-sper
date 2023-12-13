import { BubbleChat } from 'flowise-embed-react'

const Bubblechat = () => {
    
    return (
        <div className='group tooltip hover:animate-none' data-tip='Chat with Daniel'>
         <div className="w-4 h-4 fixed bottom-[55px] z-50 right-[20px] rounded-full flex justify-center items-center cursor-default shadow-sm dark:shadow-slate-50 light: shadow-black bg-[#ff3d3d] animate-[ping_3s_infinite]" >
              <p className=" text-white font-semibold text-[14px] "></p>
         </div>
        <BubbleChat
            chatflowid="6742cb5a-d562-4f7f-8ad6-24ba0edb0c2e"
            apiHost="https://flowiseai-railway-production-20c8.up.railway.app"
            className=''
            theme={{
                button: {
                    backgroundColor: "#A23BF6",
                    right: 20,
                    bottom: 20,
                    size: "medium",
                    iconColor: "white",
                    customIconSrc: "./chat.svg",
                    
                },
                chatWindow: {
                    title: "DanBot",
                    welcomeMessage: "Hi there I'm Daniil, I mean DanBot🤖... Let me answer a few question about Daniil!",
                    backgroundColor: "#ffffff",
                    height: 700,
                    width: 400,
                    fontSize: 16,
                    poweredByTextColor: "#ffffff",
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "./me.png",
                    },
                    userMessage: {
                        backgroundColor: "#A23BF6",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: "./user.svg",
                    },
                    textInput: {
                        placeholder: "Chat with Daniil",
                        backgroundColor: "#ffffff",
                        textColor: "#303235",
                        sendButtonColor: "#A23BF6",
                    }
                }
            }}
        />
       
      
        </div>
    );
};

export default Bubblechat