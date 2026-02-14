import * as React from "react"

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export function Logo({ size = 24, className, ...props }: LogoProps) {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <a href="https://octalmesh.com">
          <rect fill="#161616" width={512} height={512} />
          <path
              fill="#fff"
              d="M168.032,292.438v-72.875l51.53-51.531h72.876l51.531,51.531v72.875l-51.531,51.531h-72.876l-51.53-51.531ZM195.27,109.386l-85.885,85.885v121.459l85.885,85.885h121.459l85.885-85.885v-121.459l-85.885-85.885h-121.459Z"
          />
        </a>
      </svg>
  )
}
