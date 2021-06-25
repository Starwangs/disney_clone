<script>
    import { url } from "@roxi/routify";
    import { newDisneys } from "../lib/shared/store";
</script>

<div class="container">
    <h4>New to Disney+</h4>
    <div class="content">
        {#each $newDisneys as movie (movie.id)}
            <div class="wrap">
                {movie.id}
                <a href={$url(`/detail/:id`, {id: movie.id})}>
                    <img src={movie.cardImg} alt={movie.title}>
                </a>
            </div>
        {/each}
    </div>
</div>

<style lang="sass">
    
div.container
    padding: 0 0 26px

div.content
    display: grid
    gap: 25px
    grid-template-columns: repeat(4, minmax(0, 1fr))

    @media (max-width: 768px)
        grid-template-columns: repeat(2, minmax(0, 1fr))

div.wrap
    padding-top: 56.25%
    border-radius: 10px
    box-shadow: rgb(0, 0, 0) 0 26px 30px -10px, rgb(0, 0, 0) 0 16px 10px -10px
    cursor: pointer
    overflow: hidden
    position: relative
    transition: all 250ms cubic-bazier(.25, .46, .45, .94) 0s
    border: 3px solid rgba(249, 249, 249, .1)

    img
        inset: 0
        display: block
        height: 100%
        object-fit: cover
        opacity: 1
        position: absolute
        transition: opacity 500ms ease-in-out 0s
        width: 100%
        z-index: 1
        top: 0

    &:hover
        box-shadow: rgb(0, 0, 0) 0 40px 58px -16px, rgb(0, 0, 0) 0 30px 22px -10px
        transform: scale(1.05)
        border-color: rgba(249, 249, 249, .8)
</style>