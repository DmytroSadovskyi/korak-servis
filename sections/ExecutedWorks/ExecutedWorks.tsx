'use client'
import Image from "next/image";
import { useState } from "react";

export const ExecutedWorks = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="projects section" id="executed-works">
      <div className="container">
        <div className="section-title">
          <h2>Our Executed Works</h2>
          <p>Showcasing our successful installations and solutions</p>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <Image src="/photo-1.jpg" alt="Commercial Executed Work" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="project-content">
              <h3>Industrial Waterproofing</h3>
              <p>Comprehensive waterproofing for industrial facility basement</p>
              <div className="flex justify-between items-center">
                <span>Completed: 2023</span>
                <button className="btn view-btn" onClick={() => handleImageClick("/photo-1.jpg")}>View Image</button>
              </div>
              
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <Image src="/photo-2.jpg" alt="Residential Executed Work" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="project-content">
             <h3>Industrial Waterproofing</h3>
              <p>Comprehensive waterproofing for the balcony</p>
                <div className="flex justify-between items-center">
                <span>Completed: 2022</span>
                <button className="btn view-btn" onClick={() => handleImageClick("/photo-2.jpg")}>View Image</button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <Image src="/photo-3.jpg" alt="Waterproofing Executed Work" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="project-content">
              <h3>Industrial Waterproofing</h3>
              <p>Comprehensive waterproofing for a bridge</p>
              <div className="flex justify-between items-center">
                <span>Completed: 2021</span>
                <button className="btn view-btn" onClick={() => handleImageClick("/photo-3.jpg")}>View Image</button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <Image src="/photo-4.jpg" alt="Commercial Executed Work" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="project-content">
               <h3>Industrial Waterproofing</h3>
              <p>Comprehensive waterproofing for industrial facility basement</p>
              <div className="flex justify-between items-center">
                <span>Completed: 2023</span>
                <button className="btn view-btn" onClick={() => handleImageClick("/photo-4.jpg")}>View Image</button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <Image src="/photo-5.jpg" alt="Residential Executed Work" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="project-content">
              <h3>Residential Security System</h3>
              <p>Smart home security installation with CCTV and mobile monitoring</p>
              <div className="flex justify-between items-center">
                <span>Completed: 2022</span>
                <button className="btn view-btn" onClick={() => handleImageClick("/photo-5.jpg")}>View Image</button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <Image src="/photo-6.jpg" alt="Waterproofing Executed Work" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="project-content">
               <h3>Residential Security System</h3>
              <p>Smart home security installation with CCTV and mobile monitoring</p>
              <div className="flex justify-between items-center">
                <span>Completed: 2021</span>
                <button className="btn view-btn" onClick={() => handleImageClick("/photo-6.jpg")}>View Image</button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <Image src="/photo-7.jpg" alt="Commercial Executed Work" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="project-content">
              <h3>Residential Security System</h3>
              <p>Smart home security installation with CCTV and mobile monitoring</p>
              <div className="flex justify-between items-center">
                <span>Completed: 2023</span>
                <button className="btn view-btn" onClick={() => handleImageClick("/photo-7.jpg")}>View Image</button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <Image src="/photo-8.jpg" alt="Residential Executed Work" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="project-content">
              <h3>Residential Security System</h3>
              <p>Smart home security installation with CCTV and mobile monitoring</p>
              <div className="flex justify-between items-center">
                <span>Completed: 2022</span>
                <button className="btn view-btn" onClick={() => handleImageClick("/photo-8.jpg")}>View Image</button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <Image src="/photo-9.jpg" alt="Waterproofing Executed Work" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="project-content">
              <h3>Commercial Complex Wiring</h3>
              <p>Complete electrical system installation for a 50,000 sq ft commercial complex</p>
              <div className="flex justify-between items-center">
                <span>Completed: 2021</span>
                <button className="btn view-btn" onClick={() => handleImageClick("/photo-9.jpg")}>View Image</button>
              </div>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <Image src="/photo-11.jpg" alt="Residential Executed Work" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="project-content">
               <h3>Commercial Complex Wiring</h3>
              <p>Complete electrical system installation for a 50,000 sq ft commercial complex</p>
              <div className="flex justify-between items-center">
                <span>Completed: 2022</span>
                <button className="btn view-btn" onClick={() => handleImageClick("/photo-11.jpg")}>View Image</button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <Image src="/photo-12.jpg" alt="Waterproofing Executed Work" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="project-content">
               <h3>Commercial Complex Wiring</h3>
              <p>Complete electrical system installation for a 50,000 sq ft commercial complex</p>
              <div className="flex justify-between items-center">
                <span>Completed: 2021</span>
                <button className="btn view-btn" onClick={() => handleImageClick("/photo-12.jpg")}>View Image</button>
              </div>
            </div>
          </div>
        </div>
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