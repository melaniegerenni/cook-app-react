import React from 'react';
import { GridLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className='flex justify-center'>
        <GridLoader className='mt-10' color="#bddb7e" />
    </div>
  )
}

export default Loader