// Banner duration timer start time
var startTime;
// Javascript runs once page is loaded
function init() {
    // Set Banner duration timer
    startTime = new Date();

    // Global variables
    const exit = document.getElementById('default_exit')
    const products = document.getElementById('products')
    // Run code once images are loaded
    const imagesLoaded = () => {

        /**
         * Controls
         */

        // Main
        const duration = .65
        const ease = 'back.out(1)'
        const delay = duration / 1.5

        // Background
        const backgroundDuration = 1.25
        const backgroundEase = 'back.out(0.75)'

        // Intro
        const introDuration = .5
        const introEase = 'back.out(1)'
        const introDelay = introDuration / 1.5
        const endDuration = .6

        // Origins
        const logoOrigin = '50% 23%'
        const ctaOrigin = '50% 84.1%'

        // Hover
        const hoverScale = 1.2

        /**
         * Age Rating HTML
         */

         const legals = document.getElementById('legals')
         const legals1HTML = '<img src="legals1.png" class="legals1" id="legals1">'
         const legals2HTML = '<img src="legals2.png" class="legals2" id="legals2">'
         const legals3HTML = '<img src="legals3.png" class="legals3" id="legals3">'
         const legals4HTML = '<img src="legals4.png" class="legals4" id="legals4">'
         const finalLegal = '<img src="legals-end.png" class="legals-end" id="legals-end">'

         if(legal1){
             legals.innerHTML += legals1HTML
         }
         if(legal2){
             legals.innerHTML += legals2HTML
         }
         if(legal3){
             legals.innerHTML += legals3HTML
         }
         if(legal4){
             legals.innerHTML += legals4HTML
         }
         if(legalEnd){
             legals.innerHTML += finalLegal
         }
        /**
         * Animation
         */

        const tl = gsap.timeline()

        tl
        .to('.logo', {duration: duration, scale: 1, opacity: 1, transformOrigin: logoOrigin, ease: ease}, '<' + delay*2)
        .to('.logo', {duration: duration, ease: ease, y: 35}, '<' + 1.25)


        tl
            .to('.product1', {
                scale: 1,
                opacity: 1,
                ease: introEase,
                duration: introDuration,
            }, '<' + delay)
            .to('.product1-title', {
                scale: 1,
                opacity: 1,
                ease: introEase,
                duration: introDuration,
            }, '<')
        if (legal1) {
            tl.to('.legals1', {duration: introDuration, scale: 1, opacity: 1, ease: introEase}, '<')
        }
        if (sameLegal) {
            tl.to('.legals-end', {duration: introDuration, scale: 1, opacity: 1, ease: introEase}, '<')
        }
        tl
            .to('.product1', {
                duration: introDuration,
                scale: 0,
                opacity: 0,
                ease: introEase
            }, '<' + (introDelay * 3))
            .to('.product1-title', {
                duration: introDuration,
                scale: 0,
                opacity: 0,
                ease: introEase
            }, '<')
        if (legal1) {
            tl.to('.legals1', {opacity: 0, ease: introEase, duration: introDuration}, '<')
        }
        tl
            .to('.product2', {
                duration: introDuration,
                scale: 1,
                opacity: 1,
                ease: introEase
            }, '<' + introDelay)
            .to('.product2-title', {
                duration: introDuration,
                scale: 1,
                opacity: 1,
                ease: introEase
            }, '<')
        if (legal2) {
            tl.to('.legals2', {scale: 1, opacity: 1, ease: introEase, duration: introDuration}, '<')
        }
        tl
            .to('.product2', {
                duration: introDuration,
                scale: 0,
                opacity: 0,
                ease: introEase
            }, '<' + (introDelay * 3))
            .to('.product2-title', {
                duration: introDuration,
                scale: 0,
                opacity: 0,
                ease: introEase
            }, '<')
        if (legal2) {
            tl.to('.legals2', {opacity: 0, ease: introEase, duration: introDuration}, '<')
        }
        tl
            .to('.product3', {
                duration: introDuration,
                scale: 1,
                opacity: 1,
                ease: introEase
            }, '<' + introDelay)
            .to('.product3-title', {
                duration: introDuration,
                scale: 1,
                opacity: 1,
                ease: introEase
            }, '<')
        if (legal3) {
            tl.to('.legals3', {scale: 1, opacity: 1, ease: introEase, duration: introDuration}, '<')
        }
        tl
            .to('.product3', {
                duration: introDuration,
                scale: 0,
                opacity: 0,
                ease: introEase
            }, '<' + (introDelay * 3))
            .to('.product3-title', {
                duration: introDuration,
                scale: 0,
                opacity: 0,
                ease: introEase
            }, '<')
        if (legal3) {
            tl.to('.legals3', {opacity: 0, ease: introEase, duration: introDuration}, '<')
        }

        tl
        .set('.product1', {transformOrigin: "50% 50%", y: GamesY})
        .set('.product2', {transformOrigin: "50% 50%", y:GamesY + gamesDist})
        .set('.product3', {transformOrigin: "50% 50%", y: GamesY + gamesDist*2})
        .set('.product1-title', {transformOrigin: "50% 50%", y:GamesY - gameDiscountDist})
        .set('.product2-title', {transformOrigin: "50% 50%", y:GamesY + gamesDist - gameDiscountDist})
        .set('.product3-title', {transformOrigin: "50% 50%", y: GamesY + gamesDist*2 - gameDiscountDist})

        const addEndframeClass = () => {
            products.classList.add('endframe')
        }

        tl
            .call(addEndframeClass)
            if(rating){
                tl
                .to('.logo', {duration: endDuration, ease: ease, y: -3})
            }else{
                tl
                .to('.logo', {duration: endDuration, ease: ease, y: 4})
            }

        tl
            .to('.product1', {duration: endDuration, scale: 0.5, opacity: 1, ease: ease}, '<')
            .to('.product1-title', {duration: endDuration, scale: 0.5, opacity: 1, ease: ease}, '<')

            .to('.product2', {duration: endDuration, scale: 0.5, opacity: 1, ease: ease}, '<' + (delay / 1.5))
            .to('.product2-title', {duration: endDuration, scale: 0.5, opacity: 1, ease: ease}, '<')

            .to('.product3', {duration: endDuration, scale: 0.5, opacity: 1, ease: ease}, '<' + (delay / 1.5))
            .to('.product3-title', {duration: endDuration, scale: 0.5, opacity: 1, ease: ease}, '<')

            .to('.cta', {duration: endDuration, scale: 1, opacity: 1, transformOrigin: ctaOrigin, ease: ease}, '<' + (delay / 1.5))

            if (legalEnd) {
                tl
                    .to('.legals-end', {opacity: 1, ease: introEase, duration: introDuration}, '<' + delay)
            }
        tl
            .eventCallback("onComplete", () => {
                hoverAnimation()
                productsTl.play(0)
            })

        /**
         * Products animation
         */
        const productsTl = gsap.timeline({
            onComplete: endTime,
            defaults: {
                force3D: true
            }
        })

        for (var y = 0; y < 5; y++) {
            productsTl
                .to('.logo', {duration: 2, scale: 1.05, ease: ease}, '<' + delay * 3)
                .to('.logo', {duration: 2, scale: 1, ease: ease}, '<' + delay / 2)
                .to('.product1', {duration: 2, scale: 0.6, ease: ease}, '<' + delay / 2)
                .to('.product1', {duration: 2, scale: 0.5, ease: ease}, '<' + delay / 2)
                .to('.product2', {duration: 2, scale: 0.6, ease: ease}, '<' + delay / 2)
                .to('.product2', {duration: 2, scale: 0.5, ease: ease}, '<' + delay / 2)
                .to('.product3', {duration: 2, scale: 0.6, ease: ease}, '<' + delay / 2)
                .to('.product3', {duration: 2, scale: 0.5, ease: ease}, '<' + delay / 2)
                .to('.cta', {duration: 2, scale: 1.05, ease: ease}, '<' + delay / 2)
                .to('.cta', {duration: 2, scale: 1, ease: ease}, '<' + delay / 2)
        }

        productsTl.pause()

        /**
         * Background breath animation
         */
        const backgroundTl = gsap.timeline({
            defaults: {
                force3D: true
            }
        })

        backgroundTl
            .to('.bg', {
                scale: 1,
                ease: ease,
                duration: 3
            }, (backgroundDuration - duration) + .2)



        /**
         * Endframe on click
         */
        exit.addEventListener('click', () => {
            tl.progress(1).pause()
        })

        /**
         * Hover animation
         */
        const hoverAnimation = () => {

            const hoverDefaults = {
                // scale: hoverScale,
                ease: ease,
                duration: duration / 2,
                force3D: true
            }
            const productDefaults = {
                scale: 0.57,
                ease: ease,
                duration: duration / 2,
                force3D: true
            }

            const product1HoverTl = gsap.timeline({
                defaults: productDefaults
            })
            const product2HoverTl = gsap.timeline({
                defaults: productDefaults
            })
            const product3HoverTl = gsap.timeline({
                defaults: productDefaults
            })

            product1HoverTl
                .to('.product1', {}, '<')
                .pause()

            product2HoverTl
                .to('.product2', {}, '<')
                .pause()

            product3HoverTl
                .to('.product3', {}, '<')
                .pause()

            const ctaHoverTl = gsap.timeline({
                defaults: hoverDefaults
            })

            ctaHoverTl
                .to('.cta, .cta-hover', {
                    transformOrigin: ctaOrigin,
                    opacity: 1,
                }, '<').pause()

            exit.addEventListener('mouseover', () => {
                product1HoverTl.play()
                product2HoverTl.play()
                product3HoverTl.play()
                ctaHoverTl.play()
                productsTl.pause()
            })
            exit.addEventListener('mouseleave', () => {
                product1HoverTl.reverse()
                product2HoverTl.reverse()
                product3HoverTl.reverse()
                ctaHoverTl.reverse()
                productsTl.play()
            })

        }



    }


    /**
     * Image loader
     */
    let imgs = document.images
    let len = imgs.length
    let counter = 0

    const incrementCounter = () => {
        counter++;
        if (counter === len) {
            imagesLoaded()
        }
    }

    [].forEach.call(imgs, (img) => {
        if (img.complete)
            incrementCounter()
        else
            img.addEventListener('load', incrementCounter, false)
    })

    // End timer

    function endTime() {

        // show total banner animation time in browser console.
        var endTime = new Date();

        console.log("Animation duration: " + (endTime - startTime) / 1000 + " seconds");
    }
}