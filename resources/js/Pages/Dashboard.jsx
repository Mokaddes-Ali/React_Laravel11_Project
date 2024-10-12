import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AppRoute from '@/Routes/AppRoute';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <>

                   
                            <AppRoute />

            </>
        </AuthenticatedLayout>
    );
}
