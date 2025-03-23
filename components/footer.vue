<template>
    <section class="text-center px-4 md:px-[105px]">
        <div
        class="hidden relative bg-white shadow-sm border border-slate-200 rounded-lg w-full bg-gradient-to-br from-[#126ABB] to-[#0AB6C1] pt-8 md:pt-21 pb-8 md:pb-13 px-6 md:px-17 text-[#FFFFFF] lg:flex gap-x-10 justify-between text-left">
            <div class="flex-2">
                <h5 class="text-lg font-bold mb-7">Tentang Kami</h5>
                <p class="text-md leading-[26px] font-light">Membantu siswa mencari dan membandingkan informasi perguruan tinggi di Jawa Barat dan Banten agar bisa meraih impian lewat kampus idaman dan jurusan yang sesuai dengan passion.</p>
            </div>
            <div class="flex-1">
                <h5 class="text-lg font-bold mb-7">Layanan</h5>
                <p class="text-md leading-[26px] font-light mb-6">Daftar Kampus</p>
                <p class="text-md leading-[26px] font-light mb-6">Daftar Prodi/jurusan</p>
                <p class="text-md leading-[26px] font-light mb-6">Artikel/Berita</p>
            </div>
            <div class="flex-1">
                <h5 class="text-lg font-bold mb-7">Kontak Kami</h5>
                <div class="mb-6 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                    <h5 class="text-sm font-light ml-2">email@company.com</h5>
                </div>
                <div class="mb-9 flex">
                    <img src="/static/phone.svg" alt="phone">
                    <h5 class="text-sm font-light ml-2">+62 32984343234</h5>
                </div>
                <button class="flex items-center rounded-md bg-white py-3 px-5 border border-transparent text-center text-sm text-[#333A4A] transition-all shadow-sm hover:shadow-lg focus:bg-white focus:shadow-none active:bg-white hover:bg-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                <img src="/static/playstore.svg" alt="playstore" class="mr-2">
                Download Aplikasi
                </button>
            </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
            <img
                src="/static/logokampusjabar.png"
                alt="logo"
                class="hidden lg:block mt-11 mb-15"
            />
            <h5 class="text-sm text-center lg:text-right text-[#848B9D]">Copyright © 2020 Kampus Jabar Banten</h5>
            <div class="m-auto mt-3">
                <button class="flex lg:hidden items-center rounded-md bg-[#0AA8C1] py-3 px-5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-[#0AA8C1] focus:shadow-none active:bg-[#0AA8C1] hover:bg-[#0AA8C1] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                <img src="/static/playstore.svg" alt="playstore" class="mr-2">
                Download Aplikasi
                </button>
            </div>
        </div>
    </section>
</template>