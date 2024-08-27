/* eslint-disable react/prop-types */

import { useState } from "react"

const Userprofile = ({ userdata }) => {
    const{name,email,company}=userdata
    const [bioData, setbioData] = useState({})
    
    const handleShow = () => {
        bioData ? setbioData('') : setbioData(
            {
                names: company.name,
                catchPhrase: company.catchPhrase,
                bs:company.bs
                
            }
        )
    }

  return (
      <div className="mx-auto ">
          <p>name:{name }</p>
          <p>Email:{email}</p>
          <button type="button" onClick={handleShow} className="border border-black w-28">{bioData?'hideDetails':'showDetails'}</button>
          {bioData && <div>
              <p>{bioData.names}</p>
              <p>{bioData.catchPhrase}</p>
              <p>{bioData.bs}</p>

          </div>}
    </div>
  )
}

export default Userprofile