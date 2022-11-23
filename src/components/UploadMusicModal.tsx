import { useRef, useState } from 'react'

import Modal from './Modal'
import { CloudArrowUpIcon } from '@heroicons/react/24/outline'

import type { ChangeEvent } from 'react'
import type { ModalHandlers } from './Modal'

export default function UploadMusicModal(handlers: ModalHandlers) {
  const fileInputElement = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState('Escolha um arquivo')

  function fileInputChanged(e: ChangeEvent) {
    const { current } = fileInputElement
    if (!current) return

    console.log(current.files)
    if (current.files && current.files.length === 1) setFileName(current.files[0].name)
  }

  return (
    <Modal {...handlers}>
      <form className='flex flex-col space-y-4'>
        <input
          required
          id='file-input'
          name='file-input'
          type='file'
          accept='audio/*'
          className='w-0 h-0 hidden overflow-hidden'
          ref={fileInputElement}
          onChange={fileInputChanged}
        />
        <label
          htmlFor='file-input'
          className='flex flex-col items-center cursor-pointer bg-violet-300 hover:bg-violet-400 text-violet-900 p-4 rounded-lg font-bold'
        >
          <CloudArrowUpIcon className='w-6 h-6' />
          <span>{fileName}</span>
        </label>
        <input
          required
          type='text'
          placeholder='Dê um nome a sua música'
          className='bg-neutral-700 focus:border-violet-600 rounded-md'
        />
        <select
          name='albumName'
          className='bg-neutral-700 border-neutral-600 focus:border-violet-600 rounded-md cursor-pointer'
          required
        >
          <option value='#123'>Cool Album Name</option>
          <option value='#321'>Another Album</option>
        </select>
        <button className='button-primary' type='submit'>
          Enviar
        </button>
      </form>
    </Modal>
  )
}
