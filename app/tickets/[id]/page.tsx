import prisma from '@/prisma/db';
type Props = {
  params: { id: string };
};

const ViewTicket = async ({ params }: Props) => {
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!ticket) {
    return <p className="text-destructive">Ticket Not Found</p>;
  }

  return <div>ViewTicket</div>;
};

export default ViewTicket;
