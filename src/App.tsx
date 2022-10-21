import { useState } from 'react'
import duiValidator from './duiValidator';

function App() {
  const [value, setValue] = useState("");
  const [mensaje, setMensaje] = useState("");

  const onSubmit = () => {
    if(duiValidator(value)){
      setMensaje("DUI VALIDO");
    }else {
      setMensaje("DUI INVALIDO");
    }
  }

  return (
    <div className='relative bg-slate-300 w-full min-h-screen flex items-center justify-center flex-col'>
      <div className='w-full max-w-lg text-center flex flex-col gap-16'>
        <h1 className='text-5xl font-bold'>¿Mi DUI es valido?</h1>
        <span className={`${mensaje === 'DUI INVALIDO' ? 'text-red-500' : 'text-blue-500'}`}>{mensaje}</span>
        <form
          className='flex flex-col gap-5 items-center'
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <input
            placeholder='000000000'
            className='rounded p-2 w-full'
            data-testid="dui-input"
            value={value}
            onChange={(e ) => setValue(e.target.value)}
          />
          <button className='bg-blue-700 text-white w-auto py-2 px-3 rounded'>Validar</button>
        </form>
      </div>
    </div>
  )
}

export default App