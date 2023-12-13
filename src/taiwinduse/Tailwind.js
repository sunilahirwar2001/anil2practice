import React from 'react'

const Tailwind = () => {
  return (
//       <div className="columns-sm ...">
//   <img className="w-full aspect-video ..." src="..." />
//   <img className="w-full aspect-square ..." src="..." />
//   <img className="w-full aspect-video ..." src="..." />
//   <img className="w-full aspect-square ..." src="..." />
//   <img className="w-full aspect-video ..." src="..." />
//   <img className="w-full aspect-square ..." src="..." />
//     </div>

/* <div className="columns-3">
  <p>Well, let me tell you something, ...</p>
  <p classNameName="break-before-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
  <p classNameName="">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div> */

/* <div className="columns-2">
<p  classNameName="break-inside-avoid-column">Maybe we can live without...</p>
  <p>Well, let me tell you something, ...</p>
  <p>Sure, go ahead, laugh...</p>
  <p>Look. If you think this is...</p>
</div> */


/* <div className="box-border h-32 w-32 p-4 border-4 ..."> */
/* <div className="box-content h-32 w-32 p-4 border-4 ...">
<span  className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 border-box ...">
  Hello<br />
  World
</span>
<span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
  Hello<br />
  World
</span>
</div> */
<>
<div>
  When controlling the flow of text, using the CSS property
  <span className="inline">display: inline</span>
  will cause the text inside the element to wrap normally.
  While using the property <span className="inline-block">display: inline-block</span>
  will wrap the element to prevent the text inside from extending beyond its parent.
  Lastly, using the property <span className="block">display: block</span>
  will put the element on its own line and fill its parent.
</div>
<div className="p-4">
  <div className="flow-root ...">
    <div className="my-4 ...">Well, let me tell you something, ...</div>
  </div>
  <div className="flow-root ...">
    <div className="my-4 ...">Sure, go ahead, laugh if you want...</div>
  </div>
</div>
<div classNameName="flex items-center">
  <img src="path/to/image.jpg" />
  <div>
    <strong>Andrew Alfred</strong>
    <span>Technical advisor</span>
  </div>
</div>
<div className="table w-full ...">
  <div className="table-header-group ...">
    <div className="table-row">
      <div className="table-cell text-left ...">Song</div>
      <div className="table-cell text-left ...">Artist</div>
      <div className="table-cell text-left ...">Year</div>
    </div>
  </div>
  <div className="table-row-group">
    <div className="table-row">
      <div className="table-cell ...">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
      <div className="table-cell ...">Malcolm Lockyer</div>
      <div className="table-cell ...">1961</div>
    </div>
    <div className="table-row">
      <div className="table-cell ...">Witchy Woman</div>
      <div className="table-cell ...">The Eagles</div>
      <div className="table-cell ...">1972</div>
    </div>
    <div className="table-row">
      <div className="table-cell ...">Shining Star</div>
      <div className="table-cell ...">Earth, Wind, and Fire</div>
      <div className="table-cell ...">1975</div>
    </div>
  </div>
</div>
<span class="inline-grid grid-cols-3 gap-4">
  <span>01</span>
  <span>02</span>
  <span>03</span>
  <span>04</span>
  <span>05</span>
  <span>06</span>
</span>
<span class="inline-grid grid-cols-3 gap-4">
  <span>01</span>
  <span>02</span>
  <span>03</span>
  <span>04</span>
  <span>05</span>
  <span>06</span>
</span>
<img class="float-right ..." src="path/to/image.jpg"/>
<p>Maybe we can live without libraries, people like you and me. ...</p>
<img class="float-right md:float-left" src="path/to/image.jpg"/>

</>
  )
}
                                                                                                                              
export default Tailwind
