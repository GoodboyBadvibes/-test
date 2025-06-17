export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <p className="text-white text-2xl font-bold">Dashboard</p>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
            Welcome to the Dashboard. Here you can manage your settings and view your data.
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <img src="/hero-desktop.png" width={1000} height={760} className='hidden lg:block' alt="Dashboard desktop version"/>
          <img src="/hero-mobile.png" width={560} height={620} className='lg:hidden' alt="Dashboard mobile version"/>
        </div>
      </div>
    </main>
  );
}