"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import classes from "./AppPrezentation.module.css";

export default function AppPrezentation() {
    const containerRef = useRef<HTMLElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        const track = trackRef.current;
        if (!container || !track) return;

        const sections = gsap.utils.toArray<HTMLElement>(".appPrezentationSection", track);

        if (sections.length < 2) return;

        const getScrollDistance = () => track.scrollWidth - container.clientWidth;

        const tween = gsap.to(track, {
            x: () => -getScrollDistance(),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + getScrollDistance(),
                invalidateOnRefresh: true,
            },
        });

        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
        };
    }, []);


    return(
        <section ref={containerRef} className={classes.appPrezentationContainer}>
            <div ref={trackRef} className={classes.appPrezentationTrack}>
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
            </div>

        </section>
    )
}