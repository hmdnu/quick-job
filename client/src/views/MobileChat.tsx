import { DUMMY_CHAT } from "../constant";

const MobileChat = () => {
  return (
    <section className="mt-[70px] p-4">
      <div>
        {DUMMY_CHAT.map((chat) => (
          <div className="mt-4 grid gap-2">
            <div className="flex flexStart gap-[10px] cursor-pointer">
              <img
                src={chat.userImg}
                alt="user"
                className="size-10 rounded-full"
              />
              <div className="grid items-center">
                <div className="flex gap-1 items-center justify-start">
                  <h1 className="text-bulma text-md-s">{chat.username}</h1>
                  <div className="bg-bulma h-1 w-1 rounded-full" />
                  <h6 className="text-trunks text-xs-r">
                    {chat.timestamp} Menit Lalu
                  </h6>
                </div>
                <p className="text-sm-r text-trunks line-clamp-1">
                  {chat.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileChat;
