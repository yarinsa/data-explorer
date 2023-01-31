import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FC, useCallback, useState } from "react";

type GraphFilters = {
    color?: string;
}

type Props = {
    initialFilters: GraphFilters;
    options: {
        colors?: string[];
    }
    onFiltersChange?: (filters: GraphFilters) => unknown;
}

const GraphFilters: FC<Props> = ({ initialFilters, options, onFiltersChange } = { options: {}, initialFilters: {} }) => {

    const { color } = initialFilters ?? {};
    const { colors } = options;

    return (
        <Box sx={{ minWidth: 120 }}>
            {options.colors && <FormControl fullWidth>
                <InputLabel id="color-filter-label">Color</InputLabel>
                <Select
                    labelId="color-filter-label"
                    value={color ?? ''}
                    label="Color"
                    onChange={(e) => onFiltersChange?.({ color: e.target.value as string })}
                >
                    {colors?.map(color => <MenuItem key={color} value={color}>{color}</MenuItem>)}
                </Select>
            </FormControl>}
        </Box>
    )
}

export default GraphFilters;