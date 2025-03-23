<template>
  <nav class="px-7 md:px-[120px] h-[74px] content-center bg-white text-black shadow-md font-inter">
    <div class="container mx-auto flex justify-between items-center">
      <img
        src="/static/logokampusjabar.png"
        alt="logo"
      />
      <div class="hidden lg:block w-full max-w-sm min-w-[200px]">
        <div class="relative"> 
          <img
            src="/static/search.svg"
            alt="search"
            class="absolute w-6 h-6 top-2.5 left-2.5 text-slate-600"
          />
                    
          <input type="text" class="w-full pl-10 pr-10 py-3 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-[#0AA8C1] rounded-md transition duration-300 ease focus:outline-none focus:border-[#0AA8C1] hover:border-[#0AA8C1] shadow-sm focus:shadow" placeholder="Cari kampus/prodi impian Anda disini..." />
      
          <button class="absolute right-1 top-1 rounded bg-[#0AA8C1] py-2 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-[#0AA8C1] focus:shadow-none active:bg-[#0AA8C1] hover:bg-[#0AA8C1] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Search
          </button>
        </div>
      </div>
      <div class="hidden xl:block">
        <button class="rounded-md border border-[#0AA8C1] py-3 px-7 mr-2 text-center text-sm transition-all shadow-sm hover:shadow-lg text-[#0AA8C1] hover:text-white hover:bg-[#0AA8C1] hover:border-[#0AA8C1] focus:text-white focus:bg-[#0AA8C1] focus:border-[#0AA8C1] active:border-[#0AA8C1] active:text-white active:bg-[#0AA8C1] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">Daftar</button>
        <button class="rounded-md bg-[#0AA8C1] py-3 px-7 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-[#0AA8C1] focus:shadow-none active:bg-[#0AA8C1] hover:bg-[#0AA8C1] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">Login</button>
      </div>
      <div class="flex lg:hidden">
        <img
          src="/static/search.svg"
          alt="search"
          class="w-[18px] h-[18px] top-2.5 left-2.5 text-slate-600 mr-3"
        />
        <img
          src="/static/menu.svg"
          alt="search"
          class="w-[18px] h-[18px] top-2.5 left-2.5 text-slate-600"
        />
      </div>
    </div>
  </nav>

  <div class="p-4 font-inter">
    <NuxtPage />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Josefin+Sans:wght@100..700&family=Kodchasan:wght@200..700&family=Montserrat:wght@100..900&display=swap');

.font-inter {
  font-family: 'Inter', sans-serif;
}
</style>
