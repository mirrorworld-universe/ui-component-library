import {
  Avatar,
  Badge,
  Box,
  Checkbox,
  HStack,
  Icon,
  IconButton,
  Table,
  TableProps,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import * as React from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { IoArrowDown } from "react-icons/io5";
import { Rating } from "./Rating";
import { members } from "../data/tableData";

const MembeTable = (props: TableProps) => (
  <Table {...props}>
    <Thead>
      <Tr>
        <Th>
          <HStack spacing="3">
            <Checkbox />
            <HStack
              spacing="1"
              color={"fontColor.base"}
              fontWeight="700 !important"
            >
              <Text>Name</Text>
              <Icon as={IoArrowDown} boxSize="4" />
            </HStack>
          </HStack>
        </Th>
        <Th color={"fontColor.base"} fontWeight="700 !important">
          Status
        </Th>
        <Th color={"fontColor.base"} fontWeight="700 !important">
          Email
        </Th>
        <Th color={"fontColor.base"} fontWeight="700 !important">
          Role
        </Th>
        <Th color={"fontColor.base"} fontWeight="700 !important">
          Rating
        </Th>
        <Th color={"fontColor.base"} fontWeight="700 !important"></Th>
      </Tr>
    </Thead>
    <Tbody>
      {members.map((member) => (
        <Tr key={member.id}>
          <Td>
            <HStack spacing="3">
              <Checkbox />
              <Avatar name={member.name} src={member.avatarUrl} boxSize="10" />
              <Box>
                <Text fontWeight="medium">{member.name}</Text>
                <Text color={"fontColor.36 !important"}>{member.handle}</Text>
              </Box>
            </HStack>
          </Td>
          <Td>
            <Badge
              size="sm"
              // colorScheme={
              //   member.status === "active" ? "{color: red !important}" : "red"
              // }
              color={"#000 !important"}
              fontWeight="700 !important"
              fontSize="12px !important"
              lineHeight="16px !important"
              padding="1px 4px !important"
              bg={
                member.status === "active"
                  ? "mirror.base !important"
                  : "rgba(255, 255, 255, 0.48) !important"
              }
              borderRadius="2px !important"
            >
              {member.status}
            </Badge>
          </Td>
          <Td>
            <Text
              color={"fontColor.base !important"}
              fontWeight={"400 !important"}
            >
              {member.email}
            </Text>
          </Td>
          <Td>
            <Text
              color={"fontColor.base !important"}
              fontWeight={"400 !important"}
            >
              {member.role}
            </Text>
          </Td>
          <Td>
            <Text color={"fontColor.base !important"}>
              <Rating defaultValue={member.rating} size="xl" />
            </Text>
          </Td>
          <Td>
            <HStack spacing="1">
              <IconButton
                icon={<FiTrash2 fontSize="1.25rem" />}
                variant="ghost"
                aria-label="Delete member"
              />
              <IconButton
                icon={<FiEdit2 fontSize="1.25rem" />}
                variant="ghost"
                aria-label="Edit member"
              />
            </HStack>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);
export default MembeTable;
