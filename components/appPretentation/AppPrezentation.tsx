"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AppPrezentationCard from "../appPrezentationCard/AppPrezentationCard";
import classes from "./AppPrezentation.module.scss";

import UcSeRychleJi from "@/public/images/Uc_se_chytre_ne_dele.webp";
import AITutor from "@/public/images/AI_tutor_vzdy_po_ruce.webp";
import MaterialyNaKliknuti from "@/public/images/Materialy_na_jedno_kliknuti.webp";
import EfektivniZapamativani from "@/public/images/Efektivni_zapamatovani.webp";
import UcSeKdekoliv from "@/public/images/Uc_se_kdekoliv_a_kdykoliv.webp";

const cards = [
    {
        title: "Uč se chytře, ne déle",
        description: "Aplikace rozděluje učivo na malé části a pomáhá ti soustředit se jen na to, co opravdu potřebuješ procvičit.",
        imageSrc: UcSeRychleJi,
        imageAlt: "Náhled aplikace Memoroid",
    },
    {
        title: "AI tutor vždy po ruce",
        description: "Chybu ti okamžitě vysvětlí a pomůže pochopit látku bez zdlouhavého hledání informací jinde.",
        imageSrc: AITutor,
        imageAlt: "Flashcards v aplikaci Memoroid",
    },
    {
        title: "Materiály na jedno kliknutí",
        description: "Nahraj poznámky, PDF nebo text a aplikace z nich automaticky vytvoří kartičky, kvízy i shrnutí.",
        imageSrc: MaterialyNaKliknuti,
        imageAlt: "Kvízový režim v aplikaci Memoroid",
    },
     {
        title: "Efektivní zapamatování",
        description: "Díky aktivnímu procvičování a opakování si informace uložíš rychleji a na delší dobu.",
        imageSrc: EfektivniZapamativani,
        imageAlt: "Kvízový režim v aplikaci Memoroid",
    },
    {
        title: "Uč se kdekoliv a kdykoliv",
        description: "Všechna data máš uložená v cloudu a synchronizovaná napříč zařízeními – bez omezení.",
        imageSrc: UcSeKdekoliv,
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