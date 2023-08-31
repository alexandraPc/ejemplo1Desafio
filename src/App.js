import React, { useState } from 'react';
import Select from 'react-select';

function ShoppingList() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [items, setItems] = useState([
  ]);

  const handleAddItem = () => {
    if (selectedOption) {
      const newItem = {
        id: items.length + 1,
        name: selectedOption.label,
        quantity: 1,
        price: selectedOption.precio
      };
      setItems([...items, newItem]);
      setSelectedOption(null);
    }
  };

  const handleQuantityChange = (id, value) => {
    const newItems = items.map(item =>
      item.id === id ? { ...item, quantity: value } : item
    );
    setItems(newItems);
  };

  const handleRemoveItem = id => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  };

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '150px', display:'flex', justifyContent:'center'}}>
      <div>
        <div style={{ display: 'flex' }}>
        <div>
          <h1 style={{ color: '#333' }}>Lista de Compras</h1>
          <div style={{ width: '600px' }}>
            <Select
              value={selectedOption}
              onChange={setSelectedOption}
              options={[
                { value: 'Super Mario Bros, La Pelicula', label: 'Super Mario Bros. La Pelicula', precio: 15 },
                { value: 'Barbie', label: 'Barbie', precio: 14 },
                { value: 'El señor de los anillos', label: 'El señor de los anillos', precio: 12 },
                { value: 'Fast X', label: 'Fast X', precio: 16 },
                { value: 'The Batman', label: 'The Batman', precio: 15 },
                { value: 'Piratas Del Caribe: La Maldición De La Perla Negra', label: 'Piratas Del Caribe: La Maldición De La Perla Negra', precio: 10 },
                { value: 'Star Wars: Episodio V – El imperio contraataca', label: 'Star Wars: Episodio V – El imperio contraataca', precio: 12 },
                { value: 'Harry Potter y La Orden del Fénix', label: 'Harry Potter y La Orden del Fénix', precio: 14 },
                { value: 'Titanic', label: 'Titanic', precio: 13 },
                { value: 'Toy Story', label: 'Toy Story', precio: 10 }
              ]}
              placeholder="Selecciona una pelicula"
            />
          </div>

        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end'}}>
          <button style={{ padding: '8px 10px', marginLeft: '20px' }}
            onClick={handleAddItem} >
            Agregar
          </button>
        </div>
      </div>


      <table style={{marginTop:'15px'}}>
        <thead>
          <tr>
            <th style={{width:'400px'}}>Pelicula</th>
            <th style={{width:'100px'}}>Cantidad</th>
            <th style={{width:'100px'}}>Precio</th>
            <th style={{width:'100px'}}>Total</th>
            <th style={{width:'100px'}}></th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td style={{textAlign: 'center'}}>{item.name}</td>
              <td style={{textAlign: 'center'}}>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={item.quantity}
                  onChange={e => handleQuantityChange(item.id, e.target.value)}
                />
              </td>
              <td style={{textAlign: 'center'}}>${item.price}</td>
              <td style={{textAlign: 'center'}}>${item.price * item.quantity}</td>
              <td style={{textAlign: 'center'}}>
                <button style={{ padding: '8px 10px' }} onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '20px', width:'805px', display:'flex', justifyContent: 'flex-end' }}>
        Total a pagar:
        <span style={{ fontWeight: 'bold' }}>${total}</span>
      </div>
      </div>
      
    </div>
  );
}

export default ShoppingList;
