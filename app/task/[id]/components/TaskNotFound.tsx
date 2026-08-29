import React from 'react';
import Link from 'next/link';

type TaskNotFoundProps = {
    id: string;
};

export default function TaskNotFound({ id }: TaskNotFoundProps) {
    return (
        <main className="min-h-screen p-8 bg-gray-100">
        <div className="max-w-2x1 mx-auto bg-white p-8 rounded-x1 shadow-lg border border-fray-100 text-center">
        <h1 className="text-2x1 font-bold text-gray-800 mb-2">Tugas Tidak Ditemukan</h1>
        <p className="text-gray-500 mb-6">Tugas dengan ID #{id} tidak ada dalam daftar data.</p>
        <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition">
             ← Kembali ke Daftar Tugas
        </Link>
        </div>
        </main>
    )
}