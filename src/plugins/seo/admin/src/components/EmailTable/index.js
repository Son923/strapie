import React, { useState } from "react";
import {
  Table,
  Thead,
  TFooter,
  Tbody,
  Tr,
  Td,
  Th,
} from "@strapi/design-system/Table";
import { Box } from "@strapi/design-system/Box";
import { Flex } from "@strapi/design-system/Flex";
import { Button } from "@strapi/design-system/Button";
import { Typography } from "@strapi/design-system/Typography";
import { IconButton } from "@strapi/design-system/IconButton";
import { BaseCheckbox } from "@strapi/design-system/BaseCheckbox";
import { TextInput } from "@strapi/design-system/TextInput";
import Pencil from "@strapi/icons/Pencil";
import Trash from "@strapi/icons/Trash";
import Plus from "@strapi/icons/Plus";

function EmailCheckbox({ value, checkboxID, callback, disabled }) {
  const [isChecked, setIsChecked] = useState(value);

  function handleChange() {
    setIsChecked(!isChecked);
    {
      callback && callback({ id: checkboxID, value: !isChecked });
    }
  }

  return (
    <BaseCheckbox
      checked={isChecked}
      onChange={handleChange}
      disabled={disabled}
    />
  );
}

function EmailInput({ value, onChange }) {
  return (
    <TextInput
      type="text"
      aria-label="email-input"
      name="email-input"
      error={value.length > 40 ? "Text should be less than 40 characters" : ""}
      onChange={onChange}
      value={value}
    />
  );
}

export default function EmailTable({
  emailData,
}) {
  return (
    <Box
      hasRadius={true}
      padding={8}
    >
      <Table
        colCount={4}
        rowCount={10}
        footer={
          <a href="/content-manager/collectionType/plugin::automail.mail/create">
            <TFooter icon={<Plus /> }>
              Add and email
            </TFooter>
          </a>
        }
      >
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">ID</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Email</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Status</Typography>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {emailData.map((email) => {
            const [inputValue, setInputValue] = useState(email.name);

            const [isEdit, setIsEdit] = useState(false);

            return (
              <Tr key={email.id}>
                <Td>
                  <Typography textColor="neutral800">{email.id}</Typography>
                </Td>

                <Td>
                  {isEdit ? (
                    <EmailInput
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  ) : (
                    <Typography textColor="neutral800">{email.title}</Typography>
                  )}
                </Td>

                <Td>
                  <EmailCheckbox
                    value={email.publishedAt}
                    checkboxID={email.id}
                    callback={toggleEmail}
                    disabled={isEdit}
                  />
                </Td>

                <Td>
                  {isEdit ? (
                    <Flex style={{ justifyContent: "end" }}>
                      <Button
                        onClick={() => editEmail(email.id, { name: inputValue })}
                      >
                        Save
                      </Button>
                    </Flex>
                  ) : (
                    <Flex style={{ justifyContent: "end" }}>
                      <a href="/content-manager/collectionType/plugin::seo.email/1">
                        <IconButton
                          onClick={() => setIsEdit(true)}
                          label="Edit"
                          noBorder
                          icon={<Pencil />}
                        />
                      </a>
                      

                      <Box paddingLeft={1}>
                        <IconButton
                          label="Delete"
                          noBorder
                          icon={<Trash />}
                        />
                      </Box>
                    </Flex>
                  )}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}