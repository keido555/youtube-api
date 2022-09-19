import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  personName: string;
  setPersonName: any;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  { id: 1, name: "hoge" },
  { id: 2, name: "huga" },
  { id: 3, name: "hoga" },
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect(props: any) {
  const { personName, setPersonName } = props;

  const theme = useTheme();
  // const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((props) => (
            <MenuItem
              key={props.id}
              value={props.id}
              style={getStyles(props.name, personName, theme)}
            >
              {props.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p style={{ margin: "10px" }}>{personName[0]}</p>
          <p style={{ margin: "10px" }}>{personName[1]}</p>
          <p style={{ margin: "10px" }}>{personName[2]}</p>
        </div>
      </div>
    </div>
  );
}
