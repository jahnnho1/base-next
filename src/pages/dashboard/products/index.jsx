import Link from 'next/link'
import { allProducts, getProducts } from '@services/api/product'
import { PlusIcon } from '@heroicons/react/solid'
import TableProducts from '@components/tables/tableProducts'
import { useEffect, useState } from 'react'
import useAlert from '@hooks/useAlert'
import Alert from '@components/commons/Alert'
import Modal from '@components/commons/Modal'
import FormProduct from '@components/forms/FormProduct'

export default function HomeProducts() {
  const [open, setOpen] = useState(false)
  const { alert, setAlert, toggleAlert } = useAlert()

  const [tableDataProducts, setTableDataProducts] = useState([])
  useEffect(() => {
    getProducts(10, 1)
      .then((res) => {
        setTableDataProducts(res.props.data)
      })
      .catch((err) => console.log(err))
  }, [alert])

  return (
    <>
      <ul className="flex space-x-2 rtl:space-x-reverse">
        <li>
          <Link href="/dashboard" className="text-primary hover:underline">
            Inicio Dashboard
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span> Productos</span>
          <Alert alert={alert} handleClose={toggleAlert} />
        </li>
      </ul>
      <div className="pt-5">
        <div className="mb-6 grid grid-cols-1 lg:grid-cols-5">
          <div className="panel h-full lg:col-span-4 order-last lg:order-none ">
            <TableProducts
              tableDataProducts={tableDataProducts}
              setAlert={setAlert}
            />
          </div>
          <div className="mb-5 flex justify-center items-center lg:col-span-1  order-first lg:order-none">
            <button
              type="button"
              className="btn btn-primary self-start mt-4"
              onClick={() => setOpen(true)}
            >
              <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              Agregar producto
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <Modal open={open} setOpen={setOpen}>
          <FormProduct
            setAlert={setAlert}
            setOpen={setOpen}
            title="Crear nuevo producto"
          />
        </Modal>
      ) : null}
    </>
  )
}
