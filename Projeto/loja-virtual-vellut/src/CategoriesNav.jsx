export function CategoriesNav({ categories, selectedCategory, onChangeCategory }) {
  return (
    <nav className="category-menu">
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "active" : ""}
          onClick={() => onChangeCategory(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  );
}