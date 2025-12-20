
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ invitados }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Lista de Invitados
                </h2>
            }
        >
            <Head title="Invitados" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className=" shadow-sm sm:rounded-lg bg-gray-800 light:bg-white border-t-4 border-blue-500">
                        <div className="p-6 text-gray-900 dark:text-gray-100">

                            <div className="overflow-x-auto bg-gray-500/10 rounded-lg">
                                <table className="min-w-full text-left text-sm whitespace-nowrap">
                                    <thead className="uppercase tracking-wider border-b-2 border-gray-700 bg-gray-800 text-blue-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">Nombre</th>
                                            <th scope="col" className="px-6 py-4">Edad</th>
                                            <th scope="col" className="px-6 py-4">Familia</th>
                                            <th scope="col" className="px-6 py-4 text-right">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-700 bg-gray-800">
                                        {invitados.data.map((guest) => (
                                            <tr key={guest.id} className="hover:bg-gray-700/50 transition-colors">
                                                <td className="px-6 py-4 font-medium text-white">{guest.nombre}</td>
                                                <td className="px-6 py-4 text-gray-300">{guest.edad}</td>
                                                <td className="px-6 py-4 text-gray-300">
                                                    {guest.familia ? (
                                                        <Link href={route('families.show', guest.familia.id)} className="hover:text-[#D4AF37] hover:underline">
                                                            {guest.familia.apellido}
                                                        </Link>
                                                    ) : 'N/A'}
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <Link
                                                        href={route('invitados.show', guest.id)}
                                                        className="text-blue-400 hover:text-blue-300 hover:underline uppercase text-xs tracking-wider"
                                                    >
                                                        Ver
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                        {invitados.data.length === 0 && (
                                            <tr>
                                                <td colSpan="4" className="px-6 py-4 text-center text-gray-500 italic">
                                                    No hay invitados registrados.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="mt-6 flex justify-center">
                                {invitados.links.map((link, key) => (
                                    link.url ? (
                                        <Link
                                            key={key}
                                            href={link.url}
                                            className={`px-3 py-1 mx-1 border rounded text-sm ${link.active ? 'bg-blue-600 text-white border-blue-600' : 'text-gray-400 border-gray-600 hover:bg-gray-700'}`}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    ) : (
                                        <span
                                            key={key}
                                            className="px-3 py-1 mx-1 border rounded text-sm text-gray-600 border-gray-700 cursor-not-allowed"
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    )
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
