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

function MailCheckbox({ value, checkboxID, callback, disabled }) {
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

function MailInput({ value, onChange }) {
  return (
    <TextInput
      type="text"
      aria-label="mail-input"
      name="mail-input"
      error={value.length > 40 ? "Text should be less than 40 characters" : ""}
      onChange={onChange}
      value={value}
    />
  );
}

export default function MailTable({
  mailData,
}) {
  return (
    <Box
      hasRadius={true}
      padding={8}
    >
      <Table
        colCount={5}
        rowCount={10}
        footer={
          <a href="/content-manager/collectionType/plugin::automail.mail/create">
            <TFooter icon={<Plus /> }>
              Draft an email
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
              <Typography variant="sigma">To</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Subject</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Is Published</Typography>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {mailData.map((mail) => {
            const [inputValue, setInputValue] = useState(mail.name);

            const [isEdit, setIsEdit] = useState(false);

            return (
              <Tr key={mail.id}>
                <Td>
                  <Typography textColor="neutral800">{mail.id}</Typography>
                </Td>

                <Td>
                  {isEdit ? (
                    <MailInput
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  ) : (
                    <Typography textColor="neutral800">{mail.name}</Typography>
                  )}
                </Td>

                <Td>
                  {isEdit ? (
                    <MailInput
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  ) : (
                    <Typography textColor="neutral800">{mail.subject}</Typography>
                  )}
                </Td>

                <Td>
                  <MailCheckbox
                    value={mail.publishedAt}
                    checkboxID={mail.id}
                    disabled={isEdit}
                  />
                </Td>

                <Td>
                  {isEdit ? (
                    <Flex style={{ justifyContent: "end" }}>
                      <Button
                        onClick={() => editMail(mail.id, { name: inputValue })}
                      >
                        Save
                      </Button>
                    </Flex>
                  ) : (
                    <Flex style={{ justifyContent: "end" }}>
                      <a href="/content-manager/collectionType/plugin::automail.mail/1">
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