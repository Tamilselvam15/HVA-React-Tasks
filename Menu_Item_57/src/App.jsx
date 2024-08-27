import MenuItem from './MenuItem.jsx';

function App() {
  const menuItems = [
    { id: 1, name: "Spaghetti Bolognese", price: 12.99, description: "A classic Italian pasta dish with rich, meaty sauce." },
    { id: 2, name: "Margherita Pizza", price: 10.99, description: "A simple and delicious pizza with fresh mozzarella and basil." },
    { id: 3, name: "Caesar Salad", price: 8.99, description: "Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese." },
    { id: 4, name: "Grilled Salmon", price: 15.99, description: "Fresh salmon fillet grilled to perfection, served with vegetables." },
    { id: 5, name: "Tiramisu", price: 6.99, description: "A classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese." },
    { id: 6, name: "thosa", price: 7.99, description: "Tamil nadu special" }

  ];

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
