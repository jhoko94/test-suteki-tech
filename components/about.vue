<template>
    <section class="px-4 mb-30 md:px-[105px]">
        <div class="xl:grid grid-cols-2 gap-x-4 mt-[72px] pt-[72px] text-[#3C3B52] relative">
            <div class="flex-1">
                <h4 class="text-[30px] font-[800]">Tentang Kami</h4>
                <p class="leading-[32px] mt-[29px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, suspendisse turpis sed convallis diam id. Vestibulum at eget pellentesque ullamcorper cras scelerisque arcu. Vel ornare bibendum porta faucibus. Eu semper eget rhoncus aenean eu eget purus. Euismod tincidunt posuere vulputate nec cras facilisis ac. Ultrices vulputate non ut adipiscing viverra.</p>
            </div>
            <div class="flex-1 grid grid-cols-2 gap-x-4 gap-y-4 content-center">
                <div v-for="item in itemsAbout" :key="item" class="rounded-md min-h-[99px] p-[25px] font-bold xl:flex justify-between items-center" :class="item === 'Kampus' && 'bg-[#FFF5EC]' || item === 'Jurusan' && 'bg-[#E7FDFD]' || item === 'Pendaftaran' && 'bg-[#FEF0F3]' || item === 'Uji Potensi' && 'bg-[#F2F5FF]'">
                    <div class="h-[48px] w-[48px] rounded-xl content-center mb-2 xl:mb-0" :class="item === 'Kampus' && 'bg-[#FC871B]' || item === 'Jurusan' && 'bg-[#0AA8C1]' || item === 'Pendaftaran' && 'bg-[#E83158]' || item === 'Uji Potensi' && 'bg-[#3A5AE3]'">
                        <img v-if="item === 'Kampus'" src="/static/about-kampus.svg" alt="icon-kampus" class="m-auto"/>
                        <img v-if="item === 'Uji Potensi'" src="/static/about-potensi.svg" alt="icon-kampus" class="m-auto"/>
                    </div>
                    <div class="flex flex-1">
                        <h5 class="flex-1 xl:px-4">{{ item }}</h5>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" :stroke="item === 'Kampus' && '#FC871B' || item === 'Jurusan' && '#0AA8C1' || item === 'Pendaftaran' && '#E83158' || item === 'Uji Potensi' && '#3A5AE3'" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="hidden xl:block absolute top-[-20px] right-[-50px] z-[-1]"> 
                <img src="/static/back-vector.svg" alt="back" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data: () => ({
        itemsAbout: ['Kampus', 'Jurusan', 'Pendaftaran', 'Uji Potensi']
    })
}
</script>