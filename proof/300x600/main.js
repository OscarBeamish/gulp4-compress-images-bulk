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
        const logoOrigin = '50% 20%'
        const ctaOrigin = '50% 75%'

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
            .to('.logo', {scale: 1.5, opacity: 1, duration: duration, transformOrigin: logoOrigin, ease: ease}, '<' + delay*2)
            .to('.logo', {y:10, duration: duration, scale: 1.2, ease: ease})


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
            tl
                .to('.legals1', {scale: 1, opacity: 1, ease: introEase, duration: introDuration}, '<')
        }
        if (sameRating) {
            tl
                .to('.legals-end', {scale: 1, opacity: 1, ease: introEase, duration: introDuration}, '<')
        }
        tl
            .to('.product1', {
                scale: 0,
                opacity: 0,
                ease: introEase,
                duration: introDuration,
            }, '<' + (introDelay * 3))
            .to('.product1-title', {
                scale: 0,
                opacity: 0,
                ease: introEase,
                duration: introDuration,
            }, '<')
        if (legal1) {
            tl
                .to('.legals1', {opacity: 0, ease: introEase, duration: introDuration}, '<')
        }
        tl
            .to('.product2', {
                scale: 1,
                opacity: 1,
                ease: introEase,
                duration: introDuration,
            }, '<' + introDelay)
            .to('.product2-title', {
                scale: 1,
                opacity: 1,
                ease: introEase,
                duration: introDuration,
            }, '<')
        if (legal2) {
            tl
                .to('.legals2', {scale: 1, opacity: 1, ease: introEase, duration: introDuration}, '<')
        }
        tl
            .to('.product2', {
                scale: 0,
                opacity: 0,
                ease: introEase,
                duration: introDuration,
            }, '<' + (introDelay * 3))
            .to('.product2-title', {
                scale: 0,
                opacity: 0,
                ease: introEase,
                duration: introDuration,
            }, '<')
        if (legal2) {
            tl
                .to('.legals2', {opacity: 0, ease: introEase, duration: introDuration}, '<')
        }
        tl
            .to('.product3', {
                scale: 1,
                opacity: 1,
                ease: introEase,
                duration: introDuration,
            }, '<' + introDelay)
            .to('.product3-title', {
                scale: 1,
                opacity: 1,
                ease: introEase,
                duration: introDuration,
            }, '<')
        if (legal3) {
            tl
                .to('.legals3', {duration: introDuration, scale: 1, opacity: 1, ease: introEase, }, '<')
        }
        tl
            .to('.product3', {
                scale: 0,
                opacity: 0,
                ease: introEase,
                duration: introDuration,
            }, '<' + (introDelay * 3))
            .to('.product3-title', {
                scale: 0,
                opacity: 0,
                ease: introEase,
                duration: introDuration,
            }, '<')
        if (legal3) {
            tl
                .to('.legals3', {opacity: 0, ease: introEase, duration: introDuration}, '<')
        }
        tl
            .to('.product4', {
                scale: 1,
                opacity: 1,
                ease: introEase,
                duration: introDuration,
            }, '<' + introDelay)
            .to('.product4-title', {
                scale: 1,
                opacity: 1,
                ease: introEase,
                duration: introDuration,
            }, '<')
        if (legal4) {
            tl
                .to('.legals4', {scale: 1, opacity: 1, ease: introEase, duration: introDuration}, '<')
        }
        tl
            .to('.product4', {
                scale: 0,
                opacity: 0,
                ease: introEase,
                duration: introDuration,
            }, '<' + (introDelay * 3))
            .to('.product4-title', {
                scale: 0,
                opacity: 0,
                ease: introEase,
                duration: introDuration,
            }, '<')
        if (legal4) {
            tl
                .to('.legals4', {opacity: 0, ease: introEase, duration: introDuration}, '<')
        }

        if(RTL()){
            tl
            .set('.product1', {x: Xpos + Xoffset/2, y: Ypos})
            .set('.product2', {x: Xpos - Xoffset/2, y: Ypos})
            .set('.product3', {x: Xpos + Xoffset/2, y: Ypos + Yoffset})
            .set('.product4', {x: Xpos - Xoffset/2, y: Ypos + Yoffset})
            .set('.product1-title', {x: Xpos + Xoffset/2, y: Ypos + DiscountYoffset})
            .set('.product2-title', {x: Xpos - Xoffset/2, y: Ypos + DiscountYoffset})
            .set('.product3-title', {x: Xpos + Xoffset/2, y: Ypos + Yoffset + DiscountYoffset})
            .set('.product4-title', {x: Xpos - Xoffset/2, y: Ypos + Yoffset + DiscountYoffset})

        }else{
            tl
            .set('.product1', {x: Xpos - Xoffset/2, y: Ypos})
            .set('.product2', {x: Xpos + Xoffset/2, y: Ypos})
            .set('.product3', {x: Xpos - Xoffset/2, y: Ypos + Yoffset})
            .set('.product4', {x: Xpos + Xoffset/2, y: Ypos + Yoffset})
            .set('.product1-title', {x: Xpos - Xoffset/2, y: Ypos + DiscountYoffset})
            .set('.product2-title', {x: Xpos + Xoffset/2, y: Ypos + DiscountYoffset})
            .set('.product3-title', {x: Xpos - Xoffset/2, y: Ypos + Yoffset + DiscountYoffset})
            .set('.product4-title', {x: Xpos + Xoffset/2, y: Ypos + Yoffset + DiscountYoffset})

        }

        const addEndframeClass = () => {
            products.classList.add('endframe')
        }

        tl
            .call(addEndframeClass)
            .to('.logo', {
                y:-4,
                scale:0.95,
                duration: duration,
                ease: ease
            }, '<')
            .to('.product1', {
                scale: 0.52,
                opacity: 1,
                ease: ease,
                duration: endDuration,
            }, '<')
            .to('.product1-title', {
                scale: 0.52,
                opacity: 1,
                ease: ease,
                duration: endDuration,
            }, '<')
            .to('.product2', {
                scale: 0.52,
                opacity: 1,
                ease: ease,
                duration: endDuration,
            }, '<' + (delay / 1.5))
            .to('.product2-title', {
                scale: 0.52,
                opacity: 1,
                ease: ease,
                duration: endDuration,
            }, '<')
            .to('.product3', {
                scale: 0.52,
                opacity: 1,
                ease: ease,
                duration: endDuration,
            }, '<' + (delay / 1.5))
            .to('.product3-title', {
                scale: 0.52,
                opacity: 1,
                ease: ease,
                duration: endDuration,
            }, '<')
            .to('.product4', {
                scale: 0.52,
                opacity: 1,
                ease: ease,
                duration: endDuration,
            }, '<' + (delay / 1.5))
            .to('.product4-title', {
                scale: 0.52,
                opacity: 1,
                ease: ease,
                duration: endDuration,
            }, '<')
            .to('.cta', {
                scale: 1,
                opacity: 1,
                transformOrigin: ctaOrigin,
                ease: ease,
                duration: endDuration,
            }, '<' + (delay / 1.5))
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
                .to('.logo', {
                    scale: 1.05,
                    ease: ease,
                    duration: 2
                }, '<' + delay * 3)
                .to('.logo', {
                    scale: 1,
                    ease: ease,
                    duration: 2
                }, '<' + delay / 2)
                .to('.product1', {
                    scale: 0.6,
                    ease: ease,
                    duration: 2
                }, '<' + delay / 2)
                .to('.product1', {
                    scale: 0.52,
                    ease: ease,
                    duration: 2
                }, '<' + delay / 2)
                .to('.product2', {
                    scale: 0.6,
                    ease: ease,
                    duration: 2
                }, '<' + delay / 2)
                .to('.product2', {
                    scale: 0.52,
                    ease: ease,
                    duration: 2
                }, '<' + delay / 2)
                .to('.product3', {
                    scale: 0.6,
                    ease: ease,
                    duration: 2
                }, '<' + delay / 2)
                .to('.product3', {
                    scale: 0.52,
                    ease: ease,
                    duration: 2
                }, '<' + delay / 2)
                .to('.product4', {
                    scale: 0.6,
                    ease: ease,
                    duration: 2
                }, '<' + delay / 2)
                .to('.product4', {
                    scale: 0.52,
                    ease: ease,
                    duration: 2
                }, '<' + delay / 2)
                .to('.cta', {
                    scale: 1.05,
                    ease: ease,
                    duration: 2
                }, '<' + delay / 2)
                .to('.cta', {
                    scale: 1,
                    ease: ease,
                    duration: 2
                }, '<' + delay / 2)
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
            .from('.bg', {
                scale: 1.3,
                rotation: '3deg',
                ease: backgroundEase,
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
                scale: 0.56,
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
            const product4HoverTl = gsap.timeline({
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

            product4HoverTl
                .to('.product4', {}, '<')
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
                product4HoverTl.play()
                ctaHoverTl.play()
                productsTl.pause()
            })
            exit.addEventListener('mouseleave', () => {
                product1HoverTl.reverse()
                product2HoverTl.reverse()
                product3HoverTl.reverse()
                product4HoverTl.reverse()
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