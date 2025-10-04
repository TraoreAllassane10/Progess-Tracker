import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types'
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: "Habitudes",
    href: "/habitudes",
  },
 
];

const Index = () => {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
        <Head title='Habitudes' />
    </AppLayout>
  )
}

export default Index