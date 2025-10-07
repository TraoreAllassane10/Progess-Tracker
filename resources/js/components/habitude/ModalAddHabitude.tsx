import { router } from '@inertiajs/react';
import { X } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Spinner } from '../ui/spinner';

interface ModalAddHabitudeProps {
    setOpenModalAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalAddHabitude = ({ setOpenModalAdd }: ModalAddHabitudeProps) => {
    const [loading, setLoading] = useState(false);

    const [titre, setTitre] = useState('');
    const [frequence, setFrequence] = useState('');

    const handleSubmit = () => {

        if (titre === '' || frequence === '' ) {
            toast.error('Veuillez remplir tous les champs.', {
                duration: 3000,
                richColors: true,
                position: 'top-center',
            });

            return;
        }

        setLoading(true);

        router.post(
            'habitudes',
            { titre, frequence },
            {
                onSuccess() {
                    setLoading(false);

                    toast.success('Habitude enregistrée avec succès !', {
                        duration: 4000,
                        richColors: true,
                        position: 'top-center',
                    });

                    setOpenModalAdd(false)
                },

                onError() {
                    setLoading(false);

                    toast.error("Une erreur s'est produite lors de la création de l'objectif.", {
                        duration: 3000,
                        richColors: true,
                        position: 'top-center',
                    });

                    setOpenModalAdd(false)
                }
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
                <div className="w-[800px] rounded-xl border bg-card p-4 text-card-foreground shadow">
                    <div className="flex place-items-center justify-between">
                        <div className="mb-4 text-lg font-bold tracking-tight">
                            Nouvelle Habitude
                        </div>
                        <button
                            onClick={() => setOpenModalAdd((v) => !v)}
                            className="cursor-pointer rounded-xl bg-slate-100 p-1 text-red-500"
                        >
                            <X />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex flex-1 flex-col gap-2">
                            <label
                                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor=""
                            >
                                Titre
                            </label>
                            <input
                                type="text"
                                name="titre"
                                value={titre}
                                onChange={(e) => setTitre(e.target.value)}
                                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                placeholder="Ex: Lire 10 livres d'ici la fin de l'année"
                            />
                        </div>

                        <div className="flex flex-1 flex-col gap-2">
                            <label
                                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor=""
                            >
                                Frequence
                            </label>
                            <input
                                type="text"
                                name="frequence"
                                value={frequence}
                                onChange={(e) => setFrequence(e.target.value)}
                                placeholder="Ex : 10 pages par jour"
                                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            />
                        </div>

                        <div className="flex items-center justify-between pt-0">
                            <button
                                onClick={() => setOpenModalAdd((v) => !v)}
                                className="inline-flex h-8 items-center justify-center gap-2 rounded-md border border-input bg-background px-3 text-xs font-medium whitespace-nowrap shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                            >
                                Annuler
                            </button>

                            <button
                                onClick={handleSubmit}
                                className="inline-flex h-8 items-center justify-center gap-2 rounded-md bg-primary px-3 text-xs font-medium whitespace-nowrap text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                            >
                                {loading ? 'Enregistrement...' : 'Enregistrer'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalAddHabitude;
