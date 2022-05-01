import { Box, Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { pxToAll } from "../utils/theme.utils.js";

export default function InputTodo({ getTodo, handleReset }) {
  const inputRef = React.useRef(null);
  return (
    <Flex
      mt={pxToAll(20)}
      w={pxToAll(450)}
      wrap="nowrap"
      direction={"row"}
      justify="center"
      alignItems="center"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = Object.fromEntries(new FormData(e.target).entries());
          getTodo({ ...data, isCompleted: false, updatedAt: new Date() });
          inputRef.current.value = "";
        }}
      >
        <FormControl isRequired>
          <Input size={"md"} name="todo" ref={inputRef} />
        </FormControl>
      </form>
      <Button ml={pxToAll(20)} onClick={handleReset}>
        Reset
      </Button>
    </Flex>
  );
}
