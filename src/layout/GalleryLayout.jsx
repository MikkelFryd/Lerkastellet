import {
  Container,
  Button,
  SimpleGrid,
  Image,
  Spinner,
  useDisclosure,
  Heading,
  useTheme,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { graphQLClient } from "../graphqlClient";
import { getProductsByCategory } from "../requests/getProductsByCategory";
import { getCategories } from "../requests/getCategories";
import { useState } from "react";
import { ChakraModal } from "../components/ChakraModal";

export const GalleryLayout = () => {
  const [category, setCategory] = useState("kopper");
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedItem, setSelecetedItem] = useState("");
  const theme = useTheme();

  console.log(theme.fontFamily);

  const catQuery = useQuery({
    queryKey: ["getCategories"],
    queryFn: async () => await graphQLClient.request(getCategories),
  });

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["getProductsByCategory", category],
    queryFn: async () =>
      await graphQLClient.request(getProductsByCategory, {
        category: category,
      }),
  });
  const cleanArr = (arr) => {
    const flatArr = arr.flatMap((item) => item.category);
    const catSet = [...new Set(flatArr)];
    return catSet.map((item, index) => {
      return (
        <Button
          fontSize={["sm", "md", "lg", "xl"]}
          w={"100%"}
          p={"1em"}
          color={"white"}
          colorScheme="gray"
          variant="outline"
          key={index}
          onClick={() => setCategory(item)}
        >
          {item}
        </Button>
      );
    });
  };

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Container id="gallery" maxW="100vw" minH="80vh" bg="#75655f" color="white">
      <Heading
        p={"1em"}
        fontSize={{ base: "24px", md: "40px", lg: "56px" }}
        as={"h2"}
        fontFamily={theme.fonts.heading}
        fontWeight={"300"}
      >
        GALLERI
      </Heading>
      <SimpleGrid
        minChildWidth="5em"
        spacing={4}
        columns={6}
        alignItems={"center"}
        paddingBottom={"2em"}
      >
        {catQuery?.data?.productCollection?.items
          ? cleanArr(catQuery.data.productCollection.items)
          : null}
      </SimpleGrid>
      <SimpleGrid minChildWidth="6em" spacing={5} justifyItems={"center"}>
        {data.productCollection.items.map((item, index) => {
          return (
              <Image
                key={index}
                cursor={"pointer"}
                w={"24vw"}
                h={"100%"}
                onClick={() => {
                  setSelecetedItem(item), onOpen();
                }}
                src={item.image.url}
                alt={item.title}
              />
          );
        })}
      </SimpleGrid>
      <>
        {selectedItem ? (
          <ChakraModal
            isOpen={isOpen}
            onClose={onClose}
            selectedItem={selectedItem}
          />
        ) : null}
      </>
    </Container>
  );
};
