<template>
    <div>
        <b-navbar toggleable="lg" type="dark"  class="menu">
            <b-navbar-brand href="#" class="logo">
                <b-img :src="logo" ></b-img>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="mx-auto">
                    <b-nav-item :to="{path: '/'}">Sair</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Authmenu',
    data() {
        return {
            logo: require('../../assets/images/logo-2.svg').default
        }
    }
}
</script>


<style lang="scss" scoped>
.menu {
    background-color: #000000;
    height: 50px;

    .logo {
        height: 40px;
    }
}
</style>