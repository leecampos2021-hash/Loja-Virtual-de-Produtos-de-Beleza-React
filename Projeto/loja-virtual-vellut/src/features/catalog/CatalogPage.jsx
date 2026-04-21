import { useState } from "react"; 
import productsData from "./data/products.json"; 
import { SearchBar } from "./components/SearchBar"; 
import { ProductList } from "./components/ProductList"; 
import { CategoriesNav } from "../../CategoriesNav";

export function CatalogPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const categories = [
    "Todas",
    ...new Set(productsData.map((product) => product.category)),
  ];

  function filterProducts(search, selectedCategory) {
    return productsData.filter(
      (p) =>
        (selectedCategory === "Todas" ||
          p.category === selectedCategory) &&
        p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  const filteredProducts = filterProducts(search, selectedCategory);

  return (
    <main style={{ padding: "20px" }}>
      <header className="top">
      <h1 className="logo">Vellut</h1>
    </header>
      <CategoriesNav
        categories={categories}
        selectedCategory={selectedCategory}
        onChangeCategory={(category) => setSelectedCategory(category)}
      />

      <SearchBar search={search} setSearch={setSearch} />
      <ProductList products={filteredProducts} />
    </main>
  );
}