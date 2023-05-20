import Link from 'next/link'
import { getProducts } from '@services/api/product'
import { PlusIcon } from '@heroicons/react/solid'
import TableProducts from '@components/tables/tableProducts'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function HomeProducts() {
  const router = useRouter()
  function handleClickbtnTest() {
    router.push('/dashboard/products/create')
  }

  const [tableDataProducts, setTableDataProducts] = useState([])
  useEffect(() => {
    getProducts()
      .then((res) => {
        setTableDataProducts(res.props.data)
      })
      .catch((err) => console.log(err))
  }, [])

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
        </li>
      </ul>
      <div className="pt-5">
        <div className="mb-6 grid grid-cols-1 lg:grid-cols-5">
          <div className="panel h-full lg:col-span-4 order-last lg:order-none ">
            <TableProducts tableDataProducts={tableDataProducts} />
          </div>
          <div className="mb-5 flex justify-center items-center lg:col-span-1  order-first lg:order-none">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClickbtnTest}
            >
              <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              Agregar producto
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
