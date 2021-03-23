<template>
   <div>
       <top-menu />
       <router-view></router-view>
   </div>
</template>

<script>
import TopMenu from './components/menus/TopMenu'
export default {
    name: 'app',
    components: {TopMenu}
}
</script>
