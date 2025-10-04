import Action from '@/components/action/Action';
import ModalAddAction from '@/components/action/ModalAddAction';
import ModalUpdateAction from '@/components/action/ModalUpdateAction';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Actions Quotidiennes',
        href: '/actions',
    },
];

const Index = () => {
    const [openModalAdd, setOpenModalAdd] = useState(false);
    const [openModalUpdate, setOpenModalUpdate] = useState(false);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Actions" />

            {/* Affichage des actions */}
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* Titre et Boutton */}
                <div className="mb-6 flex justify-between">
                    <h1>Mes Actions Quotidiennes</h1>
                    <div>
                        <button
                            onClick={() => setOpenModalAdd((v) => !v)}
                            className="flex cursor-pointer gap-1 rounded-md bg-primary px-3 py-1 text-white transition hover:bg-primary/90"
                        >
                            <Plus />
                            Nouvelle Action
                        </button>
                    </div>
                </div>

                <div className="rounded-xl border bg-card p-4 text-card-foreground shadow">
                    <h1 className="mb-4 text-center font-bold text-card-foreground">
                        Samedi 07 octobre 2025
                    </h1>

                    <div>
                        <Action titre="Deep Work" temps={4} setOpenModalUpdate={setOpenModalUpdate} />
                        <Action titre="Lecture" temps={1} setOpenModalUpdate={setOpenModalUpdate}  />
                        <Action titre="Sport" temps={1} setOpenModalUpdate={setOpenModalUpdate}  />
                        <Action titre="Méditation" temps={0.5} setOpenModalUpdate={setOpenModalUpdate}  />
                    </div>
                </div>
            </div>

            {/* Modal Ajout Action */}
            {
                openModalAdd && (
                  <ModalAddAction setOpenModalAdd={setOpenModalAdd} />
                )
            }

            {/* Modal de modification Action */}
            {
                openModalUpdate && (
                  <ModalUpdateAction setOpenModalUpdate={setOpenModalUpdate} />
                )
            }
        </AppLayout>
    );
};

export default Index;
