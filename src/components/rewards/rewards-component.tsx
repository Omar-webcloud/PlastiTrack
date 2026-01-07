'use client';
import { useSearchParams } from 'next/navigation';
import { Rewards } from "@/components/dashboard/rewards";
import users from '@/data/users.json';
import { Button } from '@/components/ui/button';

export function RewardsComponent() {
    const searchParams = useSearchParams();
    const isGuest = searchParams.get('guest') === 'true';
    const user = isGuest ? { name: 'Guest' } : users[0];

    return (
        <div className="bg-background min-h-screen">
            <main className='p-6 space-y-6 w-full md:max-w-2xl md:mx-auto md:py-10'>
                <div>
                    <h1 className="text-3xl font-bold">Hi {user.name.split(' ')[0]}!</h1>
                    <p className="text-muted-foreground">Let's see what your plastic-free journey has earned</p>
                </div>
                <Rewards />
                 <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-full text-lg">Redeem Points</Button>
            </main>
        </div>
    )
}
