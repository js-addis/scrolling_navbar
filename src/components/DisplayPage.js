import * as React from 'react';
import { Box } from '@mui/material';
import { data } from '../Data'

export default function DisplayPage() {
    return(
        <Box>
            <Box sx={{height: '100px', width: '100%', backgroundColor: 'orange', position: 'fixed'}}></Box>
            <Box>
                {data.map((data, key) => {
                    return(
                        <Box key={key} width={data.wdith} height={data.height}>
                            {data.pageData}
                        </Box>
                    )
                })}
            </Box>
        </Box>
        
    )
}