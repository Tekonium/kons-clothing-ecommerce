import {
  CheckoutItemContainer,
  Detail,
  ImageContainer,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHander = () => clearItemFromCart(cartItem);
  const addItemHander = () => addItemToCart(cartItem);
  const removeItemHander = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Detail>{name}</Detail>
      <Quantity>
        <Arrow onClick={removeItemHander}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHander}>&#10095;</Arrow>
      </Quantity>
      <Detail>{price}</Detail>
      <RemoveButton onClick={clearItemHander}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
