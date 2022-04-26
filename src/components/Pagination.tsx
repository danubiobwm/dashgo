import { Box, Button, Stack } from "@chakra-ui/react";

export default function Pagination() {
  return (
    <Stack
      direction="row"
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack spacing="2" direction="row">
        <Button
          border="0"
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bgColor: "pink.500",
            curson: "default",
          }}
        >
          1
        </Button>

        <Button
          border="0"
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          2
        </Button>
        <Button
          border="0"
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          3
        </Button>
        <Button
          border="0"
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          4
        </Button>
        <Button
          border="0"
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          5
        </Button>
      </Stack>
    </Stack>
  );
}
