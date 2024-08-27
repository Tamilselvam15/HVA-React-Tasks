/* eslint-disable react/prop-types */
const TeaDisplay = ({name,origin,description}) => {
  return (
      <div className="border border-black rounded-md w-full h-44 m-auto p-5  bg-slate-400">
          <p className="text-white font-serif">Tea Name:{name }</p>
          <p className="text-white  font-serif">Origin:{origin }</p>
          <p className="text-white  font-serif">Discription:{ description}</p>
    </div>
  )
}

export default TeaDisplay