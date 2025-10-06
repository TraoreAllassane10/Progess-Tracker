import Card from '@/components/objectif/Card';
import Modal from '@/components/objectif/Modal';
import ModalDetail from '@/components/objectif/ModalDetail';
import ModalUpdate from '@/components/objectif/ModalUpdate';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Objectifs',
        href: '/objectifs',
    },
];

interface objectif {
    id: number;
    titre: string;
    date_commencement: string;
    date_echeance: string;
    statut: string;
    user_id: number;
}

interface data {
    data: objectif[];
}

interface objectifsProps {
    objectifs: data;
    key: unknown;
}

const Index = () => {
    const { objectifs, total, termine, tauxObjectifTermine } = usePage<objectifsProps>().props;

    const [openModal, setOpenModal] = useState(false);
    const [openModalUpdate, setOpenModalUpdate] = useState(false);
    const [openModalDetail, setOpenModalDetail] = useState(false);

    const [id, setId] = useState(0);

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
                            {total}
                        </span>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border bg-card p-4 text-card-foreground shadow">
                        <h3 className="text-sm text-muted-foreground">
                             Nombre d'objectif atteint
                        </h3>
                        <span className="text-3xl font-semibold tracking-tight">
                            {termine}
                        </span>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border bg-card p-4 text-card-foreground shadow">
                        <h3 className="text-sm text-muted-foreground">
                           Taux de succès
                        </h3>
                        <span className="text-3xl font-semibold tracking-tight">
                            {tauxObjectifTermine} %
                        </span>
                    </div>
                </div>

                {/* Liste des Objectifs */}
                <div>
                    <h2 className="mb-3">Liste des objectifs</h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                        {objectifs.data.map((item) => (
                            <Card
                                key={item.id}
                                id={item.id}
                                titre={item.titre}
                                echeance={item.date_echeance}
                                statut={item.statut}
                                openModalUpdate={openModalUpdate}
                                setOpenModalUpdate={setOpenModalUpdate}
                                setOpenModalDetail={setOpenModalDetail}
                                setId={setId}
                            />
                        ))}
                    </div>
                </div>

                {/* Modal d'enregistrement */}
                {openModal && <Modal setOpenModal={setOpenModal} />}

                {/* Modal de modification */}
                {openModalUpdate && (
                    <ModalUpdate setOpenModalUpdate={setOpenModalUpdate} id={id} />
                )}

                {/* Modal de detail */}
                {
                    openModalDetail && (
                        <ModalDetail setOpenModalDetail={setOpenModalDetail} id={id} />
                    )
                }
 
            </div>
        </AppLayout>
    );
};

export default Index;
