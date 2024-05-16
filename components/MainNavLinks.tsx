'use client';

import { link } from 'fs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Dashboard', href: '/', adminOnly: false },
  { label: 'Tickets', href: '/tickets', adminOnly: false },
  { label: 'Users', href: '/users', adminOnly: true },
];

type MainNavLinksProps = {
  role: string;
};

const MainNavLinks = ({ role }: MainNavLinksProps) => {
  const currentPath = usePathname();

  return (
    <div className="flex items-center gap-1">
      {links
        .filter((link) => !link.adminOnly || role === 'ADMIN')
        .map((link) => (
          <Link
            href={link.href}
            className={`navbar-link ${
              currentPath == link.href &&
              'cursor-default text-primary/70 hover:text-primary/60'
            }`}
            key={link.label}
          >
            {link.label}
          </Link>
        ))}
    </div>
  );
};

export default MainNavLinks;
