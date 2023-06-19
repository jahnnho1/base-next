import { TrashIcon, CogIcon } from '@heroicons/react/solid'
import Modal from '@components/commons/Modal'
import FormProduct from '@components/forms/FormProduct'
import { useEffect, useState } from 'react'
import { getCategories, deleteProduct } from '@services/api/categories'

export default function TableCategories({ setAlert }) {
  const [itemEdit, setItemEdit] = useState(null)
  const [open, setOpen] = useState(false)

  function handleEditItem(item) {
    setItemEdit(item)
    setOpen(true)
  }

  function formatDate(dateFromDB) {
    const date = new Date(dateFromDB)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  function handleDeleteItem(itemId) {
    deleteProduct(itemId)
      .then(() => {
        setAlert({
          active: true,
          message: 'El producto fue eliminado correctamente.',
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

  const [dataTableItems, setDataTableItems] = useState([])
  const [searchItem, setSearchItem] = useState([])
  const [currentItems, setCurrentItems] = useState([])

  function handleSearchItem() {
    const searchingItem = document.querySelector('#searchItem')
    const value = searchingItem.value
    const items = dataTableItems.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    )
    setSearchItem(items)
  }

  useEffect(() => {
    getCategories()
      .then((res) => {
        setDataTableItems(res.props.data)
      })
      .then(() => {
        const searchingItem = document.querySelector('#searchItem')
        if (searchingItem.value === '') {
          setCurrentItems(dataTableItems)
        } else {
          setCurrentItems(searchItem)
        }
      })
      .catch((err) => console.log(err))
  }, [searchItem, dataTableItems])

  const statusMap = {
    active: 'text-success',
    Pending: 'text-secondary',
    'In Progress': 'text-info',
    Canceled: 'text-danger',
  }

  return (
    <div className="grid grid-cols-1">
      <div className="grid grid-cols-1 mb-5">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Buscar..."
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none  w-full"
            id="searchItem"
            onChange={() => handleSearchItem()}
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Buscars
          </button>
        </div>
      </div>
      <div className="table-responsive col-span-1 mb-5">
        <table className="table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Fecha Creacion</th>
              <th>Ult. Actualizacion</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((data) => {
              return (
                <tr key={data.id}>
                  <td>
                    <div className="whitespace-nowrap">{data.id}</div>
                  </td>
                  <td className="text-center">{data.name}</td>
                  <td>
                    <div
                      className={`whitespace-nowrap text-center ${
                        statusMap[data.status] || 'text-success'
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
                      onClick={() => handleDeleteItem(data.id)}
                    />
                    <CogIcon
                      className="h-6 w-6 text-black-500 inline cursor-pointer"
                      onClick={() => handleEditItem(data)}
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {open ? (
          <Modal key={itemEdit?.id} open={open} setOpen={setOpen}>
            <FormProduct
              setAlert={setAlert}
              setOpen={setOpen}
              title="Editar producto"
              product={itemEdit}
            />
          </Modal>
        ) : null}
      </div>
    </div>
  )
}
