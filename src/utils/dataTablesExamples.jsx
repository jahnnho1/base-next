const tableDataProducts = [
  {
    id: 1,
    name: 'Reloj Cassio',
    price: '100.00',
    categoryId: 1,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    stock: 10,
    status: 'active',
    createdAt: '2023-02-01',
    updatedAt: '2023-03-01',
    images:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80',
  },
  {
    id: 2,
    name: 'Camiseta Nike',
    price: '25.00',
    categoryId: 1,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    stock: 20,
    status: 'Canceled',
    createdAt: '2023-02-02',
    updatedAt: '2023-03-02',
    images:
      'https://images.unsplash.com/photo-1597248881519-db089d3744a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-4.0.3&q=80&w=400',
  },
  {
    id: 3,
    name: 'Audífonos Sony',
    price: '80.00',
    categoryId: 2,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    stock: 15,
    status: 'active',
    createdAt: '2023-02-03',
    updatedAt: '2023-03-03',
    images:
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-4.0.3&q=80&w=400',
  },
]

const tableDataCategories = [
  {
    id: 1,
    name: 'Dormitorio',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    status: 'active',
    createdAt: '2023-02-01',
    updatedAt: '2023-03-01',
  },
  {
    id: 2,
    name: 'Automotriz',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    status: 'active',
    createdAt: '2023-02-01',
    updatedAt: '2023-03-01',
  },
]

export { tableDataProducts, tableDataCategories }
