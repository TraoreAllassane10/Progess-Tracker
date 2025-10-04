import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types'
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: "Objectis",
    href: "/objectifs",
  },
 
];

const Index = () => {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
        <Head title='Objectifs' />
    </AppLayout>
  )
}

export default Index