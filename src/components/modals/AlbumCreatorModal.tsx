import { useRef, useState } from 'react'

import Modal from './Modal'
import { CloudArrowUpIcon, PencilIcon } from '@heroicons/react/24/solid'

import type { ChangeEvent } from 'react'
import type { ModalHandlers } from './Modal'

export default function AlbumCreatorModal(handlers: ModalHandlers) {
  const fileInputElement = useRef<HTMLInputElement>(null)

  const [name, setName] = useState('')
  const [previewUrl, setPreviewUrl] = useState('')

  function fileInputChanged(e: ChangeEvent) {
    const { current } = fileInputElement
    if (!current) return

    const { files } = current

    if (files && files.length === 1) {
      const objectUrl = URL.createObjectURL(files[0])
      setPreviewUrl(objectUrl)
    }
  }

  return (
    <Modal {...handlers}>
      <form className='flex flex-col space-y-4'>
        <input
          required
          id='file-input'
          name='file-input'
          type='file'
          accept='image/*'
          className='w-0 h-0 hidden overflow-hidden'
          ref={fileInputElement}
          onChange={fileInputChanged}
        />
        <label htmlFor='file-input' className='cursor-pointer'>
          {previewUrl ? (
            <div className='group relative w-72 mx-auto aspect-square rounded-md shadow-lg overflow-hidden'>
              <img src={previewUrl} className='object-cover w-full h-full' />
              <div className='hidden group-hover:flex items-center justify-center absolute top-0 left-0 w-full h-full bg-black/50'>
                <PencilIcon className='w-6 h-6' />
              </div>
            </div>
          ) : (
            <div className='flex flex-col items-center bg-violet-300 hover:bg-violet-400 text-violet-900 p-4 rounded-lg font-bold'>
              <CloudArrowUpIcon className='w-6 h-6' />
              <span>Escolha a imagem do álbum</span>
            </div>
          )}
        </label>
        <input
          required
          type='text'
          placeholder='Dê um nome a seu álbum'
          className='bg-neutral-700 focus:border-violet-600 rounded-md'
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <button className='button-primary' type='submit' disabled={!previewUrl || !name}>
          Enviar
        </button>
      </form>
    </Modal>
  )
}
