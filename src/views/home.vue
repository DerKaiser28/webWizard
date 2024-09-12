<template>
    <div class="card">
        <Carousel :value="images" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3500">
            <template #item="slotProps">
                <div class="w-full">
                    <div class="mb-4">
                        <div class="relative mx-auto">
                            <img :src="slotProps.data.img" class="w-full h-90" />
                        </div>
                        <div class="shadow-lg bg-white/30 p-4">
                            <p class="text-xl">{{ slotProps.data.heading }}</p><br>
                            <p class="text-base">{{ slotProps.data.text }}</p>

                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>

    <div class="relative mx-30 p-30">
        <div class="absolute inset-0 inset-x-30 flex items-center mx-30 px-30" aria-hidden="true">
            <div class="w-full border-t border-gray-300 mx-30 px-30" />
        </div>
    </div>

    <h1 class="text-3xl text-white text-center my-10">Watch with Your Family</h1>
    <div class="grid grid-cols-6 gap-10 mx-10">
        <div class="rounded-md bg-white hover:drop-shadow-3xl hover:cursor-pointer" v-animateonscroll="{ enterClass: 'animate-scalein', leaveClass: 'animate-fadeout' }"><img :src="moviePlaceHolder" alt="" class="rounded-md"></div>
        <div class="rounded-md bg-white hover:drop-shadow-3xl hover:cursor-pointer" v-animateonscroll="{ enterClass: 'animate-scalein', leaveClass: 'animate-fadeout' }"><img :src="moviePlaceHolder" alt="" class="rounded-md"></div>
        <div class="rounded-md bg-white hover:drop-shadow-3xl hover:cursor-pointer" v-animateonscroll="{ enterClass: 'animate-scalein', leaveClass: 'animate-fadeout' }"><img :src="moviePlaceHolder" alt="" class="rounded-md"></div>
        <div class="rounded-md bg-white hover:drop-shadow-3xl hover:cursor-pointer" v-animateonscroll="{ enterClass: 'animate-scalein', leaveClass: 'animate-fadeout' }"><img :src="moviePlaceHolder" alt="" class="rounded-md"></div>
        <div class="rounded-md bg-white hover:drop-shadow-3xl hover:cursor-pointer" v-animateonscroll="{ enterClass: 'animate-scalein', leaveClass: 'animate-fadeout' }"><img :src="moviePlaceHolder" alt="" class="rounded-md"></div>
        <div class="rounded-md bg-white hover:drop-shadow-3xl hover:cursor-pointer" v-animateonscroll="{ enterClass: 'animate-scalein', leaveClass: 'animate-fadeout' }"><img :src="moviePlaceHolder" alt="" class="rounded-md"></div>
    </div>

    <h1 class="text-3xl text-white text-center my-10">Popular Movies</h1>
    <Carousel :value="popular" :numVisible="5" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3500">
        <template #item="slotProps">
            <div class="p-4 hover:drop-shadow-3xl hover:cursor-pointer" v-animateonscroll="{ enterClass: 'animate-scalein', leaveClass: 'animate-fadeout' }">
                <div class="w-full">
                <div class="mb-4">
                    <div class="relative mx-auto">
                        <img :src="slotProps.data.img" class="w-full h-90" />
                    </div>
                    <div class="p-2">
                        <p class="text-xl">{{ slotProps.data.title }}</p><br>
                    </div>
                    <div class="card flex justify-center">
                        <Rating v-model="slotProps.data.star" readonly />
                    </div>
                </div>
            </div>
            </div>
        </template>
    </Carousel>

    <div class="w-full flex flex-col justify-center">
        <h1 class="text-3xl text-white text-center my-10">Our Special Collaboration - Disney</h1>
        <div class="flex justify-center w-full">
            <img :src="disney" class="w-60" alt="">
        </div>
    </div>
    <div class="grid grid-cols-6 gap-10 mx-10">
        <div class="rounded-md bg-gray-600 hover:drop-shadow-3xl hover:cursor-pointer text-white text-center text-lg font-bold" v-animateonscroll="{ enterClass: 'animate-scalein', leaveClass: 'animate-fadeout' }"><img :src="moviePlaceHolder" alt="" class="rounded-md"><br>Movie Title</div>
        <div class="rounded-md bg-gray-600 hover:drop-shadow-3xl hover:cursor-pointer text-white text-center text-lg font-bold" v-animateonscroll="{ enterClass: 'animate-scalein', leaveClass: 'animate-fadeout' }"><img :src="moviePlaceHolder" alt="" class="rounded-md"><br>Movie Title</div>
        <div class="rounded-md bg-gray-600 hover:drop-shadow-3xl hover:cursor-pointer text-white text-center text-lg font-bold" v-animateonscroll="{ enterClass: 'animate-scalein', leaveClass: 'animate-fadeout' }"><img :src="moviePlaceHolder" alt="" class="rounded-md"><br>Movie Title</div>
        <div class="rounded-md bg-gray-600 hover:drop-shadow-3xl hover:cursor-pointer text-white text-center text-lg font-bold" v-animateonscroll="{ enterClass: 'animate-scalein', leaveClass: 'animate-fadeout' }"><img :src="moviePlaceHolder" alt="" class="rounded-md"><br>Movie Title</div>
        <div class="rounded-md bg-gray-600 hover:drop-shadow-3xl hover:cursor-pointer text-white text-center text-lg font-bold" v-animateonscroll="{ enterClass: 'animate-scalein', leaveClass: 'animate-fadeout' }"><img :src="moviePlaceHolder" alt="" class="rounded-md"><br>Movie Title</div>
        <div class="rounded-md bg-gray-600 hover:drop-shadow-3xl hover:cursor-pointer text-white text-center text-lg font-bold" v-animateonscroll="{ enterClass: 'animate-scalein', leaveClass: 'animate-fadeout' }"><img :src="moviePlaceHolder" alt="" class="rounded-md"><br>Movie Title</div>
    </div>
</template>

<script setup>
import Carousel from 'primevue/carousel';
import { ref } from "vue";
import AnimateOnScroll from 'primevue/animateonscroll';
import Rating from 'primevue/rating';

const images = ref([
    {
        img: './img/carousel1.png',
        heading: 'Heading',
        text: 'lorem'
    },
    {
        img: './img/carousel1.png',
        heading: 'Heading',
        text: 'lorem'
    },
    {
        img: './img/carousel1.png',
        heading: 'Heading',
        text: 'lorem'
    },
    {
        img: './img/carousel1.png',
        heading: 'Heading',
        text: 'lorem'
    },
    {
        img: './img/carousel1.png',
        heading: 'Heading',
        text: 'lorem'
    },
    {
        img: './img/carousel1.png',
        heading: 'Heading',
        text: 'lorem'
    }
]);
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

const popular = ref([
    {img: './img/logo-web.png', title: 'Movie Title', star: ref(4)},
    {img: './img/logo-web.png', title: 'Movie Title', star: ref(3)},
    {img: './img/logo-web.png', title: 'Movie Title', star: ref(4)},
    {img: './img/logo-web.png', title: 'Movie Title', star: ref(4)},
    {img: './img/logo-web.png', title: 'Movie Title', star: ref(4)},
    {img: './img/logo-web.png', title: 'Movie Title', star: ref(5)},
    {img: './img/logo-web.png', title: 'Movie Title', star: ref(4)},
    {img: './img/logo-web.png', title: 'Movie Title', star: ref(2)},
    {img: './img/logo-web.png', title: 'Movie Title', star: ref(5)},
    {img: './img/logo-web.png', title: 'Movie Title', star: ref(4)},
    {img: './img/logo-web.png', title: 'Movie Title', star: ref(3)},
    {img: './img/logo-web.png', title: 'Movie Title', star: ref(1)},
])

const moviePlaceHolder = './img/logo-web.png'
const disney = './img/disney.png'
</script>