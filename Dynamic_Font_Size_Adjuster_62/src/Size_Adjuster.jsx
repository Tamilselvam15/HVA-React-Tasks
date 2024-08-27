/* eslint-disable react/prop-types */

const Size_Adjuster = (props) => {

    const { Size ,size} = props;
  return (
      <div className="m-auto">
          <input type="range"
              onChange={(e) => Size(e.target.value)}
              min='10'
              max='100'
              value={size}
              className="border border-solid"
          />
    </div>
  )
}

export default Size_Adjuster