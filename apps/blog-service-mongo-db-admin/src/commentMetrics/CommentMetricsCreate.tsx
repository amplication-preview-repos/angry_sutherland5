import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CommentMetricsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="commentId" source="commentId" />
        <NumberInput step={1} label="likes" source="likes" />
        <NumberInput step={1} label="spamReports" source="spamReports" />
      </SimpleForm>
    </Create>
  );
};
