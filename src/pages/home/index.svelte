<script>
    import ImageSlider from "../../components/ImageSlider.svelte";
    import NewDisney from "../../components/NewDisney.svelte";
    import Originals from "../../components/Originals.svelte";
    import Recommends from "../../components/Recommends.svelte";
    import Viewer from "../../components/Viewer.svelte";
    import Trending from "../../components/Trending.svelte";
</script>

<div class="container">
    <ImageSlider />
    <Viewer />
    <Recommends />
    <NewDisney />
    <Originals />
    <Trending />
</div>

<style lang="sass">
div.container
    position: relative
    min-height: calc(100vh - 250px)
    overflow-x: hidden
    display: block
    top: 72px
    padding: 0 calc(3.5vw + 5px)

    &:after
        background: url('assets/images/home-background.png')
        background-repeat: no-repeat
        background-attachment: fixed
        background-position: center
        background-size: cover
        content: ''
        position: absolute
        inset: 0
        opacity: 1
        z-index: -1
</style>