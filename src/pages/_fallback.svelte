<div class="container">
    <code><h1>🛠 In development!</h1></code>
</div>

<style lang="sass">
    .container
        min-height: 100vh
        width: 100%
        display: grid
        place-items: center
        position: relative

        h1
            color: transparent
            font-size: 5vw
            background: linear-gradient(to left, #2ecc71, #3498db, #9b59b6, #f39c12)
            -webkit-background-clip: text
            animation: animate 5s linear infinite
            -webkit-background-size: 500%
            background-size: 500%

            @keyframes animate
                0%
                    background-position: 0 100%
                50%
                    background-position: 100% 0
                100%
                    background-position: 0 100%
</style>