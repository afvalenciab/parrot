import { Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import CategoryItem from 'components/CategoryItem';

import { useStyles } from './styles';

export default function CategoryList() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <aside className={classes.container}>
      <Typography variant="h6" component="h2" className={classes.title}>
        Categorías
      </Typography>

      <Grid className={classes.wrapperCategories}>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </Grid>
    </aside>
  );
}
