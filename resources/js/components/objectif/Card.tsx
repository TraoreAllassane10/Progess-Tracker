interface CardProps {
    titre: string;
    echeance: string;
    statut: string;
}
const Card = ({ titre, echeance, statut }: CardProps) => {
    return (
        <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="flex flex-col gap-4 p-4">
                <h3 className="font-semibold text-card-foreground">{titre}</h3>
                <span>Echéance : {echeance}</span>
                <span>
                    Statut : <span className="text-yellow-500">{statut}</span>
                </span>
            </div>

            <hr className="w-full border" />
            <div className="flex justify-end gap-3 p-4">
                <a href="" className="rounded bg-primary px-1 text-white">
                    Détail
                </a>
                <a href="" className="rounded bg-blue-500 px-1 text-white">
                    Modifier
                </a>
                <a href="" className="rounded bg-red-500 px-1 text-white">
                    Supprimer
                </a>
            </div>
        </div>
    );
};

export default Card;
