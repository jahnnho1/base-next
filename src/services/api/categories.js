import endPoints from '@services/api'

const addCategory = async (body) => {
  try {
    const config = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(endPoints.categories.addCategory, config)
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

const allProducts = async () => {
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

const editProduct = async (idProduct, product) => {
  try {
    const config = {
      method: 'PUT',
      body: JSON.stringify(product),
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(
      endPoints.products.updateProducts(idProduct),
      config
    )
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

const getProducts = async (limit, offset) => {
  try {
    const config = {
      method: 'GET',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(
      endPoints.products.getProducts(limit, offset),
      config
    )
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

const deleteProduct = async (idProduct) => {
  try {
    const config = {
      method: 'DELETE',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(
      endPoints.products.deleteProducts(idProduct),
      config
    )
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

export {
  addCategory,
  getProduct,
  allProducts,
  editProduct,
   getProducts,
  deleteProduct,
}