import { DUMMY_CHAT } from "../constant";

const Chat = () => {
  let chatState = false;

  function setChatState(callback: any) {
    chatState = callback(chatState);
  }

  function handleOpenChat() {
    setChatState((prev: any) => !prev);
    document.getElementById("openChat")?.classList.add("hidden");
    document.getElementById("closeChat")?.classList.remove("hidden");
    const chat = document.getElementById("chatContent");
    if (chat) {
      chat.classList.remove("translateClose");
      chat.classList.add("translateOpen");
    }
  }

  function handleCloseChat() {
    setChatState((prev: any) => !prev);
    document.getElementById("openChat")?.classList.remove("hidden");
    document.getElementById("closeChat")?.classList.add("hidden");
    const chat = document.getElementById("chatContent");
    if (chat) {
      chat.classList.remove("translateOpen");
      chat.classList.add("translateClose");
    }
  }

  return (
    <section className="fixed z-30 bottom-0 right-5">
      <div
        id="chatContent"
        className="h-[300px] w-[300px] translateClose bg-white border border-gray-200 rounded-lg rounded-b-none shadow p-4 gap-[20px]"
      >
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img src="/img/user.jpg" alt="Profile Photo" className="size-10 rounded-full" />
            <h2 className="text-bulma text-md-s">Pesan</h2>
          </div>
          <div id="openChat" onClick={handleOpenChat} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
          </div>
          <div id="closeChat" onClick={handleCloseChat} className="hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
        {DUMMY_CHAT.map((chat, i) => (
          <div key={i} className="mt-4 grid gap-2">
            <div className="flex flexStart gap-[10px] cursor-pointer">
              <img src={chat.userImg} alt="user" className="size-10 rounded-full" />
              <div className="grid items-center">
                <div className="flex gap-1 items-center justify-start">
                  <h1 className="text-bulma text-md-s">{chat.username}</h1>
                  <div className="bg-bulma h-1 w-1 rounded-full" />
                  <h6 className="text-trunks text-xs-r">{chat.timestamp} Menit Lalu</h6>
                </div>
                <p className="text-sm-r text-trunks line-clamp-1">{chat.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chat;
