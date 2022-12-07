import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

interface Props {
  data: Array<any>;
  column: [
    {
      title: string;
      dataIndex: string;
      key: string;
    }
  ];
}

const MirrorTable = (props: Props) => {
  const { data, column, ...tableProps } = props;
  return (
    <TableContainer
      whiteSpace="nowrap"
      bg="rgba(255, 255, 255, 0.08) !important"
      borderRadius="12px"
      padding="12px"
    >
      <Table {...tableProps}>
        <Thead>
          <Tr
            color="rgba(255, 255, 255, 0.48) !important"
            fontSize={"12px !important"}
            background="transparent !important"
            borderTop="none"
            borderColor="rgba(255, 255, 255, 0.08) !important"
          >
            {column.map((item) => {
              return (
                <Th
                  color="rgba(255, 255, 255, 0.48) !important"
                  fontSize={"12px !important"}
                  background="transparent !important"
                  borderTop="none"
                  borderColor="rgba(255, 255, 255, 0.08) !important"
                >
                  {item?.title || ""}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => {
            return (
              <Tr>
                {column.map((childitem, childIndex) => {
                  return (
                    <Td
                      bg={
                        index % 2 === 0 &&
                        tableProps?.variant &&
                        tableProps?.variant === "striped"
                          ? "rgba(255, 255, 255, 0.04) !important"
                          : ""
                      }
                      fontSize="14px !important"
                      fontWeight="500 !important"
                      lineHeight="20px !important"
                      color="#FFFFFF !important"
                      border={
                        index === data.length - 1 ? "none !important" : ""
                      }
                    >
                      {item[childitem.dataIndex]}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default MirrorTable;
