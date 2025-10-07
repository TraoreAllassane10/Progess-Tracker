import ModalAddHabitude from '@/components/habitude/ModalAddHabitude';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { useState } from 'react';

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
    const { habitudes } = usePage<HabitudeProps>().props;

    const [openModalAdd, setOpenModalAdd] = useState(false);

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
                                <th className="border border-gray-300 p-2">
                                    04/10
                                </th>
                                <th className="border border-gray-300 p-2">
                                    03/10
                                </th>
                                <th className="border border-gray-300 p-2">
                                    02/10
                                </th>
                                <th className="border border-gray-300 p-2">
                                    01/10
                                </th>
                                <th className="border border-gray-300 p-2">
                                    30/09
                                </th>
                                <th className="border border-gray-300 p-2">
                                    29/09
                                </th>
                                <th className="border border-gray-300 p-2">
                                    28/09
                                </th>
                                <th className="border border-gray-300 p-2">
                                    27/09
                                </th>
                                <th className="border border-gray-300 p-2">
                                    26/09
                                </th>
                                <th className="border border-gray-300 p-2">
                                    25/09
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {habitudes.map((item) => (
                                <tr key={item.id}>
                                    <td className="border border-gray-300 p-2 text-left">
                                        <a href={`/habitudes/${item.id}`}>{item.titre}</a>
                                    </td>
                                    {Array(10)
                                        .fill(0)
                                        .map((_, i) => (
                                            <td
                                                key={i}
                                                className="border border-gray-300 p-2"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="h-5 w-5"
                                                />
                                            </td>
                                        ))}
                                </tr>
                            ))}

                            {/* <tr>
                                <td className="border border-gray-300 p-2 text-left">
                                    <a href="/habitudes/1">Codage</a>
                                </td>
                                {Array(10)
                                    .fill(0)
                                    .map((_, i) => (
                                        <td
                                            key={i}
                                            className="border border-gray-300 p-2"
                                        >
                                            <input
                                                type="checkbox"
                                                className="h-5 w-5"
                                            />
                                        </td>
                                    ))}
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 text-left">
                                    <a href="/habitudes/1">Sport</a>
                                </td>
                                {Array(10)
                                    .fill(0)
                                    .map((_, i) => (
                                        <td
                                            key={i}
                                            className="border border-gray-300 p-2"
                                        >
                                            <input
                                                type="checkbox"
                                                className="h-5 w-5"
                                            />
                                        </td>
                                    ))}
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 text-left">
                                    <a href="/habitudes/1">Ecriture</a>
                                </td>
                                {Array(10)
                                    .fill(0)
                                    .map((_, i) => (
                                        <td
                                            key={i}
                                            className="border border-gray-300 p-2"
                                        >
                                            <input
                                                type="checkbox"
                                                className="h-5 w-5"
                                            />
                                        </td>
                                    ))}
                            </tr> */}
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
