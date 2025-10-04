import Card from '@/components/objectif/Card';
import Modal from '@/components/objectif/Modal';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Objectis',
        href: '/objectifs',
    },
];

const Index = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Objectifs" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* Titre et Boutton */}
                <div className="mb-6 flex justify-between">
                    <h1>Mes Objectifs</h1>
                    <div>
                        <button
                            onClick={() => setOpenModal((v) => !v)}
                            className="flex cursor-pointer gap-1 rounded-md bg-primary px-3 py-1 text-white transition hover:bg-primary/90"
                        >
                            <Plus />
                            Nouvel Objectif
                        </button>
                    </div>
                </div>

                {/* Statistques */}
                <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border bg-card p-4 text-card-foreground shadow">
                        <h3 className="text-sm text-muted-foreground">
                            Nombre total
                        </h3>
                        <span className="text-3xl font-semibold tracking-tight">
                            8
                        </span>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border bg-card p-4 text-card-foreground shadow">
                        <h3 className="text-sm text-muted-foreground">
                            Objectif atteint
                        </h3>
                        <span className="text-3xl font-semibold tracking-tight">
                            25 %
                        </span>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border bg-card p-4 text-card-foreground shadow">
                        <h3 className="text-sm text-muted-foreground">
                            Statistique
                        </h3>
                        <div className="flex items-center justify-center gap-2 font-semibold tracking-tight">
                            <span className="text-md">5 en cours</span>
                            <span className="text-md">2 atteints</span>
                            <span className="text-md">1 abandonné</span>
                        </div>
                    </div>
                </div>

                {/* Liste des Objectifs */}
                <div>
                    <h2 className="mb-3">Liste des objectifs</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {/* Card 1 */}
                        <Card
                            titre="Lire 10 livres d'ici la fin de l'année"
                            echeance="31/12/25"
                            statut="en cours"
                        />

                        {/* Card 2 */}
                        <Card
                            titre="Perdre 10kg d'ici le mois de novembre"
                            echeance="01/11/2025"
                            statut="en cours"
                        />

                        {/* Card 3 */}
                        <Card
                            titre="Apprendre le langage JAVA en 2 mois"
                            echeance="04/12/2025"
                            statut="en cours"
                        />

                        {/* Card 4 */}
                         <Card
                            titre="Apprendre la base de marketing en 2 semaine"
                            echeance="04/10/2025"
                            statut="terminé"
                        />
                      

                        {/* Card 5 */}
                        <Card
                            titre=" Apprendre la base de Storytelling en une
                                    semaine"
                            echeance="10/10/2025"
                            statut=" Abandonné"
                        />
                      
                    </div>
                </div>

                {/* Modal d'enregistrement */}
                {openModal && (
                    <Modal setOpenModal={setOpenModal} />
                )}
            </div>
        </AppLayout>
    );
};

export default Index;
