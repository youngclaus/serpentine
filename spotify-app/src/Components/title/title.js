import React, { useEffect } from "react"
import "./title.css"

const TitleAnimation = () => {
    const animateLetters = () => {
        const letters = document.querySelectorAll('.title span');
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.animation = 'none';
                requestAnimationFrame(() => {
                    letter.style.animation = '';
                });
            }, index * 500); // 500ms delay for each letter
        });
    };

    useEffect(() => {
        animateLetters(); // Animate on mount

        const title = document.querySelector('.title');
        title.addEventListener('mouseover', animateLetters);

        return () => title.removeEventListener('mouseover', animateLetters);
    }, []);

    return( 
        <div className="title">
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
