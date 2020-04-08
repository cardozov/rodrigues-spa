import React, { useState } from 'react'

import Fixed from './Fixed'
import SideNav from './Side'

const Navigation = () => {
  const [isOpenned, setIsOpenned] = useState(false)
  const toggle = () => setIsOpenned(!isOpenned)

  return (
    <div style={{paddingBottom: '50px'}}>
      <Fixed toggle={toggle} />
      <SideNav isOpenned={isOpenned} setIsOpenned={setIsOpenned} />

    </div>
  )
}

export default Navigation