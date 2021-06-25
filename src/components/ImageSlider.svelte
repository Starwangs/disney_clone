<script>
	import { Slidy } from 'svelte-slidy';
	
	let items = [
        { id: 1, src: 'assets/images/slider-badging.jpg' },
		{ id: 2, src: 'assets/images/slider-scale.jpg' },
		{ id: 3, src: 'assets/images/slider-badag.jpg' },
		{ id: 4, src: 'assets/images/slider-scales.jpg' }
    ]
	
	const slidy = {
		slides: items,
		timeout: 1000,
		index: 1,
		wrap: {
			id: 'slidy',
			width: '100%',
			height: '100%',
			padding: '0',
			align: 'middle',
			alignmargin: 0,
		},
		slide: {
			gap: 10,
			width: '90%',
			height: '90%',
			backimg: false,
			imgsrckey: 'src',
			objectfit: 'cover',
			overflow: 'hidden'
		},
		controls: {
			dots: true,
			dotsnum: true,
			dotsarrow: true,
			dotspure: true,
			arrows: true,
			keys: true,
			drag: true,
			wheel: true,
		},
		options: {
			axis: 'x',
			loop: true,
			duration: 350,
		}
	}
</script>

<Slidy {...slidy} ></Slidy>

<style>
    :global(#slidy .slidy-ul li) {
        border-radius: 4px;
        box-shadow: rgb(0, 0, 0) 0 26px 30px -10px, rgb(0, 0, 0) 0 16px 10px -10px;
        cursor: pointer;
        padding: 4px;
        margin-top: 20px;
        margin-bottom: 7vh;
        display: block;
        position: relative;
    }

    :global(#slidy .slidy-ul li:hover) {
        padding: 0;
        border: 4px solid rgba(249, 249, 249, .8);
        transition: 300ms ease-in-out;
    }

    :global(#slidy .slidy-dots li:not(:first-child):not(:last-child) button) {
        background: rgba(150, 158, 171, .8);
        width: 10px;
        height: 10px;
    }

    :global(#slidy .slidy-dots li.active button) {
       background: white !important;
    }

    :global(#slidy .slidy-dots li:first-child button) {
        color: white;
    }

    :global(#slidy .slidy-dots li:last-child button) {
        color: white;
    }
</style>