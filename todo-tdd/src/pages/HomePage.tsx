import {useState} from 'react';
import {Button, Container, Typography, List, ListItem, ListItemText, Box, TextField} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../features/counter/counter.slice.ts";
import {RootState} from "../app/store.ts";
import {addTodo} from "../features/todo/todo.slice.ts";

export default function HomePage() {
    const counterValue = useSelector((state: RootState) => state.counter.value ?? 0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    const [text, setText] = useState<string>();
    const todosValue = useSelector((state: RootState) => state.todos.todos ?? []);
    const dispatch = useDispatch();
    return (
        <Container style={{
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
        }}>
            <Typography color='primary.main'>할 일 목록</Typography>
            <List sx={{height: '400px', overflowY: 'auto'}}>
                {todosValue.map((task, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={task}/>
                    </ListItem>
                ))}
            </List>
            <TextField
                value={text}
                onChange={handleChange}
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addTodo(text!));
                }}
            />
            <Button
                variant="outlined"
                sx={{
                    backgroundColor: 'primary.main', // 버튼 배경색
                    color: '#fff', // 버튼 텍스트 색상
                }}
                onClick={() => {
                    console.log(text);
                    if (text!.trim() === '')
                        return;
                    dispatch(addTodo(text!));
                    setText('');
                }}
            >
                할 일 추가
            </Button>
            <Typography color='primary.main' sx={
                {
                    fontSize: '24px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }
            }>현재 값 : {counterValue}</Typography>
            <Box sx={
                {
                    display: 'flex',
                    flexDirection: "row",
                    gap: "8px",
                }
            }>
                <Button
                    variant="outlined"
                    sx={{
                        backgroundColor: 'primary.main', // 버튼 배경색
                        color: '#fff', // 버튼 텍스트 색상
                        display: 'flex',
                        width: '100%',
                    }}
                    onClick={() => dispatch(increment())}
                >
                    증가
                </Button>
                <Button
                    variant="outlined"
                    sx={{
                        backgroundColor: 'primary.main', // 버튼 배경색
                        color: '#fff', // 버튼 텍스트 색상
                        display: 'flex',
                        width: '100%',
                    }}
                    onClick={() => dispatch(decrement())}
                >
                    감소
                </Button>
            </Box>
        </Container>
    );
}
