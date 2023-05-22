import FormProduct from '@components/forms/FormProduct'
import { useRouter } from 'next/router'
import { getProduct } from '@services/api/product'
import { useEffect, useState } from 'react'

export default function EditProduct() {
  const router = useRouter()
  const [product, setProduct] = useState({})

  useEffect(() => {
    const { id } = router.query
    if (id) {
      getProduct(id)
        .then((res) => {
          setProduct(res.props.data)
        })
        .catch((err) => console.log(err))
    }
  }, [router.isReady, router.query])
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4">
      <div className="lg:col-span-2 lg:col-start-2 panel">
        <FormProduct
          product={product}
          title="Editar Informacion del Producto"
        />
      </div>
    </div>
  )
}
