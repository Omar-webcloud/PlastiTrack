import type { SVGProps } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function PlastiTrackPngLogo({ className }: { className?: string }) {
  return (
    <Image
      src="https://storage.googleapis.com/aai-web-samples/logo-ad8a4362.png"
      alt="PlastiTrack Logo"
      width={164}
      height={164}
      className={cn(className)}
    />
  );
}

export function PlastiTrackLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.28 13.37l-1.01.38c-.31-.62-.7-1.19-1.16-1.71-.46-.52-1-.98-1.59-1.38l.68-1.85c.28-.77-.04-1.62-.81-1.91-.77-.28-1.62.04-1.91.81l-.68,1.85c-.52-.16-1.06-.26-1.62-.26-.88,0-1.71.18-2.48.51l.24-1.39c.14-.83-.46-1.59-1.29-1.73-.83-.14-1.59.46-1.73,1.29l-.24,1.39c-.58.7-1.01,1.5-1.24,2.37L4.5 12.55c.23-.05.46-.08.7-.08 1.93,0,3.5,1.57,3.5,3.5s-1.57,3.5-3.5,3.5c-.24,0-.47-.03-.7-.08l-.29-2.09c-1.3.64-2.2,1.96-2.2,3.49,0,2.13,1.66,3.88,3.77,3.99l.78-2.92c.31.62.7,1.19,1.16,1.71.46.52,1,.98,1.59,1.38l-.68,1.85c-.28.77.04,1.62.81,1.91.77.28,1.62-.04,1.91-.81l.68-1.85c.52.16,1.06.26,1.62.26.88,0,1.71-.18,2.48-.51l-.24,1.39c-.14.83.46,1.59,1.29,1.73.83.14,1.59-.46,1.73-1.29l.24-1.39c.58-.7,1.01-1.5,1.24-2.37l1.09-1.22c-.23.05-.46.08-.7.08-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5c.24,0,.47.03.7.08l.29,2.09c1.3-.64,2.2-1.96,2.2-3.49,0-2.13-1.66-3.88-3.77-3.99l-.78,2.92z" />
    </svg>
  );
}

export function PlastiTrackLogoV2(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M50,9A41,41,0,1,0,91,50,41,41,0,0,0,50,9Zm0,74A33,33,0,1,1,83,50,33,33,0,0,1,50,83Z" />
      <path d="M59.2,35.33a1,1,0,0,0-1-1H51.8v-3a1,1,0,0,0-2,0v3H43.4a1,1,0,0,0-1,1v5.4h16.8Zm-1.8,4.4H44.2V36.33h13.2Z" />
      <path d="M48.2,55.13a1,1,0,0,0,1-1V45a1,1,0,1,0-2,0v9.1A1,1,0,0,0,48.2,55.13Z" />
      <path d="M53.8,55.13a1,1,0,0,0,1-1V45a1,1,0,0,0-2,0v9.1A1,1,0,0,0,53.8,55.13Z" />
      <path d="M64.6,40.73H37.2a1,1,0,0,0-1,1v1a3,3,0,0,0,3,3H62.6a3,3,0,0,0,3-3v-1A1,1,0,0,0,64.6,40.73Zm-2,4a1,1,0,0,1-1,1H39.2a1,1,0,0,1-1-1v-.4h24.4Z" />
      <path d="M42.6,55.13a1,1,0,0,0,1-1V45a1,1,0,1,0-2,0v9.1A1,1,0,0,0,42.6,55.13Z" />
      <path d="M62.6,55.13a1,1,0,0,0,1-1V48.53a1,1,0,1,0-2,0v6.1A1,1,0,0,0,62.6,55.13Z" />
      <path d="M58.7,59.33H42.1a1,1,0,0,0-1,1.1l2.4,11.4a1,1,0,0,0,1,.9H56.3a1,1,0,0,0,1-.9l2.4-11.4A1,1,0,0,0,58.7,59.33Zm-1.1,11L55.4,60.93h-10l-2.2,9.4Z" />
      <path d="m50.4,26.1c-4.4,0-8-3.6-8-8s3.6-8,8-8,8,3.6,8,8-3.6,8-8,8zm0-14c-3.3,0-6,2.7-6,6s2.7,6,6,6,6-2.7,6-6-2.7-6-6-6z" />
      <path d="m50.4,32.1c-2.2,0-4-1.8-4-4s1.8-4,4-4,4,1.8,4,4-1.8,4-4,4zm0-6c-1.1,0-2,0.9-2,2s0.9,2,2,2,2-0.9,2-2-0.9-2-2-2z" />
      <path d="m55.4,26.1h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1s-0.4,1-1,1z" />
      <path d="m47.4,26.1h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1s-0.4,1-1,1z" />
      <path d="m51.4,22.1c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2c0,0.6-0.4,1-1,1z" />
    </svg>
  );
}

export function PlastiTrackLogoV3(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 164 164"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="82" cy="82" r="82" fill="white" />
      <circle cx="82" cy="82" r="60" stroke="#386641" strokeWidth="4" />
      <path
        d="M76.5 64C72.5 68 71.5 74.5 75.5 79.5C80.5 85.5 89 88.5 95.5 86.5C92.1667 92.5 86.9 98.7 80.5 104L73.5 96L80.5 88L73.5 82L80.5 74L73 68.5L76.5 64Z"
        fill="#6A994E"
      />
      <path
        d="M89 104L96 96L89 88L96 82L89 74L96.5 68.5L93 64C97 68 98 74.5 94 79.5C89 85.5 80.5 88.5 74 86.5C77.3333 92.5 82.6 98.7 89 104Z"
        fill="#A7C957"
      />
      <path
        d="M83.9999 66.5C83.9999 65.42 84.4199 64.94 85.2599 64.06C86.0999 63.18 86.5199 62.5 86.5199 62.02C86.5199 61.24 86.1599 60.85 85.4399 60.85C84.6199 60.85 84.0599 61.32 83.7599 62.26L80.8199 61.24C81.2399 59.56 82.7399 58.21 85.3199 58.21C88.4399 58.21 89.9999 59.86 89.9999 62.14C89.9999 63.4 89.3999 64.63 88.2599 65.98C87.1199 67.33 86.4599 68.23 86.4599 69.1H90.4799V71.62H83.9999V66.5Z"
        fill="#386641"
      />
      <path
        d="M104.975 62.29C104.975 64.93 104.975 67.57 104.975 70.21C104.975 70.84 104.705 71.3 104.165 71.58C103.625 71.86 103.025 71.83 102.515 71.5L99.3949 69.67C98.8549 69.37 98.4949 68.83 98.4949 68.2V60.7C98.4949 59.5 99.3949 58.6 100.475 58.6H102.455C103.955 58.6 104.975 60.03 104.975 62.29Z"
        fill="#386641"
      />
      <path
        d="M100.8 114.5C98.4 114.5 96.6 113.7 95.4 112.1L97.2 110.1C97.9 111.1 98.9 111.7 100.2 111.7C101.9 111.7 102.8 110.6 102.8 108.8V108.7C102.3 109 100.8 109.5 99.3 109.5C95.7 109.5 93.4 107.4 93.4 103.5C93.4 100.1 95.8 98 99.3 98C101.1 98 102.5 98.3 103.4 98.8L103.6 98.1H105.7V108.8C105.7 112.4 103.6 114.5 100.8 114.5ZM100.1 100.3C98.5 100.3 97.5 101.3 97.5 103.2C97.5 105.1 98.6 106.2 100.3 106.2C102 106.2 102.9 105.2 102.9 103.2C102.9 101.2 101.8 100.3 100.1 100.3Z"
        fill="#386641"
      />
      <path
        d="M62 113.8L58.5 107.5H55.4V113.8H52.5V98.1H58.8C62.7 98.1 64.9 100.3 64.9 103.8C64.9 106.1 64 107.7 62.4 108.6L66.2 113.8H62ZM58.8 100.4H55.4V105.2H58.8C61.1 105.2 62.1 104.4 62.1 102.8C62.1 101.2 61.1 100.4 58.8 100.4Z"
        fill="#386641"
      />
      <path
        d="M71.2 113.8H68.3V98.1H71.2V113.8Z"
        fill="#386641"
      />
      <path
        d="M88.4 106.3C88.4 103.7 87.5 102.4 85.7 102.4C83.9 102.4 83 103.7 83 106.3C83 108.9 83.9 110.2 85.7 110.2C87.5 110.2 88.4 108.9 88.4 106.3ZM85.7 114.5C81.2 114.5 79.2 111.4 79.2 106.3C79.2 101.2 81.2 98 85.7 98C90.2 98 92.2 101.2 92.2 106.3C92.2 111.4 90.2 114.5 85.7 114.5Z"
        fill="#386641"
      />
      <path
        d="M81.5 93.3L79.6 91.4C79.1 91.9 78.4 92.4 77.5 92.4C76.2 92.4 75.2 91.5 75.2 90C75.2 88.5 76.2 87.6 77.5 87.6C78.4 87.6 79.1 88.1 79.6 88.6L81.5 86.7C80.5 85.7 79.2 84.9 77.5 84.9C74.6 84.9 72.4 87 72.4 90C72.4 93 74.6 95.1 77.5 95.1C79.2 95.1 80.5 94.3 81.5 93.3Z"
        fill="#386641"
      />
      <path
        d="M109.9 94.3C109.9 93.5 109.5 93 108.7 93C107.9 93 107.3 93.5 107.3 94.3C107.3 95.1 107.9 95.6 108.7 95.6C109.5 95.6 109.9 95.1 109.9 94.3ZM107.5 98.1H110V113.8H107.5V98.1Z"
        fill="#386641"
      />
      <path
        d="M112.6 108.3C112.6 109.4 113.2 110 114 110C114.8 110 115.4 109.4 115.4 108.3V101.4H117.9V108.1C117.9 110.8 116.3 112.1 114 112.1C111.7 112.1 110.1 110.8 110.1 108.1V101.4H112.6V108.3Z"
        fill="#386641"
      />
    </svg>
  );
}


export function BronzeLeaf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_103_2)">
        <path
          d="M32 4C32 4 16 12 16 32C16 52 32 60 32 60C32 60 48 52 48 32C48 12 32 4 32 4Z"
          fill="#CD7F32"
        />
        <path
          d="M32 4C32 4 16 12 16 32C16 52 32 60 32 60C32 60 48 52 48 32C48 12 32 4 32 4Z"
          stroke="#A96628"
          strokeWidth="2"
        />
      </g>
      <path d="M32 4V60" stroke="white" strokeOpacity="0.5" />
      <defs>
        <filter
          id="filter0_d_103_2"
          x="12"
          y="4"
          width="40"
          height="64"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_2"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function SilverDrop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_103_3)">
        <path
          d="M32 4C32 4 16 20 16 36C16 52 32 60 32 60C32 60 48 52 48 36C48 20 32 4 32 4Z"
          fill="#C0C0C0"
        />
        <path
          d="M32 4C32 4 16 20 16 36C16 52 32 60 32 60C32 60 48 52 48 36C48 20 32 4 32 4Z"
          stroke="#A0A0A0"
          strokeWidth="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_103_3"
          x="12"
          y="4"
          width="40"
          height="64"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_3"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_3"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function GoldenSprout(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_103_4)">
        <path
          d="M32 20C32 12 40 4 40 4C40 4 48 12 48 20C48 28 40 36 32 36C24 36 16 28 16 20C16 12 24 4 32 4"
          fill="#FFD700"
        />
        <path
          d="M32 36V60"
          stroke="#FFD700"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M32 20C32 12 40 4 40 4C40 4 48 12 48 20C48 28 40 36 32 36C24 36 16 28 16 20C16 12 24 4 32 4"
          stroke="#DAA520"
          strokeWidth="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_103_4"
          x="12"
          y="4"
          width="40"
          height="64"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function LockedBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5" filter="url(#filter0_d_103_5)">
        <circle cx="32" cy="32" r="28" fill="#B0B0B0" />
        <circle cx="32" cy="32" r="28" stroke="#909090" strokeWidth="2" />
        <path
          d="M38 32H26C24.8954 32 24 32.8954 24 34V42C24 43.1046 24.8954 44 26 44H38C39.1046 44 40 43.1046 40 42V34C40 32.8954 39.1046 32 38 32Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 32V26C28 23.7865 29.7865 22 32 22C34.2135 22 36 23.7865 36 26V32"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_103_5"
          x="0"
          y="4"
          width="64"
          height="64"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_5"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_5"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function PlanetProtectorBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        fill="currentColor"
      />
      <path
        d="M14.12 10.47L12 6.99 9.88 10.47 6 11l2.76 2.18L8.24 17l3.76-2.34L15.76 17l-.52-3.82L18 11l-3.88-.53z"
        fill="currentColor"
      />
    </svg>
  );
}

export function EcoHeroBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function RecycleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 19H4.816a2 2 0 0 1-1.928-2.528L4.816 7" />
      <path d="M12.184 7 11 2.5" />
      <path d="M11 11.5 7.816 7" />
      <path d="M17 19h2.184a2 2 0 0 0 1.928-2.528L19.184 7" />
      <path d="M21.184 7 13 7" />
      <path d="M13 11.5V7" />
      <path d="m13 11.5 4.184 4.5" />
      <path d="m13 11.5-4.184 4.5" />
      <path d="M13 16v5" />
    </svg>
  );
}

export function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export function WaterDropIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.3-4 6.5-2 1.6-3 3.5-3 5.5a7 7 0 0 0 7 7z" />
    </svg>
  );
}

export function UsersIconV2(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 4 13H2a10 10 0 0 0 10 10z" />
      <path d="M12 2a7 7 0 0 1 7 7h2a10 10 0 0 0-10-10z" />
      <path d="M12 2a7 7 0 0 0-7 7H3a10 10 0 0 1 10-10z" />
      <path d="M13 4a7 7 0 0 0-7 7H4a10 10 0 0 1 10-10z" />
    </svg>
  );
}

export function AwardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
