/**
 * GSAP Animation Scripts
 * 
 * This file contains all GSAP animations for the theme
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Register ScrollTrigger plugin
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // Example animation - fade in on scroll
    gsap.utils.toArray('.post').forEach((post, i) => {
        gsap.from(post, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: post,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

});

