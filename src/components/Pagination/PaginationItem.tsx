import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
}

export function PaginationItem({
  isCurrent = false,
  number,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
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
        {number}
      </Button>
    );
  }
  return (
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
      {number}
    </Button>
  );
}
