import prisma from '@/prisma/db';
import DataTable from './DataTable';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

const Tickets = async () => {
  const tickets = await prisma.ticket.findMany();

  return (
    <div>
      <div className="flex gap-2">
        <Link
          href="/tickets/new"
          className={buttonVariants({ variant: 'default' })}
        >
          New Ticket
        </Link>
      </div>

      <DataTable tickets={tickets} />
    </div>
  );
};

export default Tickets;
