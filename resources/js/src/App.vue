<template>
   <div>
       <top-menu v-if="$route.name !== 'unauthenticated.login' && $route.name !== 'authenticated.schedules'"/>
       <router-view></router-view>
       <Footer v-if="$route.name !== 'unauthenticated.login'"/>
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
