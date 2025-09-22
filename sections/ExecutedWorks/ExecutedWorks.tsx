'use client'
import Image from "next/image";
import { useState } from "react";
import { ExecutedWorksList } from "@/components/ExecutedWorkList";
import executedWorks from '@/data/executedWorks.json'

export const ExecutedWorks = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
          <h2>Our Executed Works</h2>
          <p>Showcasing our successful installations and solutions</p>
        </div>
        <ExecutedWorksList executedWorks={executedWorks} handleImageClick={handleImageClick} />
      </div>
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <Image
              src={selectedImage}
              alt="Full-size Executed Work"
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