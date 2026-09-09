'use client';

import React, { useState } from 'react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';

type TodoFormProps = {
  onAddTodo: (tittle: string) => void;
};

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  // Local state untuk controlled input form
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validasi sederhana: jangan izinkan input kosong atau hanya spasi
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    // Kirim data ke komponen induk
    onAddTodo(trimmedTitle);

    // Reset input form
    setTitle('');
  };

  return (
    <div className="mb-6 bg-white p-4 rounded-xl border border-gray-70">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Tambahkan tugas baru..."
          className="flex-1 bg-white"
          variantSize="md"
        />
        <Button
          type="submit"
          disabled={!title.trim()}
          variant="default"
          size="md"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md
          hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          Tambah
        </Button>
      </form>
    </div>
  );
}