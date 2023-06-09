import { TrashIcon, CogIcon } from '@heroicons/react/solid'
import Modal from '@components/commons/Modal'
import FormProduct from '@components/forms/FormProduct'
import { useEffect, useState } from 'react'
import { deleteProduct } from '@services/api/product'
import { getProducts } from '@services/api/product'

export default function TableProducts({ setAlert }) {
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

  const [tableDataProducts, setTableDataProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const productsPerPage = 10
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const [currentProducts, setCurrentProducts] = useState([])
  const [searchProduct, setSearchProduct] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  //const totalPages = Math.ceil(tableDataProducts.length / productsPerPage)

  function handleSearchProduct() {
    const searchingProduct = document.querySelector('#searchProduct')
    const value = searchingProduct.value
    if (value === '') {
      setCurrentPage(1)
      return
    }
    const products = tableDataProducts.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    )
    console.log(products)
    setSearchProduct(products)
    setTotalPages(Math.ceil(products.length / productsPerPage))
  }

  useEffect(() => {
    getProducts(0, currentPage)
      .then((res) => {
        setTableDataProducts(res.props.data)
      })
      .then(() => {
        const searchingProduct = document.querySelector('#searchProduct')
        if (searchProduct.length === 0 && searchingProduct.value === '') {
          setCurrentProducts(
            tableDataProducts.slice(indexOfFirstProduct, indexOfLastProduct)
          )
          setTotalPages(Math.ceil(tableDataProducts.length / productsPerPage))
        } else {
          setCurrentProducts(
            searchProduct.slice(indexOfFirstProduct, indexOfLastProduct)
          )
        }
      })
      .catch((err) => console.log(err))
  }, [
    currentPage,
    setAlert,
    tableDataProducts,
    indexOfFirstProduct,
    indexOfLastProduct,
    currentProducts,
    searchProduct,
  ])

  const handleChangePage = (changePage, pageNumber) => {
    if (changePage === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1)
      return
    }
    if (changePage === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      return
    }
    if (changePage === 'default') {
      setCurrentPage(pageNumber)
      return
    }
  }

  return (
    <div className="grid grid-cols-1">
      <div className="grid grid-cols-1 mb-5">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Buscar..."
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none  w-full"
            id="searchProduct"
            onChange={() => handleSearchProduct()}
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Buscar
          </button>
        </div>
      </div>
      <div className="table-responsive col-span-1 mb-5">
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
            {currentProducts.map((data) => {
              return (
                <tr key={data.id}>
                  <td>
                    <div className="whitespace-nowrap">{data.title}</div>
                  </td>
                  <td className="text-right">${data.price}</td>
                  <td className="text-center">{data.category.name}</td>
                  <td className="text-center">10</td>
                  <td>{data.description.substring(0, 10) + '...'} </td>
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
      <div className="col-span-1 table-responsive py-5">
        <nav aria-label="Page navigation">
          <ul className="inline-flex -space-x-px">
            <li>
              <a
                href="#"
                className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => handleChangePage('prev')}
              >
                Anterior
              </a>
            </li>
            <li>
              {Array.from({ length: totalPages }, (_, index) => (
                <a
                  href="#"
                  className={
                    currentPage !== index + 1
                      ? `px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`
                      : 'px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                  }
                  key={index}
                  onClick={() => handleChangePage('default', index + 1)}
                  aria-current={currentPage === index + 1 ? 'page' : undefined}
                >
                  {index + 1}
                </a>
              ))}
            </li>

            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => handleChangePage('next')}
              >
                Siguiente
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
