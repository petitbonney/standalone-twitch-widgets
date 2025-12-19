import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from "react";

const Home = ({ widgets }) => {
  const [widget, setWidget] = useState("");
  return (
    <FormControl fullWidth>
      <InputLabel id="widget-select-label">Widget</InputLabel>
      <Select
        labelId="widget-select-label"
        id="widget-select"
        value={widget}
        label="Widget"
        onChange={(e) => setWidget(e.target.value)}
      >
        {widgets.map((w) => (
          <MenuItem value={w}>{w.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Home;
