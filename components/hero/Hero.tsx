import classes from "./Hero.module.css";


export default function Hero() {
  return (
    <section> 
        <h1 className={classes.heading} >Uč se efektivnějí s <span className={classes.highlight} >Memoroidem</span></h1>
        <h2>
            Aplikace pro učení se pomocí AI
        </h2>
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