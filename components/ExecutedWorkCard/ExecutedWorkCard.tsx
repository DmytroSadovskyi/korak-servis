import { ExecutedWork } from "@/types";
import Image from "next/image";

export const ExecutedWorkCard = ({ executedWork, handleImageClick }: { executedWork: ExecutedWork, handleImageClick: (src: string) => void }) => { 
  return <div className="project-card">
              <div className="project-image">
                <Image src={executedWork.imageSource} alt={executedWork.imageAlt} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="project-content">
                 <h3>{executedWork.title}</h3>
                <p>{executedWork.description}</p>
                <div className="flex justify-between items-center">
        <span>Completed: {executedWork.year}</span>
                  <button className="btn view-btn" onClick={() => handleImageClick(executedWork.imageSource)}>View Image</button>
                </div>
              </div>
            </div>
}
