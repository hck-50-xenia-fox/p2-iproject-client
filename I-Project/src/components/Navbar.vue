<script>
import { RouterLink } from 'vue-router';

export default {
    name: "Navbar",
    components: {
        RouterLink
    },
    methods: {
        selected() {
            var targeted = event.target
            var clicked = targeted.parentElement;

            var child = clicked.children;
            console.log(child);

            for (let i = 0; i < child.length; i++) {
                if (child[i].classList.contains('text-white')) {
                    console.log(child[i]);
                    child[i].classList.remove('text-white', 'bg-indigo-600');
                    child[i].classList.add('text-gray-600', 'bg-gray-50', 'border', 'border-white');
                }
            }

            targeted.classList.remove('text-gray-600', 'bg-gray-50', 'border', 'border-white');
            targeted.classList.add('text-white', 'bg-indigo-600');
        }
    }
}
</script>




<template>

    <div class="
            fixed top-0 left-0 right-0 z-10" style="min-height: 200px; ">
        <div class=" 2xl:mx-auto">
            <div class="bg-white rounded shadow-lg py-5 px-7">
                <nav class="flex justify-between">
                    <div class="flex items-center space-x-3 lg:pr-16 pr-6">
                        <img class="cursor-pointer"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-1-svg1.svg" alt="circle" />
                        <h2 class="font-normal text-2xl leading-6 text-gray-800">Get Kos</h2>
                    </div>

                    <!-- For medium and plus sized devices -->
                    <ul class="hidden md:flex flex-auto space-x-2">
                        <li 
                            class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white bg-indigo-600 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 hover:bg-indigo-300">
                            <RouterLink @click="selected()" to="/">Home</RouterLink>
                        </li>
                        <li 
                            class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 hover:bg-indigo-300">
                            <RouterLink @click="selected()" to="/chat">Chat</RouterLink></li>
                    </ul>
                    <div class=" flex space-x-5 justify-center items-center pl-2">
                        <button
                            class="text-white py-2 px-2 uppercase rounded bg-red-500 hover:bg-red-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                            <RouterLink to="/login">Log Out</RouterLink> </button>
                    </div>
                </nav>
            </div>
        </div>

    </div>
</template>

