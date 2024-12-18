'use client';
import {
  Button,
  Input,
  Textarea,
  Card,
  Select,
  SelectItem,
  SelectSection,
} from '@nextui-org/react';
import { FC } from 'react';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Checkbox,
  Link,
} from '@nextui-org/react';

const CreatePost: FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button color="primary" onPress={onOpen}>
        Create Post
      </Button>
      <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create Post
              </ModalHeader>
              <ModalBody>
                <div className="flex justify-center items-center ">
                  <Card className="w-full max-w-lg p-8 rounded-lg shadow-md">
                    <Select
                      label="Select "
                      placeholder="Select "
                      className="max-w-xs mb-6"
                      variant="underlined"
                    >
                      <SelectSection showDivider title="JS">
                        <SelectItem key="a1">404 NOT FOUND</SelectItem>
                        <SelectItem key="b1">no packages</SelectItem>
                        <SelectItem key="c1">Error 5293</SelectItem>
                        <SelectItem key="d1">59t85 not found</SelectItem>
                      </SelectSection>
                      <SelectSection title="C#">
                        <SelectItem key="a">Error 491</SelectItem>
                        <SelectItem key="b">Error 583</SelectItem>
                        <SelectItem key="c">Conflicts .NET</SelectItem>
                      </SelectSection>
                    </Select>

                    <form className="space-y-4">
                      {/* Заголовок поста */}
                      <div>
                        <label className="block  text-sm font-semibold mb-2">
                          Title
                        </label>
                        <Input
                          isClearable
                          variant="bordered"
                          fullWidth
                          placeholder="Enter your title here"
                          aria-label="Post Title"
                          className=""
                        />
                      </div>

                      {/* Описание поста */}
                      <div>
                        <label className="block  text-sm font-semibold mb-2">
                          Description
                        </label>
                        <Textarea
                          variant="bordered"
                          fullWidth
                          placeholder="Write something interesting..."
                          aria-label="Post Description"
                          rows={5}
                          className=""
                        />
                      </div>
                    </form>
                  </Card>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePost;
