import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="120"
      height="30"
      {...props}
    >
      <style>
        {
          ".logo-text { font-family: 'PT Sans', sans-serif; font-size: 38px; font-weight: 700; } .logo-icon-primary { fill: hsl(var(--primary)); } .logo-icon-accent { fill: hsl(var(--accent)); }"
        }
      </style>
      <g>
        <path
          className="logo-icon-primary"
          d="M22.5,5.1c-1.2,1.4-2,3-2.5,4.8c-1.3,4.9-0.1,10.1,3.2,13.7c3.9,4.2,10,5.4,15,3c1.5-0.7,2.8-1.8,3.9-3.1 c-2.2,0.1-4.4,0.1-6.6,0.1c-4.8,0-9.6,0-14.4,0c-0.9,0-1.2-0.3-1.2-1.2c0-4.8,0-9.6,0-14.4c0-0.9,0.3-1.2,1.2-1.2 C20.3,6.8,21.4,6,22.5,5.1z"
        />
        <path
          className="logo-icon-accent"
          d="M38.6,29.9c1.2-1.4,2-3,2.5-4.8c1.3-4.9,0.1-10.1-3.2-13.7c-3.9-4.2-10-5.4-15-3 c-1.5,0.7-2.8,1.8-3.9,3.1c2.2-0.1,4.4-0.1,6.6,0.1c4.8,0,9.6,0,14.4,0c0.9,0,1.2,0.3,1.2,1.2c0,4.8,0,9.6,0,14.4 C40.2,28.7,39.8,29,38.6,29.9z"
        />
        <text x="50" y="35" className="logo-text fill-foreground">
          SEIIKI
        </text>
      </g>
    </svg>
  );
}
