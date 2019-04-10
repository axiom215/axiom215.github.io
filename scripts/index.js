
var app = {};
app.ajax = 4;
app.ui = {
    particle:false,
    particles:function(){
        nb = 100;
        particlesJS('particles-js', {
            particles: {
                color: '#000000',
                color_random: true,
                shape: 'circle', // "circle", "edge" or "triangle"
                opacity: {
                    opacity: 0.4,
                    anim: {
                        enable: true,
                        speed: 10,
                        opacity_min: 0,
                        sync: true
                    }
                },
                size: 1,
                size_random: true,
                nb: nb,
                line_linked: {
                    enable_auto: true,
                    distance: 300,
                    color: '#333333', // particles line color
                    opacity: .4,
                    width: 1,
                    condensed_mode: {
                        enable: true,
                        rotateX: 300,
                        rotateY: 300
                    }
                },
                anim: {
                    enable: true,
                    speed: 2
                }
            },
            interactivity: {
                enable: true,
                mouse: {
                    distance: 300
                },
                detect_on: 'window', // "canvas" or "window"
                mode: 'grab', // "grab" of false
                line_linked: {
                    opacity: .4
                },
                events: {
                    onclick: {
                        enable: true,
                        mode: 'push', // "push" or "remove"
                        nb: 1
                    },
                    onresize: {
                        enable: true,
                        mode: 'bounce', // "out" or "bounce"
                        density_auto: true,
                        density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
                    }
                }
            },
            /* Retina Display Support */
            retina_detect: true
        });
    },
}

$(function () {
    app.ui.particles();
});

var delay = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();