import * as React from 'react';
import { Box, List, ListItem, Button } from '@mui/material'
import { data } from '../Data';

export default function NavList() {
    return(
        <List>
            {data.map((data, key) => {
                return(
                    <ListItem key={key}>
                        <Button>
                            {data.title}
                        </Button>
                    </ListItem>
                )
            })}
        </List>
    )
}
