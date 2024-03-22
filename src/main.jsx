import React from 'react'
import ReactDOM from 'react-dom/client'
import TextStyler from './components/TextStyler'

function AppLayout() {

  const textValue1 = "He's not the sharpest knife in the drawer.";
  const textValue2 = "The big building was blazing with lights.";
  const textValue3 = "Now you should answer some big questions.";
  const textValue4 = "Get your act together!";

  return (
    <div className='gridContainer'>
      <TextStyler text={textValue1}/>
      <TextStyler text={textValue2}/>
      <TextStyler text={textValue3}/>
      <TextStyler text={textValue4}/>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>,
)
