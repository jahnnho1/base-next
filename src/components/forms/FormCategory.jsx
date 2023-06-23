import { useRef, useState } from 'react'
import { addCategory, editCategory } from '@services/api/category'

export default function FormCategory({ category, title, setOpen, setAlert }) {
  const formRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const form = Object.fromEntries(formData)

    const objFormated = {
      name: form.name,
      image: 'https://picsum.photos/200/300'
    }

    if (category) {
        editCategory(category.id, objFormated)
        .then(
          () =>
            setAlert({
              active: true,
              message: 'La categoria fue editada correctamente.',
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
        addCategory(objFormated)
        .then(
          () =>
            setAlert({
              active: true,
              message: 'La categoria fue agregado correctamente.',
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
            defaultValue={category?.name}
          />
        </div>
      </div>
      <div className="mb-4 col-span-1 flex justify-center items-center">
        <input type="submit" value="Guardar" className="btn btn-primary" />
      </div>
    </form>
  )
}
