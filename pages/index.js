import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import { TextStyle, Page, Layout, EmptyState } from '@shopify/polaris';
import { useState } from 'react';
import store from 'store-js';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
const Index = () => {
  const [open, setOpen] = useState(false);
  const handleSelection = (resources) => {
    setOpen(false);
    const idsFromResources = resources.selection.map((product) => product.id);
    store.set('ids', idsFromResources);
  };
  return (
    <Page>
      <TitleBar
        title="Sample App"
        primaryAction={{
          content: 'Select Products',
          onAction: () => setOpen(true),
        }}
      />
      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        open={open}
        onSelection={handleSelection}
        onCancel={() => setOpen(false)}
      />
      <Layout>
        <EmptyState
          heading="Discount your products temporarily"
          action={{
            content: 'Select Products',
            onAction: () => setOpen(true),
          }}
          image={img}
        >
          <p>Select products to change their price temporarily.</p>
        </EmptyState>
      </Layout>
    </Page>
  );
};
export default Index;
