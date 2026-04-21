export function SearchBar({ search, setSearch }) { 
    const handleSubmit = (e) => {
        e.preventDefault()
        if (onSearch) {
             onSearch(search)
        }
           
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar produto..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        
            <button className="buscar" types="submit">Buscar</button>

        </form>
    );
}