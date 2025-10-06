import { router } from "@inertiajs/react";
import ModalUpdate from "./ModalUpdate";
import { FormEvent } from "react";
import { toast } from "sonner";

interface CardProps {
    id: number;
    titre: string;
    echeance: string;
    statut: string;
    openModalUpdate: boolean;
    setOpenModalUpdate: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenModalDetail: React.Dispatch<React.SetStateAction<boolean>>;
    setId: React.Dispatch<React.SetStateAction<number>>;
}
const Card = ({
    id,
    titre,
    echeance,
    statut,
    openModalUpdate,
    setOpenModalUpdate,
    setOpenModalDetail,
    setId,
}: CardProps) => {



    // Cette fonction met à jour l'id de l'objectif à modifié(il se trouve dans index) ainsi que le state de controller du modal
    const update = (id: number) => {
        setId(id);
        setOpenModalUpdate((v) => !v);
    }

     // Cette fonction met à jour l'id de l'objectif à afficher(il se trouve dans index) ainsi que le state de controller du modal Detail
      const detail = (id: number) => {
        setId(id);
        setOpenModalDetail((v) => !v);
    }

    //Modification d'un objectif
    const handleDelete = (e: FormEvent) => {
        e.preventDefault();


        router.delete(
            `objectifs/${id}`,
            {
                onSuccess: () => {
                    toast.success('Objectif supprimé avec succès !', {
                        duration: 4000,
                        richColors: true,
                        position: 'top-center',
                    });
                },
                onError: () => {
                    toast.error(
                        "Une erreur s'est produite lors de la suppression de l'objectif.",
                        {
                            duration: 3000,
                            richColors: true,
                            position: 'top-center',
                        },
                    );
                },
            },
        );
    };

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
                <button onClick={() => detail(id)} className="rounded bg-primary hover:bg-primary/80 px-1 text-white">
                    Détail
                </button>
                <button
                    onClick={() => update(id)}
                    className="rounded bg-blue-500 hover:bg-blue-500/80 px-1 text-white"
                >
                    Modifier
                </button>
                <button onClick={handleDelete} className="rounded bg-red-500 hover:bg-red-500/80 px-1 text-white">
                    Supprimer
                </button>
            </div>

        </div>
    );
};

export default Card;
