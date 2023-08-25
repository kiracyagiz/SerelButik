const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Örnek bir veritabanı
const shopData = [
  {
    "id": 1,
    "productName": "Kulaklık",
    "price": 49.99,
    "category": "Elektronik"
  },
  {
    "id": 2,
    "productName": "Tişört",
    "price": 19.99,
    "category": "Giyim"
  },
  {
    "id": 3,
    "productName": "Ayakkabı",
    "price": 89.99,
    "category": "Ayakkabı"
  },
  {
    "id": 4,
    "productName": "Kitap",
    "price": 12.99,
    "category": "Kitaplar"
  }
];

// Tüm ürünleri getiren endpoint
app.get('/api/shopData', (req, res) => {
  res.json(shopData);
});

// Yeni ürün ekleyen endpoint
app.post('/api/shopData', (req, res) => {
  const { productName, price, category } = req.body;
  const newProduct = { id: shopData.length + 1, productName, price, category };
  shopData.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
