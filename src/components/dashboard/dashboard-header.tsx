
'use client';

import { useSearchParams } from 'next/navigation';
import users from '@/data/users.json';

export function DashboardHeader() {
  const searchParams = useSearchParams();
  const isGuest = searchParams.get('guest') === 'true';
  const user = isGuest ? { name: 'Guest' } : users[0];

  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome, {user.name.split(' ')[0]}!</h1>
      <p className="text-muted-foreground">Your every small act creates a big change.</p>
    </div>
  );
}
