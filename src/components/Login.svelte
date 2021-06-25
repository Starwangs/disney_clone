<script></script>

<section class="container">
    <div class="content">
        <div class="CTA">
            <img src="assets/images/cta-logo-one.svg" alt="" class="CTA-logo-one">
            <a class="sign-up">GET IT ALL THERE</a>
            <p class="description">
                Get Premier Access to Rayaa and the Last Dragon for an additional fee with a Disney+ subscription. As of 04/02/21, the price of Disney+ and The Disney Bundle will increase by $1
            </p>
            <img src="assets/images/cta-logo-two.png" alt="" class="CTA-logo-two">
        </div>
        <div class="bg-image"></div>
    </div>
</section>

<style>
    section.container {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 100vh;
    }

    div.content {
        margin-bottom: 10vw;
        width: 100%;
        position: relative;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 80px 40px;
        height: 100%;
    }

    div.bg-image {
        height: 100%;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/assets/images/login-background.jpg');
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        z-index: -1;
    }

    div.CTA {
        max-width: 650px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    img.CTA-logo-one {
        margin-bottom: 12px;
        max-width: 600px;
        min-height: 1px;
        display: block;
        width: 100%;
    }

    a.sign-up {
        font-weight: bold;
        color: #f9f9f9;
        background-color: #0063e5;
        margin-bottom: 12px;
        width: 100%;
        letter-spacing: 1.5px;
        padding: 16.5px 0;
        border: 1px solid transparent;
        border-radius: 4px;
    }

    a.sign-up:hover {
        background-color: #0483ee;
    }

    p.description {
        color: hsla(0, 0%, 95.3%, 1);
        font-size: 11px;
        margin: 0 0 24px;
        line-height: 1.5;
        letter-spacing: 1.5px;
    }

    img.CTA-logo-two {
        max-width: 600px;
        margin-bottom: 20px;
        display: inline-block;
        vertical-align: bottom;
        width: 100%;
    }
</style>