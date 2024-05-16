import { Priority } from '@prisma/client';
import { Flame } from 'lucide-react';

type Props = {
  priority: Priority;
};

const priorityMap: Record<Priority, { label: string; level: 1 | 2 | 3 }> = {
  HIGH: { label: 'High', level: 3 },
  MEDIUM: { label: 'Medium', level: 2 },
  LOW: { label: 'low', level: 1 },
};

const FLAME_NUM = 3;

const TicketPriority = ({ priority }: Props) => {
  const { level } = priorityMap[priority];

  return (
    <div className="flex justify-between">
      {Array.from({ length: FLAME_NUM }, (_, index) => (
        <Flame
          key={index}
          className={index < level ? 'text-red-500' : 'text-muted'}
        />
      ))}
    </div>
  );
};

export default TicketPriority;
