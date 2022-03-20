import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button
} from "@chakra-ui/react";

const Details = () => {
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg="gray.900"
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your details</Heading>
        <Text>If you already have an account, click here to login</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} width="full">
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Select>
              <option value="be">Belgium</option>
              <option value="de">Germany</option>
              <option value="ro">Romania</option>
              <option value="usa">United states of America</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2} >
          <Checkbox defaultChecked w="full">Ship to billing address</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
            <Button w="full">Ship to billing address</Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};
export default Details;
