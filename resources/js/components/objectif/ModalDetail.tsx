import { router } from '@inertiajs/react';
import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

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
            });
    }

    // Function de mise à jour de statut
    const changeStatut = (statut: string) => {
       
            router.post(`objectifs/${id}/toggle-statut`, {statut}, {
                onSuccess(){
                    toast.success("Mise à jour du statut d'un objectif !", {
                         duration: 4000,
                        richColors: true,
                        position: 'top-center',
                    });

                    router.visit("/objectifs");
                },
                onError() {
                    toast.error("Une erreur est survenue lors de la mise à jour du statut !", {
                         duration: 3000,
                        richColors: true,
                        position: 'top-center',
                    });
                }
            })

    }   

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition">
            <div className="w-[800px] rounded-xl border bg-card p-4 text-card-foreground shadow">
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
                        Du {data?.date_commencement} au {data?.date_echeance}
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
                    <div className='flex items-center justify-center gap-4'>
                        <button onClick={() => changeStatut("en cours")} className='bg-yellow-500 hover:bg-yellow-500/80 text-white rounded p-1 transition'>Lancé</button>
                        <button onClick={() => changeStatut("abandonné")} className='bg-red-500 hover:bg-red-500/80 text-white rounded p-1 transition'>Abandonner</button>
                        <button onClick={() => changeStatut("terminé")} className='bg-green-500 hover:bg-green-500/80 text-white rounded p-1 transition'>Terminer</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalDetail;
