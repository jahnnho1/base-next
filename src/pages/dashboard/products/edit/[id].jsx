import FormProduct from '@components/forms/FormProduct'
import { useRouter } from 'next/router'
import { getProduct } from '@services/api/product'
import { useEffect, useState } from 'react'

export default function EditProduct() {
  const router = useRouter()
  const [product, setProduct] = useState({})

  useEffect(() => {
    const { id } = router.query
    console.log(id)
    if (id) {
      getProduct(id)
        .then((res) => {
          setProduct(res.props.data)
        })
        .catch((err) => console.log(err))
    }
  }, [router.isReady, router.query])

  return (
    <div>
      <h1>editProduct</h1>
      <FormProduct product={product} />
    </div>
  )
}
