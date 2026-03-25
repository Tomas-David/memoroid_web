import classes from "./AppPrezentationCard.module.scss";
import Image from "next/image";
type AppPrezentationCardProps = {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
};

export default function AppPrezentationCard({ title, description, imageSrc, imageAlt }: AppPrezentationCardProps) {
    return (
        <div className={classes.card}>
            <div className={classes.imageWrapper}>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={classes.image}
                />
            </div>
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.description}>{description}</p>
        </div>
    );
}