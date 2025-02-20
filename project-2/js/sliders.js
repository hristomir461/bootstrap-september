export function initSliders() {
    function initSlider(className, responsive) {
        if (document.getElementsByClassName(className)[0] != undefined) {
            var slider = tns({
                container: '.' + className,
                loop: true,
                navPosition: "bottom",
                speed: 400,
                mouseDrag: true,
                controls: false,
                autoplay: true,
                autoplayButtonOutput: false,
                responsive: responsive
            });
        }
    }

    initSlider('feature-slider', {
        640: {
            edgePadding: 20,
            gutter: 20,
            items: 1
        },
        700: {
            edgePadding: 20,
            gutter: 30,
            items: 2
        },
        900: {
            edgePadding: 20,
            items: 4
        }
    });

    initSlider('testi-slider', {
        640: {
            edgePadding: 20,
            gutter: 20,
            items: 1
        },
        700: {
            edgePadding: 20,
            gutter: 30,
            items: 1
        },
        900: {
            edgePadding: 20,
            items: 1
        }
    });
}