
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Show({ invitado }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Detalle del Invitado
                </h2>
            }
        >
            <Head title={`Invitado - ${invitado.nombre}`} />

            <div className="py-12">
                <div className="mx-auto max-w-3xl sm:px-6 lg:px-8">

                    {/* Back Button */}
                    <div className="mb-6">
                        <Link href={route('invitados.index')} className="text-blue-400 hover:text-white flex items-center gap-2 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                            Volver a Lista de Invitados
                        </Link>
                    </div>

                    <div className="bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 border-t-4 border-blue-500 overflow-hidden">
                        <div className="p-8 text-gray-900 dark:text-gray-100 text-center">

                            <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto flex items-center justify-center mb-6 text-4xl text-blue-400 font-bold border-2 border-blue-500/30">
                                {invitado.nombre.charAt(0).toUpperCase()}
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-2">{invitado.nombre}</h3>
                            <p className="text-gray-400 mb-8">Invitado</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-lg mx-auto">
                                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Edad</p>
                                    <p className="text-lg text-white font-mono">{invitado.edad}</p>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Familia</p>
                                    {invitado.familia ? (
                                        <Link href={route('familias.show', invitado.familia.id)} className="text-lg text-[#D4AF37] hover:underline font-serif">
                                            {invitado.familia.apellido}
                                        </Link>
                                    ) : (
                                        <p className="text-lg text-gray-500">Sin Familia Asignada</p>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
