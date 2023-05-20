import endPoints from '@services/api'

const addProduct = async (body) => {
  try {
    const config = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(endPoints.products.addProducts, config)
    const data = await response.json()
    return {
      props: {
        data,
      },
    }
  } catch (error) {
    console.error('Error al obtener los datos:', error)
    return {
      props: {
        data: null,
      },
    }
  }
}

const getProduct = async (id) => {
  try {
    const config = {
      method: 'GET',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(endPoints.products.getProduct(id), config)
    const data = await response.json()
    return {
      props: {
        data,
      },
    }
  } catch (error) {
    console.error('Error al obtener los datos:', error)
    return {
      props: {
        data: null,
      },
    }
  }
}

const getProducts = async () => {
  try {
    const config = {
      method: 'GET',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(endPoints.products.allProducts, config)
    const data = await response.json()
    return {
      props: {
        data,
      },
    }
  } catch (error) {
    console.error('Error al obtener los datos:', error)
    return {
      props: {
        data: null,
      },
    }
  }
}

export { addProduct, getProduct, getProducts }
