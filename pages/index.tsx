import Head from "next/head";
import {
  Box,
  Container,
  SimpleGrid,
  HStack,
  Tag,
  TagRightIcon,
  TagLeftIcon,
  TagLabel,
  Wrap,
  WrapItem,
  Button,
  Stack,
  Progress,
  Text,
  InputLeftElement,
  Icon,
  Input,
  InputGroup,
  ButtonGroup,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
} from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Switch,
  FormControl,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Tooltip, VStack } from "@chakra-ui/react";

import { useToast, FormLabel } from "@chakra-ui/react";

import React from "react";

import { Stat, Table, MemberTable } from "../component";
// import { FiSearch } from "react-icons/fi";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  AlertDialogCloseButton,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { IconButton } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

const stats = [
  { label: "Total Subscribers", value: "71,887" },
  { label: "Avg. Open Rate", value: "56.87%", date: "February 2021" },
  {
    label: "Avg. Click Rate",
    value: "12.87%",
    delta: { value: "0.1%", isUpwardsTrend: false },
  },
  {
    label: "Avg. Click Rate",
    value: "12.87%",
    delta: { value: "0.1%", isUpwardsTrend: true },
  },
];
const tableData = [
  {
    firstName: "To convert",
    secondName: "firstName",
    thirdName: 1,
  },
  {
    firstName: "To convert",
    secondName: "firstName",
    thirdName: 2,
  },
  {
    firstName: "To convert",
    secondName: "firstName",
    thirdName: 3,
  },
  {
    firstName: "To convert",
    secondName: "firstName",
    thirdName: 4,
  },
];

const column = [
  {
    title: "To convert",
    dataIndex: "firstName",
    key: "1",
  },
  {
    title: "inches",
    dataIndex: "secondName",
    key: "2",
  },
  {
    title: "multiply by",
    dataIndex: "thirdName",
    key: "3",
  },
];

export default function Home() {
  const toast = useToast();
  const statuses = ["success", "error", "warning", "info"];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [value, setValue] = React.useState("1");
  // @ts-ignore
  const { isOpen2, onOpen2, onClose2 } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ padding: "20px" }}>
        <Box as="section" py={{ base: "4", md: "8" }}>
          <Container>
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              gap={{ base: "5", md: "6" }}
            >
              {stats.map(({ label, value, date, delta }) => (
                <Stat
                  key={label}
                  label={label}
                  date={date}
                  value={value}
                  delta={delta}
                />
              ))}
            </SimpleGrid>
          </Container>
        </Box>
        <Box as="section" py={{ base: "4", md: "8" }}>
          <Table variant="simple" data={tableData} column={column}></Table>
        </Box>
        <Box as="section" py={{ base: "4", md: "8" }}>
          <Table variant="striped" data={tableData} column={column}></Table>
        </Box>
        <Box as="section" py={{ base: "4", md: "8" }}>
          <Table variant="unstyled" data={tableData} column={column}></Table>
        </Box>
        <Box as="section" py={{ base: "4", md: "8" }}>
          {["sm", "md", "lg"].map((size) => (
            <Tag
              size={size}
              key={size}
              variant="solid"
              colorScheme="teal"
              borderRadius={"6px"}
              color="#000"
              bg="mirror.base"
              marginRight="20px"
            >
              Teal
            </Tag>
          ))}
        </Box>
        <Box as="section" py={{ base: "4", md: "8" }}>
          {["sm", "md", "lg"].map((size) => (
            <Tag
              size={size}
              key={size}
              variant="subtle"
              colorScheme="cyan"
              color="#000"
              bg="mirror.base"
              marginRight="20px"
            >
              <TagLeftIcon />
              <TagLabel>Cyan</TagLabel>
            </Tag>
          ))}
        </Box>
        <Box as="section" py={{ base: "4", md: "8" }}>
          {["sm", "md", "lg"].map((size) => (
            <Tag
              size={size}
              key={size}
              variant="solid"
              colorScheme="teal"
              borderRadius={"6px"}
              color="#000"
              bg="mirror.base"
              marginRight="20px"
            >
              Teal
              <TagRightIcon />
            </Tag>
          ))}
        </Box>
        <Wrap>
          {statuses.map((status, i) => (
            <WrapItem key={i}>
              <Button
                onClick={() =>
                  toast({
                    title: `${status} toast`,
                    // @ts-ignore
                    status: status,
                    isClosable: false,
                    duration: 90000,
                  })
                }
              >
                Show {status} toast
              </Button>
            </WrapItem>
          ))}
        </Wrap>
        {/* <Wrap>
          {statuses.map((status, i) => (
            <WrapItem key={i}>
              <Button
                onClick={() =>
                  toast({
                    title: `${status} toast`,
                    description: "We've created your account for you.",
                    status: status,
                    isClosable: true,
                    duration: 90000,
                    position: "top-left",
                  })
                }
              >
                Show {status} toast
              </Button>
            </WrapItem>
          ))}
        </Wrap> */}
        <Wrap>
          {statuses.map((status, i) => (
            <WrapItem key={i}>
              <Button
                onClick={() =>
                  toast({
                    title: `${status} toast`,
                    description: "We've created your account for you.",
                    // @ts-ignore
                    status: status,
                    isClosable: true,
                    duration: 90000,
                    position: "top-right",
                  })
                }
              >
                Show {status} toast
              </Button>
            </WrapItem>
          ))}
        </Wrap>
        <Wrap>
          {statuses.map((status, i) => (
            <WrapItem key={i}>
              <Button
                onClick={() =>
                  toast({
                    title: `${status} toast`,
                    description: "We've created your account for you.",
                    // @ts-ignore
                    status: status,
                    position: "bottom-left",
                    isClosable: true,
                    duration: 90000,
                  })
                }
              >
                Show {status} toast
              </Button>
            </WrapItem>
          ))}
        </Wrap>
        <Wrap>
          {statuses.map((status, i) => (
            <WrapItem key={i}>
              <Button
                onClick={() =>
                  toast({
                    title: `${status} toast`,
                    description: "We've created your account for you.",
                    // @ts-ignore
                    status: status,
                    position: "bottom-right",
                    isClosable: true,
                    duration: 90000,
                  })
                }
              >
                Show {status} toast
              </Button>
            </WrapItem>
          ))}
        </Wrap>
        <Wrap>
          {statuses.map((status, i) => (
            <WrapItem key={i}>
              <Button
                onClick={() =>
                  toast({
                    title: `${status} toast`,
                    description: "We've created your account for you.",
                    // @ts-ignore
                    status: status,
                    position: "top",
                    isClosable: true,
                    duration: 90000,
                  })
                }
              >
                Show {status} toast
              </Button>
            </WrapItem>
          ))}
        </Wrap>
        <Stack spacing={5}>
          <Progress colorScheme="yellow" size="sm" value={20} />
          <Progress colorScheme="yellow" size="md" value={20} />
          <Progress colorScheme="yellow" size="lg" value={20} />
          <Progress colorScheme="yellow" height="32px" value={20} />
        </Stack>
        <CircularProgress value={30} color="mirror.base" thickness="12px">
          <CircularProgressLabel color="mirror.base">40%</CircularProgressLabel>
        </CircularProgress>
        <Slider defaultValue={60} min={0} max={300} step={30} direction="ltr">
          <SliderTrack bg="rgba(255, 255, 255, 0.16)">
            <Box position="relative" right={10} />
            <SliderFilledTrack bg="mirror.base" />
          </SliderTrack>
          <SliderThumb boxSize={4} />
        </Slider>
        <Slider
          aria-label="slider-ex-3"
          defaultValue={30}
          orientation="vertical"
          minH="32"
        >
          <SliderTrack bg="rgba(255, 255, 255, 0.16)">
            <SliderFilledTrack bg="mirror.base" />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Box as="section" py={{ base: "4", md: "8" }}>
          <Stack align="center" direction="row">
            <Switch size="sm" />
            <Switch size="md" />
            <Switch size="lg" />
          </Stack>
        </Box>
        <Box as="section" py={{ base: "4", md: "8" }}>
          <Textarea
            bg="#000"
            border="1px solid red"
            placeholder="Here is a sample placeholder"
          />
        </Box>
        <Box as="section" py={{ base: "4", md: "8" }}>
          {" "}
          <Textarea
            bg="#000"
            isDisabled
            placeholder="Here is a sample placeholder"
          />
        </Box>
        <Box bg="#000" as="section" py={{ base: "4", md: "8" }}>
          {" "}
          <Textarea
            bg="#000"
            isInvalid
            placeholder="Here is a sample placeholder"
          />
        </Box>
        <Wrap>
          <WrapItem>
            <Avatar
              size="2xs"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              size="xs"
              name="Kola Tioluwani"
              src="https://bit.ly/tioluwani-kolawole"
            />{" "}
          </WrapItem>
          <WrapItem>
            <Avatar
              size="sm"
              name="Kent Dodds"
              src="https://bit.ly/kent-c-dodds"
            />{" "}
          </WrapItem>
          <WrapItem>
            <Avatar
              size="md"
              name="Ryan Florence"
              src="https://bit.ly/ryan-florence"
            />{" "}
          </WrapItem>
          <WrapItem>
            <Avatar
              size="lg"
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />{" "}
          </WrapItem>
          <WrapItem>
            <Avatar
              size="xl"
              name="Christian Nwamba"
              src="https://bit.ly/code-beast"
            />{" "}
          </WrapItem>
          <WrapItem>
            <Avatar
              size="2xl"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />{" "}
          </WrapItem>
        </Wrap>
        <Stack direction="row" spacing={4}>
          <Avatar>
            <AvatarBadge boxSize="1.25em" bg="green.500" borderColor="#000" />
          </Avatar>

          {/* You can also change the borderColor and bg of the badge */}
          <Avatar>
            <AvatarBadge borderColor="#000" bg="tomato" boxSize="1.25em" />
          </Avatar>
        </Stack>
        <Box bg="#000" as="section" py={{ base: "4", md: "8" }}>
          <PhoneIcon />
          <br />
          <br />
          <AddIcon w={6} h={6} />
          <br />
          <br />
          <WarningIcon w={8} h={8} color="red.500" />
          <br />
        </Box>
        <Box bg="#000" as="section" py={{ base: "4", md: "8" }}>
          <Tabs color="rgba(255, 255, 255, 0.36)" variant="soft-rounded">
            <TabList>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box bg="#000" as="section" py={{ base: "4", md: "8" }}>
          <Tabs
            color="rgba(255, 255, 255, 0.36)"
            variant="soft-rounded"
            colorScheme="green"
          >
            <TabList>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box bg="#000" as="section" py={{ base: "4", md: "8" }}>
          <Tabs color="rgba(255, 255, 255, 0.36)">
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
              <Tab>Three</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Stack spacing={4} direction="row" align="center">
          <Button colorScheme="yellow" size="xs">
            Button
          </Button>
          <Button colorScheme="yellow" size="sm">
            Button
          </Button>
          <Button colorScheme="yellow" size="md">
            Button
          </Button>
          <Button colorScheme="yellow" size="lg">
            Button
          </Button>
        </Stack>
        <Stack spacing={4} direction="row" align="center">
          <Button colorScheme="yellow" size="xs" disabled>
            Button
          </Button>
          <Button colorScheme="yellow" size="sm" disabled>
            Button
          </Button>
          <Button colorScheme="yellow" size="md" disabled>
            Button
          </Button>
          <Button colorScheme="yellow" size="lg" disabled>
            Button
          </Button>
        </Stack>
        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="yellow" variant="solid">
            Button
          </Button>
          <Button colorScheme="yellow" variant="outline">
            Button
          </Button>
          <Button colorScheme="yellow" variant="ghost">
            Button
          </Button>
        </Stack>
        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="yellow" variant="solid" disabled>
            Button
          </Button>
          <Button colorScheme="yellow" variant="outline" disabled>
            Button
          </Button>
          <Button colorScheme="yellow" variant="ghost" disabled>
            Button
          </Button>
        </Stack>
        <Button colorScheme="yellow" onClick={onOpen}>
          Delete Customer
        </Button>
        <AlertDialog
          isOpen={isOpen}
          // @ts-ignore
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent bg="rgba(255, 255, 255, 0.08)" filter="">
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Customer
              </AlertDialogHeader>
              <AlertDialogCloseButton bg="transparent !important" />
              <AlertDialogBody>
                {"Are you sure? You can't undo this action afterwards."}
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button colorScheme="yellow" variant="outline">
                  Cancel
                </Button>
                <Button
                  colorScheme="yellow"
                  size="md"
                  onClick={onClose}
                  style={{ marginLeft: "12px" }}
                >
                  Button
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
        <VStack spacing={6}>
          <HStack spacing={6}>
            <Tooltip
              hasArrow
              label="Left start"
              placement="left-start"
              bg="#2a2a2a"
              fontSize={"14px"}
              borderRadius="4px"
            >
              <Button colorScheme="yellow" size="md">
                Left-Start
              </Button>
            </Tooltip>

            <Tooltip
              hasArrow
              label="Left"
              placement="left"
              bg="#2a2a2a"
              fontSize={"14px"}
              borderRadius="4px"
            >
              <Button colorScheme="yellow" size="md">
                Left
              </Button>
            </Tooltip>

            <Tooltip
              hasArrow
              label="Left end"
              placement="left-end"
              bg="#2a2a2a"
              fontSize={"14px"}
              borderRadius="4px"
            >
              <Button colorScheme="yellow" size="md">
                Left-End
              </Button>
            </Tooltip>
          </HStack>
        </VStack>
        <IconButton
          colorScheme="yellow"
          aria-label="Call Segun"
          size="lg"
          icon={<PhoneIcon />}
        />
        <IconButton
          colorScheme="yellow"
          aria-label="Call Segun"
          size="lg"
          icon={<PhoneIcon />}
          disabled
        />
        <Stack spacing={5} direction="row">
          <Checkbox defaultChecked>Checkbox</Checkbox>
          <Checkbox isDisabled>Checkbox</Checkbox>
          <Checkbox isDisabled defaultChecked>
            Checkbox
          </Checkbox>
        </Stack>
        <Container py={{ base: "4", md: "8" }} px={{ base: "0", md: 8 }}>
          <Box
            // bg="bg-surface"
            boxShadow={{ base: "none", md: useColorModeValue("sm", "sm-dark") }}
            borderRadius={useBreakpointValue({ base: "none", md: "lg" })}
          >
            <Stack spacing="5">
              <Box px={{ base: "4", md: "6" }} pt="5">
                <Stack
                  direction={{ base: "column", md: "row" }}
                  justify="space-between"
                >
                  {/* <Text fontSize="lg" fontWeight="medium">
                    Members
                  </Text>
                  <InputGroup maxW="xs">
                    <InputLeftElement pointerEvents="none">
                      <Icon as={FiSearch} color="muted" boxSize="5" />
                    </InputLeftElement>
                    <Input placeholder="Search" />
                  </InputGroup> */}
                </Stack>
              </Box>
              <Box overflowX="auto">
                <MemberTable />
              </Box>
              {/* <Box px={{ base: "4", md: "6" }} pb="5">
                <HStack spacing="3" justify="space-between">
                  {!isMobile && (
                    <Text color="muted" fontSize="sm">
                      Showing 1 to 5 of 42 results
                    </Text>
                  )}
                  <ButtonGroup
                    spacing="3"
                    justifyContent="space-between"
                    width={{ base: "full", md: "auto" }}
                    variant="secondary"
                  >
                    <Button>Previous</Button>
                    <Button>Next</Button>
                  </ButtonGroup>
                </HStack>
              </Box> */}
            </Stack>
          </Box>
        </Container>
        <Stack spacing={3}>
          <Input
            focusBorderColor="lime"
            placeholder="Here is a sample placeholder"
          />
          <Input
            focusBorderColor="mirror.base !important"
            placeholder="Here is a sample placeholder"
          />
          <Input
            isInvalid
            // errorBorderColor="red.300"
            placeholder="Here is a sample placeholder"
          />
          <Input
            disabled
            // errorBorderColor="red.300"
            placeholder="Here is a sample placeholder"
          />
        </Stack>
        <NumberInput defaultValue={15} max={30} clampValueOnBlur={false}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio value="1">First</Radio>
            <Radio value="2">Second</Radio>
            <Radio value="3" isDisabled>
              Third
            </Radio>
          </Stack>
        </RadioGroup>
        <Button onClick={onOpen} color="#000">
          Open Modal
        </Button>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen2}
          onClose={onClose2}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} placeholder="First name" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Last name" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose2}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Stack spacing={3}>
          <Stack mt={1} spacing={1} className="dropdown">
            <Checkbox size="md" height={"40px"} padding="8px 16px">
              Child Checkbox 1
            </Checkbox>
            <Checkbox size="md" height={"40px"} padding="8px 16px">
              Child Checkbox 2
            </Checkbox>
            <Checkbox size="md" height={"40px"} padding="8px 16px">
              Child Checkbox 3
            </Checkbox>
            <Checkbox
              disabled
              size="md"
              defaultChecked
              height={"40px"}
              padding="8px 16px"
            >
              Child Checkbox 4
            </Checkbox>
            <Checkbox disabled size="md" height={"40px"} padding="8px 16px">
              Child Checkbox 4
            </Checkbox>
          </Stack>
          <Stack
            mt={1}
            // spacing={1}
            className="dropdown"
            bg="rgba(255, 255, 255, 0.08) !important"
            width="320px"
          >
            <Checkbox size="md" height={"40px"} pl="16px">
              Child Checkbox 1
            </Checkbox>
            <Checkbox size="md" height={"40px"} pl="16px">
              Child Checkbox 2
            </Checkbox>
          </Stack>
        </Stack>
        <Stack spacing={3}>
          <Select placeholder="Select option">
            <option value="option1">1123456</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Stack>
      </main>
    </div>
  );
}
