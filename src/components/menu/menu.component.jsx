import { CategoriesContainer } from './menu.styles';

import DirectoryItem from '../directory-item/directory-item.component';

const Menu = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default Menu;
