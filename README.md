# LC-JACO-SHOPPING

Este es un paquete de pruebas de despliegue en NPM

## Alexis Córdoba

### Ejemplo
```
import { ProductButtons, ProductCard, ProductImage, ProductTitle  from 'lc-jaco-shopping'
```

```
const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  // img: './coffee-mug.png',
}
```

```
<ProductCard
    product={product}
    initialValues={{
      count: 4,
      //maxCount: 10
    }}
>
  {
    ({ reset, increaseBy, isMaxCountReached, isMinCountReached }) => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )
  }

</ProductCard>
```