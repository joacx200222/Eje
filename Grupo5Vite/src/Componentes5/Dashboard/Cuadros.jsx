import React, { useEffect, useState } from 'react';
import '../../css/Dashboard.css';

const AdminDashboard = () => {
  const [productCount, setProductCount] = useState(null);
  const [userCount, setUserCount] = useState(null);
  const [productPricesSum, setProductPricesSum] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const productCountResponse = await fetch('http://localhost:3080/api/dashboard/countProducts');
        if (!productCountResponse.ok) {
          throw new Error('Error al obtener cantidad de productos desde el servidor');
        }
        const productCountData = await productCountResponse.json();
        setProductCount(productCountData.count);

      
        const userCountResponse = await fetch('http://localhost:3080/api/dashboard/countUsers');
        if (!userCountResponse.ok) {
          throw new Error('Error al obtener cantidad de usuarios desde el servidor');
        }
        const userCountData = await userCountResponse.json();
        setUserCount(userCountData.count);

        const productPricesSumResponse = await fetch('http://localhost:3080/api/dashboard/sumProductsPrices');
        if (!productPricesSumResponse.ok) {
          throw new Error('Error al obtener la suma de precios de productos desde el servidor');
        }
        const productPricesSumData = await productPricesSumResponse.json();
        setProductPricesSum(productPricesSumData.sum);
      } catch (error) {
        console.error('Error al obtener datos:', error);
        setError('Error al obtener datos desde el servidor');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (productCount === null || userCount === null || productPricesSum === null) {
    return <p>Cargando...</p>;
  }

  return (
    <main>
      <article>
        <div className="contenedor">
          <div className="cuadro">
            <p className="numero">{productCount}</p>
            <p className="texto">Cantidad de productos</p>
          </div>
          <div className="cuadro">
            <p className="numero">{userCount}</p>
            <p className="texto">Cantidad de usuarios</p>
          </div>
          <div className="cuadro1">
            <p className="numero1">S/ {productPricesSum.toFixed(2)}</p>
            <p className="texto1">Suma de precios de productos</p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default AdminDashboard;