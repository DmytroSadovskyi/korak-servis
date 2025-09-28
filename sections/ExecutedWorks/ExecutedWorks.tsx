'use client'
import Image from "next/image";
import { useState } from "react";
import { ExecutedWorksList } from "@/components/ExecutedWorkList";
import croatianLang from '@/messages/hr.json';

export const ExecutedWorks = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const {executedWorks: {title, subtitle, list, imageAlt,closeButtonAriaLabel}} = croatianLang;

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="projects section" id="executed-works">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <ExecutedWorksList executedWorks={list} handleImageClick={handleImageClick} />
      </div>
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal} aria-label={closeButtonAriaLabel}>&times;</span>
            <Image
              src={selectedImage}
              alt={imageAlt}
              width={800}
              height={600}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}