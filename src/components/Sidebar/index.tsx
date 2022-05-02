import {
  Box,
  Drawer,
  DrawerContent,
   DrawerOverlay, 
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import SideBarNav from "./SidebarNav";

export function SideBar() {
  const { isOpen, onClose } = useSidebarDrawer();
  
  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent backgroundColor="gray.800" padding="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>
              <DrawerBody>
                <SideBarNav />
              </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SideBarNav />
    </Box>
  );
}
