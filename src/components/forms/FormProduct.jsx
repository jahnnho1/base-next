import { useRef, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { addProduct, editProduct } from '@services/api/product'

import { tableDataCategories } from '@utils/dataTablesExamples'

export default function FormProduct({ product, title, setOpen, setAlert }) {
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
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const form = Object.fromEntries(formData)

    const objFormated = {
      title: form.name,
      price: form.price,
      description: form.description,
      categoryId: form.categoryId,
      images: [
        'https://cdna.artstation.com/p/assets/images/images/046/235/272/smaller_square/pixel-arts-de-un-nino-random-ranita-uwu.jpg?1644605499',
      ],
    }

    if (product) {
      editProduct(product.id, objFormated)
        .then(
          () =>
            setAlert({
              active: true,
              message: 'Product added successfully',
              type: 'success',
              autoClose: false,
            }),
          setOpen(false)
        )
        .catch(
          (err) =>
            setAlert({
              active: true,
              message: err.message,
              type: 'error',
              autoClose: false,
            }),
          setOpen(false)
        )
    } else {
      addProduct(objFormated)
        .then(
          () =>
            setAlert({
              active: true,
              message: 'Product added successfully',
              type: 'success',
              autoClose: false,
            }),
          setOpen(false)
        )
        .catch(
          (err) =>
            setAlert({
              active: true,
              message: err.message,
              type: 'error',
              autoClose: false,
            }),
          setOpen(false)
        )
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-base font-semibold leading-7 text-gray-900 mb-4 text-center">
        {title}
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
            defaultValue={product?.title}
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
          defaultValue={product?.price}
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
          defaultValue={product?.stock || 0}
        />
      </div>
      <div className="mb-4 col-span-1">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="categoryId"
        >
          Categoria
        </label>
        <Select
          placeholder="Select an option"
          options={data}
          name="categoryId"
          defaultValue={product?.category?.id}
        />
      </div>
      <div className="mb-4 col-span-1">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="status">
          Estado
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
        <textarea
          className="caret-pink-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          defaultValue={product?.description || ''}
          name="description"
        ></textarea>
      </div>
      <div className="mb-4 col-span-1 flex justify-center items-center">
        <input type="submit" value="Enviar" className="btn btn-primary" />
      </div>
    </form>
  )
}
