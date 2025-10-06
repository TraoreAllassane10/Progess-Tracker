import { router } from '@inertiajs/react';
import { X } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';

interface ModalProps {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ setOpenModal }: ModalProps) => {

    const [titre, setTitre] = useState('');
    const [dateCommencement, setDateCommencement] = useState('');
    const [dateEcheance, setDateEcheance] = useState('');

    //Enregistrement d'un objectif
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (titre === '' || dateCommencement === '' || dateEcheance === '') {
            toast.error('Veuillez remplir tous les champs.', {
                duration: 3000,
                richColors: true,
                position: 'top-center',
            });

            return;
        }

        router.post(
            '/objectifs',
            { titre, dateCommencement, dateEcheance },
            {
                onSuccess: () => {
                    setOpenModal((v) => !v);

                    toast.success('Objectif créé avec succès !', {
                        duration: 4000,
                        richColors: true,
                        position: 'top-center',
                    });
                },
                onError: () => {
                    toast.error(
                        "Une erreur s'est produite lors de la création de l'objectif.",
                        {
                            duration: 3000,
                            richColors: true,
                            position: 'top-center',
                        },
                    );

                    setOpenModal((v) => !v);
                },
            },
        );
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition">
            <div className="w-[800px] rounded-xl border bg-card p-4 text-card-foreground shadow">
                <div className="flex justify-between place-items-center">
                    <div className="font-bold mb-4 text-lg tracking-tight">
                        Nouvel Objectif
                    </div>
                    <button
                        onClick={() => setOpenModal((v) => !v)}
                        className="cursor-pointer bg-slate-100 p-1 rounded-xl text-red-500"
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
                            Date du commencement
                        </label>
                        <input
                            type="date"
                            name="date_commencement"
                            value={dateCommencement}
                            onChange={(e) =>
                                setDateCommencement(e.target.value)
                            }
                            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        />
                    </div>

                    <div className="flex flex-1 flex-col gap-2">
                        <label
                            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor=""
                        >
                            Date d'echéance
                        </label>
                        <input
                            type="date"
                            name="date_echeance"
                            value={dateEcheance}
                            onChange={(e) => setDateEcheance(e.target.value)}
                            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        />
                    </div>

                    <div className="flex items-center justify-between pt-0">
                        <button
                            onClick={() => setOpenModal((v) => !v)}
                            className="inline-flex h-8 items-center justify-center gap-2 rounded-md border border-input bg-background px-3 text-xs font-medium whitespace-nowrap shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                        >
                            Annuler
                        </button>

                        <button
                            onClick={handleSubmit}
                            className="inline-flex h-8 items-center justify-center gap-2 rounded-md bg-primary px-3 text-xs font-medium whitespace-nowrap text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                        >
                            Enregistrer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
