
import { ExecutedWorkCard } from '../ExecutedWorkCard';
import { ExecutedWork } from '@/types';

export const ExecutedWorksList = ({ executedWorks, handleImageClick }: { executedWorks: ExecutedWork[], handleImageClick: (src: string) => void }) => {
   
  return (
    <ul className='projects-grid'>
      {executedWorks.map((executedWork) => (
        <ExecutedWorkCard key={executedWork.id} executedWork={executedWork} handleImageClick={handleImageClick} />
      ))}
    </ul>
  );
};
