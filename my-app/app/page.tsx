import Image from "next/image";

export default function Home() {
  return (
  <main>
    <div className="min-h-full">
  <nav className="text-gray-00">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
           <div>
           <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 375 375" version="1.0">
    <path fill="#FF2773" d="M234.375 0c-36.07 0-65.625 29.555-65.625 65.625h37.5c0-16.43 11.695-28.125 28.125-28.125S262.5 49.195 262.5 65.625 250.805 93.75 234.375 93.75H0v37.5h234.375c36.07 0 65.625-29.555 65.625-65.625S270.445 0 234.375 0ZM0 168.75v37.5h300c22.316 0 37.5 15.184 37.5 37.5 0 22.316-15.184 37.5-37.5 37.5-22.316 0-37.5-15.184-37.5-37.5H225c0 41.434 33.566 75 75 75s75-33.566 75-75-33.566-75-75-75Zm0 75v37.5h121.875c16.43 0 28.125 11.695 28.125 28.125S138.305 337.5 121.875 337.5 93.75 325.805 93.75 309.375h-37.5c0 36.07 29.555 65.625 65.625 65.625s65.625-29.555 65.625-65.625-29.555-65.625-65.625-65.625Zm0 0"></path>
</svg>
            </div>
           </div>
            {/* <img className="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"> */}
          </div>
          <div className="hidden md:block">
            <div className="ml-10">TailwindowTemplate</div>
           
          </div>
        </div>
        
        <div>
        <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-900 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Template</a>
              <a href="#" className="text-gray-900 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Resoures</a>
              <a href="#" className="text-gray-900 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Blog</a>
              <a href="#" className="text-gray-900 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
            </div>
        </div>
        {/* 24から５２がアイコン */}
        <div className="-mr-2 flex md:hidden">
          <button type="button" className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
           
          
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
           
            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>


    <div className="md:hidden" id="mobile-menu">
      
      <div className="border-t border-gray-700 pb-3 pt-4">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            {/* <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
          </div>
          <div className="ml-3">
            <div className="text-base font-medium leading-none text-white">Tom Cook</div>
            <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
          </div>
          <button type="button" className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">View notifications</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </button>
        </div>
        {/* <div className="mt-3 space-y-1 px-2">
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your Profile</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign out</a>
        </div> */} 
        {/* レシポんしぶのところ */}
      </div>
    </div>
  </nav>


  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  
  <div className="box-border  mr-40 ml-40 h-500px rounded-lg w-300 p-40 bg-slate-300 ma ">
  </div>

  <div className= "mt-20  mr-40 ml-40 ">
    <h1 className="text-5xl">TailwindTemplates v2 is here</h1>
    <br />
    <p>TailwindTemplates V2 is finally here! Our focus for
       TailwindTemplates v2 is to bring open-source design systems
       to Tailwindcss. Each design system has a detailed guideline to provide consistency and coherence within a user interface.</p>
    <br />
    <h2 className="text-4xl">What to expect?</h2>
    <br />
    <p>
    Over the coming months, we will expand the design systems that are currently available at launch. In addition to that, we are planning to
     create several tailwind configurations to easily get started with the proper colors and variants that belong to each design system. 
    </p>
    <br />
    <h2 className="text-4xl">What to expect?</h2>
    <p>
    Over the coming months, we will expand the design systems that are currently available at launch. In addition to that, we are planning to
     create several tailwind configurations to easily get started with the proper colors and variants that belong to each design system. 
    </p>
     <br />
    <h2 className="text-4xl">What to expect?</h2>
    <p className="mb-40">
    Over the coming months, we will expand the design systems that are currently available at launch. In addition to that, we are planning to
     create several tailwind configurations to easily get started with the proper colors and variants that belong to each design system. 
    </p>
    

     </div>
  
  </div>

  </div>

  {/* -------------footer---------------- */}
  <div className="bg-blue-700">

  <div className="container mx-auto">
    <div className="flex flex-wrap justify-between">
      {/* <!-- 列 1 --> */}
      <div className="w-full sm:w-1/2 md:w-1/3">
        <h4 className="mb-4">列 1</h4>
        <p>ここにテキストを追加します。</p>
      </div>
      {/* <!-- 列 2 --> */}
      <div className="w-full sm:w-1/2 md:w-1/3 mt-8 sm:mt-0">
        <h4 className="mb-4">列 2</h4>
        <p>ここにテキストを追加します。</p>
      </div>
      {/* <!-- 列 3 --> */}
      <div className="w-full sm:w-1/2 md:w-1/3 mt-8 md:mt-0">
        <h4 className="mb-4">列 3</h4>
        <p>ここにテキストを追加します。</p>
      </div>
    </div>
  </div>

    <p>About</p>
    <br />
    <p>me</p>
    <br />
    <br /><br /><br /><br /><br />

  </div>

  


  

  </main>

  
    
  );
}




