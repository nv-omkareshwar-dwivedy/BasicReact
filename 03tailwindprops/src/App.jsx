import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Card'

function App() {
  // Props in React
  const products = [
    {
      imgSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imgAlt: "Front of men's Basic Tee in black.",
      name: 'Basic Tee',
      color: 'Black',
      price: 35
    },
    {
      imgSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
      imgAlt: "Front of men's Basic Tee in white.",
      name: 'Basic Tee',
      color: 'Aspen White',
      price: 35
    },
    {
      imgSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
      imgAlt: "Front of men's Basic Tee in dark gray.",
      name: 'Basic Tee',
      color: 'Charcoal',
      price: 35
    },
    {
      imgSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
      imgAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
      name: 'Artwork Tee',
      color: 'Iso Dots',
      price: 35
    }
  ];

  return (
    <>
      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => {
            return <Card detail={product}/>
          })} 
        </div>
      </div>
    </div>

    </>
  )
}

export default App
