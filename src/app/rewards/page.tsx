import { Suspense } from 'react';
import { RewardsComponent } from '@/components/rewards/rewards-component';

export default function RewardsPage() {
  return (
    
    <div className="min-h-screen bg-background lg:mx-[350px]">
      <Suspense fallback={<div>Loading...</div>}>
        <RewardsComponent />
      </Suspense>
    </div>
  );
}