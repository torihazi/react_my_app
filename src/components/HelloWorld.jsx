import { motion } from "framer-motion";
import { styled } from "styled-components";

export const HelloWorld = () => {
  const words = "Hello World";

  return (
    <SDiv>
      {words.split("").map((key, value) => (
        <motion.span
          key={value}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: value * 0.05,
            repeat: Infinity,
          }}
        >
          {key}
        </motion.span>
      ))}
    </SDiv>
  );
};

const SDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;
