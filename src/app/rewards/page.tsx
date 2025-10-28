import { Suspense } from 'react';
import { RewardsComponent } from '@/components/rewards/rewards-component';

export default function RewardsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RewardsComponent />
    </Suspense>
  );
}
