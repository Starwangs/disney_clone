<script>
    import { goto, url, isActive } from '@roxi/routify'
    import { auth, provider } from '../lib/shared/firebase'
    import { authState } from 'rxfire/auth'
    import { user } from '../lib/shared/store'

    const handleAuth = () => auth.signInWithPopup(provider)
    const handleSignOut = () => auth.signOut()
    authState(auth).subscribe(u => user.update(() => sliceUser(u)))

    function sliceUser(u) {
        if (u)
            return {
                name: u.displayName,
                email: u.email,
                photo: u.photoURL
            }
    }

    $: if (JSON.stringify($user || {}) === '{}') $goto('./index')
    $: if ((!(JSON.stringify($user || {}) === '{}')) && $isActive('./index')) $goto('/home')
</script>

<nav>
    <a href={$url('/index')} class="logo">
        <img src="assets/images/logo.svg" alt="">
    </a>

    {#if !$user}
        <a class="login" on:click={handleAuth}>Login</a>
    {:else}
        <div class="menu">
            <a href={$url('./home')}>
                <img src="../assets/images/home-icon.svg" alt="">
                <span>HOME</span>
            </a>

            <a href={$url('./search')}>
                <img src="../assets/images/search-icon.svg" alt="">
                <span>SEARCH</span>
            </a>

            <a href={$url('./watchlist')}>
                <img src="../assets/images/watchlist-icon.svg" alt="">
                <span>WATCHLIST</span>
            </a>

            <a href={$url('./originals')}>
                <img src="../assets/images/original-icon.svg" alt="">
                <span>ORIGINALS</span>
            </a>

            <a href={$url('./movies')}>
                <img src="../assets/images/movie-icon.svg" alt="">
                <span>MOVIES</span>
            </a>

            <a href={$url('./series')}>
                <img src="../assets/images/series-icon.svg" alt="">
                <span>SERIES</span>
            </a>
        </div>

        <div class="sign-out">
            <img src={$user.photo} alt="" class="user-image">
            <div class="dropdown">
                <span on:click={handleSignOut}>Sign Out</span>
            </div>
        </div>
    {/if}
</nav>

<style lang="sass">
nav
    position: fixed
    top: 0
    left: 0
    right: 0
    height: 70px
    background: #090b13
    display: flex
    justify-content: space-between
    align-items: center
    padding: 0 36px
    letter-spacing: 16px
    z-index: 3

a.logo
    padding: 0
    width: 80px
    margin-top: 4px
    max-height: 70px
    font-size: 0
    display: inline-block
    cursor: pointer

    img
        display: block
        width: 100%

div.menu
    display: flex
    flex-flow: row nowrap
    align-items: center
    justify-content: flex-end
    height: 100%
    position: relative
    margin-right: auto
    margin-left: 25px

    a
        display: flex
        align-items: center
        padding: 0 12px

        img
            height: 20px
            min-width: 20px
            width: 20px
            z-index: auto

        span
            color: rgb(249, 249, 249)
            font-size: 13px
            letter-spacing: 1.42px
            line-height: 1.08
            padding: 2px 0
            white-space: nowrap
            position: relative

            &:before
                background: rgb(249, 249, 249)
                border-radius: 0 0 4px 4px
                bottom: -6px
                content: ""
                height: 2px
                left: 0
                opacity: 0
                position: absolute
                right: 0
                transform-origin: left center
                transform: scaleX(0)
                transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s
                visibility: hidden
                width: auto

    a:hover
        
        span::before
            transform: scaleX(1)
            visibility: visible
            opacity: 1 !important

a.login
    background: rgba(0, 0, 0, .6)
    padding: 8px 16px
    text-transform: uppercase
    letter-spacing: 1.5px
    border: 1px solid #f9f9f9
    border-radius: 4px
    cursor: pointer
    transition: all .2s ease 0s

    &:hover
        background: #f9f9f9
        color: #000
        border-color: transparent

@media (max-width: 768px)
    div.menu
        display: none

div.sign-out
    position: relative
    display: flex
    height: 48px
    width: 48px
    cursor: pointer
    align-items: center
    justify-content: center

    img.user-image
        width: 100%
        height: 100%
        border-radius: 50%

    &:hover

        div.dropdown
            opacity: 1
            transition-duration: 1s

    div.dropdown
        position: absolute
        top: 48px
        right: 0
        background: rgb(19, 19, 19)
        border: 1px solid rgba(151, 151, 151, .34)
        border-radius: 4px
        box-shadow: rgb(0, 0, 0) 0 0 18px 0
        padding: 10px
        font-size: 14px
        letter-spacing: 3px
        width: 110px
        text-align: center
        opacity: 0

</style>