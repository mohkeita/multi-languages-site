<template>
    <p>Discover, share and live unique experieences near you.
        <a href="#"> Learn More</a>
        <button type="button" @click="handleCookieStorageApproval">OK</button>
    </p>

</template>

<script>
    import Cookies from 'js-cookie';
    export default {
        name: "CookieBannerConsentment",
        methods: {
            handleCookieStorageApproval(){
                Cookies.set('user_has_agree_to_cookie_storage', 'true', {expires: 10})
            }
        }
    }
</script>

<style scoped>

</style>
