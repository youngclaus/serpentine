import React from "react"
import "./title.css"

const TitleAnimation = () => {
    const letters = document.querySelectorAll('.title span');

    function animateLetters() {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.animation = 'none';
                requestAnimationFrame(() => {
                    letter.style.animation = '';
                });
            }, index * 500);
        });
    }

setInterval(animateLetters, 10000);
animateLetters();

    return( 
        <div class="title">
            <span>s</span>
            <span>p</span>
            <span>o</span>
            <span>t</span>
            <span>i</span>
            <span>f</span>
            <span>r</span>
            <span>i</span>
            <span>e</span>
            <span>n</span>
            <span>d</span>
            <span>s</span>
        </div>

    )
}

export default TitleAnimation;
