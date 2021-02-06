import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader/Loader";
import Pagination from "../../containers/Pagination/Pagination";
import SearchBar from "../../containers/SearchBar/SearchBar";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
  padding: 5px 30px 50px 30px;
  position: relative;
`;

const MAXIMUM_ITEM_PER_PAGE = 10;

function Home() {
  const [products, setProducts] = useState(null);
  const [queryKey, setQueryKey] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("http://www.json-generator.com/api/json/get/cfDTvIOuxu?indent=2")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products?.filter((product) =>
    product.name.toLocaleLowerCase().includes(queryKey.toLocaleLowerCase())
  );

  const currentProducts = filteredProducts?.slice(
    (currentPage - 1) * MAXIMUM_ITEM_PER_PAGE,
    Math.min(currentPage * MAXIMUM_ITEM_PER_PAGE, products.length)
  );

  return (
    <Layout>
      <SearchBar
        value={queryKey}
        onChange={(text) => setQueryKey(text)}
      ></SearchBar>
      {filteredProducts ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "20px 30px 5px 30px",
            }}
          >
            <Pagination
              itemsPerPage={MAXIMUM_ITEM_PER_PAGE}
              datasetSize={filteredProducts.length}
              currentPage={currentPage}
              onChange={(e) => setCurrentPage(e)}
            ></Pagination>
          </div>

          <Grid>
            {currentProducts.map((product) => (
              <Card key={product.id} product={product}></Card>
            ))}
          </Grid>
        </>
      ) : (
        <Loader></Loader>
      )}
    </Layout>
  );
}

export default Home;
