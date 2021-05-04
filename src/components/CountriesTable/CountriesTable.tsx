import styles from "./CountriesTable.module.css";
import {KeyboardArrowDownRounded, KeyboardArrowUpRounded} from "@material-ui/icons";
import {useState} from "react";

interface Country {
    name: string,
    population: number,
}
interface CountriesTable {
    countries: any
}
interface Direction {
    direction: string;
}

const orderBy = (countries, direction) => {
    if (direction === "asc"){
        return [...countries].sort((a,b) => (a.population > b.population ? 1 : -1));
    } else if (direction === "desc"){
        return [...countries].sort((a,b) => (a.population > b.population ? -1 : 1));
    } else return countries
}

const SortArrow = ({direction} : Direction) => {
    if (!direction){
        return <></>;
    }
    if (direction === "desc"){
        return (
            <span className={styles.heading_arrow}>
                <KeyboardArrowDownRounded color="inherit"/>
            </span>
        )
    }
    if (direction === "asc"){
        return (
            <span className={styles.heading_arrow}>
                <KeyboardArrowUpRounded color="inherit"/>
            </span>
        )
    }
};

const CountriesTable = ({countries} : CountriesTable) => {
    const [direction, setDirection] = useState();
    const orderedCountries = orderBy(countries, "desc");
    const switchDirection = () => {
        if (!direction) {
            setDirection("desc");
        } else if (direction === "desc") {
            setDirection("asc")
        } else {
            setDirection(null)
        }
    };
    const setValueAndDirection = () => {
        
    }

    return (
        <div>
            <div className={styles.heading}>
                <button className={styles.heading_name} onClick={switchDirection}>
                    <div>Name</div>
                    <SortArrow direction="desc"/>
                </button>
                <button className={styles.heading_population} onClick={switchDirection}>
                    <div>Population</div>
                    <SortArrow/>
                </button>
            </div>
            {orderedCountries.map((country: Country)=>(
                <div key={country.name} className={styles.row}>
                    <div className={styles.name}>{country.name}</div>
                    <div className={styles.population}>{country.population}</div>
                </div>
            ))}
        </div>
    );
};

export default CountriesTable;