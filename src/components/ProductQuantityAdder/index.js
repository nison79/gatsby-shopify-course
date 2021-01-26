import React from 'react';
import { ProductQuantityAdderWrapper } from './styles'
import { Button } from '../Button';
import { Input } from '../Input';

export function ProductQuantityAdder({ variantId , available }) {
  return (
    <ProductQuantityAdderWrapper>
      <strong>Quantity</strong>
      <form>
        <Input/>
        <Button fullWidth >
          Add to cart
        </Button>
      </form>
    </ProductQuantityAdderWrapper>
  )
}