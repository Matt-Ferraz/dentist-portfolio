export default function TopNavBar() {
  return (
    <nav className="bg-main-golden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/about-me" className="flex-shrink-0 text-white text-2xl font-bold">
            Dra. Hyara Ferraz
          </a>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white hover:bg-default-bg duration-500 hover:text-main-golden px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="/about-me" className="text-white hover:bg-default-bg duration-500 hover:text-main-golden px-3 py-2 rounded-md text-sm font-medium">
                Sobre mim
              </a>
              <a href="#" className="text-white hover:bg-default-bg duration-500 hover:text-main-golden px-3 py-2 rounded-md text-sm font-medium">
                Contate-me
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}