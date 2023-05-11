import FormProduct from '@components/forms/FormProduct'

export default function createProduct() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4">
      <div className="lg:col-span-2 lg:col-start-2 panel">
        <FormProduct />
      </div>
    </div>
  )
}
