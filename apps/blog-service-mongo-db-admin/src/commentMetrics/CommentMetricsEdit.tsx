import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CommentMetricsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="commentId" source="commentId" />
        <NumberInput step={1} label="likes" source="likes" />
        <NumberInput step={1} label="spamReports" source="spamReports" />
      </SimpleForm>
    </Edit>
  );
};
