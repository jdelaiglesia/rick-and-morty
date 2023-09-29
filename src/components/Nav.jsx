import SearchBar from './SearchBar';
import RandomCharacter from './RandomCharacter';

export default function Nav(props) {
    return (
        <nav>
            <SearchBar onSearch={props.onSearch} />
            <RandomCharacter addRandomCharacter={props.addRandomCharacter}/>
        </nav>
    );
}