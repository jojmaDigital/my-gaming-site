'use client'

export default function LiveChat() {
  return (
    <div className="border border-shap p-40p rounded-12">
      <div className="flex-y flex-wrap justify-between gap-24p pb-40p border-b border-shap">
        <h4 className="heading-4 text-w-neutral-1">Live chat room</h4>
        <a href="/chat" className="icon-32 text-w-neutral-4">
          <i className="ti ti-arrow-up-right"></i>
        </a>
      </div>
      <div className="grid grid-cols-1 gap-20p py-40p max-h-[540px] overflow-y-auto overflow-x-hidden scrollbar-sm">
        {/* Chat messages */}
        <div className="flex gap-2">
          <img className="avatar size-48p shrink-0" src="/assets/images/users/user1.png" alt="user" />
          <div>
            <div className="flex-y gap-2 mb-16p">
              <a href="/profile" className="text-m-medium text-w-neutral-1 link-1">David Malan</a>
              <span className="text-xs !text-w-neutral-4">2m</span>
            </div>
            <div className="inline-grid gap-y-1 *:inline-flex *:gap-2.5 *:items-center *:px-20p *:py-3 *:text-w-neutral-4 text-sm *:bg-glass-1 *:rounded-24 *:rounded-tl-none">
              <div>
                <p className="text-w-neutral-4">Hey team,</p>
                <span className="icon-24">
                  <i className="ti ti-mood-nerd text-w-neutral-4"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Add more messages */}
      </div>
      <form className="flex-y justify-between gap-3 px-20p py-3 bg-b-neutral-3 rounded-24">
        <div className="flex items-center gap-3">
          <button type="button" className="icon-24 text-w-neutral-4">
            <i className="ti ti-mood-smile"></i>
          </button>
          <input type="text" className="bg-transparent text-sm text-w-neutral-1 placeholder:text-w-neutral-1 w-full" placeholder="Send a message" />
        </div>
        <button type="submit" className="btn btn-c-md btn-primary rounded-12">
          <i className="ti ti-send icon-24"></i>
        </button>
      </form>
    </div>
  )
}
