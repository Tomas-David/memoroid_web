import { StaticImageData } from "next/image";
import classes from "./AppFunctionsCard.module.scss";
import  Image  from "next/image";
type AppFunctionsCardProps = {
    title: string;
    description: string;
    imageSrc: StaticImageData;
    imageAlt: string;
};


export default function AppFunctionsCard ({ title, description, imageSrc, imageAlt }: AppFunctionsCardProps) {
    return (
        <div className={classes.card}>
            <svg viewBox="0 0 40 2" className={classes.svgLine}>
  <line
    x1="0" y1="1"
    x2="50" y2="1"
    className={classes.line}
  />
</svg>
            <div className={classes.imageWrapper}>
                <Image 
                    src={imageSrc.src} 
                    alt={imageAlt} 
                    className={classes.image}            
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.description}>{description}</p>
        </div>
    );
}