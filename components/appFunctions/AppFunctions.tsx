import AppFunctionsCard from "../appFuncrionsCard/AppFunctionsCard";
import classes from "./AppFunctions.module.scss";
import logo from "@/public/images/AI_tutor_vzdy_po_ruce.webp";
export default function AppFunctions() {


    const data =[
    {
        title: "Kardio",
        description: "Cvičení pro zlepšení kardiovaskulární zdraví",
        imageSrc: logo,
        imageAlt: "Kardio cvičení"
    },
    {
        title: "Kardio",
        description: "Cvičení pro zlepšení kardiovaskulární zdraví",
        imageSrc: logo,
        imageAlt: "Kardio cvičení"
    },
    {
        title: "Kardio",
        description: "Cvičení pro zlepšení kardiovaskulární zdraví",
        imageSrc: logo,
        imageAlt: "Kardio cvičení"
    },
    {
        title: "Kardio",
        description: "Cvičení pro zlepšení kardiovaskulární zdraví",
        imageSrc: logo,
        imageAlt: "Kardio cvičení"
    },

]


    return (
        <section className={classes.cardSection}>
            <h2>Druhy cvičení</h2>
            <div className={classes.grid}>
                {data.map((item, index) => (
                    <AppFunctionsCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        imageSrc={item.imageSrc}
                        imageAlt={item.imageAlt}
                    />

                ))}
            </div>
        </section>
    );

}