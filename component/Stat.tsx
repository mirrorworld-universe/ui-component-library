import {
  Box,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import * as React from "react";
import theme from "../theme";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";

interface Props {
  label: string;
  value: string;
  date?: string;
  delta?: {
    value: string;
    isUpwardsTrend: boolean;
  };
}

const Stat = (props: Props) => {
  const { label, value, date, delta, ...boxProps } = props;
  console.log(boxProps, "date");
  return (
    <Box
      px={{ base: "4", md: "6" }}
      py={{ base: "5", md: "6" }}
      bg="rgba(255, 255, 255, 0.08);"
      borderRadius="lg"
      boxShadow={useColorModeValue("sm", "sm-dark")}
      {...boxProps}
    >
      <Stack>
        <Text
          // fontSize="14px"
          color="fontColor.base"
          fontSize="sm"
          // lineHeight="20px"
        >
          {label}
        </Text>
        <Heading
          color="fontColor.base"
          fontSize="24"
          fontWeight={600}
          lineHeight="fontSize.24"
        >
          {value}
        </Heading>
        {date ? (
          <Text color="fontColor.80" marginTop="4px !important" fontSize="sm">
            {date}
          </Text>
        ) : (
          ""
        )}
        {delta ? (
          <Text color="fontColor.80" marginTop="4px !important" fontSize="sm">
            <Icon
              marginRight="9px"
              color={!delta.isUpwardsTrend ? "green.400" : "red.400"}
              width="10px"
              marginTop={!delta.isUpwardsTrend ? "-5px" : "0px"}
              as={delta.isUpwardsTrend ? TriangleDownIcon : TriangleUpIcon}
            />
            {delta.value}
          </Text>
        ) : (
          ""
        )}
      </Stack>
    </Box>
  );
};
export default Stat;
