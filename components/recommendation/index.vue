<template>
    <section class="text-center px-4 mb-31 md:px-[105px]">
        <h3 class="text-3xl font-bold mb-3">Rekomendasi Kampus</h3>
        <p class="text-sm text-[#848B9D] mb-9">Memberikan sistim pelayanan untuk para calon mahasiswa Jawa Barat dan Banten</p>
        <div class="grid xl:grid-cols-4 grid-cols-2 justify-items-center gap-y-6 gap-x-6 relative">
            <div v-for="item in univDetails" :key="item.id" class="min-h-[397px] rounded-xl">
                <div class="rounded-xl text-left relative">
                    <img class="rounded-xl" :src="`https://apicampusdir.civitas.id${item.thumbnail}`" alt="contoh-foto"/>
                    <div class="absolute top-[10px] pl-3">
                        <div class="rounded-full bg-[#3A5AE3] py-1 pl-2.5 pr-1 border border-transparent text-xs text-white transition-all shadow-sm flex items-center justify-between mb-2">Kampus Partner
                            <div class="bg-[#5471ED] rounded-full h-[22px] w-[22px] content-center ml-2">
                                <img src="/static/check.svg" alt="check" class="m-auto" />
                            </div>
                        </div>
                        <div class="rounded-full bg-[#E83158] py-1 pl-2.5 pr-1 border border-transparent text-xs text-white transition-all shadow-sm flex items-center justify-between mb-8">Terakreditas
                            <div class="bg-[#F35577] rounded-full h-[22px] w-[22px] text-center ml-2 content-center">
                                 <span>A</span>
                            </div>
                        </div>
                        <div class="h-[72px] w-[72px] bg-[#FFFFFF] rounded-lg content-center p-3">
                            <img :src="`https://apicampusdir.civitas.id${item.logo}`" alt="contoh-logo" class="m-auto" />
                        </div>
                    </div>
                </div>
                <div class="w-full xl:px-3 relative top-[-40px]">
                    <div class="bg-white shadow-xl shadow-[#EFF1F6] xl:rounded-xl rounded-b-xl text-left p-5">
                        <h5 class="text-sm font-bold text-[#3C3B52] mb-1">{{ item.name }}</h5>
                        <div class="flex items-center">
                            <div class="flex-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3A5AE3" class="size-6">
                                <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <h5 class="text-xs text-light text-[#3A5AE3] ml-2">{{ item.address }}</h5>
                        </div>
                        <div class="flex items-center mt-2">
                            <div class="w-[17px] h-0 border mr-2" :class="item.education_type === 'Swasta' && 'border-[#F4933A]' || item.education_type === 'Negeri' && 'border-[#0AA8C1]'"></div>
                            <h5 class="text-xs" :class="item.education_type === 'Swasta' && 'text-[#F4933A]' || item.education_type === 'Negeri' && 'text-[#0AA8C1]'">{{ item.education_type }}</h5>
                        </div>
                        <h5 class="text-[#7E8CA0] text-xs mt-2">Uang masuk mulai dari</h5>
                        <h5 class="text-[#3C3B52] text-xs mt-2 font-bold">{{ formatRupiah(item.min_registration_fee) }}</h5>
                        <button class="mt-2 rounded-full bg-[#0AA8C1] py-1 px-4 border border-transparent text-center text-xs text-white transition-all shadow-md hover:shadow-lg focus:bg-[#0AA8C1] focus:shadow-none active:bg-[#0AA8C1] hover:bg-[#0AA8C1] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">Pendaftaran Online</button>
                    </div>
                </div>
            </div>
            <div class="hidden xl:block absolute top-[-100px] left-[-50px] z-[-1]"> 
                <img src="/static/back-vector.svg" alt="back" />
            </div>
        </div>
        <div class="grid lg:grid-cols-3 gap-x-6 items-center lg:mt-7">
            <div class="hidden lg:block border border-[#E6E9ED] h-0 w-full"></div>
            <button class="rounded-md border border-[#0AA8C1] py-4 px-16 lg:mt-12 text-center text-sm transition-all shadow-sm hover:shadow-lg text-[#0AA8C1] hover:text-white hover:bg-[#0AA8C1] hover:border-[#0AA8C1] focus:text-white focus:bg-[#0AA8C1] focus:border-[#0AA8C1] active:border-[#0AA8C1] active:text-white active:bg-[#0AA8C1] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none relative top-[-20px]" type="button">Kampus Lainnya (+32)</button>
            <div class="hidden lg:block border border-[#E6E9ED] h-0 w-full"></div>
        </div>
    </section>
</template>

<script>
import { useUnivStore } from './store';
import { toRaw } from "vue";

export default {
    data: () => ({
        univStore: useUnivStore(),
    }),
    computed: {
        univs() {
            return this.univStore.univs;
        },
        univDetails() {
            return this.univStore.univDetails;
        }
    },
    created() {
      this.univStore.fetchUnivAll()
    },
    watch: {
      univs(newunivs) {
        return toRaw(newunivs)
      },
      univDetails(newunivdetails) {
        console.log('tes univ detail:', toRaw(newunivdetails))
      }
    },
    methods: {
        formatRupiah(value) {
            if (!value) return "Rp 0";
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
            }).format(value);
        }
    }
}
</script>