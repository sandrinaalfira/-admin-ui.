// PostCard.jsx

import React, { useState } from 'react';

// Asumsi: PostCard menerima properti 'post' atau 'props' yang berisi data
function PostCard(props) {
  const [clicked, setClicked] = useState(false);
  
  // Asumsi data props
  const title = props.title || "Ea Molestias Quasi...";
  const body = props.body || "et iusto sed quo iure voluptatem...";

  // Kelas CSS untuk div card utama (menerapkan persyaratan hover SOAL 02)
  const cardClasses = `
    p-6
    shadow-lg
    rounded-lg
    bg-white
    text-gray-800
    // Kelas transisi untuk animasi yang mulus
    transition duration-300 ease-in-out
    
    // *Pseudoclass/Hover untuk Card:*
    hover:scale-[1.03]      // Ukuran card membesar
    hover:border-2          // Ada garis tepi
    hover:border-special-ref2 // Garis tepi warna merah (Design Token SOAL 01)
    hover:bg-pink-50        // Background merah muda
    max-w-xs // Membatasi lebar agar sesuai dengan tampilan kartu
  `;

  // Kelas CSS untuk tombol
  // Button harus lebih terang saat di-hover (diambil dari persyaratan SOAL 02)
  const buttonClasses = `
    w-full
    py-2
    rounded-md
    text-white
    mt-4
    // Warna default (belum diklik) adalah abu-abu (sesuai gambar kode)
    ${clicked ? 'bg-special-red' : 'bg-gray-600'}
    
    // Kelas transisi untuk animasi hover
    transition duration-150 ease-in-out
    
    // *Pseudoclass/Hover untuk Button:*
    hover:brightness-125 // Membuat tombol lebih terang saat di-hover
    
    // Gaya saat tombol diklik/dinonaktifkan
    ${clicked ? 'opacity-90 cursor-not-allowed' : ''}
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-special-ref2
  `;

  return (
    <div className={cardClasses}>
      <h3 className="text-lg font-bold mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
        {body}
      </p>

      <button 
        className={buttonClasses}
        onClick={() => setClicked(true)}
        disabled={clicked}
      >
        {clicked ? "Sudah diklik" : "Silakan klik"}
      </button>
    </div>
  );
}

export default PostCard;