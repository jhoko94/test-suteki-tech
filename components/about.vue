<template>
    <section class="px-4 md:px-[105px]">
        <div class="xl:flex mt-[72px] pt-[72px] text-[#3C3B52]">
            <div class="flex-1">
                <h4 class="text-[30px] font-[800]">Tentang Kami</h4>
                <p class="leading-[32px] mt-[29px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, suspendisse turpis sed convallis diam id. Vestibulum at eget pellentesque ullamcorper cras scelerisque arcu. Vel ornare bibendum porta faucibus. Eu semper eget rhoncus aenean eu eget purus. Euismod tincidunt posuere vulputate nec cras facilisis ac. Ultrices vulputate non ut adipiscing viverra.</p>
            </div>
            <div class="flex-1 grid grid-cols-2 gap-x-4 gap-y-4 content-center">
                <div v-for="item in itemsAbout" :key="item" class="rounded-md h-[99px] p-[25px] font-bold flex justify-between items-center" :class="item === 'Kampus' && 'bg-[#FFF5EC]' || item === 'Jurusan' && 'bg-[#E7FDFD]' || item === 'Pendaftaran' && 'bg-[#FEF0F3]' || item === 'Uji Potensi' && 'bg-[#F2F5FF]'">
                    <div class="h-[48px] w-[48px] rounded-xl" :class="item === 'Kampus' && 'bg-[#FC871B]' || item === 'Jurusan' && 'bg-[#0AA8C1]' || item === 'Pendaftaran' && 'bg-[#E83158]' || item === 'Uji Potensi' && 'bg-[#3A5AE3]'"></div>
                    {{ item }}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" :stroke="item === 'Kampus' && '#FC871B' || item === 'Jurusan' && '#0AA8C1' || item === 'Pendaftaran' && '#E83158' || item === 'Uji Potensi' && '#3A5AE3'" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </div>
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