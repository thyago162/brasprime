<template>
   <div>
       <top-menu />
       <router-view></router-view>
       <Footer />
   </div>
</template>

<script>
import TopMenu from './components/menus/TopMenu'
import Footer from './components/footer/Footer'
export default {
    name: 'app',
    components: {TopMenu, Footer}
}
</script>
