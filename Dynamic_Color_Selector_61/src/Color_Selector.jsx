/* eslint-disable react/prop-types */

const Color_Selector = (props) => {
    const {fn,clas } = props;
  return (
      <div className="border border-solid w-96 h-40 grid grid-cols-4 items-center mt-12 rounded-md bg-red-400 ">
          <button onClick={() => fn('bg-red-600')} className={clas} >Red</button>
      <button onClick={() => fn('bg-rose-600')} className={clas}>Rose</button>
      <button onClick={() => fn('bg-slate-600')} className={clas}>Slate</button>
      <button onClick={() => fn('bg-gray-600')} className={clas}>Gray</button>
      <button onClick={() => fn('bg-zinc-600')} className={clas}>Zinc</button>
      <button onClick={() => fn('bg-stone-600')} className={clas}>Stone</button>
      <button onClick={() => fn('bg-orange-600')} className={clas}>Orange</button>
      <button onClick={() => fn('bg-yellow-200')} className={clas}>Yellow</button>
      <button onClick={() => fn('bg-lime-600')} className={clas}>Lime</button>
      <button onClick={() => fn('bg-green-600')} className={clas}>Green</button>
      <button onClick={() => fn('bg-sky-600')} className={clas}>Sky</button>
      <button onClick={() => fn('bg-violet-600')} className={clas}>Violet</button>
         
    </div>
  )
}

export default Color_Selector