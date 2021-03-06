import styles from "./SearchInput.module.css";
import SearchRounded from "@material-ui/icons/SearchRounded";

const SearchInput = ({...rest}) => {
    return (
        <div className={styles.wrapper}>
            <SearchRounded/>
            <input type="text" className={styles.input} {...rest}/>
        </div>
    );
};

export default SearchInput;