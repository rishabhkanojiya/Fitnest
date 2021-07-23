import { useToast } from "@chakra-ui/react";
import React, { Fragment, useEffect } from "react";
import { PopUpContextType } from "../../constant/Types/Context";
import { ShowPopupContext } from "../../Context";
import { Consume } from "../../Context/Consumer";

interface Props {
  ShowPopupData: PopUpContextType;
}

const Toast = ({ ShowPopupData }: Props) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { showPopup, data, setShowPopup } = ShowPopupData;

  useEffect(() => {
    if (showPopup) {
      toast({
        // title: "Account created.",
        description: data,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      setShowPopup(false);
    }
  }, [showPopup]);

  return <></>;
};

export default Consume(Toast, [ShowPopupContext]);
