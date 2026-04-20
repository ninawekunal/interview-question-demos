import { Search } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";

type SearchBoxProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBox({ value, handleChange }: SearchBoxProps) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "flex-end",
      }}
    >
      <Search sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      <TextField
        onChange={handleChange}
        value={value}
        className="searchBox"
        label="Search here"
        fullWidth
        variant="standard"
      />
    </Box>
  );
}
