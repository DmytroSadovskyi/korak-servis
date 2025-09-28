import { ExecutedWork } from "@/types";
import Image from "next/image";
import croatianLang from "@/messages/hr.json";

export const ExecutedWorkCard = ({ executedWork, handleImageClick }: { executedWork: ExecutedWork, handleImageClick: (src: string) => void }) => { 

const {executedWorks:{openModalText, executedYearText}} = croatianLang;

  return <li className="project-card">
              <div className="project-image">
                <Image src={executedWork.imageSource} alt={executedWork.imageAlt} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="project-content">
                 <h3>{executedWork.title}</h3>
                <p>{executedWork.description}</p>
                <div className="flex justify-between items-center">
        <span>{executedYearText}: {executedWork.year}</span>
                  <button className="btn view-btn" onClick={() => handleImageClick(executedWork.imageSource)}>{openModalText}</button>
                </div>
              </div>
            </li>
}
