"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import classes from "./AppPrezentation.module.css";

export default function AppPrezentation() {
    const containerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        if (!container) return;

        const sections = gsap.utils.toArray<HTMLElement>(
            ".appPrezentationSection",
            container
        );

        if (sections.length < 2) return;

        const tween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + container.offsetWidth,
            },
        });

        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
        };
    }, []);


    return(
        <section ref={containerRef} className={classes.appPrezentationContainer}>
            <div className={`${classes.appPrezentationSection} appPrezentationSection`}>
                <h2>Uč se efektivněji s Memoroidem</h2>
                <p>Mobilní aplikace pro efektivní učení pomocí AI</p>
            </div>
            <div className={`${classes.appPrezentationSection} appPrezentationSection`}>
                <h2>Flashcards</h2>
                <p>Vytvářej a prohlížej flashcards pro efektivní zapamatování.</p>
            </div>
            <div className={`${classes.appPrezentationSection} appPrezentationSection`}>
                <h2>Kvízy</h2>
                <p>Otestuj své znalosti pomocí interaktivních kvízů.</p>
            </div>

        </section>
    )
}