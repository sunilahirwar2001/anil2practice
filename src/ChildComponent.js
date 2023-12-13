// import React from 'react'

// const ChildComponent = (props) => {
//       const dataToSend = {nameL:"SUnukl"};
//      props.sendDataToParent(dataToSend);
//   return (
//     <div>
//         <p>Data sent to Parent</p>
//     </div>
//   )
// }

// export default ChildComponent


import React from 'react'

const ChildComponent = (props) => {
    const data = {name:"ANil",emailL:"aisnis@gmail.com"};
  return (
    <div>
      <button onClick={()=>props.alert(data)}>Click me</button>
    </div>
  )
}

export default ChildComponent
