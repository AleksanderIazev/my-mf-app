import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import { useGetWaitingDataQuery } from "../../api/waitingApi";
import styles from "./tabs.module.scss";

const cn = require("classnames");

export const Waiting = () => {
  const { data, isLoading, refetch } = useGetWaitingDataQuery();

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <TableContainer component={Paper}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell align="right">ИНН</TableCell>
              <TableCell align="right">КПП</TableCell>
              <TableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.waitingList.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.inn}</TableCell>
                <TableCell align="right">{row.kpp}</TableCell>
                <TableCell align="right">
                  <button className={cn(styles.tableButton)}>
                    Оставить отзыв
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};
