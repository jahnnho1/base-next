import { TrashIcon, CogIcon } from '@heroicons/react/solid'
import Modal from '@components/commons/Modal'
import FormProduct from '@components/forms/FormProduct'
import { useState } from 'react'
import { deleteProduct } from '@services/api/product'

export default function TableProducts({ tableDataProducts, setAlert }) {
  const [productEdit, setProductEdit] = useState(null)
  const [open, setOpen] = useState(false)

  function handleEditProduct(product) {
    setProductEdit(product)
    setOpen(true)
  }

  function formatDate(dateFromDB) {
    const date = new Date(dateFromDB)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  function handleDeleteProduct(productId) {
    deleteProduct(productId)
      .then(() => {
        setAlert({
          active: true,
          message: 'Product added successfully',
          type: 'success',
          autoClose: false,
        })
      })
      .catch((err) => {
        setAlert({
          active: true,
          message: err.message,
          type: 'error',
          autoClose: false,
        })
      })
  }

  return (
    <div className="table-responsive mb-5">
      <table className="table-hover">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoria</th>
            <th>Stock</th>
            <th>Descripcion</th>
            <th>Status</th>
            <th>Fecha Creacion</th>
            <th>Ult. Actualizacion</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tableDataProducts.map((data) => {
            return (
              <tr key={data.id}>
                <td>
                  <div className="whitespace-nowrap">{data.title}</div>
                </td>
                <td className="text-right">${data.price}</td>
                <td className="text-center">{data.category.name}</td>
                <td className="text-center">10</td>
                <td>{data.description.split('...', 10)}</td>
                <td>
                  <div
                    className={`whitespace-nowrap text-center ${
                      data.status === 'active'
                        ? 'text-success'
                        : data.status === 'Pending'
                        ? 'text-secondary'
                        : data.status === 'In Progress'
                        ? 'text-info'
                        : data.status === 'Canceled'
                        ? 'text-danger'
                        : 'text-success'
                    }`}
                  >
                    {data?.status || 'active'}
                  </div>
                </td>
                <td className="text-center">{formatDate(data.creationAt)}</td>
                <td className="text-center">{formatDate(data.updatedAt)}</td>
                <td className="text-center">
                  <TrashIcon
                    className="h-6 w-6 text-red-500 inline cursor-pointer"
                    onClick={() => handleDeleteProduct(data.id)}
                  />
                  <CogIcon
                    className="h-6 w-6 text-black-500 inline cursor-pointer"
                    onClick={() => handleEditProduct(data)}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {open ? (
        <Modal open={open} setOpen={setOpen}>
          <FormProduct
            setAlert={setAlert}
            setOpen={setOpen}
            title="Editar producto"
            product={productEdit}
          />
        </Modal>
      ) : null}
    </div>
  )
}
