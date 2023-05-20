import { TrashIcon, CogIcon } from '@heroicons/react/solid'
import Link from 'next/link'

export default function TableProducts(props) {
  /*function cargarCategeria(categoryId) {
    const category = tableDataCategories.find((category) => {
      return category.id === categoryId
    })
    return category.name
  }
  */
  const tableDataProducts = props.tableDataProducts
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
                    {data.status}
                  </div>
                </td>
                <td className="text-center">{data.creationAt}</td>
                <td className="text-center">{data.updatedAt}</td>
                <td className="text-center">
                  <TrashIcon className="h-6 w-6 text-red-500 inline" />
                  <Link href={`/dashboard/products/edit/${data.id}`}>
                    <CogIcon className="h-6 w-6 text-black-500 inline" />
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
