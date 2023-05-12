import { useRef, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import { tableDataCategories } from '@utils/dataTablesExamples'

export default function FormProduct() {
  const [data, setData] = useState([])
  const formRef = useRef(null)
  const Select = dynamic(() => import('react-select'), { ssr: false })

  const statusSelect = [
    {
      value: 'active',
      label: 'Activo',
    },
    {
      value: 'inactive',
      label: 'Inactivo',
    },
    {
      value: 'suspend',
      label: 'Suspendido',
    },
  ]

  useEffect(() => {
    const obj = tableDataCategories.map(({ id, name }) => ({
      value: id,
      label: name,
    }))
    setData(obj)
    console.log(obj)
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const form = Object.fromEntries(formData)
    console.log(form)
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-base font-semibold leading-7 text-gray-900 mb-4 text-center">
        Product Information
      </h2>
      <div className="grid grid-cols-1">
        <div className="col-span-1 mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Nombre
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            type="text"
            ref={formRef}
          />
        </div>
      </div>
      <div className="mb-4 col-span-1">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
          Precio
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="price"
          type="number"
        />
      </div>
      <div className="mb-4 col-span-1">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="stock">
          Stock
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="stock"
          type="number"
        />
      </div>
      <div className="mb-4 col-span-1">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="categoriesId"
        >
          Categoria
        </label>
        <Select
          placeholder="Select an option"
          options={data}
          name="categoriesId"
        />
      </div>
      <div className="mb-4 col-span-1">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="status">
          Categoria
        </label>
        <Select
          placeholder="Select an option"
          options={statusSelect}
          name="status"
          defaultValue={statusSelect[0]}
        />
      </div>
      <div className="col-span-1 mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="description"
        >
          Descripcion
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="description"
          type="text"
        />
      </div>
      <div className="mb-4 col-span-1 flex justify-center items-center">
        <input type="submit" value="Enviar" className="btn btn-primary" />
      </div>
    </form>
  )
}
