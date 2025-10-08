import ModalAddHabitude from '@/components/habitude/ModalAddHabitude';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, router, usePage } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Habitudes',
        href: '/habitudes',
    },
];

interface Habitude {
    id: number;
    titre: string;
    frequence: string;
}

interface HabitudeProps {
    habitudes: Habitude[];
    [key: string]: unknown;
}

const Index = () => {
    const { habitudes, dates } = usePage<HabitudeProps>().props;

    const [openModalAdd, setOpenModalAdd] = useState(false);

    // Fonction pour gérer le changement de statut d'une habitude
    const handleCheck = (habitudeId: number, date: string) => {

        console.log(`Habitude ID: ${habitudeId}, Date: ${date}`);
        
        router.post(`habitudes/${habitudeId}/checkin`, {date}, {
            onSuccess() {
                toast.success("Statut mis à jour !");
            },
            onError() {
                toast.error("Une erreur est survenue. Veuillez réessayer.");
            }
        })
    };

    const DateTransformer = (date: string) => {
        if (!date) return "";
        const [annee, jour, mois] = date.split('-');
        
        return `${jour}/${mois}/${annee}`;
    }

    const checked = (checkins, date) => {

        const check = checkins?.map((checkin) => {
           return DateTransformer(checkin.pivot.date) === date ? true : false
        }) 

        return check.includes(true) ? true : false;
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Habitudes" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* Titre et Boutton */}
                <div className="mb-6 flex justify-between">
                    <h1>Mes Habitudes</h1>
                    <div>
                        <button
                            onClick={() => setOpenModalAdd((v) => !v)}
                            className="flex cursor-pointer gap-1 rounded-md bg-primary px-3 py-1 text-white transition hover:bg-primary/80"
                        >
                            <Plus />
                            Nouvelle Habitude
                        </button>
                    </div>
                </div>

                {/* Tableau des Habitudes */}
                <div className="rounded-xl border bg-card p-4 text-card-foreground shadow">
                    <table className="w-full table-auto border-collapse border border-gray-300 text-center">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="w-[120px] border border-gray-300 p-2">
                                    Habitude
                                </th>

                                {dates.map((date, index) => (
                                    <th
                                        key={index}
                                        className="border border-gray-300 p-2"
                                    >
                                        {date}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {habitudes.map((item) => (
                                <tr key={item.id}>
                                    <td className="border border-gray-300 p-2 text-left">
                                        <a href={`/habitudes/${item.id}`}>
                                            {item.titre}
                                        </a>
                                    </td>
                                    {dates.map((date, index) => (
                                        <td
                                            key={index}
                                            className="border border-gray-300 p-2"
                                        >
                                            <input
                                                type="checkbox"
                                                // checked={DateTransformer(item.checkins[0]?.pivot.date) === date && true}
                                                checked={checked(item.checkins, date)} 
                                                className="h-5 w-5"
                                                 onChange={() =>
                                                    handleCheck(item.id, date)
                                                }
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {openModalAdd && (
                <ModalAddHabitude setOpenModalAdd={setOpenModalAdd} />
            )}
        </AppLayout>
    );
};

export default Index;
