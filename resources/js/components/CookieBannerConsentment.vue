<template>
    <p :class="shoudBeDisplayed ? 'block' : 'hidden'">Discover, share and live unique experieences near you.
        <a href="#"> Learn More</a>
        <button type="button" @click="handleCookieStorageApproval">OK</button>
    </p>

</template>

<script>
    import Lang from 'lang.js';
    import Cookies from 'js-cookie';
    import messages from '../messages';
    export default {
        name: "CookieBannerConsentment",
        data(){
            return{
                shoudBeDisplayed: false,
            }
        },
        methods: {
            handleCookieStorageApproval(){
                Cookies.set('user_has_agree_to_cookie_storage', 'true', {expires: 10});
                this.shoudBeDisplayed = false;
            }
        },
        mounted() {
            const lang = new Lang({
                messages: messages
            });
            console.log(lang);
            if(Cookies.get('user_has_agree_to_cookie_storage')=== undefined){
                this.shoudBeDisplayed = true;
            }
        }
    }
</script>

<style scoped>
    .hidden {
        display: none;
    }

    .block{
        display: block;
    }

</style>
