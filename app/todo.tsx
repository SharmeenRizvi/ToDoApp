"use client";
import { Flex, UnorderedList, ListItem, Text, Input, Button, Heading, ListIcon, Box} from '@chakra-ui/react';
import React from 'react'
import { useState } from "react";
import {MdCheckCircle} from "react-icons/md";

export default function Todo() {
  const[tasks, setTasks] = useState([ "Prepare for TypeScript test", "Learn Chakra UI", "Practise Tailwind"]);
  const[Item, setItem] = useState("");
  function removeItem(taskName){
    setTasks(
      tasks.filter((task) => {
        return task != taskName;
      })
    );
  }
  function AddItem(){
    if(Item != "" && !tasks.includes(Item)) {
      let temp = tasks;
      temp.push(Item);
      setTasks(temp);
      setItem("");
    }
  }
  return ( 

    <>
    <Box maxWidth={"800px"} mx={"auto"} mt={"50px"} bg={"pink"} height={"600px"} borderRadius="10px" boxShadow="2xl" bgGradient='linear(to-l, #7928CA, #FF0080)'>
    <Flex  justifyContent={"center"} alignItems="center" flexDirection={"column"}>
      <Heading mb={"15px"} mt={"8px"} color={"black"} fontFamily="serif"> To Do List</Heading>
      <UnorderedList listStyleType={"none"}>
        {tasks.map((task) => {
          return(
          <ListItem key={task.index} m={"10px"}>
             <ListIcon as={MdCheckCircle} color='purple.700' />
            {task}
            <Button shadow={"md"} fontSize={"x-small"} bg="purple.600" color={"white"} size='sm'  ml="10px" onClick={() => {
              removeItem(task);
            }}
            >
               Remove
               </Button>
               </ListItem>
            );
        }
        )}
      </UnorderedList>
      <Input maxWidth={"500px"} m={"10px"} size='sm' variant="filled" placeholder='Add Item' value={Item} onChange ={(e) => {
        setItem(e.target.value);
      }}>
      </Input>
      
      <Button shadow={"md"} color={"white"} m={"10px"} bg="purple.600" size='lg' onClick={AddItem}> Add Item </Button>
    </Flex>
    </Box>
    </>
      ); 
} 
