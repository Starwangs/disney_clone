<script>
    import { movies } from "../../lib/shared/store";

    export let id

    $: currentMovie = $movies.find(movie => movie.id === id) || {title: '', titleImg: '', backgroundImg: '', subTitle: '', description: ''}
</script>

<div class="container">
    <div class="background">
        <img src={currentMovie.backgroundImg} alt={currentMovie.title}>
    </div>

    <div class="image-title">
        <img src={currentMovie.titleImg} alt={currentMovie.title}>
    </div>

    <div class="content-meta">
        <div class="control">
            <button class="player">
                <img src="../assets/images/play-icon-black.png" alt="">
                <span>Play</span>
            </button>

            <button class="trailer">
                <img src="../assets/images/play-icon-white.png" alt="">
                <span>Trailer</span>
            </button>

            <div class="add-list">
                <span></span>
                <span></span>
            </div>

            <div class="group-watch">
                <div>
                    <img src="../assets/images/group-icon.png" alt="">
                </div>
            </div>

        </div>

        <div class="sub-title">{currentMovie.subTitle}</div>
        <div class="description">{currentMovie.description}</div>
    </div>
</div>

<style lang="sass">

div.container
    position: relative
    min-height: calc(100vh - 250px)
    overflow-x: hidden
    display: block
    top: 72px
    padding: 0 calc(3.5vw + 5px)

div.background
    left: 0
    opacity: .8
    position: fixed
    right: 0
    top: 0
    z-index: -1

    img
        width: 100vw
        height: 100vh
        object-fit: cover

div.image-title
    align-items: flex-end
    display: flex
    -webkit-box-pack: start
    justify-content: flex-start
    margin: 0 auto
    height: 30vw
    min-height: 170px
    padding-bottom: 24px
    width: 100%

    img
        max-width: 600px
        min-width: 200px
        width: 35vw
        object-fit: contain

div.content-meta
    max-width: 874px

div.control
    align-items: center
    display: flex
    flex-flow: row nowrap
    margin: 24px 0
    min-height: 56px

%box
    font-size: 15px
    margin: 0 22px 0 0
    padding: 0 24px
    height: 56px
    border-radius: 4px
    cursor: pointer
    display: flex
    align-items: center
    justify-content: center
    letter-spacing: 1.8px
    text-align: center
    text-transform: uppercase
    background: rgb(249, 249, 249)
    border: none
    color: rgb(0, 0, 0)

    img
        width: 32px
    
    &:hover
        background: rgb(198, 198, 198)
    
    @media (max-width: 768px)
        height: 45px
        padding: 0 12px
        font-size: 12px
        margin: 0 10px 0 0

        img
            width: 25px

button.player
    @extend %box

button.trailer
    @extend %box
    background: rgba(0, 0, 0, .3)
    border: 1px solid rgb(249, 249, 249)
    color: rgb(249, 249, 249)

div.add-list
    margin-right: 16px
    height: 44px
    width: 44px
    display: flex
    justify-content: center
    align-items: center
    background: rgba(0, 0, 0, .6)
    border-radius: 50%
    border: 2px solid white
    cursor: pointer

    span
        background: rgb(249, 249, 249)
        display: inline-block

        &:first-child
            height: 2px
            transform: translate(1px, 0) rotate(0deg)
            width: 16px

        &:nth-child(2)
            height: 16px
            transform: translateX(-8px) rotate(0deg)
            width: 2px

div.group-watch
    height: 44px
    width: 44px
    border-radius: 50%
    display: flex
    justify-content: center
    align-items: center
    cursor: pointer
    background: white

    div
        height: 40px
        width: 40px
        background: rgb(0, 0, 0)
        border-radius: 50%
        display: grid
        place-items: center

        img
            width: 80%

div.sub-title
    color: rgb(249, 249, 249)
    font-size: 15px
    min-height: 20px

    @media (max-width: 768px)
        font-size: 12px

div.description
    line-height: 1.4
    font-size: 20px
    padding: 16px 0
    color: rgb(249, 249, 249)

    @media (max-width: 768px)
        font-size: 14px

</style>