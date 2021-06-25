<div class="container">
    <div class="wrap">
        <img src="assets/images/viewers-disney.png" alt="">
        <video autoPlay={true} loop={true} playsInline={true}>
            <source src="assets/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
    </div>

    <div class="wrap">
        <img src="assets/images/viewers-pixar.png" alt="">
        <video autoPlay={true} loop={true} playsInline={true}>
            <source src="assets/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
    </div>

    <div class="wrap">
        <img src="assets/images/viewers-marvel.png" alt="">
        <video autoPlay={true} loop={true} playsInline={true}>
            <source src="assets/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
    </div>

    <div class="wrap">
        <img src="assets/images/viewers-starwars.png" alt="">
        <video autoPlay={true} loop={true} playsInline={true}>
            <source src="assets/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
    </div>

    <div class="wrap">
        <img src="assets/images/viewers-national.png" alt="">
        <video autoPlay={true} loop={true} playsInline={true}>
            <source src="assets/videos/1564676296-national-geographic.mp4" type="video/mp4" />
        </video>
    </div>
</div>

<style lang="sass">
div.container
    margin-top: 30px
    padding: 30px 0 26px
    display: grid
    gap: 25px
    grid-template-columns: repeat(5, minmax(0, 1fr))

    @media (max-width: 768px)
        grid-template-columns: repeat(1, minmax(0, 1fr))

div.wrap
    padding-top: 56.25%
    border-radius: 10px
    box-shadow: rgb(0, 0, 0) 0 26px 30px -10px, rgb(0, 0, 0) 0 16px 10px -10px
    cursor: pointer
    overflow: hidden
    position: relative
    transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s
    border: 3px solid rgba(249, 249, 249, .1)

    img
        inset: 0px
        display: block
        height: 100%
        width: 100%
        object-fit: cover
        opacity: 1
        position: absolute
        transition: opacity 500ms ease-in-out 0s
        z-index: 1
        top: 0

    video
        width: 100%
        height: 100%
        position: absolute
        top: 0
        opacity: 0
        z-index: 0

    &:hover
        box-shadow: rgb(0, 0, 0) 0 40px 58px -16px, rgb(0, 0, 0) 0 30px 22px -10px
        transform: scale(1.05)
        border-color:  rgba(249, 249, 249, .8)

        video
            opacity: 1
</style>