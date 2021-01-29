import React from 'react';
import { Layout, SEO ,HomePageCollectionGrid} from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const {collections} = React.useContext(ProductContext);
  return (
    <Layout>
      <HomePageCollectionGrid collections={collections.filter(collection => collection.title !=='Featured Hats')} />
    </Layout>
  )
}

export default IndexPage;
