import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

import { useStyles } from './styles';

export default function CategoryItem({ category, onSelectCategory, isActive }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Card
      className={clsx(classes.card, { [classes.active]: isActive })}
      data-testid={`category-${category.uuid}`}>
      <CardActionArea onClick={onSelectCategory} data-testid={`btn-${category.uuid}`}>
        <CardContent className={classes.cardContent}>
          <Typography variant="subtitle1" component="h3" className={classes.title}>
            {category.name}
          </Typography>

          <Typography variant="body2" component="p" className={classes.items}>
            {`${category.totalProducts} ${category.totalProducts === 1 ? 'artículo' : 'artículos'}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
