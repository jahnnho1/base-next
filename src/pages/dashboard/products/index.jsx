import Link from 'next/link'
import { tableDataProducts } from '@utils/dataTablesExamples'
import { PlusIcon } from '@heroicons/react/solid'
import TableProducts from '@components/tables/tableProducts'

export default function HomeProducts() {
  function handleClickbtnTest() {
    console.log('click')
  }

  return (
    <>
      <ul className="flex space-x-2 rtl:space-x-reverse">
        <li>
          <Link href="/dashboard" className="text-primary hover:underline">
            Inicio Dashboard
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span> Inicio Productos</span>
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
              Add Product
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
