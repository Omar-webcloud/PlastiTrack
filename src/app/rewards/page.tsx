'use client';
import { useSearchParams } from 'next/navigation';
import { AppHeader } from "@/components/app-header";
import { Rewards } from "@/components/dashboard/rewards";
import users from '@/data/users.json';

export default function RewardsPage() {
    const searchParams = useSearchParams();
    const isGuest = searchParams.get('guest') === 'true';
    const user = isGuest ? { name: 'Guest' } : users[0];

    return (
        <div className="bg-background min-h-screen">
            <AppHeader title={`Hi ${user.name.split(' ')[0]}!`} />
            <Rewards />
        </div>
    )
}