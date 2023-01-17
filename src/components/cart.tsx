import { SmileySad } from 'phosphor-react'

import {
  Text,
  Button,
  HStack,
  VStack,
  useTheme,
  Container,
} from '@chakra-ui/react'

import { CartItem } from './cart-item'
import { useCart, FEES } from '../hooks/useCart'

export function Cart() {
  const { cart, subTotal, totalOrder } = useCart()

  const theme = useTheme()

  const hasItemsInCart = cart.length

  return (
    <Container
      py={6}
      px={6}
      bg={theme.colors.base.card}
      borderRadius="8px 32px 8px 32px"
    >
      {cart.length ? (
        cart.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <VStack spacing={1} mb={4}>
          <SmileySad size={64} color={theme.colors.base.text} />

          <Text as="p" mt={6} color={theme.colors.base.text}>
             Não há itens.
          </Text>

          <Text as="p" lineHeight={1} color={theme.colors.base.text}>
             Adicione um café ao carrinho antes de vir aqui.
          </Text>
        </VStack>
      )}

      <VStack mt={4}>
        <HStack w="full" alignItems="center" justifyContent="space-between">
          <Text>Subtotal</Text>
          <Text>$ {subTotal.toFixed(2)}</Text>
        </HStack>

        <HStack w="full" alignItems="center" justifyContent="space-between">
          <Text>Taxas de entrega</Text>
          <Text>$ {FEES}</Text>
        </HStack>

        <HStack w="full" alignItems="center" justifyContent="space-between">
          <Text as="strong" fontSize={24}>
            Total de pedidos
          </Text>
          <Text as="strong" fontSize={24}>
            $ {totalOrder.toFixed(2)}
          </Text>
        </HStack>

        <Button
          bg={theme.colors.yellow.medium}
          color={theme.colors.white}
          w="full"
          h={12}
          disabled={!hasItemsInCart}
          _hover={{
            bg: theme.colors.yellow.light,
          }}
          _active={{
            bg: theme.colors.yellow.light,
          }}
          _disabled={{
            bg: theme.colors.yellow.dark,
            cursor: 'not-allowed',
            pointerEvents: 'none',
          }}
          type="submit"
        >
          Confirmar pedido
        </Button>
      </VStack>
    </Container>
  )
}
