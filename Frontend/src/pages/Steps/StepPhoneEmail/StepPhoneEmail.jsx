import React from 'react'

const StepPhoneEmail = ({ onNext }) => {
  return (
    <div>
        <div>Phone or Email component</div>
        <button onClick={onNext}>Next</button>
    </div>
  )
}

export default StepPhoneEmail