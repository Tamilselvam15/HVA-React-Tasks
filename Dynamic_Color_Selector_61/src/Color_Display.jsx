/* eslint-disable react/prop-types */

const Color_Display = ({color}) => {
  return (
      <div className={`h-40 w-40 border border-solid flex justify-center items-center rounded-lg border-black ${color}`}>{color}</div>
  )
}

export default Color_Display