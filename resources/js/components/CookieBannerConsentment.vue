<template>
    <p :class="shoudBeDisplayed ? 'block' : 'hidden'">{{ __('messages.cookies') }}
        <a href="#"> {{ __('messages.learn_more') }}</a>
        <button type="button" @click="handleCookieStorageApproval">OK</button>
    </p>

</template>

<script>
    import Cookies from 'js-cookie';

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
