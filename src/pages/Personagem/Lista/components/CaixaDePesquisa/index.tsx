import { BsSearch } from 'react-icons/bs';
import style from './CaixaDePesquisa.module.scss';

interface SearchBoxProps {
    nameSearch: string;
    setNameSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBox: React.FC<SearchBoxProps> = ({ nameSearch, setNameSearch }) => {
    return (
        <div className={style.searchContainer}>
            <span className={style.searchIcon}>
                <BsSearch />
            </span>
            <input 
                type="text" 
                placeholder='Buscar...' 
                value={nameSearch}
                onChange={(e) => setNameSearch(e.target.value)}
                className={style.searchInput}
            />
        </div>
    );
};

export default SearchBox;





