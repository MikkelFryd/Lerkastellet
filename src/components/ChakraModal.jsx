/* eslint-disable react/prop-types */
import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Image,
  HStack,
  useTheme,
} from "@chakra-ui/react";

export const ChakraModal = (props) => {
  const theme = useTheme();

  console.log(theme);
  return (
    <>
      <Modal
        size={"xl"}
        isOpen={props.isOpen}
        onClose={props.onClose}
        isCentered
      >
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
        <ModalContent>
          <ModalHeader>{props.selectedItem.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={props.selectedItem.image.url} />
          </ModalBody>
          <ModalFooter>
            <HStack spacing={"2rem"}>
              <Text fontSize={{ base: "12px", md: "40px", lg: "24px" }}>
                BREDDE: {props.selectedItem.width}cm
              </Text>
              <Text fontSize={{ base: "12px", md: "40px", lg: "24px" }}>
                HØJDE: {props.selectedItem.height}cm
              </Text>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
