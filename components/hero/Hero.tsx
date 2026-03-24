import classes from "./Hero.module.css";
import Image from "next/image";
import heroImage from "@/public/mockup.webp";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div>
         <h1 className={classes.heading} >Uč se efektivnějí s <span className={classes.highlight}>Memoroidem</span></h1>
        <h2 className={classes.subheading}>
            Aplikace pro učení se pomocí AI
        </h2>
        <div className={classes.ctoButtons}>
            <a href="https://apps.apple.com/us/app/memoroid/id6760408431" className={classes.ctoButton}>
                Stáhnout na App Store
            </a>
            <a href="#" className={classes.ctoButtonOutline}>
                Stáhnout na Google Play
            </a>
        </div>
      </div>
       
        <div className={classes.heroImageWrapper}>
          <Image
            src={heroImage}
            alt="Hero Image"
            fill
            style={{objectFit: "contain", top:"10%", filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))"}}
            className={classes.heroImage}
          />
        </div>        
    </section>
  );
}





     <section>

        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10">
          
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-base shadow-lg hover:opacity-90 transition"
            style={{ background: "#8756F6" }}
          >
            📱 Stáhnout na App Store
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base border-2 hover:bg-slate-50 transition"
            style={{ borderColor: "#8756F6", color: "#8756F6" }}
          >
            🤖 Stáhnout na Google Play
          </a>
        </div>
      </section>