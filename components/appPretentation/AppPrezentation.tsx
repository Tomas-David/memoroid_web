"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AppPrezentationCard from "../appPrezentationCard/AppPrezentationCard";
import classes from "./AppPrezentation.module.scss";

const cards = [
    {
        title: "Uč se efektivněji s Memoroidem",
        description: "Mobilní aplikace pro efektivní učení pomocí AI.",
        imageSrc: "/mockup.webp",
        imageAlt: "Náhled aplikace Memoroid",
    },
    {
        title: "Flashcards",
        description: "Vytvářej a prohlížej flashcards pro efektivní zapamatování.",
        imageSrc: "/mockup.webp",
        imageAlt: "Flashcards v aplikaci Memoroid",
    },
    {
        title: "Kvízy",
        description: "Otestuj své znalosti pomocí interaktivních kvízů.",
        imageSrc: "/mockup.webp",
        imageAlt: "Kvízový režim v aplikaci Memoroid",
    },
     {
        title: "AI Tutor",
        description: "Otestuj své znalosti pomocí interaktivních kvízů.",
        imageSrc: "/mockup.webp",
        imageAlt: "Kvízový režim v aplikaci Memoroid",
    },
    {
        title: "Gamifikace",
        description: "Otestuj své znalosti pomocí interaktivních kvízů.",
        imageSrc: "/mockup.webp",
        imageAlt: "Kvízový režim v aplikaci Memoroid",
    },
];

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

        const getScrollDistance = () => {
            const lastSection = sections[sections.length - 1];
            if (!lastSection) return 0;

            return Math.max(0, Math.ceil(lastSection.offsetLeft + lastSection.offsetWidth - container.clientWidth));
        };

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
                {cards.map((card) => (
                    <div
                        key={card.title}
                        className={`${classes.appPrezentationSection} appPrezentationSection`}
                    >
                        <AppPrezentationCard
                            title={card.title}
                            description={card.description}
                            imageSrc={card.imageSrc}
                            imageAlt={card.imageAlt}
                        />
                    </div>
                ))}
            </div>

        </section>
    )
}