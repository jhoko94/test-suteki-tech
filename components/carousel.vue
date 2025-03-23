<template>
    <section class="flex flex-col items-center justify-center my-10">
      <div
        class="relative w-full overflow-hidden"
        @touchstart="startTouch"
        @touchmove="moveTouch"
        @touchend="endTouch"
        @wheel.prevent="scrollSlide"
      >
        <div class="relative flex w-full xl:h-[400px] lg:h-[270px] md:h-[200px] h-[130px] items-center justify-center">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="absolute transition-all duration-500 ease-in-out transform will-change-transform"
            :class="getSlideClass(index)"
          >
            <img
              :src="image"
              class="object-cover rounded-xl shadow-lg transition-transform duration-500 ease-in-out"
              :class="getImageClass(index)"
            />
          </div>
        </div>
      </div>
  
      <div class="flex space-x-2">
        <span
          v-for="(image, index) in images"
          :key="index"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="index === currentIndex ? 'bg-[#0AA8C1] scale-125 w-5' : 'bg-gray-400'"
        ></span>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          "/contoh-banner-1.png",
          "/contoh-banner-2.png",
          "/contoh-banner-3.png",
          "/contoh-banner-4.png",
        ],
        currentIndex: 0,
        startX: 0,
        isSwiping: false,
        isScrolling: false,
      };
    },
    methods: {
      getSlideClass(index) {
        const total = this.images.length;
        if (index === this.currentIndex) {
          return "w-[55%] translate-x-0 scale-100 opacity-100 z-10";
        } else if (index === (this.currentIndex - 1 + total) % total) {
          return "w-[50%] -translate-x-[110%] scale-95 z-5";
        } else if (index === (this.currentIndex + 1) % total) {
          return "w-[50%] translate-x-[110%] scale-95 z-5";
        } else {
          return "opacity-0 hidden";
        }
      },
      
      getImageClass(index) {
        if (index === this.currentIndex) {
          return "";
        } else if (index === (this.currentIndex - 1 + this.images.length) % this.images.length) {
          return "mask-gradient-left";
        } else if (index === (this.currentIndex + 1) % this.images.length) {
          return "mask-gradient-right";
        }
        return "";
      },
  
      startTouch(event) {
        this.startX = event.touches[0].clientX;
        this.isSwiping = true;
      },
  
      moveTouch(event) {
        if (!this.isSwiping) return;
        const moveX = event.touches[0].clientX;
        const diff = this.startX - moveX;
  
        if (diff > 50) {
          this.nextSlide();
          this.isSwiping = false;
        } else if (diff < -50) {
          this.prevSlide();
          this.isSwiping = false;
        }
      },
  
      endTouch() {
        this.isSwiping = false;
      },
  
      scrollSlide(event) {
        if (this.isScrolling) return;
        
        this.isScrolling = true;
        setTimeout(() => {
          this.isScrolling = false;
        }, 500);
  
        if (event.deltaY > 0 || event.deltaX > 0) {
          this.nextSlide();
        } else if (event.deltaY < 0 || event.deltaX < 0) {
          this.prevSlide();
        }
      },
  
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
  
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }
    }
  };
  </script>
  
 <style scoped>
.mask-gradient-left {
  mask-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 60%, rgba(255, 255, 255, 1) 200%);
  -webkit-mask-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 60%, rgba(255, 255, 255, 1) 200%);
}

.mask-gradient-right {
  mask-image: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 60%, rgba(255, 255, 255, 1) 200%);
  -webkit-mask-image: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 60%, rgba(255, 255, 255, 1) 200%);
}
</style>