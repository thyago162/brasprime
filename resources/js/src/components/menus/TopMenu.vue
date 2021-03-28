<template>
    <div>
        <b-navbar toggleable="lg" type="dark"  class="menu">
            <b-navbar-brand href="#" class="logo_mobile">
                <b-img :src="logo" ></b-img>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="mx-auto">
                     <b-img-lazy :src="logo" class="logo"></b-img-lazy>
                    <b-nav-item :to="{name: 'unauthenticated.home'}">Início</b-nav-item>
                    <b-nav-item :to="{name: 'unauthenticated.quem_somos'}">Quem somos</b-nav-item>
                    <b-nav-item :to="{name: 'unauthenticated.servicos'}">Serviços</b-nav-item>
                    <b-nav-item :to="{name: 'unauthenticated.agendamento'}">Agendamentos</b-nav-item>
                    <b-nav-item :to="{name: 'unauthenticated.contato'}">Contato</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'top_menu',

    data() {
        return {  
            logo: require('../../assets/images/LOGO_PRINCIPAL.png').default
        }
    }
}
</script>

<style lang="scss" scoped>
.menu {
    background-color: #000000;
}

.logo_mobile {
    display: block;
     height: 40px;
    @media(min-width: 640px) {
        display: none;
    }    

}
.logo {
    height: 40px;
    display: none;
    @media(min-width: 640px) {
        margin-left: 50px;
        display: block;
    }    
}
</style>