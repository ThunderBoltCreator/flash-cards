import { type Ref, type SVGProps, forwardRef } from 'react'
const CloseEye = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg height={24} ref={ref} width={24} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path d={'M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'} />
    <path
      d={
        'M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1Zm-9.87 4a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z'
      }
    />
  </svg>
)
const ForwardRef = forwardRef(CloseEye)

export default ForwardRef
