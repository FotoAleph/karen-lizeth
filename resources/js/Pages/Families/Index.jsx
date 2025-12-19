
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ families }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Lista de Familias
                </h2>
            }
        >
            <Head title="Familias" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 border-t-4 border-[#D4AF37]">
                        <div className="p-6 text-gray-900 dark:text-gray-100">

                            <div className="overflow-x-auto">
                                <table className="min-w-full text-left text-sm whitespace-nowrap">
                                    <thead className="uppercase tracking-wider border-b-2 border-gray-700 bg-gray-800 text-[#D4AF37]">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">Familia</th>
                                            <th scope="col" className="px-6 py-4">Teléfono</th>
                                            <th scope="col" className="px-6 py-4 text-center">Invitados</th>
                                            <th scope="col" className="px-6 py-4 text-right">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-700">
                                        {families.data.map((family) => (
                                            <tr key={family.id} className="hover:bg-gray-700/50 transition-colors">
                                                <td className="px-6 py-4 font-medium text-white">{family.apellido}</td>
                                                <td className="px-6 py-4 text-gray-300">{family.telefono}</td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black bg-[#D4AF37] rounded-full">
                                                        {family.invitados_count}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <Link
                                                        href={route('families.show', family.id)}
                                                        className="text-blue-400 hover:text-blue-300 hover:underline uppercase text-xs tracking-wider"
                                                    >
                                                        Ver Detalles
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                        {families.data.length === 0 && (
                                            <tr>
                                                <td colSpan="4" className="px-6 py-4 text-center text-gray-500 italic">
                                                    No hay familias registradas.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="mt-6 flex justify-center">
                                {families.links.map((link, key) => (
                                    link.url ? (
                                        <Link
                                            key={key}
                                            href={link.url}
                                            className={`px-3 py-1 mx-1 border rounded text-sm ${link.active ? 'bg-[#D4AF37] text-black border-[#D4AF37]' : 'text-gray-400 border-gray-600 hover:bg-gray-700'}`}
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
