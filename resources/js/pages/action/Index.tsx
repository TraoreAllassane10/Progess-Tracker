import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types'
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: "Actions Quotidiennes",
    href: "/actions",
  },
 
];

const Index = () => {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
        <Head title='Actions' />
    </AppLayout>
  )
}

export default Index