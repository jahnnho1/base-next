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

const getCategories = async () => {
  try {
    const config = {
      method: 'GET',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(endPoints.categories.getCategories, config)
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

const editCategory = async (idCategory, category) => {
  try {
    const config = {
      method: 'PUT',
      body: JSON.stringify(category),
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(
      endPoints.categories.updateCategory(idCategory),
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

const deleteProduct = async (idCategory) => {
  try {
    const config = {
      method: 'DELETE',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(
      endPoints.products.deleteProducts(idCategory),
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

export { addCategory, getProduct, getCategories, editCategory, deleteProduct }
