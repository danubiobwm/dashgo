import { Box, Flex, Text, Avatar } from "@chakra-ui/react"

export function Profile(){
  return(
    <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Danubio</Text>
            <Text color="gray.300" fontSize="small">
              danubio.bwm@gmail.com
            </Text>
          </Box>
          <Avatar size="md" name="Danubio Araújo" src="https://github.com/danubiobwm.png"/>
        </Flex>
  );
}