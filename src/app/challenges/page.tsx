import { Suspense } from 'react';
import { ChallengesComponent } from '@/components/challenges/challenges-component';

export default function ChallengesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChallengesComponent />
    </Suspense>
  );
}
