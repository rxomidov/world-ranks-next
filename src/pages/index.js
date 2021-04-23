// import React from "react";
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import CountriesTable from "../components/CountriesTable/CountriesTable";

export default function Home({countries}) {
    // console.log(countries)
  return (
    <Layout title="World Ranks">
        <div className={styles.count}>Found {countries.length} countries</div>
        <SearchInput placeholder = "Filter by name, region or subregion"/>
        <CountriesTable countries={countries}/>
    </Layout>
  )
}

export const getStaticProps  = async () => {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await response.json();

    return {
        props: {
            countries,
        }
    }
}