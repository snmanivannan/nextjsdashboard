import Form from '@/app/ui/charts/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchChartById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Edit Invoice',
  };
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [chart] = await Promise.all([
      fetchChartById(id),
      //  fetchCustomers(),
      ]);

      if (!chart) {
        notFound();
      }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Charts', href: '/dashboard/charts' },
          {
            label: 'Edit Chart',
            href: '/dashboard/charts/${id}/edit',
            active: true,
          },
        ]}
      />
      <Form chart={chart}  />
    </main>
  );
}