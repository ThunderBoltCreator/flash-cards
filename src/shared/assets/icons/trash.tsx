import type { SVGProps } from 'react'

export const Trash = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      fill={'none'}
      height={'16'}
      style={{ cursor: 'pointer' }}
      viewBox={'0 0 16 16'}
      width={'16'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path
        d={
          'M14 4.00011H10.6667V2.88677C10.651 2.45998 10.4668 2.05681 10.1544 1.76563C9.84197 1.47446 9.42684 1.31903 9.00001 1.33344H7.00001C6.57318 1.31903 6.15805 1.47446 5.84563 1.76563C5.53321 2.05681 5.34898 2.45998 5.33334 2.88677V4.00011H2.00001C1.8232 4.00011 1.65363 4.07034 1.52861 4.19537C1.40358 4.32039 1.33334 4.48996 1.33334 4.66677C1.33334 4.84358 1.40358 5.01315 1.52861 5.13818C1.65363 5.2632 1.8232 5.33344 2.00001 5.33344H2.66668V12.6668C2.66668 13.1972 2.87739 13.7059 3.25246 14.081C3.62754 14.4561 4.13624 14.6668 4.66668 14.6668H11.3333C11.8638 14.6668 12.3725 14.4561 12.7476 14.081C13.1226 13.7059 13.3333 13.1972 13.3333 12.6668V5.33344H14C14.1768 5.33344 14.3464 5.2632 14.4714 5.13818C14.5964 5.01315 14.6667 4.84358 14.6667 4.66677C14.6667 4.48996 14.5964 4.32039 14.4714 4.19537C14.3464 4.07034 14.1768 4.00011 14 4.00011ZM6.66668 2.88677C6.66668 2.78011 6.80668 2.66677 7.00001 2.66677H9.00001C9.19334 2.66677 9.33334 2.78011 9.33334 2.88677V4.00011H6.66668V2.88677ZM12 12.6668C12 12.8436 11.9298 13.0132 11.8047 13.1382C11.6797 13.2632 11.5102 13.3334 11.3333 13.3334H4.66668C4.48987 13.3334 4.3203 13.2632 4.19527 13.1382C4.07025 13.0132 4.00001 12.8436 4.00001 12.6668V5.33344H12V12.6668Z'
        }
        fill={'white'}
      />
    </svg>
  )
}