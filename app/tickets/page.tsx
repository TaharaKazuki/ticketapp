import prisma from '@/prisma/db';
import DataTable from './DataTable';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';

const Tickets = async () => {
  const tickets = await prisma.ticket.findMany();

  return (
    <div>
      <div className="flex gap-2">
        <Button asChild variant={'default'}>
          <Link href="/tickets/new">New Ticket</Link>
        </Button>
      </div>

      <DataTable tickets={tickets} />
    </div>
  );
};

export default Tickets;
