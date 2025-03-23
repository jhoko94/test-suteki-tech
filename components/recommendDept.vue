<template>
    <section class="text-center px-4 mb-10 lg:mb-31 md:px-[105px]">
        <h4 class="text-3xl font-bold">Rekomendasi Jurusan/Prodi</h4>
        <p class="text-sm text-[#848B9D] mt-3 font-light mb-9">Memberikan sistim pelayanan untuk para calon mahasiswa Jawa Barat dan Banten</p>
        <div class="grid xl:grid-cols-4 grid-cols-2 justify-items-center gap-y-6 gap-x-6 relative">
            <div v-for="item in 8" :key="item" class="bg-[#F2F7FF] min-h-[100px] rounded-xl p-6 text-left">
                <div class="flex items-center">
                    <div class="h-[10px] w-[10px] bg-[#1256BB] rounded-xs mr-1"></div>
                    <h5 class="text-[#3C3B52] text-xs">Seni, Desain & Musik</h5>
                </div>
                <h4 class="text-md font-bold mt-4">Desain Komunikasi Visual</h4>
            </div>
        </div>
        <div class="grid lg:grid-cols-3 gap-x-6 items-center mt-7">
            <div class="hidden lg:block border border-[#E6E9ED] h-0 w-full"></div>
            <button class="rounded-md border border-[#0AA8C1] py-4 px-16 lg:mt-12 text-center text-sm transition-all shadow-sm hover:shadow-lg text-[#0AA8C1] hover:text-white hover:bg-[#0AA8C1] hover:border-[#0AA8C1] focus:text-white focus:bg-[#0AA8C1] focus:border-[#0AA8C1] active:border-[#0AA8C1] active:text-white active:bg-[#0AA8C1] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none relative top-[-20px]" type="button">Jurusan Lainnya (+32)</button>
            <div class="hidden lg:block border border-[#E6E9ED] h-0 w-full"></div>
        </div>
        <div class="lg:hidden border border-[#E6E9ED] h-0 w-full"></div>
    </section>
</template>