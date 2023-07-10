
import { Button, Text, Box, HStack } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

interface CartButtonProps {
  count: number;
}

export const CartButton: React.FC<CartButtonProps> = ({ count }) => {
  return (
    <Button
      variant={'solid'}
      colorScheme={'teal'}
      size={'sm'}
      mr={4}
      leftIcon={<FaShoppingCart />}>
      <HStack spacing={1}>
        {/* <Text>Action</Text> */}
        <Box borderRadius="full" bg="red.400" color="white" px={2} py={1}>
          <Text fontSize="xs">{count}</Text>
        </Box>
      </HStack>
    </Button>
  );
};
