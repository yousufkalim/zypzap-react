import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const rows = [
  {
    Rank: 1,
    Game: "Call of Duty",
    Date: "19/01/2022",
    GameLecel: "Medium",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing",
    Votes: "2230 votes",
  },
  {
    Rank: 2,
    Game: "Call of Duty",
    Date: "19/01/2022",
    GameLecel: "Medium",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing",
    Votes: "2230 votes",
  },
  {
    Rank: 3,
    Game: "Call of Duty",
    Date: "19/01/2022",
    GameLecel: "Medium",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing",
    Votes: "2230 votes",
  },
  {
    Rank: 4,
    Game: "Call of Duty",
    Date: "19/01/2022",
    GameLecel: "Medium",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing",
    Votes: "2230 votes",
  },
  {
    Rank: 5,
    Game: "Call of Duty",
    Date: "19/01/2022",
    GameLecel: "Medium",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing",
    Votes: "2230 votes",
  },
  {
    Rank: 6,
    Game: "Call of Duty",
    Date: "19/01/2022",
    GameLecel: "Medium",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing",
    Votes: "2230 votes",
  },
];
const handleVoteClick = (row) => {
  console.log("row is ", row);
};

export default function RankingList() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(tableCellClasses.root);
  return (
    <>
      <div className="rankinglistHeadingDiv">
        <div>
          <p className="rankingListheading">Requests Ranking List</p>
        </div>
        <div className="rankingListheading_input">
          <div style={{ display: "inline-block" }}>
            <input
              style={{
                color: "#fff",
              }}
              type="text"
              placeholder="Search a game"
              className="searchbar"
            />
          </div>
          <FormControl className="form_controll_home">
            <Select
              className="select_fom_home"
              value={age}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="" className="walletInputMenu2">
                <m className="WalletInput2">Filter</m>
              </MenuItem>

              <MenuItem value={10} className="walletInputMenu2">
                Filter
              </MenuItem>

              <MenuItem value={20} className="walletInputMenu2">
                Filter
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl className="form_controll_home">
            <Select
              className="select_fom_home"
              value={age}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="" className="walletInputMenu2">
                <m className="WalletInput2">Sort By</m>
              </MenuItem>

              <MenuItem value={10} className="walletInputMenu2">
                Sort By
              </MenuItem>

              <MenuItem value={20} className="walletInputMenu2">
                Sort By
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table className="setTable">
          <TableHead
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: "none",
                background: "#1D1F38",
                color: "white",
              },
            }}
          >
            <TableRow>
              <TableCell className="headerFirstCell">Rank</TableCell>
              <TableCell className="headergameCell" align="right">
                Game
              </TableCell>
              <TableCell className="headergameCell" align="right">
                Date
              </TableCell>
              <TableCell className="headergameCell" align="right">
                Game Lecel
              </TableCell>
              <TableCell className="headerdescriptionCell" align="right">
                Description
              </TableCell>
              <TableCell className="" align="right">
                Votes
              </TableCell>
              <TableCell className="headerLastCell" align="right">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: "none",
                background: "black",
                color: "white",
              },
            }}
          >
            {rows.map((row) => (
              <TableRow
                key={row.Rank}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor: "black",
                }}
              >
                <TableCell component="th" scope="row">
                  {row.Rank}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.Game}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.Date}
                </TableCell>
                <TableCell className="headergameCell" align="right">
                  {row.GameLecel}
                </TableCell>
                <TableCell className="descriptionCell" align="right">
                  {row.description}
                </TableCell>

                <TableCell align="right">{row.Votes}</TableCell>
                <TableCell align="right">
                  <button
                    className="votebutton"
                    onClick={() => handleVoteClick(row)}
                  >
                    Vote
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
