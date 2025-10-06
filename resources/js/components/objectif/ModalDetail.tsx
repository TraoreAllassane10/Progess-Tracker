import { router } from '@inertiajs/react';
import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Spinner } from '../ui/spinner';

interface ModalDetailProps {
    id: number;
    setOpenModalDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

interface data {
    titre: string;
    date_commencement: string;
    date_echeance: string;
    statut: string;
}

const ModalDetail = ({ setOpenModalDetail, id }: ModalDetailProps) => {
    const [data, setData] = useState<data>();

    const [loading, setLoading] = useState(true);

    //Récupération des données de l'objectif au render du composant
    useEffect(() => {
        fetchData();
    }, []);

    //Fonction pour récupérer les données de l'objectif
    async function fetchData() {
        await fetch(`/objectifs/${id}`, { method: 'GET' })
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }

    // Function de mise à jour de statut
    const changeStatut = (statut: string) => {
        setLoading(true);

        router.post(
            `objectifs/${id}/toggle-statut`,
            { statut },
            {
                onSuccess() {
                    toast.success("Mise à jour du statut d'un objectif !", {
                        duration: 4000,
                        richColors: true,
                        position: 'top-center',
                    });

                    setLoading(false);

                    setOpenModalDetail((v) => !v);
                },
                onError() {
                    toast.error(
                        'Une erreur est survenue lors de la mise à jour du statut !',
                        {
                            duration: 3000,
                            richColors: true,
                            position: 'top-center',
                        },
                    );

                    setLoading(false);

                    setOpenModalDetail((v) => !v);
                },
            },
        );
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition">
            {loading ? (
                <div className="absolute flex items-end justify-center">
                    <Spinner className="size-14" />
                </div>
            ) : (
                <div className="relative w-[800px] rounded-xl border bg-card p-4 text-card-foreground shadow">
                    <div className="flex place-items-center justify-between">
                        <div className="font-semiBold mb-4 text-lg tracking-tight"></div>
                        <button
                            onClick={() => setOpenModalDetail((v) => !v)}
                            className="cursor-pointer rounded-xl bg-slate-100 p-1 text-red-500"
                        >
                            <X />
                        </button>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="text-lg font-bold text-card-foreground">
                            {data?.titre}
                        </h1>
                        <span>
                            Du {data?.date_commencement} au{' '}
                            {data?.date_echeance}
                        </span>

                        <hr className="w-full border" />

                        {/* Affichage des habitudes lié a cet objectif */}
                        <div>
                            <h2>Historique des habitudes</h2>
                            <p>(plus tard)</p>
                        </div>

                        {/* Affichage des actions lié a cet objectif */}
                        <div>
                            <h2>Historiques des actions</h2>
                            <p>(plus tard)</p>
                        </div>

                        <hr className="w-full border" />

                        {/*Les boutons de modification de statut*/}
                        <div className="flex items-center justify-center gap-4">
                            {data?.statut !== 'en cours' && (
                                <button
                                    onClick={() => changeStatut('en cours')}
                                    className="rounded bg-yellow-500 p-1 text-white transition hover:bg-yellow-500/80"
                                    disabled={data?.statut === 'en cours'}
                                >
                                    Lancé
                                </button>
                            )}

                            {data?.statut !== 'abandonné' && (
                                <button
                                    onClick={() => changeStatut('abandonné')}
                                    className="rounded bg-red-500 p-1 text-white transition hover:bg-red-500/80"
                                    disabled={data?.statut === 'abandonné'}
                                >
                                    Abandonner
                                </button>
                            )}

                            {data?.statut !== 'terminé' && (
                                <button
                                    onClick={() => changeStatut('terminé')}
                                    className="rounded bg-green-500 p-1 text-white transition hover:bg-green-500/80"
                                    disabled={data?.statut === 'terminé'}
                                >
                                    Terminer
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalDetail;
