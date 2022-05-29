import React, { useState } from "react";

import {
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Typography,
  Button,
  TextInput,
} from "@strapi/design-system";

export default function EmailModal({ setShowModal, addEmail }) {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    // Prevent submitting parent form
    e.preventDefault();
    e.stopPropagation();

    try {
      await addEmail({ subject: subject, content: content });
      setShowModal(false);
    } catch (e) {
      console.log("error", e);
    }
  };

  const getError = () => {
    // Form validation error

    if (subject.length > 40) {
      return "Subject is too long";
    }

    return null;
  };

  return (
    <ModalLayout
      onClose={() => setShowModal(false)}
      labelledBy="title"
      as="form"
      onSubmit={handleSubmit}
    >
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          Add email
        </Typography>
      </ModalHeader>

      <ModalBody>
        <TextInput
          placeholder="What do you need to do?"
          label="Subject"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        />
        <TextInput
          placeholder="What do you need to do?"
          label="Content"
          name="text"
          hint=""
          error={getError()}
          onChange={(e) => setContent(e.target.value)}
          value={subject}
        />
      </ModalBody>

      <ModalFooter
        startActions={
          <Button onClick={() => setShowModal(false)} variant="tertiary">
            Cancel
          </Button>
        }
        endActions={<Button type="submit">Add email</Button>}
      />
    </ModalLayout>
  );
};
