/* eslint-disable react/prop-types */

const CommentList = ({ list }) => {
    
  return (
      <div className="w-4/5 border border-solid m-auto h-2/4  shadow-stone-600 shadow-sm rounded-md overflow-auto hide-scrollbar" >
          {list.map((item ,index) => (
              <div key={index} className="w-full h-12 border border-solid text-center">{item}</div>
          ))}
          

    </div>
  )
}

export default CommentList