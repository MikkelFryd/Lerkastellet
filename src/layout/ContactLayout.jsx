import { useForm } from 'react-hook-form'
import { useState } from 'react';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Textarea,
  Button,
  Heading,
  Container
} from '@chakra-ui/react'

export const ContactLayout = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting}, } = useForm();
  const [feedbackText, setFeedbackText] = useState("");

  const onSubmit = (data) => sendFormData(data);

  const sendFormData = (data) => {
    if (data.name && data.email && data.email) {
      const fetchOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const clientUrl =
        "https://public.herotofu.com/v1/469a7e40-28ac-11ee-8058-515da3888232";

      fetch(clientUrl, fetchOptions)
        .then((res) => {
          if (!res.ok) {
            setFeedbackText("Beskeden blev ikke sendt. Prøv igen");
          } else {
            setFeedbackText(
              `Tak for din besked ${data.name}. Jeg vender tilbage med et svar på din forespørgsel`
            );
          }
        })
        .then();
    } else {
      setFeedbackText(
        "Beskeden blev ikke sendt. Vær sikker på alle felter er udfyldt."
      );
    }
  };

  return (
    <Container id="contact" w={"100%"} maxW="100vw" minH={"40vh"} bg="grey" color="white">
      <Heading fontSize={{ base: "24px", md: "40px", lg: "56px"}} p={"1em"} as={"h2"} color="white">KONTAKT</Heading>
      {feedbackText !== "" && <h4 style={{padding: "1rem"}}>{feedbackText}</h4>}
      <div style={{width: "80%", margin: "auto"}} >
        <form style={{width: "60vw", height: "80vh", margin: "auto"}} onSubmit={handleSubmit(onSubmit)}>
            <FormControl style={{display: "grid"}} isInvalid={errors.name} h={"100%"}>
                <FormLabel aria-label="name" htmlFor="name" fontSize={{ base: "12px", md: "40px", lg: "18px"}}>
                    NAVN
                    <Input style={{cursor: "default"}} {...register("name", { required: true })} />
                </FormLabel>
                <FormLabel aria-label="email" htmlFor="email" fontSize={{ base: "12px", md: "40px", lg: "18px"}}>
                    EMAIL
                    <Input style={{cursor: "default"}} type="email" {...register("email", { required: true })} />
                </FormLabel>
                <FormErrorMessage fontSize={{ base: "12px", md: "40px", lg: "56px"}}>
                    {errors.name && errors.name.message}
                </FormErrorMessage>

                <FormLabel aria-label="message" htmlFor="message" fontSize={{ base: "12px", md: "40px", lg: "18px"}}>
                    BESKED
                    <Textarea
                    style={{cursor: "default"}}
                    h={"40vh"}
                    type="textfield"
                    {...register("message", { required: true })}
                    />
                </FormLabel>
                <Button fontSize={{ base: "12px", md: "40px", lg: "18px"}} w={"10%"} type="submit" isLoading={isSubmitting} value="SEND">SEND</Button>
            </FormControl>
        </form>

      </div>
    </Container>
  );
};
