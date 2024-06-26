import { Badge } from './ui/badge';
import { Status } from '@prisma/client';

type Props = {
  status: Status;
};

const statusMap: Record<
  Status,
  { label: string; color: 'bg-red-400' | 'bg-blue-400' | 'bg-green-400' }
> = {
  OPEN: { label: 'Open', color: 'bg-red-400' },
  STARTED: { label: 'Started', color: 'bg-blue-400' },
  CLOSED: { label: 'Closed', color: 'bg-green-400' },
};

const TicketStatusBadge = ({ status }: Props) => {
  const { color, label } = statusMap[status];

  return (
    <Badge className={`${color} text-background hover:${color}`}>{label}</Badge>
  );
};

export default TicketStatusBadge;
