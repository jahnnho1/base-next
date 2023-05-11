import { useRef } from 'react'

export default function FormProduct() {
  const formRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
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
            id="name"
            type="text"
          />
        </div>
      </div>
      <div className="mb-4 col-span-1">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
          Precio
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="price"
          type="text"
        />
      </div>
    </form>
  )
}
