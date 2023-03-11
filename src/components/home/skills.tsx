import { Box, VStack, Heading, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, List, ListItem, ListIcon } from "@chakra-ui/react";
import { BsCheck2All, BsCheck } from "react-icons/bs";

const Skills = () => {
  return (
    <VStack alignItems={"stretch"} flex={1}>
      <Heading fontSize={"3xl"} fontWeight={"medium"}>
        Skills
      </Heading>
      <Accordion allowToggle defaultIndex={[0]}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Fundamental Programming Concept
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={BsCheck2All} color="green.500" />
                Programming Principles
              </ListItem>
              <ListItem>
                <ListIcon as={BsCheck2All} color="green.500" />
                Programming Paradigm
              </ListItem>
              <ListItem>
                <ListIcon as={BsCheck2All} color="green.500" />
                Software Architecture
              </ListItem>
              <ListItem>
                <ListIcon as={BsCheck2All} color="green.500" />
                Algorithm
              </ListItem>
              <ListItem>
                <ListIcon as={BsCheck2All} color="green.500" />
                Data Structure
              </ListItem>
              <ListItem>
                <ListIcon as={BsCheck2All} color="green.500" />
                Data Type
              </ListItem>
              <ListItem>
                <ListIcon as={BsCheck2All} color="green.500" />
                Database Design
              </ListItem>
              <ListItem>
                <ListIcon as={BsCheck2All} color="green.500" />
                Design Pattern
              </ListItem>
              <ListItem>
                <ListIcon as={BsCheck2All} color="green.500" />
                Unit Testing
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Programming Language
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={BsCheck2All} color="green.500" />
                Typescript
              </ListItem>
              <ListItem>
                <ListIcon as={BsCheck2All} color="green.500" />
                PHP
              </ListItem>
              <ListItem>
                <ListIcon as={BsCheck2All} color="green.500" />
                Python
              </ListItem>
              <ListItem>
                <ListIcon as={BsCheck2All} color="green.500" />
                C++
              </ListItem>
              <ListItem>
                <ListIcon as={BsCheck2All} color="green.500" />
                Golang
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Basic Of Cryptography
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={BsCheck} color="green.500" />
                Coming soon...
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Database Management
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={BsCheck} color="green.500" />
                Coming soon...
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
};

export default Skills;
