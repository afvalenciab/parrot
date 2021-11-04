import { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import useSelectorsStore from 'providers/Stores/useSelectors';
import { getListOfCategories } from 'utils/utilities';
import CategoryItem from 'components/CategoryItem';

import { useStyles } from './styles';

export default function CategoryList({ categorySelected, onSelectCategory }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { productsState } = useSelectorsStore();
  let categoryList = [];

  if (productsState.list.length) {
    categoryList = getListOfCategories(productsState.list);
  }

  useEffect(() => {
    if (categoryList.length && !categorySelected) onSelectCategory(categoryList[0]);
  }, [categoryList]);

  return (
    <aside className={classes.container}>
      <Typography variant="h6" component="h2" className={classes.title}>
        Categorías
      </Typography>

      <Grid className={classes.wrapperCategories}>
        {categoryList.map(category => (
          <CategoryItem
            key={category.uuid}
            category={category}
            onSelectCategory={() => onSelectCategory(category)}
            isActive={category.uuid === categorySelected?.uuid}
          />
        ))}
      </Grid>
    </aside>
  );
}
